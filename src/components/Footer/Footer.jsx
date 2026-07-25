import "./Footer.css";
import { createWhatsAppLink } from "../../utils/whatsapp";
import NewsletterForm from "../Newsletter/NewsletterForm";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

export default function Footer({ onBackHome, onOpenDepartment, onOpenBoutique }) {
  const { locale, t } = useI18n();
  const handleHome = (event, target = "#inicio") => {
    event.preventDefault();
    onBackHome?.(target);
  };

  const handleDepartment = (event, department) => {
    event.preventDefault();
    onOpenDepartment?.(department);
  };

  const handleBoutique = (event) => {
    event.preventDefault();
    onOpenBoutique?.();
  };

  const handleShopAll = (event) => {
    event.preventDefault();
    onOpenDepartment?.("all");
  };

  return (
    <footer className="footer" id="redes">
      <section className="footer-newsletter" aria-labelledby="footer-newsletter-title">
        <div className="footer-newsletter__copy">
          <p>{t("newsletter.eyebrow")}</p>
          <h2 id="footer-newsletter-title">{t("newsletter.footerTitle")}</h2>
          <span>{t("newsletter.footerText")}</span>
        </div>
        <NewsletterForm source="footer" submitLabel={t("newsletter.join")} />
      </section>

      <div className="footer__panel footer__container">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">
            <OptimizedImage src="/images/prfct10-logo.png" alt="" loading="lazy" width="100" height="100" />
          </span>
          <h2>PRFCT10</h2>
          <p className="footer__tagline">{t("footer.tagline")}</p>
          <p>
            {t("footer.description")}
          </p>
          <p className="footer__note">
            {t("footer.partnership")} {" "}
            <a href="https://www.gimnasiaofk.com" target="_blank" rel="noreferrer">
              Only For Kids Fitness Center
            </a>
            .
          </p>
        </div>

        <div className="footer__group">
          <h3>{t("footer.explore")}</h3>
          <a href="/training-gear" onClick={(event) => handleDepartment(event, "training")}>{t("navigation.trainingGear")}</a>
          <a href="/accessories" onClick={(event) => handleDepartment(event, "coquette")}>{t("navigation.accessories")}</a>
          <a href="/apparel" onClick={(event) => handleDepartment(event, "wear")}>{t("navigation.apparel")}</a>
          <a href="/mind-gym" onClick={(event) => handleDepartment(event, "mind")}>{t("navigation.mindGym")}</a>
        </div>

        <div className="footer__group">
          <h3>{t("footer.shop")}</h3>
          <a href="/training-gear" onClick={handleBoutique}>{t("navigation.trainingGear")}</a>
          <a href="/#standard" onClick={(event) => handleHome(event, "#standard")}>{t("footer.standard")}</a>
          <a href="/#nosotros" onClick={(event) => handleHome(event, "#nosotros")}>{t("footer.about")}</a>
          <span className="footer__pill">{t("footer.shipping")}</span>
        </div>

        <div className="footer__group footer__group--social">
          <h3>{t("footer.support")}</h3>
          <a href={createWhatsAppLink(undefined, locale)} target="_blank" rel="noreferrer">{t("footer.whatsapp")}</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          <a href="/shop" onClick={handleShopAll}>{t("footer.shopPrfct10")}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{t("footer.rights")}</span>
        <strong>{t("footer.shipping")}</strong>
        <a href="/" onClick={handleHome}>{t("footer.backHome")}</a>
      </div>
    </footer>
  );
}
