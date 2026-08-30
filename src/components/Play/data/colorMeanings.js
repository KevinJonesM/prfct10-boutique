export const COLOR_MEANINGS_DISCLAIMER = {
  en: "PRFCT10 color meanings are part of its creative universe, not scientific claims about color psychology.",
  es: "Los significados de color PRFCT10 forman parte de su universo creativo, no son afirmaciones científicas sobre psicología del color."
};

export const colorMeanings = [
  { id: "fuchsia", nameEn: "Hot Fuchsia", nameEs: "Fucsia intenso", value: "#E6007E", energyEn: "COURAGE", energyEs: "VALENTÍA", descriptionEn: "Show up boldly when the moment gets big.", descriptionEs: "Hazte presente con valentía cuando el momento se hace grande." },
  { id: "mint", nameEn: "Mint", nameEs: "Menta", value: "#00CFA6", energyEn: "RESET", energyEs: "RENUEVO", descriptionEn: "Breathe, recover and begin again with clarity.", descriptionEs: "Respira, recupérate y vuelve a comenzar con claridad." },
  { id: "pink", nameEn: "Bubblegum", nameEs: "Rosa chicle", value: "#F58BB2", energyEn: "JOY", energyEs: "ALEGRÍA", descriptionEn: "Remember why you fell in love with gymnastics.", descriptionEs: "Recuerda por qué te enamoraste de la gimnasia." },
  { id: "lilac", nameEn: "Lilac", nameEs: "Lila", value: "#A77BE8", energyEn: "CREATIVITY", energyEs: "CREATIVIDAD", descriptionEn: "Turn movement into something unmistakably yours.", descriptionEs: "Convierte el movimiento en algo inconfundiblemente tuyo." },
  { id: "blue", nameEn: "Baby Blue", nameEs: "Azul baby", value: "#8FD6F2", energyEn: "CALM", energyEs: "CALMA", descriptionEn: "Steady breath. Clear mind. One moment at a time.", descriptionEs: "Respiración estable. Mente clara. Un momento a la vez." },
  { id: "yellow", nameEn: "Butter Yellow", nameEs: "Amarillo butter", value: "#F9D94C", energyEn: "ENERGY", energyEs: "ENERGÍA", descriptionEn: "Bring light, optimism and momentum into the gym.", descriptionEs: "Lleva luz, optimismo e impulso al gimnasio." },
  { id: "white", nameEn: "Cloud White", nameEs: "Blanco nube", value: "#FFFFFF", energyEn: "CLARITY", energyEs: "CLARIDAD", descriptionEn: "Clear the noise and return to what matters.", descriptionEs: "Apaga el ruido y vuelve a lo que importa." },
  { id: "charcoal", nameEn: "Charcoal", nameEs: "Carbón", value: "#1C1C1C", energyEn: "DISCIPLINE", energyEs: "DISCIPLINA", descriptionEn: "Quiet work creates visible strength.", descriptionEs: "El trabajo silencioso construye una fuerza visible." }
  ,{ id: "xmudPurple", nameEn: "Electric Purple", nameEs: "Morado eléctrico", value: "#7B2DFF", energyEn: "IMAGINATION", energyEs: "IMAGINACIÓN", descriptionEn: "Turn precision into a playful new possibility.", descriptionEs: "Convierte la precisión en una posibilidad nueva y juguetona." }
  ,{ id: "xmudSlime", nameEn: "Fluorescent Slime Green", nameEs: "Verde slime fluorescente", value: "#C8FF00", energyEn: "FLOW", energyEs: "FLUIDEZ", descriptionEn: "Stay adaptable through every transition.", descriptionEs: "Mantente adaptable en cada transición." }
  ,{ id: "xmudAqua", nameEn: "Slime Aqua", nameEs: "Aqua slime", value: "#35D6FF", energyEn: "MOVEMENT", energyEs: "MOVIMIENTO", descriptionEn: "Keep the sequence moving with bright intent.", descriptionEs: "Mantén la secuencia en movimiento con intención." }
  ,{ id: "xmudPink", nameEn: "Candy Pink", nameEs: "Rosa candy", value: "#FF4FC3", energyEn: "JOY", energyEs: "ALEGRÍA", descriptionEn: "Make the hard part feel a little more yours.", descriptionEs: "Haz que la parte difícil se sienta un poco más tuya." }
  ,{ id: "xmudOrange", nameEn: "Slime Orange", nameEs: "Naranja slime", value: "#FF6B35", energyEn: "ACTIVATION", energyEs: "ACTIVACIÓN", descriptionEn: "Switch on your first sharp, confident move.", descriptionEs: "Activa tu primer movimiento preciso y seguro." }
  ,{ id: "xmudLemon", nameEn: "Neon Lemon", nameEs: "Limón neón", value: "#F4FF32", energyEn: "SPARK", energyEs: "CHISPA", descriptionEn: "Bring a bright cue into the next count.", descriptionEs: "Lleva una señal brillante al siguiente tiempo." }
  ,{ id: "xmudGrape", nameEn: "Grape Purple", nameEs: "Morado uva", value: "#9B35FF", energyEn: "IMAGINATION", energyEs: "IMAGINACIÓN", descriptionEn: "See another route through the skill.", descriptionEs: "Imagina otra ruta dentro de la habilidad." }
  ,{ id: "xmudJelly", nameEn: "Jelly White", nameEs: "Blanco jelly", value: "#F5F4FF", energyEn: "CLARITY", energyEs: "CLARIDAD", descriptionEn: "Keep the signal clean and the next step clear.", descriptionEs: "Mantén la señal limpia y el siguiente paso claro." }
];

export function getColorMeaning(id) {
  return colorMeanings.find((color) => color.id === id);
}
