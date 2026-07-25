import { makeVariants } from "./catalogUtils";

const apparelImage = "/images/collection-ropa.png";
const apparelSizes = ["S (7-8)", "M (9-10)", "L (11-12)"];

const visorVariantImages = {
  Purple: "/images/accessories-tie-dye-visor-product-purple.png",
  "Pink Blue": "/images/accessories-tie-dye-visor-product-limited.png",
  "Rose Red": "/images/accessories-tie-dye-visor-product-pink.png",
  "Pink Green": "/images/accessories-tie-dye-visor-product-strong.png"
};

const makePendingApparel = ({ id, name, purchasedQty, subcategory, group }) => ({
  id,
  name,
  subcategory,
  group,
  cardKicker: group,
  image: apparelImage,
  gallery: [apparelImage],
  description: "Purchased PRFCT10 apparel with size allocation pending physical verification.",
  idealFor: "Practice, camps, warm-ups, travel, and active days beyond the gym.",
  why: "A comfortable gymnastics-inspired layer prepared for the upcoming PRFCT10 apparel drop.",
  historicalPurchasedQty: purchasedQty,
  stockTotal: null,
  purchaseUnit: "piece",
  pricingStatus: "provisional-dtf",
  price: null,
  salePrice: null,
  status: "historical_unverified",
  inventoryStatus: "historical_unverified",
  inventoryVerified: false,
  blockPurchase: true,
  modalTemplate: "apparel",
  contentLocale: "en",
  needsVerification: ["Physical count", "Size allocation", "Sellable condition", "Final public price"],
  variants: apparelSizes.map((size) => ({
    options: { Size: size },
    stock: null,
    status: "allocation-pending"
  })),
  inventoryNotes: [`Historical purchase record: ${purchasedQty} pieces.`, "Size allocation and physical availability are not verified."]
});

const wearItems = [
  makePendingApparel({ id: "apparel-pastel-striped-tshirt", name: "Pastel Striped T-Shirt", purchasedQty: 6, subcategory: "tees", group: "Tops" }),
  makePendingApparel({ id: "apparel-green-striped-tshirt", name: "Green Striped T-Shirt", purchasedQty: 6, subcategory: "tees", group: "Tops" }),
  makePendingApparel({ id: "apparel-crop-tshirt", name: "Crop T-Shirt", purchasedQty: 6, subcategory: "tees", group: "Tops" }),
  makePendingApparel({ id: "apparel-open-back-top", name: "Open-Back Top", purchasedQty: 6, subcategory: "tees", group: "Tops" }),
  makePendingApparel({ id: "apparel-white-cropped-sweatshirt", name: "White Cropped Sweatshirt", purchasedQty: 6, subcategory: "hoodiesSweaters", group: "Layers" }),
  makePendingApparel({ id: "apparel-contrast-collar-tshirt", name: "Blue & White Contrast-Collar T-Shirt", purchasedQty: 6, subcategory: "tees", group: "Tops" }),
  makePendingApparel({ id: "apparel-polka-dot-zip-hoodie", name: "White Polka-Dot Zip Hoodie", purchasedQty: 6, subcategory: "hoodiesSweaters", group: "Layers" }),
  makePendingApparel({ id: "apparel-heart-print-sweatshirt", name: "Heart Print Sweatshirt", purchasedQty: 6, subcategory: "hoodiesSweaters", group: "Layers" }),
  makePendingApparel({ id: "apparel-sandwash-tshirt", name: "Sandwash T-Shirt", purchasedQty: 21, subcategory: "tees", group: "Tops" }),
  {
    id: "coquet-tie-dye-visor",
    name: "PRFCT10 Tie-Dye Visor",
    subcategory: "headwear",
    group: "Headwear",
    cardKicker: "Headwear",
    modalCategory: "Apparel",
    modalTemplate: "apparel",
    image: "/images/accessories-tie-dye-visor-cover.png",
    imagePosition: "center center",
    gallery: [
      "/images/accessories-tie-dye-visor-cover.png",
      "/images/accessories-tie-dye-visor-product-limited.png",
      "/images/accessories-tie-dye-visor-product-pink.png",
      "/images/accessories-tie-dye-visor-product-purple.png",
      "/images/accessories-tie-dye-visor-product-strong.png",
      "/images/accessories-tie-dye-visor-lifestyle-pink.png",
      "/images/accessories-tie-dye-visor-lifestyle-purple.png",
      "/images/accessories-tie-dye-visor-lifestyle-strong.png",
      "/images/accessories-tie-dye-visor-lifestyle-limited.png"
    ],
    description: "Adjustable tie-dye headwear for camps, travel, outdoor events, and sporty everyday style.",
    idealFor: "Casual wear, camps, travel, beach or pool days, and off-floor meet-day style.",
    localizedContent: {
      es: {
        description: "Visera tie-dye ajustable para campamentos, viajes, eventos al aire libre y estilo deportivo diario.",
        idealFor: "Uso casual, campamentos, viajes, playa o piscina y estilo fuera del área de competencia."
      }
    },
    price: 24.99,
    salePrice: 21.99,
    stockTotal: 12,
    oneSize: "Adjustable",
    purchasedQty: 12,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants(
      "Color",
      ["Purple", "Pink Blue", "Rose Red", "Pink Green"],
      { Purple: 3, "Pink Blue": 3, "Rose Red": 3, "Pink Green": 3 }
    ).map((variant) => ({
      ...variant,
      image: visorVariantImages[variant.options.Color]
    }))
  },
  {
    id: "apparel-period-brief",
    name: "Seamless High-Waist Period Brief",
    subcategory: "periodUnderwear",
    group: "Period Care",
    cardKicker: "Period Care",
    image: "/images/apparel-period-brief-cover.png",
    imagePosition: "center center",
    gallery: [
      "/images/apparel-period-brief-cover.png",
      "/images/apparel-period-brief-folded.png",
      "/images/apparel-period-brief-angle.png",
      "/images/apparel-period-brief-interior.png",
      "/images/apparel-period-brief-back.png",
      "/images/apparel-period-brief-side-detail.png",
      "/images/apparel-period-brief-absorbent-detail.png",
      "/images/apparel-period-brief-seam-detail.png"
    ],
    description: "A seamless high-waist brief submitted for period-care product review. Fiber content and performance claims remain pending documentation.",
    benefits: ["High-waist silhouette", "Seamless construction", "Details pending verification"],
    idealFor: "Period-care use is pending supplier documentation and internal product review.",
    modalSections: [
      {
        key: "availability",
        merge: "replace",
        content: ["Product details and performance claims require supplier documentation and internal review before this item can be sold."]
      }
    ],
    price: 17.99,
    salePrice: 14.99,
    purchasedQty: 24,
    stockTotal: 24,
    status: "available",
    inventoryVerified: true,
    modalTemplate: "apparel",
    contentLocale: "en",
    claimsVerification: "supplier-provided-unverified",
    blockPurchase: true,
    supplierClaims: {
      absorbency: "Up to 70 ml",
      construction: "Four-layer waterproof construction",
      composition: "78% nylon, 22% spandex",
      features: ["Antibacterial", "Eco-conscious", "Breathable", "Quick-drying"]
    },
    needsVerification: ["Absorbency test method", "Four-layer construction", "Antibacterial claim", "Eco-conscious claim", "Fiber composition"],
    internalNotes: ["Do not strengthen period-care performance claims until supporting documentation is reviewed."],
    isNew: true,
    variants: [
      { options: { Color: "Apricot", Size: "XS" }, stock: 12 },
      { options: { Color: "Apricot", Size: "S" }, stock: 12 }
    ]
  }
];

export { wearItems };
