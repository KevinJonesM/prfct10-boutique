import { useId, useMemo } from "react";
import bowSvgSource from "../../assets/prfct10-bow-customizable.svg?raw";

const centerPalettes = {
  blackBand: { opacity: 0, mid: "#888888", dark: "#151515", edge: "#000000", rim: "#383838" },
  silver: { opacity: 1, mid: "#eef3f9", dark: "#aab4c2", edge: "#59636f", rim: "#f7f7f7" },
  goldStones: { opacity: 1, mid: "#f5dc91", dark: "#c49124", edge: "#6f4a08", rim: "#fff0bd" },
  blackStones: { opacity: 1, mid: "#6e6e72", dark: "#1b1b1e", edge: "#000000", rim: "#4c4c52" },
  neon: { opacity: 1, mid: "#ddff35", dark: "#e45a9b", edge: "#5636c8", rim: "#f5ff9b" }
};

function colorGradient(id, colorMode, topColor, bottomColor) {
  const lowerColor = colorMode === "solid" ? topColor : bottomColor;
  const boundaries = colorMode === "horizontalOmbre"
    ? { top: "38%", bottom: "62%" }
    : { top: "50%", bottom: "50%" };

  return `<linearGradient id="${id}" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="${topColor}" />
    <stop offset="${boundaries.top}" stop-color="${topColor}" />
    <stop offset="${boundaries.bottom}" stop-color="${lowerColor}" />
    <stop offset="100%" stop-color="${lowerColor}" />
  </linearGradient>`;
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

function prepareSvg({ prefix, colorMode, topColor, bottomColor, finish, centerStyle }) {
  const lowerColor = colorMode === "solid" ? topColor : bottomColor;
  const texture = {
    classicTulle: { mesh: 0.54, glitter: 0.03, sparkle: 0.16 },
    shimmer: { mesh: 0.46, glitter: 0.3, sparkle: 0.5 },
    glitter: { mesh: 0.46, glitter: 0.82, sparkle: 0.94 }
  }[finish];
  const stones = centerPalettes[centerStyle];

  let svg = bowSvgSource
    .replace(/<\?xml[^>]*>\s*/i, "")
    .replace(/<linearGradient id="linear-gradient"[\s\S]*?<\/linearGradient>/, colorGradient("linear-gradient", colorMode, topColor, bottomColor))
    .replace(/<linearGradient id="linear-gradient2"[\s\S]*?<\/linearGradient>/, colorGradient("linear-gradient2", colorMode, topColor, bottomColor))
    .replaceAll('stop-color="#ead1fa"', `stop-color="${topColor}"`)
    .replaceAll('stop-color="#f2ff9a"', `stop-color="${lowerColor}"`)
    .replace(/(\.st24\s*\{[\s\S]*?opacity:\s*)[^;]+;/, `$1${texture.mesh};`)
    .replace(/(\.st25\s*\{[\s\S]*?opacity:\s*)[^;]+;/, `$1${texture.glitter};`)
    .replace(/(\.st0\s*\{[\s\S]*?opacity:\s*)[^;]+;/, `$1${texture.sparkle};`)
    .replace('<g id="rhinestones">', `<g id="rhinestones" style="opacity:${stones.opacity}">`)
    .replaceAll("#f8fbff", stones.mid)
    .replaceAll("#b9c0c8", stones.dark)
    .replaceAll("#6a7179", stones.edge)
    .replaceAll("#fff4c7", stones.mid)
    .replaceAll("#d8b45a", stones.dark)
    .replaceAll("#76571b", stones.edge)
    .replaceAll("stroke: #f7f7f7;", `stroke: ${stones.rim};`)
    .replaceAll("stroke: #fff0bd;", `stroke: ${stones.rim};`);

  svg = prefixSvgClasses(svg, prefix);
  svg = prefixSvgIds(svg, prefix);
  return svg.replace("<svg ", '<svg class="bow-preview" aria-hidden="true" focusable="false" ');
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
