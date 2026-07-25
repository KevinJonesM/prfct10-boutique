const VALID_MODAL_TEMPLATES = new Set([
  "technical", "hair", "jewelry", "mindGym", "cosmetic",
  "apparel", "bundle", "gift", "general"
]);

const toList = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
};

const titleKeyBySection = {
  about: "modal.about",
  included: "modalSections.included",
  options: "modal.colors",
  sizing: "modalSections.sizing",
  howUse: "modal.howUse",
  care: "modalSections.care",
  safety: "modalSections.safety",
  specifications: "modal.specifications",
  uses: "modal.uses",
  faq: "modal.faq",
  materials: "modalSections.materials",
  meetDay: "modalSections.meetDay",
  jewelrySafety: "modalSections.jewelrySafety",
  howToPlay: "modalSections.howToPlay",
  ageSafety: "modalSections.ageSafety",
  ingredients: "modalSections.ingredients",
  directions: "modalSections.directions",
  warnings: "modalSections.warnings",
  fit: "modalSections.fit",
  components: "modalSections.components",
  selection: "modalSections.selection",
  savings: "modalSections.savings",
  availability: "modalSections.availability"
};

function normalizeSection(section, t) {
  if (!section) return null;
  const key = section.key || section.id;
  const title = section.title || (key ? t(titleKeyBySection[key] || `modal.${key}`) : "");
  const content = toList(section.content);
  if (section.hidden || !title || !content.length) return null;
  return { ...section, key, title, content };
}

function section(key, content, t, type) {
  return normalizeSection({ key, type, content }, t);
}

function getTemplateSections(product, quickBenefits, t) {
  const about = product.about || product.accordionBenefits || product.loveList || quickBenefits;
  const specifications = product.specifications;
  const safety = product.safety || product.contraindications;
  const faq = product.faqs;

  switch (product.modalTemplate) {
    case "technical":
      return [
        section("about", about, t),
        section("included", product.included, t),
        section("sizing", product.sizing || product.sizeGuide, t),
        section("howUse", product.modeOfUse, t),
        section("care", product.care, t),
        section("safety", safety, t),
        section("specifications", specifications, t),
        section("uses", product.sportsUses, t),
        section("faq", faq, t, "faq")
      ];
    case "hair":
      return [
        section("about", about, t),
        section("included", product.included, t),
        section("options", product.colorsAvailable || product.availableColors || product.colors, t),
        section("meetDay", product.meetDayUse || product.idealFor, t),
        section("care", product.care, t),
        section("safety", safety, t),
        section("faq", faq, t, "faq")
      ];
    case "jewelry":
      return [
        section("about", about, t),
        section("materials", product.materials || specifications, t),
        section("options", product.colorsAvailable || product.availableColors || product.colors, t),
        section("sizing", product.sizing || product.sizeGuide, t),
        section("care", product.care, t),
        section("jewelrySafety", product.jewelrySafety, t),
        section("faq", faq, t, "faq")
      ];
    case "mindGym":
      return [
        section("about", about, t),
        section("howToPlay", product.howToUse, t),
        section("included", product.included, t),
        section("ageSafety", product.ageSafety, t),
        section("care", product.care, t),
        section("faq", faq, t, "faq")
      ];
    case "cosmetic":
      return [
        section("about", about, t),
        section("included", product.netContents, t),
        section("ingredients", product.ingredients, t),
        section("directions", product.directions, t),
        section("warnings", product.warnings, t),
        section("faq", faq, t, "faq")
      ];
    case "apparel":
      return [
        section("about", about, t),
        section("fit", product.fit || product.sizing || product.sizeGuide, t),
        section("materials", product.materials || specifications, t),
        section("care", product.care, t),
        section("safety", safety, t),
        section("faq", faq, t, "faq")
      ];
    case "bundle":
      return [
        section("components", product.componentSummary, t),
        section("selection", product.selectionInstructions, t),
        section("savings", product.savingsSummary, t),
        section("availability", product.availabilityNotes, t),
        section("faq", faq, t, "faq")
      ];
    case "gift":
    case "general":
    default:
      return [
        section("about", about, t),
        section("included", product.included, t),
        section("options", product.colorsAvailable || product.availableColors || product.colors, t),
        section("specifications", specifications, t),
        section("care", product.care, t),
        section("safety", safety, t),
        section("faq", faq, t, "faq")
      ];
  }
}

export function getProductModalSections(product, quickBenefits, t) {
  const template = VALID_MODAL_TEMPLATES.has(product.modalTemplate) ? product.modalTemplate : "general";
  const defaults = getTemplateSections({ ...product, modalTemplate: template }, quickBenefits, t).filter(Boolean);
  const merged = new Map(defaults.map((item) => [item.key, item]));

  toList(product.modalSections).forEach((customSection, index) => {
    const key = customSection.key || customSection.id || `custom-${index}`;
    if (customSection.hidden) {
      merged.delete(key);
      return;
    }
    const normalized = normalizeSection({ ...customSection, key }, t);
    if (!normalized) return;
    const existing = merged.get(key);
    merged.set(key, existing && customSection.merge !== "replace"
      ? { ...existing, ...normalized, content: [...existing.content, ...normalized.content] }
      : normalized);
  });

  return [...merged.values()];
}

export function getVariantGroups(variants = []) {
  const groups = new Map();
  variants.forEach((variant) => {
    Object.entries(variant.options || {}).forEach(([name, value]) => {
      if (!groups.has(name)) groups.set(name, []);
      if (!groups.get(name).includes(value)) groups.get(name).push(value);
    });
  });
  return Array.from(groups.entries()).map(([name, values]) => ({ name, values }));
}

export function getInitialOptions(variants = []) {
  const groups = getVariantGroups(variants);
  if (groups.length >= 2) return {};
  const firstAvailable = variants.find((variant) => {
    const status = String(variant.status || "").toLowerCase();
    return variant.stock !== 0 && !["sold-out", "sold_out", "out-of-stock", "out_of_stock", "unavailable"].includes(status);
  });
  return (firstAvailable || variants[0])?.options
    ? { ...(firstAvailable || variants[0]).options }
    : {};
}

export function findSelectedVariant(variants = [], selectedOptions = {}) {
  if (!variants.length) return null;
  const optionNames = new Set(variants.flatMap((variant) => Object.keys(variant.options || {})));
  if ([...optionNames].some((name) => selectedOptions[name] === undefined)) return null;
  return variants.find((variant) =>
    [...optionNames].every((name) => variant.options?.[name] === selectedOptions[name])
  ) || null;
}

export function getVariantChoice(variants, groupName, value, selectedOptions) {
  const matching = variants.filter((variant) => variant.options?.[groupName] === value);
  return matching.find((variant) =>
    Object.entries(selectedOptions).every(([name, selectedValue]) =>
      name === groupName || variant.options?.[name] === selectedValue
    )
  ) || null;
}

export { VALID_MODAL_TEMPLATES };
