const SPANISH_MARKETS = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "SV", "GQ", "GT", "HN", "MX", "NI", "PA", "PY", "PE", "PR", "ES", "UY", "VE"
]);

export function getActiveMarketCountry() {
  if (typeof window === "undefined") return "";

  return String(
    window.Shopify?.country ||
    window.__SHOPIFY_MARKET__?.country ||
    document.documentElement.dataset.marketCountry ||
    document.querySelector('meta[name="shopify-country"]')?.content ||
    ""
  ).toUpperCase();
}

export function detectStorefrontLocale() {
  if (typeof window === "undefined") return "en";

  const savedLocale = window.localStorage.getItem("prfct10-locale");
  if (savedLocale === "en" || savedLocale === "es") return savedLocale;

  const marketCountry = getActiveMarketCountry();
  if (marketCountry === "US") return "en";
  if (SPANISH_MARKETS.has(marketCountry)) return "es";

  const shopifyLocale = String(window.Shopify?.locale || window.__SHOPIFY_MARKET__?.locale || "").toLowerCase();
  if (shopifyLocale.startsWith("es")) return "es";
  if (shopifyLocale.startsWith("en")) return "en";

  return String(window.navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
}
