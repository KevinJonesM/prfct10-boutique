import { useMemo, useRef, useState } from "react";
import SignatureText from "../SignatureText/SignatureText";
import { ALL_POWER_COLORS } from "./playData";
import { createPowerPack } from "./powerPackData";
import { createPowerPackBlobs, createPowerPackSvgs, downloadPowerPack, downloadPowerStory, downloadPowerStorySvg } from "./powerCardCanvas";

export function getResultCopy(result, t) {
  return {
    today: t("play.powerCheck.result.today"),
    identity: t(`play.identities.${result.apparatus}.name`),
    identityLine: t(`play.identities.${result.apparatus}.line`),
    apparatus: t(`play.powerCheck.options.apparatus.${result.apparatus}`),
    energy: t(`play.energyMessages.${result.currentEnergy}`),
    mantra: t(`play.mantras.${result.intention}`),
    ritualLabel: t("play.powerCheck.result.ritualLabel"),
    ritual: t(`play.rituals.${result.intention}`),
    coach: t("play.powerCheck.result.coach")
  };
}

function StoryPreview({ story, number, t }) {
  if (number === 1) return <article className="power-story power-story--one"><img className="power-story__logo" src="/images/prfct10-logo.png" alt="PRFCT10" /><p className="power-story__label">{story.label}</p><small className="power-story__mode">{story.mode}</small><h2>{story.profile}</h2><p className="power-story__apparatus">{story.apparatus}</p><div className="power-story__mantra"><span>POWER QUOTE</span><strong>“{story.quote}”</strong><em>{story.mantra}</em></div><div className="power-story__rings" aria-hidden="true" /></article>;
  if (number === 2) return <article className="power-story power-story--two"><img className="power-story__logo" src="/images/prfct10-logo.png" alt="PRFCT10" /><p className="power-story__label">{story.label}</p><h2>{story.mixLabel}</h2><p className="power-story__mix">{story.mix}</p><div className="power-story__meanings">{story.colors.map((color) => <div className="power-story__meaning" key={color.id} style={{ "--story-color": color.value, "--story-text": ["#FFFFFF", "#F9D94C", "#8FD6F2"].includes(color.value) ? "#171717" : "#FFFFFF" }}><strong>{color.name}</strong><span>{color.energy}</span><p>{color.description}</p></div>)}</div><blockquote className="power-story__quote">“{story.quote}”</blockquote></article>;
  return <article className="power-story power-story--three"><img className="power-story__logo" src="/images/prfct10-logo.png" alt="PRFCT10" /><p className="power-story__label">{story.label}</p><h2>{story.gymnastName}</h2><p className="power-story__apparatus">{story.countryCode} · {story.apparatus}</p><div className="power-story__element"><span>{story.elementLabel}</span><strong>{story.elementName}</strong><p>{story.elementDescription}</p><b>{story.worthLabel}: {story.worth}</b></div><div className="power-story__fact"><span>{story.factLabel}</span><p>{story.funFact}</p><small>{story.source}</small></div><div className="power-story__geometry" aria-hidden="true" /></article>;
}

export default function PowerResult({ result, onTryAgain, onBackToPlay, t, locale }) {
  const [activeStory, setActiveStory] = useState(0);
  const [exportState, setExportState] = useState("idle");
  const touchStart = useRef(null);
  const copy = useMemo(() => getResultCopy(result, t), [result, t]);
  const pack = useMemo(() => createPowerPack({ result, copy, locale, t }), [result, copy, locale, t]);
  const colors = result.colors.map((id) => ALL_POWER_COLORS.find((color) => color.id === id)).filter(Boolean);
  const go = (delta) => setActiveStory((current) => Math.max(0, Math.min(2, current + delta)));

  const exportStories = async (share) => {
    if (exportState === "working") return;
    setExportState("working");
    try {
      const blobs = await createPowerPackBlobs({ pack });
      if (share && navigator.share) {
        const files = blobs.map((blob, index) => new File([blob], `prfct10-power-pack-story-${index + 1}.png`, { type: "image/png" }));
        if (navigator.canShare?.({ files })) {
          await navigator.share({ files, title: "PRFCT10 POWER PACK", text: copy.mantra });
          setExportState("shared");
          return;
        }
      }
      if (share) downloadPowerPack(blobs);
      else downloadPowerStory(blobs[activeStory], activeStory + 1);
      setExportState(share ? "packSaved" : "saved");
    } catch (error) {
      if (error?.name === "AbortError") setExportState("idle");
      else setExportState("error");
    }
  };

  return <section className="power-result" aria-labelledby="power-result-title" aria-live="polite">
    <div className="power-result__layout"><div className="power-result__card">
      <p className="play-eyebrow">PRFCT10 POWER CHECK</p><p className="power-result__today">{copy.today}</p><h1 id="power-result-title"><SignatureText variant="hero">{copy.identity}</SignatureText></h1><p className="power-result__identity-line">{copy.identityLine}</p>
      <div className="power-result__profile"><div><span>{t("play.powerCheck.result.apparatusLabel")}</span><strong>{copy.apparatus}</strong></div><div><span>{t("play.powerCheck.result.colorsLabel")}</span><div className="power-result__colors">{colors.map((color) => <span key={color.id} style={{ "--result-color": color.value }}><i aria-hidden="true" /> {t(`play.colors.${color.id}`)}</span>)}</div></div></div>
      <div className="power-result__message"><p>{copy.energy}</p><blockquote>{copy.mantra}</blockquote></div><div className="power-result__ritual"><h2>{copy.ritualLabel}</h2><ol>{copy.ritual.map((item) => <li key={item}>{item}</li>)}</ol><p>{copy.coach}</p></div>
    </div><aside className="power-pack" aria-label={t("play.powerCheck.result.previewLabel")} onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current == null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 40) go(distance < 0 ? 1 : -1); touchStart.current = null; }}>
      <header className="power-pack__header"><div><p className="play-eyebrow">PRFCT10 PLAY</p><h2>{t("play.powerCheck.powerPack.title")}</h2><p>{t("play.powerCheck.powerPack.intro")}</p></div><span>{activeStory + 1} / 3</span></header>
      <div className="power-pack__viewport" aria-label={t("play.powerCheck.result.previewLabel")} dangerouslySetInnerHTML={{ __html: createPowerPackSvgs({ pack })[activeStory] }} />
      <div className="power-pack__controls"><button className="play-icon-button" type="button" onClick={() => go(-1)} disabled={activeStory === 0} aria-label={t("play.powerCheck.powerPack.previous")}>←</button><div className="power-pack__dots" aria-label={t("play.powerCheck.powerPack.slideLabel", { current: activeStory + 1, total: 3 })}>{[0, 1, 2].map((index) => <button key={index} type="button" className={index === activeStory ? "is-active" : ""} onClick={() => setActiveStory(index)} aria-label={t("play.powerCheck.powerPack.slideLabel", { current: index + 1, total: 3 })} />)}</div><button className="play-icon-button" type="button" onClick={() => go(1)} disabled={activeStory === 2} aria-label={t("play.powerCheck.powerPack.next")}>→</button></div>
    </aside></div>
    <div className="power-result__actions"><button className="play-button play-button--primary" type="button" onClick={() => exportStories(false)} disabled={exportState === "working"}>{exportState === "working" ? t("play.powerCheck.powerPack.creating") : t("play.powerCheck.powerPack.download")}</button><button className="play-button play-button--secondary" type="button" onClick={() => exportStories(true)} disabled={exportState === "working"}>{t("play.powerCheck.powerPack.share")}</button><button className="play-button play-button--secondary" type="button" onClick={() => downloadPowerStorySvg(createPowerPackSvgs({ pack })[activeStory], activeStory + 1)} disabled={exportState === "working"}>{t("play.powerCheck.powerPack.svg")}</button><button className="play-button play-button--secondary" type="button" onClick={onTryAgain}>{t("play.powerCheck.powerPack.createAnother")}</button><button className="play-text-button" type="button" onClick={onBackToPlay}>{t("play.powerCheck.result.backToPlay")}</button></div>
    <p className={`power-result__status power-result__status--${exportState}`} role="status">{exportState === "saved" ? t("play.powerCheck.powerPack.downloaded", { number: activeStory + 1 }) : null}{exportState === "packSaved" ? t("play.powerCheck.powerPack.downloadedPack") : null}{exportState === "shared" ? t("play.powerCheck.powerPack.shared") : null}{exportState === "error" ? t("play.powerCheck.powerPack.exportError") : null}</p>
  </section>;
}
