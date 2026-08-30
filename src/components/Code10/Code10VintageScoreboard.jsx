import { useEffect, useState } from "react";
import { scoreboardMarkup } from "./scoreboard.js";
export default function Code10VintageScoreboard({ score = 10000, rawScore = 10, maxScore = 10, size = "hero", animate = false }) {
  const [shown, setShown] = useState(animate ? 10000 : score);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    const stop = () => { clearInterval(timer); setShown(score); };
    if (!animate || preference.matches || score === 10000) { stop(); return; }
    let current = 10000;
    setShown(current);
    timer = setInterval(() => { current = Math.max(score, current - 100); setShown(current); if (current === score) clearInterval(timer); }, 1000 / Math.max(1, (10000-score)/100));
    preference.addEventListener("change", stop);
    return () => { clearInterval(timer); preference.removeEventListener("change", stop); };
  }, [score, animate]);
  const board = scoreboardMarkup(shown);
  return <div className={"c10-scoreboard c10-scoreboard--" + size} role="img" aria-label={score + " · " + rawScore + " / " + maxScore}>
    <svg key={shown} className={animate ? "c10-scoreboard__animated" : ""} aria-hidden="true" viewBox={`0 0 ${board.width} ${board.height}`} xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: board.body }} />
  </div>;
}
