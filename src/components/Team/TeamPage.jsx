import Footer from "../Footer/Footer";
import TeamQuoteForm from "./TeamQuoteForm";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import BowDesignerCTA from "../BowDesigner/BowDesignerCTA";
import "./Team.css";
import { useI18n } from "../../i18n/I18nProvider";

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Team",
    text: "Share your colors, athlete count, age range, style, budget, and season."
  },
  {
    number: "02",
    title: "We Build the Direction",
    text: "We shape the fabrics, colors, embellishment level, and visual concept."
  },
  {
    number: "03",
    title: "Approve the Look",
    text: "Confirm sizing and design, request adjustments, and give final approval."
  },
  {
    number: "04",
    title: "Your Team Shines",
    text: "Your approved look moves into production and delivery."
  }
];

export default function TeamPage({ onBackHome, onOpenDepartment, onOpenBoutique, onOpenShipping, onOpenBowDesigner }) {
  const { t } = useI18n();
  const localizedSteps = t("team.steps");
  const scrollToQuote = () => document.querySelector("#team-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <main className="team-page">
        <section className="team-page-hero" aria-labelledby="team-page-title">
          <div className="team-page-hero__copy">
            <p className="team-kicker">{t("team.kicker")}</p>
            <h1 id="team-page-title">{t("team.title1")}<br />{t("team.title2")}</h1>
            <p>{t("team.summary")}</p>
            <div className="team-page-hero__actions">
              <button className="team-button team-button--primary" type="button" onClick={scrollToQuote}>
                {t("team.quote")}
              </button>
              <button className="team-button team-button--outline" type="button" onClick={onOpenBowDesigner}>
                {t("bow.teamCta")}
              </button>
            </div>
            <small>{t("team.heroNote")}</small>
          </div>
          <div className="team-page-hero__media">
            <div className="team-page-hero__collage">
              <OptimizedImage
                className="team-page-hero__primary-image"
                src="/images/hero-boutique-ropa-mallas.png"
                alt={t("team.visualAltPrimary")}
                loading="eager"
                fetchPriority="high"
                width="1672"
                height="1200"
              />
              <OptimizedImage
                className="team-page-hero__secondary-image"
                src="/images/collection-mallas.png"
                alt={t("team.visualAltSecondary")}
                loading="eager"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </section>

        <BowDesignerCTA context="team" onOpenDesigner={onOpenBowDesigner} />

        <section className="team-process" id="team-process" aria-labelledby="team-process-title">
          <div className="team-section-heading team-section-heading--light">
            <p className="team-kicker">{t("team.processEyebrow")}</p>
            <h2 id="team-process-title">{t("team.processTitle")}</h2>
          </div>
          <ol className="team-process__grid">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{localizedSteps[index]?.title || step.title}</h3>
                <p>{localizedSteps[index]?.text || step.text}</p>
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
          <TeamQuoteForm />
        </section>
      </main>

      <Footer onBackHome={onBackHome} onOpenDepartment={onOpenDepartment} onOpenShipping={onOpenShipping} />
    </>
  );
}
