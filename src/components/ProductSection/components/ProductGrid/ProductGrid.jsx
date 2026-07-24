import { useMemo, useState } from "react";
import CategorySection from "../CategorySection";
import FilterTabs, { filterBySearch, filterByTab, ProductFinder, sortItems } from "../ProductFilters";
import Reveal from "../../../Motion/Reveal";
import ProductCard from "../../../ProductCard/ProductCard";
import { useI18n } from "../../../../i18n/I18nProvider";
import { localizeProduct } from "../../../../i18n/productTranslations";

export default function ProductGrid({ id, eyebrow, title, text, items, modifier, filterTabs, searchQuery, onSelectItem, showHeader = false }) {
  const [activeFilter, setActiveFilter] = useState(filterTabs?.[0]?.value || "all");
  const [sortMode, setSortMode] = useState("featured");
  const { locale, t } = useI18n();
  const localizedItems = useMemo(() => items.map((item) => localizeProduct(item, locale)), [items, locale]);
  const finderText = {
    coquette: t("departments.accessoriesHelp"),
    mind: t("departments.mindHelp"),
    wear: t("departments.apparelHelp")
  }[modifier];
  const activeTab = filterTabs?.find((tab) => tab.value === activeFilter);
  const tabbedItems = searchQuery ? localizedItems : filterByTab(localizedItems, activeTab);
  const visibleItems = sortItems(filterBySearch(tabbedItems, searchQuery), sortMode);
  const titleId = `${id}-title`;

  return (
    <Reveal as="section" className={`collection-strip collection-strip--${modifier}`} id={id} delay={100}>
      <CategorySection id={id} eyebrow={eyebrow} title={title} text={text} showHeader={showHeader} />
      <FilterTabs tabs={filterTabs} activeValue={activeFilter} onChange={setActiveFilter} labelledBy={titleId} />
      <ProductFinder sortValue={sortMode} onSortChange={setSortMode} helperText={finderText} />
      <div className="collection-strip__grid">
        {visibleItems.map((item) => (
          <ProductCard
            key={item.id || item.name}
            product={item}
            onSelectProduct={(selectedItem) => onSelectItem(selectedItem, modifier)}
          />
        ))}
        {!visibleItems.length && (
          <div className="products__empty" role="status">
            <strong>{t("product.noProducts")}</strong>
            <span>{t("product.noProductsHelp")}</span>
          </div>
        )}
      </div>
    </Reveal>
  );
}
