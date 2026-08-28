import { useState } from "react";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import { useI18n } from "../../i18n/I18nProvider";

const initialQuote = {
  contactName: "",
  email: "",
  phone: "",
  teamName: "",
  athleteCount: "",
  service: "competition",
  colors: "",
  budget: "",
  deliveryDate: "",
  notes: ""
};

export default function TeamQuoteForm() {
  const { t } = useI18n();
  const [quote, setQuote] = useState(initialQuote);

  const updateQuote = (event) => {
    const { name, value } = event.target;
    setQuote((current) => ({ ...current, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const valueOrFallback = (value, fallbackKey) => value || t(`team.form.${fallbackKey}`);
    return t("team.form.whatsappMessage", {
      contactName: quote.contactName,
      email: quote.email,
      phone: valueOrFallback(quote.phone, "notProvided"),
      teamName: quote.teamName,
      athleteCount: valueOrFallback(quote.athleteCount, "notConfirmed"),
      service: t(`team.form.${quote.service}`),
      colors: valueOrFallback(quote.colors, "openDirection"),
      budget: valueOrFallback(quote.budget, "guidance"),
      deliveryDate: valueOrFallback(quote.deliveryDate, "notConfirmed"),
      notes: valueOrFallback(quote.notes, "noNotes")
    });
  };

  const openWhatsAppQuote = (event) => {
    event.preventDefault();
    window.open(createWhatsAppMessageLink(buildWhatsAppMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="team-quote-form" onSubmit={openWhatsAppQuote}>
      <div className="team-quote-form__grid">
        <label>
          {t("team.form.name")}
          <input name="contactName" value={quote.contactName} onChange={updateQuote} autoComplete="name" required />
        </label>
        <label>
          {t("team.form.email")}
          <input name="email" type="email" value={quote.email} onChange={updateQuote} autoComplete="email" required />
        </label>
        <label>
          {t("team.form.phone")}
          <input name="phone" type="tel" value={quote.phone} onChange={updateQuote} autoComplete="tel" />
        </label>
        <label>
          {t("team.form.team")}
          <input name="teamName" value={quote.teamName} onChange={updateQuote} required />
        </label>
        <label>
          {t("team.form.count")}
          <input name="athleteCount" type="number" min="1" inputMode="numeric" value={quote.athleteCount} onChange={updateQuote} />
        </label>
        <label>
          {t("team.form.type")}
          <select name="service" value={quote.service} onChange={updateQuote}>
            <option value="training">{t("team.form.training")}</option>
            <option value="competition">{t("team.form.competition")}</option>
            <option value="both">{t("team.form.both")}</option>
          </select>
        </label>
        <label>
          {t("team.form.colors")}
          <input name="colors" value={quote.colors} onChange={updateQuote} placeholder={t("team.form.colorsPlaceholder")} />
        </label>
        <label>
          {t("team.form.budget")}
          <input name="budget" value={quote.budget} onChange={updateQuote} placeholder={t("team.form.budgetPlaceholder")} />
        </label>
        <label>
          {t("team.form.date")}
          <input name="deliveryDate" type="date" value={quote.deliveryDate} onChange={updateQuote} />
        </label>
        <label className="team-quote-form__wide">
          {t("team.form.notes")}
          <textarea
            name="notes"
            value={quote.notes}
            onChange={updateQuote}
            placeholder={t("team.form.notesPlaceholder")}
          />
        </label>
      </div>

      <div className="team-quote-form__footer">
        <p id="team-quote-handoff">{t("team.form.handoff")}</p>
        <button
          className="team-button team-button--primary"
          type="submit"
          aria-describedby="team-quote-handoff"
          data-whatsapp-url={createWhatsAppMessageLink(buildWhatsAppMessage())}
        >
          {t("team.quote")}
        </button>
      </div>
    </form>
  );
}
