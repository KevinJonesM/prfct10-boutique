const apparelImage = "/images/collection-ropa.png";
const apparelSizes = ["S (7-8)", "M (9-10)", "L (11-12)"];

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
  purchasedQty,
  stockTotal: purchasedQty,
  purchaseUnit: "piece",
  pricingStatus: "provisional-dtf",
  price: null,
  salePrice: null,
  status: "available",
  inventoryVerified: true,
  variants: apparelSizes.map((size) => ({
    options: { Size: size },
    stock: null,
    status: "allocation-pending"
  })),
  modalSections: [
    {
      title: "Inventory",
      content: [`${purchasedQty} pieces purchased.`, "Exact distribution across S (7-8), M (9-10), and L (11-12) is pending physical verification."]
    },
    {
      title: "Pricing",
      content: ["Public pricing remains provisional while DTF production costs are finalized."]
    }
  ]
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
    description: "Seamless, high-waist period underwear with four-layer leak protection and up to 70 ml of absorbency.",
    benefits: ["Up to 70 ml absorbency", "Four-layer leak protection", "Seamless high waist", "Quick-drying"],
    idealFor: "Periods, travel, school, training days, and comfortable everyday backup protection.",
    why: "The flexible high-waist fit adds coverage and support while the breathable layered construction helps provide dependable leak protection.",
    specifications: ["78% nylon, 22% spandex", "Four-layer waterproof construction", "Up to 70 ml absorbency", "High-waist seamless design"],
    modalSections: [
      {
        title: "Materials & fit",
        content: ["78% nylon and 22% spandex for a soft, flexible fit designed for extended wear.", "High-waist construction provides added coverage and support."]
      },
      {
        title: "Leak protection",
        content: ["Four-layer waterproof design with up to 70 ml of absorbency for dependable period protection."]
      },
      {
        title: "Performance features",
        content: ["Antibacterial", "Eco-conscious", "Breathable", "Seamless", "Quick-drying"]
      }
    ],
    price: 17.99,
    salePrice: 14.99,
    purchasedQty: 24,
    stockTotal: 24,
    status: "available",
    inventoryVerified: true,
    isNew: true,
    variants: [
      { options: { Color: "Apricot", Size: "XS" }, stock: 12 },
      { options: { Color: "Apricot", Size: "S" }, stock: 12 }
    ]
  }
];

export { wearItems };
