import { useEffect, useState } from "react";
import "./AuthModal.css";
import { useI18n } from "../../i18n/I18nProvider";

const emptyFields = {
  name: "",
  email: "",
  password: ""
};

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const { t } = useI18n();
  const [mode, setMode] = useState("signin");
  const [fields, setFields] = useState(emptyFields);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.body.classList.add("auth-modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("auth-modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title = t(mode === "signin" ? "auth.signTitle" : "auth.createTitle");
  const subtitle =
    mode === "signin"
      ? t("auth.signText")
      : t("auth.createText");

  const updateField = (field, value) => {
    setFields((current) => ({ ...current, [field]: value }));
  };

  const finishAuth = (provider) => {
    const fallbackName = fields.name.trim() || fields.email.split("@")[0] || "PRFCT10";
    onAuthSuccess?.({
      email: fields.email.trim() || "customer@prfct10.com",
      name: provider === "google" ? t("auth.googleAccount") : fallbackName,
      provider
    });
    setFields(emptyFields);
    onClose?.();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    finishAuth("email");
  };

  return (
    <div className="auth-modal" role="presentation">
      <button className="auth-modal__overlay" type="button" aria-label={t("auth.closeSign")} onClick={onClose} />
      <section className="auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <button className="auth-modal__close" type="button" aria-label={t("common.close")} onClick={onClose}>
          x
        </button>

        <div className="auth-modal__brand">
          <span>PRFCT10</span>
          <strong id="auth-modal-title">{title}</strong>
          <p>{subtitle}</p>
        </div>

        <div className="auth-modal__tabs" role="tablist" aria-label={t("auth.options")}>
          <button
            className={mode === "signin" ? "auth-modal__tab auth-modal__tab--active" : "auth-modal__tab"}
            type="button"
            onClick={() => setMode("signin")}
          >
            {t("auth.sign")}
          </button>
          <button
            className={mode === "signup" ? "auth-modal__tab auth-modal__tab--active" : "auth-modal__tab"}
            type="button"
            onClick={() => setMode("signup")}
          >
            {t("auth.create")}
          </button>
        </div>

        <button className="auth-modal__google" type="button" onClick={() => finishAuth("google")}>
          <span aria-hidden="true">G</span>
          {t("auth.google")}
        </button>

        <div className="auth-modal__divider">
          <span>{t("auth.emailDivider")}</span>
        </div>

        <form className="auth-modal__form" onSubmit={onSubmit}>
          {mode === "signup" && (
            <label>
              {t("auth.name")}
              <input
                type="text"
                value={fields.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder={t("auth.name")}
              />
            </label>
          )}

          <label>
            {t("auth.email")}
            <input
              type="email"
              value={fields.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            {t("auth.password")}
            <input
              type="password"
              value={fields.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder={t("auth.passwordPlaceholder")}
              minLength={6}
              required
            />
          </label>

          <button className="auth-modal__submit" type="submit">
            {t(mode === "signin" ? "auth.sign" : "auth.create")}
          </button>
        </form>

        <p className="auth-modal__note">
          {t("auth.note")}
        </p>
      </section>
    </div>
  );
}
