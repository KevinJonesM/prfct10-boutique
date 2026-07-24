import React from "react";
import { useI18n } from "../../../../i18n/I18nProvider";

const mentalDisplayOrder = [
  "Squishy Dumpling", "Rainbow Puzzle Ball", "DNA Squishy Ball", "Magic Finger Cube",
  "Magic Bean Puzzle", "Unicorn Stretchy Set", "Circle Puzzle Toy"
];

const mentalFilterTabs = [
  { value: "all", labelKey: "filters.all" },
  { value: "puzzles", labelKey: "filters.puzzles", subcategories: ["puzzles"] },
  { value: "sensory", labelKey: "filters.sensory", subcategories: ["sensory"] },
  { value: "fidget", labelKey: "filters.fidget", ids: ["mental-giro-puzzle", "mental-pulseras-unicornio", "mental-pelota-squishy"] },
  { value: "challenge-sets", labelKey: "filters.challengeSets", ids: ["mental-giro-puzzle", "mental-squishy-dumpling", "mental-pelota-squishy", "mental-pulseras-unicornio"] }
];

const coquetteCategoryFilterTabs = [
  { labelKey: "filters.all", value: "all" },
  { labelKey: "filters.necklaces", value: "necklaces", groups: ["Necklaces"] },
  { labelKey: "filters.bracelets", value: "bracelets", groups: ["Bracelets"] },
  { labelKey: "filters.hairAccessories", value: "hair", groups: ["Hair Accessories"] },
  { labelKey: "filters.competition", value: "competition", groups: ["Competition Look"] },
  { labelKey: "filters.organization", value: "organization", groups: ["Organization"] },
  { labelKey: "filters.giftsDetails", value: "gifts", groups: ["Gifts & Details"] }
];

const coquetteFilterTabs = coquetteCategoryFilterTabs;

const trainingFilterTabs = [
  { labelKey: "filters.all", value: "all" },
  { labelKey: "filters.grip", value: "grip", subcategories: ["grip"] },
  { labelKey: "filters.support", value: "support", subcategories: ["support"] },
  { labelKey: "filters.strengthFlexibility", value: "strength-flexibility", subcategories: ["strength", "flexibility"] },
  { labelKey: "filters.recovery", value: "recovery", subcategories: ["recovery"] }
];

const wearFilterTabs = [
  { labelKey: "filters.all", value: "all" },
  { labelKey: "filters.tops", value: "tops", subcategories: ["tees", "croppedTees", "tanks"] },
  { labelKey: "filters.hoodiesSweaters", value: "hoodies-sweaters", subcategories: ["hoodiesSweaters"] },
  { labelKey: "filters.shorts", value: "shorts", subcategories: ["shorts"] },
  { labelKey: "filters.periodBriefs", value: "period-briefs", subcategories: ["periodUnderwear"] }
];

function orderItems(items, order) {
  const rank = new Map(order.map((name, index) => [name, index]));
  return [...items].sort((a, b) => (rank.get(a.name) ?? items.length) - (rank.get(b.name) ?? items.length));
}

function filterByTab(items, tab) {
  if (!tab || tab.value === "all") return items;
  if (tab.ids) return items.filter((item) => tab.ids.includes(item.id));
  if (tab.names) return items.filter((item) => tab.names.includes(item.name));
  if (tab.subcategories) return items.filter((item) => tab.subcategories.includes(item.subcategory));
  if (tab.groups) return items.filter((item) => tab.groups.includes(item.group));
  return items;
}

function normalizeSearchText(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getProductSearchAliases(item) {
  const identity = normalizeSearchText([
    item.name, item.canonicalName, item.brandName, item.modalName, item.group, item.subcategory, item.cardKicker
  ].filter(Boolean).join(" "));
  const aliases = [];
  if (/bag|bolso|guardapolvo/.test(identity)) aliases.push("bag bags gym bag garment bag bolso bolsos portamallas");
  if (/bow|lazo/.test(identity)) aliases.push("bow bows hair bow lazo lazos");
  if (/grip|agarre|callera/.test(identity)) aliases.push("grip grips bar grips calleras agarre");
  if (/hoodie|sweater|crewneck|sudadera/.test(identity)) aliases.push("hoodie hoodies sweater sweaters crewneck sudadera sueter");
  if (/puzzle|rompecabeza/.test(identity)) aliases.push("puzzle puzzles brain game rompecabezas");
  if (/wrist guard|tiger paws|muneca/.test(identity)) aliases.push("wrist guard wrist guards wrist support soporte muneca");
  return aliases;
}

function filterBySearch(items, searchQuery) {
  const query = normalizeSearchText(searchQuery).trim();
  if (!query) return items;
  return items.filter((item) => {
    const searchableText = [
      item.id, item.name, item.canonicalName, item.brandName, item.modalName, item.category, item.modalCategory,
      item.group, item.subcategory, item.description, item.commercialDescription, item.cardPhrase, item.details,
      item.idealFor, item.why, item.colors, item.availableColors, ...getProductSearchAliases(item),
      ...(item.chips || []), ...(item.benefits || []), ...(item.loveList || []), ...(item.specifications || [])
    ].filter(Boolean).join(" ");
    return normalizeSearchText(searchableText).includes(query);
  });
}

function sortItems(items, sortMode) {
  const sortedItems = [...items];
  const getComparablePrice = (item) => {
    const rawPrice = item.salePrice ?? item.price;
    if (typeof rawPrice === "number") return rawPrice;
    const parsedPrice = Number.parseFloat(String(rawPrice || "").replace(/[^0-9.]/g, ""));
    return Number.isFinite(parsedPrice) ? parsedPrice : null;
  };
  const comparePrice = (a, b, direction = 1) => {
    const priceA = getComparablePrice(a);
    const priceB = getComparablePrice(b);
    if (priceA === null && priceB === null) return 0;
    if (priceA === null) return 1;
    if (priceB === null) return -1;
    return (priceA - priceB) * direction;
  };
  if (sortMode === "name") return sortedItems.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  if (sortMode === "category") return sortedItems.sort((a, b) => (a.subcategory || a.group || "").localeCompare(b.subcategory || b.group || ""));
  if (sortMode === "price-low") return sortedItems.sort((a, b) => comparePrice(a, b));
  if (sortMode === "price-high") return sortedItems.sort((a, b) => comparePrice(a, b, -1));
  return sortedItems;
}

function FilterTabs({ tabs, activeValue, onChange, labelledBy }) {
  const { t } = useI18n();
  if (!tabs?.length) return null;
  return (
    <div className="product-tabs" role="tablist" aria-labelledby={labelledBy}>
      {tabs.map((tab) => (
        <button
          className={activeValue === tab.value ? "product-tabs__button product-tabs__button--active" : "product-tabs__button"}
          key={tab.value}
          onClick={() => onChange(tab.value)}
          role="tab"
          type="button"
          aria-selected={activeValue === tab.value}
        >
          {t(tab.labelKey || tab.label)}
        </button>
      ))}
    </div>
  );
}

function ProductFinder({ sortValue, onSortChange, helperText }) {
  const { t } = useI18n();
  return (
    <div className="product-finder" aria-label={t("filters.quickFinder")}>
      <div className="product-finder__legend">
        <strong>{t("filters.findFast")}</strong>
        <span>{helperText || t("filters.defaultHelp")}</span>
      </div>
      <label className="product-finder__sort">
        {t("filters.sort")}
        <select value={sortValue} onChange={(event) => onSortChange(event.target.value)}>
          <option value="featured">{t("filters.featured")}</option>
          <option value="price-low">{t("filters.priceLow")}</option>
          <option value="price-high">{t("filters.priceHigh")}</option>
          <option value="name">{t("filters.name")}</option>
          <option value="category">{t("filters.category")}</option>
        </select>
      </label>
    </div>
  );
}

export {
  coquetteCategoryFilterTabs, coquetteFilterTabs, filterBySearch, filterByTab, mentalDisplayOrder,
  mentalFilterTabs, normalizeSearchText, orderItems, ProductFinder, sortItems, trainingFilterTabs, wearFilterTabs
};

export default FilterTabs;
