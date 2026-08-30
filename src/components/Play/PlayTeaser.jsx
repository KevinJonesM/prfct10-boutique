import SignatureText from "../SignatureText/SignatureText";
import { useI18n } from "../../i18n/I18nProvider";
import "./Play.css";

export default function PlayTeaser({ onOpenPlay }) {
  const { t } = useI18n();
  return (
    <section className="play-teaser" aria-labelledby="play-teaser-title">
      <div className="play-teaser__shine" aria-hidden="true" />
      <div>
        <p className="play-eyebrow">PRFCT10 PLAY</p>
        <h2 id="play-teaser-title"><SignatureText variant="section">{t("play.teaser.title")}</SignatureText></h2>
        <p>{t("play.teaser.text")}</p>
      </div>
      <button className="play-button play-button--dark" type="button" onClick={onOpenPlay}>{t("play.teaser.cta")}</button>
    </section>
  );
}
