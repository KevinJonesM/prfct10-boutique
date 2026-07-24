import { useState } from "react";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import { useI18n } from "../../i18n/I18nProvider";

const initialQuote = {
  contactName: "",
  email: "",
  phone: "",
  teamName: "",
  athleteCount: "",
  service: "Competition Leotards",
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

  const openWhatsAppQuote = (event) => {
    event.preventDefault();

    const message = [
      "Hi PRFCT10, I would like to start a PRFCT10 TEAM quote.",
      "",
      `Contact name: ${quote.contactName}`,
      `Email: ${quote.email}`,
      `Phone: ${quote.phone || "Not provided"}`,
      `Gym / team: ${quote.teamName}`,
      `Estimated athlete count: ${quote.athleteCount || "Not confirmed"}`,
      `Service: ${quote.service}`,
      `Desired colors: ${quote.colors || "Open to direction"}`,
      `Approximate budget: ${quote.budget || "Would like guidance"}`,
      `Target delivery date: ${quote.deliveryDate || "Not confirmed"}`,
      `Notes: ${quote.notes || "No additional notes"}`,
      "",
      "Please help me review timing, design direction, sizing, and next steps."
    ].join("\n");

    window.open(createWhatsAppMessageLink(message), "_blank", "noopener,noreferrer");
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
          {t("team.form.service")}
          <select name="service" value={quote.service} onChange={updateQuote}>
            <option value="Competition Leotards">{t("team.form.competition")}</option>
            <option value="Training Leotards">{t("team.form.training")}</option>
            <option value="Competition + Training Leotards">{t("team.form.both")}</option>
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
        <button className="team-button team-button--primary" type="submit" aria-describedby="team-quote-handoff">
          {t("team.quote")} <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
    </form>
  );
}
