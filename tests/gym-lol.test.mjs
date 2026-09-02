import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { GYM_LOL_JOKES, GYM_LOL_PALETTE, GYM_LOL_REACTIONS, chooseNextJoke } from "../src/components/GymLol/gymLolData.js";

test("Gym LOL ships exactly 100 unique bilingual curated jokes", () => {
  assert.equal(GYM_LOL_JOKES.length, 100);
  assert.equal(new Set(GYM_LOL_JOKES.map(joke => joke.id)).size, 100);
  for (const [index, joke] of GYM_LOL_JOKES.entries()) {
    assert.equal(joke.id, `gym-lol-${String(index + 1).padStart(3, "0")}`);
    assert.ok(joke.category);
    assert.ok(joke.format);
    assert.ok(joke.lines.en.length >= 2);
    assert.equal(joke.lines.en.length, joke.lines.es.length);
    assert.ok(joke.lines.en.some(line => line.emphasis));
    assert.ok(joke.lines.es.every(line => line.text.trim()));
  }
});

test("each solid poster color has an explicit high-contrast foreground", () => {
  assert.ok(GYM_LOL_PALETTE.length >= 6);
  assert.equal(new Set(GYM_LOL_PALETTE.map(color => color.background)).size, GYM_LOL_PALETTE.length);
  for (const color of GYM_LOL_PALETTE) assert.match(color.foreground, /^#[0-9a-f]{6}$/i);
});

test("next joke avoids recent IDs and immediate category repetition", () => {
  const current = GYM_LOL_JOKES[0];
  const recentIds = GYM_LOL_JOKES.slice(1, 6).map(joke => joke.id);
  const next = chooseNextJoke({ currentId: current.id, currentCategory: current.category, recentIds, random: () => 0 });
  assert.notEqual(next.id, current.id);
  assert.ok(!recentIds.includes(next.id));
  assert.notEqual(next.category, current.category);
});

test("reaction sets remain optional, short and bilingual", () => {
  assert.equal(GYM_LOL_REACTIONS.length, 4);
  for (const group of GYM_LOL_REACTIONS) {
    assert.equal(group.options.length, 3);
    assert.ok(group.label.en && group.label.es);
    assert.ok(group.options.every(option => option.en && option.es));
  }
});

test("poster stays Instagram 3:4, adapts long copy, and keeps the nav logo white", async () => {
  const [css, logoCss, component] = await Promise.all([
    readFile(new URL("../src/components/GymLol/GymLol.css", import.meta.url), "utf8"),
    readFile(new URL("../src/components/GymLol/GymLolLogo.css", import.meta.url), "utf8"),
    readFile(new URL("../src/components/GymLol/GymLol.jsx", import.meta.url), "utf8")
  ]);
  assert.match(css, /aspect-ratio:3\/4/);
  assert.match(css, /gym-lol__poster--compact/);
  assert.match(css, /gym-lol__poster--tight/);
  assert.match(component, /copyLength > 94/);
  assert.doesNotMatch(logoCss, /gym-lol-logo--nav\{filter:brightness\(0\)/);
});
