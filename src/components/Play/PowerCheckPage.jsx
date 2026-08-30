import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import QuestionStep from "./QuestionStep";
import PowerResult from "./PowerResult";
import {
  POWER_STEPS,
  clearPowerResult,
  createPowerResult,
  readPowerResult,
  writePowerResult
} from "./playData";
import "./Play.css";

const EMPTY_SELECTIONS = { apparatus: "", currentEnergy: "", intention: "", colors: [] };

export default function PowerCheckPage({ onBackToPlay }) {
  const { locale, t } = useI18n();
  const [stage, setStage] = useState("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState(EMPTY_SELECTIONS);
  const [lastResult, setLastResult] = useState(readPowerResult);
  const [result, setResult] = useState(null);
  const step = POWER_STEPS[stepIndex];
  const currentSelection = selections[step?.id];
  const isStepComplete = step?.type === "colors" ? currentSelection?.length === 2 : Boolean(currentSelection);
  const progress = useMemo(() => ((stepIndex + 1) / POWER_STEPS.length) * 100, [stepIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.querySelector(".power-check")?.focus({ preventScroll: true });
  }, [stage, stepIndex]);

  const startNew = () => {
    setSelections(EMPTY_SELECTIONS);
    setStepIndex(0);
    setResult(null);
    setStage("questions");
  };

  const showLastResult = () => {
    if (!lastResult) return;
    setResult(lastResult);
    setStage("result");
  };

  const removeLastResult = () => {
    clearPowerResult();
    setLastResult(null);
  };

  const updateSelection = (value) => {
    setSelections((current) => ({ ...current, [step.id]: value }));
  };

  const goBack = () => {
    if (stepIndex === 0) {
      setStage("intro");
      return;
    }
    setStepIndex((current) => current - 1);
  };

  const goNext = () => {
    if (!isStepComplete) return;
    if (stepIndex < POWER_STEPS.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }
    const nextResult = createPowerResult(selections, locale);
    writePowerResult(nextResult);
    setLastResult(nextResult);
    setResult(nextResult);
    setStage("result");
  };

  if (stage === "result" && result) {
    return (
      <main className="play-shell play-shell--result">
        <PowerResult result={result} onTryAgain={startNew} onBackToPlay={onBackToPlay} t={t} locale={locale} />
      </main>
    );
  }

  return (
    <main className="play-shell play-shell--quiz">
      <section className={`power-check power-check--${stage}`} tabIndex="-1" aria-labelledby="power-check-title">
        {stage === "intro" ? (
          <div className="power-check__intro">
            <div className="power-check__orb" aria-hidden="true"><span /></div>
            <p className="play-eyebrow">PRFCT10 POWER CHECK</p>
            <h1 id="power-check-title">{t("play.powerCheck.intro.title")}</h1>
            <p>{t("play.powerCheck.intro.text")}</p>
            <button className="play-button play-button--primary" type="button" onClick={startNew}>{t("play.powerCheck.intro.cta")}</button>
            {lastResult ? (
              <div className="power-check__last-result">
                <p>{t("play.powerCheck.lastResult.title")}</p>
                <div>
                  <button className="play-button play-button--secondary" type="button" onClick={showLastResult}>{t("play.powerCheck.lastResult.view")}</button>
                  <button className="play-text-button" type="button" onClick={removeLastResult}>{t("play.powerCheck.lastResult.clear")}</button>
                </div>
              </div>
            ) : null}
            <button className="play-text-button" type="button" onClick={onBackToPlay}>{t("play.powerCheck.result.backToPlay")}</button>
          </div>
        ) : (
          <div className="power-check__questions">
            <header className="power-progress">
              <div>
                <span>{t("play.powerCheck.progress", { current: stepIndex + 1, total: POWER_STEPS.length })}</span>
                <strong>{t(`play.powerCheck.stepNames.${step.id}`)}</strong>
              </div>
              <div className="power-progress__track" role="progressbar" aria-valuemin="1" aria-valuemax={POWER_STEPS.length} aria-valuenow={stepIndex + 1}>
                <span style={{ width: `${progress}%` }} />
              </div>
            </header>

            <QuestionStep step={step} selection={currentSelection} onChange={updateSelection} t={t} />

            <p className={`power-question__validation${isStepComplete ? " power-question__validation--complete" : ""}`} role="status">
              {isStepComplete
                ? t("play.powerCheck.validation.complete")
                : t(step.type === "colors" ? "play.powerCheck.validation.twoColors" : "play.powerCheck.validation.chooseOne")}
            </p>
            <nav className="power-check__navigation" aria-label={t("play.powerCheck.navigationLabel")}>
              <button className="play-button play-button--secondary" type="button" onClick={goBack}>{t("play.powerCheck.back")}</button>
              <button className="play-button play-button--primary" type="button" onClick={goNext} disabled={!isStepComplete}>
                {stepIndex === POWER_STEPS.length - 1 ? t("play.powerCheck.seeResult") : t("play.powerCheck.next")}
              </button>
            </nav>
          </div>
        )}
      </section>
    </main>
  );
}
