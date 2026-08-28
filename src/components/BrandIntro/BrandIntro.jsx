import "./BrandIntro.css";
import { useI18n } from "../../i18n/I18nProvider";

const socialLinks = [
  { label: "Instagram", handle: "@ThePrfctX", href: "https://www.instagram.com/ThePrfctX" },
  { label: "TikTok", handle: "@ThePrfctX", href: "https://www.tiktok.com/@ThePrfctX" }
];

export default function BrandIntro() {
  const { t } = useI18n();
  return (
    <section className="brand-intro">
      <div className="brand-intro__container">
        <span className="brand-intro__dot brand-intro__dot--magenta" />
        <span className="brand-intro__dot brand-intro__dot--mint" />
        <h2 className="brand-intro__title">{t("story.brandTitle")}</h2>
        <p className="brand-intro__text">
          {t("story.brandText")}
        </p>
        <div className="brand-intro__socials" aria-label={t("story.socialLabel")}>
          {socialLinks.map((social) => (
            <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
              <span>{social.label}</span>
              <strong>{social.handle}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
