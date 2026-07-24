const bundleProducts = [
  {
    id: "bundle-bar-ready",
    name: "Bar Ready Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Bundle",
    image: "/images/product-bar-grips.png",
    gallery: ["/images/product-bar-grips.png", "/images/product-chalk-real.jpg", "/images/product-sweat-wristbands-pastel.png"],
    description: "Power Grips, Gymnastics Wrist Bands, and one Gymnastics Chalk Block.",
    price: 62.97,
    salePrice: 59.99,
    regularTotal: 62.97,
    status: "stock-check-required",
    blockPurchase: true,
    bundleComponents: [
      { productId: "bar-grips", quantity: 1 },
      { productId: "sweat-wristbands", quantity: 1 },
      { productId: "chalk", quantity: 1 }
    ],
    stockTotal: null,
    inventoryVerified: false,
    modalSections: [{ title: "Inventory", content: ["Bundle ordering opens after the physical chalk count is confirmed. No independent bundle stock is created."] }]
  },
  {
    id: "bundle-meet-day-hair",
    name: "Meet Day Hair Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Bundle",
    image: "/images/accessories-gymnastics-bun-covers-cover.png",
    gallery: ["/images/accessories-gymnastics-bun-covers-cover.png", "/images/accessories-nylon-headbands-cover.png"],
    description: "PRFCT10 Gymnastics Bow, Gymnastics Bun Cover, and one Nylon Headband Pair.",
    price: 30.97,
    salePrice: 27.99,
    regularTotal: 30.97,
    stockSource: "components",
    componentStockCap: 12,
    status: "available",
    inventoryVerified: true,
    bundleComponents: [
      { productId: "coquet-lazos-tul", quantity: 1 },
      { productId: "coquet-bun-covers", quantity: 1 },
      { productId: "coquet-nylon-headbands", quantity: 1 }
    ]
  },
  {
    id: "bundle-competition-ready",
    name: "Competition Ready Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Bundle",
    image: "/images/coquet-guardapolvos.png",
    gallery: ["/images/coquet-guardapolvos.png", "/images/coquet-spray.png"],
    description: "Gymnastics Garment Bag, PRFCT10 Gymnastics Bow, and Glitter Spray.",
    price: 53.97,
    salePrice: 49.99,
    regularTotal: 53.97,
    stockSource: "components",
    componentStockCap: 12,
    status: "available",
    inventoryVerified: true,
    bundleComponents: [
      { productId: "coquet-garment-bag", quantity: 1 },
      { productId: "coquet-lazos-tul", quantity: 1 },
      { productId: "coquet-glitter-spray", quantity: 1 }
    ]
  },
  {
    id: "bundle-little-gymnast-gift",
    name: "Little Gymnast Gift",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Bundle",
    image: "/images/accessories-silicone-charm-bag-cover.png",
    gallery: ["/images/accessories-silicone-charm-bag-cover.png", "/images/coquet-bisuteria.png"],
    description: "PRFCT10 Silicone Charm Bag, PRFCT10 Gymnastics Bow, and Gymnastics String Charm Bracelet.",
    price: 59.97,
    salePrice: 54.99,
    regularTotal: 59.97,
    stockSource: "components",
    componentStockCap: 12,
    status: "available",
    inventoryVerified: true,
    bundleComponents: [
      { productId: "coquet-silicone-bag", quantity: 1 },
      { productId: "coquet-lazos-tul", quantity: 1 },
      { productId: "coquet-string-charm-bracelet", quantity: 1 }
    ]
  },
  {
    id: "bundle-mind-gym-mystery",
    name: "Mind Gym Mystery Bag",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Vault",
    image: "/images/mental-bolita-puzzle-portada.png",
    gallery: ["/images/mental-bolita-puzzle-portada.png", "/images/mental-pelota-squishy-portada.png"],
    description: "A configurable surprise mix selected only from available PRFCT10 stored inventory.",
    price: 14.99,
    salePrice: null,
    inventoryStatus: "stored-inventory",
    inventoryVerified: true,
    isConfigurableBundle: true,
    bundlePoolStatus: "stored-inventory",
    bundlePoolProductIds: [
      "mental-bolita-puzzle",
      "mental-rueda-mental",
      "mental-giro-puzzle",
      "mental-pulseras-unicornio",
      "mental-pelota-squishy",
      "mental-puzzle-magico"
    ],
    stockTotal: null,
    modalSections: [{ title: "How it works", content: ["Contents are configured from available stored inventory.", "Items with no confirmed commercial availability are excluded before fulfillment."] }]
  }
];

export function getBundleInventoryConsumption(bundle, quantity = 1) {
  return (bundle.bundleComponents || []).map((component) => ({
    productId: component.productId,
    quantity: component.quantity * quantity
  }));
}

export { bundleProducts };
