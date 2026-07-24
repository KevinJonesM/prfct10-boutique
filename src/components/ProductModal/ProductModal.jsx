import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { defaultFaqs, defaultModeOfUse } from "../../data/products";
import { getAvailabilityState, getMaxPurchasableQuantity, getPriceDisplay, getProductBadges } from "../../utils/commerce";
import useModalScrollLock from "../../utils/useModalScrollLock";
import { createWhatsAppLink } from "../../utils/whatsapp";
import ProductReviews, { ProductReviewSummary } from "../Reviews/ProductReviews";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./ProductModal.css";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";
import { localizeOptionGroup, localizeOptionValue } from "../../i18n/catalogOptions";

const focusableSelector = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

const normalizeText = (value = "") =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const toList = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
};

const hasSectionContent = (section) => section?.title && toList(section.content).length > 0;

function getVariantGroups(variants = []) {
  const groups = new Map();
  variants.forEach((variant) => {
    Object.entries(variant.options || {}).forEach(([name, value]) => {
      if (!groups.has(name)) groups.set(name, []);
      if (!groups.get(name).includes(value)) groups.get(name).push(value);
    });
  });
  return Array.from(groups.entries()).map(([name, values]) => ({ name, values }));
}

function getInitialOptions(variants = []) {
  return variants[0]?.options ? { ...variants[0].options } : {};
}

function findSelectedVariant(variants = [], selectedOptions = {}) {
  if (!variants.length) return null;
  return variants.find((variant) =>
    Object.entries(selectedOptions).every(([name, value]) => variant.options?.[name] === value)
  ) || variants[0];
}

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

function normalizeSection(section) {
  return {
    ...section,
    content: toList(section.content)
  };
}

function isLifestyleProduct(product) {
  const productText = normalizeText(
    [product.modalType, product.category, product.modalCategory, product.group, product.id, product.name]
      .filter(Boolean)
      .join(" ")
  );

  return [
    "coqueteria",
    "gimnasia mental",
    "ropa",
    "mallas",
    "pulsera",
    "collar",
    "charms",
    "lazos",
    "peluflores",
    "guardapolvos",
    "amuleto"
  ].some((term) => productText.includes(term));
}

function getDefaultSections(product, quickBenefits, t) {
  const customSections = toList(product.modalSections).map(normalizeSection).filter(hasSectionContent);
  if (customSections.length) return customSections;

  if (isLifestyleProduct(product)) {
    return [
      { title: t("modal.about"), content: product.loveList || product.accordionBenefits || quickBenefits },
      { title: t("modal.colors"), content: product.colorsAvailable || product.availableColors || product.colors || t("modal.basedAvailability") },
      {
        title: t("modal.bestFor"),
        content: product.idealFor || product.ideal || t("modal.bestForDefault")
      },
      {
        title: t("modal.ordering"),
        content: [t("modal.addInstruction"), t("modal.supportInstruction"), t("modal.paymentInstruction")]
      }
    ].map(normalizeSection).filter(hasSectionContent);
  }

  return [
    { title: t("modal.about"), content: product.accordionBenefits || quickBenefits },
    { title: t("modal.howUse"), content: product.modeOfUse || defaultModeOfUse },
    { title: t("modal.specifications"), content: product.specifications || quickBenefits },
    { title: t("modal.faq"), type: "faq", content: product.faqs || defaultFaqs },
    { title: t("modal.uses"), content: product.sportsUses || [] }
  ].map(normalizeSection).filter(hasSectionContent);
}

export default function ProductModal({ product: sourceProduct, onClose, onAddToCart }) {
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

  const galleryProducts = useMemo(() => {
    if (!product) return [];
    const galleryImages = product.galleryImages?.length ? product.galleryImages : product.gallery?.length ? product.gallery : [];

    if (galleryImages.length) {
      return galleryImages.map((image, index) => ({
        ...product,
        id: `${product.id || product.name}-gallery-${index}`,
        image
      }));
    }

    return [product];
  }, [product]);

  useEffect(() => {
    setActiveSlide(0);
    setOpenAccordion(t("modal.about"));
    setQuantity(1);
    setFulfillment("ship");
    setSelectedOptions(getInitialOptions(product?.variants || []));
  }, [product, t]);

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
  const variantGroups = getVariantGroups(product.variants || []);
  const selectedVariant = findSelectedVariant(product.variants || [], selectedOptions);
  const productName = product.modalName || product.name;
  const productCategory = product.modalCategory || product.category || product.group || "PRFCT10";
  const productDescription = product.details || product.description || product.commercialDescription || product.cardPhrase;
  const selectedImage = selectedVariant?.image || activeProduct.image;
  const productImageStyle = selectedImage ? { backgroundImage: `url(${selectedImage})` } : undefined;
  const quickBenefits = toList(product.benefits || product.chips || product.loveList || [productCategory, t("modal.assisted")]);
  const price = getPriceDisplay(product, selectedVariant);
  const localizedPrice = price.current === "Price on request" ? t("product.priceOnRequest") : price.current;
  const availability = getAvailabilityState(product, selectedVariant);
  const maxQuantity = getMaxPurchasableQuantity(product, selectedVariant);
  const productBadges = getProductBadges(product);
  const accordionItems = getDefaultSections(product, quickBenefits, t).map((section) =>
    /inventory|stock/i.test(section.title)
      ? {
          ...section,
          title: t("modal.availability"),
          content: [t(availability.labelKey, availability.labelParams), t("modal.exactOptions")]
        }
      : section
  );
  const supportLink = createWhatsAppLink(productName);
  const fulfillmentOptions = [
    { id: "ship", title: t("modal.ship"), detail: t("modal.tracked"), meta: t("modal.calculated") },
    { id: "pickup", title: t("modal.pickup"), detail: t("modal.requestPickup"), meta: t("modal.confirmedSupport") },
    { id: "delivery", title: t("modal.local"), detail: t("modal.zip"), meta: t("modal.confirmedSupport") }
  ];

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
                  <strong>{localizeOptionGroup(locale, group.name)}</strong>
                  <div>
                    {group.values.map((value) => (
                      <button
                        className={selectedOptions[group.name] === value ? "product-modal__variant product-modal__variant--active" : "product-modal__variant"}
                        key={value}
                        onClick={() => {
                          const nextOptions = { ...selectedOptions, [group.name]: value };
                          const nextVariant = findSelectedVariant(product.variants || [], nextOptions);
                          const nextMax = getMaxPurchasableQuantity(product, nextVariant);
                          setSelectedOptions(nextOptions);
                          if (typeof nextMax === "number") setQuantity((current) => Math.max(1, Math.min(current, nextMax)));
                        }}
                        type="button"
                        aria-pressed={selectedOptions[group.name] === value}
                      >
                        {localizeOptionValue(locale, value)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {selectedVariant?.sku ? <small className="product-modal__variant-meta">SKU: {selectedVariant.sku}</small> : null}
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
              <button type="button" disabled={!availability.canAddToCart} onClick={() => setQuantity((current) => Math.max(1, current - 1))}>-</button>
              <span>{quantity}</span>
              <button
                type="button"
                disabled={!availability.canAddToCart || (typeof maxQuantity === "number" && quantity >= maxQuantity)}
                onClick={() => setQuantity((current) => typeof maxQuantity === "number" ? Math.min(maxQuantity, current + 1) : current + 1)}
              >+</button>
            </div>
            <button
              className="product-modal__cta"
              type="button"
              disabled={!availability.canAddToCart}
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
              {availability.canAddToCart ? t("modal.addBag") : t(availability.labelKey, availability.labelParams)}
            </button>
          </div>

          <div className="product-modal__trust">
            <span>{t("modal.shipping")}</span>
            <span>{t("modal.returnSupport")}</span>
            <span>{t("modal.noPayment")}</span>
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
