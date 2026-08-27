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
  "core-sliders",
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
  "core-sliders": {
    details: "One lightweight sliding disc for controlled core, stability, mobility, and total-body strength work. Sold individually.",
    benefits: ["Sold individually", "Core control", "Low impact", "Easy to pack"]
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

const trainingModalContentEnglish = {
  "bar-grips": {
    included: ["One pair of Power Grips. Wrist bands and grip bags are not included."],
    sizing: ["Choose XS, S, M, or L using the athlete's hand measurement and the product size guide."],
    modeOfUse: [
      "Fit each grip securely before bar work and have a coach check the fit before first use.",
      "Wear wrist bands underneath for comfort and introduce the grips gradually before using them for full routines."
    ],
    safety: ["Inspect leather, holes, straps, and buckles before every session. Stop using damaged grips."],
    faqs: [
      {
        question: "Are Power Grips appropriate for beginners?",
        answer:
          "They are best for gymnasts who train bars regularly or are beginning to need palm protection because of training volume. A coach should confirm readiness and fit."
      },
      {
        question: "Do they prevent every callus or blister?",
        answer: "No. They help protect the palms but do not eliminate the possibility of calluses, blisters, or irritation."
      },
      {
        question: "Do they need a break-in period?",
        answer: "Yes. Introduce them gradually so the leather and the athlete's hands can adjust before full routines."
      },
      {
        question: "Are wrist bands included?",
        answer: "No. Power Grips are sold as one pair without wrist bands or a grip bag."
      }
    ]
  },
  chalk: {
    included: ["Choose one chalk block or one box containing eight chalk blocks."],
    modeOfUse: ["Use a small amount on clean, dry hands before apparatus work; reapply only as needed."],
    safety: ["Avoid breathing chalk dust and keep it away from eyes. Follow gym rules for chalk use and storage."],
    faqs: [{ question: "What is the difference between the buying options?", answer: "Single block includes one block. Box of 8 includes eight blocks." }]
  },
  "core-sliders": {
    included: ["One Core Slider in the selected color. Core Sliders are sold individually, not as a pair."],
    modeOfUse: [
      "Place one hand or foot on the slider over a suitable, clear surface.",
      "Keep the core engaged and begin with slow, controlled ranges of motion.",
      "Use a second independently purchased slider only when the exercise calls for two."
    ],
    safety: [
      "Test the surface before every exercise and stop if the slider catches or moves unpredictably.",
      "Avoid uncontrolled speed and stop if wrist, shoulder, back, hip, or knee pain appears."
    ],
    faqs: [
      { question: "Is this a pair?", answer: "No. Each Core Slider is sold individually so you can choose one or combine colors." },
      { question: "Which surfaces can I use?", answer: "Performance depends on the floor and slider side. Test a clear area before starting." },
      { question: "Can beginners use it?", answer: "Yes, with simple controlled exercises and appropriate adult or coach supervision." }
    ]
  },
  "gel-heel-guards": {
    included: ["One pair of gel heel guards."],
    modeOfUse: ["Place over clean, dry heels and confirm a comfortable fit before tumbling or landing work."],
    safety: ["Stop use if the guards rub, slip, tear, or cause discomfort. They do not replace medical care."]
  },
  "kinesio-tape": {
    included: ["One roll, 5 cm x 5 m."],
    modeOfUse: ["Apply to clean, dry skin using the technique recommended by a qualified coach or clinician."],
    safety: ["Do not apply over broken or irritated skin. Remove if redness, itching, numbness, or pain develops."]
  },
  "wrist-bands": {
    included: ["One pair of leather wrist supports."],
    modeOfUse: ["Fasten evenly and confirm that the wrist can move comfortably before training."],
    safety: ["Do not overtighten. Stop use if there is numbness, tingling, pain, or damaged hardware."]
  },
  "tiger-paws": {
    included: ["One pair of wrist guards."],
    sizing: ["Choose XS, S, M, or L after checking the athlete's wrist measurement."],
    modeOfUse: ["Secure each guard evenly and have a coach check the fit before impact or support work."],
    safety: ["Do not overtighten. Inspect the straps and inserts before use and replace damaged parts."]
  },
  "flex-strap-12": {
    included: ["One 12-level flexibility strap."],
    modeOfUse: ["Select a comfortable loop and move through controlled stretches without bouncing."],
    safety: ["Do not force range of motion. Stop if stretching causes sharp pain, numbness, or joint discomfort."],
    faqs: [
      {
        question: "Is it only for stretching?",
        answer: "No. It can also support active flexibility, controlled strength, and mobility exercises."
      },
      {
        question: "Can it be used for legs and glutes?",
        answer: "Yes. It can be used for controlled activation and strengthening exercises."
      },
      {
        question: "Can younger athletes use it?",
        answer: "Yes, with an adult or coach supervising the exercise, range of motion, and resistance."
      }
    ]
  },
  "resistance-handles": {
    included: ["One resistance-band set with handles."],
    modeOfUse: ["Anchor and grip the band securely before controlled strength or warm-up exercises."],
    safety: ["Inspect the band and handles before every use. Do not use cracked, frayed, or overstretched equipment."],
    faqs: [
      {
        question: "Can it be used for warm-ups?",
        answer: "Yes. It can support controlled activation of the shoulders, arms, and legs."
      },
      {
        question: "Can the band become damaged?",
        answer: "Yes. Elastic bands can be damaged by wear, sunlight, cuts, sharp surfaces, or excessive tension, so inspect them before every use."
      },
      {
        question: "Can younger athletes use it?",
        answer: "Yes, with coach or adult supervision and resistance appropriate for the athlete."
      }
    ]
  },
  "power-weights": {
    included: ["One pair in the selected weight and color."],
    modeOfUse: ["Secure the pair evenly at the wrists or ankles and begin with controlled conditioning."],
    safety: ["Use with coach supervision. Remove if the weights shift, pinch, or change safe movement mechanics."]
  },
  "patella-band": {
    included: ["One adjustable patella band."],
    modeOfUse: ["Position below the kneecap and adjust for a secure fit that does not restrict circulation."],
    safety: ["Do not overtighten. Stop use if pain, numbness, swelling, or skin irritation develops."]
  },
  "soft-landing-ankle-braces": {
    included: ["One pair of ankle braces."],
    sizing: ["Choose M, L, or XL and confirm a secure fit before training."],
    modeOfUse: ["Fasten both braces evenly before landing or impact practice."],
    safety: ["The braces do not replace rehabilitation or medical care. Stop use if they cause pain, numbness, or instability."]
  },
  "sweat-wristbands": {
    included: ["One pair of wristbands."],
    modeOfUse: ["Wear around the wrists during practice and wash between uses."],
    safety: ["Do not wear too tightly. Remove if they cause irritation, pressure, or discomfort."]
  },
  "hand-balm": {
    directions: ["Apply a small amount to clean, dry hands after practice. Keep away from eyes."],
    warnings: ["Do not apply to open wounds. Stop use if irritation or a reaction develops."]
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
    inventoryNotes: [
      { title: "About this item", content: ["Leather adjustable grips sold as a single product family.", "Power Grips are sold alone and do not include wrist bands or grip bags."] },
      { title: "Inventory", content: ["Total registered: 29 pairs.", "Confirmed: XS / Size 0 / 14.1 cm - 5 pairs.", "Newest lot: 24 pairs pending size allocation."] }
    ]
  },
  "core-sliders": {
    category: "Strength",
    group: "Fuerza",
    price: 4.99,
    salePrice: null,
    purchasedQty: 40,
    purchaseUnit: "unit",
    stockTotal: 40,
    status: "available",
    inventoryVerified: true,
    variants: [
      { options: { Color: "Fuchsia" }, stock: 10, sku: "CS-FUCHSIA", status: "available" },
      { options: { Color: "Light Blue" }, stock: 10, sku: "CS-LIGHT-BLUE", status: "available" },
      { options: { Color: "Mint Green" }, stock: 10, sku: "CS-MINT", status: "available" },
      { options: { Color: "Purple" }, stock: 10, sku: "CS-PURPLE", status: "available" }
    ],
    inventoryNotes: [
      { title: "About this item", content: ["Sold individually; one selected color per unit.", "Choose multiple units if an exercise requires more than one slider."] },
      { title: "Inventory", content: ["Total registered: 40 units.", "Fuchsia, Light Blue, Mint Green, and Purple: 10 units each."] }
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
    inventoryNotes: [
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
    baseUnit: { unit: "block", stockKnown: false },
    status: "stock-check-required",
    variants: [
      { options: { Pack: "Single block" }, price: 3.99, salePrice: 3.49, stock: null, sku: "GCB-SINGLE", status: "stock-check-required", unitsConsumed: 1 },
      { options: { Pack: "Box of 8" }, price: 24.99, salePrice: null, stock: null, sku: "GCB-BOX8", status: "stock-check-required", unitsConsumed: 8 }
    ],
    inventoryNotes: [
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
  const englishModalContent = trainingModalContentEnglish[product.id] || {};
  const spanishAccordionBenefits = product.accordionBenefits || product.benefits;
  const displayName = product.name;
  const category = inventory.category || copy.category || product.group || product.category;

  return {
    ...product,
    ...inventory,
    name: displayName,
    modalName: displayName,
    brandName: `PRFCT10 ${displayName}`,
    category,
    modalTemplate: product.id === "hand-balm" ? "cosmetic" : "technical",
    modalCategory: inventory.modalCategory || "Training Gear",
    description: copy.details || product.description,
    details: copy.details || product.details || product.description,
    benefits: copy.benefits || product.benefits,
    accordionBenefits: copy.benefits || product.accordionBenefits,
    contentLocale: "es",
    localizedContent: {
      ...(product.localizedContent || {}),
      en: {
        accordionBenefits: copy.benefits,
        ...englishModalContent
      },
      ...(product.id === "hand-balm"
        ? {
            es: {
              accordionBenefits: spanishAccordionBenefits,
              directions: product.modeOfUse,
              warnings: product.contraindications || product.safety
            }
          }
        : {
            es: {
              accordionBenefits: spanishAccordionBenefits
            }
          })
    }
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
      "Ideal para zonas con fricción o resequedad.",
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
  "core-sliders": "strength",
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
