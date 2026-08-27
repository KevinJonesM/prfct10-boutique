import { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import Reveal from "../Motion/Reveal";
import { coquetteItems, shopLines } from "./data/accessoryProducts";
import { wearItems } from "./data/apparelProducts";
import { publicMentalItems } from "./data/mindGymProducts";
import { publicBundleProducts } from "./data/bundleProducts";
import { enrichCatalogProduct } from "./data/catalogUtils";
import {
  getTrainingProductForModal,
  trainingExtraProducts,
  trainingInventory,
  trainingProductIds,
  trainingSubcategories
} from "./data/trainingProducts";
import ProductGrid from "./components/ProductGrid";
import FilterTabs, {
  filterBySearch,
  filterByTab,
  mentalDisplayOrder,
  mentalFilterTabs,
  orderItems,
  ProductFinder,
  sortItems,
  trainingFilterTabs,
  wearFilterTabs,
  coquetteCategoryFilterTabs
} from "./components/ProductFilters";
import { createCollectionProduct } from "./components/CategorySection";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";
import "./ProductSection.css";

const shopAllDepartmentTabs = [
  { value: "all", labelKey: "filters.allDepartments", tone: "all" },
  { value: "training", labelKey: "navigation.trainingGear", tone: "training" },
  { value: "coquette", labelKey: "navigation.accessories", tone: "accessories" },
  { value: "mind", labelKey: "navigation.mindGym", tone: "mind" },
  { value: "wear", labelKey: "navigation.apparel", tone: "apparel" }
];

const bundleFilterTabs = [{ value: "all", labelKey: "filters.all" }];

export default function ProductSection({
  products,
  onSelectProduct,
  onAddToCart,
  searchQuery,
  view = "boutique",
  onOpenDepartment,
  onOpenBoutique,
  onBackHome,
  onOpenBowDesigner
}) {
  const { locale, t } = useI18n();
  const [selectedCollectionItem, setSelectedCollectionItem] = useState(null);
  const [activeTrainingFilter, setActiveTrainingFilter] = useState(trainingFilterTabs[0].value);
  const [trainingSortMode, setTrainingSortMode] = useState("featured");
  const [activeShopDepartment, setActiveShopDepartment] = useState("all");

  useEffect(() => {
    if (view === "all") setActiveShopDepartment("all");
  }, [view]);

  const trainingProducts = useMemo(
    () => [
      ...trainingProductIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean)
        .map((product) => localizeProduct(getTrainingProductForModal(enrichCatalogProduct(product, {
          ...(trainingInventory[product.id] || {}),
          subcategory: trainingSubcategories[product.id]
        })), locale)),
      ...trainingExtraProducts.map((product) => localizeProduct(getTrainingProductForModal(enrichCatalogProduct(product, {
        ...(trainingInventory[product.id] || {}),
        subcategory: trainingSubcategories[product.id]
      })), locale))
    ],
    [products, locale]
  );
  const activeTrainingTab = trainingFilterTabs.find((tab) => tab.value === activeTrainingFilter);
  const tabbedTrainingProducts = searchQuery ? trainingProducts : filterByTab(trainingProducts, activeTrainingTab);
  const visibleTrainingProducts = sortItems(filterBySearch(tabbedTrainingProducts, searchQuery), trainingSortMode);
  const isSearchView = view === "search";
  const isAllView = view === "all";
  const matchesBowSearch = isSearchView && /(lazos?|bows?|moños?)/i.test(searchQuery.trim());
  const showBundles = view === "bundles"
    || isSearchView
    || view === "boutique"
    || (isAllView && activeShopDepartment === "all");
  const showShopDepartment = (department) => {
    if (isAllView) return activeShopDepartment === "all" || activeShopDepartment === department;
    if (isSearchView || view === "boutique") return true;
    return view === department;
  };
  const heroMedia = {
    boutique: {
      image: "/images/products-drop-hero.jpg",
      alt: "Gymnast training in a pastel gym"
    },
    training: {
      image: "/images/hero-training-gear-editorial.jpg",
      alt: "Gymnast gripping uneven bars with training grips"
    },
    coquette: {
      image: "/images/hero-accessories-ribbon-green.png",
      alt: "Rhythmic gymnast performing with a green ribbon"
    },
    mind: {
      image: "/images/hero-boutique-mental.png",
      alt: "Young athletes exploring colorful puzzles and sensory toys"
    },
    wear: {
      image: "/images/hero-apparel-lifestyle-editorial-wide.png",
      alt: "Four athletes wearing colorful PRFCT10 gymnastics-inspired apparel"
    },
    bundles: {
      image: "/images/product-flex-strap.png",
      alt: "PRFCT10 curated gym-day bundles"
    },
    all: {
      image: "/images/shop-all-hero-gymnast.png",
      alt: "Gymnast in a pink competition leotard"
    },
    search: {
      image: "/images/products-drop-hero.jpg",
      alt: "Gymnast training in a pastel gym"
    }
  }[view] || {
    image: "/images/products-drop-hero.jpg",
    alt: "Gymnast training in a pastel gym"
  };
  const heroKey = ["boutique", "training", "coquette", "mind", "wear", "bundles", "all", "search"].includes(view) ? view : "boutique";
  const heroCopy = {
    ...heroMedia,
    alt: t(`store.hero.${heroKey}.text`),
    eyebrow: t(`store.hero.${heroKey}.eyebrow`),
    title: [t(`store.hero.${heroKey}.title1`), t(`store.hero.${heroKey}.title2`)],
    text: heroKey === "search"
      ? t(searchQuery ? "store.hero.search.results" : "store.hero.search.empty", { query: searchQuery })
      : t(`store.hero.${heroKey}.text`)
  };
  const heroCta = {
    training: { label: t("store.hero.training.cta"), href: "#product-grid" },
    coquette: { label: t("store.hero.coquette.cta"), href: "#coqueteria" },
    mind: { label: t("store.hero.mind.cta"), href: "#gimnasia-mental" },
    wear: { label: t("store.hero.wear.cta"), href: "#ropa-mallas" }
  }[view];
  const introKey = ["training", "coquette", "mind", "wear", "bundles", "all"].includes(view) ? view : "all";
  const categoryIntro = {
    eyebrow: t(`store.intro.${introKey}.eyebrow`),
    title: [t(`store.intro.${introKey}.title1`), t(`store.intro.${introKey}.title2`)],
    text: t(`store.intro.${introKey}.text`)
  };
  return (
    <section className={`products products--${view}`} id="productos">
      <div className={`products__hero products__hero--${view}`}>
        <div className="products__hero-media">
          <OptimizedImage
            className="products__hero-image"
            src={heroCopy.image}
            alt={heroCopy.alt}
            loading="eager"
            fetchPriority="high"
            width="1800"
            height="1050"
          />
        </div>
        <div className="products__hero-overlay" aria-hidden="true" />
        <div className="products__hero-fade" aria-hidden="true" />
        <div className="products__hero-content">
          <div className="products__hero-copy">
            <p className="products__eyebrow">{heroCopy.eyebrow}</p>
            <h1 className="products__title">
              <span className="products__title-line products__title-line--gymnastics">{heroCopy.title[0]}</span>
              <span className="products__title-feature">{heroCopy.title[1]}</span>
            </h1>
            <p className="products__subtitle">{heroCopy.text}</p>
            {heroCta && (
              <a className="products__hero-cta" href={heroCta.href}>
                {heroCta.label}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="products__container">
        <Reveal className="commerce-assurances" delay={80} aria-label={t("assurances.label")}>
          <span>{t("assurances.shipping")}</span>
          <span>{t("assurances.availability")}</span>
          <span>{t("assurances.returns")}</span>
        </Reveal>
        {(view === "coquette" || matchesBowSearch) && (
          <Reveal className="bow-context" delay={100}>
            <div>
              <p>{t("bow.contextEyebrow")}</p>
              <h2>{t(matchesBowSearch ? "bow.searchTitle" : "bow.accessoriesTitle")}</h2>
              <span>{t(matchesBowSearch ? "bow.searchText" : "bow.accessoriesText")}</span>
            </div>
            <button type="button" onClick={onOpenBowDesigner}>{t("bow.accessoriesCta")}</button>
          </Reveal>
        )}
        {isAllView && (
          <div className="shop-all-departments" aria-labelledby="shop-all-departments-title">
            <div>
              <p>{t("store.shopAll.browse")}</p>
              <h2 id="shop-all-departments-title">{t("store.shopAll.title")}</h2>
            </div>
            <div className="shop-all-departments__buttons" aria-label={t("store.shopAll.filterLabel")}>
              {shopAllDepartmentTabs.map((tab) => (
                <button
                  className={`shop-all-departments__button shop-all-departments__button--${tab.tone}${activeShopDepartment === tab.value ? " shop-all-departments__button--active" : ""}`}
                  key={tab.value}
                  type="button"
                  aria-pressed={activeShopDepartment === tab.value}
                  onClick={() => setActiveShopDepartment(tab.value)}
                >
                  {t(tab.labelKey)}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="shop-lines" aria-label={t("store.shopAll.browse")}>
          {shopLines.map((line) => (
            <button
              className={`shop-line shop-line--${line.tone}`}
              key={line.title}
              onClick={() => onOpenDepartment?.({
                training: "training",
                cute: "coquette",
                mind: "mind",
                wear: "wear"
              }[line.tone])}
              type="button"
            >
              <div className="shop-line__media">
                <OptimizedImage
                  src={line.image}
                  alt={t({ training: "navigation.trainingGear", cute: "navigation.accessories", mind: "navigation.mindGym", wear: "navigation.apparel" }[line.tone])}
                  loading="lazy"
                  width="720"
                  height="540"
                />
              </div>
              <div className="shop-line__body">
                <h3>{t({ training: "navigation.trainingGear", cute: "navigation.accessories", mind: "navigation.mindGym", wear: "navigation.apparel" }[line.tone])}</h3>
                <p>{t(`store.departmentCards.${line.tone}`)}</p>
                <span>{t("store.departmentCards.enter")}</span>
              </div>
            </button>
          ))}
        </div>

        <aside className="shipping-cta" id="shipping-info" aria-labelledby="shipping-info-title">
          <div className="shipping-cta__panel">
            <div className="shipping-cta__copy">
              <p>{t("store.shipping.eyebrow")}</p>
              <h2 id="shipping-info-title">
                {t("store.shipping.title1")}
                <br />
                {t("store.shipping.title2")}
              </h2>
              <span>{t("store.shipping.text")}</span>
            </div>
          </div>
        </aside>

        {showShopDepartment("training") && <Reveal as="section" className="training-strip" id="product-grid" delay={100}>
          {isAllView ? (
            <div className="collection-strip__header">
              <p>{t("store.sections.trainingEyebrow")}</p>
              <h2 id="training-products-title">{t("store.sections.trainingTitle")}</h2>
              <span>{t("store.sections.trainingText")}</span>
            </div>
          ) : (
            <h2 className="products__sr-only" id="training-products-title">{t("store.sections.trainingTitle")}</h2>
          )}

          <FilterTabs
            tabs={trainingFilterTabs}
            activeValue={isSearchView ? "all" : activeTrainingFilter}
            onChange={setActiveTrainingFilter}
            labelledBy="training-products-title"
          />
          <ProductFinder
            sortValue={trainingSortMode}
            onSortChange={setTrainingSortMode}
            helperText={t("departments.trainingHelp")}
          />
          <div className="products__grid">
            {visibleTrainingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
            {!visibleTrainingProducts.length && (
              <div className="products__empty" role="status">
                <strong>{t("product.noProducts")}</strong>
                <span>{t("product.noProductsHelp")}</span>
              </div>
            )}
          </div>
        </Reveal>}

        {showShopDepartment("coquette") && <ProductGrid
          id="coqueteria"
          eyebrow={t("store.sections.accessoriesEyebrow")}
          title={t("store.sections.accessoriesTitle")}
          text={t("store.sections.accessoriesText")}
          items={coquetteItems}
          modifier="coquette"
          filterTabs={coquetteCategoryFilterTabs}
          searchQuery={searchQuery}
          onSelectItem={(item, type) => setSelectedCollectionItem(createCollectionProduct(item, type))}
          onAddToCart={onAddToCart}
          onOpenBoutique={onOpenBoutique}
          onBackHome={onBackHome}
          showHeader={isAllView}
        />}

        {showShopDepartment("mind") && <ProductGrid
          id="gimnasia-mental"
          eyebrow={t("store.sections.mindEyebrow")}
          title={t("store.sections.mindTitle")}
          text={t("store.sections.mindText")}
          items={orderItems(publicMentalItems, mentalDisplayOrder)}
          modifier="mind"
          filterTabs={mentalFilterTabs}
          searchQuery={searchQuery}
          onSelectItem={(item, type) => setSelectedCollectionItem(createCollectionProduct(item, type))}
          onAddToCart={onAddToCart}
          onOpenBoutique={onOpenBoutique}
          onBackHome={onBackHome}
          showHeader={isAllView}
        />}

        {showShopDepartment("wear") && <ProductGrid
          id="ropa-mallas"
          eyebrow={t("store.sections.apparelEyebrow")}
          title={t("store.sections.apparelTitle")}
          text={t("store.sections.apparelText")}
          items={wearItems}
          modifier="wear"
          filterTabs={wearFilterTabs}
          searchQuery={searchQuery}
          onSelectItem={(item, type) => setSelectedCollectionItem(createCollectionProduct(item, type))}
          onAddToCart={onAddToCart}
          onOpenBoutique={onOpenBoutique}
          onBackHome={onBackHome}
          showHeader={isAllView}
        />}

        {showBundles && <ProductGrid
          id="bundles"
          eyebrow={t("store.sections.bundlesEyebrow")}
          title={t("store.sections.bundlesTitle")}
          text={t("store.sections.bundlesText")}
          items={publicBundleProducts}
          modifier="bundles"
          filterTabs={bundleFilterTabs}
          searchQuery={searchQuery}
          onSelectItem={(item, type) => setSelectedCollectionItem(createCollectionProduct(item, type))}
          onAddToCart={onAddToCart}
          onOpenBoutique={onOpenBoutique}
          onBackHome={onBackHome}
          showHeader={isAllView || view === "bundles"}
        />}
      </div>

      <ProductModal
        product={selectedCollectionItem}
        onClose={() => setSelectedCollectionItem(null)}
        onAddToCart={onAddToCart}
        onOpenBowDesigner={(event) => {
          setSelectedCollectionItem(null);
          onOpenBowDesigner?.(event);
        }}
      />
    </section>
  );
}
