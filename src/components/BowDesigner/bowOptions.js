export const BOW_COLORS = [
  { id: "bubblegum", value: "#f47fb1", code: "BU" },
  { id: "lilac", value: "#c98be8", code: "LI" },
  { id: "mint", value: "#9edfcf", code: "MI" },
  { id: "babyBlue", value: "#9bcdf0", code: "BB" },
  { id: "peach", value: "#f8c9b9", code: "PE" },
  { id: "red", value: "#D6283E", code: "RD" },
  { id: "yellow", value: "#F2C94C", code: "YE" },
  { id: "royalBlue", value: "#1D4ED8", code: "RB" },
  { id: "coral", value: "#FF6F61", code: "CR" },
  { id: "white", value: "#ffffff", code: "WH" },
  { id: "black", value: "#151515", code: "BK" },
  { id: "magenta", value: "#e45a9b", code: "MA" },
  { id: "purple", value: "#7c4ccb", code: "PU" },
  { id: "turquoise", value: "#36c8c0", code: "TU" },
  { id: "cobalt", value: "#2454d6", code: "CO" },
  { id: "lime", value: "#ddff35", code: "LM" },
  { id: "orange", value: "#ff7a2f", code: "OR" },
  { id: "gold", value: "#d6ac47", code: "GD" }
];

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

export const colorByValue = (value) => BOW_COLORS.find((color) => color.value === value) || null;

export function createBowCode(design) {
  const finishCodes = { classicTulle: "TU", shimmer: "SH", glitter: "GL" };
  const centerCodes = { blackBand: "BA", silver: "SI", goldStones: "GO", blackStones: "BK", neon: "NE" };
  const sizeCodes = { small: "S", medium: "M", large: "L" };
  const top = colorByValue(design.topColor)?.code || "XX";
  const bottom = colorByValue(design.bottomColor)?.code || "XX";
  return ["P10", "OM", top, bottom, finishCodes[design.finish], centerCodes[design.centerStyle], sizeCodes[design.size]].join("-");
}
