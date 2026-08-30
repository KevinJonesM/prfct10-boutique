import { SHARE_FORMATS } from "./config.js";
import { scoreboardMarkup } from "./scoreboard.js";
import { getCode10Score } from "./engine.js";
import { imagotypeMarkup, gymnastMarkup } from "../Play/exportArtwork.js";
import { svgToPng } from "../Play/svgExport.js";
const escape = v => String(v).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;" })[c]);
export function createCode10ShareSvg({ rawScore, format = "story", program, division, categoryLabel, label, challengeLine, devLabel, dev = false }) {
  const { width, height } = SHARE_FORMATS[format] || SHARE_FORMATS.story;
  const score = getCode10Score(rawScore);
  const board = scoreboardMarkup(score.vintageDisplayScore);
  const boardY = format === "story" ? 570 : 420;
  const s = 950 / board.width;
  const text = (value,y,size=36,color="#171a16") => `<text x="540" y="${y}" text-anchor="middle" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" font-weight="900">${escape(value)}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="print-color-adjust:exact;-webkit-print-color-adjust:exact">
    <rect width="1080" height="${height}" fill="#f4efdf"/>
    <path d="M54 54h972v${height-108}H54z" fill="none" stroke="#171a16" stroke-width="4"/>
    <path d="M80 110h920M80 ${height-110}h920" stroke="#171a16" stroke-width="2"/>
    ${text("PRFCT10 / PLAY",94,22)}
    ${imagotypeMarkup(95, 135, 140, 125)}
    ${gymnastMarkup({ id: "c10-gymnast", x: 850, y: 135, width: 140, height: format === "story" ? 230 : 150, fill: "#7B2DFF", offset: "#EE257E" })}
    ${text("CODE 10", format === "story" ? 330 : 255,118)}
    <rect x="220" y="${boardY-114}" width="640" height="62" fill="#d4f542"/>
    ${text(program+" "+division+" · "+categoryLabel,boardY-72,25)}
    <g transform="translate(65 ${boardY}) scale(${s})">${board.body}</g>
    ${text(score.formattedScore,boardY + 490,100)}
    ${text(rawScore + " / 10",boardY + 550,30)}
    ${text(label,boardY + 665,52)}
    ${text(challengeLine,height-200,32)}
    ${dev ? `<rect x="60" y="${height-153}" width="960" height="44" fill="#ee257e"/>${text(devLabel,height-124,21)}` : ""}
    ${text("PRFCT10 PLAY · CODE 10",height-66,22)}
  </svg>`;
}
export async function createCode10Png(svg, format) {
  return svgToPng(svg, SHARE_FORMATS[format] || SHARE_FORMATS.story);
}
export function downloadCode10(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = name; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
