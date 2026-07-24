import "./About.css";
import { useI18n } from "../../i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">{t("story.aboutEyebrow")}</p>
          <h2 className="about__title">
            {t("story.aboutTitle1")}
            <br />
            {t("story.aboutTitle2")}
          </h2>
          <p>
            {t("story.aboutText1")}
          </p>
          <p>
            {t("story.aboutText2")}
          </p>
          <strong>{t("story.aboutMotto")}</strong>
        </div>
      </div>
    </section>
  );
}
