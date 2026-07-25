const unavailableStatuses = new Set(["out-of-stock", "out_of_stock", "sold-out", "sold_out", "unavailable"]);
const comingSoonStatuses = new Set(["coming-soon", "coming_soon", "in-production", "in_production"]);
const pendingStatuses = new Set([
  "allocation-pending",
  "allocation_pending",
  "historical_unverified",
  "pending-supplier",
  "pending_supplier",
  "stock-check-required",
  "stock_check_required"
]);

const normalizeStatus = (value) => String(value || "").trim().toLowerCase();

const getKnownQuantity = (product = {}, variant = null) => {
  if (variant) {
    if (typeof variant.stock === "number") return variant.stock;
    if (pendingStatuses.has(normalizeStatus(variant.status))) return null;
  }

  if (typeof product.componentStockCap === "number") return product.componentStockCap;
  if (typeof product.availableQuantity === "number") return product.availableQuantity;
  if (typeof product.stockTotal === "number") return product.stockTotal;
  return null;
};

export function formatCommercePrice(value) {
  if (typeof value === "number" && Number.isFinite(value)) return `$${value.toFixed(2)}`;

  const label = String(value || "").trim();
  if (!label || label === "$" || /^consultar$/i.test(label)) return "Price on request";
  return label.replace(/^Desde\s+/i, "From ");
}

export function getPriceDisplay(product = {}, variant = null) {
  const hasVariantPrice = Boolean(variant) && Object.prototype.hasOwnProperty.call(variant, "price");
  const hasVariantSalePrice = Boolean(variant) && Object.prototype.hasOwnProperty.call(variant, "salePrice");
  const regularPrice = hasVariantPrice ? variant.price : product.price;
  const candidateSalePrice = hasVariantSalePrice ? variant.salePrice : product.salePrice;
  const hasNumericSale =
    typeof candidateSalePrice === "number" &&
    Number.isFinite(candidateSalePrice) &&
    typeof regularPrice === "number" &&
    candidateSalePrice < regularPrice;

  return {
    current: formatCommercePrice(hasNumericSale ? candidateSalePrice : regularPrice),
    regular: hasNumericSale ? formatCommercePrice(regularPrice) : null,
    numericValue: hasNumericSale
      ? candidateSalePrice
      : typeof regularPrice === "number" && Number.isFinite(regularPrice)
        ? regularPrice
        : null,
    onSale: hasNumericSale
  };
}

export function getAvailabilityState(product = {}, variant = null) {
  const status = normalizeStatus(variant?.status || product.inventoryStatus || product.status);
  const storedInventory = normalizeStatus(product.inventoryStatus) === "stored-inventory";
  const verified =
    variant?.inventoryVerified === true ||
    product.inventoryVerified === true ||
    normalizeStatus(product.inventoryStatus) === "confirmed" ||
    storedInventory;
  const quantity = getKnownQuantity(product, variant);

  if (unavailableStatuses.has(status) || (typeof quantity === "number" && quantity <= 0)) {
    return { label: "Sold out", labelKey: "availability.soldOut", tone: "unavailable", canAddToCart: false, verified: true, quantity: 0 };
  }

  if (product.blockPurchase === true) {
    return {
      label: "Unavailable",
      labelKey: "availability.unavailable",
      tone: "unavailable",
      canAddToCart: false,
      verified: false,
      quantity: null
    };
  }

  if (comingSoonStatuses.has(status)) {
    return {
      label: "Coming soon",
      labelKey: "availability.comingSoon",
      tone: "coming-soon",
      canAddToCart: false,
      verified: false,
      quantity
    };
  }

  if (pendingStatuses.has(status)) {
    return {
      label: "Availability confirmed before payment",
      labelKey: "availability.confirmedBeforePayment",
      tone: "pending",
      canAddToCart: product.blockPurchase !== true,
      verified: false,
      quantity: null
    };
  }

  if (verified && typeof quantity === "number" && quantity <= 10) {
    return {
      label: `Only ${quantity} left`,
      labelKey: "availability.onlyLeft",
      labelParams: { quantity },
      tone: "low-stock",
      canAddToCart: true,
      verified: true,
      quantity
    };
  }

  if (verified && (quantity === null || quantity > 0)) {
    return {
      label: storedInventory ? "Vault drop" : "In stock",
      labelKey: storedInventory ? "availability.vaultDrop" : "availability.inStock",
      tone: "available",
      canAddToCart: true,
      verified: true,
      quantity
    };
  }

  if (!verified) {
    return {
      label: "Availability confirmed before payment",
      labelKey: "availability.confirmedBeforePayment",
      tone: "pending",
      canAddToCart: true,
      verified: false,
      quantity
    };
  }

  return {
    label: "Availability confirmed before payment",
    labelKey: "availability.confirmedBeforePayment",
    tone: "pending",
    canAddToCart: true,
    verified: false,
    quantity
  };
}

export function getMaxPurchasableQuantity(product = {}, variant = null) {
  if (variant && typeof variant.stock === "number") return Math.max(0, variant.stock);
  if (variant && pendingStatuses.has(normalizeStatus(variant.status))) return null;
  if (typeof product.commercialStockTotal === "number") return Math.max(0, product.commercialStockTotal);
  if (product.unitsPerSale > 1 && typeof product.commercialStockTotal !== "number") return null;
  if (typeof product.componentStockCap === "number") return Math.max(0, product.componentStockCap);
  if (typeof product.availableQuantity === "number") return Math.max(0, product.availableQuantity);
  if (typeof product.stockTotal === "number") return Math.max(0, product.stockTotal);
  return null;
}

export function getResellerPriceModel(product = {}) {
  const regularPrice = typeof product.price === "number" ? product.price : null;
  const resellerMaxPrice = typeof product.resellerMaxPrice === "number" ? product.resellerMaxPrice : null;
  return {
    regularPrice,
    resellerMaxPrice,
    prfct10Receives: regularPrice,
    commission: regularPrice !== null && resellerMaxPrice !== null
      ? Math.max(0, resellerMaxPrice - regularPrice)
      : null
  };
}

export function getProductBadges(product = {}) {
  const badges = [...(product.badges || [])];
  const status = normalizeStatus(product.inventoryStatus || product.status);

  if (product.isBestseller) badges.unshift("Bestseller");
  if (getPriceDisplay(product).onSale) badges.push("Sale");
  if (product.isNew || status === "coming-soon" || status === "coming_soon") badges.push("New");
  if (product.isLimited || status === "limited") badges.push("Limited");
  if (status === "stored-inventory") badges.push("Vault");

  return [...new Set(badges)].slice(0, 3);
}
