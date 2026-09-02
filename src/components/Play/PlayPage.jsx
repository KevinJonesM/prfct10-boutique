import { useMemo, useRef, useState } from "react";
import usePortalEntrance from "./usePortalEntrance";
import bowAsset from "../../assets/prfct10-bow-customizable.svg";
import { useI18n } from "../../i18n/I18nProvider";
import { PLAY_STICKERS } from "./apparatusAssets";
import { getDailyPlay, PlayPassport, PortalCard, TodayInPlay, usePlayPassport } from "./PlayEditorial";
import "./Play.css";
import "./PlayPortal.css";
import "./PlayCards.css";

const POWER_MODES = [
  { id: "vault", number: "01", name: "VAULT VOLTAGE", stateKey: "vault", symbol: "↟" },
  { id: "bars", number: "02", name: "BAR CODE", stateKey: "bars", symbol: "▥" },
  { id: "beam", number: "03", name: "BEAMLINE", stateKey: "beam", symbol: "━" },
  { id: "floor", number: "04", name: "FLOOR FREQUENCY", stateKey: "floor", symbol: "〰" },
  { id: "allAround", number: "05", name: "FULL SPECTRUM", stateKey: "allAround", symbol: "◈" }
];

const EXPERIENCES = [
  { id: "power", number: "01", title: "POWER CHECK", issue: "ENERGY SCAN / 001", hook: "HOW ARE YOU LANDING TODAY?", available: true, silhouette: PLAY_STICKERS.gymnastBeamHandstand },
  { id: "code10", number: "02", title: "CORE LAB", issue: "MENTAL FILE / 010", hook: "10 QUESTIONS. CHASE THE 10.", available: true },
  { id: "bow", number: "03", title: "THE BOW-RACLE", issue: "SECRET DECK / 003", hook: "ASK THE CARDS. KEEP THE BOW.", available: true },
  { id: "gymnast", number: "04", title: "GYMNAST OF THE DAY", issue: "ATHLETE FILE / 004", hook: "THREE CLUES. ONE LEGEND.", available: true, sticker: PLAY_STICKERS.gymnastRingPose },
  { id: "gymLol", number: "05", title: "GYM LOL", issue: "NEW FROM THE GROUP CHAT", hook: "BECAUSE PRACTICE IS ALREADY SERIOUS ENOUGH.", available: true },
  { id: "truthOrDare", number: "06", title: "TRUTH OR DARE", issue: "ONE PHONE / TEAM ONLY", hook: "NO SCORES. NO JUDGES. JUST YOUR TEAM.", available: true },
  { id: "glossary", number: "07", title: "GLOSSARY", issue: "WORD CULTURE / 007", hook: "SPEAK GYMNASTICS FLUENTLY.", sticker: PLAY_STICKERS.grips },
  { id: "challenge", number: "08", title: "DAILY CHALLENGE", issue: "MOVE NOW / 008", hook: "ONE MISSION. YOUR MOMENTUM.", sticker: PLAY_STICKERS.gymnastTuck },
  { id: "didYouKnow", number: "09", title: "DID YOU KNOW?", issue: "WAIT, WHAT? / 009", hook: "THE FACTS HAVE ENTERED THE CHAT.", sticker: PLAY_STICKERS.shootingStar },
  { id: "tabata", number: "10", title: "TABATA", issue: "20:10 / 010", hook: "SHORT CLOCK. BIG ENERGY.", sticker: PLAY_STICKERS.boltBlue },
  { id: "bling", number: "11", title: "BLING LAB", issue: "GEM MAP / 011", hook: "PLACE THE LIGHT. MAKE IT YOURS.", sticker: PLAY_STICKERS.crown }
];

export default function PlayPage({ onOpenPowerCheck, onOpenCode10, onOpenBowracle, onOpenSecretBowGarden, onOpenGymnastOfDay, onOpenGymLol, onOpenTruthOrDare }) {
  const { locale, t } = useI18n();
  const [activeMode, setActiveMode] = useState(null);
  const portalTitle = useRef(null);
  const objects = useRef(null);
  const modeButtons = useRef({});
  const passport = usePlayPassport();
  const daily = useMemo(() => getDailyPlay(locale, EXPERIENCES.length), [locale]);
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
  const launchExperience = id => {
    passport.visit(id);
    if (id === "power") onOpenPowerCheck();
    if (id === "bow") onOpenBowracle();
    if (id === "code10") onOpenCode10();
    if (id === "gymnast") onOpenGymnastOfDay();
    if (id === "gymLol") onOpenGymLol();
    if (id === "truthOrDare") onOpenTruthOrDare();
  };

  return (
    <main className="play-shell play-world">
      <section className="play-world__scene" aria-labelledby="play-title">
        <div className="play-world__checker play-world__checker--top" aria-hidden="true" />
        <div className="play-world__halftone" aria-hidden="true" />

        <header className="play-world__hero">
          <div className="play-world__hero-haze" aria-hidden="true" />
          <div className="play-world__hero-silhouettes" aria-hidden="true"><span className="play-world__layered-silhouette play-world__hero-silhouette" style={{ "--silhouette-image": `url(${PLAY_STICKERS.gymnastLeap})` }}><i /><b /><em /></span></div>
          <div className="play-world__brand"><span>PRFCT10</span><b>PLAY</b><i aria-hidden="true">10</i></div>
          <div className="play-world__issue"><b>DIGITAL ISSUE 01</b><span>PLAY EDITION / 2026—27</span></div>
          <p className="play-world__eyebrow">{t("play.portal.world.eyebrow")}</p>
          <h1 id="play-title" className="play-kinetic-title"><span>{t("play.portal.world.heroLine1")}</span><span>{t("play.portal.world.heroLine2Before")} <em>{t("play.portal.world.heroLine2Accent")}</em></span><span>{t("play.portal.world.heroLine3")}</span></h1>
          <p className="play-world__lede">{t("play.portal.world.lede")}</p>
          <button className="play-world__hero-cta" type="button" onClick={exploreGames}><span>{t("play.portal.world.heroCta")}</span><b aria-hidden="true">↓</b></button>
          <div className="play-world__hero-notes" aria-hidden="true"><span>PLAY / LEARN / DISCOVER</span><b>PLAYER<br />10</b><i>✦</i></div>
        </header>

        <div className="play-world__bow-sticker" aria-hidden="true"><img src={bowAsset} alt="" /></div>

        <div className="play-editorial-ticker" aria-hidden="true"><div><span>PRFCT10 PLAY ✦ GYM CULTURE ✦ PLAYER 10 ✦ TRAIN SMART ✦ STICK IT ✦ CHALK EVERYWHERE ✦ PLAY AGAIN ✦ </span><span>PRFCT10 PLAY ✦ GYM CULTURE ✦ PLAYER 10 ✦ TRAIN SMART ✦ STICK IT ✦ CHALK EVERYWHERE ✦ PLAY AGAIN ✦ </span></div></div>

        <section className="play-world__modes" aria-labelledby="power-modes-title">
          <div className="play-world__section-title"><p>ACT 02 / ENERGY IDENTITIES</p><h2 id="power-modes-title">{t("play.portal.world.modesTitle")}</h2></div>
          <div className="play-world__mode-track">
            {POWER_MODES.map(item => <button className={`play-world__mode play-world__mode--${item.id}${activeMode === item.id ? " is-active" : ""}`} type="button" key={item.id} ref={element => { modeButtons.current[item.id] = element; }} onClick={() => setActiveMode(activeMode === item.id ? null : item.id)} aria-expanded={activeMode === item.id} aria-controls="play-mode-meaning"><span>{item.number}</span><b aria-hidden="true">{item.symbol}</b><strong>{item.name}</strong><small>{t("play.portal.world.todayYoure")} {t(`play.portal.world.states.${item.stateKey}`)}</small><em>{t(`play.portal.world.summaries.${item.stateKey}`)}</em><i>{t("play.portal.world.tapToDecode")} ↘</i></button>)}
          </div>
          <div id="play-mode-meaning" hidden={!mode} aria-live="polite" onKeyDown={event => { if (event.key === "Escape") closeMeaning(); }}>
            {mode && <div className={`play-mode-meaning play-mode-meaning--${mode.id}`} key={mode.id}><span className="play-mode-meaning__number" aria-hidden="true">{mode.number}</span><div><p>{t("play.portal.world.meaningLabel")} / {mode.name}</p><h3>{t(`play.portal.world.states.${mode.stateKey}`)}</h3><p>{t(`play.portal.world.meanings.${mode.stateKey}`)}</p></div><button type="button" onClick={closeMeaning} aria-label={t("common.close")}>×</button></div>}
          </div>
        </section>

        <TodayInPlay locale={locale} daily={daily} />

        <section className="play-world__portal" aria-labelledby="play-experiences-title">
          <div className="play-world__section-title play-world__section-title--portal"><p>ACT 04 / 11 COLLECTIBLE WORLDS</p><h2 id="play-experiences-title" ref={portalTitle} tabIndex={-1}>{t("play.portal.world.experiencesTitle")}</h2><span>CHOOSE A COVER.<br />ENTER A NEW FREQUENCY.</span></div>
          <div className="play-world__portal-mark" aria-hidden="true">PLAY<br /><b>10</b></div>
          <div className="play-world__objects" ref={objects} aria-label={t("play.portal.world.experiencesLabel")}>{EXPERIENCES.map((item, index) => <PortalCard key={item.id} item={item} index={index} featured={daily.featuredIndex === index} saved={passport.saved.includes(item.id)} onSave={passport.toggleSaved} onOpen={launchExperience} locale={locale} />)}</div>
        </section>

        <section className="play-secret-entrance" aria-labelledby="play-secret-entrance-title">
          <div className="play-secret-entrance__art" aria-hidden="true" />
          <div className="play-secret-entrance__copy">
            <p>✦ {locale === "es" ? "UNA ENTRADA SECRETA" : "A SECRET ENTRANCE"}</p>
            <h2 id="play-secret-entrance-title">{locale === "es" ? "¿TU LAZO TIENE UN CÓDIGO SECRETO?" : "DOES YOUR BOW HAVE A SECRET CODE?"}</h2>
            <span>{locale === "es" ? "Tu lazo guardó una carta para ti. Entra al jardín para abrirla." : "Your bow kept a letter for you. Enter the garden to open it."}</span>
            <button type="button" onClick={onOpenSecretBowGarden}>{locale === "es" ? "ENTRAR AL JARDÍN SECRETO" : "ENTER THE SECRET BOW GARDEN"}<b aria-hidden="true">→</b></button>
          </div>
          <small>THE SECRET BOW GARDEN · OUTSIDE THE PLAY PASSPORT</small>
        </section>

        <PlayPassport experiences={EXPERIENCES} visited={passport.visited} locale={locale} />

        <section className="play-world__closing" aria-label="PLAY IT. SAVE IT. SHARE IT. MAKE IT YOURS."><p>PRFCT10 PLAY / END NOTE</p><h2><span>PLAY IT.</span><span>SAVE IT.</span><span>SHARE IT.</span><span>MAKE IT <em>YOURS.</em></span></h2><footer><span>DIGITAL ISSUE 01</span><strong>YOUR GYMNASTICS. YOUR ENERGY. YOUR WORLD.</strong><span>PLAYER 10 / ALWAYS</span></footer></section>
      </section>
    </main>
  );
}
