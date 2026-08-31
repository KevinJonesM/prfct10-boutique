import { useId, useMemo } from "react";
import bowSvgSource from "../../assets/prfct10-bow-customizable.svg?raw";

const centerPalettes = {
  blackBand: { opacity: 0, mid: "#888888", dark: "#151515", edge: "#000000", rim: "#383838" },
  silver: { opacity: 1, mid: "#eef3f9", dark: "#aab4c2", edge: "#59636f", rim: "#f7f7f7" },
  goldStones: { opacity: 1, mid: "#f5dc91", dark: "#c49124", edge: "#6f4a08", rim: "#fff0bd" },
  blackStones: { opacity: 1, mid: "#6e6e72", dark: "#1b1b1e", edge: "#000000", rim: "#4c4c52" },
  neon: { opacity: 1, mid: "#ddff35", dark: "#e45a9b", edge: "#5636c8", rim: "#f5ff9b" }
};

function mixWithWhite(color, amount) {
  const hex = color.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) return color;

  const channels = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
  return `#${channels
    .map((channel) => Math.round(channel + (255 - channel) * amount).toString(16).padStart(2, "0"))
    .join("")}`;
}

function replaceColorToken(svg, token, color) {
  const tokenPattern = new RegExp(`<[^>]+data-color-token="${token}"[^>]*>`, "g");
  return svg.replace(tokenPattern, (element) => {
    if (/stop-color="[^"]*"/.test(element)) {
      return element.replace(/stop-color="[^"]*"/, `stop-color="${color}"`);
    }
    if (/fill="(?!none")[^"]*"/.test(element)) {
      return element.replace(/fill="(?!none")[^"]*"/, `fill="${color}"`);
    }
    return element.replace(/stroke="[^"]*"/, `stroke="${color}"`);
  });
}

function replaceOpacityToken(svg, token, opacity) {
  const tokenPattern = new RegExp(`<[^>]+data-opacity-token="${token}"[^>]*>`, "g");
  return svg.replace(tokenPattern, (element) => (
    element.replace(/opacity="[^"]*"/, `opacity="${opacity}"`)
  ));
}

function prefixSvgClasses(svg, prefix) {
  const classNames = [...new Set(
    [...svg.matchAll(/class="([^"]+)"/g)]
      .flatMap((match) => match[1].split(/\s+/))
      .filter(Boolean)
  )].sort((a, b) => b.length - a.length);

  classNames.forEach((className) => {
    svg = svg.replace(new RegExp(`\\.${className}(?![\\w-])`, "g"), `.${prefix}-${className}`);
  });

  return svg.replace(/class="([^"]+)"/g, (_, names) => (
    `class="${names.split(/\s+/).filter(Boolean).map((name) => `${prefix}-${name}`).join(" ")}"`
  ));
}

function prefixSvgIds(svg, prefix) {
  const ids = [...new Set([...svg.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]))]
    .sort((a, b) => b.length - a.length);

  ids.forEach((id) => {
    svg = svg.replaceAll(`id="${id}"`, `id="${prefix}-${id}"`).replaceAll(`#${id}`, `#${prefix}-${id}`);
  });
  return svg;
}

export function prepareSvg({ prefix, topColor, bottomColor, finish, centerStyle }) {
  const texture = {
    classicTulle: { mesh: 0.54, glitter: 0.03, sparkle: 0.16 },
    shimmer: { mesh: 0.46, glitter: 0.3, sparkle: 0.5 },
    glitter: { mesh: 0.46, glitter: 0.82, sparkle: 0.94 }
  }[finish];
  const stones = centerPalettes[centerStyle];

  let svg = bowSvgSource
    .replace(/<\?xml[^>]*>\s*/i, "")
    .replace(/<title[\s\S]*?<\/title>\s*/i, "")
    .replace(/<desc[\s\S]*?<\/desc>\s*/i, "")
    .replace(/<metadata[\s\S]*?<\/metadata>\s*/i, "")
    .replace(/\srole="img"/, "")
    .replace(/\saria-labelledby="[^"]*"/, "");

  svg = replaceColorToken(svg, "bowTop", topColor);
  svg = replaceColorToken(svg, "bowBottom", bottomColor);
  svg = replaceColorToken(svg, "bowTopHighlight", mixWithWhite(topColor, 0.52));
  svg = replaceColorToken(svg, "bowBottomHighlight", mixWithWhite(bottomColor, 0.52));
  svg = replaceColorToken(svg, "knotColor", "#111111");
  svg = replaceColorToken(svg, "knotHighlight", "#303030");
  svg = replaceColorToken(svg, "stoneColor", stones.mid);
  svg = replaceColorToken(svg, "stoneAccent", stones.dark);
  svg = replaceColorToken(svg, "hairTieColor", "#111111");
  svg = replaceColorToken(svg, "sparkleColor", "#ffffff");
  svg = replaceOpacityToken(svg, "meshOpacity", texture.mesh);
  svg = replaceOpacityToken(svg, "glitterOpacity", texture.glitter);
  svg = replaceOpacityToken(svg, "rhinestoneOpacity", stones.opacity);

  svg = svg
    .replaceAll("#b9c0c8", stones.dark)
    .replaceAll("#6a7179", stones.edge)
    .replaceAll("#fff4c7", stones.mid)
    .replaceAll("#76571b", stones.edge)
    .replaceAll('stroke="#f7f7f7"', `stroke="${stones.rim}"`)
    .replaceAll('stroke="#fff0bd"', `stroke="${stones.rim}"`)
    .replace(/(<g id="highlight-sparkles"[^>]*\sopacity=")[^"]+/, `$1${texture.sparkle}`);

  svg = prefixSvgClasses(svg, prefix);
  svg = prefixSvgIds(svg, prefix);
  return svg.replace(/<svg\b/, '<svg class="bow-preview" aria-hidden="true" focusable="false"');
}

export default function BowPreview({
  colorMode,
  topColor,
  bottomColor,
  finish,
  centerStyle,
  size,
  label
}) {
  const prefix = useId().replace(/:/g, "");
  const markup = useMemo(
    () => prepareSvg({ prefix, colorMode, topColor, bottomColor, finish, centerStyle }),
    [prefix, colorMode, topColor, bottomColor, finish, centerStyle]
  );
  const scale = { small: 0.9, medium: 1, large: 1.08 }[size] || 1;

  return (
    <div
      className="bow-preview-frame"
      style={{ "--bow-scale": scale }}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : "true"}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
