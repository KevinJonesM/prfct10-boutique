import { getCodeElement } from "./codeElements.js";

export const gymnastSpotlights = [
  { id: "amanar", apparatus: "vault", gymnastName: "Simona Amanar", countryCode: "ROU", elementId: "amanar-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "biles-vault", apparatus: "vault", gymnastName: "Simone Biles", countryCode: "USA", elementId: "biles-ii-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "davydova", apparatus: "bars", gymnastName: "Elena Davydova", countryCode: "USSR", elementId: "davydova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "shushunova", apparatus: "bars", gymnastName: "Elena Shushunova", countryCode: "USSR", elementId: "shushunova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "produnova-beam", apparatus: "beam", gymnastName: "Yelena Produnova", countryCode: "RUS", elementId: "produnova-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "biles-beam", apparatus: "beam", gymnastName: "Simone Biles", countryCode: "USA", elementId: "biles-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "silivas", apparatus: "floor", gymnastName: "Daniela Silivas", countryCode: "ROU", elementId: "silivas-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "biles-floor", apparatus: "floor", gymnastName: "Simone Biles", countryCode: "USA", elementId: "biles-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "gabby-vault", apparatus: "vault", gymnastName: "Gabby Douglas", countryCode: "USA", elementId: "amanar-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "rebeca-vault", apparatus: "vault", gymnastName: "Rebeca Andrade", countryCode: "BRA", elementId: "biles-ii-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "suni-bars", apparatus: "bars", gymnastName: "Suni Lee", countryCode: "USA", elementId: "davydova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "derwael-bars", apparatus: "bars", gymnastName: "Nina Derwael", countryCode: "BEL", elementId: "shushunova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "mustafina-bars", apparatus: "bars", gymnastName: "Aliya Mustafina", countryCode: "RUS", elementId: "davydova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "ponor-beam", apparatus: "beam", gymnastName: "Catalina Ponor", countryCode: "ROU", elementId: "produnova-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "wevers-beam", apparatus: "beam", gymnastName: "Sanne Wevers", countryCode: "NED", elementId: "biles-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "chiles-floor", apparatus: "floor", gymnastName: "Jordan Chiles", countryCode: "USA", elementId: "biles-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "carey-floor", apparatus: "floor", gymnastName: "Jade Carey", countryCode: "USA", elementId: "silivas-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "ferrari-floor", apparatus: "floor", gymnastName: "Vanessa Ferrari", countryCode: "ITA", elementId: "silivas-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "johnson-floor", apparatus: "floor", gymnastName: "Shawn Johnson", countryCode: "USA", elementId: "silivas-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "liukin-bars", apparatus: "bars", gymnastName: "Nastia Liukin", countryCode: "USA", elementId: "davydova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "komova-bars", apparatus: "bars", gymnastName: "Viktoria Komova", countryCode: "RUS", elementId: "shushunova-bars", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "hurd-beam", apparatus: "beam", gymnastName: "Morgan Hurd", countryCode: "USA", elementId: "biles-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "iordache-beam", apparatus: "beam", gymnastName: "Larisa Iordache", countryCode: "ROU", elementId: "produnova-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "dos-santos-floor", apparatus: "floor", gymnastName: "Daiane dos Santos", countryCode: "BRA", elementId: "biles-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "chusovitina-vault", apparatus: "vault", gymnastName: "Oksana Chusovitina", countryCode: "UZB", elementId: "amanar-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "yurchenko-vault", apparatus: "vault", gymnastName: "Natalia Yurchenko", countryCode: "URS", elementId: "amanar-vault", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "laurie-floor", apparatus: "floor", gymnastName: "Laurie Hernandez", countryCode: "USA", elementId: "silivas-floor", imageAsset: null, whatItTookEn: null, whatItTookEs: null },
  { id: "flavia-beam", apparatus: "beam", gymnastName: "Flavia Saraiva", countryCode: "BRA", elementId: "produnova-beam", imageAsset: null, whatItTookEn: null, whatItTookEs: null }
];

const APPARATUS_ROTATION = ["vault", "bars", "beam", "floor"];

function hashText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function selectDailySpotlight(apparatus, dateKey = getLocalDateKey(), resultSeed = "", recentEntries = []) {
  const selectedApparatus = apparatus === "allAround"
    ? APPARATUS_ROTATION[hashText(`${dateKey}:allAround`) % APPARATUS_ROTATION.length]
    : apparatus;
  const candidates = gymnastSpotlights.filter((spotlight) => spotlight.apparatus === selectedApparatus);
  const recentIds = recentEntries.filter((entry) => entry.apparatusId === selectedApparatus).slice(-5).map((entry) => entry.gymnastId);
  const fresh = candidates.filter((candidate) => !recentIds.includes(candidate.id));
  const pool = fresh.length > 0 ? fresh : candidates;
  const spotlight = pool[hashText(`${dateKey}:${selectedApparatus}:${resultSeed}`) % pool.length];
  return { ...spotlight, element: getCodeElement(spotlight.elementId), dateKey };
}

export function getSpotlightById(id) {
  return gymnastSpotlights.find((spotlight) => spotlight.id === id) || null;
}
