// src/features/bowracle/data/bowracleContent.ts
import {DAILY_CHAOS_CARDS} from "./bowracleDailyChaosDeck.js";

/**
 * ============================================================
 * PRFCT10 PLAY — THE BOW-RACLE
 * MASTER CONTENT SOURCE OF TRUTH
 * ============================================================
 *
 * THE BOW-RACLE is:
 *
 * - a mystical gymnastics tarot table
 * - a daily gymnastics culture reading
 * - a seven-house belonging system
 * - a bridge between digital PRFCT10 PLAY and physical bows
 *
 * IMPORTANT:
 *
 * THE BOW-RACLE IS NOT BOW LAB.
 *
 * Users do NOT build a bow before the reveal.
 * They select symbolic cards.
 * The Bow-racle interprets the reading.
 * The engine assigns the House, power color, prophecy and bow.
 */

export const BOWRACLE_META = {
  productName: "THE BOW-RACLE",
  brand: "PRFCT10",
  ecosystem: "PRFCT10 PLAY",

  tagline: {
    en: "THE CARDS KNOW GYMNASTICS.",
    es: "LAS CARTAS SABEN DE GIMNASIA.",
  },

  spoken: {
    en: "THE BOW-RACLE HAS SPOKEN.",
    es: "EL BOW-RACLE YA HABLÓ.",
  },

  bowKnowledge: {
    en: "THIS BOW KNOWS SOMETHING YOU DON'T.",
    es: "ESTE LAZO SABE ALGO QUE TÚ NO.",
  },

  houseTruth: {
    en: "EVERY BOW BELONGS TO A HOUSE. YOURS ALREADY KNOWS WHICH ONE.",
    es: "CADA LAZO PERTENECE A UNA CASA. EL TUYO YA SABE CUÁL.",
  },

  numberOfMajorArcana: 22,
  numberOfMinorArcana: 30,
  totalCards: 52,

  cardsPerReading: {
    majors: 2,
    minors: 3,
    total: 5,
  },

  mysticalNumber: 7,
}         ;


/**
 * ============================================================
 * TYPES
 * ============================================================
 */

                                 

                             
             
             
  

                         
           
               
                
             
          
              
          
           
              
                
           
                
           
                      
          
          
         
              
               
              
               
              
                
           
               
                
                  
             

                                                                

                       
         
         
           
          
          
         
           
           
          
         
            
              
           
            

                        
             
               
           
          

                             
          
          
          
           
           
          
           

                                   
             
                       
                        
                          
                       
  

                           
             
                 
               
                              
                      
                           
                 
                               
                                   
  

                           
             
                      
                  
                 
               
                      
                         
                           
                                   
  

                             
                      
               
                             
                      
                 
                   
                           
                       
  

                                   
             
                       
                           
  

                                        
               
                         
                      
                   
               
                     
                        
                   
                        
                 
    
                         
                                                                            
  


/**
 * ============================================================
 * ENERGY TAGS
 * ============================================================
 */

export const BOWRACLE_TAGS                = [
  "FOCUS",
  "PRECISION",
  "CONFIDENCE",
  "COURAGE",
  "FIRE",
  "MOMENTUM",
  "CALM",
  "RESET",
  "COMEBACK",
  "RESILIENCE",
  "GRACE",
  "SOFT_POWER",
  "CHAOS",
  "CONTROLLED_CHAOS",
  "FLOW",
  "TEAM",
  "JOY",
  "MISCHIEF",
  "SPOTLIGHT",
  "CHARISMA",
  "CURIOSITY",
  "PATIENCE",
  "DISCIPLINE",
  "TRUST",
  "INTUITION",
  "CREATIVITY",
  "ADAPTABILITY",
  "WARMTH",
];


/**
 * ============================================================
 * 22 MAJOR ARCANA
 * ============================================================
 */

export const MAJOR_ARCANA                = [
  {
    id: "the-stick",
    number: 1,
    name: "THE STICK",
    shortMeaning: {
      en: "Control, precision and finishing what you started.",
      es: "Control, precisión y terminar lo que empezaste.",
    },
    tags: ["FOCUS", "PRECISION", "CONFIDENCE"],
    microcopy: {
      en: "A landing is a decision.",
      es: "Un aterrizaje es una decisión.",
    },
    symbol: "landing-line",
    visualConcept: {
      en: "Gymnast legs completing a perfectly controlled landing.",
      es: "Piernas de gimnasta completando un aterrizaje perfectamente controlado.",
    },
    houseAffinity: ["AXIS", "VANTA"],
  },

  {
    id: "the-chalk",
    number: 2,
    name: "THE CHALK",
    shortMeaning: {
      en: "Preparation, ritual and useful chaos.",
      es: "Preparación, ritual y caos útil.",
    },
    tags: ["RESET", "TEAM", "CHAOS"],
    microcopy: {
      en: "A little mess before business.",
      es: "Un poco de desastre antes de ponerse serias.",
    },
    symbol: "chalk-cloud",
    visualConcept: {
      en: "Two hands clapping chalk into mystical smoke.",
      es: "Dos manos chocando magnesio que se convierte en humo místico.",
    },
    houseAffinity: ["HALO", "FLUX"],
  },

  {
    id: "the-rip",
    number: 3,
    name: "THE RIP",
    shortMeaning: {
      en: "An inconvenience is not the ending.",
      es: "Una incomodidad no es el final.",
    },
    tags: ["COMEBACK", "RESILIENCE", "COURAGE"],
    microcopy: {
      en: "Very inconvenient. Still not the ending.",
      es: "Muy inconveniente. Igual no es el final.",
    },
    symbol: "taped-palm",
    visualConcept: {
      en: "A taped gymnast palm treated like a sacred repaired relic.",
      es: "Una palma de gimnasta con tape tratada como una reliquia reparada.",
    },
    houseAffinity: ["FLUX", "VANTA"],
  },

  {
    id: "the-salute",
    number: 4,
    name: "THE SALUTE",
    shortMeaning: {
      en: "Presence, confidence and the courage to be seen.",
      es: "Presencia, seguridad y el valor de ser vista.",
    },
    tags: ["SPOTLIGHT", "CONFIDENCE", "GRACE"],
    microcopy: {
      en: "Act like you meant it.",
      es: "Haz como si lo hubieras planeado.",
    },
    symbol: "salute",
    visualConcept: {
      en: "A gymnast silhouette saluting beneath a radiant burst.",
      es: "Silueta de gimnasta saludando bajo un resplandor.",
    },
    houseAffinity: ["PRISM", "LUMA"],
  },

  {
    id: "the-block",
    number: 5,
    name: "THE BLOCK",
    shortMeaning: {
      en: "Power, commitment and upward momentum.",
      es: "Poder, compromiso e impulso.",
    },
    tags: ["FIRE", "MOMENTUM", "PRECISION"],
    microcopy: {
      en: "Halfway is not a direction.",
      es: "A medias no es una dirección.",
    },
    symbol: "vault-block",
    visualConcept: {
      en: "Hands contacting a vault table with energy shooting upward.",
      es: "Manos bloqueando sobre la mesa de salto con energía subiendo.",
    },
    houseAffinity: ["NOVA", "AXIS"],
  },

  {
    id: "the-flight",
    number: 6,
    name: "THE FLIGHT",
    shortMeaning: {
      en: "Trust, flow and letting go at the right moment.",
      es: "Confianza, fluidez y saber soltar en el momento correcto.",
    },
    tags: ["FLOW", "TRUST", "COURAGE"],
    microcopy: {
      en: "At some point you actually have to leave the ground.",
      es: "En algún momento sí tienes que despegar del suelo.",
    },
    symbol: "flight-arc",
    visualConcept: {
      en: "Gymnast silhouette traveling through a celestial trajectory.",
      es: "Silueta de gimnasta viajando por una trayectoria celestial.",
    },
    houseAffinity: ["LUMA", "NOVA"],
  },

  {
    id: "the-wobble",
    number: 7,
    name: "THE WOBBLE",
    shortMeaning: {
      en: "Recovery, controlled chaos and staying in the game.",
      es: "Recuperación, caos controlado y seguir en juego.",
    },
    tags: ["CHAOS", "COMEBACK", "MISCHIEF"],
    microcopy: {
      en: "Still on the beam. Technically iconic.",
      es: "Sigues en la viga. Técnicamente icónica.",
    },
    symbol: "beam-pulse",
    visualConcept: {
      en: "A beam crossed by a wild seismograph line that returns to center.",
      es: "Una viga atravesada por una línea loca que finalmente vuelve al centro.",
    },
    houseAffinity: ["FLUX", "HALO"],
  },

  {
    id: "the-grip",
    number: 8,
    name: "THE GRIP",
    shortMeaning: {
      en: "Support, tools and knowing when to hold or release.",
      es: "Apoyo, herramientas y saber cuándo sostener o soltar.",
    },
    tags: ["FOCUS", "PRECISION", "TRUST"],
    microcopy: {
      en: "Emotional support equipment.",
      es: "Equipo de apoyo emocional.",
    },
    symbol: "gymnastics-grips",
    visualConcept: {
      en: "Gymnastics grips displayed like mystical sacred objects.",
      es: "Grips de gimnasia presentados como objetos sagrados.",
    },
    houseAffinity: ["AXIS", "VANTA"],
  },

  {
    id: "full-out",
    number: 9,
    name: "FULL OUT",
    shortMeaning: {
      en: "Commitment without further negotiation.",
      es: "Compromiso sin seguir negociando.",
    },
    tags: ["FIRE", "COURAGE", "SPOTLIGHT"],
    microcopy: {
      en: "Commitment, but airborne.",
      es: "Compromiso, pero en el aire.",
    },
    symbol: "twisting-spiral",
    visualConcept: {
      en: "A twisting trajectory drawn like a mystical engineering diagram.",
      es: "Trayectoria de giro como un diagrama de ingeniería mística.",
    },
    houseAffinity: ["NOVA", "PRISM"],
  },

  {
    id: "the-reset",
    number: 10,
    name: "THE RESET",
    shortMeaning: {
      en: "A new turn deserves new information.",
      es: "Un nuevo turno merece información nueva.",
    },
    tags: ["RESET", "CALM", "FOCUS"],
    microcopy: {
      en: "The previous one is already over.",
      es: "El anterior ya terminó.",
    },
    symbol: "circular-arrow-star",
    visualConcept: {
      en: "Circular reset arrow orbiting a four-point star.",
      es: "Flecha circular rodeando una estrella de cuatro puntas.",
    },
    houseAffinity: ["LUMA", "AXIS"],
  },

  {
    id: "the-spotlight",
    number: 11,
    name: "THE SPOTLIGHT",
    shortMeaning: {
      en: "Visibility, charisma and taking up your moment.",
      es: "Visibilidad, carisma y ocupar tu momento.",
    },
    tags: ["SPOTLIGHT", "CHARISMA", "CONFIDENCE"],
    microcopy: {
      en: "Visible on purpose.",
      es: "Visible a propósito.",
    },
    symbol: "spotlight",
    visualConcept: {
      en: "A dramatic light cone illuminating a gymnast.",
      es: "Un cono de luz dramático iluminando una gimnasta.",
    },
    houseAffinity: ["PRISM", "NOVA"],
  },

  {
    id: "the-comeback",
    number: 12,
    name: "THE COMEBACK",
    shortMeaning: {
      en: "Returning without pretending nothing happened.",
      es: "Volver sin fingir que nada pasó.",
    },
    tags: ["COMEBACK", "RESILIENCE", "COURAGE"],
    microcopy: {
      en: "Different version. Same girl.",
      es: "Versión diferente. La misma niña.",
    },
    symbol: "returning-star",
    visualConcept: {
      en: "A falling star curving upward and returning brighter.",
      es: "Una estrella que cae, gira y regresa más brillante.",
    },
    houseAffinity: ["FLUX", "VANTA"],
  },

  {
    id: "the-fall",
    number: 13,
    name: "THE FALL",
    shortMeaning: {
      en: "The mistake happened. It does not get your whole identity.",
      es: "El error ocurrió. No se queda con toda tu identidad.",
    },
    tags: ["RESILIENCE", "COMEBACK", "RESET"],
    microcopy: {
      en: "Falling is an event. Not a biography.",
      es: "Caerse es un evento. No una biografía.",
    },
    symbol: "falling-star",
    visualConcept: {
      en: "A falling star or interrupted trajectory turning into a reset symbol.",
      es: "Una estrella cayendo o trayectoria interrumpida convirtiéndose en reset.",
    },
    houseAffinity: ["FLUX", "VANTA"],
  },

  {
    id: "the-spot",
    number: 14,
    name: "THE SPOT",
    shortMeaning: {
      en: "Support does not cancel strength.",
      es: "Aceptar apoyo no cancela tu fortaleza.",
    },
    tags: ["TRUST", "TEAM", "COURAGE"],
    microcopy: {
      en: "Strong girls still use support.",
      es: "Las fuertes también aceptan ayuda.",
    },
    symbol: "supporting-hands",
    visualConcept: {
      en: "Supporting hands beneath an abstract gymnast trajectory.",
      es: "Manos de apoyo debajo de una trayectoria gimnástica.",
    },
    houseAffinity: ["HALO", "LUMA"],
  },

  {
    id: "the-correction",
    number: 15,
    name: "THE CORRECTION",
    shortMeaning: {
      en: "The useful information you may already have heard six times.",
      es: "La información útil que posiblemente ya escuchaste seis veces.",
    },
    tags: ["FOCUS", "DISCIPLINE", "PRECISION"],
    microcopy: {
      en: "Yes. That correction. Again.",
      es: "Sí. Esa corrección. Otra vez.",
    },
    symbol: "pencil-arrow",
    visualConcept: {
      en: "Technical arrows correcting a gymnast shape like a sacred diagram.",
      es: "Flechas técnicas corrigiendo una posición como diagrama sagrado.",
    },
    houseAffinity: ["AXIS", "VANTA"],
  },

  {
    id: "the-fear",
    number: 16,
    name: "THE FEAR",
    shortMeaning: {
      en: "Fear may be present without being in charge.",
      es: "El miedo puede estar presente sin estar a cargo.",
    },
    tags: ["COURAGE", "TRUST", "PATIENCE"],
    microcopy: {
      en: "Fear may come. It does not get a vote.",
      es: "El miedo puede venir. No tiene voto.",
    },
    symbol: "eye-flame",
    visualConcept: {
      en: "A nervous eye surrounded by controlled rays rather than horror imagery.",
      es: "Un ojo nervioso rodeado de rayos controlados, sin estética de horror.",
    },
    houseAffinity: ["NOVA", "LUMA"],
  },

  {
    id: "the-routine",
    number: 17,
    name: "THE ROUTINE",
    shortMeaning: {
      en: "The whole thing matters more than one imperfect piece.",
      es: "El conjunto importa más que una sola parte imperfecta.",
    },
    tags: ["FLOW", "DISCIPLINE", "PRECISION"],
    microcopy: {
      en: "One skill is not the whole story.",
      es: "Un elemento no es toda la historia.",
    },
    symbol: "connected-path",
    visualConcept: {
      en: "Several gymnastics symbols connected into one continuous path.",
      es: "Varios símbolos gimnásticos conectados en una sola trayectoria.",
    },
    houseAffinity: ["AXIS", "LUMA"],
  },

  {
    id: "the-score",
    number: 18,
    name: "THE SCORE",
    shortMeaning: {
      en: "A number can measure a routine without measuring a person.",
      es: "Un número puede medir una rutina sin medir a una persona.",
    },
    tags: ["PATIENCE", "CONFIDENCE", "PRECISION"],
    microcopy: {
      en: "A number can describe a routine. Not a person.",
      es: "Un número describe una rutina. No una persona.",
    },
    symbol: "scoreboard",
    visualConcept: {
      en: "A mystical vintage gymnastics scoreboard.",
      es: "Un scoreboard vintage de gimnasia con estética mística.",
    },
    houseAffinity: ["AXIS", "VANTA"],
  },

  {
    id: "the-rotation",
    number: 19,
    name: "THE ROTATION",
    shortMeaning: {
      en: "Change, waiting and adapting to what comes next.",
      es: "Cambio, espera y adaptación a lo que sigue.",
    },
    tags: ["ADAPTABILITY", "PATIENCE", "FOCUS"],
    microcopy: {
      en: "Your event is coming. Please stop checking.",
      es: "Tu aparato viene. Por favor deja de revisar.",
    },
    symbol: "four-event-wheel",
    visualConcept: {
      en: "A four-part wheel representing Vault, Bars, Beam and Floor.",
      es: "Rueda de cuatro partes representando Salto, Barras, Viga y Suelo.",
    },
    houseAffinity: ["FLUX", "AXIS"],
  },

  {
    id: "the-wait",
    number: 20,
    name: "THE WAIT",
    shortMeaning: {
      en: "Not yet does not mean never.",
      es: "Todavía no no significa nunca.",
    },
    tags: ["PATIENCE", "TRUST", "DISCIPLINE"],
    microcopy: {
      en: "Not yet is not the same as never.",
      es: "Todavía no no es lo mismo que nunca.",
    },
    symbol: "hourglass-star",
    visualConcept: {
      en: "An hourglass filled with stars, chalk and tiny skill symbols.",
      es: "Reloj de arena lleno de estrellas, magnesio y símbolos de skills.",
    },
    houseAffinity: ["LUMA", "VANTA"],
  },

  {
    id: "the-podium",
    number: 21,
    name: "THE PODIUM",
    shortMeaning: {
      en: "Recognition, achievement and permission to enjoy it.",
      es: "Reconocimiento, logro y permiso para disfrutarlo.",
    },
    tags: ["SPOTLIGHT", "JOY", "CONFIDENCE"],
    microcopy: {
      en: "Enjoy the moment. Then take the medal off eventually.",
      es: "Disfruta el momento. Después eventualmente quítate la medalla.",
    },
    symbol: "podium-star",
    visualConcept: {
      en: "A podium turned into a radiant mystical monument.",
      es: "Un podio convertido en monumento místico radiante.",
    },
    houseAffinity: ["PRISM", "HALO"],
  },

  {
    id: "the-ten",
    number: 22,
    name: "THE TEN",
    shortMeaning: {
      en: "Excellence without becoming owned by perfection.",
      es: "Excelencia sin convertirse en esclava de la perfección.",
    },
    tags: ["PRECISION", "CONFIDENCE", "DISCIPLINE", "SPOTLIGHT"],
    microcopy: {
      en: "Chase it. Don't let it chase you.",
      es: "Persíguelo. No dejes que él te persiga.",
    },
    symbol: "perfect-ten",
    visualConcept: {
      en: "A radiant 10.000 treated as the sacred final symbol of the deck.",
      es: "Un 10.000 radiante tratado como símbolo sagrado final del mazo.",
    },
    houseAffinity: ["AXIS", "PRISM"],
  },
];


/**
 * ============================================================
 * 30-CARD DAILY CHAOS DECK
 * ============================================================
 * Owner-authored everyday gymnastics oracle content.
 */
export const MINOR_ARCANA = DAILY_CHAOS_CARDS;

/**
 * ============================================================
 * THE SEVEN HOUSES OF THE BOW-RACLE
 * ============================================================
 */

export const BOWRACLE_HOUSES                  = [
  {
    id: "AXIS",
    name: "HOUSE AXIS",

    energyWords: {
      en: "FOCUS · PRECISION · CONTROL",
      es: "ENFOQUE · PRECISIÓN · CONTROL",
    },

    tags: [
      "FOCUS",
      "PRECISION",
      "DISCIPLINE",
      "CONTROLLED_CHAOS",
    ],

    emblem: "axis-star-crosshair",
    accent: ["electric-blue", "silver"],

    statement: {
      en: "You notice the detail everybody else missed.",
      es: "Notas el detalle que todo el mundo dejó pasar.",
    },

    rhyme: {
      en: "Find your line. Trust your sight. Quiet focus gets it right.",
      es: "Busca tu línea, respira también. Menos ruido, y hazlo bien.",
    },
  },

  {
    id: "NOVA",
    name: "HOUSE NOVA",

    energyWords: {
      en: "COURAGE · FIRE · MOMENTUM",
      es: "VALOR · FUEGO · IMPULSO",
    },

    tags: ["COURAGE", "FIRE", "MOMENTUM", "CONFIDENCE"],

    emblem: "exploding-star",
    accent: ["energy-orange", "hot-pink"],

    statement: {
      en: "You do not wait until fear disappears.",
      es: "No esperas a que desaparezca el miedo.",
    },

    rhyme: {
      en: "Fear can stay. You still can go. Build the fire. Trust the flow.",
      es: "Que venga el miedo, igual vas tú. Enciende el fuego y dale full.",
    },
  },

  {
    id: "LUMA",
    name: "HOUSE LUMA",

    energyWords: {
      en: "GRACE · SOFT POWER · INTUITION",
      es: "GRACIA · PODER SUAVE · INTUICIÓN",
    },

    tags: ["GRACE", "SOFT_POWER", "INTUITION", "CALM"],

    emblem: "crescent-soft-star",
    accent: ["lilac", "pearl"],

    statement: {
      en: "Soft does not mean fragile.",
      es: "Suave no significa frágil.",
    },

    rhyme: {
      en: "Move with grace. Trust what you knew. Quiet power still comes through.",
      es: "Muévete suave, confía también. El poder tranquilo se nota muy bien.",
    },
  },

  {
    id: "PRISM",
    name: "HOUSE PRISM",

    energyWords: {
      en: "INDIVIDUALITY · CHARISMA · CREATIVITY",
      es: "INDIVIDUALIDAD · CARISMA · CREATIVIDAD",
    },

    tags: [
      "CHARISMA",
      "CREATIVITY",
      "SPOTLIGHT",
      "CURIOSITY",
    ],

    emblem: "prism-split-ray",
    accent: ["acid-lime", "spectral"],

    statement: {
      en: "You were never planning to disappear into the background.",
      es: "Nunca tuviste planes de desaparecer en el fondo.",
    },

    rhyme: {
      en: "Split the light. Make it bright. Being seen can feel just right.",
      es: "Parte la luz, deja que esté. Si van a mirar, que miren bien.",
    },
  },

  {
    id: "VANTA",
    name: "HOUSE VANTA",

    energyWords: {
      en: "QUIET POWER · RESILIENCE · MYSTERY",
      es: "PODER SILENCIOSO · RESILIENCIA · MISTERIO",
    },

    tags: ["RESILIENCE", "CALM", "FOCUS", "COMEBACK"],

    emblem: "black-sun-hidden-eye",
    accent: ["deep-violet", "silver"],

    statement: {
      en: "You do not need to announce the plan.",
      es: "No necesitas anunciar el plan.",
    },

    rhyme: {
      en: "Say it less. Finish clean. Quiet power can still be seen.",
      es: "Habla menos, termina bien. El poder callado también se ve.",
    },
  },

  {
    id: "FLUX",
    name: "HOUSE FLUX",

    energyWords: {
      en: "COMEBACK · ADAPTABILITY · CONTROLLED CHAOS",
      es: "REGRESO · ADAPTACIÓN · CAOS CONTROLADO",
    },

    tags: [
      "COMEBACK",
      "ADAPTABILITY",
      "CHAOS",
      "CONTROLLED_CHAOS",
    ],

    emblem: "wave-circular-arrow",
    accent: ["turquoise", "neon-green"],

    statement: {
      en: "You recover faster than the plot can explain.",
      es: "Te recuperas más rápido de lo que la trama puede explicar.",
    },

    rhyme: {
      en: "Miss the line. Find it fast. Wobbles happen. They don't last.",
      es: "Pierde la línea, vuelve otra vez. El wobble pasa. Tú sigues de pie.",
    },
  },

  {
    id: "HALO",
    name: "HOUSE HALO",

    energyWords: {
      en: "JOY · TEAM · WARMTH",
      es: "ALEGRÍA · EQUIPO · CALIDEZ",
    },

    tags: ["JOY", "TEAM", "WARMTH", "SOFT_POWER"],

    emblem: "halo-heart-star",
    accent: ["pink", "gold"],

    statement: {
      en: "You make the room better without making it about you.",
      es: "Haces mejor el ambiente sin convertirlo en algo sobre ti.",
    },

    rhyme: {
      en: "Bring the cheer. Share the glow. Teams get stronger when it shows.",
      es: "Trae la risa, comparte el glow. Un equipo unido siempre da más show.",
    },
  },
];


/**
 * ============================================================
 * DAILY ARCHETYPES
 * ============================================================
 *
 * These are temporary:
 *
 * TODAY YOU ARE...
 *
 * They are NOT permanent personality labels.
 */

export const DAILY_ARCHETYPES = [
  "THE ELECTRIC COMEBACK",
  "THE UNBOTHERED STICK",
  "THE SOFT MENACE",
  "THE BEAM MAIN CHARACTER",
  "THE CHALK GREMLIN",
  "THE QUIET THREAT",
  "THE SPARKLY MENACE",
  "THE RESET QUEEN",
  "THE FULL OUT MYSTERY",
  "THE DRAMATIC SALUTE",
  "THE CONTROLLED CHAOS",
  "THE BEAM SURVIVOR",
  "THE GRIP WHISPERER",
  "THE NEON NERVE",
  "THE GOLDEN RESET",
  "THE PRISM PROBLEM",
  "THE CALM BEFORE BARS",
  "THE TINY THUNDER",
  "THE POLISHED MENACE",
  "THE LUCKY WOBBLE",
  "THE POCKET ROCKET",
  "THE SHIMMER SHIELD",
  "THE PINK PLOT TWIST",
  "THE MIDNIGHT STICK",
  "THE SOFT LAUNCH",
  "THE NO-DRAMA FLIGHT",
  "THE MAIN-EVENT GREMLIN",
  "THE GLITTER RECOVERY",
  "THE COSMIC CHALK",
  "THE UNREASONABLY READY ONE",
]         ;


/**
 * ============================================================
 * RHYME SYSTEM
 * ============================================================
 */

export const RHYME_RULES = {
  philosophy: [
    "Mystical, but not childish.",
    "Funny before poetic.",
    "Gymnastics-specific.",
    "Screenshot-worthy.",
    "Never sacrifice the joke for a perfect rhyme.",
    "English and Spanish must be written independently.",
    "Do not literally translate rhymes.",
  ],

  preferredStyles: {
    prophecy: "COUPLET",
    manifestation: "COUPLET",
    coachForecast: "COUPLET",
    quest: "ONE_LINER",
    houseMessage: "COUPLET",
    gymLaw: "DRY",
  }                                     ,
};


/**
 * ============================================================
 * PROPHECY BANK
 * ============================================================
 */

export const PROPHECIES                        = [
  {
    id: "skill-impossible-01",

    tags: ["PATIENCE", "DISCIPLINE", "COMEBACK"],

    prose: {
      en:
        "That skill you keep calling impossible has heard enough. Give the process seven useful practices before making another public statement.",
      es:
        "Ese elemento que sigues llamando imposible ya escuchó suficiente. Dale al proceso siete prácticas útiles antes de hacer otra declaración pública.",
    },

    rhyme: {
      en:
        "Seven practices. Trust the track. What feels impossible can still come back.",
      es:
        "Siete prácticas, vuelve a intentar. Lo que hoy no sale mañana puede cambiar.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "brain-meeting-01",

    tags: ["FOCUS", "MOMENTUM"],

    prose: {
      en:
        "You may already have enough information. Your brain is simply requesting another unnecessary meeting.",
      es:
        "Puede que ya tengas suficiente información. Tu cerebro simplemente solicitó otra reunión innecesaria.",
    },

    rhyme: {
      en:
        "Less debate. More body shape. Make the turn before it's late.",
      es:
        "Menos reunión, más ejecución. Haz el intento sin otra discusión.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "almost-01",

    tags: ["COMEBACK", "PATIENCE"],

    prose: {
      en:
        "Almost is not proof that you cannot do it. Almost is extremely annoying evidence that you're getting closer.",
      es:
        "Casi no demuestra que no puedes. Casi es evidencia extremadamente irritante de que estás más cerca.",
    },

    rhyme: {
      en:
        "Close is close, though nerves may shout. Keep the work and work it out.",
      es:
        "Si casi salió, vuelve a probar. La paciencia también sabe entrenar.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "correction-returning",

    tags: ["DISCIPLINE", "FOCUS"],

    prose: {
      en:
        "There is a correction in your future. It sounds suspiciously like the one you received yesterday.",
      es:
        "Hay una corrección en tu futuro. Suena sospechosamente parecida a la de ayer.",
    },

    rhyme: {
      en:
        "Old correction, brand-new day. Maybe try it this time. Okay?",
      es:
        "Corrección de ayer, mensaje de hoy. Hazla esta vez y vemos cómo voy.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "bad-turn-biography",

    tags: ["RESET", "CALM", "COMEBACK"],

    prose: {
      en:
        "Stop treating one weird turn like the official biography of your gymnastics.",
      es:
        "Deja de tratar un turno raro como la biografía oficial de tu gimnasia.",
    },

    rhyme: {
      en:
        "One strange turn does not define. Reset your brain and find your line.",
      es:
        "Un turno raro no dice quién eres. Resetea la mente y haz lo que puedes.",
    },

    rhymeStyle: "COUPLET",
  },
];


/**
 * ============================================================
 * MANIFESTATION WINDOWS
 * ============================================================
 */

export const MANIFESTATION_WINDOWS                        = [
  {
    id: "7-days",
    label: {
      en: "7 DAYS",
      es: "7 DÍAS",
    },
    microcopy: {
      en: "The cards are mysterious. Your calendar remains legally separate.",
      es: "Las cartas son misteriosas. Tu calendario sigue siendo otro asunto.",
    },
  },

  {
    id: "7-practices",
    label: {
      en: "7 PRACTICES",
      es: "7 PRÁCTICAS",
    },
    microcopy: {
      en: "Useful practices. Talking through conditioning does not count.",
      es: "Prácticas útiles. Hablar durante el conditioning no cuenta.",
    },
  },

  {
    id: "7-weeks",
    label: {
      en: "7 WEEKS",
      es: "7 SEMANAS",
    },
    microcopy: {
      en: "Probably. The Bow-racle is mystical, not your meet calendar.",
      es: "Probablemente. El Bow-Racle es místico, no tu calendario competitivo.",
    },
  },

  {
    id: "7-months",
    label: {
      en: "7 MONTHS",
      es: "7 MESES",
    },
    microcopy: {
      en: "Some plots take longer. Continue training.",
      es: "Algunas tramas tardan más. Sigue entrenando.",
    },
  },

  {
    id: "7-seasons",
    label: {
      en: "7 SEASONS",
      es: "7 TEMPORADAS",
    },
    microcopy: {
      en: "Extremely dramatic. The cards enjoyed this one.",
      es: "Extremadamente dramático. A las cartas les encantó este.",
    },
  },

  {
    id: "7-corrections",
    label: {
      en: "7 CORRECTIONS",
      es: "7 CORRECCIONES",
    },
    microcopy: {
      en: "Listening to the correction may accelerate proceedings.",
      es: "Escuchar la corrección puede acelerar el proceso.",
    },
  },

  {
    id: "7-useful-turns",
    label: {
      en: "7 USEFUL TURNS",
      es: "7 TURNOS ÚTILES",
    },
    microcopy: {
      en: "Useful is doing significant work in that sentence.",
      es: "La palabra útiles está trabajando bastante en esa frase.",
    },
  },

  {
    id: "7-agains",
    label: {
      en: '7 "AGAIN"s',
      es: '7 "OTRA VEZ"',
    },
    microcopy: {
      en: "The cards cannot confirm whether Coach will stop at seven.",
      es: "Las cartas no pueden confirmar que el Coach vaya a detenerse en siete.",
    },
  },
];


/**
 * ============================================================
 * COACH FORECASTS
 * ============================================================
 */

export const COACH_FORECASTS                        = [
  {
    id: "coach-moon-c",

    tags: ["MISCHIEF", "PATIENCE"],

    prose: {
      en:
        "The moon is affecting everybody whose profession begins with C. Coach included. Consider speaking selectively.",
      es:
        "La luna está afectando a todos aquellos cuyo oficio comienza por C. Coach incluido. Considera hablar selectivamente.",
    },

    rhyme: {
      en:
        "The moon is high. The coach is near. Talk a little less today, my dear.",
      es:
        "La luna subió, el coach ya llegó. Habla un poco menos: el Bow-Racle avisó.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "coach-again",

    tags: ["DISCIPLINE", "PATIENCE"],

    prose: {
      en:
        'High probability of hearing "Again." Do not attempt to determine how many.',
      es:
        'Alta probabilidad de escuchar "Otra vez". No intentes determinar cuántas.',
    },

    rhyme: {
      en:
        "Coach said again. Don't ask when. History suggests it may happen again.",
      es:
        "Dijo otra vez. No preguntes por qué. La historia indica que volverá a suceder.",
    },

    rhymeStyle: "COUPLET",
  },

  {
    id: "coach-i-know",

    tags: ["FOCUS", "DISCIPLINE"],

    prose: {
      en:
        'Today is not an ideal day to answer "I know," especially when current evidence suggests otherwise.',
      es:
        'Hoy no es un buen día para responder "ya sé", especialmente si la evidencia actual sugiere lo contrario.',
    },

    rhymeStyle: "DRY",
  },

  {
    id: "coach-mercury",

    tags: ["MISCHIEF", "FOCUS"],

    prose: {
      en:
        "Mercury has entered the Didn't-I-Just-Tell-You-That sector. Proceed carefully.",
      es:
        "Mercurio entró en el sector de ¿No-te-acabo-de-decir-eso? Procede con cuidado.",
    },

    rhymeStyle: "DRY",
  },

  {
    id: "coach-better",

    tags: ["PRECISION", "PATIENCE"],

    prose: {
      en:
        'If Coach says "better," congratulations. You have received a message containing approximately 400 possible meanings.',
      es:
        'Si el Coach dice "mejor", felicidades. Recibiste un mensaje que contiene aproximadamente 400 significados posibles.',
    },

    rhymeStyle: "DRY",
  },

  {
    id: "coach-correction-return",

    tags: ["DISCIPLINE", "FOCUS"],

    prose: {
      en:
        "A correction you have already heard is returning. The cards recommend pretending this is brand-new information and actually doing it.",
      es:
        "Una corrección que ya escuchaste está regresando. Las cartas recomiendan fingir que es información nueva y realmente hacerla.",
    },

    rhymeStyle: "DRY",
  },
];


/**
 * ============================================================
 * TODAY'S QUEST
 * ============================================================
 */

export const TODAY_QUESTS                        = [
  {
    id: "quest-pushups",
    tags: ["DISCIPLINE", "PRECISION"],
    prose: {
      en: "Do 5 suspiciously perfect push-ups.",
      es: "Haz 5 flexiones sospechosamente perfectas.",
    },
    rhyme: {
      en: "Five push-ups, clean and tight. Ancient wisdom unlocked tonight.",
      es: "Cinco flexiones, forma ideal. Sabiduría antigua. Todo normal.",
    },
    rhymeStyle: "COUPLET",
  },

  {
    id: "quest-calf-raises",
    tags: ["PRECISION", "MISCHIEF"],
    prose: {
      en: "Do 10 calf raises and pretend they fixed your entire life.",
      es: "Haz 10 relevés y actúa como si hubieran arreglado tu vida entera.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-hollow-rocks",
    tags: ["DISCIPLINE", "MISCHIEF"],
    prose: {
      en: "Do 10 hollow rocks, then look dramatically transformed.",
      es: "Haz 10 hollow rocks y después luce dramáticamente transformada.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-teammate-compliment",
    tags: ["TEAM", "JOY"],
    prose: {
      en: "Compliment one teammate on something specific.",
      es: "Hazle un cumplido específico a una compañera.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-extra-hair-tie",
    tags: ["TEAM", "MISCHIEF"],
    prose: {
      en: "Pack one extra hair tie and become a public service.",
      es: "Guarda una liga extra y conviértete en servicio público.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-no-documentary",
    tags: ["RESET", "FOCUS"],
    prose: {
      en: "Do one correction today without producing an emotional documentary.",
      es: "Haz una corrección hoy sin producir un documental emocional.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-salute",
    tags: ["SPOTLIGHT", "CONFIDENCE"],
    prose: {
      en: "End the day with one dramatically unnecessary salute.",
      es: "Termina el día con un saludo dramáticamente innecesario.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-water",
    tags: ["RESET"],
    prose: {
      en: "Drink water before your brain files another complaint.",
      es: "Toma agua antes de que tu cerebro presente otra queja.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-thank-you",
    tags: ["CONFIDENCE", "SOFT_POWER"],
    prose: {
      en: 'Say "thank you" to one compliment without arguing.',
      es: 'Responde "gracias" a un cumplido sin discutir.',
    },
    rhymeStyle: "DRY",
  },

  {
    id: "quest-main-character-correction",
    tags: ["FOCUS"],
    prose: {
      en: "Pick one correction and make it today's main character.",
      es: "Escoge una corrección y conviértela en la protagonista del día.",
    },
    rhymeStyle: "DRY",
  },
];


/**
 * ============================================================
 * SECRET GYM LAWS
 * ============================================================
 */

export const SECRET_GYM_LAWS                        = [
  {
    id: "law-001",
    prose: {
      en: '"One more" is not a regulated unit of measurement.',
      es: '"Una más" no es una unidad de medida regulada.',
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-002",
    prose: {
      en: "A stick is not just a landing. It is an entire personality trait.",
      es: "Un stick no es solo un aterrizaje. Es todo un rasgo de personalidad.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-003",
    prose: {
      en: "Every gym has one roll of tape that belongs to everybody and nobody.",
      es: "Todo gym tiene un rollo de tape que pertenece a todo el mundo y a nadie.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-004",
    prose: {
      en: "Chalk dust is basically a communication system.",
      es: "El polvo de magnesio es básicamente un sistema de comunicación.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-005",
    prose: {
      en: "Grips eventually become emotional support equipment.",
      es: "Eventualmente los grips se convierten en equipo de apoyo emocional.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-006",
    prose: {
      en: "Beam knows when you're overthinking.",
      es: "La viga sabe cuando estás pensando demasiado.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-007",
    prose: {
      en: '"Again" can mean anywhere from one to fourteen.',
      es: '"Otra vez" puede significar cualquier número entre uno y catorce.',
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-008",
    prose: {
      en: "Meet hair is technically a second sport.",
      es: "El peinado de competencia técnicamente es un segundo deporte.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-009",
    prose: {
      en: "A score appears approximately 40% slower when you care about it.",
      es: "Una nota aparece aproximadamente 40% más lento cuando te importa.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-010",
    prose: {
      en: "Floor corners have seen things.",
      es: "Las esquinas del floor han visto cosas.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-011",
    prose: {
      en: "Somebody's mom always has the thing everyone forgot.",
      es: "La mamá de alguien siempre tiene lo que todo el mundo olvidó.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-012",
    prose: {
      en: "Grips develop personality at the least convenient possible moment.",
      es: "Los grips desarrollan personalidad en el momento menos conveniente posible.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-013",
    prose: {
      en: "The first turn after a break is legally allowed to be weird. Probably.",
      es: "El primer turno después de una pausa tiene permiso legal para ser raro. Probablemente.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-014",
    prose: {
      en: "The loudest teammate screaming during your routine may be providing an essential service.",
      es: "La compañera que más grita durante tu rutina puede estar prestando un servicio esencial.",
    },
    rhymeStyle: "DRY",
  },

  {
    id: "law-015",
    prose: {
      en: "A clean turn repairs an unreasonable amount of mood.",
      es: "Un turno limpio repara una cantidad poco razonable del estado de ánimo.",
    },
    rhymeStyle: "DRY",
  },
];


/**
 * ============================================================
 * LUCKY NUMBERS
 * ============================================================
 */

export const LUCKY_NUMBERS = [
  { value: 1, weight: 1 },
  { value: 2, weight: 1 },
  { value: 3, weight: 1 },
  { value: 4, weight: 1 },
  { value: 5, weight: 1 },
  { value: 6, weight: 1 },
  { value: 7, weight: 2.25 },
  { value: 8, weight: 1 },
  { value: 9, weight: 1 },
  { value: 10, weight: 1.25 },
]         ;


/**
 * ============================================================
 * POWER COLORS
 *
 * These IDs must eventually map to the REAL BowDesigner values.
 * ============================================================
 */

export const POWER_COLORS = [
  {
    id: "cobaltBlue",
    value: "#174ED1",
    tags: ["FOCUS", "CONFIDENCE", "PRECISION"]                        ,
    message: {
      en: "Clear decisions. Less noise.",
      es: "Decisiones claras. Menos ruido.",
    },
  },

  {
    id: "neonPink",
    value: "#FF2DAA",
    tags: ["SPOTLIGHT", "CHARISMA", "MISCHIEF"]                        ,
    message: {
      en: "Visible on purpose.",
      es: "Visible a propósito.",
    },
  },

  {
    id: "fuchsia",
    value: "#E6007E",
    tags: ["SPOTLIGHT", "CONFIDENCE"]                        ,
    message: {
      en: "Take the moment.",
      es: "Toma tu momento.",
    },
  },

  {
    id: "energyOrange",
    value: "#FF7A1A",
    tags: ["FIRE", "MOMENTUM", "COURAGE"]                        ,
    message: {
      en: "Move before the meeting starts.",
      es: "Muévete antes de que empiece la reunión.",
    },
  },

  {
    id: "lime",
    value: "#C8FF1A",
    tags: ["MOMENTUM", "MISCHIEF", "JOY"]                        ,
    message: {
      en: "A little chaos. Useful direction.",
      es: "Un poco de caos. Dirección útil.",
    },
  },

  {
    id: "turquoise",
    value: "#28C3C1",
    tags: ["FLOW", "CALM", "TRUST"]                        ,
    message: {
      en: "Trust the timing.",
      es: "Confía en el timing.",
    },
  },

  {
    id: "lilac",
    value: "#C18BE1",
    tags: ["SOFT_POWER", "RESET", "GRACE"]                        ,
    message: {
      en: "Soft is still strong.",
      es: "Suave también es fuerte.",
    },
  },

  {
    id: "black",
    value: "#111111",
    tags: ["FOCUS", "CONFIDENCE", "RESILIENCE"]                        ,
    message: {
      en: "No announcement necessary.",
      es: "No hace falta anunciarlo.",
    },
  },

  {
    id: "white",
    value: "#FFFFFF",
    tags: ["RESET", "CALM", "FOCUS"]                        ,
    message: {
      en: "New turn. Clean slate.",
      es: "Nuevo turno. Cuenta nueva.",
    },
  },

  {
    id: "gold",
    value: "#D8AA3D",
    tags: ["SPOTLIGHT", "CONFIDENCE", "JOY"]                        ,
    message: {
      en: "Enjoy being good at something.",
      es: "Disfruta ser buena en algo.",
    },
  },

  {
    id: "silver",
    value: "#C7CBD1",
    tags: ["PRECISION", "CALM", "FOCUS"]                        ,
    message: {
      en: "Clean. Sharp. Done.",
      es: "Limpio. Preciso. Listo.",
    },
  },
];


/**
 * ============================================================
 * SECRET BOW CODE ARCHITECTURE
 * ============================================================
 *
 * IMPORTANT:
 *
 * Secret Bow Code !== product configuration code.
 *
 * Example secret code:
 * BWR-7K4N2
 *
 * Example product config:
 * P10-OM-CB-LM-SH-SI-M
 */

export const DEMO_SECRET_BOW_CODES                             = [
  {
    code: "BWR-7K4N2",
    house: "NOVA",
    readingSeed: "nova-7k4n2",
    edition: "CORE-2026",
    status: "ACTIVE",

    bowConfig: {
      topColor: "#174ED1",
      bottomColor: "#C8FF1A",
      finish: "shimmer",
      centerStyle: "silver",
      size: "medium",
    },
  },

  {
    code: "BWR-P3M82",
    house: "PRISM",
    readingSeed: "prism-p3m82",
    edition: "CORE-2026",
    status: "ACTIVE",

    bowConfig: {
      topColor: "#E6007E",
      bottomColor: "#C8FF1A",
      finish: "glitter",
      centerStyle: "neon",
      size: "medium",
    },
  },

  {
    code: "BWR-F7X10",
    house: "FLUX",
    readingSeed: "flux-f7x10",
    edition: "CORE-2026",
    status: "ACTIVE",

    bowConfig: {
      topColor: "#28C3C1",
      bottomColor: "#C18BE1",
      finish: "shimmer",
      centerStyle: "silver",
      size: "medium",
    },
  },
];


/**
 * ============================================================
 * SECRET CODE PACKAGING COPY
 * ============================================================
 */

export const SECRET_CODE_PACKAGING = {
  headline: {
    en: "THIS BOW KNOWS SOMETHING YOU DON'T.",
    es: "ESTE LAZO SABE ALGO QUE TÚ NO.",
  },

  house: {
    en: "EVERY BOW BELONGS TO A HOUSE.",
    es: "CADA LAZO PERTENECE A UNA CASA.",
  },

  reveal: {
    en: "YOURS ALREADY KNOWS WHICH ONE.",
    es: "EL TUYO YA SABE CUÁL.",
  },

  action: {
    en: "ENTER YOUR SECRET CODE AT THE BOW-RACLE.",
    es: "INTRODUCE TU CÓDIGO SECRETO EN THE BOW-RACLE.",
  },

  microcopy: {
    en: "Careful. Bows gossip.",
    es: "Cuidado. Los lazos chismean.",
  },
};


/**
 * ============================================================
 * READING UI COPY
 * ============================================================
 */

export const READING_LABELS = {
  ask: {
    en: "ASK THE BOW-RACLE",
    es: "PREGÚNTALE AL BOW-RACLE",
  },

  secretCodeMode: {
    en: "I HAVE A SECRET BOW CODE",
    es: "TENGO UN CÓDIGO SECRETO",
  },

  yourName: {
    en: "YOUR NAME",
    es: "TU NOMBRE",
  },

  secretCode: {
    en: "SECRET BOW CODE",
    es: "CÓDIGO SECRETO",
  },

  todayYouAre: {
    en: "TODAY YOU ARE",
    es: "HOY ERES",
  },

  yourHouse: {
    en: "YOUR HOUSE",
    es: "TU CASA",
  },

  bowracleSays: {
    en: "THE BOW-RACLE SAYS",
    es: "EL BOW-RACLE DICE",
  },

  prophecy: {
    en: "YOUR PROPHECY",
    es: "TU PROFECÍA",
  },

  manifestation: {
    en: "MANIFESTATION WINDOW",
    es: "VENTANA DE MANIFESTACIÓN",
  },

  coachForecast: {
    en: "COACH FORECAST",
    es: "PRONÓSTICO DEL COACH",
  },

  luckyNumber: {
    en: "LUCKY NUMBER",
    es: "NÚMERO DE LA SUERTE",
  },

  todayQuest: {
    en: "TODAY'S QUEST",
    es: "MISIÓN DE HOY",
  },

  secretGymLaw: {
    en: "SECRET GYM LAW",
    es: "LEY SECRETA DEL GYM",
  },

  powerColor: {
    en: "POWER COLOR",
    es: "COLOR DE PODER",
  },

  yourBow: {
    en: "YOUR BOW",
    es: "TU LAZO",
  },

  download: {
    en: "DOWNLOAD MY CARD",
    es: "DESCARGAR MI CARTA",
  },

  share: {
    en: "SHARE MY CARD",
    es: "COMPARTIR MI CARTA",
  },

  askAgain: {
    en: "ASK AGAIN",
    es: "PREGUNTAR DE NUEVO",
  },

  makeItReal: {
    en: "MAKE IT REAL",
    es: "HAZLO REAL",
  },
};


/**
 * ============================================================
 * READING OUTPUT
 * ============================================================
 */

                                     
                     

                                     

                     
           
           
          
    

                              

                    

                         

                                       

                                

                                           

                                     

                                  

                                    

                      

                     

                
                     
                        
                   
                        
                 
                           
    
  


/**
 * ============================================================
 * ENGINE RULES
 * ============================================================
 */

export const READING_ENGINE_RULES = {
  standardReading: {
    majorCardsRequired: 2,
    minorCardsRequired: 3,
  },

  flow: [
    "shuffle-major-arcana",
    "select-two-major",
    "reveal-major",
    "shuffle-minor-arcana",
    "select-three-minor",
    "reveal-minor",
    "calculate-tags",
    "determine-house",
    "determine-archetype",
    "determine-prophecy",
    "determine-manifestation-window",
    "determine-coach-forecast",
    "determine-lucky-number",
    "determine-quest",
    "determine-gym-law",
    "determine-power-color",
    "assign-bow",
    "generate-product-code",
    "reveal-reading",
  ],

  nameRule:
    "First name personalizes presentation only. It NEVER determines House, cards, prophecy, archetype or personality.",

  determinism:
    "The same five selected cards must produce the same core reading seed and House.",

  secretCodeDeterminism:
    "The same valid Secret Bow Code must always resolve to its predetermined House and reading seed.",

  bowRule:
    "The user does not configure the bow before reveal.",

  aiRule:
    "No external AI API is required for V1. Use curated deterministic content pools.",

  rhymeRule:
    "Rhymes must come from curated content. Do not dynamically generate uncontrolled rhymes in production.",
};


/**
 * ============================================================
 * HOUSE SCORING
 * ============================================================
 */

export const HOUSE_TAG_WEIGHTS         
                  
                                      
  = {
  AXIS: {
    FOCUS: 3,
    PRECISION: 3,
    DISCIPLINE: 2,
    CALM: 1,
  },

  NOVA: {
    COURAGE: 3,
    FIRE: 3,
    MOMENTUM: 3,
    CONFIDENCE: 1,
  },

  LUMA: {
    GRACE: 3,
    SOFT_POWER: 3,
    CALM: 2,
    INTUITION: 3,
    TRUST: 2,
  },

  PRISM: {
    CHARISMA: 3,
    CREATIVITY: 3,
    SPOTLIGHT: 3,
    CURIOSITY: 1,
  },

  VANTA: {
    RESILIENCE: 3,
    CALM: 2,
    FOCUS: 2,
    COMEBACK: 2,
  },

  FLUX: {
    COMEBACK: 3,
    ADAPTABILITY: 3,
    CHAOS: 2,
    CONTROLLED_CHAOS: 3,
    MISCHIEF: 1,
  },

  HALO: {
    JOY: 3,
    TEAM: 3,
    WARMTH: 3,
    SOFT_POWER: 1,
  },
};


/**
 * ============================================================
 * RESULT REVEAL ORDER
 * ============================================================
 */

export const RESULT_REVEAL_ORDER = [
  "THE_BOWRACLE_HAS_SPOKEN",
  "FIRST_NAME",
  "TODAY_YOU_ARE",
  "YOUR_HOUSE",
  "THE_BOWRACLE_SAYS",
  "YOUR_PROPHECY",
  "MANIFESTATION_WINDOW",
  "COACH_FORECAST",
  "LUCKY_NUMBER",
  "TODAYS_QUEST",
  "SECRET_GYM_LAW",
  "POWER_COLOR",
  "YOUR_BOW",
  "DOWNLOAD_SHARE",
  "MAKE_IT_REAL",
]         ;


/**
 * ============================================================
 * HOUSE REVEAL COPY
 * ============================================================
 */

export const HOUSE_REVEAL_COPY = {
  recognizesBow: {
    en: (name         ) =>
      `${name ? `${name.toUpperCase()}, ` : ""}THE BOW-RACLE RECOGNIZES YOUR BOW.`,

    es: (name         ) =>
      `${name ? `${name.toUpperCase()}, ` : ""}EL BOW-RACLE RECONOCE TU LAZO.`,
  },

  belongsTo: {
    en: "THIS BOW BELONGS TO",
    es: "ESTE LAZO PERTENECE A",
  },

  todayBelongsTo: {
    en: "TODAY, THE CARDS PLACE YOU IN",
    es: "HOY, LAS CARTAS TE COLOCAN EN",
  },

  certification: {
    en: "CERTIFIED BY THE BOW-RACLE",
    es: "CERTIFICADO POR THE BOW-RACLE",
  },
};


/**
 * ============================================================
 * VISUAL SYSTEM
 * ============================================================
 */

export const BOWRACLE_VISUAL_SYSTEM = {
  environment: [
    "mystical gymnastics tarot table",
    "deep purple velvet",
    "midnight plum",
    "blackberry haze",
    "electric violet",
    "fuchsia glow",
    "acid lime accents",
    "cobalt highlights",
    "pearl shimmer",
    "silver and gold glints",
  ],

  atmosphere: [
    "floating dust",
    "sparkles",
    "soft smoke",
    "mist",
    "prismatic reflections",
    "light leaks",
    "slow stars",
    "card shadows",
    "soft vignette",
  ],

  cardBackSigil: [
    "original eye inside triangle",
    "PRFCT10 bow",
    "world globe",
    "sun",
    "moon",
    "stars",
    "smiley face",
    "celestial geometry",
    "PRFCT10 imagotype",
    "THE BOW-RACLE lettering",
  ],

  avoid: [
    "literal Freemason emblem",
    "official Masonic insignia",
    "Rider-Waite copying",
    "Tarot de Marseille copying",
    "Halloween",
    "goth horror",
    "witch costume aesthetic",
    "generic crystal-ball tarot",
    "clean SaaS dashboard",
    "ecommerce configurator look",
  ],
};


/**
 * ============================================================
 * SHARE CARD REQUIREMENTS
 * ============================================================
 */

export const SHARE_CARD_FORMATS = {
  story: {
    ratio: "9:16",
    purpose: "Instagram Stories / TikTok-style sharing",
  },

  feed: {
    ratio: "4:5",
    purpose: "Instagram feed / saved result",
  },
};

export const HOUSE_CARD_FIELDS = [
  "PRFCT10",
  "THE_BOW-RACLE",
  "FIRST_NAME_OPTIONAL",
  "HOUSE_NAME",
  "HOUSE_EMBLEM",
  "HOUSE_ENERGY_WORDS",
  "LUCKY_NUMBER",
  "HOUSE_MESSAGE",
  "SECRET_CODE_OPTIONAL",
  "BOW_IMAGE_IF_AVAILABLE",
  "BOWRACLE_SIGIL",
  "CERTIFIED_BY_THE_BOWRACLE",
]         ;


/**
 * ============================================================
 * SAFETY + PRODUCT RULES
 * ============================================================
 */

export const BOWRACLE_SAFETY_RULES = [
  "Do not make factual supernatural claims.",
  "Do not guarantee that a skill will happen by a deadline.",
  "Do not predict competition scores.",
  "Do not predict injuries or medical recovery.",
  "Do not guarantee team selection.",
  "Do not guarantee scholarships or admissions.",
  "Do not tell users to ignore coach safety instructions.",
  "Do not create dangerous physical challenges.",
  "Do not use body-weight or appearance criticism.",
  "Do not humiliate the user.",
  "Coach humor must remain affectionate and recognizable.",
  "Progress copy should reinforce work, discipline, coaching, safe progression and time.",
  "Handstands or inversions may only be referenced as already-trained skills in normal supervised training settings.",
]         ;


/**
 * ============================================================
 * PRIVACY RULES
 * ============================================================
 */

export const BOWRACLE_PRIVACY_RULES = {
  allowedOptionalInput: [
    "firstName",
  ],

  doNotRequire: [
    "birthday",
    "lastName",
    "email",
    "phone",
    "school",
    "gymName",
    "homeAddress",
    "location",
  ],

  rule:
    "First name should preferably be used only for local presentation unless existing PRFCT10 infrastructure explicitly supports safe persistence.",
};


/**
 * ============================================================
 * SOCIAL / COPY TEST
 * ============================================================
 */

export const SHAREABILITY_TEST = {
  question:
    "Would a 13–18 year old gymnast screenshot this and send it to the team group chat?",

  desiredReactions: [
    "THIS IS LITERALLY YOU.",
    "WHY IS THIS ACCURATE?",
    "HAHAHAHA MY COACH.",
    "I GOT HOUSE NOVA.",
    "WHAT HOUSE DID YOU GET?",
    "MY BOW IS HOUSE PRISM.",
  ],

  rejectIf: [
    "sounds like generic Pinterest motivation",
    "sounds like corporate wellness",
    "sounds like an adult trying too hard to sound teenage",
    "could apply to any sport without modification",
    "the rhyme feels childish",
    "the joke requires explaining",
  ],
};


/**
 * ============================================================
 * PRODUCT / STORE SEPARATION
 * ============================================================
 */

export const PRODUCT_RULES = {
  bowracle:
    "Mystical reading and assigned artifact.",

  bowLab:
    "Intentional product customization.",

  beforeReveal: {
    userMaySelectSecondColor: false,
    userMaySelectFinish: false,
    userMaySelectCenter: false,
    userMaySelectSize: false,
  },

  afterRevealActions: [
    "MAKE_IT_REAL",
    "MAKE_IT_MORE_ME",
  ],

  existingFunctionToReuse:
    "createBowCode()",

  important:
    "Secret Bow Code and BowDesigner product code are two different systems.",
};


/**
 * ============================================================
 * ENGINE PSEUDOCODE CONTRACT
 * ============================================================
 */

export const BOWRACLE_ENGINE_CONTRACT = `
STANDARD READING

INPUT:
{
  firstName?: string,
  majorArcanaIds: [string, string],
  minorArcanaIds: [string, string, string]
}

1. Read all tags from selected cards.
2. Count tag frequency.
3. Apply HOUSE_TAG_WEIGHTS.
4. Select highest-scoring House.
5. Resolve tie deterministically using reading seed.
6. Determine Daily Archetype from dominant tags.
7. Select prophecy compatible with dominant tags.
8. Select manifestation window.
9. Select Coach Forecast.
10. Select Lucky Number.
11. Select Today's Quest.
12. Select Secret Gym Law.
13. Select Power Color.
14. Assign real BowDesigner configuration.
15. Call createBowCode().
16. Return BowracleReadingResult.


SECRET BOW CODE

INPUT:
{
  firstName?: string,
  code: string
}

1. Normalize code:
   trim
   uppercase
   remove accidental spaces

2. Call:
   resolveBowracleSecretCode(code)

3. If invalid:
   show mystical invalid-code experience.

4. If valid:
   House comes from code registry.
   readingSeed comes from code registry.

5. Deterministically select:
   house message
   prophecy
   manifestation window
   coach forecast
   lucky number
   quest
   gym law

6. If bowConfig exists:
   call existing createBowCode().

7. Generate HOUSE CARD.

8. Never let firstName affect House or result seed.
`;


/**
 * ============================================================
 * CONTENT EXPANSION TARGETS
 * ============================================================
 *
 * Codex should preserve this architecture even if V1 starts smaller.
 */

export const CONTENT_TARGETS = {
  majorArcana: 22,
  minorArcana: 30,
  houses: 7,

  dailyArchetypesMinimum: 30,

  propheciesMinimum: 100,
  coachForecastsMinimum: 75,
  questsMinimum: 50,
  secretGymLawsMinimum: 100,

  houseMessagesPerHouseMinimum: 15,

  manifestationWindowsMinimum: 8,
};


/**
 * ============================================================
 * FINAL NORTH STAR
 * ============================================================
 */

export const BOWRACLE_NORTH_STAR = `
THE BOW-RACLE IS NOT ABOUT SELLING A BOW FIRST.

THE CARDS CREATE MYTHOLOGY.

THE READINGS CREATE LANGUAGE.

THE HOUSES CREATE BELONGING.

THE JOKES CREATE GYM CULTURE.

THE SECRET CODES CONNECT PHYSICAL PRFCT10 PRODUCTS
BACK INTO THE DIGITAL UNIVERSE.

THE BOW BECOMES PROOF THAT THE BOW-RACLE
EXISTS IN REAL LIFE.

THE EMOTIONAL SEQUENCE SHOULD FEEL LIKE:

I FOUND THE TABLE.

I PICKED FIVE CARDS.

WHY IS THIS SO ACCURATE?

HAHAHA THAT COACH MESSAGE IS LITERALLY TODAY.

WAIT — I GOT HOUSE FLUX.

WHAT HOUSE DID YOU GET?

MY REAL BOW HAS A SECRET CODE?

IT ALREADY BELONGS TO A HOUSE?

THAT IS THE BOW-RACLE.
`;
