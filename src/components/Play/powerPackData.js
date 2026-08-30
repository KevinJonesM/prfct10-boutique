import { getColorMeaning } from "./data/colorMeanings.js";
import { getSpotlightById } from "./data/gymnastSpotlights.js";
import { getCodeElement } from "./data/codeElements.js";
import { normalizePowerQuote } from "./data/powerQuotes.js";

const COUNTRY_NAMES = {
  USA: ["United States", "Estados Unidos"], ROU: ["Romania", "Rumania"], RUS: ["Russia", "Rusia"],
  USSR: ["Soviet Union", "Unión Soviética"], URS: ["Soviet Union", "Unión Soviética"], BRA: ["Brazil", "Brasil"],
  BEL: ["Belgium", "Bélgica"], NED: ["Netherlands", "Países Bajos"], ITA: ["Italy", "Italia"], UZB: ["Uzbekistan", "Uzbekistán"]
};

export function createPowerPack({ result, copy, locale, t }) {
  const isSpanish = locale === "es";
  const colorIds = [result.primaryColorId, result.secondaryColorId].filter(Boolean);
  const colors = (colorIds.length === 2 ? colorIds : result.colors).map(getColorMeaning).filter(Boolean);
  const spotlight = getSpotlightById(result.gymnastId);
  const element = getCodeElement(result.elementId);
  if (!spotlight || !element) throw new Error("Power Check result references missing spotlight or element data");
  if (!result.quoteId || !result.quoteEn || !result.quoteEs) throw new Error("Power Check result is missing its selected quote");
  const quoteRecord = { id: result.quoteId, ...normalizePowerQuote({ en: result.quoteEn, es: result.quoteEs }) };
  const quote = isSpanish ? quoteRecord.es : quoteRecord.en;
  const mode = `${t(`play.powerCheck.options.currentEnergy.${result.currentEnergyId || result.currentEnergy}`)} MODE`;
  const todayYoure = locale === "es" ? result.todayYoureEs : result.todayYoureEn;

  return {
    locale,
    storyCount: 3,
    storyOne: {
      label: t("play.powerCheck.powerPack.story1.label"),
      todayYoure,
      profile: copy.identity,
      mode,
      apparatus: copy.apparatus,
      apparatusId: result.apparatusId || result.apparatus,
      mantra: copy.mantra,
      quote,
      colors
    },
    storyTwo: {
      label: t("play.powerCheck.powerPack.story2.label"),
      todayYoure,
      apparatusId: result.apparatusId || result.apparatus,
      mixLabel: t("play.powerCheck.powerPack.story2.mixLabel"),
      mix: colors.map((color) => isSpanish ? color.energyEs : color.energyEn).join(" + "),
      quote,
      colors: colors.map((color) => ({
        ...color,
        name: isSpanish ? color.nameEs : color.nameEn,
        energy: isSpanish ? color.energyEs : color.energyEn,
        description: isSpanish ? color.descriptionEs : color.descriptionEn
      }))
    },
    storyThree: {
      label: t("play.powerCheck.powerPack.story3.label"),
      todayYoure,
      gymnastName: spotlight.gymnastName,
      countryCode: spotlight.countryCode,
      countryName: (COUNTRY_NAMES[spotlight.countryCode] || [spotlight.countryCode, spotlight.countryCode])[isSpanish ? 1 : 0],
      athleteType: isSpanish ? "GIMNASTA ARTÍSTICA" : "ARTISTIC GYMNAST",
      countryLabel: t("play.powerCheck.powerPack.story3.countryLabel"),
      eventLabel: t("play.powerCheck.powerPack.story3.eventLabel"),
      colors,
      apparatus: t(`play.powerCheck.options.apparatus.${spotlight.apparatus}`),
      apparatusId: spotlight.apparatus,
      elementLabel: t("play.powerCheck.powerPack.story3.elementLabel"),
      elementName: element.name,
      elementDescription: isSpanish ? element.descriptionEs : element.descriptionEn,
      worthLabel: t("play.powerCheck.powerPack.story3.worthLabel"),
      worth: element.vaultDScore
        ? t("play.powerCheck.powerPack.story3.vaultScore", { value: element.vaultDScore.toFixed(1) })
        : t("play.powerCheck.powerPack.story3.difficulty", { letter: element.difficultyLetter, value: element.difficultyValue.toFixed(1) }),
      factLabel: t("play.powerCheck.powerPack.story3.factLabel"),
      funFact: isSpanish ? element.funFactEs : element.funFactEn,
      source: element.sourceEdition,
      sourceUrl: element.sourceUrl,
      imageAsset: spotlight.imageAsset,
      whatItTookLabel: t("play.powerCheck.powerPack.story3.whatItTookLabel"),
      whatItTook: isSpanish ? spotlight.whatItTookEs : spotlight.whatItTookEn,
      dateKey: spotlight.dateKey
    }
  };
}
