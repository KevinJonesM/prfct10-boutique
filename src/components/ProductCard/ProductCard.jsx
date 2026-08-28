import { useEffect, useMemo, useRef, useState } from "react";
import "./ProductCard.css";
import {
  getAvailabilityState,
  getPriceDisplay,
  getProductBadges
} from "../../utils/commerce";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";
import { localizeOptionGroup, localizeOptionValue } from "../../i18n/catalogOptions";
import { getVariantGroups } from "../ProductModal/productModalArchitecture";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

export const productImageByClass = {
  "product-card__image--bar-grips": "/images/product-bar-grips.png",
  "product-card__image--chalk": "/images/product-chalk-real.jpg",
  "product-card__image--gel-heel": "/images/product-gel-heel.png",
  "product-card__image--kinesio": "/images/product-kinesio-real.png",
  "product-card__image--wrist-bands": "/images/product-wrist-support-lilac.png",
  "product-card__image--sweat-wristbands": "/images/product-sweat-wristbands-pastel.png",
  "product-card__image--tiger-paws": "/images/product-tiger-paws-beige-portada.png",
  "product-card__image--rhythm-toes": "/images/product-rhythm-toes.png",
  "product-card__image--flex-strap": "/images/product-flex-strap.png",
  "product-card__image--resistance-handles": "/images/product-resistance-handles.jpg",
  "product-card__image--core-sliders": "/images/product-core-sliders.png",
  "product-card__image--grip-loop": "/images/product-grip-loop.png",
  "product-card__image--power-weights": "/images/product-weights.jpg",
  "product-card__image--patella-band": "/images/product-patella-band-set.png",
  "product-card__image--soft-landing-ankle": "/images/product-soft-landing-ankle-set.png",
  "product-card__image--competition-glow": "/images/product-glitter-spray.png",
  "product-card__image--hand-balm": "/images/product-hand-balm-cover.png",
  "product-card__image--medal-display": "/images/product-medal-display.png"
};

const colorValues = {
  "Aqua Blue": "#63cfd2",
  "Apple Green": "#86cc45",
  Black: "#242124",
  Blue: "#4d7ed8",
  "Blue Lagoon": "#43c4c7",
  Burgundy: "#8b1f43",
  "Clear / White": "#f7f5f0",
  Fuchsia: "#e43d95",
  "Fluorescent Green": "#8ee83f",
  Gold: "#d8b45a",
  Green: "#51a868",
  "Hot Pink": "#ef3f96",
  Lavender: "#ba93df",
  "Light Blue": "#a8d9ef",
  "Light Pink": "#f5b8d3",
  "Light Yellow": "#f3df82",
  Lilac: "#bba4dc",
  "Mint Green": "#8ed8c0",
  "Neon Orange": "#ff7b32",
  Orange: "#f18b39",
  "Pastel Blue": "#a8d9ef",
  "Pastel Pink": "#f5b8d3",
  "Pastel Yellow": "#f3df82",
  "Peach Pink": "#efb5ad",
  Pink: "#ee8fbb",
  "Pink Blue": "linear-gradient(135deg, #ee8fbb 50%, #8fcce8 50%)",
  "Pink Green": "linear-gradient(135deg, #ee8fbb 50%, #8ed8a6 50%)",
  Purple: "#8062bf",
  Rainbow: "linear-gradient(135deg, #ee729e, #f2ca67, #78c9bd, #8f79d0)",
  Red: "#D6283E",
  "Royal Blue": "#1D4ED8",
  Coral: "#FF6F61",
  "Rose Pink": "#df6c99",
  "Rose Red": "#cf496a",
  Silver: "#c7c8cb",
  "Sky Blue": "#85c5e7",
  White: "#ffffff",
  Yellow: "#F2C94C"
};

const variantKey = (variant, index = 0) =>
  variant?.id || variant?.sku || JSON.stringify(variant?.options || {}) || `variant-${index}`;

const variantImage = (product, variant) =>
  variant?.image ||
  product.variantImages?.[variantKey(variant)] ||
  product.image ||
  product.galleryImages?.[0] ||
  product.gallery?.[0] ||
  productImageByClass[product.imageClass] ||
  "";

const firstPurchasableVariant = (product) =>
  product.variants?.find((variant) => getAvailabilityState(product, variant).canAddToCart) ||
  product.variants?.[0] ||
  null;

export default function ProductCard({ product, onSelectProduct, onAddToCart }) {
  const { locale, t } = useI18n();
  const localizedProduct = localizeProduct(product, locale);
  const variants = localizedProduct.variants || [];
  const variantGroups = getVariantGroups(variants);
  const isComplex = localizedProduct.forceChooseOptions === true || variantGroups.length >= 2;
  const [selectedVariantKey, setSelectedVariantKey] = useState(() =>
    isComplex ? "" : variantKey(firstPurchasableVariant(localizedProduct))
  );
  const touchStart = useRef(null);
  const swiped = useRef(false);

  useEffect(() => {
    setSelectedVariantKey(isComplex ? "" : variantKey(firstPurchasableVariant(localizedProduct)));
  }, [localizedProduct.id, isComplex]);

  const selectedVariantIndex = variants.findIndex((variant, index) =>
    variantKey(variant, index) === selectedVariantKey
  );
  const selectedVariant = selectedVariantIndex >= 0 ? variants[selectedVariantIndex] : null;
  const productName = localizedProduct.name;
  const productCategory = localizedProduct.subcategory
    ? t(`categories.${localizedProduct.subcategory}`)
    : localizedProduct.category;
  const price = getPriceDisplay(localizedProduct, selectedVariant);
  const availability = getAvailabilityState(localizedProduct, selectedVariant);
  const badges = getProductBadges(localizedProduct);
  const showAvailability = ["low-stock", "coming-soon", "unavailable"].includes(availability.tone);
  const productImage = variantImage(localizedProduct, selectedVariant);
  const localizedPrice = price.current === "Price on request" ? t("product.priceOnRequest") : price.current;
  const selectedOptions = selectedVariant?.options || {};
  const selectedLabel = Object.entries(selectedOptions)
    .map(([group, value]) => `${localizeOptionGroup(locale, group)}: ${localizeOptionValue(locale, value)}`)
    .join(" · ");
  const canQuickAdd = !isComplex && availability.canAddToCart;
  const currentIndex = selectedVariantIndex >= 0 ? selectedVariantIndex : 0;

  const chooseVariant = (nextIndex) => {
    if (!variants.length || isComplex) return;
    const normalized = (nextIndex + variants.length) % variants.length;
    setSelectedVariantKey(variantKey(variants[normalized], normalized));
  };

  const openDetails = () => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    onSelectProduct({
      ...localizedProduct,
      initialSelectedOptions: selectedOptions,
      initialVariantId: variantKey(selectedVariant, currentIndex)
    });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" || variants.length < 2 || isComplex) return;
    touchStart.current = { x: event.clientX, y: event.clientY };
    swiped.current = false;
  };

  const handlePointerUp = (event) => {
    if (!touchStart.current) return;
    const deltaX = event.clientX - touchStart.current.x;
    const deltaY = event.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    swiped.current = true;
    chooseVariant(currentIndex + (deltaX < 0 ? 1 : -1));
  };

  const quickAdd = () => {
    if (!canQuickAdd) {
      openDetails();
      return;
    }
    onAddToCart?.({
      ...localizedProduct,
      selectedOptions,
      selectedVariant,
      cartPrice: price.numericValue,
      image: productImage
    }, 1);
  };

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <meta itemProp="description" content={localizedProduct.description || localizedProduct.details || productName} />

      <div
        className="product-card__media"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <button
          className="product-card__image-button"
          type="button"
          onClick={openDetails}
          aria-label={t("product.viewDetailsFor", { name: productName })}
        >
          <span className={`product-card__image${productImage ? "" : ` ${localizedProduct.imageClass || ""}`}`}>
            {productImage ? (
              <OptimizedImage
                src={productImage}
                alt={selectedLabel ? `${productName}, ${selectedLabel}` : productName}
                itemProp="image"
                loading="lazy"
                width="600"
                height="452"
                style={{ objectPosition: selectedVariant?.imagePosition || localizedProduct.imagePosition || undefined }}
              />
            ) : null}
          </span>
        </button>

        {badges.length ? (
          <span className="product-card__badges" aria-label={t("product.badges")}>
            {badges.map((badge) => <span key={badge}>{t(`badges.${badge.toLowerCase()}`)}</span>)}
          </span>
        ) : null}

        {!isComplex && variants.length > 1 ? (
          <>
            <button
              className="product-card__media-nav product-card__media-nav--previous"
              type="button"
              onClick={() => chooseVariant(currentIndex - 1)}
              aria-label={t("product.previousVariant")}
            >
              ‹
            </button>
            <button
              className="product-card__media-nav product-card__media-nav--next"
              type="button"
              onClick={() => chooseVariant(currentIndex + 1)}
              aria-label={t("product.nextVariant")}
            >
              ›
            </button>
            <span className="product-card__media-count" aria-live="polite">
              {currentIndex + 1} / {variants.length}
            </span>
          </>
        ) : null}
      </div>

      <div className={`product-card__content${showAvailability ? " product-card__content--status" : ""}`}>
        <span className="product-card__category">{localizedProduct.collectionName || productCategory}</span>
        <button className="product-card__name" type="button" onClick={openDetails} itemProp="name">
          {productName}
        </button>

        {!isComplex && variantGroups.length === 1 ? (
          <div className={`product-card__variants${variantGroups[0].name === "Crown" ? " product-card__variants--crowns" : ""}`}>
            <span className="product-card__variant-heading">
              {localizedProduct.variantLabel || localizeOptionGroup(locale, variantGroups[0].name)}
            </span>
            <div className="product-card__variant-scroll">
              {variants.slice(0, 4).map((variant, index) => {
                const value = variant.options?.[variantGroups[0].name];
                const variantAvailability = getAvailabilityState(localizedProduct, variant);
                const isSelected = variantKey(variant, index) === selectedVariantKey;
                const swatch = colorValues[value];
                return (
                  <button
                    className={`product-card__variant${isSelected ? " product-card__variant--active" : ""}${variant.image ? " product-card__variant--image" : ""}`}
                    key={variantKey(variant, index)}
                    type="button"
                    disabled={!variantAvailability.canAddToCart}
                    onClick={() => setSelectedVariantKey(variantKey(variant, index))}
                    aria-pressed={isSelected}
                    aria-label={`${localizeOptionValue(locale, value)}${variantAvailability.canAddToCart ? "" : `, ${t("product.soldOut")}`}`}
                    title={localizeOptionValue(locale, value)}
                  >
                    {variantGroups[0].name === "Crown" && variant.image ? (
                      <OptimizedImage src={variant.image} alt="" loading="lazy" width="64" height="64" />
                    ) : swatch ? (
                      <span style={{ background: swatch }} aria-hidden="true" />
                    ) : null}
                    <small>{localizeOptionValue(locale, value)}</small>
                  </button>
                );
              })}
              {variants.length > 4 ? (
                <button
                  className="product-card__more-variants"
                  type="button"
                  onClick={openDetails}
                  aria-label={t("product.moreColors", { count: variants.length - 4 })}
                >
                  {t("product.moreColors", { count: variants.length - 4 })}
                </button>
              ) : null}
            </div>
          </div>
        ) : null}

        {selectedLabel ? (
          <span className="product-card__selected">
            {t("product.selected")}: {selectedLabel}
            {localizedProduct.unitsPerSale === 2 ? ` · ${t("product.pairOfTwo")}` : ""}
          </span>
        ) : null}

        {showAvailability ? (
          <span className={`product-card__availability product-card__availability--${availability.tone}`}>
            {t(availability.labelKey, availability.labelParams)}
          </span>
        ) : null}

        <div className="product-card__footer">
          <span className="product-card__commerce">
            {price.onSale ? (
              <>
                <span className="product-card__sale-price">{localizedPrice}</span>
                <span className="product-card__regular-price">{price.regular}</span>
              </>
            ) : (
              <span className="product-card__sale-price">{localizedPrice}</span>
            )}
          </span>
          <div className="product-card__actions">
            <button className="product-card__details" type="button" onClick={openDetails}>
              {t("product.viewDetails")}
            </button>
            <button
              className="product-card__quick-add"
              type="button"
              onClick={quickAdd}
              disabled={!isComplex && !availability.canAddToCart}
            >
              {isComplex ? t("product.chooseOptions") : t("product.quickAdd")}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
