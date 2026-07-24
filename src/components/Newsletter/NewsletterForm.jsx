import { useId, useState } from "react";
import { newsletterIntegration, subscribeToNewsletter } from "../../services/newsletter";
import { useI18n } from "../../i18n/I18nProvider";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm({ source = "footer", submitLabel, onSuccess }) {
  const { t } = useI18n();
  const inputId = useId();
  const messageId = `${inputId}-message`;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const canAttemptSubmission = newsletterIntegration.configured || import.meta.env.DEV;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;
    const normalizedEmail = email.trim();
    if (!emailPattern.test(normalizedEmail)) {
      setStatus("error");
      setMessage(t("newsletter.invalid"));
      return;
    }
    if (!canAttemptSubmission) return;
    setStatus("submitting");
    setMessage("");
    const result = await subscribeToNewsletter({ email: normalizedEmail, source, interests: [] });
    if (result.status === "success") {
      setStatus("success");
      setMessage(t("newsletter.success"));
      setEmail("");
      onSuccess?.();
      return;
    }
    if (result.status === "not-configured" && import.meta.env.DEV) {
      setStatus("not-configured");
      setMessage(t("newsletter.notConfigured"));
      return;
    }
    setStatus("error");
    setMessage(t("newsletter.error"));
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label className="newsletter-form__label" htmlFor={inputId}>{t("newsletter.email")}</label>
      <div className="newsletter-form__controls">
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "submitting") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={message ? messageId : undefined}
        />
        <button type="submit" disabled={status === "submitting" || !canAttemptSubmission}>
          {status === "submitting" ? t("newsletter.joining") : submitLabel || t("newsletter.join")} <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
      {message ? <p className={`newsletter-form__message newsletter-form__message--${status}`} id={messageId} role={status === "error" ? "alert" : "status"}>{message}</p> : null}
    </form>
  );
}
