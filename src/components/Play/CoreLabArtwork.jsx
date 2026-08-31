import { PLAY_STICKERS } from "./apparatusAssets";

/** Decorative brain + supplied gymnast silhouette; no new game or question content. */
export default function CoreLabArtwork() {
  return (
    <span className="core-lab-art" aria-hidden="true">
      <svg viewBox="0 0 300 190" focusable="false">
        <g transform="rotate(-9 125 100)" stroke="#201b31" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path fill="#c7acff" d="M126 30C110 13 85 20 79 37C57 30 38 47 42 67C18 79 22 111 43 119C35 144 56 163 77 154C86 178 117 170 126 153C140 172 166 166 172 148C195 151 213 130 203 110C226 90 214 65 196 60C194 38 174 30 158 37C151 20 135 19 126 30Z" />
          <path fill="none" d="M126 30V153M79 37Q102 43 94 62M42 67Q66 61 76 81M43 119Q58 99 80 113M77 154Q96 135 89 120M126 75Q99 71 105 97M158 37Q143 57 161 72M196 60Q175 66 180 85M203 110Q181 101 166 120M172 148Q142 148 147 126M126 107Q142 92 150 103" />
        </g>
        <g fill="none" stroke="#ec008c" strokeWidth="4" strokeLinecap="round">
          <path d="M61 15L55 3M99 10L101 1M25 40L13 33M206 28L215 15" />
          <path fill="#fffaf4" d="M247 22L251 34L264 38L251 42L247 55L243 42L230 38L243 34Z" />
        </g>
        <path fill="#ec008c" d="M225 145L217 168L228 164L224 185L243 156L230 160L237 145Z" />
      </svg>
      <span className="core-lab-art__gymnast" style={{ "--gymnast-mask": `url(${PLAY_STICKERS.gymnastLeap})` }} />
    </span>
  );
}
