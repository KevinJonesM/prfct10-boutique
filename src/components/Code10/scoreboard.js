// Shared, original vector presentation for screen, Story, feed and future print.
export function scoreboardMarkup(score = 10000) {
  const safeScore = Math.max(9000, Math.min(10000, Math.round(Number(score) || 9000)));
  const digits = String(safeScore);
  const width = 80 + digits.length * 174;
  return { width, height: 340, body: `
    <rect x="6" y="12" width="${width - 12}" height="320" rx="12" fill="#141714"/>
    <rect x="16" y="20" width="${width - 32}" height="298" rx="6" fill="#282d27" stroke="#050705" stroke-width="5"/>
    <text x="39" y="57" fill="#d4f542" font-family="Arial,sans-serif" font-size="19" font-weight="900" letter-spacing="3">CODE 10</text>
    <text x="${width - 38}" y="57" text-anchor="end" fill="#eae3d1" font-family="Arial,sans-serif" font-size="13" letter-spacing="2">PRFCT10 PLAY</text>
    ${[25, width-25].map(x => [35,298].map(y => `<circle cx="${x}" cy="${y}" r="5" fill="#8b8f83"/><path d="M${x-3} ${y}h6" stroke="#171a16" stroke-width="2"/>`).join("")).join("")}
    ${[...digits].map((digit, i) => {
      const x = 40 + i * 174;
      return `<g class="c10-number-panel" style="--panel-index:${i}">
        <rect x="${x+4}" y="83" width="156" height="205" rx="5" fill="#050705"/>
        <rect x="${x}" y="77" width="156" height="205" rx="4" fill="#f1ead9"/>
        <path d="M${x+1} 79h154v99H${x+1}z" fill="#fffaf0"/>
        <path d="M${x+4} 85h145M${x+8} 273h138" stroke="#dbd4c0" stroke-width="1"/>
        <text x="${x+78}" y="252" text-anchor="middle" fill="#171a16" font-family="Impact,Arial Narrow,Arial,sans-serif" font-size="206" font-weight="900">${digit}</text>
        <path d="M${x} 178h156" stroke="#23281f" stroke-opacity=".5" stroke-width="2"/>
        <rect x="${x-3}" y="167" width="9" height="24" rx="3" fill="#626958" stroke="#131710" stroke-width="2"/>
        <rect x="${x+150}" y="167" width="9" height="24" rx="3" fill="#626958" stroke="#131710" stroke-width="2"/>
      </g>`;
    }).join("")}` };
}
