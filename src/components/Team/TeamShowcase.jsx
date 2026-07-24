import "./Team.css";
import Reveal from "../Motion/Reveal";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { useI18n } from "../../i18n/I18nProvider";

export default function TeamShowcase({ onOpenTeam }) {
  const { t } = useI18n();
  return (
    <section className="team-showcase" aria-labelledby="team-showcase-title">
      <div className="team-showcase__panel">
        <Reveal className="team-showcase__copy">
          <p className="team-kicker">{t("team.kicker")}</p>
          <h2 id="team-showcase-title">
            {t("team.title1")}
            <br />
            {t("team.title2")}
          </h2>
          <p className="team-showcase__summary">
            {t("team.summary")}
          </p>
          <div className="team-showcase__actions">
            <button className="team-button team-button--primary" type="button" onClick={() => onOpenTeam?.("#team-quote")}>
              {t("team.quote")} <span aria-hidden="true">-&gt;</span>
            </button>
            <button className="team-button team-button--secondary" type="button" onClick={() => onOpenTeam?.("#team-process")}>
              {t("team.how")} <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
          <ul className="team-showcase__notes" aria-label={t("team.highlights")}>
            <li>{t("team.custom")}</li>
            <li>{t("team.sizing")}</li>
            <li>{t("team.assisted")}</li>
          </ul>
        </Reveal>

        <Reveal className="team-showcase__media" delay={90}>
          <OptimizedImage
            src="/images/team-showcase-gymnast.png"
            alt={`${t("team.kicker")}: ${t("team.summary")}`}
            loading="lazy"
            width="1200"
            height="900"
            style={{ objectPosition: "65% center" }}
          />
          <span className="team-showcase__media-label">{t("team.mediaLabel")}</span>
        </Reveal>
      </div>
    </section>
  );
}
