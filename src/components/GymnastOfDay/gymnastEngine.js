export const GYMNAST_DATA_VERSION = "2.0.0";
export const DAILY_TIME_ZONE = "America/New_York";
export const DAILY_GYMNAST_COUNT = 5;
export const DAILY_ATTEMPT_LIMIT = 10;
export const DAILY_MISSIONS = [
  ["GYM-001","GYM-005","GYM-009","GYM-004","GYM-008"],
  ["GYM-002","GYM-006","GYM-003","GYM-007","GYM-010"]
];
const HOME_PAGES = new Set(["https://www.gymnastics.sport", "https://gymnastics.sport", "https://olympics.com"]);

export function getEasternDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: DAILY_TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date).reduce((all, part) => ({ ...all, [part.type]: part.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}
export function dayNumber(dateKey) { return Math.floor(Date.parse(`${dateKey}T12:00:00Z`) / 86400000); }
export function getPublishableGymnasts(records) { return records.filter(record => record.review?.publishable && validateGymnast(record).valid); }
export function selectDailyGymnasts(records, date = new Date(), count = DAILY_GYMNAST_COUNT) {
  const pool = getPublishableGymnasts(records).sort((a, b) => a.id.localeCompare(b.id));
  if (!pool.length) return [];
  const byId = Object.fromEntries(pool.map(record => [record.id, record]));
  const mission = DAILY_MISSIONS[Math.abs(dayNumber(getEasternDateKey(date))) % DAILY_MISSIONS.length]
    .map(id => byId[id]).filter(Boolean);
  if (mission.length >= count) return mission.slice(0, count);
  const used = new Set(mission.map(record => record.id));
  return [...mission, ...pool.filter(record => !used.has(record.id))].slice(0, Math.min(count, pool.length));
}
export function selectDailyGymnast(records, date = new Date()) { return selectDailyGymnasts(records, date, 1)[0] || null; }
export function scoreForClue(clueNumber) { return [300, 200, 100][Math.min(2, Math.max(0, clueNumber - 1))]; }
export function resolveGuess({attempts, clueNumber, isCorrect}) {
  const nextAttempts = Math.min(DAILY_ATTEMPT_LIMIT, attempts + 1);
  return {attempts:nextAttempts,clueNumber:isCorrect?clueNumber:Math.min(3,clueNumber+1),correct:isCorrect,score:isCorrect?scoreForClue(clueNumber):0,exhausted:nextAttempts>=DAILY_ATTEMPT_LIMIT};
}
export function createSessionSnapshot({dateKey,phase,round,clueNumber,attempts,wrongIds,elapsed,solved}) {
  return {dateKey,phase,round,clueNumber,attempts,wrongIds:[...wrongIds],elapsed,solved:solved.map(item=>({id:item.gymnast.id,score:item.score,clues:item.clues}))};
}
export function restoreSessionSnapshot(snapshot,byId,dateKey) {
  if (!snapshot || snapshot.dateKey !== dateKey) return null;
  return {...snapshot,solved:(snapshot.solved||[]).map(item=>({gymnast:byId[item.id],score:item.score,clues:item.clues})).filter(item=>item.gymnast)};
}
export function sessionScore(solved) { return solved.reduce((total, item) => total + item.score, 0); }
export function buildShareText({ score, solvedCount, attemptsUsed, streak = 1, locale = "en" }) {
  return locale === "es" ? `GYMNAST OF THE DAY ✦ ${score} PTS\n${solvedCount}/5 gimnastas · ${attemptsUsed}/10 intentos · Racha ${streak}\n¿Puedes abrir los expedientes de hoy?` : `GYMNAST OF THE DAY ✦ ${score} PTS\n${solvedCount}/5 gymnasts · ${attemptsUsed}/10 attempts · ${streak} day streak\nCan you crack today’s files?`;
}
export function updateStreak(previous, dateKey) {
  if (previous?.lastDate === dateKey) return previous;
  const yesterday = new Date(`${dateKey}T12:00:00Z`); yesterday.setUTCDate(yesterday.getUTCDate() - 1);
  return { count: previous?.lastDate === yesterday.toISOString().slice(0, 10) ? previous.count + 1 : 1, lastDate: dateKey };
}
export function addToHall(hall, gymnast, score, powerId, dateKey) {
  const current = hall.find(item => item.gymnastId === gymnast.id);
  const entry = { gymnastId: gymnast.id, name: gymnast.identity.visibleName, country: gymnast.featuredMoment.representedDelegation, powerId, bestScore: Math.max(score, current?.bestScore || 0), unlockedAt: current?.unlockedAt || dateKey, lastPlayedAt: dateKey };
  return current ? hall.map(item => item.gymnastId === gymnast.id ? entry : item) : [...hall, entry];
}
export function validateGymnast(record, allIds = null) {
  const errors = [];
  if (!/^GYM-(00[1-9]|0[1-9]\d|100)$/.test(record?.id || "")) errors.push("id:invalid");
  if (!record?.identity?.visibleName || !record.identity.fullName) errors.push("identity:missing");
  if (record?.classification?.featuredEvents?.includes("AA")) errors.push("featuredEvents:aa-is-not-event");
  if (!record?.game?.clues?.en || record.game.clues.en.length !== 3 || record.game.clues.en.some(value => !value?.trim()) || !record?.game?.clues?.es || record.game.clues.es.length !== 3 || record.game.clues.es.some(value => !value?.trim())) errors.push("clues:requires-3-per-locale");
  if (!record?.game?.revealTitle?.en || !record?.game?.revealTitle?.es || !record?.game?.revealStory?.en || !record?.game?.revealStory?.es || !record?.game?.power?.label?.en || !record?.game?.power?.label?.es || !record?.game?.power?.message?.en || !record?.game?.power?.message?.es) errors.push("bilingual-copy:missing");
  if (!["ACCESSIBLE","COMPETITIVE","EXPERT"].includes(record?.game?.difficulty)) errors.push("difficulty:invalid");
  const distractors = record?.game?.distractorGymnastIds || [];
  if (distractors.length !== 3 || new Set(distractors).size !== 3 || distractors.includes(record?.game?.answerGymnastId)) errors.push("distractors:invalid");
  if (allIds && [record?.game?.answerGymnastId, ...distractors].some(id => !allIds.has(id))) errors.push("answers:unknown-id");
  if (record?.review?.publishable && (!record.game.distractorRationale || record.game.clueSourceUrls?.length !== 3)) errors.push("editorial:evidence-missing");
  if ((record?.sources || []).some(source => !source.url?.startsWith("https://") || HOME_PAGES.has(source.url.replace(/\/$/, "")) || !source.supports?.length)) errors.push("sources:invalid");
  if (record?.element?.relation === "NAMED_AFTER_HER" && (!(record.sources || []).some(source => source.sourceType === "FIG" && source.supports.some(field => field.startsWith("element."))) || !record.element.officialName || !record.element.officialDescription)) errors.push("element:named-requires-fig-detail");
  if (record?.review?.publishable) {
    if (record.review.factualStatus !== "VERIFIED" || !["VERIFIED", "NOT_APPLICABLE"].includes(record.review.technicalStatus) || record.review.translationStatus !== "COMPLETE" || record.review.rightsStatus !== "CLEARED" || record.assets?.rightsStatus !== "CLEARED") errors.push("publication:gate-failed");
    if (!(record.sources || []).length) errors.push("publication:sources-required");
  }
  return { valid: errors.length === 0, errors };
}
export function validateCatalog(records) {
  const ids = records.map(record => record.id); const idSet = new Set(ids); const names = records.map(record => record.identity?.fullName); const errors = [];
  if (records.length !== 100 || idSet.size !== 100) errors.push("catalog:requires-100-unique-ids");
  for (let n = 1; n <= 100; n += 1) if (!idSet.has(`GYM-${String(n).padStart(3, "0")}`)) errors.push(`catalog:missing-${n}`);
  if (new Set(names).size !== names.length) errors.push("catalog:duplicate-name");
  records.forEach(record => validateGymnast(record, idSet).errors.forEach(error => errors.push(`${record.id}:${error}`)));
  const publishable = records.filter(record=>record.review?.publishable); const wrongUse = new Map();
  publishable.forEach(record=>record.game.distractorGymnastIds.forEach(id=>wrongUse.set(id,(wrongUse.get(id)||0)+1)));
  wrongUse.forEach((count,id)=>{if(count>Math.ceil(publishable.length/2))errors.push(`catalog:distractor-overuse-${id}`);});
  return { valid: errors.length === 0, errors };
}
