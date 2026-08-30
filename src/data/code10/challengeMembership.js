// Owner designated Batch 06's GENERAL / COMPETITION SMART section for this
// challenge. Keep membership separate from the verbatim question records:
// category and difficulty are distinct, and neither overrides verification.
const xcelCompetitionSmartIds = new Set([
  "xcel-gen-018", "xcel-gen-019", "xcel-gen-020", "xcel-gen-021",
  "xcel-gen-022", "xcel-gen-023", "xcel-gen-024", "xcel-gen-025",
  "xcel-gen-026", "xcel-gen-027", "xcel-gen-028", "xcel-gen-029",
  "xcel-gen-030", "xcel-gen-031", "xcel-gen-032", "xcel-gen-033",
  "xcel-gen-034", "xcel-gen-035", "xcel-gen-036", "xcel-gen-037",
  "xcel-gen-038", "xcel-gen-039", "xcel-gen-040",
]);

export function belongsToCuratedChallenge(question, category) {
  return question.program === "XCEL" && category === "COMPETITION_SMART" &&
    xcelCompetitionSmartIds.has(question.id);
}
