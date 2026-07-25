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
    price: 61.47,
    salePrice: 59.99,
    regularTotal: 61.47,
    componentCurrentTotal: 61.47,
    savingsAmount: 1.48,
    modalTemplate: "bundle",
    componentSummary: ["Power Grips, Gymnastics Wrist Bands, and one Gymnastics Chalk Block."],
    selectionInstructions: ["Select the Power Grips size and chalk buying option before the bundle can be fulfilled."],
    savingsSummary: ["Current component total: $61.47. Bundle price: $59.99. Current savings: $1.48."],
    availabilityNotes: ["This bundle is temporarily unavailable until every component and option can be confirmed."],
    contentLocale: "en",
    localizedContent: {
      es: {
        componentSummary: ["Power Grips, muñequeras de gimnasia y un bloque de magnesio."],
        selectionInstructions: ["Selecciona la talla de Power Grips y la presentación del magnesio antes de completar el combo."],
        savingsSummary: ["Total actual de los componentes: $61.47. Precio del combo: $59.99. Ahorro actual: $1.48."],
        availabilityNotes: ["Este combo no está disponible temporalmente hasta confirmar todos sus componentes y opciones."]
      }
    },
    status: "stock-check-required",
    blockPurchase: true,
    bundleComponents: [
      { productId: "bar-grips", quantity: 1, requiresVariantSelection: true },
      { productId: "sweat-wristbands", quantity: 1 },
      { productId: "chalk", quantity: 1, requiresVariantSelection: true }
    ],
    stockTotal: null,
    inventoryVerified: false,
    inventoryNotes: ["No independent bundle stock is created. Inventory is consumed from components.", "Chalk stock requires physical confirmation."]
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
    price: null,
    salePrice: null,
    regularTotal: 26.97,
    componentCurrentTotal: 26.97,
    pricingStatus: "business-review-required",
    modalTemplate: "bundle",
    componentSummary: ["PRFCT10 Gymnastics Bow, Gymnastics Bun Cover, and one Nylon Headband Pair."],
    selectionInstructions: ["Select the bow color, bun-cover color, and headband pair color before fulfillment."],
    availabilityNotes: ["This bundle is temporarily unavailable while its price and component options are finalized."],
    contentLocale: "en",
    localizedContent: {
      es: {
        componentSummary: ["Lazo de gimnasia PRFCT10, cubre moño y un par de bandas de nylon."],
        selectionInstructions: ["Selecciona el color del lazo, del cubre moño y del par de bandas antes de completar el combo."],
        availabilityNotes: ["Este combo no está disponible temporalmente mientras se finalizan su precio y las opciones de sus componentes."]
      }
    },
    stockSource: "components",
    componentStockCap: 12,
    status: "business-review-required",
    inventoryVerified: false,
    blockPurchase: true,
    internalNotes: ["Previous bundle price exceeded the current effective component total. Business pricing review required."],
    bundleComponents: [
      { productId: "coquet-lazos-tul", quantity: 1, requiresVariantSelection: true },
      { productId: "coquet-bun-covers", quantity: 1, requiresVariantSelection: true },
      { productId: "coquet-nylon-headbands", quantity: 1, requiresVariantSelection: true }
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
    price: null,
    salePrice: null,
    regularTotal: 44.97,
    componentCurrentTotal: 44.97,
    pricingStatus: "business-review-required",
    modalTemplate: "bundle",
    componentSummary: ["Gymnastics Garment Bag, PRFCT10 Gymnastics Bow, and Glitter Spray."],
    selectionInstructions: ["Select the garment-bag color and bow color before fulfillment."],
    availabilityNotes: ["This bundle is temporarily unavailable while its product details and component options are finalized."],
    contentLocale: "en",
    localizedContent: {
      es: {
        componentSummary: ["Portamallas de gimnasia, lazo de gimnasia PRFCT10 y spray de escarcha."],
        selectionInstructions: ["Selecciona el color del portamallas y del lazo antes de completar el combo."],
        availabilityNotes: ["Este combo no está disponible temporalmente mientras se finalizan sus detalles y las opciones de sus componentes."]
      }
    },
    stockSource: "components",
    componentStockCap: 12,
    status: "business-review-required",
    inventoryVerified: false,
    blockPurchase: true,
    internalNotes: ["Business pricing review and Glitter Spray cosmetic documentation are required before sale."],
    bundleComponents: [
      { productId: "coquet-garment-bag", quantity: 1, requiresVariantSelection: true },
      { productId: "coquet-lazos-tul", quantity: 1, requiresVariantSelection: true },
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
    price: null,
    salePrice: null,
    regularTotal: 51.97,
    componentCurrentTotal: 51.97,
    pricingStatus: "business-review-required",
    modalTemplate: "bundle",
    componentSummary: ["PRFCT10 Silicone Charm Bag, PRFCT10 Gymnastics Bow, and Gymnastics String Charm Bracelet."],
    selectionInstructions: ["Select the bag, bow, and bracelet variants before fulfillment."],
    availabilityNotes: ["This bundle is temporarily unavailable while its price and component options are finalized."],
    contentLocale: "en",
    localizedContent: {
      es: {
        componentSummary: ["Bolso de silicón PRFCT10 con charms, lazo de gimnasia y pulsera de hilo con charm."],
        selectionInstructions: ["Selecciona las variantes del bolso, el lazo y la pulsera antes de completar el combo."],
        availabilityNotes: ["Este combo no está disponible temporalmente mientras se finalizan su precio y las opciones de sus componentes."]
      }
    },
    stockSource: "components",
    componentStockCap: 12,
    status: "business-review-required",
    inventoryVerified: false,
    blockPurchase: true,
    internalNotes: ["Previous bundle price exceeded the current effective component total. Business pricing review required."],
    bundleComponents: [
      { productId: "coquet-silicone-bag", quantity: 1, requiresVariantSelection: true },
      { productId: "coquet-lazos-tul", quantity: 1, requiresVariantSelection: true },
      { productId: "coquet-string-charm-bracelet", quantity: 1, requiresVariantSelection: true }
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
    inventoryStatus: "historical_unverified",
    inventoryVerified: false,
    modalTemplate: "bundle",
    blockPurchase: true,
    isConfigurableBundle: true,
    bundlePoolStatus: "historical_unverified",
    bundlePoolProductIds: [
      "mental-bolita-puzzle",
      "mental-rueda-mental",
      "mental-giro-puzzle",
      "mental-pulseras-unicornio",
      "mental-pelota-squishy",
      "mental-puzzle-magico"
    ],
    stockTotal: null,
    availabilityNotes: ["This bundle is temporarily unavailable while eligible item options are confirmed."],
    contentLocale: "en",
    localizedContent: {
      es: {
        availabilityNotes: ["Este combo no está disponible temporalmente mientras se confirman las opciones de artículos elegibles."]
      }
    },
    internalNotes: ["Do not configure mystery contents from historical purchase records."]
  }
];

export function getBundleInventoryConsumption(bundle, quantity = 1) {
  return (bundle.bundleComponents || []).map((component) => ({
    productId: component.productId,
    quantity: component.quantity * quantity
  }));
}

export { bundleProducts };
