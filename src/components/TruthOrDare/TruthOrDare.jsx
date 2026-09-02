import { useEffect, useMemo, useState } from "react";
import { MICRO_REACTIONS } from "./truthOrDareContent";
import { APPARATUS_CODES, chooseSessionCard, shouldOfferChaos, shufflePlayers } from "./truthOrDareEngine";
import "./TruthOrDare.css";

const initialPlayers = [
  { id: "player-1", name: "MIA", code: "FX", swaps: 2, score: 0 },
  { id: "player-2", name: "SOFIA", code: "BB", swaps: 2, score: 0 }
];

const TRUTH_PENANCES = [
  "Give the team your most dramatic runway entrance.",
  "Deliver a ten-second acceptance speech for surviving practice.",
  "Invent a ridiculous name for a new gymnastics skill.",
  "Do your best slow-motion competition salute.",
  "Narrate your next sip of water like a championship final.",
  "Give every player a one-word hype nickname.",
  "Pose for an imaginary magazine cover for five seconds.",
  "Sing one line about chalk like it is a pop anthem.",
  "Act out the face you make when coach says ‘one more.’",
  "Create a three-move, floor-safe victory dance.",
  "Speak like a sports commentator until your next turn.",
  "Make a luxury commercial for the nearest water bottle."
];

const POINTS = { truth: 100, dare: 150, chaos: 200, penance: 50 };

export default function TruthOrDare({ onBackToPlay }) {
  const [phase, setPhase] = useState("intro");
  const [players, setPlayers] = useState(initialPlayers);
  const [draftName, setDraftName] = useState("");
  const [limit, setLimit] = useState(10);
  const [turn, setTurn] = useState(0);
  const [round, setRound] = useState(0);
  const [recent, setRecent] = useState([]);
  const [card, setCard] = useState(null);
  const [reaction, setReaction] = useState("");
  const [stats, setStats] = useState({ truth: 0, dare: 0, chaos: 0 });
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [penance, setPenance] = useState("");
  const currentPlayer = players[turn % players.length];
  const chaosTurn = shouldOfferChaos(round);

  useEffect(() => {
    if (!timerRunning || timeLeft === null || timeLeft <= 0) return undefined;
    const timer = window.setTimeout(() => setTimeLeft(value => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [timerRunning, timeLeft]);

  const swaps = useMemo(() => "•".repeat(currentPlayer?.swaps || 0) || "—", [currentPlayer]);
  const addPlayer = () => {
    const name = draftName.trim().slice(0, 18).toUpperCase();
    if (!name || players.length >= 8) return;
    setPlayers(items => [...items, { id: `player-${Date.now()}`, name, code: APPARATUS_CODES[items.length % APPARATUS_CODES.length], swaps: 2, score: 0 }]);
    setDraftName("");
  };
  const reveal = (type, intensity = null) => {
    const next = chooseSessionCard({ type, intensity, recent });
    setCard(next);
    setRecent(items => [...items, { id: next.id, category: next.category, type: next.type }].slice(-14));
    setReaction("");
    setTimeLeft(next.timer);
    setTimerRunning(false);
    setPhase("card");
  };
  const choose = type => type === "dare" ? setPhase("intensity") : reveal(type);
  const replace = consumeSwap => {
    if (consumeSwap && currentPlayer.swaps < 1) return;
    if (consumeSwap) setPlayers(items => items.map((player, index) => index === turn % items.length ? { ...player, swaps: player.swaps - 1 } : player));
    reveal(card.type, card.intensity);
  };
  const decline = consumeSwap => {
    if (consumeSwap && currentPlayer.swaps < 1) return;
    if (consumeSwap) setPlayers(items => items.map((player, index) => index === turn % items.length ? { ...player, swaps: player.swaps - 1 } : player));
    if (card.type !== "truth") { replace(false); return; }
    setPenance(TRUTH_PENANCES[(round * 5 + recent.length) % TRUTH_PENANCES.length]);
    setPhase("penance");
  };
  const complete = () => {
    setStats(value => ({ ...value, [card.type]: value[card.type] + 1 }));
    setPlayers(items => items.map((player, index) => index === turn % items.length ? { ...player, score: player.score + POINTS[card.type] } : player));
    setReaction(card.completionText || MICRO_REACTIONS[(round * 7 + card.id.length) % MICRO_REACTIONS.length]);
    setTimerRunning(false);
    setPhase("reaction");
  };
  const completePenance = () => {
    setPlayers(items => items.map((player, index) => index === turn % items.length ? { ...player, score: player.score + POINTS.penance } : player));
    setReaction("BOUNDARY KEPT. PENANCE SERVED. +50");
    setPhase("reaction");
  };
  const passPhone = () => {
    const nextRound = round + 1;
    if (Number.isFinite(limit) && nextRound >= limit) { setPhase("end"); return; }
    setTurn(index => (index + 1) % players.length);
    setRound(nextRound);
    setCard(null);
    setReaction("");
    setPhase("pass");
  };
  const closeSession = () => { setTimerRunning(false); setPhase("end"); };
  const reset = () => { setPlayers(items => items.map(player => ({ ...player, swaps: 2, score: 0 }))); setTurn(0); setRound(0); setRecent([]); setCard(null); setReaction(""); setPenance(""); setTimeLeft(null); setTimerRunning(false); setStats({ truth: 0, dare: 0, chaos: 0 }); setPhase("turn"); };

  return (
    <main className={`tod-shell tod-phase--${phase}`}>
      <header className="tod-nav"><span>PRFCT10 <b>PLAY</b></span><div><small>ONE PHONE MODE</small><button type="button" onClick={onBackToPlay}>← BACK TO PLAY</button></div></header>
      {phase === "intro" && <section className="tod-opening">
        <div className="tod-locker-wall" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="tod-opening__copy"><p>PRFCT10 PLAY</p><h1><span>TRUTH</span><em>OR</em><span>DARE</span></h1><strong>GYMNASTICS EDITION</strong><div className="tod-tapes"><b>NO SCORES</b><b>NO JUDGES</b><b>JUST YOUR TEAM</b></div><p>No scores. No judges. Just your team.</p><button className="tod-primary" onClick={() => setPhase("setup")}>OPEN THE LOCKER ROOM <b>→</b></button></div>
      </section>}

      {phase === "setup" && <section className="tod-panel tod-setup"><p className="tod-kicker">PLAYER SETUP / LOCAL ONLY</p><h1>WHO’S IN THE<br />LOCKER ROOM?</h1><div className="tod-player-list">{players.map((player, index) => <label key={player.id}><span>{String(index + 1).padStart(2, "0")}</span><input aria-label={`Player ${index + 1} name`} value={player.name} onChange={event => setPlayers(items => items.map(item => item.id === player.id ? { ...item, name: event.target.value.toUpperCase().slice(0, 18) } : item))} /><select aria-label={`${player.name} apparatus code`} value={player.code} onChange={event => setPlayers(items => items.map(item => item.id === player.id ? { ...item, code: event.target.value } : item))}>{APPARATUS_CODES.map(code => <option key={code}>{code}</option>)}</select><button type="button" disabled={players.length <= 2} onClick={() => setPlayers(items => items.filter(item => item.id !== player.id))}>×</button></label>)}</div><div className="tod-add"><input value={draftName} placeholder="ADD A NAME" maxLength={18} onChange={event => setDraftName(event.target.value)} onKeyDown={event => { if (event.key === "Enter") addPlayer(); }} /><button type="button" onClick={addPlayer} disabled={players.length >= 8}>＋ ADD</button></div><div className="tod-setup__actions"><button type="button" onClick={() => setPlayers(items => shufflePlayers(items))}>SHUFFLE ORDER</button><button className="tod-primary" type="button" disabled={players.some(player => !player.name.trim())} onClick={() => setPhase("length")}>LOCK THEM IN →</button></div><small>2–8 players · First names or nicknames only · Nothing is recorded.</small></section>}

      {phase === "length" && <section className="tod-panel tod-length"><p className="tod-kicker">SESSION TAG / 001</p><h1>HOW LONG ARE<br />WE PLAYING?</h1><div>{[{ label: "QUICK", sub: "10 CARDS", value: 10 }, { label: "TEAM NIGHT", sub: "20 CARDS", value: 20 }, { label: "FULL OUT", sub: "UNTIL THE GROUP STOPS", value: Infinity }].map(option => <button key={option.label} onClick={() => { setLimit(option.value); setPhase("turn"); }}><span>{option.sub}</span><strong>{option.label}</strong><b>OPEN →</b></button>)}</div><small>Cards, not minutes. Every round moves differently.</small></section>}

      {(phase === "turn" || phase === "pass") && <section className="tod-turn">
        <div className="tod-active-locker"><span>{currentPlayer.code}</span><small>{phase === "pass" ? "PASS THE PHONE TO" : "CURRENT LOCKER"}</small><h1>{currentPlayer.name}{phase === "turn" ? "’S TURN" : ""}</h1><p>SWAPS {swaps} · {currentPlayer.score} PTS</p></div>
        {phase === "pass" ? <button className="tod-primary" onClick={() => setPhase("turn")}>I HAVE THE PHONE →</button> : <><div className={`tod-doors${chaosTurn ? " has-chaos" : ""}`}><button className="tod-door tod-door--truth" onClick={() => choose("truth")}><small>OPEN CAREFULLY</small><strong>TRUTH</strong><span>PRIVATE / HONEST / FUNNY</span></button><button className="tod-door tod-door--dare" onClick={() => choose("dare")}><small>YOU ASKED FOR THIS</small><strong>DARE</strong><span>ACTION / PERFORMANCE / CHAOS</span></button>{chaosTurn && <button className="tod-door tod-door--chaos" onClick={() => reveal("chaos")}><small>LOCKER INTERRUPT</small><strong>CHAOS</strong><span>EVERYONE IS INVOLVED</span></button>}</div><p className="tod-safe">KEEP IT FLOOR-SAFE. NO FLIPS. NO FURNITURE SKILLS.</p><button className="tod-end-session" type="button" onClick={closeSession}>CLOSE SESSION</button></>}
      </section>}

      {phase === "intensity" && <section className="tod-panel tod-intensity"><p className="tod-kicker">DARE SETTING</p><h1>HOW MUCH<br />ENERGY?</h1><div>{[["CHILL", "TALKING / ACTING / LIGHT"], ["CHAOS", "LOUDER / FUNNIER / BOLDER"], ["TEAM", "EVERYONE PARTICIPATES"]].map(([name, detail]) => <button key={name} onClick={() => reveal("dare", name.toLowerCase())}><strong>{name}</strong><span>{detail}</span></button>)}</div><button className="tod-text" onClick={() => setPhase("turn")}>← BACK TO THE DOORS</button></section>}

      {(phase === "card" || phase === "reaction") && card && <section className={`tod-card-stage tod-card-stage--${card.type}`}><div className="tod-card"><header><span>{card.type === "chaos" ? "LOCKER INTERRUPT" : `${currentPlayer.name} — ${currentPlayer.code}`}</span><b>{card.id.toUpperCase()}</b></header><p>{card.type === "truth" ? "WAIT… BE HONEST." : card.type === "chaos" ? card.title : card.category.replaceAll("_", " ")}</p><h1>{card.prompt}</h1>{card.timer && <div className="tod-timer"><strong>{timeLeft}</strong><span>SEC</span>{phase === "card" && <button onClick={() => setTimerRunning(true)} disabled={timerRunning}>{timerRunning ? "TIMER RUNNING" : `START ${card.timer} SEC`}</button>}</div>}<footer>{card.type.toUpperCase()} = +{POINTS[card.type]} PTS · WHAT HAPPENS IN THE LOCKER ROOM STAYS WITH THE TEAM.</footer></div>{phase === "card" ? <div className="tod-card-actions"><button className="tod-primary" onClick={complete}>{card.type === "truth" ? "I SAID IT" : card.type === "chaos" ? "ACCEPT THE CHAOS" : "DID IT"} +{POINTS[card.type]} →</button><button disabled={currentPlayer.swaps < 1} onClick={() => card.type === "truth" ? decline(true) : replace(true)}>SWAP IT {swaps}</button><button onClick={() => card.type === "truth" ? decline(false) : replace(false)}>NOT FOR ME</button></div> : <div className="tod-reaction"><p>{reaction}</p><button className="tod-primary" onClick={passPhone}>PASS THE PHONE →</button></div>}<p className="tod-safe">KEEP IT FLOOR-SAFE. NO FLIPS. NO FURNITURE SKILLS.</p><button className="tod-end-session" type="button" onClick={closeSession}>CLOSE SESSION</button></section>}

      {phase === "penance" && <section className="tod-card-stage tod-card-stage--penance"><div className="tod-card tod-penance-card"><header><span>{currentPlayer.name} — TRUTH PASSED</span><b>SAFE PENANCE</b></header><p>THE LOCKER HAS SPOKEN.</p><h1>{penance}</h1><footer>COMPLETE IT TO RECOVER +{POINTS.penance} PTS. YOU MAY ALWAYS STOP IF UNCOMFORTABLE.</footer></div><div className="tod-card-actions"><button className="tod-primary" onClick={completePenance}>PENANCE SERVED +{POINTS.penance} →</button></div><p className="tod-safe">SILLY, SOCIAL, AND FLOOR-SAFE. NEVER PHYSICAL RISK.</p><button className="tod-end-session" type="button" onClick={closeSession}>CLOSE SESSION</button></section>}

      {phase === "end" && <section className="tod-panel tod-end"><p className="tod-kicker">SESSION COMPLETE</p><h1>LOCKER ROOM<br />CLOSED.</h1><div className="tod-scoreboard">{[...players].sort((a, b) => b.score - a.score).map((player, index) => <p key={player.id}><span>{String(index + 1).padStart(2, "0")} · {player.name}</span><strong>{player.score} PTS</strong></p>)}</div><div><p><strong>{stats.truth}</strong> TRUTHS SPILLED</p><p><strong>{stats.dare}</strong> DARES SURVIVED</p><p><strong>{stats.chaos}</strong> CHAOS CARDS CAUSED PROBLEMS</p></div><small>POINTS MEASURE PARTICIPATION, NOT TALENT. NO JUDGES WERE CONSULTED.</small><nav><button className="tod-primary" onClick={reset}>RUN IT BACK →</button><button onClick={onBackToPlay}>BACK TO PLAY</button></nav></section>}
    </main>
  );
}
