import "./MintCTA.css";
import SignatureText from "../SignatureText/SignatureText";
import { useI18n } from "../../i18n/I18nProvider";

export default function MintCTA({ onOpenDepartment, onOpenFinder }) {
  const { t } = useI18n();
  const categories = [
    { labelKey: "navigation.trainingGear", view: "training", tone: "training" },
    { labelKey: "navigation.accessories", view: "coquette", tone: "accessories" },
    { labelKey: "navigation.mindGym", view: "mind", tone: "mind" },
    { labelKey: "navigation.apparel", view: "wear", tone: "apparel" }
  ];

  return (
    <section className="mint-cta" aria-label={t("home.discovery.label")}>
      <div className="mint-cta__shape mint-cta__shape--left" aria-hidden="true" />
      <div className="mint-cta__shape mint-cta__shape--right" aria-hidden="true" />
      <div className="mint-cta__dots" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="mint-cta__content">
        <p className="mint-cta__eyebrow">{t("home.discovery.eyebrow")}</p>
        <SignatureText as="h2" className="mint-cta__title" variant="section">
          {t("home.discovery.title1")}
          <br />
          {t("home.discovery.title2")}
        </SignatureText>
        <p className="mint-cta__text">
          {t("home.discovery.text")}
        </p>

        <button className="mint-cta__finder" type="button" onClick={onOpenFinder}>
          {t("home.discovery.finder")} <span aria-hidden="true">-&gt;</span>
        </button>

        <p className="mint-cta__browse-label">{t("home.discovery.browse")}</p>

        <div className="mint-cta__actions">
          {categories.map((category) => (
            <button
              className={`mint-cta__button mint-cta__button--${category.tone}`}
              key={category.view}
              type="button"
              onClick={() => onOpenDepartment?.(category.view)}
            >
              {t(category.labelKey)} <span aria-hidden="true">-&gt;</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
