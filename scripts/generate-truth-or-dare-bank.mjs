import { readFileSync, writeFileSync } from "node:fs";

const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error("Usage: node generate-truth-or-dare-bank.mjs <brief.txt> <output.js>");
const source = readFileSync(input, "utf8").replace(/\r/g, "");
const lines = source.split("\n").map(line => line.trim());

const truthCategories = ["GYM CONFESSIONS", "APPARATUS TEA", "MEET DAY", "TEAM TEA", "COACH MOMENTS", "GYM OPINIONS", "DREAM GYM", "GYM CULTURE", "WAIT… BE HONEST", "BIG QUESTIONS, STILL FUN"];
const dareCategories = ["ACT IT OUT", "PRESS CONFERENCE", "COACH MODE", "COMMENTATOR MODE", "SAFE MOVEMENT", "GYM CHARADES", "EXPLAIN IT BADLY", "5 SECOND GYM", "CREATIVE CHAOS", "TEAM DARES"];
const slug = value => value.toLowerCase().replace(/[.…]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

function parseCards(startLabel, endLabel, idPattern, categories, type) {
  const start = lines.indexOf(startLabel);
  const end = lines.indexOf(endLabel, start + 1);
  const part = lines.slice(start + 1, end < 0 ? undefined : end);
  const cards = [];
  let category = categories[0];
  for (let index = 0; index < part.length; index += 1) {
    if (categories.includes(part[index])) { category = part[index]; continue; }
    if (!idPattern.test(part[index])) continue;
    const id = part[index];
    const prompt = [];
    for (index += 1; index < part.length; index += 1) {
      const line = part[index];
      if (idPattern.test(line) || categories.includes(line)) { index -= 1; break; }
      if (line) prompt.push(line);
    }
    const text = prompt.join(" ").replace(/\s+/g, " ");
    const timerMatch = text.match(/(five|ten|fifteen|twenty|5|10|15|20)[ -]second/i);
    const timerWords = { five: 5, ten: 10, fifteen: 15, twenty: 20 };
    const timer = timerMatch ? Number(timerMatch[1]) || timerWords[timerMatch[1].toLowerCase()] : null;
    cards.push({ id: id.toLowerCase(), type, category: slug(category), intensity: type === "truth" ? (id.slice(1) >= "081" ? "spicy" : "chill") : category === "TEAM DARES" ? "team" : ["PRESS CONFERENCE", "CREATIVE CHAOS", "COMMENTATOR MODE"].includes(category) ? "chaos" : "chill", minPlayers: 2, physical: category === "SAFE MOVEMENT" ? "low" : "none", timer, prompt: text });
  }
  return cards;
}

const truths = parseCards("100 TRUTHS", "100 DARES", /^T\d{3}$/, truthCategories, "truth");
const dares = parseCards("100 DARES", "30 CHAOS CARDS", /^D\d{3}$/, dareCategories, "dare");

const chaosStart = lines.indexOf("30 CHAOS CARDS");
const chaosEnd = lines.indexOf("MICRO-REACTION BANK", chaosStart);
const chaosPart = lines.slice(chaosStart + 1, chaosEnd);
const chaos = [];
for (let index = 0; index < chaosPart.length; index += 1) {
  const match = chaosPart[index].match(/^(C\d{3})\s+—\s+(.+)$/);
  if (!match) continue;
  const body = [];
  for (index += 1; index < chaosPart.length && !/^C\d{3}\s+—/.test(chaosPart[index]); index += 1) if (chaosPart[index]) body.push(chaosPart[index]);
  index -= 1;
  const microIndex = body.indexOf("Microcopy:");
  chaos.push({ id: match[1].toLowerCase(), type: "chaos", category: "group", title: match[2], prompt: body.slice(0, microIndex < 0 ? undefined : microIndex).join(" "), completionText: microIndex < 0 ? null : body.slice(microIndex + 1).join(" "), minPlayers: 2, physical: "low", timer: null });
}

const reactionsStart = lines.indexOf("Podemos empezar con estas 40:");
const reactionsEnd = lines.indexOf("IMPORTANT: HOW I WOULD MIX THEM", reactionsStart);
const reactions = lines.slice(reactionsStart + 1, reactionsEnd).filter(Boolean);

if (truths.length !== 100 || dares.length !== 100 || chaos.length !== 30 || reactions.length !== 40) throw new Error(`Unexpected counts: ${truths.length}/${dares.length}/${chaos.length}/${reactions.length}`);
const banner = "// Generated from the owner-supplied V1 content brief. Edit the source brief and rerun the generator for bulk changes.\n";
writeFileSync(output, `${banner}export const TRUTHS = ${JSON.stringify(truths, null, 2)};\nexport const DARES = ${JSON.stringify(dares, null, 2)};\nexport const CHAOS_CARDS = ${JSON.stringify(chaos, null, 2)};\nexport const MICRO_REACTIONS = ${JSON.stringify(reactions, null, 2)};\n`, "utf8");
