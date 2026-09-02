import { CHAOS_CARDS, DARES, TRUTHS } from "./truthOrDareContent.js";

export const APPARATUS_CODES = ["FX", "BB", "UB", "VT", "AA", "10"];

export function chooseSessionCard({ type, intensity, recent = [], random = Math.random }) {
  const fullSource = type === "truth" ? TRUTHS : type === "dare" ? DARES : CHAOS_CARDS;
  const intensitySource = type === "dare" && intensity ? fullSource.filter(card => card.intensity === intensity) : fullSource;
  const source = intensitySource.length ? intensitySource : fullSource;
  const recentIds = new Set(recent.slice(-12).map(item => item.id));
  const recentCategories = new Set(recent.slice(-2).map(item => item.category));
  const unused = source.filter(card => !recentIds.has(card.id));
  let candidates = unused.filter(card => !recentCategories.has(card.category));
  if (!candidates.length) candidates = unused;
  if (!candidates.length) candidates = source;
  return candidates[Math.floor(random() * candidates.length)];
}

export function shufflePlayers(players, random = Math.random) {
  const next = [...players];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [next[index], next[target]] = [next[target], next[index]];
  }
  return next;
}

export function shouldOfferChaos(round) {
  return round > 0 && round % 4 === 0;
}
