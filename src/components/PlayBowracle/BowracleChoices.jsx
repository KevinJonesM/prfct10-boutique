import { BOW_COLORS, FINISHES, CENTER_STYLES, BOW_SIZES } from '../BowDesigner/bowOptions.js';

export function BowracleChoiceList({ids,namespace,value,onChange,t,label}) {
  return <div className="br-choices" role="group" aria-label={label}>{ids.map((id,index)=><button key={id} type="button" aria-pressed={value===id} onClick={()=>onChange(id)}><span aria-hidden="true">{String(index+1).padStart(2,'0')}</span><strong>{t(`${namespace}.${id}.label`)}</strong><i aria-hidden="true">{value===id?'✓':'✧'}</i></button>)}</div>;
}
export function BowracleColorPicker({value,excluded,onChange,t,label}) {
  return <div className="br-colors" role="group" aria-label={label}>{BOW_COLORS.map(color=><button type="button" key={color.id} aria-pressed={value===color.id} disabled={excluded===color.id} onClick={()=>onChange(color.id)}>
    <span className="br-color-drop" style={{'--drop':color.value}} aria-hidden="true"><i>{value===color.id?'✓':''}</i></span>
    <strong>{t(`bow.colors.${color.id}`)}</strong><small>{t(`bowracle.colors.${color.id}.energy`)}</small>
  </button>)}</div>;
}
export function BowracleSpark({choices,onChange,t}) {
  return <div className="br-spark">{[
    ['finish',FINISHES,'finishTitle','finishNotes'],['centerStyle',CENTER_STYLES,'centerTitle','centerNotes'],['size',BOW_SIZES,'sizeTitle',null]
  ].map(([key,options,title,notes])=><fieldset key={key}><legend>{t(`bowracle.${title}`)}</legend><div>{options.map(option=><button type="button" key={option} aria-pressed={choices[key]===option} onClick={()=>onChange(key,option)}><strong>{t(`bow.options.${option}`)}</strong>{notes&&<small>{t(`bowracle.${notes}.${option}`)}</small>}<span aria-hidden="true">{choices[key]===option?'✓':'✧'}</span></button>)}</div></fieldset>)}</div>;
}
