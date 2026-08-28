import "./BrandIntro.css";
import { useI18n } from "../../i18n/I18nProvider";
import NewsletterForm from "../Newsletter/NewsletterForm";

const socialLinks = [
  { label: "Instagram", handle: "@ThePrfctX", href: "https://www.instagram.com/ThePrfctX" },
  { label: "TikTok", handle: "@ThePrfctX", href: "https://www.tiktok.com/@ThePrfctX" }
];

export default function BrandIntro() {
  const { t } = useI18n();
  return (
    <section className="brand-intro" aria-labelledby="community-title">
      <div className="brand-intro__container">
        <span className="brand-intro__dot brand-intro__dot--magenta" aria-hidden="true" />
        <span className="brand-intro__dot brand-intro__dot--mint" aria-hidden="true" />

        <header className="brand-intro__header">
          <p className="brand-intro__eyebrow">{t("story.communityEyebrow")}</p>
          <h2 className="brand-intro__title" id="community-title">{t("story.brandTitle")}</h2>
          <p className="brand-intro__text">{t("story.brandText")}</p>
        </header>

        <div className="brand-intro__club">
          <div className="brand-intro__newsletter">
            <div className="brand-intro__newsletter-copy">
              <h3>{t("newsletter.footerTitle")}</h3>
              <p>{t("newsletter.footerText")}</p>
            </div>
            <NewsletterForm source="home-community" submitLabel={t("newsletter.join")} />
          </div>

          <nav className="brand-intro__socials" aria-label={t("story.socialLabel")}>
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                <span>{social.label}</span>
                <strong>{social.handle}</strong>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
