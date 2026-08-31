// Raw source metadata stays intact. Unknown eyebrows use the localized format.
const EYEBROW_FORMATS = {
  "HOW MUCH?": "HOW_MUCH", "TRUE OR FALSE": "TRUE_FALSE", "MYTH OR RULE?": "MYTH_OR_RULE",
  "WHAT’S THE CALL?": "WHATS_THE_CALL", "WHICH COSTS MORE?": "WHICH_COSTS_MORE",
  "ROUTINE CHECK": "ROUTINE_CHECK", "VALUE CHECK": "VALUE_CHECK"
};
export function localizedEyebrow(question, t, locale) {
  if (locale === "en" && question.eyebrow) return question.eyebrow;
  return t("code10.formats." + (EYEBROW_FORMATS[question.eyebrow] || question.format || "MULTIPLE_CHOICE"));
}
export function configLabels(config, t) {
  return { program: t("code10.programs."+config.program), division: t("code10.divisions."+config.division), categoryLabel: t("code10.categories."+config.category) };
}
export function hasSpanishQuestion(question) {
  return Boolean(question.question_es && question.explanation_es && question.takeaway_es && question.options.every(option => option.text_es));
}
