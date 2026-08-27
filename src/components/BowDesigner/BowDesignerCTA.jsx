import { useI18n } from "../../i18n/I18nProvider";
import BowTeaserPreview from "./BowTeaserPreview";
import "./BowDesigner.css";

export default function BowDesignerCTA({ onOpenDesigner, context = "shop" }) {
  const { t } = useI18n();
  const isTeam = context === "team";
  return (
    <section className={`bow-designer${isTeam ? " bow-designer--team" : ""}`} aria-labelledby={isTeam ? "team-bow-designer-title" : "bow-designer-title"}>
      <div className="bow-designer__copy">
        <p className="section-eyebrow">{t(isTeam ? "bow.teamEyebrow" : "bow.eyebrow")}</p>
        <h2 className="section-title" id={isTeam ? "team-bow-designer-title" : "bow-designer-title"}>
          {t(isTeam ? "bow.teamTitle" : "bow.title")}
        </h2>
        <p className="section-description">{t(isTeam ? "bow.teamDescription" : "bow.description")}</p>
        <button type="button" onClick={onOpenDesigner}>{t(isTeam ? "bow.teamCta" : "bow.cta")}</button>
      </div>
      <div className="bow-designer__visual" aria-hidden="true"><BowTeaserPreview /></div>
    </section>
  );
}
