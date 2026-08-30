import { PLAY_STICKERS } from "./apparatusAssets.js";

// Exact paths from public/images/play/prfct10-imagotype.svg, not a substitute logo.
// Inline vectors survive printing and SVG-to-Canvas export without a network request.
export function imagotypeMarkup(x, y, width, height) {
  return `<svg data-artwork="imagotype" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="50 0 460 410" preserveAspectRatio="xMidYMid meet">
    <path fill="#d11c5c" d="M443 213a178 178 0 1 1-356 0 178 178 0 0 1 356 0Z"/>
    <path fill="#fff" d="M141 88h80l44 66 44-66h81l-84 126 84 126h-79l-46-65-44 65h-80l84-126Z"/>
    <path fill="#6dc5a6" d="M493 55a45 45 0 1 1-90 0 45 45 0 0 1 90 0Z"/>
  </svg>`;
}

export function gymnastMarkup({ id, x, y, width, height, pose = PLAY_STICKERS.gymnastLeap, fill = "#7B2DFF", offset = "#FF4FC3" }) {
  const tint = (key, color) => `<filter id="${key}" x="-10%" y="-10%" width="130%" height="130%"><feFlood flood-color="${color}"/><feComposite in2="SourceAlpha" operator="in"/></filter>`;
  return `<g data-artwork="gymnast"><defs>${tint(id, fill)}${tint(id + "-offset", offset)}</defs>
    <image href="${pose}" x="${x + 9}" y="${y + 9}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" filter="url(#${id}-offset)"/>
    <image href="${pose}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" filter="url(#${id})"/>
  </g>`;
}
