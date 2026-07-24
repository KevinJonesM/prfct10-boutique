import "./ProductCard.css";
import { getAvailabilityState, getPriceDisplay, getProductBadges } from "../../utils/commerce";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

const productImageByClass = {
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

export default function ProductCard({ product, onSelectProduct }) {
  const { locale, t } = useI18n();
  const localizedProduct = localizeProduct(product, locale);
  const productName = localizedProduct.name;
  const productCategory = localizedProduct.subcategory
    ? t(`categories.${localizedProduct.subcategory}`)
    : localizedProduct.category;
  const price = getPriceDisplay(localizedProduct);
  const availability = getAvailabilityState(localizedProduct);
  const badges = getProductBadges(localizedProduct);
  const showAvailability = ["low-stock", "coming-soon", "unavailable"].includes(availability.tone);
  const productImage = localizedProduct.image || localizedProduct.galleryImages?.[0] || productImageByClass[localizedProduct.imageClass];
  const localizedPrice = price.current === "Price on request" ? t("product.priceOnRequest") : price.current;

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <meta itemProp="description" content={localizedProduct.description || localizedProduct.details || productName} />
      <button
        className="product-card__button"
        type="button"
        onClick={() => onSelectProduct(localizedProduct)}
        aria-label={t("product.viewDetailsFor", { name: productName })}
      >
        <span className={`product-card__image${productImage ? "" : ` ${localizedProduct.imageClass || ""}`}`}>
          {productImage ? (
            <OptimizedImage
              src={productImage}
              alt={productName}
              itemProp="image"
              loading="lazy"
              width="600"
              height="452"
              style={{ objectPosition: localizedProduct.imagePosition || undefined }}
            />
          ) : null}
        </span>
        {badges.length ? (
          <span className="product-card__badges" aria-label={t("product.badges")}>
            {badges.map((badge) => <span key={badge}>{t(`badges.${badge.toLowerCase()}`)}</span>)}
          </span>
        ) : null}
        <span className={`product-card__content${showAvailability ? " product-card__content--status" : ""}`}>
          <span className="product-card__category">{productCategory}</span>
          <span className="product-card__name" itemProp="name">{productName}</span>
          {showAvailability ? (
            <span className={`product-card__availability product-card__availability--${availability.tone}`}>
              {t(availability.labelKey, availability.labelParams)}
            </span>
          ) : null}
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
          <span className="product-card__details">{t("product.shopItem")}</span>
        </span>
      </button>
    </article>
  );
}
