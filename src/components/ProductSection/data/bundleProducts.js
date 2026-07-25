import { coquetteItems } from "./accessoryProducts";
import { trainingInventory } from "./trainingProducts";

const pricingHold = {
  price: null,
  salePrice: null,
  pricingStatus: "needs-business-approval",
  blockPurchase: true,
  stockSource: "components",
  status: "configuration-required",
  inventoryVerified: false,
  modalTemplate: "bundle",
  forceChooseOptions: true,
  inventoryNotes: [
    "No independent bundle inventory is created.",
    "Availability derives from the selected component variants."
  ]
};

const configurationVariant = (id, options, componentVariants, extra = {}) => ({
  id,
  options,
  componentVariants,
  stock: null,
  status: "configuration-required",
  ...extra
});

const activePrice = (productOrVariant) => {
  const salePrice = productOrVariant?.salePrice;
  if (typeof salePrice === "number" && Number.isFinite(salePrice)) return salePrice;
  const price = productOrVariant?.price;
  if (typeof price === "number" && Number.isFinite(price)) return price;

  const firstPricedVariant = (productOrVariant?.variants || []).find((variant) => {
    const variantSalePrice = variant?.salePrice;
    const variantPrice = variant?.price;
    return (
      (typeof variantSalePrice === "number" && Number.isFinite(variantSalePrice)) ||
      (typeof variantPrice === "number" && Number.isFinite(variantPrice))
    );
  });

  if (!firstPricedVariant) return 0;
  return activePrice(firstPricedVariant);
};

const sourceVariant = (productId, variant) => ({
  productId,
  variantId: variant.id || variant.sku || JSON.stringify(variant.options || {}),
  sku: variant.sku,
  options: { ...(variant.options || {}) }
});

const bowProduct = coquetteItems.find((product) => product.id === "coquet-lazos-tul");
const glitterProduct = coquetteItems.find((product) => product.id === "coquet-glitter-spray");
const barGripProduct = trainingInventory["bar-grips"];
const wristBandProduct = trainingInventory["sweat-wristbands"];
const tapeProduct = trainingInventory["kinesio-tape"];
const flexStrapProduct = trainingInventory["flex-strap-12"];
const weightProduct = trainingInventory["power-weights"];

const barReadyComponentTotal =
  activePrice(barGripProduct) + activePrice(wristBandProduct) + (3 * activePrice(tapeProduct));
const meetDayComponentTotal = activePrice(bowProduct) + activePrice(glitterProduct);
const conditioningComponentTotal = activePrice(flexStrapProduct) + activePrice(weightProduct);
const usd = (value) => `$${value.toFixed(2)}`;

const publicBundleProducts = [
  {
    ...pricingHold,
    id: "bundle-bar-ready",
    name: "Bar Ready Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Bars",
    image: "/images/product-bar-grips.png",
    gallery: [
      "/images/product-bar-grips.png",
      "/images/product-sweat-wristbands-pastel.png",
      "/images/product-kinesio-real.png"
    ],
    description: "Power Grips, Gymnastics Wrist Bands, and three Kinesiology Tape rolls.",
    currentComponentTotal: barReadyComponentTotal,
    variants: (barGripProduct.variants || []).map((variant) =>
      configurationVariant(
        `bar-ready-${String(variant.options.Size).toLowerCase()}`,
        { "Grip Size": variant.options.Size },
        { "bar-grips": sourceVariant("bar-grips", variant) }
      )
    ),
    componentSummary: [
      "1 × Power Grips",
      "1 × Gymnastics Wrist Bands",
      "3 × Kinesiology Tape rolls"
    ],
    selectionInstructions: [
      "Choose the Power Grips size.",
      "Tape color configuration still requires a business decision before purchase can be enabled."
    ],
    availabilityNotes: [
      "Merchandising preview only. Final bundle price and tape-color configuration require approval."
    ],
    savingsSummary: [`Current component total: ${usd(barReadyComponentTotal)}. No discount or final bundle price is claimed.`],
    needsBusinessVerification: ["Final retail price", "Three-roll Kinesiology Tape color configuration"],
    needsConfiguration: true,
    contentLocale: "en",
    localizedContent: {
      es: {
        description: "Power Grips, muñequeras de gimnasia y tres rollos de cinta kinesiológica.",
        componentSummary: ["1 × Power Grips", "1 × muñequeras de gimnasia", "3 × rollos de cinta kinesiológica"],
        selectionInstructions: [
          "Elige la talla de Power Grips.",
          "La configuración de colores de la cinta todavía requiere una decisión comercial."
        ],
        availabilityNotes: [
          "Vista de merchandising. El precio final y la configuración de colores requieren aprobación."
        ],
        savingsSummary: [`Total actual de componentes: ${usd(barReadyComponentTotal)}. No se afirma ningún descuento ni precio final.`]
      }
    },
    bundleComponents: [
      { productId: "bar-grips", quantity: 1, requiresVariantSelection: true, optionGroups: ["Size"] },
      { productId: "sweat-wristbands", quantity: 1, requiresVariantSelection: false },
      {
        productId: "kinesio-tape",
        quantity: 3,
        requiresVariantSelection: true,
        needsBusinessVerification: true,
        configurationStatus: "needs-configuration"
      }
    ]
  },
  {
    ...pricingHold,
    id: "bundle-meet-day-hair",
    name: "Meet Day Hair Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Meet Day",
    image: "/images/coquet-lazos-tul.png",
    gallery: ["/images/coquet-lazos-tul.png", "/images/coquet-glitter-spray.png"],
    description: "A PRFCT10 Tulle Bow and Glitter Spray for a polished meet-day hair finish.",
    currentComponentTotal: meetDayComponentTotal,
    variants: (bowProduct?.variants || []).map((variant) =>
      configurationVariant(
        `meet-day-${String(variant.options.Color).toLowerCase().replace(/\s+/g, "-")}`,
        { "Bow Color": variant.options.Color },
        { "coquet-lazos-tul": sourceVariant("coquet-lazos-tul", variant) },
        {
          componentPrice: activePrice(variant) || activePrice(bowProduct),
          image: variant.image
        }
      )
    ),
    componentSummary: ["1 × PRFCT10 Tulle Bow", "1 × Glitter Spray"],
    selectionInstructions: ["Choose your bow. Rainbow Bow pricing is calculated from its real variant price."],
    availabilityNotes: ["Merchandising preview only. Final bundle retail price requires approval."],
    savingsSummary: [`Current component total starts at ${usd(meetDayComponentTotal)} and changes with the selected bow. No discount is claimed.`],
    needsBusinessVerification: ["Final retail price"],
    contentLocale: "en",
    localizedContent: {
      es: {
        description: "Un lazo de tul PRFCT10 y spray de escarcha para un acabado pulido de competencia.",
        componentSummary: ["1 × lazo de tul PRFCT10", "1 × spray de escarcha"],
        selectionInstructions: ["Elige tu lazo. El precio del lazo Rainbow se calcula desde su variante real."],
        availabilityNotes: ["Vista de merchandising. El precio final del combo requiere aprobación."],
        savingsSummary: [`El total actual de componentes comienza en ${usd(meetDayComponentTotal)} y cambia según el lazo. No se afirma ningún descuento.`]
      }
    },
    bundleComponents: [
      {
        productId: "coquet-lazos-tul",
        quantity: 1,
        requiresVariantSelection: true,
        optionGroups: ["Color"],
        priceFromSelectedVariant: true
      },
      { productId: "coquet-glitter-spray", quantity: 1, requiresVariantSelection: false }
    ]
  },
  {
    ...pricingHold,
    id: "bundle-conditioning",
    name: "Conditioning Bundle",
    subcategory: "bundles",
    group: "Bundles",
    cardKicker: "Training",
    image: "/images/product-flex-strap.png",
    gallery: ["/images/product-flex-strap.png", "/images/product-weights.jpg"],
    description: "Flex Strap 12 and Adjustable Wrist & Ankle Weights for controlled conditioning work.",
    currentComponentTotal: conditioningComponentTotal,
    variants: (flexStrapProduct.variants || []).flatMap((flexVariant) =>
      (weightProduct.variants || []).map((weightVariant) =>
        configurationVariant(
          `conditioning-${flexVariant.options.Color}-${weightVariant.options.Weight}-${weightVariant.options.Color}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          {
            "Flex Strap Color": flexVariant.options.Color,
            Weight: weightVariant.options.Weight,
            "Weight Color": weightVariant.options.Color
          },
          {
            "flex-strap-12": sourceVariant("flex-strap-12", flexVariant),
            "power-weights": sourceVariant("power-weights", weightVariant)
          }
        )
      )
    ),
    componentSummary: ["1 × Flex Strap 12", "1 × Adjustable Wrist & Ankle Weights"],
    selectionInstructions: [
      "Choose the Flex Strap color.",
      "Choose the weight and color for the Adjustable Wrist & Ankle Weights."
    ],
    availabilityNotes: ["Choose Options is required. Final bundle retail price requires approval."],
    savingsSummary: [`Current component total: ${usd(conditioningComponentTotal)}. No discount or final bundle price is claimed.`],
    needsBusinessVerification: ["Final retail price"],
    contentLocale: "en",
    localizedContent: {
      es: {
        description: "Flex Strap 12 y pesas ajustables para muñecas y tobillos para acondicionamiento controlado.",
        componentSummary: ["1 × Flex Strap 12", "1 × pesas ajustables para muñecas y tobillos"],
        selectionInstructions: [
          "Elige el color de la Flex Strap.",
          "Elige el peso y color de las pesas ajustables."
        ],
        availabilityNotes: ["Debes elegir las opciones. El precio final del combo requiere aprobación."],
        savingsSummary: [`Total actual de componentes: ${usd(conditioningComponentTotal)}. No se afirma ningún descuento ni precio final.`]
      }
    },
    bundleComponents: [
      {
        productId: "flex-strap-12",
        quantity: 1,
        requiresVariantSelection: true,
        optionGroups: ["Color"]
      },
      {
        productId: "power-weights",
        quantity: 1,
        requiresVariantSelection: true,
        optionGroups: ["Weight", "Color"]
      }
    ]
  }
];

const retiredBundleIds = [
  "bundle-competition-ready",
  "bundle-little-gymnast-gift",
  "bundle-mind-gym-mystery"
];

export function getBundleInventoryConsumption(bundle, quantity = 1) {
  return (bundle.bundleComponents || []).map((component) => ({
    productId: component.productId,
    quantity: component.quantity * quantity
  }));
}

export { publicBundleProducts, retiredBundleIds };
