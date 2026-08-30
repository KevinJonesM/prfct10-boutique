import { useI18n } from "../../i18n/I18nProvider";
import { PROGRAMS, DIVISIONS, CATEGORIES } from "./config.js";

function ChoiceGroup({ label, values, value, onChange, disabled = [], renderLabel }) {
  function onKeyDown(event, current) {
    const enabled = values.filter(v => !disabled.includes(v));
    const index = enabled.indexOf(current);
    let next;
    if (["ArrowDown","ArrowRight"].includes(event.key)) next = enabled[(index+1)%enabled.length];
    if (["ArrowUp","ArrowLeft"].includes(event.key)) next = enabled[(index+enabled.length-1)%enabled.length];
    if (event.key==="Home") next = enabled[0];
    if (event.key==="End") next = enabled.at(-1);
    if (!next) return;
    event.preventDefault(); onChange(next);
    event.currentTarget.parentElement.querySelector('[data-value="'+next+'"]')?.focus();
  }
  return <fieldset className="c10-field"><legend>{label}</legend><div className="c10-choices" role="radiogroup" aria-label={label}>
    {values.map(v => <button type="button" role="radio" aria-checked={v===value} tabIndex={v===value ? 0 : -1} disabled={disabled.includes(v)} data-value={v} key={v} onKeyDown={e=>onKeyDown(e,v)} onClick={()=>onChange(v)}>
      <span>{renderLabel ? renderLabel(v) : v}</span><span aria-hidden="true">{v===value ? "✓" : disabled.includes(v) ? "—" : "○"}</span>
    </button>)}
  </div></fieldset>;
}
export default function Code10Builder({ config, onChange, onStart, busy, dev }) {
  const { t } = useI18n();
  return <section className="c10-builder">
    <p className="c10-kicker">01 / CODE 10</p><h1 tabIndex="-1" data-c10-focus>{t("code10.buildTitle")}</h1>
    <p className="c10-lede">{t("code10.builderHelp")}</p>
    {!dev && <p className="c10-note">{t("code10.bankPending")}</p>}
    <ChoiceGroup label={t("code10.program")} values={PROGRAMS} value={config.program} disabled={["COMPULSORY","OPTIONAL"]} onChange={program=>onChange({...config,program})} renderLabel={v=>v==="XCEL" ? v : v+" · "+t("code10.soon")} />
    <ChoiceGroup label={t("code10.division")} values={DIVISIONS} value={config.division} onChange={division=>onChange({...config,division})} />
    <ChoiceGroup label={t("code10.category")} values={CATEGORIES} value={config.category} onChange={category=>onChange({...config,category})} renderLabel={v=>t("code10.categories."+v)} />
    <div className="c10-actions"><button className="c10-button" disabled={busy} onClick={()=>onStart(config)}>{t(busy ? "code10.loading" : "code10.launch")} ↗</button><button className="c10-button c10-button--paper" disabled={busy} onClick={()=>onStart({...config,category:"MIX"})}>{t("code10.quick")} · XCEL {config.division}</button></div>
  </section>;
}
