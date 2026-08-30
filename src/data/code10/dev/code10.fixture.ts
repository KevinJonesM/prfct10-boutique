import type { PRFCT10Question } from "../types";

// UI / ENGINE TEST DATA ONLY. No gymnastics statements, rules, or facts.
// Two small sets permit an entire replay without immediately repeating IDs.
const slots = [
  ["VAULT", "VAULT", "FOUNDATION"], ["VAULT", "VAULT", "COMPETITION_SMART"],
  ["BARS", "BARS", "FOUNDATION"], ["BARS", "BARS", "CODE_SMART"],
  ["BEAM", "BEAM", "FOUNDATION"], ["BEAM", "BEAM", "COMPETITION_SMART"],
  ["FLOOR", "FLOOR", "FOUNDATION"], ["FLOOR", "FLOOR", "CODE_SMART"],
  ["GENERAL", "ARTISTRY", "FOUNDATION"], ["GENERAL", "COMPETITION_SMART", "COMPETITION_SMART"]
] as const;
export const code10Fixture: PRFCT10Question[] = Array.from({ length: 20 }, (_, i) => {
  const [apparatus, category, difficulty] = slots[i % slots.length];
  const token = String(i + 1).padStart(2, "0");
  const binary = i % 4 === 0;
  return {
    id: "DEV-UI-" + token, program: "XCEL",
    divisions: ["BRONZE", "SILVER", "GOLD", "PLATINUM", "DIAMOND", "SAPPHIRE"],
    apparatus, category, subcategory: "UI_FIXTURE", difficulty,
    format: binary ? "TRUE_OR_FALSE" : i % 3 === 0 ? "WHATS_THE_CALL" : "MULTIPLE_CHOICE",
    eyebrow: "UI TEST — NOT A GYMNASTICS QUESTION",
    question: binary ? "UI test " + token + ": is the highlighted test token " + token + "?" : "UI test " + token + ": choose the matching token " + token + ".",
    options: binary ? [{ id: "yes", text: "Yes — " + token }, { id: "no", text: "No — different token" }] :
      [{ id: "match", text: "Token " + token }, { id: "other", text: "Token XX" }, { id: "blank", text: "Blank token" }, { id: "skip", text: "No matching token" }],
    correctOptionId: binary ? "yes" : "match",
    explanation: "This interface fixture matches token " + token + ". It tests answer feedback, not gymnastics knowledge.",
    takeaway: "UI test " + token + " matched its token. This is not a gymnastics rule.",
    ruleKey: "DEV-UI-" + token,
    source: { documentTitle: "Internal interface fixture — not a rules source" },
    verification: { status: "DEV_ONLY" },
    tags: ["DEV_ONLY", "UI_TEST", i % 2 ? "MYTH_OR_RULE" : "WHATS_THE_CALL"]
  };
});
