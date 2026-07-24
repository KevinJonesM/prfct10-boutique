const explicitCustomerAccountsFlag = import.meta.env.VITE_CUSTOMER_ACCOUNTS_ENABLED;

export const customerAccountsVisible =
  explicitCustomerAccountsFlag === "true" ||
  (import.meta.env.DEV && explicitCustomerAccountsFlag !== "false");

export const assistedCommerceConfig = Object.freeze({
  checkoutChannel: "whatsapp",
  discountRate: 0.1,
  freeShippingThreshold: 75,
  promoCodes: ["PRFCT10", "PERFECT10", "GYM10"],
  shippingFlatRate: 5,
  taxMode: "manual-confirmation"
});

// TODO Shopify: Replace prototype pricing, promotions, inventory, shipping,
// taxes, checkout, and customer accounts with Shopify-owned data and flows.
