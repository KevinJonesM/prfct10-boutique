import { useEffect, useMemo, useState } from "react";
import CoreLabArtwork from "./CoreLabArtwork";
import { BowracleCardBack } from "../PlayBowracle/BowracleDeck";

const STORAGE_KEY = "prfct10-play-passport-v1";

const DAILY_CONTENT = {
  en: {
    eyebrow: "THE DAILY EDIT / SAME DAY, SAME SIGNAL",
    title: "TODAY IN PLAY",
    labels: ["YOUR FREQUENCY", "BOW-RACLE MOOD", "TODAY'S MOVE", "GYM NOTE"],
    frequencies: ["BEAMLINE", "VAULT VOLTAGE", "BAR CODE", "FLOOR FREQUENCY", "FULL SPECTRUM"],
    moods: ["Controlled chaos", "Quiet confidence", "Main-character focus", "Soft power", "Comeback energy"],
    moves: ["Hold a clean shape for 20 seconds", "Make one brave correction", "Name today's tiny win", "Reset, breathe, repeat", "Give your teammate loud support"],
    facts: ["‘One more’ remains mathematically undefined.", "Pointed toes are a full-time detail.", "The camera keeps receipts.", "Calm is also a power skill.", "Progress loves an ordinary Tuesday."],
    quote: "Tiny games. Big gymnast energy."
  },
  es: {
    eyebrow: "LA EDICIÓN DIARIA / MISMO DÍA, MISMA SEÑAL",
    title: "HOY EN PLAY",
    labels: ["TU FRECUENCIA", "MOOD BOW-RACLE", "MOVIMIENTO DE HOY", "NOTA DEL GYM"],
    frequencies: ["BEAMLINE", "VAULT VOLTAGE", "BAR CODE", "FLOOR FREQUENCY", "FULL SPECTRUM"],
    moods: ["Caos controlado", "Confianza silenciosa", "Enfoque protagonista", "Poder suave", "Energía comeback"],
    moves: ["Mantén una forma limpia por 20 segundos", "Haz una corrección valiente", "Nombra la pequeña victoria de hoy", "Reset, respira y repite", "Apoya a tu compañera en grande"],
    facts: ["‘Una más’ sigue sin definición matemática.", "Las puntas son un detalle de tiempo completo.", "La cámara guarda los recibos.", "La calma también es una habilidad de poder.", "El progreso ama un martes cualquiera."],
    quote: "Juegos pequeños. Gran energía gimnasta."
  }
};

function dateKey() {
  const now = new Date();
  const two = value => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${two(now.getMonth() + 1)}-${two(now.getDate())}`;
}

function hashDate(value) {
  return [...value].reduce((hash, char) => ((hash * 31) + char.charCodeAt(0)) >>> 0, 2166136261);
}

function readPassport() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    return { visited: Array.isArray(stored.visited) ? stored.visited : [], saved: Array.isArray(stored.saved) ? stored.saved : [] };
  } catch {
    return { visited: [], saved: [] };
  }
}

export function usePlayPassport() {
  const [passport, setPassport] = useState(readPassport);
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(passport));
  }, [passport]);

  const persist = next => {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* storage may be unavailable */ }
    return next;
  };
  const visit = id => setPassport(current => current.visited.includes(id) ? current : persist({ ...current, visited: [...current.visited, id] }));
  const toggleSaved = id => setPassport(current => persist({
    ...current,
    saved: current.saved.includes(id) ? current.saved.filter(item => item !== id) : [...current.saved, id]
  }));
  return { ...passport, visit, toggleSaved };
}

export function getDailyPlay(locale = "en", count = 9) {
  const key = dateKey();
  const seed = hashDate(key);
  const copy = DAILY_CONTENT[locale === "es" ? "es" : "en"];
  return {
    key,
    copy,
    featuredIndex: seed % count,
    entries: [
      copy.frequencies[seed % copy.frequencies.length],
      copy.moods[(seed >>> 3) % copy.moods.length],
      copy.moves[(seed >>> 6) % copy.moves.length],
      copy.facts[(seed >>> 9) % copy.facts.length]
    ]
  };
}

export function TodayInPlay({ locale, daily }) {
  const { copy, key, entries } = daily;
  return (
    <section className="play-daily" aria-labelledby="play-daily-title">
      <header>
        <p>{copy.eyebrow}</p>
        <h2 id="play-daily-title">{copy.title}</h2>
        <time dateTime={key}>{key.replaceAll("-", " / ")}</time>
      </header>
      <div className="play-daily__grid">
        {entries.map((entry, index) => <article key={copy.labels[index]}><span>0{index + 1}</span><small>{copy.labels[index]}</small><strong>{entry}</strong></article>)}
      </div>
      <p className="play-daily__quote">“{copy.quote}” <b>— PRFCT10 PLAY</b></p>
    </section>
  );
}

const STAMPS = { power: "ϟ", code10: "10", bow: "◉", gymnast: "★", glossary: "ABC", challenge: "✓", didYouKnow: "?", tabata: "20", bling: "◇" };

export function PlayPassport({ experiences, visited, locale = "en" }) {
  const es = locale === "es";
  return (
    <section className="play-passport" aria-labelledby="play-passport-title">
      <div className="play-passport__copy">
        <p>PRFCT10 PLAY / PLAYER 10</p>
        <h2 id="play-passport-title">{es ? <>TU PASAPORTE<br />PLAY</> : <>YOUR PLAY<br />PASSPORT</>}</h2>
        <strong>{visited.length} / {experiences.length} {es ? "PORTALES DESCUBIERTOS" : "PORTALS DISCOVERED"}</strong>
        <div className="play-passport__progress" aria-label={`${visited.length} / ${experiences.length} ${es ? "portales descubiertos" : "portals discovered"}`}><i style={{ width: `${visited.length / experiences.length * 100}%` }} /></div>
        <small>{es ? "SIN RANKING. SOLO TU MUNDO HACIÉNDOSE MÁS GRANDE." : "NO RANKING. JUST YOUR WORLD GETTING BIGGER."}</small>
      </div>
      <div className="play-passport__stamps">
        {experiences.map(item => {
          const found = visited.includes(item.id);
          return <div className={found ? "is-found" : ""} key={item.id}><b>{STAMPS[item.id]}</b><span>{item.number}</span><small>{item.title}</small></div>;
        })}
      </div>
    </section>
  );
}

function PortalArtwork({ item }) {
  if (item.id === "power") return <div className="portal-art portal-art--power" aria-hidden="true"><span className="portal-scan" /><div className="portal-metrics"><i>POWER 87%</i><i>CONTROL 92%</i><i>CHAOS 11%</i></div><span className="portal-figure" style={{ "--silhouette-image": `url(${item.silhouette})` }} /></div>;
  if (item.id === "code10") return <div className="portal-art portal-art--core" aria-hidden="true"><CoreLabArtwork /><span className="portal-processing">PROCESSING…</span><i /><i /><i /></div>;
  if (item.id === "bow") return <div className="portal-art portal-art--bow" aria-hidden="true"><span className="portal-stars">✦　·　✧</span><div className="play-object__oracle-deck"><BowracleCardBack symbol="moon" /><BowracleCardBack symbol="star" /></div><small>THE CARDS HAVE NOTES.</small></div>;
  if (item.id === "gymnast") return <div className="portal-art portal-art--gymnast" aria-hidden="true"><span className="portal-crop">⌜　⌝<br />⌞　⌟</span><img src={item.sticker} alt="" /><div><i>EVENT</i><i>COUNTRY</i><i>ERA</i></div></div>;
  if (item.id === "glossary") return <div className="portal-art portal-art--glossary" aria-hidden="true"><span>CAST</span><span>TAP</span><span>BLOCK</span><span>REGRASP</span></div>;
  if (item.id === "challenge") return <div className="portal-art portal-art--challenge" aria-hidden="true"><span>READY</span><b>→ SET → GO</b><i /></div>;
  if (item.id === "didYouKnow") return <div className="portal-art portal-art--trivia" aria-hidden="true"><b>?</b><span>WAIT, WHAT?</span><i>✦</i></div>;
  if (item.id === "tabata") return <div className="portal-art portal-art--tabata" aria-hidden="true"><strong>20<span>:</span>10</strong><div><i /><i /><i /><i /><i /></div></div>;
  return <div className="portal-art portal-art--bling" aria-hidden="true"><span>◇</span><span>◆</span><span>◇</span><i>＋</i></div>;
}

export function PortalCard({ item, index, featured, saved, onSave, onOpen, locale = "en" }) {
  const available = Boolean(item.available);
  const es = locale === "es";
  const label = `${item.title}. ${available ? (es ? "Disponible ahora" : "Available now") : (es ? "Muy pronto" : "Coming soon")}`;
  return (
    <article className={`play-object play-object--${item.id}${featured ? " is-featured" : ""}`} style={{ "--entry-delay": `${index % 3 * 90}ms` }} data-available={available ? "true" : "false"}>
      <button className="play-object__main" type="button" onClick={() => available && onOpen(item.id)} disabled={!available} aria-label={label}>
        <span className="play-object__topline"><b>{item.number}</b><small>{featured ? (es ? "ELECCIÓN DE HOY" : "TODAY'S PICK") : item.issue}</small></span>
        <strong>{item.title}</strong>
        <span className="play-object__hook">{item.hook}</span>
        <PortalArtwork item={item} />
        <span className="play-object__status">{available ? (es ? "DISPONIBLE AHORA" : "AVAILABLE NOW") : (es ? "MUY PRONTO" : "COMING SOON")}</span>
        <span className="play-object__enter" aria-hidden="true"><small>{available ? (es ? "ENTRAR" : "ENTER") : (es ? "VISTA" : "PREVIEW")}</small><b>{available ? "↗" : "＋"}</b></span>
      </button>
      <button className={`play-object__save${saved ? " is-saved" : ""}`} type="button" onClick={() => onSave(item.id)} aria-label={`${saved ? (es ? "Quitar" : "Remove") : (es ? "Guardar" : "Save")} ${item.title}`} aria-pressed={saved}>{saved ? "★" : "☆"}<span>{saved ? (es ? "GUARDADO" : "SAVED") : (es ? "GUARDAR" : "SAVE")}</span></button>
    </article>
  );
}
