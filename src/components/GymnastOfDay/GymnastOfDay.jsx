import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { gymnastById, gymnastEditorialRegistry } from "./gymnastData";
import { addToHall, buildShareText, DAILY_ATTEMPT_LIMIT, getEasternDateKey, resolveGuess, scoreForClue, selectDailyGymnasts, sessionScore, updateStreak } from "./gymnastEngine";
import GymnastSilhouetteArt from "./GymnastSilhouetteArt";
import "./GymnastOfDay.css";

const STORAGE_KEY = "prfct10-gymnast-of-day-v2";
const readSave = () => { try { return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } };

export default function GymnastOfDay({ onBackToPlay }) {
  const { locale, t } = useI18n();
  const todayKey = getEasternDateKey();
  const daily = useMemo(() => selectDailyGymnasts(gymnastEditorialRegistry.records), []);
  const initialSave = useMemo(readSave, []);
  const restored = initialSave.session?.dateKey === todayKey ? initialSave.session : null;
  const [phase, setPhase] = useState(restored?.phase || "intro");
  const [round, setRound] = useState(restored?.round || 0);
  const [clueNumber, setClueNumber] = useState(restored?.clueNumber || 1);
  const [attempts, setAttempts] = useState(restored?.attempts || 0);
  const [wrongIds, setWrongIds] = useState(restored?.wrongIds || []);
  const [message, setMessage] = useState("");
  const [solved, setSolved] = useState(() => restored?.solved?.map(item => ({ gymnast: gymnastById[item.id], score: item.score, clues: item.clues })).filter(item => item.gymnast) || []);
  const [save, setSave] = useState(initialSave);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [settings, setSettings] = useState({ sound: false, vibration: false, timer: false });
  const [elapsed, setElapsed] = useState(restored?.elapsed || 0);
  const focusHeading = useRef(null);
  const gymnast = daily[round] || daily[0];
  const score = scoreForClue(clueNumber);
  const answerRecords = (gymnast ? [gymnast.game.answerGymnastId, ...gymnast.game.distractorGymnastIds] : []).map(id => gymnastById[id]).filter(Boolean);

  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(save)); }, [save]);
  useEffect(() => {
    if (phase === "intro") return;
    setSave(current => ({ ...current, session: { dateKey: todayKey, phase, round, clueNumber, attempts, wrongIds, elapsed, solved: solved.map(item => ({ id: item.gymnast.id, score: item.score, clues: item.clues })) } }));
  }, [phase, round, clueNumber, attempts, wrongIds, elapsed, solved, todayKey]);
  useEffect(() => {
    if (phase !== "clues" || !settings.timer) return undefined;
    const id = window.setInterval(() => setElapsed(value => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [phase, settings.timer]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [phase, round]);

  const feedback = kind => {
    if (settings.vibration && navigator.vibrate) navigator.vibrate(kind === "correct" ? [35, 25, 65] : 35);
    if (!settings.sound) return;
    try { const Audio = window.AudioContext || window.webkitAudioContext; const context = new Audio(); const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.frequency.value = kind === "correct" ? 720 : 220; gain.gain.value = .03; oscillator.connect(gain); gain.connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .08); } catch { /* optional */ }
  };
  const finishSession = nextSolved => {
    setSolved(nextSolved); setMessage(""); setPhase("final");
    setSave(current => ({ ...current, streak: updateStreak(current.streak, todayKey), played: { ...(current.played || {}), [todayKey]: true } }));
    window.setTimeout(() => focusHeading.current?.focus(), 60);
  };
  const guess = id => {
    if (wrongIds.includes(id) || phase !== "clues") return;
    const outcome = resolveGuess({ attempts, clueNumber, isCorrect: id === gymnast.id });
    setAttempts(outcome.attempts); setClueNumber(outcome.clueNumber);
    if (outcome.correct) {
      feedback("correct");
      const nextSolved = [...solved, { gymnast, score: outcome.score, clues: clueNumber }];
      setSolved(nextSolved);
      setSave(current => ({ ...current, hall: addToHall(current.hall || [], gymnast, outcome.score, gymnast.game.power.key, todayKey) }));
      setMessage(t("gymnastOfDay.correct"));
      if (outcome.exhausted) finishSession(nextSolved); else { setPhase("reveal"); window.setTimeout(() => focusHeading.current?.focus(), 60); }
      return;
    }
    feedback("wrong"); setWrongIds(ids => [...ids, id]); setMessage(t("gymnastOfDay.wrong"));
    if (outcome.exhausted) finishSession(solved);
  };
  const nextRound = () => {
    if (round >= daily.length - 1) { finishSession(solved); return; }
    setRound(value => value + 1); setClueNumber(1); setWrongIds([]); setMessage(""); setPhase("clues");
  };
  const share = async () => {
    const text = buildShareText({ score: sessionScore(solved), solvedCount: solved.length, attemptsUsed: attempts, streak: save.streak?.count || 1, locale });
    if (navigator.share) { try { await navigator.share({ text }); return; } catch { /* clipboard fallback */ } }
    await navigator.clipboard?.writeText(text); setMessage(t("gymnastOfDay.copied"));
  };

  if (daily.length < 5) return <main className="gotd-shell"><header className="gotd-nav"><strong>PRFCT10 PLAY</strong><button onClick={onBackToPlay}>← {t("gymnastOfDay.back")}</button></header><p className="gotd-empty">{t("gymnastOfDay.unavailable")}</p></main>;
  const solvedById = Object.fromEntries(solved.map(item => [item.gymnast.id, item]));

  return <main className={`gotd-shell gotd-palette--${["violet", "gold", "aqua", "blue", "coral"][round % 5]}`}>
    <header className="gotd-nav"><div><strong>PRFCT10</strong><span>PLAY</span></div><div className="gotd-mission-counter"><b>{t("gymnastOfDay.found", { count: solved.length })}</b><b>{t("gymnastOfDay.attempts", { count: attempts })}</b></div><button type="button" onClick={onBackToPlay}>← {t("gymnastOfDay.back")}</button></header>
    <div className="gotd-marquee" aria-hidden="true"><span>{t("gymnastOfDay.marquee")} ✦ {t("gymnastOfDay.marquee")} ✦</span></div>
    {phase === "intro" && <section className="gotd-intro" aria-labelledby="gotd-title"><div className="gotd-intro__copy"><p>{t("gymnastOfDay.eyebrow")}</p><h1 id="gotd-title"><span>{t("gymnastOfDay.title")}</span><em>{t("gymnastOfDay.locked")}</em></h1><p>{t("gymnastOfDay.introFive")}</p><div className="gotd-rules"><strong>5</strong><span>{t("gymnastOfDay.files")}</span><i>/</i><strong>10</strong><span>{t("gymnastOfDay.tries")}</span></div><button className="gotd-primary" type="button" onClick={() => setPhase("clues")}>{t("gymnastOfDay.start")} <b>→</b></button></div><GymnastSilhouetteArt apparatus={gymnast.classification.featuredEvents[0]?.toLowerCase() || "floor"} stage={1} label={t("gymnastOfDay.mysteryArt")} /><fieldset className="gotd-settings"><legend>{t("gymnastOfDay.settings")}</legend><small>{t("gymnastOfDay.optional")}</small>{["sound", "vibration", "timer"].map(id => <label key={id}><input type="checkbox" checked={settings[id]} onChange={event => setSettings(value => ({ ...value, [id]: event.target.checked }))} /><span>{t(`gymnastOfDay.${id}`)}</span></label>)}</fieldset></section>}
    {phase === "clues" && <section className="gotd-game" aria-labelledby="gotd-locked-title"><div className="gotd-dossier"><div className="gotd-dossier__top"><p>{t("gymnastOfDay.fileProgress", { current: round + 1 })} · {t("gymnastOfDay.clue", { number: clueNumber })}</p><strong>{t("gymnastOfDay.score", { score })}</strong>{settings.timer && <time>{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</time>}</div><div className="gotd-progress" aria-label={t("gymnastOfDay.progress")}>{[1, 2, 3].map(number => <i key={number} className={number <= clueNumber ? "is-on" : ""} />)}</div><GymnastSilhouetteArt apparatus={gymnast.classification.featuredEvents[0]?.toLowerCase() || "floor"} stage={clueNumber} label={t("gymnastOfDay.mysteryArt")} /><h1 id="gotd-locked-title">{t("gymnastOfDay.locked")}</h1><div className="gotd-clues" aria-live="polite">{gymnast.game.clues[locale].slice(0, clueNumber).map((clue, index) => <article key={clue}><span>0{index + 1}</span><p>{clue}</p></article>)}</div></div><aside className="gotd-guess"><p>{t("gymnastOfDay.attemptsLeft", { count: DAILY_ATTEMPT_LIMIT - attempts })}</p><h2>{t("gymnastOfDay.choose")}</h2><div className="gotd-answers" aria-label={t("gymnastOfDay.answers")}>{answerRecords.map(option => <button key={option.id} type="button" disabled={wrongIds.includes(option.id)} onClick={() => guess(option.id)}><strong>{option.identity.visibleName}</strong></button>)}</div><p className="gotd-feedback" aria-live="polite">{message}</p></aside></section>}
    {phase === "reveal" && <section className="gotd-reveal gotd-round-reveal" aria-labelledby="gotd-reveal-name"><div className="gotd-reveal__hero"><div><p>{t("gymnastOfDay.reveal")} · {round + 1}/5</p><h1 id="gotd-reveal-name" ref={focusHeading} tabIndex={-1}>{gymnast.identity.visibleName}</h1><span>{t(`gymnastOfDay.countries.${gymnast.featuredMoment.representedDelegation}`)} · {gymnast.featuredMoment.representedDelegation}</span><strong>{t("gymnastOfDay.score", { score: solved.at(-1)?.score || score })}</strong></div><GymnastSilhouetteArt apparatus={gymnast.classification.featuredEvents[0]?.toLowerCase() || "floor"} stage={3} revealed label={gymnast.assets.alt[locale]} /></div><div className="gotd-story"><article><p>{t("gymnastOfDay.signature")}</p><h2>{gymnast.game.revealTitle[locale]}</h2><strong>{gymnast.featuredMoment.verifiedResult[locale]}</strong></article><article><p>{t("gymnastOfDay.story")}</p><span>{gymnast.game.revealStory[locale]}</span><small>{gymnast.game.power.label[locale]} — {gymnast.game.power.message[locale]} {t("gymnastOfDay.editorialPower")}</small><a href={gymnast.sources[0].url} target="_blank" rel="noreferrer">{t("gymnastOfDay.source")} ↗</a></article></div><div className="gotd-next"><button className="gotd-primary" onClick={nextRound}>{round === 4 ? t("gymnastOfDay.seeResults") : t("gymnastOfDay.nextGymnast")} →</button></div></section>}
    {phase === "final" && <section className="gotd-final" aria-labelledby="gotd-final-title"><p>{solved.length === 5 ? t("gymnastOfDay.missionComplete") : t("gymnastOfDay.missionOver")}</p><h1 id="gotd-final-title" ref={focusHeading} tabIndex={-1}>{t("gymnastOfDay.finalTitle", { count: solved.length })}</h1><div className="gotd-final__score"><strong>{sessionScore(solved)}</strong><span>{t("gymnastOfDay.pointsShort")}</span><i>{attempts}/10</i></div><div className="gotd-final__cards">{daily.map(item => { const entry = solvedById[item.id]; return <article key={item.id} className={entry ? "is-solved" : "is-revealed"}><i>{entry ? "✦" : "◇"}</i><span>{item.featuredMoment.representedDelegation}</span><strong>{item.identity.visibleName}</strong><small>{entry ? `${item.game.power.label[locale]} · ${entry.score} ${t("gymnastOfDay.pointsShort")}` : t("gymnastOfDay.noPoints")}</small></article>; })}</div><p className="gotd-feedback" aria-live="polite">{message}</p><div className="gotd-finish"><div><span>{save.streak?.count || 1}</span><p>{t("gymnastOfDay.streak")}</p></div><button className="gotd-primary" onClick={share}>{t("gymnastOfDay.share")}</button><button className="gotd-text-button" onClick={() => setCollectionOpen(true)}>{t("gymnastOfDay.collection")}</button></div></section>}
    {collectionOpen && <div className="gotd-modal" role="dialog" aria-modal="true" aria-labelledby="gotd-hall-title"><section><button type="button" onClick={() => setCollectionOpen(false)} aria-label={t("gymnastOfDay.closeCollection")}>×</button><p>PRFCT10 / 004</p><h2 id="gotd-hall-title">{t("gymnastOfDay.hall")}</h2><div className="gotd-hall">{(save.hall || []).length ? (save.hall || []).map(item => <article key={item.gymnastId}><i>✦</i><strong>{item.name}</strong><span>{item.country} · {item.powerId}</span><small>{t("gymnastOfDay.best")} {item.bestScore}</small></article>) : <p>{t("gymnastOfDay.hallEmpty")}</p>}</div></section></div>}
  </main>;
}
