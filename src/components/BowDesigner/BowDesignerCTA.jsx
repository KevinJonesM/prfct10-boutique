import { useI18n } from "../../i18n/I18nProvider";
import BowTeaserPreview from "./BowTeaserPreview";
import "./BowDesigner.css";

export default function BowDesignerCTA({ onOpenDesigner }) {
  const { t } = useI18n();
  return (
    <section className="bow-designer" aria-labelledby="bow-designer-title">
      <div className="bow-designer__copy">
        <p className="section-eyebrow">{t("bow.eyebrow")}</p>
        <h2 className="section-title" id="bow-designer-title">{t("bow.title")}</h2>
        <p className="section-description">{t("bow.description")}</p>
        <button type="button" onClick={onOpenDesigner}>{t("bow.cta")}</button>
      </div>
      <div className="bow-designer__visual" aria-hidden="true"><BowTeaserPreview /></div>
    </section>
  );
}
