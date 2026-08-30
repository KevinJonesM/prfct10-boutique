import { useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { getGameResult, questionText } from "./engine.js";
import Code10VintageScoreboard from "./Code10VintageScoreboard";
import Code10Share from "./Code10Share";
export default function Code10Result({ game, config, onReplay, onConfigure, dev }) {
  const { t, locale } = useI18n();
  const [review, setReview] = useState("missed");
  const result = useMemo(()=>getGameResult(game),[game]);
  const rows = game.questions.filter((q,i)=>review==="all" || !game.answers[i].correct);
  return <section className={"c10-result "+(result.rawScore===10 ? "c10-result--perfect":"")}>
    <div className="c10-result__hero"><p className="c10-kicker">{t("code10.result")}</p>
      <Code10VintageScoreboard score={result.vintageDisplayScore} rawScore={result.rawScore} animate />
      <div className="c10-result__identity"><strong>{result.formattedScore}</strong><h1 data-c10-focus tabIndex="-1">{t("code10.labels."+result.labelKey)}</h1><p>{t("code10.correctCount",{count:result.rawScore})} · {t("code10.accuracy",{count:result.accuracy})}</p>
      <p>{config.program} {config.division} / {t("code10.categories."+config.category)}</p>
      <b>{t(result.rawScore===10 ? "code10.perfectLine":result.incorrectAnswers===1 ? "code10.resultLineOne":"code10.resultLine",{count:result.incorrectAnswers})}</b></div>
    </div>
    <section className="c10-review" aria-label={t("code10.review")}><div className="c10-actions">
      <button className="c10-button c10-button--paper" aria-pressed={review==="missed"} onClick={()=>setReview("missed")}>{t("code10.missed",{count:result.incorrectAnswers})}</button>
      <button className="c10-button c10-button--paper" aria-pressed={review==="all"} onClick={()=>setReview("all")}>{t("code10.my10")}</button>
    </div>
    {!rows.length ? <h2>{t("code10.nothing")}</h2> : <ol>{rows.map(q=><li key={q.id}><b>{String(game.questions.indexOf(q)+1).padStart(2,"0")}</b><p lang={locale==="es" && !q.takeaway_es ? "en":locale}>{questionText(q,"takeaway",locale)}</p></li>)}</ol>}
    </section>
    <section className="c10-replay"><h2>{t("code10.replay")}</h2><div className="c10-actions">
      <button className="c10-button" onClick={()=>onReplay(config)}>{t("code10.new10")} ↗</button>
      <button className="c10-button c10-button--paper" onClick={()=>onReplay(config)}>{t("code10.same")}</button>
      <button className="c10-button c10-button--paper" onClick={()=>onReplay({...config,category:"MIX"})}>{t("code10.mix")}</button>
      <button className="c10-link" onClick={onConfigure}>{t("code10.configure")}</button>
    </div></section>
    <Code10Share result={result} config={config} dev={dev} />
  </section>;
}
