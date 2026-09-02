import { useMemo, useRef, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { GYM_LOL_JOKES, GYM_LOL_MICRO_REACTIONS, GYM_LOL_PALETTE, GYM_LOL_REACTIONS, chooseNextJoke } from "./gymLolData";
import GymLolLogo from "./GymLolLogo";
import "./GymLol.css";

const STORAGE_KEY = "prfct10-gym-lol-recent-v1";

function readRecent() {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value.filter(id => typeof id === "string").slice(-6) : [];
  } catch {
    return [];
  }
}

function initialJoke(recent) {
  return chooseNextJoke({ recentIds: recent });
}

export default function GymLol({ onBackToPlay }) {
  const { locale } = useI18n();
  const language = locale === "es" ? "es" : "en";
  const [recent, setRecent] = useState(readRecent);
  const [joke, setJoke] = useState(() => initialJoke(readRecent()));
  const [colorIndex, setColorIndex] = useState(() => Math.floor(Math.random() * GYM_LOL_PALETTE.length));
  const [reaction, setReaction] = useState("");
  const [reactionChoice, setReactionChoice] = useState("");
  const [changing, setChanging] = useState(false);
  const changeTimer = useRef(null);
  const palette = GYM_LOL_PALETTE[colorIndex];
  const jokeNumber = Number(joke.id.slice(-3));
  const interaction = GYM_LOL_REACTIONS[jokeNumber % GYM_LOL_REACTIONS.length];
  const cta = jokeNumber % 9 === 0 ? (language === "es" ? "UNA MÁS" : "ONE MORE") : (language === "es" ? "OTRO CHISTE" : "ANOTHER ONE");
  const intro = language === "es" ? "El chat de tu equipo entró a Play." : "Your team group chat has entered Play.";
  const back = language === "es" ? "Volver a PLAY" : "Back to PLAY";
  const lines = useMemo(() => joke.lines[language], [joke, language]);
  const copyLength = useMemo(() => lines.reduce((total, line) => total + line.text.length, 0), [lines]);
  const density = copyLength > 94 ? "tight" : copyLength > 80 ? "compact" : "standard";
  const typeVoices = ["condensed", "serif"];

  const react = option => {
    const pool = GYM_LOL_MICRO_REACTIONS[language];
    const seed = jokeNumber + option.length;
    setReaction(pool[seed % pool.length]);
    setReactionChoice(option);
  };

  const another = () => {
    if (changing) return;
    setChanging(true);
    setReaction(cta.includes("ONE MORE") || cta.includes("UNA MÁS") ? (language === "es" ? "Tu entrenadora te enseñó bien." : "Your coach taught you well.") : "");
    window.clearTimeout(changeTimer.current);
    changeTimer.current = window.setTimeout(() => {
      const next = chooseNextJoke({ currentId: joke.id, recentIds: recent, currentCategory: joke.category });
      const nextRecent = [...recent, joke.id].slice(-6);
      setJoke(next);
      setRecent(nextRecent);
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRecent)); } catch { /* optional storage */ }
      setColorIndex(current => {
        const offset = 1 + Math.floor(Math.random() * (GYM_LOL_PALETTE.length - 1));
        return (current + offset) % GYM_LOL_PALETTE.length;
      });
      setReaction("");
      setReactionChoice("");
      setChanging(false);
    }, 180);
  };

  return (
    <main className="gym-lol" style={{ "--lol-bg": palette.background, "--lol-fg": palette.foreground }}>
      <header className="gym-lol__nav">
        <GymLolLogo variant="nav" labelled />
        <button type="button" onClick={onBackToPlay}>← {back}</button>
      </header>

      <section className={`gym-lol__poster gym-lol__poster--${density}${changing ? " is-changing" : ""}`} aria-labelledby="gym-lol-title" aria-live="polite">
        <div className="gym-lol__topline">
          <h1 id="gym-lol-title"><GymLolLogo variant="poster" /><span className="gym-lol__sr-only">GYM LOL</span></h1>
        </div>
        <p className="gym-lol__intro">{intro}</p>
        <blockquote className={`gym-lol__joke gym-lol__joke--${joke.format}`}>
          {lines.map((line, index) => <span className={`is-${typeVoices[index % typeVoices.length]}${line.emphasis ? " is-emphasis" : ""}`} key={`${joke.id}-${language}-${index}`}>{line.text}</span>)}
        </blockquote>
        <div className="gym-lol__signature" aria-label="PRFCT10 PLAY original meme"><img className="gym-lol__prfct10-imagotype" src="/images/play/prfct10-imagotype.svg" alt="" /><span>SHARE THE JOKE. KEEP THE CREDIT.</span></div>
      </section>

      <section className="gym-lol__controls" aria-label={language === "es" ? "Reacciones del chiste" : "Joke reactions"}>
        <div className="gym-lol__reaction-row">
          <p>{interaction.label[language]}</p>
          <div>
            {interaction.options.map(option => <button type="button" onClick={() => react(option[language])} key={option.en} aria-pressed={reactionChoice === option[language]}>{option[language]}</button>)}
          </div>
          <span role="status">{reaction}</span>
        </div>
        <button className="gym-lol__another" type="button" onClick={another}>{cta} <b aria-hidden="true">→</b></button>
      </section>
    </main>
  );
}
