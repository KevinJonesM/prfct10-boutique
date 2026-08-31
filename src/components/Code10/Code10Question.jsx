import { useI18n } from "../../i18n/I18nProvider";
import { getLiveScore, questionText, questionApparatus } from "./engine.js";
import { localizedEyebrow } from "./presentation.js";
export default function Code10Question({ game, dispatch }) {
  const { t, locale } = useI18n();
  const question = game.questions[game.index];
  const answer = game.answers[game.index];
  const live = getLiveScore(game.answers);
  return <section className="c10-game">
    <div className="c10-live"><span>{t("code10.question")} <strong>{String(game.index+1).padStart(2,"0")} / 10</strong></span><span>{t("code10.codeScore")} <strong aria-live="polite">{live.formattedScore}</strong></span></div>
    <ol className="c10-progress" aria-label={t("code10.question")}>{game.questions.map((q,i)=><li key={q.id} aria-current={i===game.index ? "step" : undefined} className={game.answers[i] ? game.answers[i].correct ? "is-correct" : "is-missed" : ""}><span>{String(i+1).padStart(2,"0")}</span>{game.answers[i] && <b aria-label={t(game.answers[i].correct ? "code10.correct":"code10.lost")}>{game.answers[i].correct ? "✓":"×"}</b>}</li>)}</ol>
    <p className="c10-kicker">{localizedEyebrow(question,t,locale)} · {questionApparatus(question).map(apparatus => apparatus === "GENERAL" ? t("code10.general") : t("code10.categories."+apparatus)).join(" / ")}</p>
    <h1 tabIndex="-1" data-c10-focus lang={locale==="es" && !question.question_es ? "en" : locale}>{questionText(question,"question",locale)}</h1>
    <p>{t("code10.choose")}</p>
    <div className="c10-answers">{question.options.map((option,i)=>{
      const selected = answer?.optionId===option.id;
      const correct = !!answer && question.correctOptionId===option.id;
      return <button className={correct ? "is-correct" : selected ? "is-missed" : ""} key={option.id} disabled={!!answer} onClick={()=>dispatch({type:"answer",optionId:option.id})}>
        <b className="c10-letter">{String.fromCharCode(65+i)}</b><span lang={locale==="es" && !option.text_es ? "en" : locale}>{option["text_"+locale] || option.text_en || option.text}</span>
        {answer && (correct || selected) && <small>{correct ? "✓ "+t("code10.correct") : "× "+t("code10.chosen")}</small>}
      </button>;
    })}</div>
    {answer && <div className={"c10-feedback "+(answer.correct ? "is-correct":"is-missed")} role="status">
      <div><h2>{answer.correct ? "✓ "+t("code10.saved") : "× "+t("code10.lost")}</h2>{!answer.correct && <strong>{t("code10.lostLine")}</strong>}</div>
      <div><p className="c10-kicker">{t("code10.know")}</p><p lang={locale==="es" && !question.explanation_es ? "en" : locale}>{questionText(question,"explanation",locale)}</p></div>
    </div>}
    <div className="c10-game__next"><button className="c10-button" disabled={!answer} onClick={()=>dispatch({type:"next"})}>{t(game.index===9 ? "code10.finish":"code10.next")} →</button></div>
  </section>;
}
