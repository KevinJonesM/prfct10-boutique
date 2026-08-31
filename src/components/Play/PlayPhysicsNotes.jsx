export default function PlayPhysicsNotes({ t }) {
  return <div className="play-physics" aria-label={t("play.portal.world.physics.label")}>
    <header><span>PRFCT10 / MOTION LAB</span><small>{t("play.portal.world.physics.note")}</small></header>
    <div className="play-physics__studies">
      <figure><figcaption><b>01 / {t("play.portal.world.physics.flight")}</b><span>y = v₀ᵧt − ½gt²</span></figcaption>
        <svg viewBox="0 0 300 110" aria-hidden="true"><path className="play-physics__axes" d="M20 10V94H284"/><path className="play-physics__curve" d="M30 89Q150 -56 270 89"/><path className="play-physics__guide" d="M150 16V94M30 89H270"/><circle cx="150" cy="16" r="5"/><path d="M168 17h35m-5-5 5 5-5 5"/><text x="207" y="21">vₓ</text><text x="278" y="107">t</text><text x="5" y="15">y</text></svg>
      </figure>
      <figure><figcaption><b>02 / {t("play.portal.world.physics.rotation")}</b><span>L = Iω · I = Σmr²</span></figcaption>
        <svg viewBox="0 0 300 110" aria-hidden="true"><ellipse cx="146" cy="54" rx="94" ry="35" className="play-physics__guide"/><ellipse cx="146" cy="54" rx="58" ry="35"/><path className="play-physics__guide" d="M146 5v98M42 54h205"/><path className="play-physics__curve" d="M62 33C84 4 179 2 224 28m-14-1 14 1-5-12"/><circle cx="201" cy="43" r="5"/><path d="m146 54 55-11"/><text x="163" y="38">r</text><text x="247" y="34">ω</text></svg>
      </figure>
      <figure><figcaption><b>03 / {t("play.portal.world.physics.fall")}</b><span>v = gt · g ≈ 9.81 m/s²</span></figcaption>
        <svg viewBox="0 0 300 110" aria-hidden="true"><path className="play-physics__axes" d="M20 10V94H175"/><path className="play-physics__curve" d="m30 88 128-70"/><text x="3" y="13">v</text><text x="172" y="107">t</text><path className="play-physics__guide" d="M230 9v86"/><circle cx="230" cy="14" r="3"/><circle cx="230" cy="29" r="4"/><circle cx="230" cy="53" r="5"/><circle cx="230" cy="87" r="6"/><path d="M255 20v64m-5-7 5 7 5-7"/><text x="266" y="57">g</text></svg>
      </figure>
    </div>
  </div>;
}
