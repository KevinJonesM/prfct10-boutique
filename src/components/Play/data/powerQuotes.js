const byEnergy = {
  courage: ["Commit before the doubt gets loud.", "Take the space. Own the landing.", "Brave is a skill you repeat.", "Decide first. Doubt later.", "Your next skill deserves your full presence.", "Valiente no significa sin nervios.", "Make the impossible look playful.", "Tu siguiente habilidad merece toda tu presencia."],
  calm: ["Soft eyes. Strong shapes. Clear landing.", "One breath. One skill. One next move.", "Quiet is not small. Quiet is ready.", "Respira. Mira. Ejecuta.", "La calma también es fuerza.", "Aterriza primero en tu mente.", "Stay loose enough to adapt.", "Una respiración cambia el siguiente movimiento."],
  reset: ["Missed it? Reset the count. Go again.", "Breathe out. Rebuild. Re-enter.", "A correction is part of the routine.", "Un error no termina la rutina.", "Corrige. Respira. Regresa.", "Every reset is another chance to rise.", "Start clean from this exact second.", "Volver a empezar también es avanzar."],
  joy: ["Let the routine feel like yours.", "Play makes power look effortless.", "Find the smile between the skills.", "Que la rutina también se sienta tuya.", "Juega con el movimiento.", "La alegría también puede competir.", "Let your spark lead the count.", "Disfrutar también construye presencia."],
  creativity: ["Make the eight-count unmistakably yours.", "There is more than one beautiful way to move.", "Turn control into character.", "Haz que cada ocho tiempos tenga tu firma.", "Tu estilo también cuenta.", "Controla la habilidad, pero conserva tu identidad.", "Find a new line through the skill.", "Tu imaginación también entra a la pista."],
  energy: ["Bring your spark to the first skill.", "Warm-up is your launchpad.", "Make momentum visible.", "Lleva tu chispa al primer elemento.", "El impulso también se entrena.", "Entra con energía. Sal con intención.", "Turn readiness into motion.", "Haz visible tu impulso."],
  discipline: ["Small details become big finishes.", "Quiet work shows up in the landing.", "Repeat until strong feels natural.", "Los detalles pequeños construyen finales grandes.", "La constancia se ve en el aterrizaje.", "Repite hasta que la seguridad se sienta natural.", "Consistency is a competitive edge.", "La repetición también es una forma de confianza."]
};
const byApparatus = { vault: ["Run with intention.", "The table is a launchpad.", "Fast feet, clear shape.", "Attack the block.", "Corre. Bloquea. Vuela.", "La salida empieza antes del salto."], bars: ["Strong hands make smooth lines.", "Swing into the next shape.", "The rhythm is yours.", "Grip, breathe, fly.", "La conexión vive en el balanceo.", "Haz espacio para el vuelo."], beam: ["Find your line and stay there.", "Small focus, huge confidence.", "The landing starts in the eyes.", "Quiet body. Ready mind.", "Tu eje también es poder.", "Un centímetro de foco cambia todo."], floor: ["Make the floor remember you.", "Your first count sets the room.", "Power has a rhythm.", "Dance into the landing.", "Tu presencia llena la diagonal.", "Muévete como si ya fuera tuyo."] };
function hash(value) { let h = 2166136261; for (const char of value) { h ^= char.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
export function selectPowerQuote({ dateKey, primaryColor, secondaryColor, apparatus }) {
  const pool = [...(byApparatus[apparatus] || byApparatus.floor), ...(byEnergy[primaryColor] || byEnergy.courage), ...(byEnergy[secondaryColor] || byEnergy.calm)];
  const key = `${dateKey}:${primaryColor}:${secondaryColor}:${apparatus}`; const index = hash(key) % pool.length; const storageKey = "prfct10-power-quotes";
  try {
    const recent = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const cached = recent.find((entry) => entry && entry.key === key);
    if (cached?.quote) return cached.quote;
    const priorQuotes = recent.map((entry) => typeof entry === "string" ? entry : entry?.quote?.en).filter(Boolean);
    let candidate = pool[index % pool.length];
    if (priorQuotes.at(-1) === candidate) candidate = pool[(index + 1) % pool.length];
    const quote = { id: `quote-${hash(key)}-${index}`, en: candidate, es: candidate };
    localStorage.setItem(storageKey, JSON.stringify([...recent.slice(-7), { key, quote }]));
    return quote;
  } catch { const candidate = pool[index]; return { id: `quote-${hash(key)}-${index}`, en: candidate, es: candidate }; }
}
