export const makeVariants = (optionName, values, stockByValue = {}, extraByValue = {}) =>
  values.map((value) => ({
    options: { [optionName]: value },
    stock: Object.prototype.hasOwnProperty.call(stockByValue, value) ? stockByValue[value] : null,
    ...(extraByValue[value] || {})
  }));

export function enrichCatalogProduct(product, updates = {}) {
  const name = updates.name || product.name;

  return {
    ...product,
    ...updates,
    name,
    modalName: updates.modalName || name,
    brandName: updates.brandName || `PRFCT10 ${name}`,
    chips: [...new Set([...(product.chips || []), ...(updates.chips || []), updates.category, updates.group].filter(Boolean))]
  };
}
