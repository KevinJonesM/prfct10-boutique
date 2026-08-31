import { useRef, useState } from "react";
import PlayPhysicsNotes from "./PlayPhysicsNotes";
import CoreLabArtwork from "./CoreLabArtwork";
import { BowracleCardBack } from "../PlayBowracle/BowracleDeck";
import usePortalEntrance from "./usePortalEntrance";
import bowAsset from "../../assets/prfct10-bow-customizable.svg";
import { useI18n } from "../../i18n/I18nProvider";
import { PLAY_STICKERS } from "./apparatusAssets";
import "./Play.css";
import "./PlayPortal.css";
import "./PlayCards.css";

const POWER_MODES = [
  { id: "vault", number: "01", name: "VAULT VOLTAGE", stateKey: "vault" },
  { id: "bars", number: "02", name: "BAR CODE", stateKey: "bars" },
  { id: "beam", number: "03", name: "BEAMLINE", stateKey: "beam" },
  { id: "floor", number: "04", name: "FLOOR FREQUENCY", stateKey: "floor" },
  { id: "allAround", number: "05", name: "FULL SPECTRUM", stateKey: "allAround" }
];

const EXPERIENCES = [
  { id: "power", number: "01", title: "POWER CHECK", available: true, tone: "fuchsia", silhouette: PLAY_STICKERS.gymnastBeamHandstand },
  { id: "code10", number: "02", title: "CORE LAB", available: true, tone: "yellow", captionKey: "play.portal.world.code10Caption" },
  { id: "bow", number: "03", title: "THE BOW-RACLE", available: true, tone: "bow" },
  { id: "gymnast", number: "04", title: "GYMNAST OF THE DAY", tone: "blue" },
  { id: "glossary", number: "05", title: "GLOSSARY", tone: "lilac" },
  { id: "challenge", number: "06", title: "DAILY CHALLENGE", tone: "mint" },
  { id: "didYouKnow", number: "07", title: "DID YOU KNOW?", tone: "pink" },
  { id: "tabata", number: "08", title: "TABATA", tone: "orange" },
  { id: "bling", number: "09", title: "BLING LAB", tone: "purple" }
];

export default function PlayPage({ onOpenPowerCheck, onOpenCode10, onOpenBowracle }) {
  const { t } = useI18n();
  const [activeExperience, setActiveExperience] = useState("power");
  const [activeMode, setActiveMode] = useState(null);
  const portalTitle = useRef(null);
  const objects = useRef(null);
  const modeButtons = useRef({});
  usePortalEntrance(objects);
  const mode = POWER_MODES.find(item => item.id === activeMode);
  const closeMeaning = () => {
    modeButtons.current[activeMode]?.focus({ preventScroll: true });
    setActiveMode(null);
  };
  const exploreGames = () => {
    portalTitle.current?.focus({ preventScroll: true });
    portalTitle.current?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  const experience = EXPERIENCES.find((item) => item.id === activeExperience) || EXPERIENCES[0];

  const launchExperience = () => {
    if (experience.id === "power") onOpenPowerCheck();
    if (experience.id === "bow") onOpenBowracle();
    if (experience.id === "code10") onOpenCode10();
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
          <div className="play-world__welcome-stickers" aria-hidden="true">
            <span className="play-welcome-sticker play-welcome-sticker--club"><small>GYM CLUB</small><b>PLAYER 10</b><i>✦</i></span>
            <span className="play-welcome-sticker play-welcome-sticker--learn">{t("play.portal.world.learnSticker")}<b>↗</b></span>
          </div>
          <p className="play-world__eyebrow">{t("play.portal.world.eyebrow")}</p>
          <h1 id="play-title">
            <span>{t("play.portal.world.heroLine1")}</span>
            <span>{t("play.portal.world.heroLine2Before")} <em>{t("play.portal.world.heroLine2Accent")}</em></span>
            <span>{t("play.portal.world.heroLine3")}</span>
          </h1>
          <p className="play-world__lede">{t("play.portal.world.lede")}</p>
          <button className="play-world__hero-cta" type="button" onClick={exploreGames}>
            <span>{t("play.portal.world.heroCta")}</span><b aria-hidden="true">↓</b>
          </button>
        </header>

        <div className="play-world__bow-sticker" aria-hidden="true">
          <img src={bowAsset} alt="" />
        </div>

        <section className="play-world__modes" aria-labelledby="power-modes-title">
          <div className="play-world__section-title">
            <p>{t("play.portal.world.frequenciesLabel")} · 01—05</p>
            <h2 id="power-modes-title">{t("play.portal.world.modesTitle")}</h2>
          </div>
          <div className="play-world__mode-track">
            {POWER_MODES.map((mode) => (
              <button className={`play-world__mode${activeMode === mode.id ? " is-active" : ""}`} type="button" key={mode.id} ref={element => { modeButtons.current[mode.id] = element; }} onClick={() => setActiveMode(activeMode === mode.id ? null : mode.id)} aria-expanded={activeMode === mode.id} aria-controls="play-mode-meaning">
                <span>{mode.number}</span><strong>{mode.name}</strong><small>{t("play.portal.world.todayYoure")} {t(`play.portal.world.states.${mode.stateKey}`)}</small>
              </button>
            ))}
          </div>
          <div id="play-mode-meaning" hidden={!mode} aria-live="polite" onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); closeMeaning(); } }}>
            {mode && <div className={`play-mode-meaning play-mode-meaning--${mode.id}`} key={mode.id}>
              <span className="play-mode-meaning__number" aria-hidden="true">{mode.number}</span>
              <div><p>{t("play.portal.world.meaningLabel")} / {mode.name}</p><h3>{t(`play.portal.world.states.${mode.stateKey}`)}</h3><p>{t(`play.portal.world.meanings.${mode.stateKey}`)}</p></div>
              <button type="button" onClick={closeMeaning} aria-label={t("common.close")}>×</button>
            </div>}
          </div>
        </section>

        <section className="play-world__portal" aria-labelledby="play-experiences-title">
          <div className="play-world__section-title play-world__section-title--portal">
            <p>PRFCT10 PLAYGROUND · VOL. 01</p>
            <h2 id="play-experiences-title" ref={portalTitle} tabIndex={-1}>{t("play.portal.world.experiencesTitle")}</h2>
          </div>

          <div className="play-world__portal-stickers" aria-hidden="true">
            <span className="play-world__layered-silhouette play-world__portal-silhouette" style={{ "--silhouette-image": `url(${PLAY_STICKERS.gymnastSplit})` }}><i /><b /><em /></span>
          </div>

          <PlayPhysicsNotes t={t} />
          <div className="play-world__objects" ref={objects} aria-label={t("play.portal.world.experiencesLabel")}>
            {EXPERIENCES.map((item, index) => (
              <button className={`play-object play-object--${item.tone} play-object--${item.id}${activeExperience === item.id ? " is-active" : ""}`} style={{ "--entry-delay": `${index % 3 * 75}ms` }} type="button" key={item.id} onClick={() => item.id === "code10" ? onOpenCode10() : setActiveExperience(item.id)} aria-expanded={item.id === "code10" ? undefined : activeExperience === item.id} aria-controls={item.id === "code10" ? undefined : "play-object-detail"}>
                <span className="play-object__number">{item.number}</span>
                <strong>{item.title}</strong>
                {item.id === "code10" ? <CoreLabArtwork /> : null}
                {item.id === "bow" ? <span className="play-object__oracle-deck" aria-hidden="true"><BowracleCardBack symbol="moon"/><BowracleCardBack symbol="star"/></span> : null}
                {item.captionKey ? <span className="play-object__caption">{t(item.captionKey)}</span> : null}
                <span className="play-object__status">{item.available ? t("play.portal.available") : t("play.portal.comingSoon")}</span>
                {item.silhouette ? <span className="play-world__layered-silhouette play-object__silhouette" style={{ "--silhouette-image": `url(${item.silhouette})` }} aria-hidden="true"><i /><b /><em /></span> : null}
                {item.sticker ? <img className="play-object__sticker" src={item.sticker} alt="" aria-hidden="true" /> : null}
                <span className="play-object__pin" aria-hidden="true"><i /><b /></span>
              </button>
            ))}
          </div>

          <aside id="play-object-detail" className={`play-world__detail play-world__detail--${experience.tone}`} aria-live="polite">
            <div className="play-world__detail-topline"><span>{t("play.portal.world.selectedObject")} · {experience.number}</span><b>{experience.available ? t("play.portal.world.unlocked") : t("play.portal.world.lockedStatus")}</b></div>
            <div className="play-world__detail-copy">
              <div>
                <p>{experience.available ? t("play.portal.available") : t("play.portal.comingSoon")}</p>
                <h3>{experience.title}</h3>
                <span>{t(experience.id === "bow" ? "bowracle.description" : `play.portal.world.experiences.${experience.id}`)}</span>
              </div>
              {experience.available ? (
                <button type="button" onClick={launchExperience}>{experience.id === "bow" ? t("bowracle.ask") : t("play.portal.world.openExperience")} <b aria-hidden="true">↗</b></button>
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
