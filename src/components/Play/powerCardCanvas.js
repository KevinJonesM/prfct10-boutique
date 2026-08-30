import { PLAY_STICKERS, POWER_PLAY_ASSETS } from "./apparatusAssets.js";
import { imagotypeMarkup, gymnastMarkup } from "./exportArtwork.js";
import { svgToPng } from "./svgExport.js";

export const POWER_CARD_DIMENSIONS = Object.freeze({ width: 1080, height: 1920 });
export const POWER_CHECK_BASE_ASSET = "/assets/prfct10-power-check-y2k-base.svg";
const XMUD = Object.freeze({ purple: "#7B2DFF", slime: "#C8FF00", aqua: "#35D6FF", pink: "#FF4FC3", orange: "#FF6B35", lemon: "#F4FF32" });

function esc(value) { return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function textLines(text, x, y, width, size, color, max = 3, weight = 800) {
  const words = String(text || "").split(/\s+/); const lines = []; let line = "";
  words.forEach((word) => { const candidate = line ? `${line} ${word}` : word; if (candidate.length < Math.max(12, width / (size * .52)) || !line) line = candidate; else { lines.push(line); line = word; } });
  if (line) lines.push(line);
  return `<text x="${x}" y="${y}" fill="${color}" font-family="Nunito Sans,Arial,sans-serif" font-size="${size}px" font-weight="${weight}" letter-spacing="${size > 30 ? -1 : 2}px">${lines.slice(0, max).map((lineValue, i) => `<tspan x="${x}" dy="${i ? size * 1.12 : 0}">${esc(lineValue)}</tspan>`).join("")}</text>`;
}
function centeredTextLines(text, x, y, width, size, color, max = 3, weight = 800) {
  const words = String(text || "").split(/\s+/); const lines = []; let line = "";
  words.forEach((word) => { const candidate = line ? `${line} ${word}` : word; if (candidate.length < Math.max(12, width / (size * .52)) || !line) line = candidate; else { lines.push(line); line = word; } });
  if (line) lines.push(line);
  return `<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-family="Nunito Sans,Arial,sans-serif" font-size="${size}px" font-weight="${weight}" letter-spacing="${size > 30 ? -1 : 2}px">${lines.slice(0, max).map((lineValue, i) => `<tspan x="${x}" dy="${i ? size * 1.12 : 0}">${esc(lineValue)}</tspan>`).join("")}</text>`;
}
function bow(primary, secondary, x, y, scale = 1, opacity = .92) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" opacity="${opacity}" stroke="${primary}" stroke-width="5" stroke-linejoin="round"><defs><linearGradient id="bow-${x}-${y}" x1="0" x2="1"><stop stop-color="${primary}"/><stop offset="1" stop-color="${secondary}"/></linearGradient></defs><path fill="url(#bow-${x}-${y})" d="M0 50C-80-5-120-5-155 28c20 66 72 78 155 44zM0 50C80-5 120-5 155 28c-20 66-72 78-155 44zM-5 69l-72 115 70-48 45 48zM5 69l72 115-70-48-45 48z"/><ellipse cx="0" cy="50" rx="31" ry="28" fill="${secondary}"/><circle cx="-68" cy="23" r="5" fill="#fff" stroke="none"/><circle cx="76" cy="22" r="5" fill="#fff" stroke="none"/></g>`;
}
function styleFor(colors) {
  const [a, b] = colors; const key = `${a.id}-${b.id}`;
  const map = { "fuchsia-xmudSlime": ["#E6007E", XMUD.slime, "POP POWER"], "lilac-xmudPurple": ["#A77BE8", XMUD.purple, "HOLOGRAPHIC DREAM"], "blue-xmudAqua": ["#8FD6F2", XMUD.aqua, "AIRWAVE"], "yellow-xmudOrange": ["#F9D94C", XMUD.orange, "HEAT FLASH"], "mint-xmudSlime": ["#00CFA6", XMUD.slime, "FRESH RESET"], "pink-xmudAqua": ["#F58BB2", XMUD.aqua, "CANDY FLIGHT"], "charcoal-fuchsia": ["#1C1C1C", "#E6007E", "NIGHT COMPETITION"], "white-lilac": ["#FFFFFF", "#A77BE8", "SOFT PRECISION"], "fuchsia-mint": ["#E6007E", XMUD.slime, "POP POWER"], "fuchsia-charcoal": ["#E6007E", XMUD.slime, "NIGHT COMPETITION"], "lilac-charcoal": ["#A77BE8", XMUD.purple, "HOLOGRAPHIC DREAM"], "blue-lilac": ["#8FD6F2", XMUD.purple, "AIRWAVE"], "yellow-fuchsia": ["#F9D94C", XMUD.orange, "HEAT FLASH"], "mint-fuchsia": ["#00CFA6", XMUD.slime, "FRESH RESET"], "pink-blue": ["#F58BB2", XMUD.aqua, "CANDY FLIGHT"] };
  const reversed = map[`${b.id}-${a.id}`];
  const preset = map[key] || (reversed ? [reversed[1], reversed[0], reversed[2]] : null) || [a.value, b.value, "PRFCT10 POWER MODE"];
  return { primary: preset[0], accent: preset[1], mode: preset[2], secondary: b.value };
}
function svgShell(body, background, foreground, defs = "") { return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920" style="print-color-adjust:exact;-webkit-print-color-adjust:exact" data-template="${POWER_CHECK_BASE_ASSET}"><defs>${defs}</defs><rect width="1080" height="1920" fill="${background}"/>${body}</svg>`; }
function logo() { return imagotypeMarkup(62, 112, 190, 176); }
function assetImage(href, x, y, width, height, opacity = 1, fit = "xMidYMid meet", extra = "") {
  if (String(href).startsWith("sticker:")) {
    const label = String(href).slice(8);
    return `<text x="${x + width / 2}" y="${y + height / 2}" text-anchor="middle" dominant-baseline="middle" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="28" font-weight="900" letter-spacing="2">${esc(label)}</text>`;
  }
  const adjustedY = href === POWER_PLAY_ASSETS.gymnast && x === 440 ? y - 90 : y;
  return `<image href="${esc(href)}" x="${x}" y="${adjustedY}" width="${width}" height="${height}" preserveAspectRatio="${fit}" opacity="${opacity}" ${extra}/>`;
}
function sparkle(x, y, size, fill, stroke = "#17131F") {
  return `<path d="M${x} ${y-size}C${x+4} ${y-8} ${x+8} ${y-4} ${x+size} ${y}C${x+8} ${y+4} ${x+4} ${y+8} ${x} ${y+size}C${x-4} ${y+8} ${x-8} ${y+4} ${x-size} ${y}C${x-8} ${y-4} ${x-4} ${y-8} ${x} ${y-size}Z" fill="${fill}" stroke="${stroke}" stroke-width="5"/>`;
}
function tintFilter(id, color) {
  return `<filter id="${id}" x="-30%" y="-30%" width="170%" height="170%"><feFlood flood-color="${color}" result="tint"/><feComposite in="tint" in2="SourceAlpha" operator="in"/></filter>`;
}
function silhouetteDefs(id, fill, offset, third) {
  return `${tintFilter(`${id}-fill`, fill)}${tintFilter(`${id}-offset`, offset)}${tintFilter(`${id}-third`, third)}`;
}
function layeredSilhouette(href, x, y, width, height, id, opacity = 1, fit = "xMidYMid meet") {
  return `<g opacity="${opacity}">${assetImage(href, x + 16, y + 16, width, height, 1, fit, `filter="url(#${id}-third)"`)}${assetImage(href, x + 8, y + 8, width, height, 1, fit, `filter="url(#${id}-offset)"`)}${assetImage(href, x, y, width, height, 1, fit, `filter="url(#${id}-fill)"`)}</g>`;
}
function colorText(value) {
  return ["#FFFFFF", "#FFF", "#F9D94C", "#8FD6F2", "#F5F4FF", "#F4FF32", "#35D6FF", "#C8FF00"].includes(String(value).toUpperCase()) ? "#17131F" : "#FFFFFF";
}
function y2kName(text, x, y, width, accent) {
  const value = String(text || "");
  const words = value.split(/\s+/); const lines = []; let line = "";
  words.forEach((word) => { const candidate = line ? `${line} ${word}` : word; if (!line || candidate.length <= Math.max(11, width / 48)) line = candidate; else { lines.push(line); line = word; } });
  if (line) lines.push(line);
  const size = lines.length > 1 ? 78 : 90;
  const spans = (offset = 0) => lines.slice(0, 2).map((lineValue, index) => `<tspan x="${x + offset}" dy="${index ? size * 1.02 : 0}">${esc(lineValue)}</tspan>`).join("");
  return `<g><text x="${x + 6}" y="${y + 7}" fill="${accent}" font-family="Arial Black,Impact,Nunito Sans,Arial,sans-serif" font-size="${size}" font-weight="900" letter-spacing="-3">${spans(6)}</text><text x="${x}" y="${y}" fill="#17131F" font-family="Arial Black,Impact,Nunito Sans,Arial,sans-serif" font-size="${size}" font-weight="900" letter-spacing="-3">${spans()}</text></g>`;
}
function countryFlag(code, x, y, width = 128, height = 82) {
  const frame = `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="#fff" stroke="#17131F" stroke-width="5"/>`;
  if (code === "ROU") return `${frame}<rect x="${x+5}" y="${y+5}" width="${(width-10)/3}" height="${height-10}" fill="#002B7F"/><rect x="${x+5+(width-10)/3}" y="${y+5}" width="${(width-10)/3}" height="${height-10}" fill="#FCD116"/><rect x="${x+5+2*(width-10)/3}" y="${y+5}" width="${(width-10)/3}" height="${height-10}" fill="#CE1126"/>`;
  if (["RUS"].includes(code)) return `${frame}<rect x="${x+5}" y="${y+5}" width="${width-10}" height="${(height-10)/3}" fill="#fff"/><rect x="${x+5}" y="${y+5+(height-10)/3}" width="${width-10}" height="${(height-10)/3}" fill="#1C57A7"/><rect x="${x+5}" y="${y+5+2*(height-10)/3}" width="${width-10}" height="${(height-10)/3}" fill="#D52B1E"/>`;
  if (["USSR", "URS"].includes(code)) return `${frame}<rect x="${x+5}" y="${y+5}" width="${width-10}" height="${height-10}" fill="#CC0000"/><circle cx="${x+34}" cy="${y+31}" r="12" fill="#FFD700"/>`;
  if (code === "USA") return `${frame}<g fill="#B22234">${[0,2,4,6].map((n)=>`<rect x="${x+5}" y="${y+5+n*(height-10)/7}" width="${width-10}" height="${(height-10)/7}"/>`).join("")}</g><rect x="${x+5}" y="${y+5}" width="${(width-10)*.46}" height="${(height-10)*.56}" fill="#3C3B6E"/><circle cx="${x+25}" cy="${y+22}" r="4" fill="#fff"/><circle cx="${x+45}" cy="${y+36}" r="4" fill="#fff"/>`;
  if (code === "BRA") return `${frame}<rect x="${x+5}" y="${y+5}" width="${width-10}" height="${height-10}" fill="#009C3B"/><path d="M${x+width/2} ${y+12}L${x+width-12} ${y+height/2} ${x+width/2} ${y+height-12} ${x+12} ${y+height/2}Z" fill="#FFDF00"/><circle cx="${x+width/2}" cy="${y+height/2}" r="17" fill="#002776"/>`;
  if (["BEL", "ITA", "NED"].includes(code)) {
    const colors = code === "BEL" ? ["#17131F", "#FDDA24", "#EF3340"] : code === "ITA" ? ["#009246", "#fff", "#CE2B37"] : ["#AE1C28", "#fff", "#21468B"];
    return code === "NED" ? `${frame}${colors.map((c,i)=>`<rect x="${x+5}" y="${y+5+i*(height-10)/3}" width="${width-10}" height="${(height-10)/3}" fill="${c}"/>`).join("")}` : `${frame}${colors.map((c,i)=>`<rect x="${x+5+i*(width-10)/3}" y="${y+5}" width="${(width-10)/3}" height="${height-10}" fill="${c}"/>`).join("")}`;
  }
  return `${frame}<text x="${x+width/2}" y="${y+height/2+10}" text-anchor="middle" fill="#17131F" font-family="Arial,sans-serif" font-size="26" font-weight="900">${esc(code)}</text>`;
}
function gymnastStickerFor(apparatus) {
  const key = String(apparatus || "").toLowerCase();
  if (key.includes("beam") || key.includes("viga")) return PLAY_STICKERS.gymnastBeamHandstand;
  if (key.includes("bar") || key.includes("barra")) return PLAY_STICKERS.gymnastRingPose;
  if (key.includes("floor") || key.includes("suelo")) return PLAY_STICKERS.gymnastFloorPose;
  if (key.includes("vault") || key.includes("salto")) return PLAY_STICKERS.gymnastLegHold;
  return PLAY_STICKERS.gymnastLeap;
}
function apparatusStickerFor(apparatus) {
  const key = String(apparatus || "").toLowerCase();
  if (key.includes("vault") || key.includes("salto")) return PLAY_STICKERS.vault;
  if (key.includes("bar") || key.includes("barra")) return PLAY_STICKERS.grips;
  if (key.includes("beam") || key.includes("viga")) return PLAY_STICKERS.gymnastOrange;
  if (key.includes("floor") || key.includes("suelo")) return PLAY_STICKERS.shootingStar;
  return PLAY_STICKERS.crown;
}
function storyOne(s) {
  const { primary, accent } = styleFor(s.colors);
  const defs = `<pattern id="check1" width="64" height="64" patternUnits="userSpaceOnUse"><rect width="32" height="32" fill="#17131F"/><rect x="32" y="32" width="32" height="32" fill="#17131F"/></pattern><filter id="shadow1"><feDropShadow dx="14" dy="15" stdDeviation="0" flood-color="#17131F"/></filter><filter id="profileOffset"><feDropShadow dx="9" dy="10" stdDeviation="0" flood-color="${accent}"/></filter>`;
  return svgShell(`<rect width="1080" height="1920" fill="#FFF9F2"/><rect width="1080" height="92" fill="url(#check1)"/><rect x="0" y="92" width="34" height="1828" fill="${accent}"/><rect x="34" y="92" width="12" height="1828" fill="#17131F"/>${logo()}<g transform="translate(735 150)"><rect width="270" height="70" fill="#17131F"/><text x="135" y="47" text-anchor="middle" fill="#fff" font-family="Nunito Sans,Arial,sans-serif" font-size="25" font-weight="900" letter-spacing="4">${esc(s.label).toUpperCase()} / 01</text></g><path d="M90 328H990" stroke="#17131F" stroke-width="5"/><text x="90" y="405" fill="${primary}" font-family="Nunito Sans,Arial,sans-serif" font-size="28" font-weight="900" letter-spacing="7">TODAY YOU’RE…</text><g filter="url(#profileOffset)">${textLines(s.profile, 85, 555, 870, 118, "#17131F", 2, 900)}</g><g transform="translate(90 790)"><rect width="520" height="74" fill="${accent}" stroke="#17131F" stroke-width="5"/><text x="28" y="48" fill="${colorText(accent)}" font-family="Nunito Sans,Arial,sans-serif" font-size="18" font-weight="900" letter-spacing="2">${esc(s.mode).toUpperCase()}</text></g><g transform="translate(640 790)"><rect width="350" height="74" fill="#fff" stroke="#17131F" stroke-width="5"/><text x="175" y="49" text-anchor="middle" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="25" font-weight="900" letter-spacing="4">${esc(s.apparatus).toUpperCase()}</text></g><g filter="url(#shadow1)"><rect x="90" y="970" width="900" height="470" fill="#fff" stroke="#17131F" stroke-width="5"/><rect x="90" y="970" width="900" height="76" fill="${primary}"/><text x="130" y="1021" fill="${colorText(primary)}" font-family="Nunito Sans,Arial,sans-serif" font-size="25" font-weight="900" letter-spacing="5">POWER MESSAGE</text>${textLines(`“${s.quote}”`, 135, 1170, 790, 54, "#17131F", 4, 900)}</g>${gymnastMarkup({ id: "s1-gymnast", x: 700, y: 1480, width: 290, height: 235, pose: PLAY_STICKERS.gymnastLeap })}<path d="M90 1560H650" stroke="#17131F" stroke-width="5"/><text x="90" y="1640" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="23" font-weight="900" letter-spacing="2">THIS IS YOUR STARTING LINE.</text><text x="90" y="1745" fill="${primary}" font-family="Nunito Sans,Arial,sans-serif" font-size="24" font-weight="900" letter-spacing="4">YOUR GYMNASTICS. YOUR ENERGY. YOUR WORLD.</text>`, "#FFF9F2", "#17131F", defs);
}
function storyTwo(s) {
  const { primary, accent } = styleFor(s.colors);
  const defs = `<pattern id="check2" width="64" height="64" patternUnits="userSpaceOnUse"><rect width="32" height="32" fill="#17131F"/><rect x="32" y="32" width="32" height="32" fill="#17131F"/></pattern><filter id="shadow2"><feDropShadow dx="14" dy="16" stdDeviation="0" flood-color="#17131F"/></filter>`;
  const panels = s.colors.map((c, i) => { const fg = colorText(c.value); const y = 700 + i * 400; return `<g filter="url(#shadow2)"><path d="M90 ${y+36}Q540 ${y-45} 990 ${y+36}V${y+300}Q540 ${y+370} 90 ${y+300}Z" fill="${c.value}" stroke="#17131F" stroke-width="5"/><text x="540" y="${y+128}" text-anchor="middle" fill="${fg}" font-family="Nunito Sans,Arial,sans-serif" font-size="58" font-weight="900">${esc(c.name).toUpperCase()}</text><text x="540" y="${y+196}" text-anchor="middle" fill="${fg}" font-family="Nunito Sans,Arial,sans-serif" font-size="30" font-weight="900" letter-spacing="5">${esc(c.energy).toUpperCase()}</text>${centeredTextLines(c.description, 540, y+265, 760, 34, fg, 2, 800)}</g>`; }).join("");
  return svgShell(`<rect width="1080" height="1920" fill="#FFF9F2"/><rect y="0" width="1080" height="92" fill="url(#check2)"/>${logo()}<g transform="translate(350 158)"><rect width="640" height="72" fill="#17131F"/><text x="320" y="48" text-anchor="middle" fill="#fff" font-family="Nunito Sans,Arial,sans-serif" font-size="27" font-weight="900" letter-spacing="5">${esc(s.label).toUpperCase()} / 02</text></g>${centeredTextLines(s.mixLabel, 540, 410, 900, 68, "#17131F", 2, 900)}<rect x="90" y="550" width="900" height="86" fill="#17131F"/><text x="540" y="610" text-anchor="middle" fill="#fff" font-family="Nunito Sans,Arial,sans-serif" font-size="42" font-weight="900" letter-spacing="3">${esc(s.mix).toUpperCase()}</text>${panels}<g transform="translate(90 1535)" filter="url(#shadow2)"><rect width="670" height="210" fill="#fff" stroke="#17131F" stroke-width="5"/>${centeredTextLines(`“${s.quote}”`, 335, 75, 570, 44, "#17131F", 3, 900)}</g>${gymnastMarkup({ id: "s2-gymnast", x: 805, y: 1530, width: 175, height: 230, pose: PLAY_STICKERS.gymnastRingPose })}<text x="540" y="1810" text-anchor="middle" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="21" font-weight="900" letter-spacing="4">TODAY YOU’RE… ${esc(s.todayYoure).toUpperCase()}</text>`, "#FFF9F2", "#17131F", defs);
}
function storyThree(s) {
  const selectedColors = s.colors || [{ value: "#E6007E" }, { value: "#8FD6F2" }];
  const primary = selectedColors.find((color) => !["#fff", "#ffffff", "white"].includes(String(color.value).toLowerCase())) || selectedColors[0];
  const secondary = selectedColors[1] || selectedColors[0];
  const gymnast = gymnastStickerFor(s.apparatus);
  const defs = `<pattern id="check3" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#17131F"/><rect x="30" y="30" width="30" height="30" fill="#17131F"/></pattern><filter id="shadow3"><feDropShadow dx="14" dy="16" stdDeviation="0" flood-color="#17131F"/></filter>${silhouetteDefs("s3", "#35D6FF", "#FF4FC3", "#F7EF45")}`;
  return svgShell(`<rect width="1080" height="1920" fill="#FFF9F2"/><rect x="0" y="0" width="1080" height="88" fill="url(#check3)"/>${logo()}<text x="90" y="330" fill="${primary.value}" font-family="Nunito Sans,Arial,sans-serif" font-size="26" font-weight="900" letter-spacing="6">${esc(s.label).toUpperCase()} / 03</text>${y2kName(s.gymnastName, 90, 460, 570, primary.value)}${gymnastMarkup({ id: "s3-gymnast", x: 705, y: 170, width: 285, height: 400, pose: gymnast })}<g filter="url(#shadow3)"><rect x="80" y="620" width="920" height="235" fill="#fff" stroke="#17131F" stroke-width="5"/>${countryFlag(s.countryCode, 120, 690)}<text x="285" y="685" fill="${primary.value}" font-family="Nunito Sans,Arial,sans-serif" font-size="20" font-weight="900" letter-spacing="4">${esc(s.countryLabel).toUpperCase()}</text><text x="285" y="735" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="34" font-weight="900">${esc(s.countryName)} · ${esc(s.countryCode)}</text>${textLines(s.athleteType, 285, 780, 650, 20, "#17131F", 1, 800)}${textLines(`${String(s.eventLabel || "EVENT").toUpperCase()}: ${s.apparatus.toUpperCase()}`, 285, 817, 650, 20, "#17131F", 1, 800)}</g><path d="M80 930H1000" stroke="#17131F" stroke-width="5"/><text x="80" y="1005" fill="${primary.value}" font-family="Nunito Sans,Arial,sans-serif" font-size="27" font-weight="900" letter-spacing="6">${esc(s.elementLabel).toUpperCase()}</text><g filter="url(#shadow3)"><rect x="80" y="1050" width="920" height="340" fill="#fff" stroke="#17131F" stroke-width="5"/><rect x="80" y="1050" width="920" height="70" fill="${primary.value}"/><text x="120" y="1098" fill="${colorText(primary.value)}" font-family="Nunito Sans,Arial,sans-serif" font-size="24" font-weight="900" letter-spacing="5">${esc(s.worth)}</text>${textLines(s.elementName, 120, 1210, 720, 72, "#17131F", 2, 900)}${textLines(s.elementDescription, 120, 1310, 800, 30, "#17131F", 3, 750)}</g><g transform="translate(80 1455)" filter="url(#shadow3)"><rect width="920" height="280" fill="#F7EF45" stroke="#17131F" stroke-width="5"/><text x="42" y="68" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="25" font-weight="900" letter-spacing="5">${esc(s.factLabel).toUpperCase()}</text>${textLines(s.funFact, 42, 145, 825, 34, "#17131F", 3, 900)}</g><text x="80" y="1820" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="17" font-weight="800">${esc(s.source)}</text><text x="1000" y="1820" text-anchor="end" fill="#17131F" font-family="Nunito Sans,Arial,sans-serif" font-size="17" font-weight="900">TODAY YOU’RE… ${esc(s.todayYoure).toUpperCase()}</text>`, "#FFF9F2", "#17131F", defs);
}
export function serializePowerStory({ pack, storyIndex = 0 }) {
  const stories = [pack.storyOne, pack.storyTwo, pack.storyThree];
  const serializers = [storyOne, storyTwo, storyThree];
  const index = Math.max(0, Math.min(2, storyIndex));
  return serializers[index](stories[index]);
}
export function createPowerPackSvgs({ pack }) {
  return [0, 1, 2].map((storyIndex) => serializePowerStory({ pack, storyIndex }));
}
async function svgToBlob(svg) {
  return svgToPng(svg, POWER_CARD_DIMENSIONS);
}
export async function createPowerPackBlobs({ pack, svgs }) { await document.fonts?.ready; return Promise.all((svgs || createPowerPackSvgs({ pack })).map(svgToBlob)); }
function download(blob, filename, type = "image/png") { const url = URL.createObjectURL(blob instanceof Blob ? blob : new Blob([blob], { type })); const link = document.createElement("a"); link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1500); }
export function downloadPowerStory(blob, storyNumber) { download(blob, `prfct10-power-pack-story-${storyNumber}.png`); }
export function downloadPowerPack(blobs) { blobs.forEach((blob, index) => window.setTimeout(() => downloadPowerStory(blob, index + 1), index * 180)); }
export function downloadPowerStorySvg(svg, storyNumber) { download(svg, `prfct10-power-pack-story-${storyNumber}.svg`, "image/svg+xml"); }
