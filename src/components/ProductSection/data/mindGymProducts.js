import { makeVariants } from "./catalogUtils";

const mentalItems = [
  {
    name: "Bolita Puzzle",
    group: "analitico",
    cardKicker: "Analitico",
    image: "/images/mental-bolita-puzzle-portada.png",
    gallery: [
      "/images/mental-bolita-puzzle-portada.png",
      "/images/mental-bolita-puzzle-carrusel-1.png",
      "/images/mental-bolita-puzzle-carrusel-2.png"
    ],
    description: "Una pelota tipo puzzle con botones de colores que se presionan, mueven y combinan. Best for manos inquietas y momentos donde la gimnasta necesita enfocar su atención.",
    howToUse: "Presiona las bolitas de colores y muévelas de un espacio a otro hasta organizarlas por color. También puede usarse simplemente como fidget de mano.",
    age: "Desde 6 años en adelante.",
    purpose: "Trabaja concentración, paciencia, coordinación mano-ojo y resolución de problemas.",
    gymnastics: "En gimnasia, la mente también entrena. Este puzzle ayuda a practicar enfoque, calma y precisión, habilidades necesarias antes de competir o aprender elementos nuevos.",
    chips: ["Enfoque", "Paciencia", "Coordinación"]
  },
  {
    name: "Rueda Mental",
    group: "analitico",
    cardKicker: "Analitico",
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
    group: "analitico",
    cardKicker: "Analitico",
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
    group: "sensorial",
    cardKicker: "Sensorial",
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
    group: "sensorial",
    cardKicker: "Sensorial",
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
    group: "sensorial",
    cardKicker: "Sensorial",
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
    group: "analitico",
    cardKicker: "Analitico",
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

const mentalProductUpdates = {
  "Bolita Puzzle": {
    id: "mental-bolita-puzzle",
    name: "Rainbow Puzzle Ball",
    subcategory: "puzzles",
    group: "Puzzles",
    cardKicker: "Puzzles",
    price: 9.99,
    salePrice: 7.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 200,
    availableQuantity: null,
    description: "12-hole rainbow puzzle ball with movable colored pieces for focus, patience, and hand coordination."
  },
  "Rueda Mental": {
    id: "mental-rueda-mental",
    name: "Magic Finger Cube",
    subcategory: "puzzles",
    group: "Puzzles",
    cardKicker: "Puzzles",
    price: 12.99,
    salePrice: 9.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 180,
    availableQuantity: null,
    description: "A rotating tactile puzzle designed around finger movement, coordination, and concentration."
  },
  "Giro Puzzle": {
    id: "mental-giro-puzzle",
    name: "Magic Bean Puzzle",
    subcategory: "puzzles",
    group: "Puzzles",
    cardKicker: "Puzzles",
    price: 12.99,
    salePrice: 9.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 180,
    availableQuantity: null,
    availableColors: "White, Blue, Pink",
    description: "A colorful rotating bean puzzle for problem-solving, calm focus, and fine motor practice."
  },
  "Squishy Dumpling": {
    id: "mental-squishy-dumpling",
    subcategory: "sensory",
    group: "Sensory",
    cardKicker: "Sensory",
    price: 9.99,
    salePrice: 7.99,
    inventoryStatus: "confirmed",
    availableQuantity: 36,
    variants: makeVariants("Color", ["Pink", "Purple", "Yellow", "Blue"], { Pink: 12, Purple: 12, Yellow: 6, Blue: 6 }),
    description: "A soft squishy for squeezing, releasing tension, and supporting calm breaks."
  },
  "Pulseras Unicornio": {
    id: "mental-pulseras-unicornio",
    name: "Unicorn Stretchy Set",
    subcategory: "sensory",
    group: "Sensory",
    cardKicker: "Sensory",
    price: 9.99,
    salePrice: 7.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 1200,
    availableQuantity: null,
    availableColors: "Included colors: Yellow, Aqua, Lilac, Hot Pink, Pink, Baby Blue",
    description: "A coordinated six-color stretchy sensory set for busy hands, waiting turns, and reset moments."
  },
  "Pelota Squishy": {
    id: "mental-pelota-squishy",
    name: "DNA Squishy Ball",
    subcategory: "sensory",
    group: "Sensory",
    cardKicker: "Sensory",
    price: 4.99,
    salePrice: 3.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 576,
    availableQuantity: null,
    description: "A multicolor squishy stress ball with colorful beads inside for tactile release and hand awareness."
  },
  "Puzzle Mágico": {
    id: "mental-puzzle-magico",
    name: "Circle Puzzle Toy",
    subcategory: "puzzles",
    group: "Puzzles",
    cardKicker: "Puzzles",
    price: 9.99,
    salePrice: 7.99,
    inventoryStatus: "historical_unverified",
    historicalQuantity: 1200,
    availableQuantity: null,
    description: "A colorful tactile fidget puzzle for calm problem-solving and focused breaks."
  }
};

const publicMentalItems = mentalItems.map((item) => {
  const update = mentalProductUpdates[item.name] || {};
  return {
    ...item,
    ...update,
    previousName: update.name ? item.name : item.previousName,
    modalCategory: "Mind Gym",
    chips: [...new Set([...(item.chips || []), update.group || item.group, "Mind Gym"])],
    stockVerificationRequired: update.inventoryStatus === "historical_unverified"
  };
});

export { publicMentalItems };
