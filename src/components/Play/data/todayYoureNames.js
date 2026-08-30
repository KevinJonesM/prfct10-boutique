const todayYoureNames = {
  vault: { en: ["TAKEOFF MODE", "LAUNCH ENERGY"], es: ["MODO DESPEGUE", "ENERGÍA DE LANZAMIENTO"] },
  bars: { en: ["SWING STATE", "AIR FLOW"], es: ["ESTADO DE BALANCEO", "FLUJO DE AIRE"] },
  beam: { en: ["STEADY LINE", "CENTER POWER"], es: ["LÍNEA ESTABLE", "PODER CENTRAL"] },
  floor: { en: ["FULL OUT", "SHOWTIME"], es: ["A TODO", "MOMENTO DE BRILLAR"] },
  allAround: { en: ["FULL SPECTRUM", "TOTAL MOTION"], es: ["ESPECTRO COMPLETO", "MOVIMIENTO TOTAL"] }
};
function hash(value) { let h = 2166136261; for (const char of value) { h ^= char.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
export function selectTodayYoure({ dateKey, apparatus, primaryColor, secondaryColor, energy, locale = "en", rerollNonce = 0 }) {
  const pool = todayYoureNames[apparatus] || todayYoureNames.allAround;
  const index = hash(`${dateKey}:${apparatus}:${primaryColor}:${secondaryColor}:${energy}:${rerollNonce}`) % pool.en.length;
  return { id: `today-${apparatus}-${index}`, en: pool.en[index], es: pool.es[index] };
}
export { todayYoureNames };
