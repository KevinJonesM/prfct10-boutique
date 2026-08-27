export const BOW_COLORS = [
  { id: "peach", value: "#f8c9b9", code: "PE" },
  { id: "bubblegum", value: "#f47fb1", code: "BU" },
  { id: "magenta", value: "#e45a9b", code: "MA" },
  { id: "lilac", value: "#c98be8", code: "LI" },
  { id: "purple", value: "#7c4ccb", code: "PU" },
  { id: "mint", value: "#9edfcf", code: "MI" },
  { id: "turquoise", value: "#36c8c0", code: "TU" },
  { id: "babyBlue", value: "#9bcdf0", code: "BB" },
  { id: "cobalt", value: "#2454d6", code: "CO" },
  { id: "lime", value: "#ddff35", code: "LM" },
  { id: "orange", value: "#ff7a2f", code: "OR" },
  { id: "white", value: "#ffffff", code: "WH" },
  { id: "black", value: "#151515", code: "BK" },
  { id: "gold", value: "#d6ac47", code: "GD" }
];

export const COLOR_MODES = ["solid", "horizontalOmbre"];
export const FINISHES = ["classicTulle", "shimmer", "glitter"];
export const CENTER_STYLES = ["blackBand", "silver", "goldStones", "blackStones", "neon"];
export const BOW_SIZES = ["small", "medium", "large"];

export const INITIAL_BOW_DESIGN = {
  colorMode: "horizontalOmbre",
  topColor: "#c98be8",
  bottomColor: "#ddff35",
  finish: "glitter",
  centerStyle: "silver",
  size: "medium"
};

export const colorByValue = (value) => BOW_COLORS.find((color) => color.value === value) || BOW_COLORS[0];

export function createBowCode(design) {
  const modeCodes = { solid: "SO", horizontalOmbre: "OM" };
  const finishCodes = { classicTulle: "TU", shimmer: "SH", glitter: "GL" };
  const centerCodes = { blackBand: "BA", silver: "SI", goldStones: "GO", blackStones: "BK", neon: "NE" };
  const sizeCodes = { small: "S", medium: "M", large: "L" };
  const top = colorByValue(design.topColor).code;
  const bottom = design.colorMode === "solid" ? top : colorByValue(design.bottomColor).code;
  return ["P10", modeCodes[design.colorMode], top, bottom, finishCodes[design.finish], centerCodes[design.centerStyle], sizeCodes[design.size]].join("-");
}
