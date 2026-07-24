const unavailableStatuses = new Set(["out-of-stock", "out_of_stock", "sold-out", "sold_out", "unavailable"]);
const comingSoonStatuses = new Set(["coming-soon", "coming_soon", "in-transit", "in_transit"]);
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

export function formatCommercePrice(value) {
  if (typeof value === "number" && Number.isFinite(value)) return `$${value.toFixed(2)}`;

  const label = String(value || "").trim();
  if (!label || label === "$" || /^consultar$/i.test(label)) return "Price on request";
  return label.replace(/^Desde\s+/i, "From ");
}

export function getPriceDisplay(product = {}, variant = null) {
  const regularPrice = variant?.price ?? product.price;
  const candidateSalePrice = variant?.salePrice ?? product.salePrice;
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
  const verified = variant?.inventoryVerified === true || product.inventoryVerified === true || product.inventoryStatus === "confirmed";
  const quantity = variant && typeof variant.stock === "number" ? variant.stock : product.availableQuantity;

  if (unavailableStatuses.has(status) || (verified && typeof quantity === "number" && quantity <= 0)) {
    return { label: "Unavailable", labelKey: "availability.unavailable", tone: "unavailable", canAddToCart: false, verified: true };
  }

  if (comingSoonStatuses.has(status)) {
    return {
      label: status.includes("transit") ? "Arriving soon" : "Coming soon",
      labelKey: status.includes("transit") ? "availability.arrivingSoon" : "availability.comingSoon",
      tone: "coming-soon",
      canAddToCart: false,
      verified: false
    };
  }

  if (verified && (quantity === null || quantity === undefined || quantity > 0)) {
    return { label: "In stock", labelKey: "availability.inStock", tone: "available", canAddToCart: true, verified: true };
  }

  if (pendingStatuses.has(status) || !verified) {
    return {
      label: "Availability confirmed before payment",
      labelKey: "availability.confirmedBeforePayment",
      tone: "pending",
      canAddToCart: true,
      verified: false
    };
  }

  return {
    label: "Availability confirmed before payment",
    labelKey: "availability.confirmedBeforePayment",
    tone: "pending",
    canAddToCart: true,
    verified: false
  };
}

export function getProductBadges(product = {}) {
  const badges = [...(product.badges || [])];
  const status = normalizeStatus(product.inventoryStatus || product.status);

  if (product.isBestseller) badges.unshift("Bestseller");
  if (getPriceDisplay(product).onSale) badges.push("Sale");
  if (product.isNew || status === "coming-soon" || status === "coming_soon") badges.push("New");
  if (product.isLimited || status === "limited") badges.push("Limited");

  return [...new Set(badges)].slice(0, 3);
}
