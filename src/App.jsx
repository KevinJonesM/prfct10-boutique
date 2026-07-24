import { useEffect, useState } from "react";
import { products } from "./data/products";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BrandIntro from "./components/BrandIntro/BrandIntro";
import ProductSection from "./components/ProductSection/ProductSection";
import MintCTA from "./components/MintCTA/MintCTA";
import ProductModal from "./components/ProductModal/ProductModal";
import AuthModal from "./components/AuthModal/AuthModal";
import PrfctCode from "./components/PrfctCode/PrfctCode";
import About from "./components/About/About";
import SocialCTA from "./components/SocialCTA/SocialCTA";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import SignatureText from "./components/SignatureText/SignatureText";
import ShopByDepartment from "./components/ShopByDepartment/ShopByDepartment";
import TeamPage from "./components/Team/TeamPage";
import TeamShowcase from "./components/Team/TeamShowcase";
import Reveal from "./components/Motion/Reveal";
import NewsletterExperience from "./components/Newsletter/NewsletterExperience";
import SocialProofSection from "./components/Reviews/SocialProofSection";
import GuidedFinder from "./components/GuidedFinder/GuidedFinder";
import OptimizedImage from "./components/OptimizedImage/OptimizedImage";
import ProductCard from "./components/ProductCard/ProductCard";
import { coquetteItems } from "./components/ProductSection/data/accessoryProducts";
import { publicMentalItems } from "./components/ProductSection/data/mindGymProducts";
import { enrichCatalogProduct } from "./components/ProductSection/data/catalogUtils";
import { getTrainingProductForModal, trainingInventory, trainingSubcategories } from "./components/ProductSection/data/trainingProducts";
import { useI18n } from "./i18n/I18nProvider";
import { localizeProduct } from "./i18n/productTranslations";
import { localizeOptionValue } from "./i18n/catalogOptions";
import { formatCommercePrice, getPriceDisplay } from "./utils/commerce";
import { createWhatsAppMessageLink } from "./utils/whatsapp";

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
  }
];

const fallbackProductImages = {
  "bar-grips": "/images/product-bar-grips.png",
  chalk: "/images/product-chalk-real.jpg",
  "tiger-paws": "/images/product-tiger-paws-beige-portada.png",
  "flex-strap-12": "/images/product-flex-strap.png"
};

function getProductName(item) {
  const baseName = item.modalName || item.brandName || item.name;
  const options = Object.values(item.selectedOptions || {}).filter(Boolean).map((value) => localizeOptionValue(locale, value));
  return options.length ? `${baseName} - ${options.join(" / ")}` : baseName;
}

function getProductKey(item) {
  const baseKey = item.id || item.name || item.modalName;
  const variantKey = item.selectedVariant?.sku || Object.values(item.selectedOptions || {}).filter(Boolean).join("-");
  return variantKey ? `${baseKey}::${variantKey}` : baseKey;
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
  const options = Object.values(item.selectedOptions || {}).filter(Boolean);
  const name = options.length ? `${localized.name} - ${options.join(" / ")}` : localized.name;
  const category = item.subcategory ? t(`categories.${item.subcategory}`) : localized.category || item.category || "PRFCT10";
  return { ...item, name, category };
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
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 5;
  const total = Math.max(0, subtotal - discount + shipping);
  const accountEmail = authUser?.email || account.email;
  const cartIds = items.map((item) => item.id || item.key.split("::")[0]);
  const recommendations = smartSuggestions.filter((suggestion) => {
    const alreadyInCart = cartIds.includes(suggestion.id);
    const triggered = suggestion.triggerIds.some((id) => cartIds.includes(id));
    return !alreadyInCart && (triggered || items.length === 0);
  }).map((suggestion) => localizeProduct(suggestion, locale));
  const localizedItems = items.map((item) => getLocalizedCartItem(item, locale, t));
  const canRequestOrder = items.length > 0;

  const applyPromo = () => {
    const normalizedCode = promoCode.trim().toUpperCase();
    setPromoApplied(["PRFCT10", "PERFECT10", "GYM10"].includes(normalizedCode) ? normalizedCode : "");
  };

  const onSubmitOrderRequest = (event) => {
    event.preventDefault();
    if (!canRequestOrder) return;
    const itemLines = localizedItems.map((item) =>
      `- ${item.quantity} x ${item.name} (${formatMoney(item.price)}${item.price ? " each" : ""})`
    );
    const message = [
      "Hi PRFCT10, I would like help completing this order:",
      ...itemLines,
      `Delivery preference: ${customer.delivery}`,
      customer.city ? `ZIP code: ${customer.city}` : "",
      customer.phone ? `Contact phone: ${customer.phone}` : "",
      accountEmail ? `Email: ${accountEmail}` : "",
      customer.note ? `Note: ${customer.note}` : "",
      "Please confirm availability, final pricing, shipping, and return details before payment."
    ].filter(Boolean).join("\n");

    window.open(createWhatsAppMessageLink(message), "_blank", "noopener,noreferrer");
    setRequestStarted(true);
  };

  return (
    <section className="cart-section" id="cart" aria-labelledby="cart-title">
      <div className="cart-section__shell">
        <div className="cart-section__header">
          <p>{t("cart.assisted")}</p>
          <h2 id="cart-title">{t("cart.title", { count: itemCount })}</h2>
          <span>{t("cart.intro")}</span>
        </div>

        <div className="cart-section__layout">
          <div className="cart-section__main">
            <section className="cart-panel cart-panel--account" aria-label={t("navigation.account")}>
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
            </section>

            <section className="cart-panel" aria-label={t("cart.items")}>
              {items.length ? (
                <div className="cart-items">
                  {localizedItems.map((item) => (
                    <article className="cart-item" key={item.key}>
                      {item.image ? <OptimizedImage src={item.image} alt="" loading="lazy" width="160" height="160" /> : <span className="cart-item__image-fallback" aria-hidden="true" />}
                      <div className="cart-item__info">
                        <strong>{item.name}</strong>
                        <span>{item.category || "PRFCT10"}</span>
                      </div>
                      <div className="cart-item__price">{formatMoney(item.price)}</div>
                      <div className="cart-item__qty" aria-label={t("modal.quantity", { quantity: item.quantity })}>
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)}>+</button>
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
              <span style={{ width: `${Math.min(100, (subtotal / 75) * 100)}%` }} />
            </div>
            <p className="cart-summary__shipping">
              {hasPriceOnRequest
                ? t("cart.trackedCalculated")
                : subtotal >= 75
                  ? t("cart.freeUnlocked")
                  : t("cart.freeMore", { amount: formatMoney(Math.max(0, 75 - subtotal)) })}
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
              {promoApplied && <p className="cart-promo__success">{t("cart.discount")}: 10% ({promoApplied})</p>}

              <div className="cart-summary__lines">
                <div><span>{hasPriceOnRequest ? t("cart.knownSubtotal") : t("cart.subtotal", { count: itemCount })}</span><strong>{formatMoney(subtotal)}</strong></div>
                <div><span>{t("cart.discount")}</span><strong>-{formatMoney(discount)}</strong></div>
                <div><span>{t("cart.shipping")}</span><strong>{hasPriceOnRequest ? t("cart.confirmSupport") : shipping ? formatMoney(shipping) : t("cart.free")}</strong></div>
                <div><span>{t("cart.tax")}</span><strong>{t("cart.later")}</strong></div>
                <div className="cart-summary__total"><span>{t(hasPriceOnRequest ? "cart.knownEstimate" : "cart.estimate")}</span><strong>{formatMoney(total)}</strong></div>
              </div>

              {hasPriceOnRequest && <p className="cart-summary__notice">{t("cart.priceNotice")}</p>}

              <button className="cart-summary__checkout" type="submit" disabled={!canRequestOrder}>
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
  }).map((suggestion) => localizeProduct(suggestion, locale));
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
                <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)}>+</button>
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
          <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
        ))}
      </Reveal>
      <button className="featured-stars__boutique" type="button" onClick={onOpenBoutique}>
        {buttonText}
      </button>
    </section>
  );
}

function ShippingCloseout({ onOpenBoutique }) {
  const { t } = useI18n();
  const shippingTitle = (
    <>
      {t("store.shipping.title1")}
      <br />
      {t("store.shipping.title2")}
    </>
  );

  return (
    <section className="shipping-closeout" aria-label={t("store.shipping.eyebrow")}>
      <Reveal className="shipping-closeout__panel">
        <div className="shipping-closeout__copy">
          <p>{t("store.shipping.eyebrow")}</p>
          <h2 className="shipping-title" aria-label={`${t("store.shipping.title1")} ${t("store.shipping.title2")}`}>
            <span className="shipping-title__offset" aria-hidden="true">{shippingTitle}</span>
            <span className="shipping-title__main">{shippingTitle}</span>
          </h2>
          <span>{t("store.shipping.text")}</span>
          <small>{t("store.shipping.note")}</small>
          <button type="button" onClick={onOpenBoutique}>
            {t("store.shipping.cta")}
          </button>
        </div>
        <div className="shipping-closeout__art shipping-art" aria-hidden="true">
          <svg viewBox="0 0 460 280" role="img">
            <path className="shipping-art__route" d="M36 198 C126 120 206 234 278 154 C328 98 362 118 414 66" />
            <circle className="shipping-art__pin" cx="414" cy="66" r="22" />
            <path className="shipping-art__heart" d="M414 61 c-8 -9 -21 -2 -17 10 c3 9 17 17 17 17 s14 -8 17 -17 c4 -12 -9 -19 -17 -10z" />
            <g className="shipping-art__truck" transform="translate(132 150)">
              <rect x="0" y="26" width="94" height="54" rx="14" />
              <path d="M94 42 h36 l24 23 v15 h-60z" />
              <path d="M110 48 h20 l12 13 h-32z" />
              <circle cx="30" cy="86" r="12" />
              <circle cx="122" cy="86" r="12" />
              <path d="M22 48 h42" />
            </g>
          </svg>
        </div>
      </Reveal>
    </section>
  );
}

const storePathByView = {
  all: "/shop",
  training: "/training-gear",
  coquette: "/accessories",
  mind: "/mind-gym",
  wear: "/apparel",
  team: "/team"
};

const pageSeoByView = {
  home: {
    title: "PRFCT10 | Gymnastics Gear, Accessories & Apparel",
    description: "Shop PRFCT10 gymnastics training gear, accessories, Mind Gym favorites, and lifestyle apparel, plus custom team services."
  },
  all: {
    title: "Shop All Gymnastics Products | PRFCT10",
    description: "Browse PRFCT10 training gear, gymnastics accessories, Mind Gym products, and lifestyle apparel in one collection."
  },
  training: {
    title: "Gymnastics Training Gear | PRFCT10",
    description: "Shop gymnastics grips, wrist support, flexibility tools, strength essentials, and recovery accessories from PRFCT10."
  },
  coquette: {
    title: "Gymnastics Accessories | PRFCT10",
    description: "Shop PRFCT10 gymnastics bows, jewelry, bags, meet-day sparkle, organization, and thoughtful gifts."
  },
  mind: {
    title: "Mind Gym Puzzles & Sensory Favorites | PRFCT10",
    description: "Explore PRFCT10 Mind Gym puzzles, fidgets, sensory favorites, and playful challenges for curious gymnasts."
  },
  wear: {
    title: "Gymnastics-Inspired Apparel | PRFCT10",
    description: "Discover PRFCT10 tees, hoodies, shorts, and gymnastics-inspired lifestyle apparel for practice days and off days."
  },
  team: {
    title: "Custom Team Leotards & Gymnastics Teamwear | PRFCT10 TEAM",
    description: "Start a guided PRFCT10 TEAM quote for custom competition or training leotards designed around your program."
  },
  search: {
    title: "Search PRFCT10 Products",
    description: "Search the PRFCT10 consumer catalog across training gear, accessories, Mind Gym, and apparel."
  },
  cart: {
    title: "Your PRFCT10 Bag",
    description: "Review your selected PRFCT10 products and continue through assisted ordering support."
  }
};

function getSearchFromLocation() {
  return new URLSearchParams(window.location.search).get("search") || "";
}

function getViewFromPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/shop" && getSearchFromLocation().trim()) return "search";
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
  const [authUser, setAuthUser] = useState(null);
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
    const seo = pageSeoByView[activeView] || pageSeoByView.home;
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

    if (!openGraphUrl) {
      openGraphUrl = document.createElement("meta");
      openGraphUrl.setAttribute("property", "og:url");
      document.head.append(openGraphUrl);
    }
    openGraphUrl.setAttribute("content", canonicalUrl);
  }, [activeView, locale]);

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

  const addToCart = (item, quantity = 1) => {
    const key = getProductKey(item);
    const image = item.image || item.gallery?.[0] || item.galleryImages?.[0] || fallbackProductImages[key] || "";
    const safeQuantity = Math.max(1, Number(quantity) || 1);
    const cartItem = {
      key,
      id: item.id,
      name: getProductName(item),
      canonicalName: item.canonicalName || item.name,
      subcategory: item.subcategory,
      selectedOptions: item.selectedOptions,
      category: item.category || item.modalCategory || item.group,
      image,
      price: getCartPrice(item),
      quantity: safeQuantity
    };

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.key === key);
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.key === key ? { ...cartItem, quantity: cartItem.quantity + safeQuantity } : cartItem
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

    setCartItems((currentItems) => currentItems.map((item) => (item.key === key ? { ...item, quantity } : item)));
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

  const showTeam = (target = "#team-page-title") => {
    setIsCartDrawerOpen(false);
    setSearchQuery("");
    setSelectedProduct(null);
    setActiveView("team");
    window.history.pushState({}, "", `/team${target}`);
    window.setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
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
      />
      {activeView === "home" ? (
        <main>
          <Hero onOpenBoutique={() => showBoutique("all")} />
          <FeaturedProducts
            items={featuredProducts}
            kicker={t("home.featured.eyebrow")}
            title={t("home.featured.title")}
            subtitle={t("home.featured.text")}
            buttonText={t("home.featured.cta")}
            onSelectProduct={setSelectedProduct}
            onOpenBoutique={() => showBoutique("all")}
          />
          <ShopByDepartment onOpenDepartment={showBoutique} />
          <TeamShowcase onOpenTeam={showTeam} />
          <BrandIntro />
          <PrfctCode />
          <About />
          <MintCTA onOpenDepartment={showBoutique} onOpenFinder={() => setIsFinderOpen(true)} />
          <SocialProofSection />
          <section className="final-wrap">
            <div className="final-wrap__overlay" aria-hidden="true" />
            <div className="final-wrap__dots" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, index) => (
                <span key={index} style={{ "--dot-index": index }} />
              ))}
            </div>
            <SocialCTA />
            <div className="final-photo-wrap">
              <FinalCTA onOpenBoutique={() => showBoutique("training")} />
              <Footer
                onBackHome={showHome}
                onOpenBoutique={() => showBoutique("training")}
                onOpenDepartment={showBoutique}
              />
            </div>
          </section>
        </main>
      ) : activeView === "team" ? (
        <TeamPage
          onBackHome={showHome}
          onOpenBoutique={() => showBoutique("training")}
          onOpenDepartment={showBoutique}
        />
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
          />
          {activeView !== "boutique" && (
            <MintCTA onOpenDepartment={showBoutique} onOpenFinder={() => setIsFinderOpen(true)} />
          )}
          <ShippingCloseout onOpenBoutique={() => showBoutique("training")} />
          <Footer
            onBackHome={showHome}
            onOpenBoutique={() => showBoutique("training")}
            onOpenDepartment={showBoutique}
          />
        </main>
      )}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />
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
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onAuthSuccess={setAuthUser} />
      <NewsletterExperience enabled={activeView === "home"} />
      <GuidedFinder
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        onSelectProduct={setSelectedProduct}
        onViewAll={() => showBoutique("all")}
      />
    </>
  );
}
