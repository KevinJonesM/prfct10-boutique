import { useEffect, useRef, useState } from "react";
import { getPriceDisplay } from "../../utils/commerce";
import { finderQuestions, getFinderRecommendations } from "./finderRules";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./GuidedFinder.css";
import { useI18n } from "../../i18n/I18nProvider";
import { localizeProduct } from "../../i18n/productTranslations";

const getFocusableElements = (container) => Array.from(
  container?.querySelectorAll(
    'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ) || []
);

export default function GuidedFinder({ isOpen, onClose, onSelectProduct, onViewAll }) {
  const { locale, t } = useI18n();
  const [step, setStep] = useState("shoppingFor");
  const [answers, setAnswers] = useState({});
  const [history, setHistory] = useState([]);
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previousFocusRef.current = document.activeElement;
    setStep("shoppingFor");
    setAnswers({});
    setHistory([]);
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => titleRef.current?.focus(), 0);
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(dialogRef.current);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    titleRef.current?.focus();
  }, [isOpen, step]);

  if (!isOpen) return null;

  const question = finderQuestions[step];
  const recommendations = step === "results" ? getFinderRecommendations(answers) : [];
  const completedStepCount = step === "shoppingFor" ? 1 : step === "trainingNeed" ? 2 : 3;
  const totalSteps = answers.shoppingFor === "training" || step === "shoppingFor" ? 3 : 1;

  const chooseOption = (option) => {
    setAnswers((current) => ({ ...current, [step]: option.value }));
    setHistory((current) => [...current, step]);
    setStep(option.next);
  };

  const goBack = () => {
    const previousStep = history[history.length - 1];
    if (!previousStep) return;
    setHistory((current) => current.slice(0, -1));
    setStep(previousStep);
  };

  const reset = () => {
    setAnswers({});
    setHistory([]);
    setStep("shoppingFor");
  };

  const skipToShop = () => {
    onClose();
    onViewAll?.();
  };

  return (
    <div className="guided-finder" role="dialog" aria-modal="true" aria-labelledby="guided-finder-title">
      <button className="guided-finder__overlay" type="button" onClick={onClose} aria-label={t("finder.close")} />
      <div className="guided-finder__dialog" ref={dialogRef}>
        <header className="guided-finder__topbar">
          <div>
            <span>{t("finder.title")}</span>
            <small>{t("finder.note")}</small>
          </div>
          <button className="guided-finder__close" type="button" onClick={onClose} aria-label={t("finder.close")}>&times;</button>
        </header>

        <div className="guided-finder__body">
          {step !== "results" ? (
            <>
              <div className="guided-finder__progress" aria-label={t("finder.step", { current: completedStepCount, total: totalSteps })}>
                <span style={{ width: `${(completedStepCount / totalSteps) * 100}%` }} />
              </div>
              <div className="guided-finder__question">
                <p>{t("finder.step", { current: completedStepCount, total: totalSteps })}</p>
                <h2 id="guided-finder-title" ref={titleRef} tabIndex="-1">{t(`finder.questions.${step}`)}</h2>
                {question.helper ? <span>{t("finder.questions.levelHelp")}</span> : null}
              </div>
              <div className="guided-finder__options">
                {question.options.map((option) => (
                  <button
                    className={`guided-finder__option guided-finder__option--${option.tone}`}
                    key={option.value}
                    onClick={() => chooseOption(option)}
                    type="button"
                  >
                    <span>{t(`finder.options.${({ "bars-grip": "barsGrip", "wrist-support": "wristSupport", "strength-flexibility": "strengthFlexibility", "recovery-comfort": "recoveryComfort", "not-sure": "notSure" }[option.value] || option.value)}`)}</span>
                    <b aria-hidden="true">→</b>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="guided-finder__question guided-finder__question--results">
                <p>{t("finder.resultsEyebrow")}</p>
                <h2 id="guided-finder-title" ref={titleRef} tabIndex="-1">{t("finder.resultsTitle")}</h2>
                <span>{t("finder.resultsText")}</span>
              </div>
              <div className="guided-finder__results" aria-live="polite">
                {recommendations.map(({ product, reason }) => {
                  const localizedProduct = localizeProduct(product, locale);
                  const price = getPriceDisplay(localizedProduct);
                  const reasonKey = `finder.reasons.${localizedProduct.id}`;
                  const localizedReason = t(reasonKey);
                  const displayReason = localizedReason === reasonKey ? t("finder.resultsText") : localizedReason;
                  return (
                    <article className="guided-finder__result" key={localizedProduct.finderKey}>
                      <button className="guided-finder__result-media" type="button" onClick={() => {
                        onClose();
                        onSelectProduct?.(localizedProduct);
                      }}>
                        <OptimizedImage src={localizedProduct.image} alt={localizedProduct.name} loading="lazy" width="420" height="420" />
                      </button>
                      <div className="guided-finder__result-copy">
                        <span>{t({ "Training Gear": "navigation.trainingGear", Accessories: "navigation.accessories", "Mind Gym": "navigation.mindGym", Apparel: "navigation.apparel" }[localizedProduct.finderDepartment] || "navigation.shop")}</span>
                        <h3>{localizedProduct.name}</h3>
                        <strong>
                          {price.current}
                          {price.regular ? <del>{price.regular}</del> : null}
                        </strong>
                        <p>{displayReason || reason}</p>
                        <button type="button" onClick={() => {
                          onClose();
                          onSelectProduct?.(localizedProduct);
                        }}>{t("finder.view")} <span aria-hidden="true">→</span></button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <footer className="guided-finder__footer">
          <div>
            {history.length ? <button type="button" onClick={goBack}>{t("finder.back")}</button> : null}
            {step !== "shoppingFor" ? <button type="button" onClick={reset}>{t("finder.reset")}</button> : null}
          </div>
          <button className="guided-finder__skip" type="button" onClick={skipToShop}>{t("finder.all")}</button>
        </footer>
      </div>
    </div>
  );
}
