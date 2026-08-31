import { spanishQuestionCopy, spanishOption } from "./locales/es/index.js";

/** Add explicit locale fields without mutating the original records or rule metadata. */
export function localizeQuestion(question) {
  const copy = spanishQuestionCopy[question.id];
  return {
    ...question,
    question_en: question.question_en || question.question,
    explanation_en: question.explanation_en || question.explanation,
    takeaway_en: question.takeaway_en || question.takeaway,
    question_es: question.question_es || copy?.[0],
    explanation_es: question.explanation_es || copy?.[1],
    takeaway_es: question.takeaway_es || copy?.[2],
    options: question.options.map((option, index) => ({
      ...option,
      text_en: option.text_en || option.text,
      text_es: option.text_es || (copy ? copy[3]?.[index] || spanishOption(option.text) : undefined)
    }))
  };
}
