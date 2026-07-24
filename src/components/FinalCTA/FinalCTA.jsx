import "./FinalCTA.css";
import SignatureText from "../SignatureText/SignatureText";
import { useI18n } from "../../i18n/I18nProvider";

export default function FinalCTA({ onOpenBoutique }) {
  const { t } = useI18n();
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <p className="final-cta__eyebrow">PRFCT10</p>
        <SignatureText as="h2" className="final-cta__title" variant="hero">
          {t("story.finalTitle1")}
          <br />
          {t("story.finalTitle2")}
        </SignatureText>
        <div className="final-cta__actions">
          <button className="final-cta__button" type="button" onClick={onOpenBoutique}>{t("story.finalCta")}</button>
        </div>
      </div>
    </section>
  );
}
