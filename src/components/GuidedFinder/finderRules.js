import { products } from "../../data/products";
import { createCollectionProduct } from "../ProductSection/components/CategorySection";
import { coquetteItems } from "../ProductSection/data/accessoryProducts";
import { wearItems } from "../ProductSection/data/apparelProducts";
import { publicMentalItems } from "../ProductSection/data/mindGymProducts";
import {
  getTrainingProductForModal,
  trainingExtraProducts,
  trainingInventory,
  trainingSubcategories,
  trainingProductIds
} from "../ProductSection/data/trainingProducts";
import { enrichCatalogProduct } from "../ProductSection/data/catalogUtils";

export const finderQuestions = {
  shoppingFor: {
    eyebrow: "Step 1",
    title: "What are you shopping for?",
    options: [
      { value: "training", label: "Training", tone: "training", next: "trainingNeed" },
      { value: "competition", label: "Competition Day", tone: "accessories", next: "results" },
      { value: "cute", label: "Something Cute", tone: "accessories", next: "results" },
      { value: "mind", label: "Mind Gym", tone: "mind", next: "results" },
      { value: "apparel", label: "Apparel", tone: "apparel", next: "results" },
      { value: "gift", label: "A Gift", tone: "gift", next: "results" }
    ]
  },
  trainingNeed: {
    eyebrow: "Step 2",
    title: "What does she need help with?",
    options: [
      { value: "bars-grip", label: "Bars & Grip", tone: "training", next: "level" },
      { value: "wrist-support", label: "Wrist Support", tone: "training", next: "level" },
      { value: "strength-flexibility", label: "Strength & Flexibility", tone: "training", next: "level" },
      { value: "recovery-comfort", label: "Recovery & Comfort", tone: "training", next: "level" },
      { value: "not-sure", label: "Not Sure", tone: "neutral", next: "level" }
    ]
  },
  level: {
    eyebrow: "Step 3",
    title: "What level best fits?",
    helper: "This only helps us order the suggestions. It does not assess skill or readiness.",
    options: [
      { value: "beginner", label: "Beginner", tone: "training", next: "results" },
      { value: "developmental", label: "Xcel / Developmental", tone: "training", next: "results" },
      { value: "competitive", label: "Competitive", tone: "training", next: "results" },
      { value: "not-sure", label: "Not Sure", tone: "neutral", next: "results" }
    ]
  }
};

const trainingImages = {
  "bar-grips": "/images/product-bar-grips.png",
  chalk: "/images/product-chalk-real.jpg",
  "gel-heel-guards": "/images/product-gel-heel.png",
  "kinesio-tape": "/images/product-kinesio-real.png",
  "wrist-bands": "/images/product-wrist-bands.png",
  "tiger-paws": "/images/product-tiger-paws-beige-portada.png",
  "flex-strap-12": "/images/product-flex-strap.png",
  "resistance-handles": "/images/product-resistance-handles.jpg",
  "power-weights": "/images/product-weights.jpg",
  "patella-band": "/images/product-patella-band.png",
  "soft-landing-ankle-braces": "/images/product-soft-landing-ankle-set.png",
  "sweat-wristbands": "/images/product-sweat-wristbands-pastel.png",
  "hand-balm": "/images/product-hand-balm-cover.png"
};

const trainingCatalog = [
  ...trainingProductIds.map((id) => products.find((product) => product.id === id)).filter(Boolean),
  ...trainingExtraProducts
].map((product) => {
  const modalProduct = getTrainingProductForModal(enrichCatalogProduct(product, {
    ...(trainingInventory[product.id] || {}),
    subcategory: trainingSubcategories[product.id]
  }));
  return {
    ...modalProduct,
    image: modalProduct.image || modalProduct.galleryImages?.[0] || trainingImages[product.id],
    description: modalProduct.description,
    finderKey: `training:${product.id}`,
    finderDepartment: "Training Gear"
  };
});

const collectionCatalog = [
  ...coquetteItems.map((item) => ({ item, type: "coquette", department: "Accessories" })),
  ...publicMentalItems.map((item) => ({ item, type: "mind", department: "Mind Gym" })),
  ...wearItems.map((item) => ({ item, type: "wear", department: "Apparel" }))
].map(({ item, type, department }) => {
  const product = createCollectionProduct(item, type);
  return {
    ...product,
    image: product.image || product.galleryImages?.[0],
    finderKey: `${type}:${product.name}`,
    finderDepartment: department
  };
});

const finderCatalog = new Map(
  [...trainingCatalog, ...collectionCatalog].map((product) => [product.finderKey, product])
);

export const finderRecommendationGroups = {
  competition: [
    "coquette:PRFCT10 Gymnastics Bows",
    "coquette:Glitter Spray",
    "coquette:Gymnastics Garment Bag",
    "coquette:Gymnastics Bun Covers"
  ],
  cute: [
    "coquette:PRFCT10 Silicone Charm Bag",
    "coquette:Gymnastics String Charm Bracelet",
    "coquette:PRFCT10 Gymnastics Bows",
    "coquette:Plush Flowers"
  ],
  mind: [
    "mind:Squishy Dumpling",
    "mind:Rainbow Puzzle Ball",
    "mind:Magic Bean Puzzle",
    "mind:DNA Squishy Ball"
  ],
  apparel: ["wear:Tops", "wear:Hoodies", "wear:Shorts"],
  gift: [
    "coquette:Gymnastics Medal Hanger",
    "coquette:Gymnastics String Charm Bracelet",
    "coquette:Stainless Steel Gymnast Necklace",
    "coquette:Plush Flowers"
  ],
  training: {
    "bars-grip": [
      "training:bar-grips",
      "training:chalk",
      "training:sweat-wristbands",
      "training:hand-balm"
    ],
    "wrist-support": [
      "training:tiger-paws",
      "training:wrist-bands",
      "training:sweat-wristbands",
      "training:kinesio-tape"
    ],
    "strength-flexibility": [
      "training:flex-strap-12",
      "training:resistance-handles",
      "training:power-weights"
    ],
    "recovery-comfort": [
      "training:hand-balm",
      "training:gel-heel-guards",
      "training:sweat-wristbands",
      "training:soft-landing-ankle-braces"
    ],
    "not-sure": [
      "training:chalk",
      "training:flex-strap-12",
      "training:sweat-wristbands",
      "training:hand-balm"
    ]
  }
};

const levelPriority = {
  beginner: ["training:chalk", "training:flex-strap-12", "training:sweat-wristbands"],
  developmental: ["training:bar-grips", "training:tiger-paws", "training:resistance-handles"],
  competitive: ["training:bar-grips", "training:tiger-paws", "training:power-weights"],
  "not-sure": []
};

const recommendationReasons = {
  "training:bar-grips": "A bar-focused essential for grip feel and palm coverage during repeated practice.",
  "training:chalk": "A simple gym-bag staple for keeping hands dry and supporting a secure grip feel.",
  "training:sweat-wristbands": "A comfortable choice for sweat control during longer practice sessions.",
  "training:hand-balm": "A practical post-practice option for dry hands after chalk, bars, and friction.",
  "training:tiger-paws": "Structured wrist coverage for gymnasts doing repeated support and impact work.",
  "training:wrist-bands": "A supportive wrist option for bars, strength work, and regular practice use.",
  "training:kinesio-tape": "A flexible, easy-to-pack support option; fit and use should follow coach or professional guidance.",
  "training:flex-strap-12": "A versatile choice for warm-ups, mobility, flexibility, and controlled progress work.",
  "training:resistance-handles": "Useful for controlled shoulder, arm, and leg conditioning exercises.",
  "training:power-weights": "Light adjustable resistance for controlled conditioning routines.",
  "training:gel-heel-guards": "A soft comfort layer for repetitive impact and long practice days.",
  "training:soft-landing-ankle-braces": "An adjustable support option for landing-focused practice and impact days.",
  "coquette:PRFCT10 Gymnastics Bows": "A polished finishing detail for competition hair, photos, or a coordinated gym look.",
  "coquette:Glitter Spray": "A quick finishing touch for competition-day hair, photos, and special moments.",
  "coquette:Gymnastics Garment Bag": "Helps keep competition apparel organized between home, travel, and the gym.",
  "coquette:Gymnastics Bun Covers": "A simple way to keep competition hair feeling neat and photo-ready.",
  "coquette:PRFCT10 Silicone Charm Bag": "A playful organizer for gym essentials with gymnastics charms already included.",
  "coquette:Gymnastics String Charm Bracelet": "A small gymnastics-themed detail that works well as an everyday gift.",
  "coquette:Plush Flowers": "A cheerful keepsake for celebrating a milestone, meet, or practice win.",
  "coquette:Gymnastics Medal Hanger": "A useful gift for displaying meet memories and keeping medals organized.",
  "coquette:Stainless Steel Gymnast Necklace": "A polished gymnastics keepsake with multiple silhouette designs.",
  "mind:Squishy Dumpling": "A soft sensory pick for busy hands and calm breaks around practice.",
  "mind:Rainbow Puzzle Ball": "A portable puzzle for focused play, patience, and hand coordination.",
  "mind:Magic Bean Puzzle": "A colorful rotating challenge for problem-solving and focused breaks.",
  "mind:DNA Squishy Ball": "A compact tactile option for squeezing and resetting during waiting moments.",
  "wear:Tops": "An easy athletic layer for practice, camps, warm-ups, and active days.",
  "wear:Hoodies": "A cozy layer for travel, cool mornings, school days, and post-practice comfort.",
  "wear:Shorts": "A practical lifestyle choice for movement, conditioning, and active weekends."
};

function prioritizeForLevel(keys, level) {
  const priorities = levelPriority[level] || [];
  if (!priorities.length) return keys;

  const rank = new Map(priorities.map((key, index) => [key, index]));
  return [...keys].sort((a, b) => (rank.get(a) ?? priorities.length) - (rank.get(b) ?? priorities.length));
}

export function getFinderRecommendations(answers) {
  const selectedKeys = answers.shoppingFor === "training"
    ? finderRecommendationGroups.training[answers.trainingNeed || "not-sure"]
    : finderRecommendationGroups[answers.shoppingFor];
  const orderedKeys = answers.shoppingFor === "training"
    ? prioritizeForLevel(selectedKeys || [], answers.level)
    : selectedKeys || [];

  return orderedKeys.slice(0, 6).map((key) => {
    const product = finderCatalog.get(key);
    return product ? { product, reason: recommendationReasons[key] } : null;
  }).filter(Boolean);
}
