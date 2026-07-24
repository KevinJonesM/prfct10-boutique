import "./BrandIntro.css";
import { useI18n } from "../../i18n/I18nProvider";

export default function BrandIntro() {
  const { t } = useI18n();
  return (
    <section className="brand-intro">
      <div className="brand-intro__container">
        <span className="brand-intro__dot brand-intro__dot--magenta" />
        <span className="brand-intro__dot brand-intro__dot--mint" />
        <p className="brand-intro__eyebrow">{t("newsletter.eyebrow")}</p>
        <h2 className="brand-intro__title">{t("story.brandTitle")}</h2>
        <p className="brand-intro__text">
          {t("story.brandText")}
        </p>
      </div>
    </section>
  );
}
