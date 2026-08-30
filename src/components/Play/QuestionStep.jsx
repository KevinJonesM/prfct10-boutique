import { ALL_POWER_COLORS } from "./playData";

export default function QuestionStep({ step, selection, onChange, t }) {
  const isColorStep = step.type === "colors";
  const selectedColors = isColorStep ? selection : [];

  const selectColor = (colorId) => {
    if (selectedColors.includes(colorId)) {
      onChange(selectedColors.filter((id) => id !== colorId));
      return;
    }
    if (selectedColors.length < 2) onChange([...selectedColors, colorId]);
  };

  return (
    <fieldset className={`power-question power-question--${step.id}`}>
      <legend>{t(`play.powerCheck.questions.${step.id}.title`)}</legend>
      <p className="power-question__hint" id={`power-${step.id}-hint`}>
        {t(`play.powerCheck.questions.${step.id}.hint`)}
      </p>

      {isColorStep ? (
        <div className="power-colors" role="group" aria-describedby={`power-${step.id}-hint`}>
          {ALL_POWER_COLORS.map((color) => {
            const isSelected = selectedColors.includes(color.id);
            const isUnavailable = selectedColors.length === 2 && !isSelected;
            return (
              <button
                className={`power-color${isSelected ? " power-color--selected" : ""}`}
                type="button"
                key={color.id}
                aria-label={t("play.powerCheck.colorLabel", { color: t(`play.colors.${color.id}`) })}
                aria-pressed={isSelected}
                disabled={isUnavailable}
                onClick={() => selectColor(color.id)}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  selectColor(color.id);
                }}
              >
                <span className="power-color__swatch" style={{ "--power-color": color.value }} aria-hidden="true">
                  <span>{isSelected ? "✓" : ""}</span>
                </span>
                <small className={`power-color__brand power-color__brand--${color.brand.toLowerCase()}`}>{color.brand}</small>
                <strong>{t(`play.colors.${color.id}`)}</strong>
              </button>
            );
          })}
        </div>
      ) : (
        <div className={`power-options power-options--${step.id}`} role="radiogroup" aria-describedby={`power-${step.id}-hint`}>
          {step.optionIds.map((optionId, index) => {
            const isSelected = selection === optionId;
            return (
              <button
                className={`power-option${isSelected ? " power-option--selected" : ""}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                key={optionId}
                onClick={() => onChange(optionId)}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  onChange(optionId);
                }}
              >
                {step.id === "apparatus" ? <span className="power-option__index" aria-hidden="true">0{index + 1}</span> : null}
                <strong>{t(`play.powerCheck.options.${step.id}.${optionId}`)}</strong>
                <span className="power-option__mark" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}
