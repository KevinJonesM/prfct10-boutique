import { getColorMeaning } from "./data/colorMeanings.js";
import { getLocalDateKey, selectDailySpotlight } from "./data/gymnastSpotlights.js";
import { selectPowerQuote } from "./data/powerQuotes.js";

function resultDateKey(result) {
  if (result.spotlightDate) return result.spotlightDate;
  const createdAt = result.createdAt ? new Date(result.createdAt) : new Date();
  return Number.isNaN(createdAt.getTime()) ? getLocalDateKey() : getLocalDateKey(createdAt);
}

export function createPowerPack({ result, copy, locale, t }) {
  const isSpanish = locale === "es";
  const colors = result.colors.map(getColorMeaning).filter(Boolean);
  const spotlight = selectDailySpotlight(result.apparatus, resultDateKey(result));
  const element = spotlight.element;
  const quoteRecord = result.quoteEn ? { id: result.quoteId, en: result.quoteEn, es: result.quoteEs || result.quoteEn } : selectPowerQuote({ dateKey: resultDateKey(result), primaryColor: result.colors[0], secondaryColor: result.colors[1], apparatus: result.apparatus === "allAround" ? spotlight.apparatus : result.apparatus });
  const quote = isSpanish ? quoteRecord.es : quoteRecord.en;
  const mode = `${t(`play.powerCheck.options.currentEnergy.${result.currentEnergy}`)} MODE`;

  return {
    locale,
    storyCount: 3,
    storyOne: {
      label: t("play.powerCheck.powerPack.story1.label"),
      profile: copy.identity,
      mode,
      apparatus: copy.apparatus,
      mantra: copy.mantra,
      quote,
      colors
    },
    storyTwo: {
      label: t("play.powerCheck.powerPack.story2.label"),
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
      gymnastName: spotlight.gymnastName,
      countryCode: spotlight.countryCode,
      colors,
      apparatus: t(`play.powerCheck.options.apparatus.${spotlight.apparatus}`),
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
