import { useEffect, useRef } from "react";
import NewsletterForm from "./NewsletterForm";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

const focusableSelector = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export default function NewsletterModal({ isOpen, onClose, onSuccess }) {
  const { t } = useI18n();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = [...(dialogRef.current?.querySelectorAll(focusableSelector) || [])];
      if (!focusableElements.length) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="newsletter-modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className="newsletter-modal__dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-modal-title"
        aria-describedby="newsletter-modal-description"
      >
        <button
          className="newsletter-modal__close"
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          aria-label={t("newsletter.close")}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="newsletter-modal__media" aria-hidden="true">
          <OptimizedImage src="/images/hero-apparel-editorial.png" alt="" loading="eager" width="1000" height="1200" />
        </div>
        <div className="newsletter-modal__copy">
          <p className="newsletter-kicker">{t("newsletter.eyebrow")}</p>
          <h2 id="newsletter-modal-title">{t("newsletter.modalTitle1")}<br />{t("newsletter.modalTitle2")}</h2>
          <p id="newsletter-modal-description">
            {t("newsletter.modalText")}
          </p>
          <NewsletterForm source="popup" submitLabel={t("newsletter.joinClub")} onSuccess={onSuccess} />
          <small>{t("newsletter.privacy")}</small>
        </div>
      </section>
    </div>
  );
}
