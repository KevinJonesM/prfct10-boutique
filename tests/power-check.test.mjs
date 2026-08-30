import test from "node:test";
import assert from "node:assert/strict";
import { ALL_POWER_COLORS, APPARATUS_OPTIONS, createPowerResult, isValidPowerResult, POWER_STORAGE_KEY } from "../src/components/Play/playData.js";
import { selectPowerQuote } from "../src/components/Play/data/powerQuotes.js";
import { selectTodayYoure } from "../src/components/Play/data/todayYoureNames.js";
import { createPowerPackSvgs } from "../src/components/Play/powerCardCanvas.js";

const store = new Map();
globalThis.window = { localStorage: { getItem: (key) => store.get(key) || null, setItem: (key, value) => store.set(key, value), removeItem: (key) => store.delete(key) } };

test("exposes 16 selectable colors and v4 storage", () => {
  assert.equal(ALL_POWER_COLORS.length, 16);
  assert.equal(POWER_STORAGE_KEY, "powerCheck:v4");
});

test("creates a complete deterministic result without deprecated copy", () => {
  const selections = { apparatus: "vault", currentEnergy: "lockedIn", intention: "focus", colors: ["fuchsia", "xmudSlime"] };
  const first = createPowerResult(selections, "en", 0);
  const second = createPowerResult(selections, "en", 0);
  assert.deepEqual(first, second);
  assert.equal(first.schemaVersion, 4);
  assert.equal(first.primaryColorId, "fuchsia");
  assert.equal(first.secondaryColorId, "xmudSlime");
  assert.ok(first.quoteId && first.gymnastId && first.elementId);
  assert.equal(isValidPowerResult(first), true);
  assert.equal(/butterflies|everbeam|tippy beam|floor n’ seeah|i breathe\. i reset\. i am ready/i.test(JSON.stringify(first)), false);
});

test("quote and Today You're vary with seed inputs", () => {
  const a = selectPowerQuote({ dateKey: "2026-08-29", primaryColor: "fuchsia", secondaryColor: "xmudSlime", apparatus: "vault", currentEnergyId: "lockedIn", intentionId: "focus", rerollNonce: 0 });
  const b = selectPowerQuote({ dateKey: "2026-08-29", primaryColor: "lilac", secondaryColor: "xmudPurple", apparatus: "bars", currentEnergyId: "readyToFly", intentionId: "energy", rerollNonce: 1 });
  assert.notEqual(a.id, b.id);
  assert.notEqual(selectTodayYoure({ dateKey: "2026-08-29", apparatus: "vault", primaryColor: "fuchsia", secondaryColor: "xmudSlime", energy: "lockedIn", rerollNonce: 0 }).id, selectTodayYoure({ dateKey: "2026-08-29", apparatus: "vault", primaryColor: "fuchsia", secondaryColor: "xmudSlime", energy: "lockedIn", rerollNonce: 1 }).id);
});

test("serializes three exact-size SVG stories from one pack", () => {
  const result = createPowerResult({ apparatus: "floor", currentEnergy: "needBoost", intention: "calm", colors: ["pink", "xmudAqua"] }, "en", 0);
  const pack = { storyOne: { label: "MY POWER", todayYoure: "FULL OUT", profile: "MY POWER", mode: "NEED A BOOST MODE", apparatus: "Floor", mantra: result.quoteEn, quote: result.quoteEn, colors: [{ id: "pink", value: "#F58BB2" }, { id: "xmudAqua", value: "#35D6FF" }] }, storyTwo: { label: "MY COLOR ENERGY", todayYoure: "FULL OUT", mixLabel: "YOUR POWER MIX", mix: "JOY + MOVEMENT", quote: result.quoteEn, colors: [{ id: "pink", value: "#F58BB2", name: "Bubblegum Pink", energy: "JOY", description: "Make the routine yours." }, { id: "xmudAqua", value: "#35D6FF", name: "Aqua", energy: "MOVEMENT", description: "Keep moving." }] }, storyThree: { label: "GYMNAST OF THE DAY", todayYoure: "FULL OUT", gymnastName: "Test Gymnast", countryCode: "USA", apparatus: "Floor", colors: [{ value: "#F58BB2" }, { value: "#35D6FF" }], elementLabel: "THE ELEMENT", elementName: "Silivas", elementDescription: "A tumbling element.", worthLabel: "WHAT IT’S WORTH", worth: "H · 0.8", factLabel: "DID YOU KNOW?", funFact: "A verified fact.", source: "World Gymnastics" } };
  const svgs = createPowerPackSvgs({ pack });
  assert.equal(svgs.length, 3);
  svgs.forEach((svg) => { assert.match(svg, /width="1080"/); assert.match(svg, /height="1920"/); assert.match(svg, /viewBox="0 0 1080 1920"/); assert.match(svg, /data-template=/); });
  assert.match(svgs[0], /MY POWER/);
});

test("apparatus list remains complete", () => assert.deepEqual(APPARATUS_OPTIONS, ["vault", "bars", "beam", "floor", "allAround"]));
