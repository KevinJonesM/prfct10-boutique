// Custom-service data for PRFCT10 TEAM / Brillo de Equipo.
// These entries intentionally omit ecommerce price, stock, and cart fields.
const teamLeotardServiceItems = [
  {
    id: "competition-leotards",
    publicName: "Competition Leotards",
    name: "Mallas de Competencia",
    modalName: "Mallas de Competencia",
    modalCategory: "Apparel and Leotards PRFCT10",
    group: "Competencia",
    cardKicker: "Competition",
    legacyCardKicker: "Competencia",
    price: "$",
    image: "/images/hero-boutique-ropa-mallas.png",
    gallery: ["/images/hero-boutique-ropa-mallas.png"],
    description: "Mallas para competir con presencia, ajuste y un look limpio para elevar la rutina.",
    commercialDescription: "Mallas de competencia pensadas para gimnastas que quieren verse pulidas, seguras y listas para presentarse. Ideales para equipos, eventos y rutinas donde cada detalle cuenta.",
    idealFor: "Competencias, exhibiciones, fotos de equipo y presentaciones especiales.",
    why: "Son la pieza central del look de competencia: proyectan seguridad, estilo y presencia en el tapiz.",
    chips: ["Competition", "Team", "Custom direction"],
    serviceDescription: "A polished competition look developed around your team colors, visual direction, and embellishment level."
  },
  {
    id: "training-leotards",
    publicName: "Training Leotards",
    name: "Mallas de Entrenamiento",
    modalName: "Mallas de Entrenamiento",
    modalCategory: "PRFCT10 TEAM",
    group: "Entrenamiento",
    cardKicker: "Training",
    image: "/images/collection-mallas.png",
    gallery: ["/images/collection-mallas.png"],
    description: "Custom practice looks designed to help a team feel connected through every training day.",
    commercialDescription: "Training leotards shaped around team colors, practical wear needs, and a cohesive gym identity.",
    idealFor: "Team practices, seasonal programs, camps, exhibitions, and coordinated training looks.",
    why: "A unified practice look can build team identity while keeping movement and repeat wear at the center.",
    chips: ["Training", "Team", "Custom direction"],
    serviceDescription: "A coordinated training look shaped for repeat wear, movement, and a strong shared team identity."
  }
];

const futureTeamServiceTypes = ["Team Tees", "Team Hoodies", "Warm-Ups", "Team Accessories"];

export { futureTeamServiceTypes, teamLeotardServiceItems };
