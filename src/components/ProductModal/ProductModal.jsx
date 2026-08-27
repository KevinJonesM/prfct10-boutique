import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getAvailabilityState, getMaxPurchasableQuantity, getPriceDisplay, getProductBadges } from "../../utils/commerce";
import useModalScrollLock from "../../utils/useModalScrollLock";
import { createWhatsAppLink } from "../../utils/whatsapp";
import ProductReviews, { ProductReviewSummary } from "../Reviews/ProductReviews";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./ProductModal.css";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";
import { localizeOptionGroup, localizeOptionValue } from "../../i18n/catalogOptions";
import { assistedCommerceConfig } from "../../config/commercePrototype";
import {
  findSelectedVariant,
  getInitialOptions,
  getProductModalSections,
  getVariantChoice,
  getVariantGroups
} from "./productModalArchitecture";

const focusableSelector = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

const toList = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
};

const variantKey = (variant, index = 0) =>
  variant?.id || variant?.sku || JSON.stringify(variant?.options || {}) || `variant-${index}`;

const getVariantImage = (product, variant) =>
  variant?.image || product?.variantImages?.[variantKey(variant)] || "";

const unavailableVariantStatuses = new Set([
  "sold-out",
  "soldout",
  "out-of-stock",
  "unavailable",
  "retired",
  "discontinued"
]);

const isVariantSelectable = (variant) =>
  Boolean(variant) &&
  variant.stock !== 0 &&
  !unavailableVariantStatuses.has(String(variant.status || "").toLowerCase());

function AccordionItem({ item, isOpen, onToggle, fallbackQuestion }) {
  const content = toList(item.content);

  return (
    <div className={`product-modal__accordion-item ${isOpen ? "product-modal__accordion-item--open" : ""}`}>
      <button className="product-modal__accordion-header" onClick={onToggle} type="button" aria-expanded={isOpen}>
        <span>{item.title}</span>
        <span className="product-modal__accordion-icon" aria-hidden="true">+</span>
      </button>
      <div className="product-modal__accordion-content">
        {item.type === "faq" ? (
          <div className="product-modal__faq-list">
            {content.map((faq) => (
              <div className="product-modal__faq" key={faq.question || faq}>
                <strong>{faq.question || fallbackQuestion}</strong>
                <p>{faq.answer || faq}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {content.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ProductModal({
  product: sourceProduct,
  onClose,
  onAddToCart,
  onOpenBowDesigner,
  initialSelectedOptions,
  initialVariantId
}) {
  const { locale, t } = useI18n();
  const product = useMemo(() => localizeProduct(sourceProduct, locale), [sourceProduct, locale]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(() => t("modal.about"));
  const [quantity, setQuantity] = useState(1);
  const [fulfillment, setFulfillment] = useState("ship");
  const [selectedOptions, setSelectedOptions] = useState({});
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  useModalScrollLock(Boolean(product));
  const variantGroups = getVariantGroups(product?.variants || []);
  const selectedVariant = findSelectedVariant(product?.variants || [], selectedOptions);

  const galleryProducts = useMemo(() => {
    if (!product) return [];
    const galleryImages = product.galleryImages?.length ? product.galleryImages : product.gallery?.length ? product.gallery : [];
    const images = [getVariantImage(product, selectedVariant), ...galleryImages, product.image].filter(Boolean);
    const uniqueImages = [...new Set(images)];

    if (uniqueImages.length) {
      return uniqueImages.map((image, index) => ({
        ...product,
        id: `${product.id || product.name}-gallery-${index}`,
        image
      }));
    }

    return [product];
  }, [product, selectedVariant]);

  useEffect(() => {
    setActiveSlide(0);
    setOpenAccordion(t("modal.about"));
    setQuantity(1);
    setFulfillment("ship");
    const variants = product?.variants || [];
    const requestedVariantId = initialVariantId || product?.initialVariantId;
    const requestedOptions = initialSelectedOptions || product?.initialSelectedOptions;
    const requestedVariant = requestedVariantId
      ? variants.find((variant, index) =>
          variant.id === requestedVariantId ||
          variant.sku === requestedVariantId ||
          JSON.stringify(variant.options || {}) === requestedVariantId ||
          `variant-${index}` === requestedVariantId
        )
      : null;
    setSelectedOptions(
      requestedVariant?.options
        ? { ...requestedVariant.options }
        : requestedOptions && Object.keys(requestedOptions).length
          ? { ...requestedOptions }
          : product?.forceChooseOptions
            ? {}
            : getInitialOptions(variants)
    );
  }, [initialSelectedOptions, initialVariantId, product, t]);

  useEffect(() => {
    setActiveSlide(0);
  }, [selectedVariant?.id, selectedVariant?.sku, JSON.stringify(selectedVariant?.options || {})]);

  useEffect(() => {
    if (!product) return undefined;

    const previousFocus = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight" && galleryProducts.length > 1) {
        setActiveSlide((current) => (current + 1) % galleryProducts.length);
      }
      if (event.key === "ArrowLeft" && galleryProducts.length > 1) {
        setActiveSlide((current) => (current - 1 + galleryProducts.length) % galleryProducts.length);
      }
      if (event.key === "Tab") {
        const focusableElements = [...(dialogRef.current?.querySelectorAll(focusableSelector) || [])];
        if (!focusableElements.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [galleryProducts.length, onClose, product]);

  if (!product) return null;

  const activeProduct = galleryProducts[activeSlide] || product;
  const productName = product.modalName || product.name;
  const productCategory = product.modalCategory || product.category || product.group || "PRFCT10";
  const productDescription = product.details || product.description || product.commercialDescription || product.cardPhrase;
  const selectedImage = activeProduct.image || getVariantImage(product, selectedVariant) || product.image || product.galleryImages?.[0] || product.gallery?.[0];
  const productImageStyle = selectedImage ? { backgroundImage: `url(${selectedImage})` } : undefined;
  const quickBenefits = toList(product.benefits || product.chips || product.loveList || [productCategory, t("modal.assisted")]);
  const price = getPriceDisplay(product, selectedVariant);
  const localizedPrice = price.current === "Price on request" ? t("product.priceOnRequest") : price.current;
  const availability = getAvailabilityState(product, selectedVariant);
  const maxQuantity = getMaxPurchasableQuantity(product, selectedVariant);
  const productBadges = getProductBadges(product);
  const accordionItems = getProductModalSections(product, quickBenefits, t);
  const supportLink = createWhatsAppLink(productName, locale);
  const allFulfillmentOptions = [
    { id: "ship", title: t("modal.ship"), detail: t("modal.tracked"), meta: t("modal.calculated") },
    { id: "pickup", title: t("modal.pickup"), detail: t("modal.requestPickup"), meta: t("modal.confirmedSupport") },
    { id: "delivery", title: t("modal.local"), detail: t("modal.zip"), meta: t("modal.confirmedSupport") }
  ];
  const fulfillmentOptions = allFulfillmentOptions.filter((option) =>
    assistedCommerceConfig.fulfillmentMethods.includes(option.id)
  );
  const hasInvalidSelection = variantGroups.length > 0 && !selectedVariant;
  const requiresAvailabilityConfirmation = !product.inventoryVerified
    || Boolean(selectedVariant && selectedVariant.stock == null);

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + galleryProducts.length) % galleryProducts.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % galleryProducts.length);
  };

  return createPortal(
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" aria-describedby="product-modal-description">
      <button className="product-modal__overlay" onClick={onClose} aria-label={t("modal.close")} type="button" />
      <div className="product-modal__dialog" ref={dialogRef}>
        <button className="product-modal__close" ref={closeButtonRef} onClick={onClose} type="button" aria-label={t("modal.close")}>
          X
        </button>

        <div className="product-modal__visual" aria-label={t("modal.images", { name: productName })}>
          <div className="product-modal__thumbs" aria-label={t("modal.gallery")}>
            {galleryProducts.map((item, index) => (
              <button
                className={index === activeSlide ? "product-modal__thumb product-modal__thumb--active" : "product-modal__thumb"}
                key={item.id}
                onClick={() => setActiveSlide(index)}
                type="button"
                aria-label={t("modal.image", { number: index + 1, name: productName })}
              >
                {item.image ? <OptimizedImage src={item.image} alt="" loading="lazy" width="160" height="160" /> : <span className={item.imageClass || ""} aria-hidden="true" />}
              </button>
            ))}
          </div>

          <div className="product-modal__image-stage">
            {selectedImage ? (
              <OptimizedImage
                className="product-modal__visual-image product-modal__visual-image--photo"
                src={selectedImage}
                alt={productName}
                loading="eager"
                width="1000"
                height="1000"
              />
            ) : (
              <div className={`product-modal__visual-image ${activeProduct.imageClass || ""}`} style={productImageStyle} />
            )}
            <p className="product-modal__visual-caption">{productName}</p>
            {galleryProducts.length > 1 ? (
              <>
                <button className="product-modal__visual-nav product-modal__visual-nav--prev" onClick={goToPrevious} type="button" aria-label={t("modal.previous")}>
                  &lt;
                </button>
                <button className="product-modal__visual-nav product-modal__visual-nav--next" onClick={goToNext} type="button" aria-label={t("modal.next")}>
                  &gt;
                </button>
              </>
            ) : null}
          </div>
        </div>

        <div className="product-modal__content product-modal__content-panel">
          <p className="product-modal__category">{product.subcategory ? t(`categories.${product.subcategory}`) : productCategory}</p>
          <h2 className="product-modal__title" id="product-modal-title">{productName}</h2>
          <div className="product-modal__commerce">
            <p className="product-modal__price">
              {price.onSale ? (
                <>
                  <strong>{localizedPrice}</strong>
                  <small>{price.regular}</small>
                </>
              ) : (
                <strong>{localizedPrice}</strong>
              )}
            </p>
            <span className={`product-modal__stock product-modal__stock--${availability.tone}`}>{t(availability.labelKey, availability.labelParams)}</span>
            <span>{t("assurances.shipping")}</span>
          </div>
          <ProductReviewSummary productId={product.id} />
          <p className="product-modal__description" id="product-modal-description">{productDescription}</p>

          {product.id === "coquet-lazos-tul" && onOpenBowDesigner ? (
            <button className="product-modal__bow-cta" type="button" onClick={onOpenBowDesigner}>
              {t("bow.productCta")}
            </button>
          ) : null}

          {productBadges.length ? (
            <div className="product-modal__product-badges" aria-label={t("product.badges")}>
              {productBadges.map((badge) => <span key={badge}>{t(`badges.${badge.toLowerCase()}`)}</span>)}
            </div>
          ) : null}

          <div className="product-modal__badges" aria-label={t("modal.quickBenefits")}>
            {quickBenefits.slice(0, 5).map((benefit) => (
              <span className="product-modal__badge" key={benefit}>{benefit}</span>
            ))}
          </div>

          {product.oneSize ? <p className="product-modal__one-size">{localizeOptionValue(locale, product.oneSize)}</p> : null}

          {variantGroups.length ? (
            <div className="product-modal__variants" aria-label={t("modal.options")}>
              {variantGroups.map((group) => (
                <div className="product-modal__variant-group" key={group.name}>
                  <strong>{product.variantLabel || localizeOptionGroup(locale, group.name)}</strong>
                  <div>
                    {group.values.map((value) => {
                      const choiceVariant = getVariantChoice(product.variants || [], group.name, value, selectedOptions);
                      const choicePrice = choiceVariant ? getPriceDisplay(product, choiceVariant) : null;
                      const choiceSelectable = isVariantSelectable(choiceVariant);
                      const choiceCurrent = choicePrice?.current === "Price on request"
                        ? t("product.priceOnRequest")
                        : choicePrice?.current;
                      return (
                        <button
                        className={selectedOptions[group.name] === value ? "product-modal__variant product-modal__variant--active" : "product-modal__variant"}
                        key={value}
                        disabled={!choiceSelectable}
                        onClick={() => {
                          const nextOptions = { ...selectedOptions, [group.name]: value };
                          const nextVariant = findSelectedVariant(product.variants || [], nextOptions);
                          const nextMax = getMaxPurchasableQuantity(product, nextVariant);
                          setSelectedOptions(nextOptions);
                          setActiveSlide(0);
                          if (typeof nextMax === "number") setQuantity((current) => Math.max(1, Math.min(current, nextMax)));
                        }}
                        type="button"
                        aria-pressed={selectedOptions[group.name] === value}
                      >
                        {group.name === "Crown" && getVariantImage(product, choiceVariant) ? (
                          <OptimizedImage
                            className="product-modal__variant-thumb"
                            src={getVariantImage(product, choiceVariant)}
                            alt=""
                            loading="lazy"
                            width="72"
                            height="72"
                          />
                        ) : null}
                        <span>{localizeOptionValue(locale, value)}</span>
                        {choiceCurrent ? <small>{choiceCurrent}</small> : null}
                        {!choiceSelectable ? <small>{t("product.soldOut")}</small> : null}
                      </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {selectedVariant ? (
                <small className="product-modal__variant-meta">
                  {t("product.selected")}: {Object.entries(selectedVariant.options || {})
                    .map(([group, value]) => `${localizeOptionGroup(locale, group)}: ${localizeOptionValue(locale, value)}`)
                    .join(" · ")}
                  {selectedVariant.sku ? ` · SKU: ${selectedVariant.sku}` : ""}
                </small>
              ) : null}
            </div>
          ) : null}

          <div className="product-modal__fulfillment" aria-label={t("modal.delivery")}>
            {fulfillmentOptions.map((option) => (
              <button
                className={fulfillment === option.id ? "product-modal__fulfillment-card product-modal__fulfillment-card--active" : "product-modal__fulfillment-card"}
                key={option.id}
                onClick={() => setFulfillment(option.id)}
                type="button"
                aria-pressed={fulfillment === option.id}
              >
                <strong>{option.title}</strong>
                <span>{option.detail}</span>
                <small>{option.meta}</small>
              </button>
            ))}
          </div>

          <div className="product-modal__buy-box">
            <div className="product-modal__quantity" aria-label={t("modal.quantity", { quantity })}>
              <button type="button" disabled={!availability.canAddToCart || hasInvalidSelection} onClick={() => setQuantity((current) => Math.max(1, current - 1))}>-</button>
              <span>{quantity}</span>
              <button
                type="button"
                disabled={!availability.canAddToCart || hasInvalidSelection || (typeof maxQuantity === "number" && quantity >= maxQuantity)}
                onClick={() => setQuantity((current) => typeof maxQuantity === "number" ? Math.min(maxQuantity, current + 1) : current + 1)}
              >+</button>
            </div>
            <button
              className="product-modal__cta"
              type="button"
              disabled={!availability.canAddToCart || hasInvalidSelection}
              onClick={() => {
                onAddToCart?.({
                  ...product,
                  selectedOptions,
                  selectedVariant,
                  cartPrice: price.numericValue,
                  image: selectedImage || product.image
                }, quantity);
                onClose();
              }}
            >
              {hasInvalidSelection
                ? t("modalSections.unavailableSelection")
                : availability.canAddToCart
                  ? t("modal.addBag")
                  : t(availability.labelKey, availability.labelParams)}
            </button>
          </div>

          <div className="product-modal__trust">
            <span>{t("modal.shipping")}</span>
            <span>{t("modal.returnSupport")}</span>
            {requiresAvailabilityConfirmation ? <span>{t("modal.noPayment")}</span> : null}
          </div>
          <a className="product-modal__support" href={supportLink} target="_blank" rel="noreferrer">
            {t("modal.whatsapp")}
          </a>

          <ProductReviews productId={product.id} />

          <div className="product-modal__accordion">
            {accordionItems.map((item) => (
              <AccordionItem
                item={item}
                fallbackQuestion={t("modal.faqFallback")}
                isOpen={openAccordion === item.title}
                key={item.title}
                onToggle={() => setOpenAccordion((current) => (current === item.title ? "" : item.title))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
