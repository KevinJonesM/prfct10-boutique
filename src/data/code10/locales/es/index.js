import core from "./core.js";
import vault from "./vault.js";
import bars from "./bars.js";
import beam from "./beam.js";
import floor from "./floor.js";
import artistryGeneral from "./artistry-general.js";
import mythOrRule from "./myth-or-rule.js";
import whatsTheCall from "./whats-the-call.js";

const indexed = (prefix, rows, start = 1) => Object.fromEntries(rows.map((row, i) => [prefix + String(i + start).padStart(3, "0"), row]));
// IDs, never random order, bind this linguistic layer to the owner-supplied bank.
export const spanishQuestionCopy = {
  ...indexed("xcel-core-", core), ...indexed("xcel-vt-", vault),
  ...indexed("xcel-ub-", bars), ...indexed("xcel-bb-", beam), ...indexed("xcel-fx-", floor),
  ...indexed("xcel-art-", artistryGeneral.slice(0, 17)), ...indexed("xcel-gen-", artistryGeneral.slice(17), 18),
  ...indexed("xcel-trap-", mythOrRule), ...indexed("xcel-call-", whatsTheCall)
};
const commonOptions = { True: "Verdadero", False: "Falso", One: "Uno", Two: "Dos", Three: "Tres", Four: "Cuatro", Five: "Cinco", Unlimited: "Sin límite", VOID: "Nulo" };
export function spanishOption(text) {
  if (Object.hasOwn(commonOptions, text)) return commonOptions[text];
  // Numeric values and named difficulty letters are language-independent.
  if (/^(?:[\d\s.°:–\-¼½¾]+|[A-D])$/.test(text)) return text;
  return undefined; // Never disguise unlocalized English as Spanish.
}
