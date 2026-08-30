import { selectPowerQuote } from "./data/powerQuotes.js";
import { getLocalDateKey, getSpotlightById, selectDailySpotlight } from "./data/gymnastSpotlights.js";
import { selectTodayYoure } from "./data/todayYoureNames.js";

export const POWER_STORAGE_KEY = "powerCheck:v4";
export const POWER_RECENT_KEY = "powerCheck:recent:v4";

export const APPARATUS_OPTIONS = ["vault", "bars", "beam", "floor", "allAround"];
export const ENERGY_OPTIONS = ["lockedIn", "butterflies", "needBoost", "readyToFly"];
export const INTENTION_OPTIONS = ["calm", "focus", "confidence", "energy"];

export const POWER_COLORS = [
  { id: "fuchsia", value: "#E6007E" },
  { id: "mint", value: "#00CFA6" },
  { id: "pink", value: "#F58BB2" },
  { id: "lilac", value: "#A77BE8" },
  { id: "blue", value: "#8FD6F2" },
  { id: "yellow", value: "#F9D94C" },
  { id: "white", value: "#FFFFFF" },
  { id: "charcoal", value: "#1C1C1C" }
];

export const XMUD_COLORS = [
  { id: "xmudPurple", value: "#7B2DFF", brand: "ACCENT" },
  { id: "xmudSlime", value: "#C8FF00", brand: "ACCENT" },
  { id: "xmudAqua", value: "#35D6FF", brand: "ACCENT" },
  { id: "xmudPink", value: "#FF4FC3", brand: "ACCENT" },
  { id: "xmudOrange", value: "#FF6B35", brand: "ACCENT" },
  { id: "xmudLemon", value: "#F4FF32", brand: "ACCENT" },
  { id: "xmudGrape", value: "#9B35FF", brand: "ACCENT" },
  { id: "xmudJelly", value: "#F5F4FF", brand: "ACCENT" }
];

export const ALL_POWER_COLORS = [...POWER_COLORS.map((color) => ({ ...color, brand: "PRFCT10" })), ...XMUD_COLORS];

export const POWER_STEPS = [
  { id: "apparatus", optionIds: APPARATUS_OPTIONS, type: "single" },
  { id: "currentEnergy", optionIds: ENERGY_OPTIONS, type: "single" },
  { id: "intention", optionIds: INTENTION_OPTIONS, type: "single" },
  { id: "colors", optionIds: ALL_POWER_COLORS.map((color) => color.id), type: "colors" }
];

function readRecent() {
  try { return JSON.parse(window.localStorage.getItem(POWER_RECENT_KEY) || "[]"); } catch { return []; }
}
function saveRecent(result) {
  try {
    const current = readRecent();
    window.localStorage.setItem(POWER_RECENT_KEY, JSON.stringify([...current.slice(-19), { apparatusId: result.apparatusId, gymnastId: result.gymnastId, quoteId: result.quoteId, quoteEn: result.quoteEn, quoteEs: result.quoteEs, createdAt: result.createdAt, seed: result.resultSeed }]));
  } catch { /* storage can be unavailable in private mode */ }
}

export function createPowerResult(selections, locale, rerollNonce = 0) {
  const localNow = new Date();
  const spotlightDate = getLocalDateKey(localNow);
  const [primaryColorId, secondaryColorId] = [...selections.colors].sort();
  const resultSeed = `${spotlightDate}:${selections.apparatus}:${selections.currentEnergy}:${selections.intention}:${primaryColorId}:${secondaryColorId}:${rerollNonce}`;
  const recent = readRecent();
  const cached = recent.find((entry) => entry.seed === resultSeed);
  const spotlight = cached?.gymnastId ? getSpotlightById(cached.gymnastId) : selectDailySpotlight(selections.apparatus, spotlightDate, resultSeed, recent);
  const quote = cached?.quoteId ? { id: cached.quoteId, en: cached.quoteEn, es: cached.quoteEs } : selectPowerQuote({ dateKey: spotlightDate, primaryColor: primaryColorId, secondaryColor: secondaryColorId, apparatus: spotlight.apparatus, currentEnergyId: selections.currentEnergy, intentionId: selections.intention, rerollNonce, recentQuotes: recent.filter((entry) => entry.apparatusId === selections.apparatus).map((entry) => entry.quoteId) });
  const todayYoure = selectTodayYoure({ dateKey: spotlightDate, apparatus: selections.apparatus, primaryColor: primaryColorId, secondaryColor: secondaryColorId, energy: selections.currentEnergy, rerollNonce });
  const result = {
    schemaVersion: 4,
    version: 4,
    resultSeed,
    rerollNonce,
    locale: locale === "es" ? "es" : "en",
    primaryColorId,
    secondaryColorId,
    apparatusId: selections.apparatus,
    currentEnergyId: selections.currentEnergy,
    intentionId: selections.intention,
    modeLabel: "YOUR POWER MODE",
    todayYoureId: todayYoure.id,
    todayYoureEn: todayYoure.en,
    todayYoureEs: todayYoure.es,
    quoteId: quote.id,
    quoteEn: quote.en,
    quoteEs: quote.es,
    gymnastId: spotlight.id,
    elementId: spotlight.elementId,
    visualVariant: `${primaryColorId}-${secondaryColorId}`,
    apparatus: selections.apparatus,
    currentEnergy: selections.currentEnergy,
    intention: selections.intention,
    colors: [...selections.colors],
    spotlightDate,
    createdAt: cached?.createdAt || `${spotlightDate}T00:00:00.000Z`,
    colorMeaningPrimaryEn: primaryColorId,
    colorMeaningPrimaryEs: primaryColorId,
    colorMeaningSecondaryEn: secondaryColorId,
    colorMeaningSecondaryEs: secondaryColorId
  };
  saveRecent(result);
  return result;
}

export function isValidPowerResult(value) {
  return Boolean(
    value && value.schemaVersion === 4 && value.version === 4 &&
    APPARATUS_OPTIONS.includes(value.apparatusId || value.apparatus) &&
    ENERGY_OPTIONS.includes(value.currentEnergyId || value.currentEnergy) &&
    INTENTION_OPTIONS.includes(value.intentionId || value.intention) &&
    Array.isArray(value.colors) &&
    value.colors.length === 2 &&
    value.colors.every((color) => ALL_POWER_COLORS.some((candidate) => candidate.id === color)) &&
    typeof value.quoteId === "string" && typeof value.gymnastId === "string" && typeof value.elementId === "string"
  );
}

export function readPowerResult() {
  try {
    const value = JSON.parse(window.localStorage.getItem(POWER_STORAGE_KEY));
    return isValidPowerResult(value) ? value : null;
  } catch {
    return null;
  }
}

export function writePowerResult(result) {
  window.localStorage.setItem(POWER_STORAGE_KEY, JSON.stringify(result));
}

export function clearPowerResult() {
  window.localStorage.removeItem(POWER_STORAGE_KEY);
  window.localStorage.removeItem("powerCheck:v2");
  window.localStorage.removeItem("powerCheck:v3");
  window.localStorage.removeItem("prfct10-power-check-result");
}
