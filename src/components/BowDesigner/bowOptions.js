export const BOW_COLORS = [
  { id: "red", value: "#E32636", code: "RD" },
  { id: "burgundy", value: "#7A1631", code: "BG" },
  { id: "fuchsia", value: "#E6007E", code: "FU" },
  { id: "neonPink", value: "#FF2DAA", code: "NP" },
  { id: "pink", value: "#F26AA7", code: "PK" },
  { id: "lightPink", value: "#F7B6C8", code: "LP" },
  { id: "peach", value: "#F6B49F", code: "PE" },
  { id: "coral", value: "#FF6F61", code: "CR" },
  { id: "energyOrange", value: "#FF7A1A", code: "EO" },
  { id: "intenseYellow", value: "#FFD400", code: "IY" },
  { id: "butterYellow", value: "#F6E58D", code: "BY" },
  { id: "neonGreen", value: "#39FF14", code: "NG" },
  { id: "lime", value: "#C8FF1A", code: "LM" },
  { id: "pistachio", value: "#B8D98B", code: "PI" },
  { id: "mint", value: "#8DDFC8", code: "MI" },
  { id: "slateGreen", value: "#6F8F84", code: "SG" },
  { id: "emeraldGreen", value: "#176B45", code: "EG" },
  { id: "navyBlue", value: "#111B4C", code: "NB" },
  { id: "royalBlue", value: "#2454D8", code: "RB" },
  { id: "cobaltBlue", value: "#174ED1", code: "CB" },
  { id: "babyBlue", value: "#8EC9EB", code: "BB" },
  { id: "turquoise", value: "#28C3C1", code: "TU" },
  { id: "lilac", value: "#C18BE1", code: "LI" },
  { id: "purple", value: "#6F42C1", code: "PU" },
  { id: "gold", value: "#D8AA3D", code: "GD", metallic: true },
  { id: "champagne", value: "#D8BE8A", code: "CH", metallic: true },
  { id: "silver", value: "#C7CBD1", code: "SV", metallic: true },
  { id: "black", value: "#111111", code: "BK" },
  { id: "gray", value: "#737373", code: "GY" },
  { id: "white", value: "#FFFFFF", code: "WH" },
  { id: "cream", value: "#F4EAD7", code: "CM" }
];

export const FINISHES = ["classicTulle", "shimmer", "glitter"];
export const CENTER_STYLES = ["blackBand", "silver", "goldStones", "blackStones", "neon"];
export const BOW_SIZES = ["small", "medium", "large"];

export const INITIAL_BOW_DESIGN = {
  colorMode: "horizontalOmbre",
  topColor: "#C18BE1",
  bottomColor: "#C8FF1A",
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
  const bottom = colorByValue(design.bottomColor || design.topColor)?.code || "XX";
  const colorModeCode = design.bottomColor ? "OM" : "SO";
  return ["P10", colorModeCode, top, bottom, finishCodes[design.finish], centerCodes[design.centerStyle], sizeCodes[design.size]].join("-");
}
