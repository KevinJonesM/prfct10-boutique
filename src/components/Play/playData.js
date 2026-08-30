import { selectPowerQuote } from "./data/powerQuotes.js";
import { getLocalDateKey, selectDailySpotlight } from "./data/gymnastSpotlights.js";

export const POWER_STORAGE_KEY = "powerCheck:v2";

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
  { id: "xmudPurple", value: "#7B2DFF", brand: "XMUD" },
  { id: "xmudSlime", value: "#C8FF00", brand: "XMUD" },
  { id: "xmudAqua", value: "#35D6FF", brand: "XMUD" },
  { id: "xmudPink", value: "#FF4FC3", brand: "XMUD" },
  { id: "xmudOrange", value: "#FF6B35", brand: "XMUD" },
  { id: "xmudLemon", value: "#F4FF32", brand: "XMUD" },
  { id: "xmudGrape", value: "#9B35FF", brand: "XMUD" },
  { id: "xmudJelly", value: "#F5F4FF", brand: "XMUD" }
];

export const ALL_POWER_COLORS = [...POWER_COLORS.map((color) => ({ ...color, brand: "PRFCT10" })), ...XMUD_COLORS];

export const POWER_STEPS = [
  { id: "apparatus", optionIds: APPARATUS_OPTIONS, type: "single" },
  { id: "currentEnergy", optionIds: ENERGY_OPTIONS, type: "single" },
  { id: "intention", optionIds: INTENTION_OPTIONS, type: "single" },
  { id: "colors", optionIds: ALL_POWER_COLORS.map((color) => color.id), type: "colors" }
];

export function createPowerResult(selections, locale) {
  const localNow = new Date();
  const spotlightDate = getLocalDateKey(localNow);
  const spotlight = selectDailySpotlight(selections.apparatus, spotlightDate);
  const primaryColorId = selections.colors[0];
  const secondaryColorId = selections.colors[1];
  const quote = selectPowerQuote({ dateKey: spotlightDate, primaryColor: primaryColorId, secondaryColor: secondaryColorId, apparatus: spotlight.apparatus });
  return {
    version: 3,
    locale: locale === "es" ? "es" : "en",
    primaryColorId,
    secondaryColorId,
    apparatusId: selections.apparatus,
    modeLabel: "YOUR POWER MODE",
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
    createdAt: localNow.toISOString()
  };
}

export function isValidPowerResult(value) {
  return Boolean(
    value &&
    APPARATUS_OPTIONS.includes(value.apparatusId || value.apparatus) &&
    ENERGY_OPTIONS.includes(value.currentEnergy) &&
    INTENTION_OPTIONS.includes(value.intention) &&
    Array.isArray(value.colors) &&
    value.colors.length === 2 &&
    value.colors.every((color) => ALL_POWER_COLORS.some((candidate) => candidate.id === color))
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
}
