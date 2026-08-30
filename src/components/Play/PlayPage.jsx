import { useState } from "react";
import bowAsset from "../../assets/prfct10-bow-customizable.svg";
import { useI18n } from "../../i18n/I18nProvider";
import { PLAY_STICKERS } from "./apparatusAssets";
import "./Play.css";

const POWER_MODES = [
  { id: "vault", number: "01", name: "VAULT VOLTAGE", stateKey: "vault" },
  { id: "bars", number: "02", name: "BAR CODE", stateKey: "bars" },
  { id: "beam", number: "03", name: "BEAMLINE", stateKey: "beam" },
  { id: "floor", number: "04", name: "FLOOR FREQUENCY", stateKey: "floor" },
  { id: "allAround", number: "05", name: "FULL SPECTRUM", stateKey: "allAround" }
];

const EXPERIENCES = [
  { id: "power", number: "01", title: "POWER CHECK", available: true, tone: "fuchsia", silhouette: PLAY_STICKERS.gymnastBeamHandstand },
  { id: "gymnast", number: "02", title: "GYMNAST OF THE DAY", tone: "blue" },
  { id: "trivia", number: "03", title: "TRIVIA", tone: "yellow" },
  { id: "glossary", number: "04", title: "GLOSSARY", tone: "lilac" },
  { id: "challenge", number: "05", title: "DAILY CHALLENGE", tone: "mint" },
  { id: "didYouKnow", number: "06", title: "DID YOU KNOW?", tone: "pink" },
  { id: "tabata", number: "07", title: "TABATA", tone: "orange" },
  { id: "bling", number: "08", title: "BLING LAB", tone: "purple" },
  { id: "bow", number: "09", title: "BOW LAB", available: true, tone: "bow", sticker: PLAY_STICKERS.bowDashboard }
];

export default function PlayPage({ onOpenPowerCheck, onOpenBowDesigner }) {
  const { t } = useI18n();
  const [activeExperience, setActiveExperience] = useState("power");
  const [activeMode, setActiveMode] = useState("vault");
  const experience = EXPERIENCES.find((item) => item.id === activeExperience) || EXPERIENCES[0];

  const launchExperience = () => {
    if (experience.id === "power") onOpenPowerCheck();
    if (experience.id === "bow") onOpenBowDesigner();
  };

  return (
    <main className="play-shell play-world">
      <section className="play-world__scene" aria-labelledby="play-title">
        <div className="play-world__checker play-world__checker--top" aria-hidden="true" />
        <div className="play-world__checker play-world__checker--side" aria-hidden="true" />
        <div className="play-world__halftone" aria-hidden="true" />
        <div className="play-world__orbit play-world__orbit--one" aria-hidden="true" />
        <div className="play-world__orbit play-world__orbit--two" aria-hidden="true" />

        <header className="play-world__hero">
          <div className="play-world__hero-silhouettes" aria-hidden="true">
            <span className="play-world__layered-silhouette play-world__hero-silhouette" style={{ "--silhouette-image": `url(${PLAY_STICKERS.gymnastLeap})` }}><i /><b /><em /></span>
          </div>
          <div className="play-world__brand"><span>PRFCT10</span><b>PLAY</b><i aria-hidden="true">10</i></div>
          <p className="play-world__eyebrow">{t("play.portal.world.eyebrow")}</p>
          <h1 id="play-title">
            <span>{t("play.portal.world.heroLine1")}</span>
            <span>{t("play.portal.world.heroLine2Before")} <em>{t("play.portal.world.heroLine2Accent")}</em></span>
            <span>{t("play.portal.world.heroLine3")}</span>
          </h1>
          <p className="play-world__lede">{t("play.portal.world.lede")}</p>
          <button className="play-world__hero-cta" type="button" onClick={onOpenPowerCheck}>
            <span>{t("play.portal.world.heroCta")}</span><b aria-hidden="true">↗</b>
          </button>
        </header>

        <div className="play-world__bow-sticker" aria-hidden="true">
          <span>{t("play.portal.world.colorYourPower")}</span>
          <img src={bowAsset} alt="" />
        </div>

        <section className="play-world__modes" aria-labelledby="power-modes-title">
          <div className="play-world__section-title">
            <p>{t("play.portal.world.frequenciesLabel")} · 01—05</p>
            <h2 id="power-modes-title">{t("play.portal.world.modesTitle")}</h2>
          </div>
          <div className="play-world__mode-track">
            {POWER_MODES.map((mode) => (
              <button className={`play-world__mode${activeMode === mode.id ? " is-active" : ""}`} type="button" key={mode.id} onClick={() => setActiveMode(mode.id)} aria-pressed={activeMode === mode.id}>
                <span>{mode.number}</span><strong>{mode.name}</strong><small>{t("play.portal.world.todayYoure")} {t(`play.portal.world.states.${mode.stateKey}`)}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="play-world__portal" aria-labelledby="play-experiences-title">
          <div className="play-world__section-title play-world__section-title--portal">
            <p>PRFCT10 PLAYGROUND · VOL. 01</p>
            <h2 id="play-experiences-title">{t("play.portal.world.experiencesTitle")}</h2>
          </div>

          <div className="play-world__portal-stickers" aria-hidden="true">
            <span className="play-world__layered-silhouette play-world__portal-silhouette" style={{ "--silhouette-image": `url(${PLAY_STICKERS.gymnastSplit})` }}><i /><b /><em /></span>
          </div>

          <div className="play-world__objects" aria-label={t("play.portal.world.experiencesLabel")}>
            {EXPERIENCES.map((item) => (
              <button className={`play-object play-object--${item.tone}${activeExperience === item.id ? " is-active" : ""}`} type="button" key={item.id} onClick={() => setActiveExperience(item.id)} aria-expanded={activeExperience === item.id} aria-controls="play-object-detail">
                <span className="play-object__number">{item.number}</span>
                <strong>{item.title}</strong>
                <span className="play-object__status">{item.available ? t("play.portal.available") : t("play.portal.comingSoon")}</span>
                {item.silhouette ? <span className="play-world__layered-silhouette play-object__silhouette" style={{ "--silhouette-image": `url(${item.silhouette})` }} aria-hidden="true"><i /><b /><em /></span> : null}
                {item.sticker ? <img className="play-object__sticker" src={item.sticker} alt="" aria-hidden="true" /> : null}
                <i aria-hidden="true">{item.available ? "↗" : "×"}</i>
              </button>
            ))}
          </div>

          <aside id="play-object-detail" className={`play-world__detail play-world__detail--${experience.tone}`} aria-live="polite">
            <div className="play-world__detail-topline"><span>{t("play.portal.world.selectedObject")} · {experience.number}</span><b>{experience.available ? t("play.portal.world.unlocked") : t("play.portal.world.lockedStatus")}</b></div>
            <div className="play-world__detail-copy">
              <div>
                <p>{experience.available ? t("play.portal.available") : t("play.portal.comingSoon")}</p>
                <h3>{experience.title}</h3>
                <span>{t(`play.portal.world.experiences.${experience.id}`)}</span>
              </div>
              {experience.available ? (
                <button type="button" onClick={launchExperience}>{experience.id === "bow" ? t("play.portal.bow.cta") : t("play.portal.world.openExperience")} <b aria-hidden="true">↗</b></button>
              ) : (
                <div className="play-world__locked"><span aria-hidden="true">+</span>{t("play.portal.world.locked")}</div>
              )}
            </div>
          </aside>
        </section>

        <div className="play-world__ticker" aria-hidden="true"><span>{t("play.portal.world.ticker")} · </span><span>{t("play.portal.world.ticker")} · </span></div>
        <footer className="play-world__footer"><span>PRFCT10 PLAY © 2026</span><strong>{t("play.portal.world.footerTagline")}</strong><span>{t("play.portal.world.scrollToExplore")} ↓</span></footer>
      </section>
    </main>
  );
}
