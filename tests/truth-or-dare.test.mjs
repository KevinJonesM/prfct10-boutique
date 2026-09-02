import test from "node:test";
import assert from "node:assert/strict";
import { CHAOS_CARDS, DARES, MICRO_REACTIONS, TRUTHS } from "../src/components/TruthOrDare/truthOrDareContent.js";
import { chooseSessionCard, shouldOfferChaos, shufflePlayers } from "../src/components/TruthOrDare/truthOrDareEngine.js";

test("Truth or Dare ships the complete owner-authored content bank", () => {
  assert.equal(TRUTHS.length, 100);
  assert.equal(DARES.length, 100);
  assert.equal(CHAOS_CARDS.length, 30);
  assert.equal(MICRO_REACTIONS.length, 40);
  const cards = [...TRUTHS, ...DARES, ...CHAOS_CARDS];
  assert.equal(new Set(cards.map(card => card.id)).size, 230);
  assert.ok(cards.every(card => card.minPlayers >= 2));
  assert.ok(cards.every(card => ["none", "low"].includes(card.physical)));
  assert.ok(cards.every(card => card.prompt.trim().length > 0));
});

test("session selection respects intensity and avoids recent cards and categories when possible", () => {
  const source = DARES.filter(card => card.intensity === "chill");
  const recent = [
    { id: source[0].id, category: source[0].category, type: "dare" },
    { id: source[1].id, category: source[1].category, type: "dare" }
  ];
  const selected = chooseSessionCard({ type: "dare", intensity: "chill", recent, random: () => 0 });
  assert.equal(selected.intensity, "chill");
  assert.ok(!recent.some(card => card.id === selected.id));
  assert.ok(!recent.slice(-2).some(card => card.category === selected.category));
  assert.equal(chooseSessionCard({ type: "dare", intensity: "team", recent, random: () => 0 }).intensity, "team");
});

test("chaos cadence and player shuffle are deterministic when random is injected", () => {
  assert.deepEqual([0, 1, 2, 3, 4, 5, 8].filter(shouldOfferChaos), [4, 8]);
  const players = [{ id: 1 }, { id: 2 }, { id: 3 }];
  assert.deepEqual(shufflePlayers(players, () => 0).map(player => player.id), [2, 3, 1]);
  assert.deepEqual(players.map(player => player.id), [1, 2, 3]);
});

test("physical prompts do not instruct risky gymnastics or furniture skills", () => {
  const forbidden = /\b(do|perform|try) (a |an )?(flip|salto|handspring)|furniture skill/i;
  assert.ok([...DARES, ...CHAOS_CARDS].every(card => !forbidden.test(card.prompt)));
});
