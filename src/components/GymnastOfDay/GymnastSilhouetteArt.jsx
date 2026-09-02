export default function GymnastSilhouetteArt({ apparatus = "floor", revealed = false, stage = 1, label }) {
  return (
    <div className={`gotd-art gotd-art--${apparatus} gotd-art--stage-${stage}${revealed ? " is-revealed" : ""}`} role="img" aria-label={label}>
      <span className="gotd-art__orbit gotd-art__orbit--one" />
      <span className="gotd-art__orbit gotd-art__orbit--two" />
      <span className="gotd-art__star gotd-art__star--one">✦</span>
      <span className="gotd-art__star gotd-art__star--two">✧</span>
      <svg viewBox="0 0 320 360" aria-hidden="true">
        <path className="gotd-art__apparatus" d={apparatus === "bars" ? "M42 281H278M80 281V116M240 281V78M80 122H240" : apparatus === "beam" ? "M38 282H282M65 282l-18 48M255 282l18 48" : apparatus === "vault" ? "M48 286H272M112 282l14-73h68l14 73M108 213h92" : "M35 306Q160 326 285 306"} />
        <circle className="gotd-art__body" cx="162" cy="82" r="22" />
        <path className="gotd-art__body" d={apparatus === "beam" ? "M160 105c-9 42-30 72-62 99m63-94c20 40 54 58 98 61M152 136c-26 36-38 76-36 121m44-121c20 38 23 79 8 124" : apparatus === "vault" ? "M155 105c-28 37-60 57-98 61m100-55c26 36 59 55 98 57M150 136c-7 45-20 78-41 99m51-97c17 40 39 70 67 90" : apparatus === "bars" ? "M160 105c-3 48-27 80-73 96m72-91c21 29 45 51 73 64M152 137c-20 39-39 71-58 96m66-94c17 38 34 69 52 93" : "M158 105c-18 38-49 65-93 83m95-78c25 31 57 51 96 58M151 139c-25 42-51 76-78 102m88-101c23 40 51 70 84 92"} />
      </svg>
      <span className="gotd-art__lock">{revealed ? "✦" : "?"}</span>
    </div>
  );
}
