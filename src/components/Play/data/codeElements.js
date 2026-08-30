const CODE_SOURCE = "https://www.gymnastics.sport/publicdir/rules/files/en_1.1%20-%20WAG%20COP%202025-2028.pdf";
const SOURCE_EDITION = "World Gymnastics · WAG Code of Points 2025–2028";
const VERIFIED_ON = "2026-08-29";

export const codeElements = [
  {
    id: "amanar-vault", apparatus: "vault", name: "Amanar",
    descriptionEn: "Round-off, back handspring onto the table and a stretched back salto with 2½ twists.",
    descriptionEs: "Rondada, flic-flac sobre la mesa y mortal atrás extendido con 2½ giros.",
    difficultyLetter: null, difficultyValue: 5.4, vaultDScore: 5.4,
    funFactEn: "Simona Amanar debuted the vault at the 2000 Olympic Games.",
    funFactEs: "Simona Amanar presentó este salto en los Juegos Olímpicos de 2000.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "biles-ii-vault", apparatus: "vault", name: "Biles II",
    descriptionEn: "Round-off, back handspring onto the table and a double piked back salto.",
    descriptionEs: "Rondada, flic-flac sobre la mesa y doble mortal atrás carpado.",
    difficultyLetter: null, difficultyValue: 6.4, vaultDScore: 6.4,
    funFactEn: "The element entered the Code after Simone Biles performed it at the 2023 World Championships.",
    funFactEs: "El elemento entró al Código después de que Simone Biles lo presentara en el Mundial de 2023.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "davydova-bars", apparatus: "bars", name: "Davydova",
    descriptionEn: "A forward long swing into a counter straddle reverse hecht over the high bar to hang.",
    descriptionEs: "Gran balanceo adelante hacia un vuelo invertido en straddle sobre la barra alta para retomar la suspensión.",
    difficultyLetter: "D", difficultyValue: 0.4, vaultDScore: null,
    funFactEn: "It is one of the classic Tkatchev-family release elements in the current Code.",
    funFactEs: "Es uno de los vuelos clásicos de la familia Tkatchev en el Código vigente.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "shushunova-bars", apparatus: "bars", name: "Shushunova",
    descriptionEn: "A forward long swing with two half turns into a counter-straddled flight over the high bar.",
    descriptionEs: "Gran balanceo adelante con dos medios giros hacia un vuelo en straddle sobre la barra alta.",
    difficultyLetter: "E", difficultyValue: 0.5, vaultDScore: null,
    funFactEn: "The release combines a full turn in two distinct half-turn phases.",
    funFactEs: "El vuelo combina un giro completo realizado en dos fases de medio giro.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "produnova-beam", apparatus: "beam", name: "Produnova",
    descriptionEn: "A forward jump with a half turn into a piked back salto on the beam.",
    descriptionEs: "Salto adelante con medio giro hacia un mortal atrás carpado sobre la viga.",
    difficultyLetter: "F", difficultyValue: 0.6, vaultDScore: null,
    funFactEn: "The element changes direction before the gymnast must find the beam again on landing.",
    funFactEs: "El elemento cambia de dirección antes de que la gimnasta vuelva a encontrar la viga al aterrizar.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "biles-beam", apparatus: "beam", name: "Biles",
    descriptionEn: "A double tucked or piked back salto with two twists as a beam dismount.",
    descriptionEs: "Doble mortal atrás agrupado o carpado con dos giros como salida de viga.",
    difficultyLetter: "H", difficultyValue: 0.8, vaultDScore: null,
    funFactEn: "The current Code lists this H-rated skill among the most difficult beam dismounts.",
    funFactEs: "El Código vigente incluye este elemento H entre las salidas de viga más difíciles.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "silivas-floor", apparatus: "floor", name: "Silivas",
    descriptionEn: "A double tucked back salto with two full twists.",
    descriptionEs: "Doble mortal atrás agrupado con dos giros completos.",
    difficultyLetter: "H", difficultyValue: 0.8, vaultDScore: null,
    funFactEn: "The skill packs two flips and two twists into one tumbling element.",
    funFactEs: "El elemento reúne dos mortales y dos giros en una sola acrobacia.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  },
  {
    id: "biles-floor", apparatus: "floor", name: "Biles",
    descriptionEn: "A double tucked back salto with three full twists.",
    descriptionEs: "Doble mortal atrás agrupado con tres giros completos.",
    difficultyLetter: "J", difficultyValue: 1.0, vaultDScore: null,
    funFactEn: "Simone Biles first performed the element internationally at the 2019 World Championships in Stuttgart.",
    funFactEs: "Simone Biles presentó el elemento internacionalmente en el Mundial de Stuttgart 2019.",
    sourceUrl: CODE_SOURCE, sourceEdition: SOURCE_EDITION, verifiedOn: VERIFIED_ON
  }
];

export function getCodeElement(id) {
  return codeElements.find((element) => element.id === id);
}
