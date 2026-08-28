import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import TeamQuoteForm from "./TeamQuoteForm";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./Team.css";
import { useI18n } from "../../i18n/I18nProvider";

const processSteps = ["01", "02", "03", "04"];

const serviceCards = [
  { id: "training", image: "/images/team-card-training-leotards.png", imageKey: "team.services.trainingAlt" },
  { id: "competition", image: "/images/team-card-competition-leotards.png", imageKey: "team.services.competitionAlt" },
  { id: "bows", image: "/images/team-card-bows.png", imageKey: "team.services.bowsAlt" }
];

export default function TeamPage({ onBackHome, onOpenDepartment, onOpenShipping, onOpenBowDesigner }) {
  const { t } = useI18n();
  const [selectedServices, setSelectedServices] = useState([]);
  const servicesRef = useRef(null);
  const localizedSteps = t("team.steps");

  useEffect(() => {
    const revealItems = servicesRef.current?.querySelectorAll(".team-reveal");
    if (!revealItems?.length) return undefined;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
    }, { rootMargin: "-6% 0px -10%", threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollToQuote = (service) => {
    if (service) setSelectedServices([service]);
    window.requestAnimationFrame(() => {
      document.querySelector("#team-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleServiceAction = (service) => {
    if (service === "bows") {
      onOpenBowDesigner();
      return;
    }
    scrollToQuote(service);
  };

  return (
    <>
      <main className="team-page">
        <section className="team-page-hero" aria-labelledby="team-page-title">
          <div className="team-page-hero__copy">
            <p className="team-kicker">{t("team.kicker")}</p>
            <h1 id="team-page-title">{t("team.title")}</h1>
            <p>{t("team.summary")}</p>
            <div className="team-page-hero__actions">
              <button className="team-button team-button--primary" type="button" onClick={() => scrollToQuote()}>
                {t("team.quote")}
              </button>
            </div>
          </div>
          <div className="team-page-hero__media">
            <OptimizedImage src="/images/hero-boutique-ropa-mallas.png" alt={t("team.heroAlt")} loading="eager" fetchPriority="high" width="1672" height="1200" />
          </div>
        </section>

        <section className="team-services" ref={servicesRef} aria-labelledby="team-services-title">
          <div className="team-section-heading team-services__heading team-reveal">
            <p className="team-kicker">{t("team.servicesEyebrow")}</p>
            <h2 id="team-services-title">{t("team.servicesTitle")}</h2>
            <p>{t("team.servicesText")}</p>
          </div>
          <div className="team-services__grid">
            {serviceCards.map((service) => (
              <article className="team-service team-reveal" key={service.id}>
                <div className={`team-service__visual team-service__visual--${service.id}`}>
                  <OptimizedImage src={service.image} alt={t(service.imageKey)} loading="lazy" width="1122" height="1402" />
                </div>
                <div className="team-service__body">
                  <h3>{t(`team.services.${service.id}Title`)}</h3>
                  <p>{t(`team.services.${service.id}Text`)}</p>
                  <button type="button" onClick={() => handleServiceAction(service.id)}>{t(`team.services.${service.id}Cta`)}</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="team-process" id="team-process" aria-labelledby="team-process-title">
          <div className="team-section-heading team-section-heading--light">
            <p className="team-kicker">{t("team.processEyebrow")}</p>
            <h2 id="team-process-title">{t("team.processTitle")}</h2>
          </div>
          <ol className="team-process__grid">
            {processSteps.map((number, index) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{localizedSteps[index].title}</h3>
                <p>{localizedSteps[index].text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="team-quote" id="team-quote" aria-labelledby="team-quote-title">
          <div className="team-quote__intro">
            <p className="team-kicker">{t("team.start")}</p>
            <h2 id="team-quote-title">{t("team.needs")}</h2>
            <p>{t("team.intro")}</p>
            <div className="team-quote__trust">
              <strong>{t("team.guided")}</strong>
              <span>{t("team.noClaims")}</span>
            </div>
          </div>
          <TeamQuoteForm selectedServices={selectedServices} onSelectedServicesChange={setSelectedServices} />
        </section>
      </main>
      <Footer onBackHome={onBackHome} onOpenDepartment={onOpenDepartment} onOpenShipping={onOpenShipping} />
    </>
  );
}
