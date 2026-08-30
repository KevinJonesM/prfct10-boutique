import { QUESTION_COUNT, DIFFICULTY_TARGETS, QUICK_TARGETS, RESULT_LABELS, PROGRAMS, CATEGORIES, DIVISIONS } from "./config.js";
import { belongsToCuratedChallenge } from "../../data/code10/challengeMembership.js";

export function getCode10Score(rawScore) {
  if (!Number.isInteger(rawScore) || rawScore < 0 || rawScore > 10) throw new RangeError("rawScore must be an integer from 0 to 10");
  const incorrectAnswers = 10 - rawScore;
  const vintageDisplayScore = 9000 + rawScore * 100;
  return { rawScore, incorrectAnswers, gymnasticsScore: vintageDisplayScore / 1000, formattedScore: (vintageDisplayScore / 1000).toFixed(3), vintageDisplayScore, accuracy: rawScore * 10, labelKey: RESULT_LABELS[rawScore] };
}

export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const apparatusNames = { VT:"VAULT", UB:"BARS", BB:"BEAM", FX:"FLOOR", VAULT:"VAULT", BARS:"BARS", BEAM:"BEAM", FLOOR:"FLOOR", GENERAL:"GENERAL" };
export function questionApparatus(q) {
  const values = Array.isArray(q?.apparatus) ? q.apparatus : [q?.apparatus];
  return [...new Set(values.map(value => Object.hasOwn(apparatusNames,value) ? apparatusNames[value] : null))];
}
export function isUsableQuestion(q) {
  return !!q && typeof q.id === "string" && !!q.id.trim() &&
    PROGRAMS.includes(q.program) && Array.isArray(q.divisions) &&
    Object.hasOwn(DIFFICULTY_TARGETS, q.difficulty) && questionApparatus(q).length > 0 && questionApparatus(q).every(Boolean) &&
    [q.question_en || q.question, q.explanation_en || q.explanation, q.takeaway_en || q.takeaway].every(v => typeof v === "string" && v.trim()) &&
    Array.isArray(q.options) && q.options.length >= 2 && q.options.length <= 4 &&
    q.options.every(o => typeof o.id === "string" && o.id && typeof (o.text_en || o.text) === "string" && (o.text_en || o.text).trim()) &&
    new Set(q.options.map(o => o.id)).size === q.options.length && q.options.some(o => o.id === q.correctOptionId);
}

function eligible(bank, config, status) {
  if (!PROGRAMS.includes(config.program) || !CATEGORIES.includes(config.category) || !config.division ||
      (config.program === "XCEL" && !DIVISIONS.includes(config.division))) return [];
  // Reject ALL copies of duplicate IDs instead of allowing an ambiguous answer.
  const counts = new Map();
  bank.forEach(q => counts.set(q?.id, (counts.get(q?.id) || 0) + 1));
  return bank.filter(q => isUsableQuestion(q) && counts.get(q.id) === 1 && q.verification?.status === status &&
    q.program === config.program && q.divisions.includes(config.division) &&
    (config.category === "MIX" || questionApparatus(q).includes(config.category) || q.category === config.category || q.format === config.category || q.tags?.includes(config.category) || belongsToCuratedChallenge(q, config.category)));
}

// Shared rules remain one question, never cloned once per apparatus.
const bucket = q => q.category === "COMPETITION_SMART" ? "COMPETITION_SMART" : questionApparatus(q).length === 1 ? questionApparatus(q)[0] : "GENERAL";
function compose(pool, config, random, targets, quickTargets) {
  if (pool.length < QUESTION_COUNT || Object.entries(targets).some(([tier, n]) => pool.filter(q => q.difficulty === tier).length < n)) return null;
  const shuffled = shuffle(pool, random);
  if (config.category === "MIX") {
    const slots = Object.entries(quickTargets).flatMap(([key, n]) => Array(n).fill(key));
    const remaining = { ...targets };
    function allocate(index, selected) {
      if (index === slots.length) return selected;
      for (const tier of Object.keys(remaining).filter(key => remaining[key] > 0)) {
        const q = shuffled.find(q => bucket(q) === slots[index] && q.difficulty === tier && !selected.includes(q));
        if (!q) continue;
        remaining[tier]--;
        const found = allocate(index + 1, [...selected, q]);
        remaining[tier]++;
        if (found) return found;
      }
      return null;
    }
    const balanced = allocate(0, []);
    if (balanced) return shuffle(balanced, random);
  }
  // Sparse banks retain exact difficulty quotas; category exposure is weighted
  // toward the least-used bucket when the ideal Quick 10 matrix is unavailable.
  const result = [];
  const exposure = {};
  for (const [tier, total] of Object.entries(targets)) {
    for (let n = 0; n < total; n++) {
      const q = shuffled.filter(q => q.difficulty === tier && !result.includes(q))
        .sort((a, b) => (exposure[bucket(a)] || 0) - (exposure[bucket(b)] || 0))[0];
      result.push(q);
      exposure[bucket(q)] = (exposure[bucket(q)] || 0) + 1;
    }
  }
  return shuffle(result, random);
}

function select(bank, config, status, { recentIds = [], random = Math.random, difficultyTargets = DIFFICULTY_TARGETS, quickTargets = QUICK_TARGETS } = {}) {
  if (Object.values(difficultyTargets).reduce((a, b) => a + b, 0) !== 10 ||
      Object.values(quickTargets).reduce((a, b) => a + b, 0) !== 10) throw new Error("A challenge must contain exactly 10 questions");
  const pool = eligible(bank, config, status);
  const fresh = pool.filter(q => !recentIds.includes(q.id));
  const selected = compose(fresh, config, random, difficultyTargets, quickTargets) || compose(pool, config, random, difficultyTargets, quickTargets);
  if (!selected) return { ok: false, count: pool.length, reason: pool.length < 10 ? "INSUFFICIENT_CONTENT" : "INSUFFICIENT_VARIETY" };
  return { ok: true, questions: selected.map(q => ({ ...q, options: shuffle(q.options, random) })) };
}

// The production selector has no dev-mode switch and NEVER relaxes verification.
export function selectVerifiedChallenge(bank, config, options) { return select(bank, config, "VERIFIED", options); }
export function selectDevelopmentChallenge(bank, config, options) { return select(bank, config, "DEV_ONLY", options); }

export function createGame(questions) {
  if (questions.length !== 10 || new Set(questions.map(q => q.id)).size !== 10 || !questions.every(isUsableQuestion)) throw new Error("Ten valid, unique questions required");
  return { questions, answers: [], index: 0, complete: false };
}
export function gameReducer(state, action) {
  if (action.type === "answer") {
    if (state.complete || state.answers[state.index] || !state.questions[state.index].options.some(o => o.id === action.optionId)) return state;
    const q = state.questions[state.index];
    return { ...state, answers: [...state.answers, { questionId: q.id, optionId: action.optionId, correct: q.correctOptionId === action.optionId }] };
  }
  if (action.type === "next" && state.answers[state.index] && !state.complete) {
    return state.index === 9 ? { ...state, complete: true } : { ...state, index: state.index + 1 };
  }
  return state;
}
export function getLiveScore(answers) {
  return getCode10Score(10 - answers.filter(a => !a.correct).length);
}
export function getGameResult(game) {
  if (!game.complete || game.answers.length !== 10) throw new Error("Cannot score an unfinished challenge");
  return getCode10Score(game.answers.filter(a => a.correct).length);
}
export function questionText(q, field, locale) { return q[field + "_" + locale] || q[field + "_en"] || q[field]; }
