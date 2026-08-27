import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import useModalScrollLock from "../../utils/useModalScrollLock";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import BowPreview from "./BowPreview";
import {
  BOW_COLORS,
  BOW_SIZES,
  CENTER_STYLES,
  COLOR_MODES,
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

function ColorSelector({ legend, value, onChange, t }) {
  return (
    <fieldset className="bow-colors">
      <legend>{legend}</legend>
      <div className="bow-colors__list">
        {BOW_COLORS.map((color) => {
          const selected = value === color.value;
          return (
            <button
              key={color.id}
              type="button"
              className={selected ? "is-selected" : ""}
              aria-label={t(`bow.colors.${color.id}`)}
              aria-pressed={selected}
              onClick={() => onChange(color.value)}
            >
              <span className="bow-colors__swatch" style={{ "--swatch-color": color.value }} aria-hidden="true">
                <i className="bow-colors__check">✓</i>
              </span>
              <small>{t(`bow.colors.${color.id}`)}</small>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function BowDesignerModal({ isOpen, onClose, openerRef }) {
  const { t } = useI18n();
  const [design, setDesign] = useState(INITIAL_BOW_DESIGN);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const code = useMemo(() => createBowCode(design), [design]);
  useModalScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
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
      openerRef?.current?.focus();
    };
  }, [isOpen, onClose, openerRef]);

  if (!isOpen) return null;

  const update = (key, value) => {
    setDesign((current) => {
      if (key === "colorMode" && value === "solid") {
        return { ...current, colorMode: value, bottomColor: current.topColor };
      }
      if (key === "topColor" && current.colorMode === "solid") {
        return { ...current, topColor: value, bottomColor: value };
      }
      return { ...current, [key]: value };
    });
  };
  const optionLabel = (value) => t(`bow.options.${value}`);
  const colorLabel = (value) => t(`bow.colors.${colorByValue(value).id}`);
  const colorSummary = design.colorMode === "solid"
    ? colorLabel(design.topColor)
    : t("bow.colorPair", { top: colorLabel(design.topColor), bottom: colorLabel(design.bottomColor) });
  const summaryItems = [
    optionLabel(design.colorMode),
    colorSummary,
    optionLabel(design.finish),
    optionLabel(design.centerStyle),
    optionLabel(design.size)
  ];
  const summaryText = summaryItems.join(" · ");

  const surprise = () => {
    const pick = (items) => items[Math.floor(Math.random() * items.length)];
    const colorMode = pick(COLOR_MODES);
    const topColor = pick(BOW_COLORS).value;
    const bottomColor = colorMode === "solid"
      ? topColor
      : pick(BOW_COLORS.filter((color) => color.value !== topColor)).value;
    setDesign({
      colorMode,
      topColor,
      bottomColor,
      finish: pick(FINISHES),
      centerStyle: pick(CENTER_STYLES),
      size: pick(BOW_SIZES)
    });
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard?.writeText(code);
    } catch {
      // The selection-based copy below supports browsers that block the async Clipboard API.
    }
    const input = document.createElement("textarea");
    input.value = code;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const message = t("bow.whatsappMessage", {
    design: optionLabel(design.colorMode),
    top: colorLabel(design.topColor),
    bottom: colorLabel(design.colorMode === "solid" ? design.topColor : design.bottomColor),
    finish: optionLabel(design.finish),
    center: optionLabel(design.centerStyle),
    size: optionLabel(design.size),
    code,
    url: window.location.href.split("#")[0]
  });

  return (
    <div className="bow-modal" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="bow-modal__dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="bow-dialog-title">
        <button className="bow-modal__close" type="button" onClick={onClose} ref={closeRef} aria-label={t("bow.close")}>×</button>
        <div className="bow-modal__preview">
          <p className="section-eyebrow">{t("bow.lab")}</p>
          <h2 id="bow-dialog-title">{t("bow.modalTitle")}</h2>
          <BowPreview {...design} label={t("bow.previewLabel", { summary: summaryText })} />
          <div className="bow-modal__summary" aria-live="polite">
            <strong>{t("bow.summary")}</strong>
            <ul>
              {summaryItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="bow-modal__code">
              <code>{code}</code>
              <button type="button" onClick={copyCode} aria-label={copied ? t("bow.copied") : t("bow.copy")} title={copied ? t("bow.copied") : t("bow.copy")}>
                {copied ? "✓" : "⧉"}
              </button>
            </div>
          </div>
        </div>
        <div className="bow-modal__controls">
          <Selector legend={t("bow.colorDesign")} options={COLOR_MODES} value={design.colorMode} onChange={(value) => update("colorMode", value)} t={t} />
          {design.colorMode === "solid" ? (
            <ColorSelector legend={t("bow.color")} value={design.topColor} onChange={(value) => update("topColor", value)} t={t} />
          ) : (
            <>
              <ColorSelector legend={t("bow.topColor")} value={design.topColor} onChange={(value) => update("topColor", value)} t={t} />
              <ColorSelector legend={t("bow.bottomColor")} value={design.bottomColor} onChange={(value) => update("bottomColor", value)} t={t} />
            </>
          )}
          <Selector legend={t("bow.finish")} options={FINISHES} value={design.finish} onChange={(value) => update("finish", value)} t={t} />
          <Selector legend={t("bow.center")} options={CENTER_STYLES} value={design.centerStyle} onChange={(value) => update("centerStyle", value)} t={t} />
          <Selector legend={t("bow.size")} options={BOW_SIZES} value={design.size} onChange={(value) => update("size", value)} t={t} />
          <div className="bow-modal__tools">
            <button type="button" onClick={surprise}>{t("bow.surprise")}</button>
            <button type="button" onClick={() => setDesign(INITIAL_BOW_DESIGN)}>{t("bow.reset")}</button>
          </div>
          <a className="bow-modal__whatsapp" href={createWhatsAppMessageLink(message)} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 3Zm4.2 11.4c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.6-.8-3-1.2-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3.1 0-1.4.7-2.1 1-2.4.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l.9 2.1c.1.3.1.5 0 .7l-.5.7c-.2.2-.4.4-.2.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.2.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.7-.1 1.4Z" />
            </svg>
            {t("bow.whatsapp")}
          </a>
        </div>
      </div>
    </div>
  );
}
