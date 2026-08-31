import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { createCode10ShareSvg, createCode10Png, downloadCode10 } from "./shareCard.js";
import { configLabels } from "./presentation.js";
export default function Code10Share({ result, config, dev }) {
  const { t } = useI18n();
  const [format, setFormat] = useState("story");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [busy, setBusy] = useState(false);
  const svg = useMemo(() => createCode10ShareSvg({ rawScore: result.rawScore, format, ...configLabels(config,t), label: t("code10.labels." + result.labelKey), challengeLine: t("code10.challengeLine"), devLabel: t("code10.devShare"), dev }), [result.rawScore, result.labelKey, format, config, t, dev]);
  useEffect(() => {
    let active = true;
    setImage(null); setStatus("");
    createCode10Png(svg, format).then(blob => { if(active) setImage({ blob, svg }); }).catch(() => { if(active) setStatus("shareError"); });
    return () => { active = false; };
  }, [svg, format, attempt]);
  const blob = image?.svg === svg ? image.blob : null;
  const name = "PRFCT10-CODE10-" + result.vintageDisplayScore + "-" + format + (dev ? "-UI-TEST" : "") + ".png";
  async function share() {
    if (!blob || busy) return;
    setBusy(true);
    const file = new File([blob], name, { type: "image/png" });
    try {
      if (navigator.share && navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], title: "PRFCT10 CODE 10", text: t("code10.challengeLine") }); setStatus("shared"); }
      else { downloadCode10(blob, name); setStatus("downloaded"); }
    } catch(error) {
      if (error.name !== "AbortError") { downloadCode10(blob, name); setStatus("downloaded"); }
    } finally { setBusy(false); }
  }
  return <section className="c10-share" aria-labelledby="c10-share-title">
    <div><p className="c10-kicker">PRFCT10 / CODE 10</p><h2 id="c10-share-title">{t("code10.shareTitle")}</h2><p>{t("code10.shareText")}</p>
    <div className="c10-actions">{["story","feed"].map(value => <button className="c10-button c10-button--paper" type="button" key={value} aria-pressed={format===value} onClick={() => setFormat(value)}>{t("code10."+value)}</button>)}</div>
    <div className="c10-actions"><button className="c10-button" disabled={!blob || busy} onClick={() => { downloadCode10(blob,name); setStatus("downloaded"); }}>{t("code10.download")}</button><button className="c10-button c10-button--paper" disabled={!blob || busy} onClick={share}>{t("code10.share")}</button></div>
    <p role="status">{status ? t("code10."+status) : !blob ? t("code10.preparing") : ""}</p>
    {status==="shareError" && <button className="c10-button" onClick={()=>setAttempt(n=>n+1)}>{t("code10.retryImage")}</button>}</div>
    <div className="c10-share__preview" role="img" aria-label={"CODE 10 · "+result.formattedScore} dangerouslySetInnerHTML={{__html:svg}} />
  </section>;
}
