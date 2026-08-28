import { useState } from "react";
import { createWhatsAppMessageLink } from "../../utils/whatsapp";
import { useI18n } from "../../i18n/I18nProvider";

const initialQuote = {
  contactName: "",
  email: "",
  phone: "",
  teamName: "",
  athleteCount: "",
  colors: "",
  sizeRange: "",
  budget: "",
  deliveryDate: "",
  notes: ""
};

const serviceOptions = ["training", "competition", "bows", "complete"];

export default function TeamQuoteForm({ selectedServices, onSelectedServicesChange }) {
  const { t } = useI18n();
  const [quote, setQuote] = useState(initialQuote);
  const [servicesError, setServicesError] = useState(false);

  const updateQuote = (event) => {
    const { name, value } = event.target;
    setQuote((current) => ({ ...current, [name]: value }));
  };

  const updateServices = (event) => {
    const { value, checked } = event.target;
    let nextServices;
    if (value === "complete") {
      nextServices = checked ? ["complete"] : [];
    } else {
      const withoutComplete = selectedServices.filter((service) => service !== "complete");
      nextServices = checked ? [...withoutComplete, value] : withoutComplete.filter((service) => service !== value);
    }
    onSelectedServicesChange([...new Set(nextServices)]);
    setServicesError(false);
  };

  const buildWhatsAppMessage = () => {
    const valueOrFallback = (value, fallbackKey) => value || t(`team.form.${fallbackKey}`);
    const services = selectedServices.length
      ? selectedServices.map((service) => t(`team.form.${service}`)).join(", ")
      : t("team.form.notSelected");
    return t("team.form.whatsappMessage", {
      contactName: quote.contactName,
      email: quote.email,
      phone: valueOrFallback(quote.phone, "notProvided"),
      teamName: quote.teamName,
      athleteCount: valueOrFallback(quote.athleteCount, "notConfirmed"),
      services,
      colors: valueOrFallback(quote.colors, "openDirection"),
      sizeRange: valueOrFallback(quote.sizeRange, "notConfirmed"),
      budget: valueOrFallback(quote.budget, "guidance"),
      deliveryDate: valueOrFallback(quote.deliveryDate, "notConfirmed"),
      notes: valueOrFallback(quote.notes, "noNotes")
    });
  };

  const openWhatsAppQuote = (event) => {
    event.preventDefault();
    if (!selectedServices.length) {
      setServicesError(true);
      document.querySelector("#team-services-options")?.focus();
      return;
    }
    window.open(createWhatsAppMessageLink(buildWhatsAppMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="team-quote-form" onSubmit={openWhatsAppQuote}>
      <div className="team-quote-form__grid">
        <label>{t("team.form.name")}<input name="contactName" value={quote.contactName} onChange={updateQuote} autoComplete="name" required /></label>
        <label>{t("team.form.email")}<input name="email" type="email" value={quote.email} onChange={updateQuote} autoComplete="email" required /></label>
        <label>{t("team.form.phone")}<input name="phone" type="tel" value={quote.phone} onChange={updateQuote} autoComplete="tel" /></label>
        <label>{t("team.form.team")}<input name="teamName" value={quote.teamName} onChange={updateQuote} required /></label>
        <label>{t("team.form.count")}<input name="athleteCount" type="number" min="1" inputMode="numeric" value={quote.athleteCount} onChange={updateQuote} /></label>
        <label>{t("team.form.sizeRange")}<input name="sizeRange" value={quote.sizeRange} onChange={updateQuote} placeholder={t("team.form.sizeRangePlaceholder")} /></label>

        <fieldset className={`team-quote-form__services team-quote-form__wide${servicesError ? " team-quote-form__services--error" : ""}`} id="team-services-options" tabIndex="-1" aria-describedby={servicesError ? "team-services-error" : undefined}>
          <legend>{t("team.form.services")}</legend>
          <div className="team-quote-form__service-options">
            {serviceOptions.map((service) => (
              <label key={service}>
                <input type="checkbox" value={service} checked={selectedServices.includes(service)} onChange={updateServices} />
                <span>{t(`team.form.${service}`)}</span>
              </label>
            ))}
          </div>
          {servicesError && <p id="team-services-error" role="alert">{t("team.form.servicesRequired")}</p>}
        </fieldset>

        <label>{t("team.form.colors")}<input name="colors" value={quote.colors} onChange={updateQuote} placeholder={t("team.form.colorsPlaceholder")} /></label>
        <label>{t("team.form.budget")}<input name="budget" value={quote.budget} onChange={updateQuote} placeholder={t("team.form.budgetPlaceholder")} /></label>
        <label>{t("team.form.date")}<input name="deliveryDate" type="date" value={quote.deliveryDate} onChange={updateQuote} /></label>
        <label className="team-quote-form__wide">{t("team.form.notes")}<textarea name="notes" value={quote.notes} onChange={updateQuote} placeholder={t("team.form.notesPlaceholder")} /></label>
      </div>

      <div className="team-quote-form__footer">
        <p id="team-quote-handoff">{t("team.form.handoff")}</p>
        <button className="team-button team-button--primary" type="submit" aria-describedby="team-quote-handoff" data-whatsapp-url={createWhatsAppMessageLink(buildWhatsAppMessage())}>{t("team.quote")}</button>
      </div>
    </form>
  );
}
