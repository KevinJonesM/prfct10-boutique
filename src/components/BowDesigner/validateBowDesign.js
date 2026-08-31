import { BOW_COLORS, FINISHES, CENTER_STYLES, BOW_SIZES } from './bowOptions.js';

// Accept only real, manufacturable values at the optional PLAY → store boundary.
export function validateBowDesign(design) {
  const color = value => BOW_COLORS.some(item=>item.value===value);
  if (!design || !color(design.topColor) || (design.bottomColor != null && !color(design.bottomColor)) ||
    !FINISHES.includes(design.finish) || !CENTER_STYLES.includes(design.centerStyle) || !BOW_SIZES.includes(design.size)) return null;
  return { colorMode:'horizontalOmbre', topColor:design.topColor, bottomColor:design.bottomColor || null, finish:design.finish, centerStyle:design.centerStyle, size:design.size };
}
