import { makeVariants } from "./catalogUtils";

const trainingProductIds = [
  "bar-grips",
  "chalk",
  "gel-heel-guards",
  "kinesio-tape",
  "wrist-bands",
  "tiger-paws",
  "flex-strap-12",
  "resistance-handles",
  "power-weights",
  "patella-band",
  "soft-landing-ankle-braces"
];

const trainingEnglishCopy = {
  "bar-grips": {
    details: "Leather bar grips designed to improve grip, protect the palms, and support confident repetition on bars.",
    benefits: ["Grip support", "Palm protection", "Bar training", "Competition prep"]
  },
  chalk: {
    details: "Chalk for keeping hands dry, improving grip feel, and supporting confident turns during practice.",
    benefits: ["Dry hands", "Better grip feel", "Practice essential", "Competition prep"]
  },
  "gel-heel-guards": {
    details: "Soft heel guards for comfort during repetitive impact, jumps, landings, and long practice days.",
    benefits: ["Heel comfort", "Impact support", "Soft fit", "Practice care"]
  },
  "kinesio-tape": {
    details: "Flexible tape that supports sensitive areas while allowing athletes to keep moving naturally.",
    benefits: ["Flexible support", "Movement friendly", "Practice care", "Easy to pack"]
  },
  "wrist-bands": {
    details: "Structured wrist support for strength work, bars, tumbling, and exercises with repeated pressure on the wrists.",
    benefits: ["Wrist support", "Stable feel", "Strength work", "Practice ready"]
  },
  "tiger-paws": {
    details: "Premium wrist guards for gymnasts who train with impact and need extra stability through repeated support work.",
    benefits: ["Wrist protection", "Impact support", "Premium support", "Gymnastics"]
  },
  "flex-strap-12": {
    details: "A 12-level flexibility strap for warm-ups, mobility, strength control, and progress tracking.",
    benefits: ["Flexibility", "Mobility", "Strength control", "Progress levels"]
  },
  "resistance-handles": {
    details: "Resistance bands with handles for controlled shoulder, arm, leg, and conditioning work.",
    benefits: ["Strength", "Control", "Warm-up", "Conditioning"]
  },
  "power-weights": {
    details: "Light ankle and wrist weights for controlled conditioning without losing mobility.",
    benefits: ["Light resistance", "Conditioning", "Adjustable", "Practice support"]
  },
  "patella-band": {
    details: "A knee support band for athletes who want extra stability during impact training.",
    benefits: ["Knee support", "Impact training", "Adjustable", "Practice care"]
  },
  "soft-landing-ankle-braces": {
    details: "Adjustable ankle braces for more confidence through landings, jumps, and high-impact practice days.",
    benefits: ["Ankle support", "Landings", "Adjustable", "Confidence"]
  },
  "sweat-wristbands": {
    details: "Soft wristbands that absorb sweat and help keep hands drier during long training sessions.",
    benefits: ["Sweat control", "Dry hands", "Comfort", "Daily practice"]
  },
  "hand-balm": {
    details: "Hydrating hand balm for dry hands and rough spots after chalk, bars, and friction.",
    benefits: ["Hydrates", "Softens", "Post-practice", "Hand care"]
  }
};

const trainingInventory = {
  "bar-grips": {
    category: "Grip",
    group: "Agarre",
    price: 49.99,
    salePrice: null,
    purchasedQty: 29,
    purchaseUnit: "pair",
    stockTotal: 29,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants(
      "Size",
      ["XS", "S", "M", "L"],
      { XS: 5 },
      {
        XS: { sku: "PG-XS", note: "XS / Size 0 / 14.1 cm" },
        S: { sku: "PG-S", status: "allocation-pending" },
        M: { sku: "PG-M", status: "allocation-pending" },
        L: { sku: "PG-L", status: "allocation-pending" }
      }
    ),
    modalSections: [
      { title: "About this item", content: ["Leather adjustable grips sold as a single product family.", "Power Grips are sold alone and do not include wrist bands or grip bags."] },
      { title: "Inventory", content: ["Total registered: 29 pairs.", "Confirmed: XS / Size 0 / 14.1 cm - 5 pairs.", "Newest lot: 24 pairs pending size allocation."] }
    ]
  },
  "tiger-paws": {
    category: "Support",
    group: "Soporte",
    price: 19.99,
    salePrice: 16.99,
    purchasedQty: 25,
    stockTotal: 25,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Size", ["XS", "S", "M", "L"], {}, { XS: { status: "allocation-pending" }, S: { status: "allocation-pending" }, M: { status: "allocation-pending" }, L: { status: "allocation-pending" } }),
    modalSections: [
      { title: "About this item", content: ["Wrist Guards are the commercial product name. Do not confuse with palm grips or Power Grips."] },
      { title: "Inventory", content: ["Total registered: 25 units.", "Distribution by size pending confirmation."] }
    ]
  },
  chalk: {
    category: "Grip",
    group: "Agarre",
    price: 3.99,
    salePrice: 3.49,
    purchasedQty: 8,
    purchaseUnit: "block",
    status: "stock-check-required",
    variants: [
      { options: { Pack: "Single block" }, price: 3.99, salePrice: 3.49, stock: null, sku: "GCB-SINGLE", status: "stock-check-required" },
      { options: { Pack: "Box of 8" }, price: 24.99, salePrice: null, stock: null, sku: "GCB-BOX8", status: "stock-check-required" }
    ],
    modalSections: [
      { title: "About this item", content: ["Gymnastics chalk for dry hands and a better grip feel during practice."] },
      { title: "Inventory", content: ["Exact physical stock for blocks and boxes must be confirmed.", "Status: stock check required."] }
    ]
  },
  "gel-heel-guards": {
    category: "Recovery",
    group: "Soporte",
    price: 12.99,
    salePrice: 10.99,
    purchasedQty: 100,
    stockTotal: 100,
    status: "available",
    inventoryVerified: true,
    oneSize: "One Size",
    variants: []
  },
  "kinesio-tape": {
    category: "Support",
    group: "Soporte",
    price: 9.99,
    salePrice: 8.99,
    purchasedQty: 120,
    stockTotal: 120,
    status: "available",
    inventoryVerified: true,
    specifications: ["5 cm x 5 m"],
    variants: makeVariants("Color", ["Pink", "Skin", "Light Blue", "Green", "Yellow", "Orange", "Purple", "Black"], {}, {
      Pink: { status: "allocation-pending" },
      Skin: { status: "allocation-pending" },
      "Light Blue": { status: "allocation-pending" },
      Green: { status: "allocation-pending" },
      Yellow: { status: "allocation-pending" },
      Orange: { status: "allocation-pending" },
      Purple: { status: "allocation-pending" },
      Black: { status: "allocation-pending" }
    })
  },
  "wrist-bands": {
    category: "Support",
    group: "Soporte",
    price: 34.99,
    salePrice: 29.99,
    purchasedQty: 12,
    stockTotal: 12,
    status: "available",
    inventoryVerified: true,
    oneSize: "One Size",
    variants: []
  },
  "flex-strap-12": {
    category: "Flexibility",
    group: "Flexibilidad",
    price: 12.99,
    salePrice: 9.99,
    purchasedQty: 100,
    stockTotal: 100,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Blush Pink", "Sky Blue", "Lilac", "Purple", "Coral Pink"]).map((variant) => ({ ...variant, status: "allocation-pending" }))
  },
  "resistance-handles": {
    category: "Strength",
    group: "Fuerza",
    price: 12.99,
    salePrice: 9.99,
    purchasedQty: 20,
    stockTotal: 20,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Sky Blue", "Pink", "Purple"]).map((variant) => ({ ...variant, status: "allocation-pending" }))
  },
  "power-weights": {
    category: "Strength",
    group: "Fuerza",
    price: 24.99,
    salePrice: 19.99,
    purchasedQty: 30,
    purchaseUnit: "pair",
    stockTotal: 30,
    status: "available",
    inventoryVerified: true,
    variants: [
      { options: { Weight: "0.6 kg per pair", Color: "Pink" }, stock: 7, sku: "AWA-06-PINK" },
      { options: { Weight: "0.6 kg per pair", Color: "Blue" }, stock: 5, sku: "AWA-06-BLUE" },
      { options: { Weight: "0.6 kg per pair", Color: "Gray" }, stock: 3, sku: "AWA-06-GRAY" },
      { options: { Weight: "1 kg per pair", Color: "Pink" }, stock: 5, sku: "AWA-1-PINK" },
      { options: { Weight: "1 kg per pair", Color: "Blue" }, stock: 5, sku: "AWA-1-BLUE" },
      { options: { Weight: "1 kg per pair", Color: "Gray" }, stock: 5, sku: "AWA-1-GRAY" }
    ]
  },
  "patella-band": {
    category: "Support",
    group: "Soporte",
    price: 14.99,
    salePrice: 12.99,
    purchasedQty: 30,
    stockTotal: 30,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Gray", "Beige"], { Gray: 10, Beige: 20 }),
    oneSize: "One Size Fits Most"
  },
  "soft-landing-ankle-braces": {
    category: "Support",
    group: "Soporte",
    price: 14.99,
    salePrice: 12.99,
    purchasedQty: 24,
    stockTotal: 24,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Size", ["M", "L", "XL"], { M: 8, L: 12, XL: 4 })
  },
  "sweat-wristbands": {
    category: "Comfort & control",
    group: "Soporte",
    price: 8.99,
    salePrice: 7.99,
    purchasedQty: 100,
    stockTotal: 100,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Apple Green", "White", "Pink", "Purple", "Orange", "Navy Blue", "Yellow", "Green", "Aqua", "Lilac"]).map((variant) => ({ ...variant, status: "allocation-pending" }))
  },
  "hand-balm": {
    category: "Post-practice care",
    group: "Recuperacion",
    price: 11.99,
    salePrice: 9.99,
    purchasedQty: 30,
    stockTotal: 30,
    status: "available",
    inventoryVerified: true,
    variants: []
  }
};

function getTrainingProductForModal(product) {
  const inventory = trainingInventory[product.id] || {};
  const copy = trainingEnglishCopy[product.id] || {};
  const displayName = product.name;
  const category = inventory.category || copy.category || product.group || product.category;

  return {
    ...product,
    ...inventory,
    name: displayName,
    modalName: displayName,
    brandName: `PRFCT10 ${displayName}`,
    category,
    modalCategory: inventory.modalCategory || "Training Gear",
    description: copy.details || product.description,
    details: copy.details || product.details || product.description,
    benefits: copy.benefits || product.benefits,
    accordionBenefits: copy.benefits || product.accordionBenefits,
    modalSections: inventory.modalSections || product.modalSections,
    modeOfUse: [
      "Use before or during practice based on the athlete's need.",
      "Check fit, surface, or application before training starts.",
      "Keep the product clean, dry, and in good condition between sessions."
    ],
    faqs: [
      {
        question: "Can younger athletes use it?",
        answer: "Yes, with adult supervision and by checking comfort, fit, and product condition."
      },
      {
        question: "Can it be used for competition?",
        answer: "It depends on the event rules. Confirm with the coach or meet organizer first."
      }
    ],
    sportsUses: ["Artistic gymnastics.", "Practice.", "Conditioning.", "Competition prep."]
  };
}

const trainingExtraProducts = [
  {
    id: "sweat-wristbands",
    name: "Gymnastics Wrist Bands",
    brandName: "PRFCT10 Gymnastics Wrist Bands",
    subcategory: "support",
    category: "Comodidad y control",
    group: "Soporte",
    price: "Consultar",
    description: "Muñequeras suaves para absorber sudor durante entrenamientos largos.",
    details:
      "Absorben el sudor durante entrenamientos largos y ayudan a mantener las manos más secas antes de usar grips, magnesio o trabajar barras. Ideales para comodidad, control y un look deportivo cute.",
    benefits: ["Sudor bajo control", "Manos más secas", "Look deportivo", "Uso diario"],
    accordionBenefits: [
      "Ayudan a absorber sudor durante rutinas largas.",
      "Acompañan el uso de grips y magnesio.",
      "Aportan comodidad antes de barras o preparación física.",
      "Suman un detalle deportivo cute al uniforme de entrenamiento."
    ],
    modeOfUse: [
      "Colocar en la muñeca antes del entrenamiento.",
      "Usar debajo o cerca de los grips según comodidad.",
      "Retirar si se siente demasiada presión.",
      "Lavar y dejar secar entre usos."
    ],
    contraindications: ["No usar demasiado apretadas.", "Suspender si causan irritación o incomodidad."],
    specifications: ["Par de muñequeras.", "Material textil suave.", "Uso deportivo.", "Lavables."],
    sportsUses: ["Gimnasia artística.", "Barras.", "Preparación física.", "Entrenamientos largos."],
    imageClass: "product-card__image--sweat-wristbands",
    galleryImages: [
      "/images/product-sweat-wristbands-pastel.png",
      "/images/product-sweat-wristbands-colors.png",
      "/images/product-sweat-wristbands-lifestyle.png"
    ]
  },
  {
    id: "hand-balm",
    name: "Hand & Foot Balm",
    brandName: "PRFCT10 Hand & Foot Balm",
    subcategory: "recovery",
    category: "Cuidado post-entreno",
    group: "Recuperación",
    price: "Consultar",
    description: "Bálsamo hidratante para manos y zonas resecas después del entrenamiento.",
    details:
      "Bálsamo hidratante para manos y zonas resecas después del entrenamiento. Ayuda a suavizar la piel castigada por magnesio, barras, callos y fricción.",
    benefits: ["Hidrata", "Suaviza", "Post-entreno", "Cuidado de manos"],
    accordionBenefits: [
      "Ayuda a suavizar manos resecas por magnesio y barras.",
      "Acompaña la rutina de cuidado después de entrenar.",
      "Best for zonas con fricción o resequedad.",
      "Suma un momento de cuidado personal a la práctica."
    ],
    modeOfUse: [
      "Aplicar una pequeña cantidad sobre manos limpias.",
      "Masajear en zonas resecas o con fricción.",
      "Usar después del entrenamiento o antes de dormir.",
      "Evitar contacto con ojos."
    ],
    contraindications: ["No aplicar sobre heridas abiertas.", "Suspender si causa irritación o reacción."],
    specifications: ["Bálsamo hidratante.", "Uso en manos y zonas resecas.", "Formato práctico.", "Cuidado post-entreno."],
    sportsUses: ["Gimnasia artística.", "Barras.", "Cuidado de manos.", "Rutina post-entreno."],
    imageClass: "product-card__image--hand-balm",
    galleryImages: [
      "/images/product-hand-balm-cover.png",
      "/images/product-hand-balm-hands-care.png",
      "/images/product-hand-balm-application.png",
      "/images/product-hand-balm-powdered-hands.png",
      "/images/coquet-balsamo-manos.png"
    ]
  }
];

const trainingSubcategories = {
  "bar-grips": "grip",
  chalk: "grip",
  "gel-heel-guards": "support",
  "kinesio-tape": "support",
  "wrist-bands": "support",
  "tiger-paws": "support",
  "flex-strap-12": "flexibility",
  "resistance-handles": "strength",
  "power-weights": "strength",
  "patella-band": "support",
  "soft-landing-ankle-braces": "support",
  "sweat-wristbands": "support",
  "hand-balm": "recovery"
};

export {
  getTrainingProductForModal,
  trainingEnglishCopy,
  trainingExtraProducts,
  trainingInventory,
  trainingProductIds,
  trainingSubcategories
};
