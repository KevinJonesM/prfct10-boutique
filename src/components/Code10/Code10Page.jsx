import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { loadCode10Bank } from "../../data/code10/loadBank";
import { selectVerifiedChallenge, selectDevelopmentChallenge, createGame, gameReducer } from "./engine.js";
import Code10VintageScoreboard from "./Code10VintageScoreboard";
import Code10Builder from "./Code10Builder";
import Code10Question from "./Code10Question";
import Code10Result from "./Code10Result";
import "./Code10.css";
import { configLabels, hasSpanishQuestion } from "./presentation.js";

const RECENT_KEY = "prfct10-code10:last-question-ids";
function readRecent() {
  try { const value = JSON.parse(sessionStorage.getItem(RECENT_KEY) || "[]"); return Array.isArray(value) ? value.filter(id=>typeof id==="string").slice(-10) : []; } catch { return []; }
}
export default function Code10Page({ onBackToPlay }) {
  const { t, locale } = useI18n();
  const [screen, setScreen] = useState("hero");
  const [config, setConfig] = useState({ program:"XCEL", division:"GOLD", category:"MIX" });
  const [game, setGame] = useState(null);
  const [problem, setProblem] = useState("");
  const [busy, setBusy] = useState(false);
  const [dev] = useState(()=>import.meta.env.DEV && new URLSearchParams(window.location.search).get("code10Dev")==="1");
  const recent = useRef(readRecent());
  const mounted = useRef(true);
  const starting = useRef(false);
  const root = useRef(null);
  const labels = configLabels(config,t);
  useEffect(()=>{ mounted.current=true; return ()=>{mounted.current=false;}; },[]);
  useEffect(()=>{
    const target = root.current?.querySelector("[data-c10-focus]");
    target?.focus({preventScroll:true});
    root.current?.scrollIntoView({ block:"start", behavior:"instant" });
  },[screen,game?.index]);
  async function start(nextConfig) {
    if(starting.current) return;
    starting.current=true; setBusy(true); setProblem("");
    try {
      const bank = await loadCode10Bank(dev);
      if(!mounted.current) return;
      const selector = bank.development ? selectDevelopmentChallenge : selectVerifiedChallenge;
      const selected = selector(bank.questions,nextConfig,{recentIds:recent.current});
      setConfig(nextConfig);
      if(!selected.ok) { setProblem("empty"); setScreen("empty"); return; }
      recent.current=selected.questions.map(q=>q.id);
      try { sessionStorage.setItem(RECENT_KEY,JSON.stringify(recent.current)); } catch { /* Play remains available without storage. */ }
      setGame(createGame(selected.questions)); setScreen("game");
    } catch { if(mounted.current) { setProblem("error"); setScreen("empty"); } }
    finally { starting.current=false; if(mounted.current) setBusy(false); }
  }
  function dispatch(action) {
    setGame(current=>gameReducer(current,action));
  }
  useEffect(()=>{if(game?.complete) setScreen("result");},[game?.complete]);
  return <main ref={root} className="c10-shell">
    <nav className="c10-nav" aria-label="CODE 10"><div className="c10-brand"><span>PRFCT10</span><button onClick={onBackToPlay}>PLAY</button><b>CODE 10</b></div><button className="c10-link" onClick={onBackToPlay}>← {t("code10.backPlay")}</button></nav>
    {dev && <p className="c10-dev" role="note">{t("code10.dev")}</p>}
    {screen==="hero" && <header className="c10-hero">
      <div className="c10-hero__copy"><p className="c10-kicker">{t("code10.heroEyebrow")} / VOL. 01</p>
      <h1 tabIndex="-1" data-c10-focus><span>{t("code10.heroA")}</span><em>{t("code10.heroB")}</em></h1>
      <p className="c10-lede">{t("code10.intro")}</p>
      <div className="c10-actions"><button className="c10-button" onClick={()=>setScreen("builder")}>{t("code10.start")} ↗</button><button className="c10-link" onClick={()=>setScreen("builder")}>{t("code10.build")}</button></div>
      <p className="c10-kicker c10-hero__note">{t("code10.heroNote")}</p></div>
      <div className="c10-hero__graphic"><div className="c10-registration" aria-hidden="true"><span>{t("code10.entry")} / 001</span><b>10</b><span>CODE 10 · PRFCT10 PLAY</span></div><Code10VintageScoreboard score={10000} size="compact" /><span className="c10-edition">Xcel / 01—10</span></div>
    </header>}
    {screen==="builder" && <><Code10Builder config={config} onChange={setConfig} onStart={start} busy={busy} dev={dev}/><button className="c10-link" onClick={()=>setScreen("hero")}>← {t("code10.back")}</button></>}
    {screen==="empty" && <section className="c10-empty"><span className="c10-empty__number" aria-hidden="true">10</span><p className="c10-kicker">CODE 10 / {labels.program} {labels.division}</p><h1 tabIndex="-1" data-c10-focus>{t("code10."+problem)}</h1><p>{t("code10.emptyText")}</p><button className="c10-button" onClick={()=>setScreen("builder")}>{t("code10.retry")} ↗</button></section>}
    {screen==="game" && game && <><p className="c10-kicker c10-game-label">{labels.program} {labels.division} · {labels.categoryLabel}</p>{locale==="es" && !hasSpanishQuestion(game.questions[game.index]) && <p className="c10-note">{t("code10.english")}</p>}<Code10Question game={game} dispatch={dispatch}/></>}
    {screen==="result" && game && <Code10Result game={game} config={config} onReplay={start} onConfigure={()=>setScreen("builder")} dev={dev}/>}
    <footer className="c10-footer"><span>PRFCT10 PLAY / CODE 10</span><span>{t("code10.heroNote")}</span><b>10.000</b></footer>
  </main>;
}
