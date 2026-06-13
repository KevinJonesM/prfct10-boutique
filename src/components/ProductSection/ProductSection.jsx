import { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import "./ProductSection.css";

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

const trainingCards = {
  "bar-grips": {
    displayName: "Calleras",
    description: "Grips de cuero para mejorar el agarre en barras, proteger las manos y entrenar con más control cuando la exigencia sube."
  },
  chalk: {
    displayName: "Magnesio",
    description: "Bloque de magnesio para mantener las manos secas, mejorar el control y dar más seguridad antes de cada turno."
  },
  "wrist-bands": {
    displayName: "Soporte de Muñecas",
    description: "Soporte estructurado para muñecas durante ejercicios de impacto, fuerza o repetición. Ayuda a entrenar con más estabilidad."
  },
  "tiger-paws": {
    displayName: "Protectores de Muñecas",
    description: "Protectores premium para muñecas en apoyos, acrobacias e impactos repetitivos. Ideales para cuidar lo que sostiene."
  },
  "kinesio-tape": {
    displayName: "Teipe Kinesio",
    description: "Cinta flexible para acompañar zonas sensibles y dar sensación de soporte sin limitar el movimiento de la gimnasta."
  },
  "flex-strap-12": {
    displayName: "Ligas de Flexibilidad",
    description: "Liga de niveles para activación, flexibilidad, fuerza específica y preparación antes de entrenar."
  },
  "resistance-handles": {
    displayName: "Ligas de Resistencia",
    description: "Liga con agarre para activar hombros, brazos y piernas o reforzar fuerza con control antes de la práctica."
  },
  "power-weights": {
    displayName: "Pesas para Tobillos y Muñecas",
    description: "Pesas ligeras para fortalecer brazos, piernas y preparación física sin perder movilidad ni control."
  },
  "gel-heel-guards": {
    displayName: "Taloneras",
    description: "Protectores suaves para talones que ayudan a reducir molestias durante entrenamientos repetitivos o de impacto."
  },
  "soft-landing-ankle-braces": {
    displayName: "Tobilleras de Aterrizajes",
    description: "Compresión ajustable para entrenar con más seguridad y confianza."
  }
};

const trainingExtraProducts = [
  {
    id: "sweat-wristbands",
    name: "Muñequeras para sudor",
    brandName: "PRFCT10 Muñequeras para sudor",
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
    name: "Bálsamo de Manos",
    brandName: "PRFCT10 Bálsamo de Manos",
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

const shopLines = [
  {
    title: "Entrenamiento",
    text: "Agarre, soporte y herramientas para practicar con más confianza.",
    button: "Ver productos",
    href: "#product-grid",
    image: "/images/training-boutique.jpg",
    alt: "Grips y productos de entrenamiento PRFCT10",
    tone: "training"
  },
  {
    title: "Coquetería",
    text: "Lazos, dijes, bolsitos y detalles para completar su look.",
    button: "Ver colección",
    href: "#coqueteria",
    image: "/images/collection-coqueteria.png",
    alt: "Accesorios pastel para gimnastas",
    tone: "cute"
  },
  {
    title: "Gimnasia mental",
    text: "Fidgets, puzzles y squishies para pensar, enfocarse y jugar mientras entrena su mente.",
    button: "Descubrir línea",
    href: "#gimnasia-mental",
    image: "/images/mental-boutique-focus.png",
    alt: "Recurso sensorial pastel para concentración y motricidad fina",
    tone: "mind"
  },
  {
    title: "Ropa y mallas",
    text: "Piezas cómodas, sets y mallas para entrenar, competir y verse impecable.",
    button: "Ver línea",
    href: "#ropa-mallas",
    image: "/images/collection-ropa.png",
    alt: "Ropa deportiva pastel para gimnastas",
    tone: "wear"
  }
];

const coquetteItems = [
    {
      name: "Medalleros",
      image: "/images/coquet-medalleros.png",
      gallery: ["/images/coquet-medalleros.png"],
    description: "Piezas decorativas para ordenar medallas y celebrar cada logro con estilo.",
    idealFor: "Habitaciones, regalos, competencias y recuerdos especiales.",
    why: "Convierte cada medalla en parte de su historia y mantiene sus logros visibles."
  },
    {
      name: "Bisutería",
      image: "/images/coquet-bisuteria.png",
      gallery: ["/images/coquet-bisuteria.png", "/images/coquet-collares.png"],
    description: "Detalles delicados para sumar brillo al look de entrenamiento o competencia.",
    idealFor: "Regalos, kits personalizados y accesorios de uso diario.",
    why: "Son piezas pequeñas, lindas y fáciles de combinar con su mood PRFCT10."
  },
    {
      name: "Collares",
      image: "/images/coquet-collares.png",
      gallery: ["/images/coquet-collares.png", "/images/coquet-bisuteria.png"],
    description: "Collares inspirados en gimnasia para llevar su pasión dentro y fuera del gym.",
    idealFor: "Cumpleaños, detalles de equipo y looks de competencia.",
    why: "Hacen que su estilo se sienta personal, cute y muy de gimnasta."
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
    image: "/images/coquet-guardapolvos-portada.png",
    gallery: [
      "/images/coquet-guardapolvos-portada.png",
      "/images/coquet-guardapolvos-lifestyle.png",
      "/images/coquet-guardapolvos-rosado.png",
      "/images/coquet-guardapolvos-lila.png"
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
      name: "Termos de Gimnasia",
      image: "/images/collection-coqueteria.png",
      gallery: ["/images/collection-coqueteria.png"],
    description: "Termos prácticos y lindos para acompañar a la gimnasta durante entrenamientos, competencias y días largos en el gym.",
    idealFor: "Hidratación diaria, campamentos, competencias y entrenamientos.",
    why: "Son funcionales, combinan con su estilo y hacen que mantenerse hidratada también se vea cute."
  },
  {
    name: "Amuleto",
    modalName: "Amuleto Gimnasta",
    modalCategory: "Coquetería de Gimnasia",
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
    modalCategory: "Coquetería de Gimnasia",
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
      "Ideal para regalos, competencias y detalles de equipo."
    ],
    howToUse: "Colócala alrededor de la muñeca y ajústala suavemente hasta que quede cómoda. Úsala como accesorio diario, regalo especial o detalle motivacional antes de entrenar o competir.",
    age: "Ideal para niñas, preadolescentes y adolescentes gimnastas. También es perfecta para mamás, coaches o fans de la gimnasia que quieran un detalle lindo.",
    purpose: "Más que una pulsera, es un pequeño recordatorio de amor por la gimnasia, confianza y motivación.",
    gymnastics: "Ayuda a reforzar el sentido de pertenencia, la ilusión por el deporte y ese toque emocional que muchas atletas aman llevar fuera del gimnasio.",
    idealFor: "Regalos, competencias, amigas del equipo, detalles de motivación y looks del gym.",
    why: "Tiene brillo, movimiento y significado: un accesorio pequeño que hace sentir la gimnasia cerca.",
    chips: ["Multicapa", "Charm gimnasta", "Regalo cute"]
  },
  {
    name: "Pulsera Love Charm",
    modalName: "Pulsera Love Charm",
    modalCategory: "Coqueteria de Gimnasia",
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
  }
];

const mentalItems = [
  {
    name: "Bolita Puzzle",
    image: "/images/mental-bolita-puzzle-portada.png",
    gallery: [
      "/images/mental-bolita-puzzle-portada.png",
      "/images/mental-bolita-puzzle-carrusel-1.png",
      "/images/mental-bolita-puzzle-carrusel-2.png"
    ],
    description: "Una pelota tipo puzzle con botones de colores que se presionan, mueven y combinan. Ideal para manos inquietas y momentos donde la gimnasta necesita enfocar su atención.",
    howToUse: "Presiona las bolitas de colores y muévelas de un espacio a otro hasta organizarlas por color. También puede usarse simplemente como fidget de mano.",
    age: "Desde 6 años en adelante.",
    purpose: "Trabaja concentración, paciencia, coordinación mano-ojo y resolución de problemas.",
    gymnastics: "En gimnasia, la mente también entrena. Este puzzle ayuda a practicar enfoque, calma y precisión, habilidades necesarias antes de competir o aprender elementos nuevos.",
    chips: ["Enfoque", "Paciencia", "Coordinación"]
  },
  {
    name: "Rueda Mental",
    image: "/images/mental-rueda-mental-portada.png",
    gallery: [
      "/images/mental-rueda-mental-portada.png",
      "/images/mental-rueda-mental-carrusel-2.png",
      "/images/mental-rueda-mental-carrusel-3.png"
    ],
    description: "Puzzle circular de doble cara con bolitas de colores y piezas giratorias. Un reto visual y táctil para mantener la mente activa.",
    howToUse: "Gira las secciones, mueve las bolitas por los canales y busca organizarlas por color o patrón.",
    age: "Desde 7 años en adelante.",
    purpose: "Estimula pensamiento lógico, coordinación, memoria visual y tolerancia a la frustración.",
    gymnastics: "Perfecto para gimnastas que necesitan aprender a respirar, pensar y resolver sin desesperarse. Ayuda a entrenar paciencia y control mental.",
    chips: ["Lógica", "Memoria visual", "Control"]
  },
  {
    name: "Giro Puzzle",
    image: "/images/mental-giro-puzzle-portada.png",
    gallery: [
      "/images/mental-giro-puzzle-portada.png",
      "/images/mental-giro-puzzle-carrusel-1.png",
      "/images/mental-giro-puzzle-carrusel-2.png",
      "/images/mental-giro-puzzle-carrusel-3.png"
    ],
    description: "Puzzle redondo con sistema giratorio y bolitas internas. Es divertido, colorido y retador sin sentirse complicado.",
    howToUse: "Gira las partes del puzzle, desliza las bolitas y busca completar combinaciones de color.",
    age: "Desde 6 años en adelante.",
    purpose: "Favorece concentración, coordinación fina y enfoque sostenido.",
    gymnastics: "Antes de una rutina, muchas niñas necesitan ocupar sus manos para calmar nervios. Este tipo de fidget ayuda a canalizar energía y mantener la mente enfocada.",
    chips: ["Calma", "Foco", "Motricidad fina"]
  },
  {
    name: "Squishy Dumpling",
    image: "/images/mental-squishy-dumpling-portada.png",
    gallery: [
      "/images/mental-squishy-dumpling-portada.png",
      "/images/mental-squishy-dumpling-carrusel-1.png",
      "/images/mental-squishy-dumpling-carrusel-2.png"
    ],
    description: "Un squishy suave, brillante y adorable con forma de dumpling. Perfecto para apretar, soltar y sentir alivio.",
    howToUse: "Se aprieta suavemente con la mano y vuelve poco a poco a su forma original.",
    age: "Desde 5 años en adelante.",
    purpose: "Apoya la relajación, la regulación emocional y la sensación de calma.",
    gymnastics: "Después de entrenamientos intensos o antes de competir, puede ayudar a liberar tensión en las manos y bajar la ansiedad de una forma cute y divertida.",
    chips: ["Calma", "Ansiedad", "Sensorial"]
  },
  {
    name: "Pulseras Unicornio",
    image: "/images/mental-pulseras-unicornio-portada.png",
    gallery: [
      "/images/mental-pulseras-unicornio-portada.png",
      "/images/mental-pulseras-unicornio-carrusel-1.png",
      "/images/mental-pulseras-unicornio-carrusel-2.png"
    ],
    description: "Pulseras elásticas sensoriales con textura de puntitos y diseño de unicornio. Cada pulsera tiene una cabeza de unicornio y una cola, manteniendo su forma correcta.",
    howToUse: "Se usan en la muñeca, se estiran suavemente, se enrollan y se manipulan con las manos como fidget.",
    age: "Desde 5 años en adelante.",
    purpose: "Estimulan el tacto, ayudan a canalizar inquietud y funcionan como accesorio sensorial.",
    gymnastics: "Son ideales para niñas que necesitan mover las manos entre rotaciones, esperar turnos o manejar nervios sin distraerse demasiado.",
    chips: ["Tacto", "Espera", "Inquietud"]
  },
  {
    name: "Pelota Squishy",
    image: "/images/mental-pelota-squishy-portada.png",
    gallery: [
      "/images/mental-pelota-squishy-portada.png",
      "/images/mental-pelota-squishy-carrusel-1.png",
      "/images/mental-pelota-squishy-carrusel-2.png"
    ],
    description: "Pelota transparente con bolitas de colores en su interior. Suave, llamativa y perfecta para apretar.",
    howToUse: "Se toma con una o dos manos y se aprieta para mover las bolitas internas y sentir la textura.",
    age: "Desde 5 años en adelante.",
    purpose: "Relajación, estimulación sensorial, fuerza ligera de manos y descarga de tensión.",
    gymnastics: "Las manos de una gimnasta trabajan muchísimo. Este squishy ayuda a liberar tensión, mejorar conciencia táctil y acompañar momentos de pausa o espera.",
    chips: ["Relajación", "Manos", "Pausa"]
  },
  {
    name: "Puzzle Mágico",
    image: "/images/mental-puzzle-magico-portada.png",
    gallery: [
      "/images/mental-puzzle-magico-carrusel-1.png",
      "/images/mental-puzzle-magico-carrusel-2.png",
      "/images/mental-puzzle-magico-carrusel-3.png"
    ],
    description: "Puzzle sensorial de colores para mover, ordenar y resolver con calma. Una pieza divertida para manos inquietas y mente enfocada.",
    howToUse: "Mueve las piezas, busca patrones de color y vuelve a empezar como reto de enfoque o fidget de pausa.",
    age: "Desde 6 años en adelante.",
    purpose: "Estimula lógica, paciencia, coordinación fina y control de la frustración.",
    gymnastics: "Ayuda a practicar calma y concentración entre turnos, antes de competir o después de una práctica intensa.",
    chips: ["Lógica", "Calma", "Precisión"]
  }
];

const wearItems = [
  {
    name: "Tops",
    image: "/images/collection-ropa.png",
    gallery: ["/images/collection-ropa.png"],
    description: "Tops cómodos para entrenar con libertad, soporte ligero y estilo PRFCT10.",
    idealFor: "Prácticas, campamentos, calentamientos y días largos en el gimnasio.",
    why: "Son piezas fáciles de combinar que mantienen el look deportivo, fresco y pulido."
  },
  {
    name: "Shorts",
    image: "/images/collection-ropa.png",
    gallery: ["/images/collection-ropa.png"],
    description: "Shorts suaves y prácticos para moverse con comodidad durante la práctica.",
    idealFor: "Entrenamientos, viajes, campamentos y rutinas de preparación física.",
    why: "Acompañan cada movimiento sin perder ese estilo limpio y cute de PRFCT10."
  },
  {
    name: "Hoodies",
    image: "/images/collection-ropa.png",
    gallery: ["/images/collection-ropa.png"],
    description: "Hoodies cozy para llegar al gym, viajar o descansar después de entrenar.",
    idealFor: "Calentamientos, competencias, viajes y días de descanso.",
    why: "Suman abrigo, comodidad y una presencia de equipo muy pulida."
  }
];

const mentalDisplayOrder = [
  "Puzzle Mágico",
  "Rueda Mental",
  "Giro Puzzle",
  "Pulseras Unicornio",
  "Squishy Dumpling",
  "Pelota Squishy",
  "Bolita Puzzle"
];

function orderItems(items, order) {
  const rank = new Map(order.map((name, index) => [name, index]));
  return [...items].sort((a, b) => (rank.get(a.name) ?? items.length) - (rank.get(b.name) ?? items.length));
}

function BoutiqueModal({ item, type, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("Lo que te va a encantar");

  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  useEffect(() => {
    setActiveImage(0);
    setOpenAccordion("");
  }, [item]);

  if (!item) return null;

  const isMental = type === "mind";
  const displayName = item.modalName || item.name;
  const gallery = item.gallery?.length ? item.gallery : isMental ? [item.image, item.image, item.image] : [item.image];
  const whatsappLabel = `Hola, quiero informacion sobre ${displayName} PRFCT10.`;
  const categoryLabel = item.modalCategory || (isMental ? "Gimnasia Mental" : type === "wear" ? "Ropa y Mallas" : "Coqueteria PRFCT10");
  const badges = item.chips || [categoryLabel, "PRFCT10"];
  const customAccordionItems = item.modalSections?.length
    ? item.modalSections
        .map((section) => ({
          ...section,
          content: Array.isArray(section.content) ? section.content : [section.content]
        }))
        .filter((accordionItem) => accordionItem.title && accordionItem.content.some(Boolean))
    : [];
  const accordionItems = customAccordionItems.length
    ? customAccordionItems
    : isMental
    ? [
        { title: "Lo que te va a encantar", content: [item.description] },
        { title: "Cómo se usa", content: [item.howToUse] },
        { title: "Edad sugerida", content: [item.age] },
        { title: "Finalidad", content: [item.purpose] },
        { title: "Por qué ayuda en gimnasia", content: [item.gymnastics] }
      ]
    : [
        { title: "Lo que te va a encantar", content: item.loveList || [item.commercialDescription || item.description] },
        { title: "Colores disponibles", content: [item.colors || "Segun disponibilidad"] },
        { title: "Ideal para", content: [item.idealFor || "Regalos, competencias, detalles de equipo y bolsitas sorpresa."] },
        { title: "Por que les encanta", content: [item.why || "Porque se siente personal, especial y muy de gimnasta."] }
      ].filter((accordionItem) => accordionItem.content.some(Boolean));

  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="boutique-modal-title">
      <button className="product-modal__overlay" onClick={onClose} type="button" aria-label="Cerrar detalles" />
      <div className="product-modal__dialog">
        <button className="product-modal__close" onClick={onClose} type="button" aria-label="Cerrar">
          X
        </button>
        <div className="product-modal__visual" aria-label={`Imagenes de ${displayName}`}>
          <div className="product-modal__visual-bg boutique-modal__visual-bg" style={{ backgroundImage: `url(${gallery[activeImage]})` }} aria-hidden="true" />
          <div className="product-modal__visual-gradient product-modal__visual-overlay" aria-hidden="true" />
          <img className="product-modal__visual-image boutique-modal__visual-image" src={gallery[activeImage]} alt={displayName} />
          <p className="product-modal__visual-caption">{displayName}</p>

          {gallery.length > 1 ? (
            <>
              <button
                className="product-modal__visual-nav product-modal__visual-nav--prev"
                onClick={() => setActiveImage((current) => (current - 1 + gallery.length) % gallery.length)}
                type="button"
                aria-label="Imagen anterior"
              >
                &lt;
              </button>
              <button
                className="product-modal__visual-nav product-modal__visual-nav--next"
                onClick={() => setActiveImage((current) => (current + 1) % gallery.length)}
                type="button"
                aria-label="Siguiente imagen"
              >
                &gt;
              </button>
              <div className="product-modal__dots">
                {gallery.map((image, index) => (
                  <button
                    className={activeImage === index ? "product-modal__dot product-modal__dot--active" : "product-modal__dot"}
                    key={`${image}-${index}`}
                    onClick={() => setActiveImage(index)}
                    type="button"
                    aria-label={`Ver modelo ${index + 1} de ${displayName}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="product-modal__content product-modal__content-panel">
          <p className="product-modal__category">Detalles del producto · {categoryLabel}</p>
          <h2 className="product-modal__title" id="boutique-modal-title">{displayName}</h2>
          <p className="product-modal__price">Consultar disponibilidad</p>
          <p className="product-modal__description">{item.description}</p>

          <div className="product-modal__badges" aria-label="Beneficios rápidos">
            {badges.map((badge) => (
              <span className="product-modal__badge" key={badge}>{badge}</span>
            ))}
          </div>

          <a className="product-modal__cta" href={createWhatsAppMessageLink(whatsappLabel)} rel="noreferrer" target="_blank">
            Pedir por WhatsApp
          </a>

          <div className="product-modal__accordion">
            {accordionItems.map((accordionItem) => (
              <div
                className={`product-modal__accordion-item ${openAccordion === accordionItem.title ? "product-modal__accordion-item--open" : ""}`}
                key={accordionItem.title}
              >
                <button
                  className="product-modal__accordion-header"
                  onClick={() => setOpenAccordion((current) => (current === accordionItem.title ? "" : accordionItem.title))}
                  type="button"
                  aria-expanded={openAccordion === accordionItem.title}
                >
                  <span>{accordionItem.title}</span>
                  <span className="product-modal__accordion-icon" aria-hidden="true">+</span>
                </button>
                <div className="product-modal__accordion-content">
                  <ul>
                    {accordionItem.content.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionGrid({ id, eyebrow, title, text, items, modifier, onSelectItem }) {
  const cardCategory = {
    coquette: "Coquetería",
    mind: "Gimnasia mental",
    wear: "Ropa y mallas"
  }[modifier];

  return (
    <section className={`collection-strip collection-strip--${modifier}`} id={id}>
      <div className="collection-strip__header">
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
      <div className="collection-strip__grid">
        {items.map((item) => (
          <button
            className="collection-strip__card"
            key={item.name}
            onClick={() => onSelectItem(item, modifier)}
            aria-label={item.cardPhrase ? `${item.name}. ${item.cardPhrase}` : item.name}
            type="button"
          >
            <img src={item.image} alt={item.name} />
            <span className="collection-strip__card-body">
              <span className="collection-strip__card-dots" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="collection-strip__card-kicker">{cardCategory}</span>
              <strong>{item.name}</strong>
              <em>Más detalles</em>
            </span>
          </button>
        ))}
      </div>
      <a className="collection-strip__back" href="#productos">Volver a La Boutique</a>
    </section>
  );
}

export default function ProductSection({ products, onSelectProduct }) {
  const [selectedCollectionItem, setSelectedCollectionItem] = useState(null);

  const trainingProducts = useMemo(
    () => [
      ...trainingProductIds.map((id) => products.find((product) => product.id === id)).filter(Boolean),
      ...trainingExtraProducts
    ],
    [products]
  );

  return (
    <section className="products" id="productos">
      <div className="products__particles" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <div className="products__hero">
        <img className="products__hero-image" src="/images/products-drop-hero.jpg" alt="Gimnasta saltando en gimnasio pastel" />
        <div className="products__hero-overlay" aria-hidden="true" />
        <div className="products__hero-fade" aria-hidden="true" />
        <div className="products__hero-content">
          <p className="products__eyebrow">PRODUCTOS PRFCT10</p>
          <h2 className="products__title">
            BIENVENIDOS A LA
            <br />
            BOUTIQUE
          </h2>
          <p className="products__subtitle">
            Agarre, soporte, resistencia y control: todo para entrenar fuerte sin perder el estilo.
          </p>
        </div>
      </div>

      <div className="products__container">
        <div className="shop-lines" aria-label="Categorías de productos PRFCT10">
          {shopLines.map((line, index) => (
            <article className={`shop-line shop-line--${line.tone}`} key={line.title}>
              <div className="shop-line__media">
                <img src={line.image} alt={line.alt} />
              </div>
              <div className="shop-line__body">
                <h3>{line.title}</h3>
                <a href={line.href}>Ver detalles</a>
              </div>
            </article>
          ))}
        </div>

        <aside className="shipping-cta" aria-label="Envíos nacionales PRFCT10">
          <div className="shipping-cta__panel">
            <div className="shipping-cta__copy">
              <p>Envíos Nacionales</p>
              <h3>PRFCT10 llega a toda Venezuela.</h3>
              <span>Recibe tus productos en tu ciudad con cobro a destino.</span>
              <small>Aceptamos dólares, euros, transferencia, Zelle y Pago Móvil.</small>
            </div>
            <a
              className="shipping-cta__button"
              href={createWhatsAppMessageLink("Hola, quiero hacer un pedido PRFCT10 con envío nacional.")}
              rel="noreferrer"
              target="_blank"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </aside>

        <section className="training-strip" id="product-grid">
          <div className="products__catalog">
            <p className="products__catalog-eyebrow">Entrenamiento PRFCT10</p>
            <h3 className="products__catalog-title">Artículos de Entrenamiento</h3>
            <p className="products__catalog-description">
              Todo para entrenar mejor, cuidarse más y avanzar con confianza: agarre, soporte, fuerza, recuperación y
              detalles pensados para gimnastas que van por más.
            </p>
          </div>

          <div className="products__grid">
            {trainingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                displayName={trainingCards[product.id]?.displayName}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
          <a className="training-strip__back" href="#productos">Volver a La Boutique</a>
        </section>

        <CollectionGrid
          id="coqueteria"
          eyebrow="Detalles PRFCT10"
          title="Coquetería"
          text="Detalles lindos para completar su look, celebrar logros y acompañar la vida de gimnasio con estilo."
          items={coquetteItems}
          modifier="coquette"
          onSelectItem={(item, type) => setSelectedCollectionItem({ item, type })}
        />

        <CollectionGrid
          id="gimnasia-mental"
          eyebrow="Juego y enfoque"
          title="Gimnasia Mental"
          text="Fidgets, puzzles y squishies pensados para acompañar a la gimnasta fuera del aparato: concentración, paciencia, calma, coordinación y enfoque antes o después de entrenar."
          items={orderItems(mentalItems, mentalDisplayOrder)}
          modifier="mind"
          onSelectItem={(item, type) => setSelectedCollectionItem({ item, type })}
        />

        <CollectionGrid
          id="ropa-mallas"
          eyebrow="Ropa PRFCT10"
          title="Ropa y Mallas"
          text="Piezas cómodas, sets de entrenamiento y mallas personalizadas para verse lindas, entrenar con confianza y llegar listas a cada presentación."
          items={wearItems}
          modifier="wear"
          onSelectItem={(item, type) => setSelectedCollectionItem({ item, type })}
        />
      </div>

      <BoutiqueModal
        item={selectedCollectionItem?.item}
        type={selectedCollectionItem?.type}
        onClose={() => setSelectedCollectionItem(null)}
      />
    </section>
  );
}
