import { enrichCatalogProduct, makeVariants } from "./catalogUtils";
import { bundleProducts } from "./bundleProducts";

const shopLines = [
  {
    title: "Training Gear",
    text: "Agarre, soporte y herramientas para practicar con más confianza.",
    button: "Shop products",
    href: "#product-grid",
    image: "/images/training-boutique.jpg",
    alt: "PRFCT10 grips and gymnastics training products",
    tone: "training"
  },
  {
    title: "Accessories",
    text: "Lazos, dijes, bolsitos y detalles para completar su look.",
    button: "Ver colección",
    href: "#coqueteria",
    image: "/images/collection-coqueteria.png",
    alt: "Pastel gymnastics accessories",
    tone: "cute"
  },
  {
    title: "Mind Gym",
    text: "Fidgets, puzzles y squishies para pensar, enfocarse y jugar mientras entrena su mente.",
    button: "Descubrir línea",
    href: "#gimnasia-mental",
    image: "/images/mental-boutique-focus.png",
    alt: "Colorful sensory toy for focus and fine-motor play",
    tone: "mind"
  },
  {
    title: "Apparel",
    text: "Piezas cómodas, sets y mallas para entrenar, competir y verse impecable.",
    button: "Ver línea",
    href: "#ropa-mallas",
    image: "/images/collection-ropa.png",
    alt: "Pastel athletic apparel for gymnasts",
    tone: "wear"
  }
];

const rawCoquetteItems = [
    {
      name: "Medalleros",
      image: "/images/coquet-medalleros.png",
      gallery: ["/images/coquet-medalleros.png"],
    description: "Piezas decorativas para ordenar medallas y celebrar cada logro con estilo.",
    idealFor: "Habitaciones, regalos, competencias y recuerdos especiales.",
    why: "Convierte cada medalla en parte de su historia y mantiene sus logros visibles."
  },
  {
    name: "Collar Silueta Gimnasia",
    modalName: "Collar Silueta Gimnasia",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-collar-silueta-gimnasia-portada.png",
    gallery: [
      "/images/coqueteria-collar-silueta-gimnasia-portada.png",
      "/images/coqueteria-collar-silueta-gimnasia-arabesque.png",
      "/images/coqueteria-collar-silueta-gimnasia-handstand-split.png",
      "/images/coqueteria-collar-silueta-gimnasia-leap.png",
      "/images/coqueteria-collar-silueta-gimnasia-seated.png",
      "/images/coqueteria-collar-silueta-gimnasia-bridge.png",
      "/images/coqueteria-collar-silueta-gimnasia-handstand.png"
    ],
    description: "Collares delicados con siluetas de gimnasia en acabado dorado y plateado, perfectos para llevar su deporte favorito cerca del corazon.",
    commercialDescription: "Una coleccion de collares finos con figuras de gimnasta en diferentes poses. Cada silueta se siente elegante, deportiva y muy personal, ideal para regalar a ninas y adolescentes que aman la gimnasia.",
    loveList: [
      "Siluetas de gimnasia en diferentes poses.",
      "Disponible en acabado dorado y plateado segun disponibilidad.",
      "Diseno delicado, femenino y facil de combinar.",
      "Portada con los tres bustos para mostrar la coleccion.",
      "Best for regalar, coleccionar o combinar con looks del gym."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y detalles especiales para gimnastas.",
    why: "Cada collar convierte una pose de gimnasia en un detalle elegante y emocional que pueden usar todos los dias.",
    chips: ["Siluetas", "Dorado/plateado", "Coleccionable"]
  },
    {
      name: "Toallas de Playa",
      image: "/images/coquet-toalla-playa.png",
      gallery: ["/images/coquet-toalla-playa.png"],
    description: "Toallas con estética gimnástica para viajes, piscina, playa o días de descanso.",
    idealFor: "Vacaciones, campamentos, competencias y regalos.",
    why: "Son prácticas, coloridas y mantienen la energía PRFCT10 fuera del gimnasio."
  },
    {
      name: "Spray de escarcha",
      image: "/images/coquet-glitter-spray.png",
      gallery: [
        "/images/coquet-glitter-spray.png",
        "/images/coquet-glitter-spray-carrusel-1.png",
        "/images/coquet-glitter-spray-carrusel-2.png",
        "/images/coquet-glitter-spray-carrusel-3.png",
        "/images/coquet-glitter-spray-carrusel-4.png"
      ],
    description: "Brillo en spray para cabello y cuerpo en presentaciones, fotos y competencia.",
    idealFor: "Competencias, exhibiciones, peinados y momentos especiales.",
    why: "Da ese toque final de brillo sin perder una estética limpia y bonita."
  },
    {
      name: "Lazos de tul",
      image: "/images/coquet-lazos-tul.png",
      gallery: [
        "/images/coquet-lazos-tul.png",
        "/images/coquet-lazos-tul-carrusel-1.png",
        "/images/coquet-lazos-tul-carrusel-2.png"
      ],
    description: "Lazos suaves y brillantes para completar peinados con un acabado delicado.",
    idealFor: "Competencias, entrenamientos, fotos y regalos.",
    why: "Son fáciles de combinar y hacen que el look se sienta más pulido."
  },
    {
      name: "Peluflores",
      image: "/images/coquet-peluflores.png",
      gallery: [
        "/images/coquet-peluflores.png",
        "/images/coquet-peluflores-carrusel-familia.png",
        "/images/coquet-peluflores-carrusel-ramo.png",
        "/images/coquet-peluflores-carrusel-closeup.png"
      ],
    description: "Flores de peluche alegres para regalar, decorar o acompañar un kit PRFCT10.",
    idealFor: "Celebrar logros, decorar habitaciones y armar detalles cute.",
    why: "Son tiernas, coloridas y perfectas para reconocer cada avance."
  },
    {
      name: "Bolsos de Silicón",
      image: "/images/coquet-bolsos-silicon-portada.png",
      gallery: [
        "/images/coquet-bolsos-silicon-portada.png",
        "/images/coquet-bolsos-silicon-carrusel-1.png",
        "/images/coquet-bolsos-silicon-carrusel-2.png",
        "/images/coquet-bolsos-silicon-carrusel-3.png",
        "/images/coquet-bolsos-silicon-carrusel-4.png",
        "/images/coquet-bolsos-silicon-carrusel-5.png",
        "/images/coquet-bolsos-silicon-carrusel-6.png",
      ],
    description: "Bolsitos suaves, prácticos y fáciles de limpiar para llevar accesorios, grips, ligas, lazos o pequeños esenciales de entrenamiento.",
    idealFor: "Competencias, entrenamientos, regalos y kits personalizados.",
    why: "Son coloridos, resistentes, combinables con charms y perfectos para que cada gimnasta lleve sus cosas con estilo."
  },
  {
    name: "Guardapolvos de Gimnasia",
    image: "/images/coqueteria-guardapolvos-gimnasia-portada.png",
    gallery: [
      "/images/coqueteria-guardapolvos-gimnasia-portada.png",
      "/images/coqueteria-guardapolvos-gimnasia-lifestyle-nina.png",
      "/images/coqueteria-guardapolvos-gimnasia-lila.png",
      "/images/coqueteria-guardapolvos-gimnasia-room.png"
    ],
    description: "Guardapolvos prácticos para proteger, transportar y organizar mallas, accesorios y esenciales de competencia.",
    idealFor: "Competencias, viajes, presentaciones, closets de gimnasia y kits de equipo.",
    why: "Mantienen las piezas importantes ordenadas, protegidas y listas para salir con un look pulido.",
    chips: ["Organización", "Competencia", "Viajes"]
  },
    {
      name: "Charms de Gimnasia",
      image: "/images/coquet-charms-cover.png",
      gallery: [
        "/images/coquet-charms-cover.png",
        "/images/coquet-charms-silicon-bag.png",
        "/images/coquet-charms-tres-mujeres.png"
      ],
    description: "Dijes decorativos inspirados en gimnasia para personalizar bolsos, termos, llaveros o accesorios.",
    idealFor: "Agregar un detalle especial al look de competencia o entrenamiento.",
    why: "Cada charm hace que sus accesorios se sientan únicos, cute y muy de gimnasta."
  },
  {
    name: "Amuleto",
    modalName: "Amuleto Gimnasta",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coquet-amuleto-portada.png",
    gallery: [
      "/images/coquet-amuleto-portada.png",
      "/images/coquet-amuleto-lifestyle.png",
      "/images/coquet-amuleto-azul.png",
      "/images/coquet-amuleto-verde.png",
      "/images/coquet-amuleto-rosado-closeup.png",
      "/images/coquet-amuleto-rosado.png"
    ],
    description: "Pulsera ajustable con dije de gimnasia, creada para acompañar a cada atleta como un pequeño amuleto de confianza, motivación y buena energía antes de entrenar o competir.",
    commercialDescription: "Un detalle lindo, ligero y significativo para gimnastas. El Amuleto Gimnasta combina una pulsera ajustable de color con un dije circular de gimnasia, perfecto para regalar, combinar con el look del gym o llevar como recordatorio de fuerza, valentía y seguridad.",
    cardPhrase: "Un pequeño amuleto para entrenar con confianza y competir con brillo.",
    colors: "Rosado, azul y verde.",
    idealFor: "Regalos, competencias, amigas del equipo, detalles de motivación y bolsitas sorpresa.",
    why: "Es un accesorio pequeño, fácil de llevar y lleno de intención para acompañar cada entrenamiento con buena energía.",
    chips: ["Confianza", "Motivación", "Regalo cute"]
  }
  ,
  {
    name: "Pulsera Charm",
    modalName: "Pulsera Charm Gimnasta",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coquet-pulsera-charm-portada.png",
    gallery: [
      "/images/coquet-pulsera-charm-portada.png",
      "/images/coquet-pulsera-charm-lila.png",
      "/images/coquet-pulsera-charm-celeste.png",
      "/images/coquet-pulsera-charm-azul.png",
      "/images/coquet-pulsera-charm-lifestyle.png"
    ],
    description: "Pulsera multicapa con dije de gimnasia, detalle love y pieza central Gymnastics. Un accesorio lindo para llevar el amor por la gimnasia a todas partes.",
    commercialDescription: "Un accesorio coquetico, liviano y lleno de personalidad para niñas y adolescentes que aman la gimnasia. Su diseño multicapa combina tiras de color, trenzado blanco, detalles metálicos y un charm colgante de gimnasta que le da ese toque especial de esto es mío. Perfecta para regalar, usar después del entrenamiento, llevar a competencias o combinar con el look del gym.",
    loveList: [
      "Diseño multicapa tipo wrap.",
      "Detalle metálico love.",
      "Pieza central con la palabra Gymnastics.",
      "Charm colgante de gimnasta.",
      "Liviana y fácil de usar.",
      "Best for regalos, competencias y detalles de equipo."
    ],
    howToUse: "Colócala alrededor de la muñeca y ajústala suavemente hasta que quede cómoda. Úsala como accesorio diario, regalo especial o detalle motivacional antes de entrenar o competir.",
    age: "Best for niñas, preadolescentes y adolescentes gimnastas. También es perfecta para mamás, coaches o fans de la gimnasia que quieran un detalle lindo.",
    purpose: "Más que una pulsera, es un pequeño recordatorio de amor por la gimnasia, confianza y motivación.",
    gymnastics: "Ayuda a reforzar el sentido de pertenencia, la ilusión por el deporte y ese toque emocional que muchas atletas aman llevar fuera del gimnasio.",
    idealFor: "Regalos, competencias, amigas del equipo, detalles de motivación y looks del gym.",
    why: "Tiene brillo, movimiento y significado: un accesorio pequeño que hace sentir la gimnasia cerca.",
    chips: ["Multicapa", "Charm gimnasta", "Regalo cute"]
  },
  {
    name: "Pulsera Love Charm",
    modalName: "Pulsera Love Charm",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coquet-pulsera-love-charm-portada.png",
    gallery: [
      "/images/coquet-pulsera-love-charm-portada.png",
      "/images/coquet-pulsera-love-charm-individual.png",
      "/images/coquet-pulsera-love-charm-colores.png",
      "/images/coquet-pulsera-love-charm-lifestyle.png"
    ],
    description: "Pulsera con detalle love, dije de gimnasia y acabado delicado para sumar un toque cute al look de cada gimnasta.",
    commercialDescription: "Una pulsera delicada y llena de personalidad para gimnastas que aman los detalles con significado. Combina un charm love con un dije de gimnasia y colores faciles de regalar, coleccionar y combinar con el look del gym.",
    loveList: [
      "Portada con los tres colores principales.",
      "Detalle metalico love.",
      "Dije colgante de gimnasia.",
      "Disponible en varios colores.",
      "Ligera, dulce y facil de combinar."
    ],
    idealFor: "Regalos, competencias, amigas del equipo, bolsitas sorpresa y detalles de motivacion.",
    why: "Es un accesorio pequeno, brillante y emocional que acompana la pasion por la gimnasia fuera del entrenamiento.",
    chips: ["Love charm", "Gimnasia", "Regalo cute"]
  },
  {
    name: "Pulsera Corazon Gimnasia",
    modalName: "Pulsera Corazon Gimnasia",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-pulsera-corazon-gimnasia-portada.png",
    gallery: [
      "/images/coqueteria-pulsera-corazon-gimnasia-portada.png",
      "/images/coqueteria-pulsera-corazon-gimnasia-dorada.png",
      "/images/coqueteria-pulsera-corazon-gimnasia-plateada.png",
      "/images/coqueteria-pulsera-corazon-gimnasia-lifestyle.png"
    ],
    description: "Pulsera de cadena con corazon y silueta de gimnasta, disponible en acabado dorado y plateado para un detalle fino y especial.",
    commercialDescription: "Una pulsera delicada con un dije de corazon que integra una silueta de gimnasia. Es femenina, significativa y perfecta para regalar a gimnastas que quieren llevar su deporte favorito en un accesorio elegante.",
    loveList: [
      "Dije de corazon con silueta de gimnasta.",
      "Cadena metalica con ajuste.",
      "Disponible en dorado y plateado segun disponibilidad.",
      "Portada con ambos acabados para comparar.",
      "Best for usar a diario o como regalo especial."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y detalles de motivacion.",
    why: "Une corazon y gimnasia en una pieza delicada que se siente personal, linda y facil de combinar.",
    chips: ["Corazon", "Dorado/plateado", "Regalo cute"]
  },
  {
    name: "Pulsera Silueta Gimnasia",
    modalName: "Pulsera Silueta Gimnasia",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-pulsera-silueta-gimnasia-portada.png",
    gallery: [
      "/images/coqueteria-pulsera-silueta-gimnasia-portada.png",
      "/images/coqueteria-pulsera-silueta-gimnasia-satin-doble.png",
      "/images/coqueteria-pulsera-silueta-gimnasia-doble.png",
      "/images/coqueteria-pulsera-silueta-gimnasia-dorado-plateado.png"
    ],
    description: "Pulsera fina con silueta de gimnasta integrada a la cadena, disponible en dorado y plateado para un look delicado y deportivo.",
    commercialDescription: "Una pulsera elegante con figura de gimnasta como pieza central. Su diseno combina una cadena delicada con una silueta deportiva, perfecta para ninas y adolescentes que quieren llevar la gimnasia en un accesorio sutil y especial.",
    loveList: [
      "Silueta de gimnasta como detalle principal.",
      "Cadena fina con cierre ajustable.",
      "Disponible en dorado y plateado segun disponibilidad.",
      "Portada con fondo lila para mostrar la coleccion.",
      "Ligera, delicada y facil de combinar."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y looks del gym.",
    why: "Tiene una silueta limpia y elegante que conecta con la pasion por la gimnasia sin dejar de verse fina.",
    chips: ["Silueta", "Dorado/plateado", "Gimnasia"]
  },
  {
    name: "Collar Infinity Love",
    modalName: "Collar Infinity Love",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-collar-infinity-love-portada.png",
    gallery: [
      "/images/coqueteria-collar-infinity-love-portada.png",
      "/images/coqueteria-collar-infinity-love-dorado.png",
      "/images/coqueteria-collar-infinity-love-plateado.png",
      "/images/coqueteria-collar-infinity-love-lifestyle.png"
    ],
    description: "Collar delicado con simbolo infinito y detalle love, pensado para llevar un brillo dulce y significativo dentro o fuera del gym.",
    commercialDescription: "Un collar fino, tierno y facil de regalar para gimnastas que aman los accesorios con significado. Combina el simbolo infinito con un detalle love para recordar pasion, constancia y amor por la gimnasia.",
    loveList: [
      "Diseno delicado con simbolo infinito.",
      "Detalle love con acabado brillante.",
      "Disponible en tono dorado y plateado segun disponibilidad.",
      "Best for usar a diario o como regalo especial.",
      "Ligero, combinable y muy cute."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y detalles de motivacion.",
    why: "Es un accesorio pequeno con mucho significado: amor por la gimnasia, constancia y brillo personal.",
    chips: ["Infinity love", "Dorado/plateado", "Regalo cute"]
  },
  {
    name: "Collar Love Gymnastics",
    modalName: "Collar Love Gymnastics",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-collar-love-gymnastics-portada.png",
    gallery: [
      "/images/coqueteria-collar-love-gymnastics-portada.png",
      "/images/coqueteria-collar-love-gymnastics-azul.png",
      "/images/coqueteria-collar-love-gymnastics-cristal.png",
      "/images/coqueteria-collar-love-gymnastics-rosado.png",
      "/images/coqueteria-collar-love-gymnastics-lifestyle.png"
    ],
    description: "Collar con detalle love gymnastics y brillo de color para que cada gimnasta lleve su deporte favorito cerquita.",
    commercialDescription: "Un collar alegre y femenino para ninas y adolescentes que aman la gimnasia. Sus detalles de color y el mensaje love gymnastics lo hacen perfecto para regalar, combinar con accesorios de competencia o sumar al look diario.",
    loveList: [
      "Detalle love gymnastics.",
      "Disponible en varios tonos segun disponibilidad.",
      "Brillo delicado y acabado femenino.",
      "Perfecto para regalos de equipo o bolsitas sorpresa.",
      "Un accesorio pequeno que se siente muy personal."
    ],
    colors: "Azul, rosado y cristal segun disponibilidad.",
    idealFor: "Regalos, competencias, amigas del equipo, looks del gym y detalles de celebracion.",
    why: "Tiene color, brillo y mensaje de gimnasia: un detalle facil de amar y de combinar.",
    chips: ["Love gymnastics", "Colores", "Gimnasta"]
  },
  {
    name: "Collar Corazon Gimnasia",
    modalName: "Collar Corazon Gimnasia",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-collar-corazon-gimnasia-portada.png",
    gallery: [
      "/images/coqueteria-collar-corazon-gimnasia-portada.png",
      "/images/coqueteria-collar-corazon-gimnasia-dorado.png",
      "/images/coqueteria-collar-corazon-gimnasia-plateado.png",
      "/images/coqueteria-collar-corazon-gimnasia-lifestyle.png"
    ],
    description: "Collar de corazon con silueta de gimnasta, disponible en dorado y plateado para un detalle delicado y lleno de significado.",
    commercialDescription: "Un collar fino y emocional para gimnastas que aman los accesorios con sentido. Su dije de corazon integra una silueta de gimnasia en un diseno limpio, elegante y facil de usar todos los dias.",
    loveList: [
      "Dije de corazon con silueta de gimnasta.",
      "Disponible en acabado dorado y plateado segun disponibilidad.",
      "Diseno delicado, ligero y combinable.",
      "Portada con ambos colores para comparar.",
      "Perfecto para regalar o llevar como recordatorio de amor por la gimnasia."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y detalles de motivacion.",
    why: "Une corazon y gimnasia en una pieza sencilla, elegante y muy facil de amar.",
    chips: ["Corazon", "Silueta", "Dorado/plateado"]
  },
  {
    name: "Love Prfction",
    modalName: "Love Prfction",
    modalCategory: "Gymnastics Accessories",
    image: "/images/coqueteria-love-prfction-portada.png",
    gallery: [
      "/images/coqueteria-love-prfction-portada.png",
      "/images/coqueteria-love-prfction-dorado.png",
      "/images/coqueteria-love-prfction-plateado.png",
      "/images/coqueteria-love-prfction-lifestyle.png"
    ],
    description: "Collar de corazon con silueta de gimnasta, detalle de brillo y mensaje Practice Makes Perfect para llevar la motivacion cerca.",
    commercialDescription: "Un collar especial para gimnastas que aman los accesorios con significado. Combina un corazon, una silueta de gimnasia, cristales y el mensaje Practice Makes Perfect en un diseno disponible en acabado dorado y plateado.",
    loveList: [
      "Diseno de corazon con silueta de gimnasta.",
      "Mensaje Practice Makes Perfect.",
      "Detalle de cristales y pequeno corazon rosado.",
      "Disponible en dorado y plateado segun disponibilidad.",
      "Best for regalar antes de competencias o como recuerdo motivacional."
    ],
    colors: "Dorado y plateado.",
    idealFor: "Regalos, competencias, amigas del equipo, cumpleanos y detalles de motivacion.",
    why: "Tiene brillo, mensaje y gimnasia en una sola pieza: se siente emocional, elegante y muy PRFCT10.",
    chips: ["Practice", "Corazon", "Dorado/plateado"]
  }
];

const coquetteCategoryMap = {
  "Collar Silueta Gimnasia": "Collares",
  "Collar Infinity Love": "Collares",
  "Collar Love Gymnastics": "Collares",
  "Collar Corazon Gimnasia": "Collares",
  "Love Prfction": "Collares",
  "Pulsera Silueta Gimnasia": "Pulseras",
  "Pulsera Corazon Gimnasia": "Pulseras",
  "Pulsera Charm": "Pulseras",
  "Pulsera Love Charm": "Pulseras",
  "Amuleto": "Pulseras",
  "Charms de Gimnasia": "Charms",
  "Lazos de tul": "Look de competencia",
  "Spray de escarcha": "Look de competencia",
  "Guardapolvos de Gimnasia": "Organizacion",
  "Bolsos de Silicón": "Organizacion",
  "Medalleros": "Regalos y detalles",
  "Peluflores": "Regalos y detalles",
  "Toallas de Playa": "Regalos y detalles"
};

const coquetteRemovedNames = new Set(["Toallas de Playa", "Charms de Gimnasia", "Collar Corazon Gimnasia"]);

const coquetteItemUpdates = {
  Medalleros: { id: "coquet-medal-hanger", name: "Gymnastics Medal Hanger", subcategory: "gifts", price: 34.99, salePrice: 29.99, stockTotal: 50, group: "Gifts & Details", cardKicker: "Gifts" },
  "Spray de escarcha": { id: "coquet-glitter-spray", name: "Glitter Spray", subcategory: "competition", price: 11.99, salePrice: 9.99, stockTotal: 50, group: "Competition Look", cardKicker: "Competition" },
  "Lazos de tul": {
    id: "coquet-lazos-tul",
    name: "PRFCT10 Gymnastics Bows",
    subcategory: "hairAccessories",
    price: 16.99,
    salePrice: 14.99,
    group: "Hair Accessories",
    cardKicker: "Hair",
    purchasedQty: 12,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Hot Pink", "Neon Orange", "Light Pink", "Lavender", "Light Blue", "Aqua Blue", "Light Yellow", "White", "Rainbow", "Red", "Blue", "Black", "Apple Green"], { "Hot Pink": 6, "Neon Orange": 6 }, { Rainbow: { price: 18.99, salePrice: 16.99, stock: null, status: "in-production" } }).map((variant) => variant.stock === null && !variant.status ? { ...variant, status: "in-production" } : variant),
    modalSections: [
      { title: "About this item", content: ["One product card with color variants.", "Rainbow has its own regular and sale price."] },
      { title: "Inventory", content: ["Hot Pink - 6 finished bows.", "Neon Orange - 6 finished bows.", "Other colors are in production or coming soon."] }
    ]
  },
  Peluflores: { id: "coquet-plush-flowers", name: "Plush Flowers", subcategory: "gifts", price: 16.99, salePrice: 14.99, stockTotal: 100, group: "Gifts & Details", cardKicker: "Gifts", variants: makeVariants("Color", ["Fuchsia", "Pink", "Purple", "Orange", "Green", "Blue", "Multicolor"], { Fuchsia: 25, Pink: 25, Purple: 20, Orange: 5, Green: 5, Blue: 5, Multicolor: 15 }) },
  "Bolsos de Silicón": {
    id: "coquet-silicone-bag",
    name: "PRFCT10 Silicone Charm Bag",
    subcategory: "gymBags",
    image: "/images/accessories-silicone-charm-bag-cover.png",
    imagePosition: "center center",
    gallery: [
      "/images/accessories-silicone-charm-bag-cover.png",
      "/images/accessories-silicone-charm-bag-peach-pink.png",
      "/images/accessories-silicone-charm-bag-blue-lagoon.png",
      "/images/accessories-silicone-charm-bag-light-yellow.png",
      "/images/accessories-silicone-charm-bag-lilac.png",
      "/images/accessories-silicone-charm-bag-sky-blue.png",
      "/images/accessories-silicone-charm-bag-group.png",
      "/images/accessories-silicone-charm-bag-lifestyle-pool.png",
      "/images/accessories-silicone-charm-bag-lifestyle-studio.png"
    ],
    price: 34.99,
    salePrice: 29.99,
    purchasedQty: 20,
    stockTotal: 20,
    status: "available",
    inventoryVerified: true,
    group: "Organization",
    cardKicker: "Organization",
    description: "Soft silicone bag for gym essentials with 12 removable gymnastics charms included.",
    loveList: ["Includes 12 removable Gymnastics Charms.", "Charms can decorate the bag, garment bag, or everyday accessories.", "Charms are bundled with the bag and are not sold independently right now."],
    modalSections: [
      { title: "Included charms", content: ["Comes with 12 gymnastics-themed silicone charms in PRFCT10 pastel colors.", "Designed to personalize the bag and make every gym-day setup feel playful and organized."] },
      { title: "Best for", content: ["Grips, bows, towel, water bottle, recovery extras, and competition-day essentials."] }
    ],
    variants: makeVariants("Color", ["Light Yellow", "Lilac", "Peach Pink", "Sky Blue", "Blue Lagoon"]).map((variant) => ({ ...variant, status: "allocation-pending" }))
  },
  "Guardapolvos de Gimnasia": { id: "coquet-garment-bag", name: "Gymnastics Garment Bag", subcategory: "gymBags", price: 24.99, salePrice: 19.99, stockTotal: 16, group: "Organization", cardKicker: "Organization", variants: makeVariants("Color", ["Pink", "Purple"], { Pink: 8, Purple: 8 }), specifications: ["Size: 60 x 100 cm"] },
  Amuleto: { id: "coquet-string-charm-bracelet", name: "Gymnastics String Charm Bracelet", subcategory: "jewelry", price: 7.99, salePrice: 6.99, stockTotal: 12, group: "Bracelets", cardKicker: "Bracelets", variants: makeVariants("Color", ["Apple Green", "Turquoise Blue", "Fuchsia"], { "Apple Green": 4, "Turquoise Blue": 4, Fuchsia: 4 }) },
  "Pulsera Charm": { id: "coquet-leather-charm-bracelet", name: "Gymnastics Leather Charm Bracelet", subcategory: "jewelry", price: 9.99, salePrice: 8.99, stockTotal: 20, group: "Bracelets", cardKicker: "Bracelets", variants: makeVariants("Color", ["Lilac", "Aqua", "Blue", "Baby Blue", "Red"], { Lilac: 4, Aqua: 4, Blue: 4, "Baby Blue": 4, Red: 4 }) },
  "Pulsera Love Charm": { id: "coquet-infinity-heart-bracelet", name: "Infinity Heart Gymnastics Bracelet", subcategory: "jewelry", price: 11.99, salePrice: 9.99, stockTotal: 24, group: "Bracelets", cardKicker: "Bracelets", variants: makeVariants("Design", ["Style 1", "Style 2", "Style 3", "Style 4", "Style 5", "Style 11", "Style 12", "Style 15", "Style 16", "Style 17", "Style 18", "Style 19"], Object.fromEntries(["Style 1", "Style 2", "Style 3", "Style 4", "Style 5", "Style 11", "Style 12", "Style 15", "Style 16", "Style 17", "Style 18", "Style 19"].map((style) => [style, 2]))) },
  "Pulsera Corazon Gimnasia": { id: "coquet-lock-charm-bracelet", name: "Stainless Steel Gymnastics Lock Charm Bracelet", subcategory: "jewelry", price: 14.99, salePrice: 12.99, stockTotal: 12, group: "Bracelets", cardKicker: "Bracelets", variants: makeVariants("Finish", ["Silver", "Gold"], { Silver: 6, Gold: 6 }) },
  "Pulsera Silueta Gimnasia": { id: "brazalete-gimnasia", name: "Gymnastics Bracelet", subcategory: "jewelry", price: 14.99, salePrice: 12.99, stockTotal: 12, group: "Bracelets", cardKicker: "Bracelets", variants: [
    { options: { Design: "Gymnastics 1", Finish: "Silver" }, stock: 2 },
    { options: { Design: "Gymnastics 1", Finish: "Gold" }, stock: 2 },
    { options: { Design: "Gymnastics 2", Finish: "Silver" }, stock: 2 },
    { options: { Design: "Gymnastics 2", Finish: "Gold" }, stock: 2 },
    { options: { Design: "Gymnastics 4", Finish: "Silver" }, stock: 2 },
    { options: { Design: "Gymnastics 4", Finish: "Gold" }, stock: 2 }
  ] },
  "Collar Silueta Gimnasia": { id: "coquet-gymnast-necklace", name: "Stainless Steel Gymnast Necklace", subcategory: "jewelry", price: 14.99, salePrice: 12.99, stockTotal: 32, group: "Necklaces", cardKicker: "Necklaces", variants: makeVariants("Design", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "26"].map((style) => `Design ${style}`), Object.fromEntries(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "26"].map((style) => [`Design ${style}`, 2]))) },
  "Collar Love Gymnastics": { id: "coquet-rhinestone-necklace", name: "Rhinestone Gymnastics Necklace", subcategory: "jewelry", price: 16.99, salePrice: 14.99, stockTotal: 12, group: "Necklaces", cardKicker: "Necklaces", variants: makeVariants("Color", ["Pink", "Blue", "Clear / White"], { Pink: 6, Blue: 3, "Clear / White": 3 }) },
  "Collar Infinity Love": { id: "coquet-infinity-necklace", name: "Infinity Heart Gymnastics Necklace", subcategory: "jewelry", price: 14.99, salePrice: 12.99, stockTotal: 4, group: "Necklaces", cardKicker: "Necklaces", variants: makeVariants("Finish", ["Silver", "Gold"], { Silver: 2, Gold: 2 }) },
  "Love Prfction": { id: "coquet-pendant-necklace", name: "Cheer & Gymnastics Pendant Necklace", subcategory: "jewelry", price: 9.99, salePrice: 8.99, stockTotal: 10, group: "Necklaces", cardKicker: "Necklaces", variants: makeVariants("Finish", ["Silver", "Gold"], { Silver: 5, Gold: 5 }) }
};

const coquetteNewItems = [
  {
    id: "coquet-nylon-headbands",
    name: "Nylon Headbands",
    subcategory: "hairAccessories",
    image: "/images/accessories-nylon-headbands-cover.png",
    imagePosition: "center center",
    gallery: [
      "/images/accessories-nylon-headbands-cover.png",
      "/images/accessories-nylon-headbands-product-pink-green.png",
      "/images/accessories-nylon-headbands-product-blue-orange.png",
      "/images/accessories-nylon-headbands-product-white-burgundy.png",
      "/images/accessories-nylon-headbands-product-pink-purple.png",
      "/images/accessories-nylon-headbands-lifestyle-studio.png",
      "/images/accessories-nylon-headbands-lifestyle-stairs.png",
      "/images/accessories-nylon-headbands-lifestyle-track.png",
      "/images/accessories-nylon-headbands-lifestyle-pastel.png"
    ],
    description: "Soft nylon headbands sold as a same-color pair for practice, competition hair, and clean team looks.",
    price: 5.99,
    salePrice: 4.99,
    purchasedQty: 400,
    purchaseUnit: "piece",
    sellUnit: "pair",
    unitsPerSale: 2,
    stockPieces: 400,
    stockTotal: 200,
    status: "available",
    inventoryVerified: true,
    group: "Hair Accessories",
    cardKicker: "Hair",
    variants: makeVariants("Color", ["White", "Sky Blue", "Purple", "Orange", "Light Pink", "Pink", "Burgundy", "Fluorescent Green"], { White: 25, "Sky Blue": 25, Purple: 25, Orange: 25, "Light Pink": 25, Pink: 25, Burgundy: 25, "Fluorescent Green": 25 }),
    modalSections: [
      { title: "About this item", content: ["Sold as a same-color pair.", "One cart unit equals one pair (two physical headbands)."] },
      { title: "Inventory", content: ["400 physical pieces purchased.", "200 commercial pairs available: 25 pairs per color."] }
    ]
  },
  {
    id: "coquet-bun-covers",
    name: "Gymnastics Bun Covers",
    subcategory: "hairAccessories",
    image: "/images/accessories-gymnastics-bun-covers-cover.png",
    imagePosition: "center 8%",
    gallery: [
      "/images/accessories-gymnastics-bun-covers-cover.png",
      "/images/accessories-gymnastics-bun-covers-lifestyle-lilac.png",
      "/images/accessories-gymnastics-bun-covers-lifestyle-mint.png",
      "/images/accessories-gymnastics-bun-covers-lifestyle-pink.png",
      "/images/accessories-gymnastics-bun-covers-product-purple.png",
      "/images/accessories-gymnastics-bun-covers-product-blue.png",
      "/images/accessories-gymnastics-bun-covers-product-hot-pink.png",
      "/images/accessories-gymnastics-bun-covers-product-pink.png",
      "/images/accessories-gymnastics-bun-covers-close-aqua.png",
      "/images/accessories-gymnastics-bun-covers-close-pink.png",
      "/images/accessories-gymnastics-bun-covers-close-hot-pink.png",
      "/images/accessories-gymnastics-bun-covers-detail-blue.png"
    ],
    description: "Cute bun covers to keep competition hair polished and photo-ready.",
    price: 7.99,
    salePrice: 6.99,
    stockTotal: 20,
    group: "Hair Accessories",
    cardKicker: "Hair",
    variants: makeVariants("Color", ["Sky Blue", "Light Pink", "Purple", "Mint Green", "Rose Pink"], { "Sky Blue": 4, "Light Pink": 4, Purple: 4, "Mint Green": 4, "Rose Pink": 4 })
  },
  {
    id: "coquet-tiara-comb",
    name: "Rhinestone Tiara Hair Comb",
    subcategory: "hairAccessories",
    image: "/images/accessories-rhinestone-tiara-cover.png",
    imagePosition: "center center",
    gallery: [
      "/images/accessories-rhinestone-tiara-cover.png",
      "/images/accessories-rhinestone-tiara-mendoza.png",
      "/images/accessories-rhinestone-tiara-fernandez.png",
      "/images/accessories-rhinestone-tiara-saez.png",
      "/images/accessories-rhinestone-tiara-machado.png",
      "/images/accessories-rhinestone-tiara-palacios.png",
      "/images/accessories-rhinestone-tiara-isler.png",
      "/images/accessories-rhinestone-tiara-lifestyle-portrait.png",
      "/images/accessories-rhinestone-tiara-lifestyle-pearl.png",
      "/images/accessories-rhinestone-tiara-lifestyle-ribbon.png"
    ],
    description: "Rhinestone hair combs with style variants for polished competition hair.",
    price: 14.99,
    salePrice: 12.99,
    stockTotal: 24,
    group: "Hair Accessories",
    cardKicker: "Hair",
    variantLabel: "Choose Your Style",
    variants: makeVariants("Design", ["Style 20", "Style 11", "Style 31", "Style 4", "Style 5", "Style 34"], { "Style 20": 4, "Style 11": 4, "Style 31": 4, "Style 4": 4, "Style 5": 4, "Style 34": 4 })
  },
  {
    id: "coquet-tie-dye-visor",
    name: "PRFCT10 Tie-Dye Visor",
    subcategory: "competition",
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
    description: "Adjustable tie-dye visor with a PRFCT10 patch.",
    price: 24.99,
    salePrice: 21.99,
    stockTotal: 12,
    group: "Competition Look",
    cardKicker: "Competition",
    oneSize: "Adjustable",
    purchasedQty: 12,
    status: "available",
    inventoryVerified: true,
    variants: makeVariants("Color", ["Purple", "Pink Blue", "Rose Red", "Pink Green"], { Purple: 3, "Pink Blue": 3, "Rose Red": 3, "Pink Green": 3 })
  }
];

const normalizedCoquetteItems = [
  ...rawCoquetteItems
    .filter((item) => !coquetteRemovedNames.has(item.name))
    .map((item) => enrichCatalogProduct(item, coquetteItemUpdates[item.name] || {})),
  ...coquetteNewItems,
  ...bundleProducts.filter((item) => item.id !== "bundle-mind-gym-mystery")
];

const coquetteItems = normalizedCoquetteItems.map((item) => {
  const group = item.group || coquetteCategoryMap[item.name] || "Gifts & Details";
  return {
    ...item,
    group,
    purchasedQty: item.purchasedQty ?? item.stockTotal,
    status: item.status || (typeof item.stockTotal === "number" ? "available" : item.status),
    inventoryVerified: item.inventoryVerified ?? (typeof item.stockTotal === "number" && !["in-production", "coming-soon"].includes(item.status)),
    cardKicker: item.cardKicker || group,
    chips: [...new Set([...(item.chips || []), group, "Accessories"])]
  };
});

export { coquetteItems, shopLines };
