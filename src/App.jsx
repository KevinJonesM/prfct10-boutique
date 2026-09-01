import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { products } from "./data/products";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PrfctCode from "./components/PrfctCode/PrfctCode";
import Footer from "./components/Footer/Footer";
import SignatureText from "./components/SignatureText/SignatureText";
import ShopByDepartment from "./components/ShopByDepartment/ShopByDepartment";
import BrandIntro from "./components/BrandIntro/BrandIntro";
import SocialProofSection from "./components/Reviews/SocialProofSection";
import Reveal from "./components/Motion/Reveal";
import OptimizedImage from "./components/OptimizedImage/OptimizedImage";
import ProductCard from "./components/ProductCard/ProductCard";
import { coquetteItems } from "./components/ProductSection/data/accessoryProducts";
import { publicMentalItems } from "./components/ProductSection/data/mindGymProducts";
import { wearItems } from "./components/ProductSection/data/apparelProducts";
import { getBundleInventoryConsumption, publicBundleProducts } from "./components/ProductSection/data/bundleProducts";
import { enrichCatalogProduct } from "./components/ProductSection/data/catalogUtils";
import { getTrainingProductForModal, trainingInventory, trainingSubcategories } from "./components/ProductSection/data/trainingProducts";
import { useI18n } from "./i18n/I18nProvider";
import { localizeProduct } from "./i18n/productTranslations";
import { localizeOptionValue } from "./i18n/catalogOptions";
import { formatCommercePrice, getMaxPurchasableQuantity, getPriceDisplay } from "./utils/commerce";
import { createWhatsAppMessageLink } from "./utils/whatsapp";
import { assistedCommerceConfig, customerAccountsVisible } from "./config/commercePrototype";

const ProductSection = lazy(() => import("./components/ProductSection/ProductSection"));
const ProductModal = lazy(() => import("./components/ProductModal/ProductModal"));
const AuthModal = lazy(() => import("./components/AuthModal/AuthModal"));
const TeamPage = lazy(() => import("./components/Team/TeamPage"));
const TeamShowcase = lazy(() => import("./components/Team/TeamShowcase"));
const NewsletterExperience = lazy(() => import("./components/Newsletter/NewsletterExperience"));
const GuidedFinder = lazy(() => import("./components/GuidedFinder/GuidedFinder"));
const BowDesignerCTA = lazy(() => import("./components/BowDesigner/BowDesignerCTA"));
const BowDesignerModal = lazy(() => import("./components/BowDesigner/BowDesignerModal"));
const PlayPage = lazy(() => import("./components/Play/PlayPage"));
const PowerCheckPage = lazy(() => import("./components/Play/PowerCheckPage"));
const Code10Page = lazy(() => import("./components/Code10/Code10Page"));
const PlayBowracle = lazy(() => import("./components/PlayBowracle/PlayBowracle"));
const SecretBowGarden = lazy(() => import("./components/SecretBowGarden/SecretBowGarden"));
const PlayTeaser = lazy(() => import("./components/Play/PlayTeaser"));

// TODO Shopify: Source complementary products from Shopify Search & Discovery.
const smartSuggestions = [
  {
    id: "sweat-wristbands",
    name: "Gymnastics Wrist Bands",
    subcategory: "support",
    price: 8.99,
    salePrice: 7.99,
    image: "/images/product-sweat-wristbands-pastel.png",
    triggerIds: ["bar-grips", "chalk", "tiger-paws"]
  },
  {
    id: "chalk",
    name: "Gymnastics Chalk Block",
    subcategory: "grip",
    price: 3.99,
    salePrice: 3.49,
    image: "/images/product-chalk-real.jpg",
    triggerIds: ["bar-grips", "sweat-wristbands", "tiger-paws"]
  },
  {
    id: "hand-balm",
    name: "Hand & Foot Balm",
    subcategory: "recovery",
    price: 11.99,
    salePrice: 9.99,
    image: "/images/product-hand-balm-cover.png",
    triggerIds: ["bar-grips", "chalk", "sweat-wristbands", "tiger-paws"]
  },
  {
    id: "coquet-bun-covers",
    name: "Gymnastics Bun Covers",
    subcategory: "hairAccessories",
    price: 7.99,
    salePrice: 6.99,
    image: "/images/accessories-gymnastics-bun-covers-cover.png",
    triggerIds: ["coquet-lazos-tul", "coquet-nylon-headbands"]
  },
  {
    id: "coquet-nylon-headbands",
    name: "Nylon Headbands",
    subcategory: "hairAccessories",
    price: 5.99,
    salePrice: 4.99,
    image: "/images/accessories-nylon-headbands-cover.png",
    triggerIds: ["coquet-lazos-tul", "coquet-bun-covers"]
  },
  {
    id: "coquet-glitter-spray",
    name: "Glitter Spray",
    subcategory: "competition",
    price: 11.99,
    salePrice: 9.99,
    image: "/images/coquet-spray.png",
    triggerIds: ["coquet-lazos-tul", "coquet-garment-bag"]
  },
  {
    id: "coquet-garment-bag",
    name: "Gymnastics Garment Bag",
    subcategory: "gymBags",
    price: 24.99,
    salePrice: 19.99,
    image: "/images/coquet-guardapolvos.png",
    triggerIds: ["coquet-silicone-bag", "apparel-period-brief"]
  },
  {
    id: "coquet-silicone-bag",
    name: "PRFCT10 Silicone Charm Bag",
    subcategory: "gymBags",
    price: 34.99,
    salePrice: 29.99,
    image: "/images/accessories-silicone-charm-bag-cover.png",
    triggerIds: ["coquet-garment-bag", "coquet-lazos-tul"]
  },
  {
    id: "coquet-plush-flowers",
    name: "Plush Flowers",
    subcategory: "gifts",
    price: 16.99,
    salePrice: 14.99,
    image: "/images/coquet-peluflores.png",
    triggerIds: ["coquet-medal-hanger"]
  },
  {
    id: "mental-pelota-squishy",
    name: "DNA Squishy Ball",
    subcategory: "sensory",
    price: 4.99,
    salePrice: 3.99,
    image: "/images/mental-pelota-squishy-portada.png",
    triggerIds: ["mental-bolita-puzzle", "mental-rueda-mental", "mental-giro-puzzle", "mental-puzzle-magico"]
  },
  {
    id: "mental-bolita-puzzle",
    name: "Rainbow Puzzle Ball",
    subcategory: "puzzles",
    price: 9.99,
    salePrice: 7.99,
    image: "/images/mental-bolita-puzzle-portada.png",
    triggerIds: ["mental-pelota-squishy", "mental-pulseras-unicornio"]
  }
];

const fallbackProductImages = {
  "bar-grips": "/images/product-bar-grips.png",
  chalk: "/images/product-chalk-real.jpg",
  "tiger-paws": "/images/product-tiger-paws-beige-portada.png",
  "flex-strap-12": "/images/product-flex-strap.png",
  "core-sliders": "/images/product-core-sliders.png"
};

function getProductName(item, locale) {
  const baseName = item.modalName || item.brandName || item.name;
  const options = Object.values(item.selectedOptions || {}).filter(Boolean).map((value) => localizeOptionValue(locale, value));
  return options.length ? `${baseName} - ${options.join(" / ")}` : baseName;
}

function getProductKey(item) {
  const baseKey = item.id || item.name || item.modalName;
  const variantKey = item.selectedVariant?.sku || Object.values(item.selectedOptions || {}).filter(Boolean).join("-");
  return variantKey ? `${baseKey}::${variantKey}` : baseKey;
}

const inventoryCatalog = new Map([
  ...products
    .filter((product) => trainingInventory[product.id])
    .map((product) => getTrainingProductForModal(product)),
  ...coquetteItems,
  ...publicMentalItems,
  ...wearItems,
  ...publicBundleProducts
].map((product) => [product.id, product]));

function getReservedComponentQuantity(items, productId, excludedKey = "") {
  return items.reduce((total, item) => {
    if (item.key === excludedKey) return total;
    const directQuantity = item.id === productId ? item.quantity : 0;
    const bundledQuantity = (item.inventoryConsumption || [])
      .filter((component) => component.productId === productId)
      .reduce((sum, component) => sum + component.quantity, 0);
    return total + directQuantity + bundledQuantity;
  }, 0);
}

function getCartStockLimit(item, items, excludedKey = "") {
  const directLimit = getMaxPurchasableQuantity(item, item.selectedVariant);
  if (!item.bundleComponents?.length) {
    if (typeof directLimit !== "number") return null;
    const bundledReservations = items.reduce((total, cartItem) => {
      if (cartItem.key === excludedKey) return total;
      return total + (cartItem.inventoryConsumption || [])
        .filter((component) => component.productId === item.id)
        .reduce((sum, component) => sum + component.quantity, 0);
    }, 0);
    return Math.max(0, directLimit - bundledReservations);
  }

  const componentLimits = item.bundleComponents.map((component) => {
    const componentProduct = inventoryCatalog.get(component.productId);
    const componentStock = getMaxPurchasableQuantity(componentProduct || {});
    if (typeof componentStock !== "number") return null;
    const reserved = getReservedComponentQuantity(items, component.productId, excludedKey);
    return Math.max(0, Math.floor((componentStock - reserved) / component.quantity));
  }).filter((limit) => typeof limit === "number");

  const componentLimit = componentLimits.length ? Math.min(...componentLimits) : null;
  if (typeof directLimit === "number" && typeof componentLimit === "number") return Math.min(directLimit, componentLimit);
  return typeof componentLimit === "number" ? componentLimit : directLimit;
}

function hydrateSmartSuggestion(suggestion) {
  return {
    ...suggestion,
    ...(inventoryCatalog.get(suggestion.id) || {}),
    triggerIds: suggestion.triggerIds
  };
}

function getCartPrice(item) {
  if (typeof item.cartPrice === "number" && Number.isFinite(item.cartPrice)) return item.cartPrice;
  return getPriceDisplay(item, item.selectedVariant).numericValue;
}

function formatMoney(value) {
  return formatCommercePrice(value);
}

function getLocalizedCartItem(item, locale, t) {
  const localized = localizeProduct(
    {
      id: item.id,
      name: item.canonicalName || item.name,
      subcategory: item.subcategory,
      category: item.category
    },
    locale
  );
  const options = Object.values(item.selectedOptions || {}).filter(Boolean).map((value) => localizeOptionValue(locale, value));
  const name = options.length ? `${localized.name} - ${options.join(" / ")}` : localized.name;
  const category = item.subcategory ? t(`categories.${item.subcategory}`) : localized.category || item.category || "PRFCT10";
  return { ...item, name, category };
}

function getLocalizedSuggestion(item, locale, t) {
  const localized = localizeProduct(item, locale);
  const category = item.subcategory
    ? t(`categories.${item.subcategory}`)
    : localized.category || item.category || "PRFCT10";
  return { ...localized, category };
}

function CartSection({ items, authUser, onOpenLogin, onOpenBoutique, onAddToCart, onQuantityChange, onRemove }) {
  const { locale, t } = useI18n();
  const [authMode, setAuthMode] = useState("signin");
  const [account, setAccount] = useState({ email: "", name: "" });
  const [customer, setCustomer] = useState({ phone: "", city: "", delivery: "Standard shipping", note: "" });
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState("");
  const [requestStarted, setRequestStarted] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (typeof item.price === "number" ? item.price * item.quantity : 0), 0);
  const hasPriceOnRequest = items.some((item) => typeof item.price !== "number");
  const discount = promoApplied ? Math.round(subtotal * assistedCommerceConfig.discountRate) : 0;
  const discountPercent = Math.round(assistedCommerceConfig.discountRate * 100);
  const shipping = subtotal >= assistedCommerceConfig.freeShippingThreshold || subtotal === 0
    ? 0
    : assistedCommerceConfig.shippingFlatRate;
  const total = Math.max(0, subtotal - discount + shipping);
  const accountEmail = authUser?.email || account.email;
  const cartIds = items.map((item) => item.id || item.key.split("::")[0]);
  const recommendations = smartSuggestions.filter((suggestion) => {
    const alreadyInCart = cartIds.includes(suggestion.id);
    const triggered = suggestion.triggerIds.some((id) => cartIds.includes(id));
    return !alreadyInCart && (triggered || items.length === 0);
  }).map((suggestion) => getLocalizedSuggestion(hydrateSmartSuggestion(suggestion), locale, t));
  const localizedItems = items.map((item) => getLocalizedCartItem(item, locale, t));
  const canRequestOrder = items.length > 0;

  const applyPromo = () => {
    const normalizedCode = promoCode.trim().toUpperCase();
    setPromoApplied(assistedCommerceConfig.promoCodes.includes(normalizedCode) ? normalizedCode : "");
  };

  const buildOrderMessage = () => {
    const deliveryKey = {
      "Standard shipping": "standard",
      "Store pickup": "pickup",
      "Local delivery": "local"
    }[customer.delivery] || "standard";
    const itemLines = localizedItems.map((item) =>
      t("cartWhatsapp.item", {
        quantity: item.quantity,
        name: item.name,
        price: formatMoney(item.price),
        each: item.price ? t("cartWhatsapp.each") : ""
      })
    );
    return [
      t("cartWhatsapp.intro"),
      ...itemLines,
      t("cartWhatsapp.delivery", { preference: t(`cart.${deliveryKey}`) }),
      customer.city ? t("cartWhatsapp.zip", { value: customer.city }) : "",
      customer.phone ? t("cartWhatsapp.phone", { value: customer.phone }) : "",
      accountEmail ? t("cartWhatsapp.email", { value: accountEmail }) : "",
      customer.note ? t("cartWhatsapp.note", { value: customer.note }) : "",
      t("cartWhatsapp.closing")
    ].filter(Boolean).join("\n");
  };

  const onSubmitOrderRequest = (event) => {
    event.preventDefault();
    if (!canRequestOrder) return;
    window.open(createWhatsAppMessageLink(buildOrderMessage()), "_blank", "noopener,noreferrer");
    setRequestStarted(true);
  };

  return (
    <section className="cart-section" id="cart" aria-labelledby="cart-title">
      <div className="cart-section__shell">
        <div className="cart-section__header">
          <p>{t("cart.assisted")}</p>
          <h1 id="cart-title">{t("cart.title", { count: itemCount })}</h1>
          <span>{t("cart.intro")}</span>
        </div>

        <div className="cart-section__layout">
          <div className="cart-section__main">
            {customerAccountsVisible ? <section className="cart-panel cart-panel--account" aria-label={t("navigation.account")}>
              <div className="cart-panel__title">
                <h3>{authUser ? t("cart.active") : t(authMode === "signin" ? "cart.have" : "cart.create")}</h3>
                <p>{authUser ? t("cart.shoppingAs", { email: authUser.email }) : t("cart.accountText")}</p>
              </div>
              {authUser ? (
                <div className="cart-auth cart-auth--signed">
                  <strong>{authUser.name}</strong>
                  <span>{t(authUser.provider === "google" ? "cart.connectedGoogle" : "cart.connectedEmail")}</span>
                </div>
              ) : (
                <div className="cart-auth">
                  <div className="cart-auth__tabs">
                    <button className={authMode === "signin" ? "cart-auth__tab cart-auth__tab--active" : "cart-auth__tab"} type="button" onClick={() => setAuthMode("signin")}>
                      {t("auth.sign")}
                    </button>
                    <button className={authMode === "signup" ? "cart-auth__tab cart-auth__tab--active" : "cart-auth__tab"} type="button" onClick={() => setAuthMode("signup")}>
                      {t("cart.join")}
                    </button>
                  </div>
                  <label>
                    {t("auth.email")}
                    <input
                      type="email"
                      value={account.email}
                      onChange={(event) => setAccount((current) => ({ ...current, email: event.target.value }))}
                      placeholder="you@example.com"
                    />
                  </label>
                  {authMode === "signup" && (
                    <label>
                      {t("auth.name")}
                      <input
                        type="text"
                        value={account.name}
                        onChange={(event) => setAccount((current) => ({ ...current, name: event.target.value }))}
                        placeholder={t("cart.namePlaceholder")}
                      />
                    </label>
                  )}
                  <button className="cart-auth__open" type="button" onClick={onOpenLogin}>
                    {t("cart.openAccount")}
                  </button>
                </div>
              )}
            </section> : null}

            <section className="cart-panel" aria-label={t("cart.items")}>
              {items.length ? (
                <div className="cart-items">
                  {localizedItems.map((item) => (
                    <article className="cart-item" key={item.key}>
                      {item.image ? <OptimizedImage src={item.image} alt="" loading="lazy" width="160" height="160" /> : <span className="cart-item__image-fallback" aria-hidden="true" />}
                      <div className="cart-item__info">
                        <strong>{item.name}</strong>
                        <span>{item.category || "PRFCT10"}</span>
                        {item.sku ? <small>SKU: {item.sku}</small> : null}
                      </div>
                      <div className="cart-item__price">{formatMoney(item.price)}</div>
                      <div className="cart-item__qty" aria-label={t("modal.quantity", { quantity: item.quantity })}>
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          disabled={typeof item.maxQuantity === "number" && item.quantity >= item.maxQuantity}
                          onClick={() => onQuantityChange(item.key, item.quantity + 1)}
                        >+</button>
                      </div>
                      <button className="cart-item__remove" type="button" onClick={() => onRemove(item.key)}>
                        {t("common.remove")}
                      </button>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="cart-empty">
                  <h3>{t("cart.emptyTitle")}</h3>
                  <p>{t("cart.emptyText")}</p>
                  <button type="button" onClick={onOpenBoutique}>{t("common.keepShopping")}</button>
                </div>
              )}
            </section>

            <section className="cart-panel" aria-label={t("cart.suggestions")}>
              <div className="cart-panel__title">
                <h3>{t("cart.goes")}</h3>
                <p>{t("cart.smart")}</p>
              </div>
              <div className="cart-recs">
                {recommendations.slice(0, 3).map((suggestion) => (
                  <article className="cart-rec" key={suggestion.id}>
                    <OptimizedImage src={suggestion.image} alt="" loading="lazy" width="160" height="160" />
                    <div>
                      <strong>{suggestion.name}</strong>
                      <span>{suggestion.category}</span>
                      <em>{formatMoney(suggestion.price)}</em>
                    </div>
                    <button type="button" onClick={() => onAddToCart(suggestion)}>
                      {t("cart.addCart")}
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="cart-panel cart-policy" aria-label={t("cart.policies")}>
              <details open>
                <summary>{t("cart.returnTitle")}</summary>
                <p>{t("cart.returnText")}</p>
              </details>
              <details>
                <summary>{t("cart.guaranteeTitle")}</summary>
                <p>{t("cart.guaranteeText")}</p>
              </details>
            </section>
          </div>

          <aside className="cart-summary" aria-label={t("cart.summary")}>
            <div className="cart-summary__meter">
              <span style={{ width: `${Math.min(100, (subtotal / assistedCommerceConfig.freeShippingThreshold) * 100)}%` }} />
            </div>
            <p className="cart-summary__shipping">
              {hasPriceOnRequest
                ? t("cart.trackedCalculated")
                : subtotal >= assistedCommerceConfig.freeShippingThreshold
                  ? t("cart.freeUnlocked")
                  : t("cart.freeMore", { amount: formatMoney(Math.max(0, assistedCommerceConfig.freeShippingThreshold - subtotal)) })}
            </p>

            <form className="cart-checkout" onSubmit={onSubmitOrderRequest}>
              <label>
                {t("cart.phone")}
                <input
                  type="tel"
                  value={customer.phone}
                  onChange={(event) => setCustomer((current) => ({ ...current, phone: event.target.value }))}
                  placeholder={t("cart.phonePlaceholder")}
                />
              </label>
              <label>
                {t("cart.zip")}
                <input
                  type="text"
                  value={customer.city}
                  onChange={(event) => setCustomer((current) => ({ ...current, city: event.target.value }))}
                  placeholder={t("cart.zipPlaceholder")}
                />
              </label>
              <label>
                {t("cart.delivery")}
                <select value={customer.delivery} onChange={(event) => setCustomer((current) => ({ ...current, delivery: event.target.value }))}>
                  <option value="Standard shipping">{t("cart.standard")}</option>
                  <option value="Store pickup">{t("cart.pickup")}</option>
                  <option value="Local delivery">{t("cart.local")}</option>
                </select>
              </label>
              <label className="cart-checkout__wide">
                {t("cart.note")}
                <textarea
                  value={customer.note}
                  onChange={(event) => setCustomer((current) => ({ ...current, note: event.target.value }))}
                  placeholder={t("cart.notePlaceholder")}
                />
              </label>

              <div className="cart-promo">
                <label>
                  {t("cart.promo")}
                  <input value={promoCode} onChange={(event) => setPromoCode(event.target.value)} placeholder="PRFCT10" />
                </label>
                <button type="button" onClick={applyPromo}>{t("cart.apply")}</button>
              </div>
              {promoApplied && <p className="cart-promo__success">{t("cart.discount")}: {discountPercent}% ({promoApplied})</p>}

              <div className="cart-summary__lines">
                <div><span>{hasPriceOnRequest ? t("cart.knownSubtotal") : t("cart.subtotal", { count: itemCount })}</span><strong>{formatMoney(subtotal)}</strong></div>
                <div><span>{t("cart.discount")}</span><strong>-{formatMoney(discount)}</strong></div>
                <div><span>{t("cart.shipping")}</span><strong>{hasPriceOnRequest ? t("cart.confirmSupport") : shipping ? formatMoney(shipping) : t("cart.free")}</strong></div>
                <div><span>{t("cart.tax")}</span><strong>{t("cart.later")}</strong></div>
                <div className="cart-summary__total"><span>{t(hasPriceOnRequest ? "cart.knownEstimate" : "cart.estimate")}</span><strong>{formatMoney(total)}</strong></div>
              </div>

              {hasPriceOnRequest && <p className="cart-summary__notice">{t("cart.priceNotice")}</p>}

              <button
                className="cart-summary__checkout"
                type="submit"
                disabled={!canRequestOrder}
                data-whatsapp-url={canRequestOrder ? createWhatsAppMessageLink(buildOrderMessage()) : undefined}
              >
                {t("cart.whatsapp")}
              </button>
              {requestStarted && <p className="cart-summary__success">{t("cart.opened")}</p>}
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CartDrawer({
  isOpen,
  items,
  lastAddedItem,
  onClose,
  onOpenCart,
  onAddToCart,
  onQuantityChange,
  onRemove
}) {
  const { locale, t } = useI18n();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (typeof item.price === "number" ? item.price * item.quantity : 0), 0);
  const hasPriceOnRequest = items.some((item) => typeof item.price !== "number");
  const cartIds = items.map((item) => item.id || item.key.split("::")[0]);
  const recommendations = smartSuggestions.filter((suggestion) => {
    const alreadyInCart = cartIds.includes(suggestion.id);
    const triggered = suggestion.triggerIds.some((id) => cartIds.includes(id));
    return !alreadyInCart && (triggered || items.length === 0);
  }).map((suggestion) => getLocalizedSuggestion(hydrateSmartSuggestion(suggestion), locale, t));
  const localizedItems = items.map((item) => getLocalizedCartItem(item, locale, t));
  const localizedLastAddedItem = lastAddedItem ? getLocalizedCartItem(lastAddedItem, locale, t) : null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.body.classList.add("cart-drawer-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("cart-drawer-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <aside className="cart-drawer" aria-label={t("cart.quick")}>
      <button className="cart-drawer__overlay" type="button" aria-label={t("cart.closeQuick")} onClick={onClose} />
      <div className="cart-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
        <div className="cart-drawer__header">
          <div>
            <p>{t(lastAddedItem ? "cart.added" : "cart.prfct10")}</p>
            <h2 id="cart-drawer-title">{t(itemCount === 1 ? "cart.oneItem" : "cart.manyItems", { count: itemCount })}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label={t("cart.close")}>X</button>
        </div>

        {localizedLastAddedItem && (
          <div className="cart-drawer__added">
            {localizedLastAddedItem.image ? <OptimizedImage src={localizedLastAddedItem.image} alt="" loading="lazy" width="160" height="160" /> : <span aria-hidden="true" />}
            <div>
              <strong>{localizedLastAddedItem.name}</strong>
              <small>{localizedLastAddedItem.category}</small>
              <em>{formatMoney(localizedLastAddedItem.price)}</em>
            </div>
          </div>
        )}

        <div className="cart-drawer__items">
          {localizedItems.map((item) => (
            <article className="cart-drawer__item" key={item.key}>
              {item.image ? <OptimizedImage src={item.image} alt="" loading="lazy" width="160" height="160" /> : <span aria-hidden="true" />}
              <div>
                <strong>{item.name}</strong>
                <small>{item.category || "PRFCT10"}</small>
                <em>{formatMoney(item.price)}</em>
              </div>
              <div className="cart-drawer__qty" aria-label={t("modal.quantity", { quantity: item.quantity })}>
                <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  disabled={typeof item.maxQuantity === "number" && item.quantity >= item.maxQuantity}
                  onClick={() => onQuantityChange(item.key, item.quantity + 1)}
                >+</button>
              </div>
              <button className="cart-drawer__remove" type="button" onClick={() => onRemove(item.key)}>
                {t("common.remove")}
              </button>
            </article>
          ))}
        </div>

        {recommendations.length ? (
          <div className="cart-drawer__recs">
            <h3>{t("cart.mayLike")}</h3>
            {recommendations.slice(0, 2).map((suggestion) => (
              <article className="cart-drawer__rec" key={suggestion.id}>
                <OptimizedImage src={suggestion.image} alt="" loading="lazy" width="160" height="160" />
                <div>
                  <strong>{suggestion.name}</strong>
                  <small>{suggestion.category}</small>
                </div>
                <button type="button" onClick={() => onAddToCart(suggestion)}>
                  {t("common.add")}
                </button>
              </article>
            ))}
          </div>
        ) : null}

        <div className="cart-drawer__summary">
          <div>
            <span>{t("cart.subtotalShort")}</span>
            <strong>{formatMoney(subtotal)}</strong>
          </div>
          <p>
            {hasPriceOnRequest
              ? t("cart.shippingPending")
              : t("cart.shippingAvailable")}
          </p>
          <button className="cart-drawer__checkout" type="button" onClick={onOpenCart}>
            {t("cart.review")}
          </button>
          <button className="cart-drawer__continue" type="button" onClick={onClose}>
            {t("common.keepShopping")}
          </button>
        </div>
      </div>
    </aside>
  );
}

function FeaturedProducts({
  items,
  kicker = "Training Gear",
  title = "Starter Favorites",
  subtitle = "A quick path to essentials that help athletes train with more confidence, control, and style.",
  buttonText = "Shop training gear",
  onSelectProduct,
  onAddToCart,
  onOpenBoutique
}) {
  const { t } = useI18n();
  const featuredProducts = items || [];
  const titleId = `featured-stars-${kicker.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const sectionKey = kicker.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <section className={`featured-stars featured-stars--${sectionKey}`} id={sectionKey} aria-labelledby={titleId}>
      <Reveal className="featured-stars__header">
        <p>{kicker}</p>
        <SignatureText as="h2" className="featured-stars__title" variant="subhead" id={titleId}>{title}</SignatureText>
        <span className="featured-stars__subtitle">{subtitle}</span>
      </Reveal>
      <div className="featured-stars__trust" aria-label={t("assurances.label")}>
        <span>{t("assurances.shipping")}</span>
        <span>{t("assurances.availability")}</span>
        <span>{t("assurances.returns")}</span>
      </div>
      <Reveal className="featured-stars__grid" delay={90}>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
          />
        ))}
      </Reveal>
      <button className="featured-stars__boutique" type="button" onClick={onOpenBoutique}>
        {buttonText}
      </button>
    </section>
  );
}

function HomepageBundles({ items, onSelectProduct, onOpenBundles }) {
  const { locale, t } = useI18n();
  const localizedBundles = items.map((item) => localizeProduct(item, locale));

  return (
    <section className="homepage-bundles" aria-labelledby="homepage-bundles-title">
      <Reveal className="homepage-bundles__header">
        <p>{t("home.bundles.eyebrow")}</p>
        <SignatureText as="h2" id="homepage-bundles-title" variant="subhead">
          {t("home.bundles.title")}
        </SignatureText>
        <span>{t("home.bundles.text")}</span>
      </Reveal>
      <Reveal className="homepage-bundles__grid" delay={90}>
        {localizedBundles.map((bundle) => (
          <ProductCard
            key={bundle.id}
            product={bundle}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </Reveal>
      <button className="homepage-bundles__cta" type="button" onClick={onOpenBundles}>
        {t("home.bundles.cta")}
      </button>
    </section>
  );
}

const storePathByView = {
  all: "/shop",
  training: "/training-gear",
  coquette: "/accessories",
  mind: "/mind-gym",
  wear: "/apparel",
  bundles: "/bundles",
  team: "/team",
  play: "/play",
  powerCheck: "/play/power-check",
  code10: "/play/code-10",
  bowracle: "/play/the-bow-racle",
  secretBowGarden: "/play/secret-bow-garden"
};

const pageSeoByView = {
  home: "home",
  all: "shop",
  training: "training",
  coquette: "accessories",
  mind: "mind",
  wear: "apparel",
  bundles: "bundles",
  team: "team",
  play: "play",
  powerCheck: "powerCheck",
  code10: "code10",
  bowracle: "bowracle",
  secretBowGarden: "bowracle",
  search: "search",
  cart: "cart"
};

function getSearchFromLocation() {
  return new URLSearchParams(window.location.search).get("search") || "";
}

function getViewFromPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/shop" && getSearchFromLocation().trim()) return "search";
  if (path === "/shop/training") return "training";
  if (path === "/shop/accessories") return "coquette";
  return Object.entries(storePathByView).find(([, route]) => route === path)?.[0] || "home";
}

export default function App() {
  const { locale, t } = useI18n();
  const [activeView, setActiveView] = useState(getViewFromPath);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(getSearchFromLocation);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [isBowDesignerOpen, setIsBowDesignerOpen] = useState(false);
  const [bowHandoff, setBowHandoff] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const bowDesignerOpenerRef = useRef(null);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const featuredProducts = [
    ...["bar-grips", "chalk", "flex-strap-12"]
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean)
      .map((product) => getTrainingProductForModal(enrichCatalogProduct(product, {
        ...(trainingInventory[product.id] || {}),
        subcategory: trainingSubcategories[product.id]
      }))),
    ...["coquet-glitter-spray", "coquet-lazos-tul", "brazalete-gimnasia"]
      .map((id) => coquetteItems.find((product) => product.id === id))
      .filter(Boolean),
    ...["mental-squishy-dumpling", "mental-puzzle-magico"]
      .map((id) => publicMentalItems.find((product) => product.id === id))
      .filter(Boolean)
  ].map((product) => localizeProduct(product, locale));

  useEffect(() => {
    const seoKey = pageSeoByView[activeView] || pageSeoByView.home;
    const seo = {
      title: t(`seo.${seoKey}.title`),
      description: t(`seo.${seoKey}.description`)
    };
    const canonicalPath = activeView === "search"
      ? storePathByView.all
      : storePathByView[activeView] || "/";
    const canonicalUrl = new URL(canonicalPath, window.location.origin).href;
    const isIndexable = !["search", "cart"].includes(activeView);

    document.documentElement.lang = locale;
    document.title = seo.title;

    const description = document.querySelector('meta[name="description"]');
    const robots = document.querySelector('meta[name="robots"]');
    let canonical = document.querySelector('link[rel="canonical"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    const openGraphLocale = document.querySelector('meta[property="og:locale"]');
    let openGraphUrl = document.querySelector('meta[property="og:url"]');

    description?.setAttribute("content", seo.description);
    robots?.setAttribute("content", isIndexable ? "index,follow" : "noindex,follow");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.append(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
    openGraphTitle?.setAttribute("content", seo.title);
    openGraphDescription?.setAttribute("content", seo.description);
    openGraphLocale?.setAttribute("content", locale === "es" ? "es_US" : "en_US");

    if (!openGraphUrl) {
      openGraphUrl = document.createElement("meta");
      openGraphUrl.setAttribute("property", "og:url");
      document.head.append(openGraphUrl);
    }
    openGraphUrl.setAttribute("content", canonicalUrl);
    // TODO Shopify Markets: Add locale alternates/hreflang when market routes exist.
  }, [activeView, locale, t]);

  useEffect(() => {
    const handleHistoryChange = () => {
      const target = window.location.hash;
      setIsCartDrawerOpen(false);
      setSearchQuery(getSearchFromLocation());
      setSelectedProduct(null);
      setActiveView(getViewFromPath());
      window.setTimeout(() => {
        if (target) {
          document.querySelector(target)?.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      }, 0);
    };

    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  useEffect(() => {
    if (activeView !== "all" || window.location.hash !== "#shipping-info") return;
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById("shipping-info")?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeView]);

  const addToCart = (item, quantity = 1) => {
    const key = getProductKey(item);
    const image = item.image || item.gallery?.[0] || item.galleryImages?.[0] || fallbackProductImages[key] || "";
    const requestedQuantity = Math.max(1, Number(quantity) || 1);
    const existingItem = cartItems.find((cartItem) => cartItem.key === key);
    const maxQuantity = getCartStockLimit(item, cartItems, key);
    const existingQuantity = existingItem?.quantity || 0;
    const targetQuantity = typeof maxQuantity === "number"
      ? Math.min(maxQuantity, existingQuantity + requestedQuantity)
      : existingQuantity + requestedQuantity;
    const safeQuantity = targetQuantity - existingQuantity;
    if (safeQuantity < 1) return;
    const cartItem = {
      key,
      id: item.id,
      name: getProductName(item, locale),
      canonicalName: item.canonicalName || item.name,
      subcategory: item.subcategory,
      selectedOptions: item.selectedOptions,
      selectedVariant: item.selectedVariant,
      sku: item.selectedVariant?.sku || item.sku,
      category: item.category || item.modalCategory || item.group,
      image,
      price: getCartPrice(item),
      quantity: targetQuantity,
      maxQuantity,
      bundleComponents: item.bundleComponents,
      inventoryConsumption: getBundleInventoryConsumption(item, targetQuantity)
    };

    setCartItems((currentItems) => {
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.key === key
            ? {
                ...cartItem,
                quantity: targetQuantity,
                maxQuantity,
                inventoryConsumption: getBundleInventoryConsumption(cartItem, targetQuantity)
              }
            : cartItem
        );
      }

      return [
        ...currentItems,
        cartItem
      ];
    });

    setSelectedProduct(null);
    setLastAddedItem(cartItem);
    setIsCartDrawerOpen(true);
  };

  const updateCartQuantity = (key, quantity) => {
    if (quantity < 1) {
      setCartItems((currentItems) => currentItems.filter((item) => item.key !== key));
      setLastAddedItem((currentItem) => (currentItem?.key === key ? null : currentItem));
      return;
    }

    setCartItems((currentItems) => currentItems.map((item) => {
      if (item.key !== key) return item;
      const maxQuantity = getCartStockLimit(item, currentItems, key);
      const safeQuantity = typeof maxQuantity === "number" ? Math.min(maxQuantity, quantity) : quantity;
      return {
        ...item,
        quantity: safeQuantity,
        maxQuantity,
        inventoryConsumption: getBundleInventoryConsumption(item, safeQuantity)
      };
    }));
  };

  const removeCartItem = (key) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.key !== key));
    setLastAddedItem((currentItem) => (currentItem?.key === key ? null : currentItem));
  };

  const showCart = () => {
    setIsCartDrawerOpen(false);
    setActiveView("cart");
    window.history.pushState({}, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showHome = (target = "#inicio") => {
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setActiveView("home");
    window.history.pushState({}, "", target.startsWith("#") ? `/${target}` : "/");
    window.setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const showBoutique = (view = "training") => {
    const nextView = view === "boutique" ? "training" : view;
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setActiveView(nextView);
    window.history.pushState({}, "", storePathByView[nextView] || "/shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showTeam = (target = "") => {
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setSelectedProduct(null);
    setActiveView("team");
    window.history.pushState({}, "", `/team${target}`);
    window.setTimeout(() => {
      if (target) {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  const showPlay = (view = "play") => {
    const nextView = ["powerCheck", "code10", "bowracle", "secretBowGarden"].includes(view) ? view : "play";
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setSelectedProduct(null);
    setActiveView(nextView);
    window.history.pushState({}, "", storePathByView[nextView]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openBowDesigner = (event) => {
    setBowHandoff(null);
    bowDesignerOpenerRef.current = event?.currentTarget || document.activeElement;
    setIsBowDesignerOpen(true);
  };

  const showShipping = () => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setSelectedProduct(null);
    setActiveView("all");
    window.history.pushState({}, "", "/shop#shipping-info");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById("shipping-info")?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start"
        });
      });
    });
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (value.trim()) {
      setActiveView("search");
      const historyMethod = activeView === "search" ? "replaceState" : "pushState";
      window.history[historyMethod]({}, "", `/shop?search=${encodeURIComponent(value.trim())}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (activeView === "search") {
      setActiveView("all");
      window.history.replaceState({}, "", "/shop");
    }
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        activeView={activeView}
        authUser={authUser}
        cartCount={cartCount}
        onOpenCart={showCart}
        onOpenLogin={() => setIsAuthOpen(true)}
        onNavigateStore={showHome}
        onOpenBoutique={showBoutique}
        onOpenTeam={showTeam}
        onOpenPlay={() => showPlay("play")}
        onOpenShipping={showShipping}
        overlayOpen={Boolean(selectedProduct) || isCartDrawerOpen || isAuthOpen || isFinderOpen || isBowDesignerOpen}
      />
      <Suspense fallback={<main className="route-loading" aria-busy="true" />}>
      {activeView === "home" ? (
        <main>
          <Hero onOpenBoutique={() => showBoutique("all")} />
          <FeaturedProducts
            items={featuredProducts.slice(0, 6)}
            kicker={t("home.featured.eyebrow")}
            title={t("home.featured.title")}
            subtitle={t("home.featured.text")}
            buttonText={t("home.featured.cta")}
            onSelectProduct={setSelectedProduct}
            onAddToCart={addToCart}
            onOpenBoutique={() => showBoutique("all")}
          />
          <ShopByDepartment onOpenDepartment={showBoutique} />
          <BowDesignerCTA onOpenDesigner={openBowDesigner} />
          <TeamShowcase onOpenTeam={showTeam} />
          <PrfctCode />
          <SocialProofSection />
          <PlayTeaser onOpenPlay={() => showPlay("play")} />
          <BrandIntro />
          <Footer
            onBackHome={showHome}
            onOpenDepartment={showBoutique}
            onOpenTeam={showTeam}
            onOpenShipping={showShipping}
          />
        </main>
      ) : activeView === "team" ? (
        <TeamPage
          onBackHome={showHome}
          onOpenBoutique={() => showBoutique("training")}
          onOpenDepartment={showBoutique}
          onOpenShipping={showShipping}
          onOpenBowDesigner={openBowDesigner}
        />
      ) : activeView === "play" ? (
        <>
          <PlayPage onOpenPowerCheck={() => showPlay("powerCheck")} onOpenCode10={() => showPlay("code10")} onOpenBowracle={() => showPlay("bowracle")} onOpenSecretBowGarden={() => showPlay("secretBowGarden")} />
          <Footer
            onBackHome={showHome}
            onOpenDepartment={showBoutique}
            onOpenTeam={showTeam}
            onOpenShipping={showShipping}
          />
        </>
      ) : activeView === "powerCheck" ? (
        <>
          <PowerCheckPage onBackToPlay={() => showPlay("play")} />
          <Footer
            onBackHome={showHome}
            onOpenDepartment={showBoutique}
            onOpenTeam={showTeam}
            onOpenShipping={showShipping}
          />
        </>
      ) : activeView === "code10" ? (
        <>
          <Code10Page onBackToPlay={() => showPlay("play")} />
          <Footer onBackHome={showHome} onOpenDepartment={showBoutique} onOpenTeam={showTeam} onOpenShipping={showShipping} />
        </>
      ) : activeView === "bowracle" ? (
        <>
          <PlayBowracle onBackToPlay={() => showPlay("play")} onStoreHandoff={(payload) => {
            if (!payload) return;
            bowDesignerOpenerRef.current = document.activeElement;
            setBowHandoff(payload);
            setIsBowDesignerOpen(true);
          }} />
          <Footer onBackHome={showHome} onOpenDepartment={showBoutique} onOpenTeam={showTeam} onOpenShipping={showShipping} />
        </>
      ) : activeView === "secretBowGarden" ? (
        <>
          <SecretBowGarden onBackToPlay={() => showPlay("play")} onStoreHandoff={(payload) => {
            if (!payload) return;
            bowDesignerOpenerRef.current = document.activeElement;
            setBowHandoff(payload);
            setIsBowDesignerOpen(true);
          }} />
          <Footer onBackHome={showHome} onOpenDepartment={showBoutique} onOpenTeam={showTeam} onOpenShipping={showShipping} />
        </>
      ) : activeView === "cart" ? (
        <main>
          <CartSection
            items={cartItems}
            authUser={authUser}
            onOpenLogin={() => setIsAuthOpen(true)}
            onOpenBoutique={() => showBoutique("training")}
            onAddToCart={addToCart}
            onQuantityChange={updateCartQuantity}
            onRemove={removeCartItem}
          />
        </main>
      ) : (
        <main>
          <ProductSection
            products={products}
            view={activeView}
            onSelectProduct={setSelectedProduct}
            onAddToCart={addToCart}
            searchQuery={searchQuery}
            onOpenDepartment={showBoutique}
            onOpenBoutique={showBoutique}
            onBackHome={() => showHome("#inicio")}
            onOpenBowDesigner={openBowDesigner}
          />
          <Footer
            onBackHome={showHome}
            onOpenDepartment={showBoutique}
            onOpenTeam={showTeam}
            onOpenShipping={showShipping}
          />
        </main>
      )}
      </Suspense>
      {selectedProduct ? <Suspense fallback={null}><ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        onOpenBowDesigner={(event) => {
          setSelectedProduct(null);
          openBowDesigner(event);
        }}
      /></Suspense> : null}
      {isBowDesignerOpen ? <Suspense fallback={null}><BowDesignerModal
        isOpen={isBowDesignerOpen}
        onClose={() => setIsBowDesignerOpen(false)}
        openerRef={bowDesignerOpenerRef}
        initialDesign={bowHandoff}
        source={bowHandoff?.source}
        oracleCard={bowHandoff?.oracleCard}
        context={activeView === "team" ? "team" : "shop"}
      /></Suspense> : null}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        items={cartItems}
        lastAddedItem={lastAddedItem}
        onClose={() => setIsCartDrawerOpen(false)}
        onOpenCart={showCart}
        onAddToCart={addToCart}
        onQuantityChange={updateCartQuantity}
        onRemove={removeCartItem}
      />
      {customerAccountsVisible ? (
        <Suspense fallback={null}><AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onAuthSuccess={setAuthUser} /></Suspense>
      ) : null}
      {activeView === "home" ? <Suspense fallback={null}><NewsletterExperience enabled /></Suspense> : null}
      {isFinderOpen ? <Suspense fallback={null}><GuidedFinder
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        onSelectProduct={setSelectedProduct}
        onViewAll={() => showBoutique("all")}
      /></Suspense> : null}
    </>
  );
}
