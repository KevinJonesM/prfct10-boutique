import SignatureText from "../SignatureText/SignatureText";
import { useI18n } from "../../i18n/I18nProvider";
import "./Play.css";

export default function PlayPage({ onOpenPowerCheck, onOpenBowDesigner }) {
  const { t } = useI18n();

  return (
    <main className="play-shell play-portal">
      <section className="play-hero" aria-labelledby="play-title">
        <div className="play-hero__geometry" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="play-hero__copy">
          <p className="play-eyebrow">PRFCT10 PLAY</p>
          <h1 id="play-title"><SignatureText variant="hero">{t("play.portal.hero.title")}</SignatureText></h1>
          <p>{t("play.portal.hero.text")}</p>
          <button className="play-button play-button--primary" type="button" onClick={onOpenPowerCheck}>
            {t("play.portal.hero.cta")}
          </button>
        </div>
        <div className="play-hero__prism" aria-hidden="true"><span>10</span></div>
      </section>

      <section className="play-experiences" aria-labelledby="play-experiences-title">
        <header>
          <p className="play-eyebrow">PRFCT10 PLAY</p>
          <h2 id="play-experiences-title">{t("play.portal.experiencesTitle")}</h2>
        </header>

        <article className="play-feature">
          <div className="play-feature__visual" aria-hidden="true">
            <span className="play-feature__ring" />
            <strong>POWER<br />CHECK</strong>
          </div>
          <div className="play-feature__copy">
            <span>{t("play.portal.available")}</span>
            <h3>POWER CHECK</h3>
            <p>{t("play.portal.powerCheck.text")}</p>
            <button className="play-button play-button--dark" type="button" onClick={onOpenPowerCheck}>{t("play.portal.start")}</button>
          </div>
        </article>

        <div className="play-secondary-experiences">
          <article className="play-secondary play-secondary--bling">
            <div>
              <span className="play-secondary__line" aria-hidden="true" />
              <p className="play-eyebrow">{t("play.portal.comingSoon")}</p>
              <h3>BLING LAB</h3>
              <p>{t("play.portal.bling.text")}</p>
            </div>
            <span className="play-secondary__status">{t("play.portal.comingSoon")}</span>
          </article>

          <article className="play-secondary play-secondary--bow">
            <div>
              <span className="play-secondary__line" aria-hidden="true" />
              <p className="play-eyebrow">PRFCT10</p>
              <h3>BOW LAB</h3>
              <p>{t("play.portal.bow.text")}</p>
            </div>
            <button className="play-button play-button--secondary" type="button" onClick={onOpenBowDesigner}>{t("play.portal.bow.cta")}</button>
          </article>
        </div>
      </section>
    </main>
  );
}
