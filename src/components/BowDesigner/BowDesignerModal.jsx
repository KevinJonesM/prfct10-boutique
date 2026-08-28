import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import useModalScrollLock from "../../utils/useModalScrollLock";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import BowPreview from "./BowPreview";
import "./BowDesigner.css";
import {
  BOW_COLORS,
  BOW_SIZES,
  CENTER_STYLES,
  FINISHES,
  INITIAL_BOW_DESIGN,
  colorByValue,
  createBowCode
} from "./bowOptions";

function Selector({ legend, options, value, onChange, t }) {
  return (
    <fieldset className="bow-options">
      <legend>{legend}</legend>
      <div className="bow-options__list">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={value === option ? "is-selected" : ""}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {t(`bow.options.${option}`)}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ColorSelector({ selectedColors, onToggle, t }) {
  return (
    <fieldset className="bow-colors">
      <legend>{t("bow.selectTwoColors")}</legend>
      <div className="bow-colors__list">
        {BOW_COLORS.map((color) => {
          const selectionIndex = selectedColors.indexOf(color.value);
          const selected = selectionIndex >= 0;

          return (
            <button
              key={color.id}
              type="button"
              className={selected ? "is-selected" : ""}
              aria-label={t(`bow.colors.${color.id}`)}
              aria-pressed={selected}
              onClick={() => onToggle(color.value)}
            >
              <span className="bow-colors__swatch" style={{ "--swatch-color": color.value }} aria-hidden="true">
                <i className="bow-colors__check"><span>✓</span><b>{selectionIndex + 1}</b></i>
              </span>
              <small>{t(`bow.colors.${color.id}`)}</small>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 3Zm4.2 11.4c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.6-.8-3-1.2-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3.1 0-1.4.7-2.1 1-2.4.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l.9 2.1c.1.3.1.5 0 .7l-.5.7c-.2.2-.4.4-.2.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.2.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.7-.1 1.4Z" />
    </svg>
  );
}

function createEmptyDesign() {
  return {
    ...INITIAL_BOW_DESIGN,
    topColor: null,
    bottomColor: null
  };
}

export default function BowDesignerModal({ isOpen, onClose, openerRef }) {
  const { t } = useI18n();
  const [design, setDesign] = useState(createEmptyDesign);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const code = useMemo(() => createBowCode(design), [design]);
  useModalScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (openerRef?.current?.isConnected) openerRef.current.focus();
      else previousFocus?.focus?.();
    };
  }, [isOpen, onClose, openerRef]);

  if (!isOpen) return null;

  const update = (key, value) => setDesign((current) => ({ ...current, [key]: value }));
  const toggleColor = (value) => {
    setDesign((current) => {
      const colors = [current.topColor, current.bottomColor].filter(Boolean);
      const selectedIndex = colors.indexOf(value);

      if (selectedIndex >= 0) colors.splice(selectedIndex, 1);
      else if (colors.length < 2) colors.push(value);
      else colors[1] = value;

      return {
        ...current,
        topColor: colors[0] || null,
        bottomColor: colors[1] || null
      };
    });
  };

  const optionLabel = (value) => t(`bow.options.${value}`);
  const colorLabel = (value) => t(`bow.colors.${colorByValue(value).id}`);
  const selectedColors = [design.topColor, design.bottomColor].filter(Boolean);
  const hasTwoColors = selectedColors.length === 2;
  const topLabel = design.topColor ? colorLabel(design.topColor) : "—";
  const bottomLabel = design.bottomColor ? colorLabel(design.bottomColor) : "—";
  const colorSummary = t("bow.selectedColorPair", { top: topLabel, bottom: bottomLabel });
  const summaryItems = [
    optionLabel(design.finish),
    optionLabel(design.centerStyle),
    optionLabel(design.size)
  ];
  const summaryText = [colorSummary, ...summaryItems].join(" · ");
  const previewTopColor = design.topColor || "#f1e6eb";
  const previewBottomColor = design.bottomColor || design.topColor || "#e5ddd8";

  const surprise = () => {
    const pick = (items) => items[Math.floor(Math.random() * items.length)];
    const topColor = pick(BOW_COLORS).value;
    const bottomColor = pick(BOW_COLORS.filter((color) => color.value !== topColor)).value;
    setDesign({
      colorMode: "horizontalOmbre",
      topColor,
      bottomColor,
      finish: pick(FINISHES),
      centerStyle: pick(CENTER_STYLES),
      size: pick(BOW_SIZES)
    });
  };

  const message = hasTwoColors
    ? t("bow.whatsappMessage", {
        design: optionLabel("horizontalOmbre"),
        top: topLabel,
        bottom: bottomLabel,
        finish: optionLabel(design.finish),
        center: optionLabel(design.centerStyle),
        size: optionLabel(design.size),
        code,
        url: window.location.href.split("#")[0]
      })
    : "";

  const requestOnWhatsApp = () => {
    if (!hasTwoColors) return;
    window.open(createWhatsAppMessageLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bow-modal" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="bow-modal__dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="bow-dialog-title">
        <button className="bow-modal__close" type="button" onClick={onClose} ref={closeRef} aria-label={t("bow.close")}>×</button>
        <div className="bow-modal__preview">
          <p className="section-eyebrow">{t("bow.lab")}</p>
          <h2 id="bow-dialog-title">{t("bow.modalTitle")}</h2>
          <BowPreview
            {...design}
            colorMode="horizontalOmbre"
            topColor={previewTopColor}
            bottomColor={previewBottomColor}
            label={t("bow.previewLabel", { summary: summaryText })}
          />
        </div>
        <div className="bow-modal__controls">
          <ColorSelector selectedColors={selectedColors} onToggle={toggleColor} t={t} />
          <p className="bow-colors__summary" aria-live="polite">{colorSummary}</p>
          <Selector legend={t("bow.finish")} options={FINISHES} value={design.finish} onChange={(value) => update("finish", value)} t={t} />
          <Selector legend={t("bow.center")} options={CENTER_STYLES} value={design.centerStyle} onChange={(value) => update("centerStyle", value)} t={t} />
          <Selector legend={t("bow.size")} options={BOW_SIZES} value={design.size} onChange={(value) => update("size", value)} t={t} />
          <div className="bow-modal__tools">
            <button type="button" onClick={surprise}>{t("bow.surprise")}</button>
            <button type="button" onClick={() => setDesign(createEmptyDesign())}>{t("bow.reset")}</button>
          </div>
          <button
            className="bow-modal__whatsapp"
            type="button"
            onClick={requestOnWhatsApp}
            disabled={!hasTwoColors}
            data-whatsapp-url={hasTwoColors ? createWhatsAppMessageLink(message) : undefined}
          >
            <WhatsAppIcon />
            {t("bow.whatsapp")}
          </button>
        </div>
      </div>
    </div>
  );
}
