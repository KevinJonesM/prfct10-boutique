import {useRef,useState} from 'react';
import {resolveBowracleSecretCode} from './secretCodes.js';
import {createSecretReading} from './readingEngine.js';
import {SECRET_MESSAGE_UI} from '../secretMessageContent.js';

export function NameField({value,onChange,t,id='bt-first-name',label,hint,placeholder=''}){return <div className="bt-name"><label htmlFor={id}>{label||t('bowracle.tarot.optionalName')}</label><input id={id} value={value} onChange={e=>onChange(e.target.value)} maxLength={30} autoComplete="off" aria-describedby={id+'-hint'} placeholder={placeholder}/><p id={id+'-hint'}>{hint||t('bowracle.tarot.nameHint')}</p></div>;}

function localDate(){const d=new Date(),two=value=>String(value).padStart(2,'0');return `${d.getFullYear()}-${two(d.getMonth()+1)}-${two(d.getDate())}`;}

export default function SecretCodeForm({t,name,onName,onReveal,locale='en'}){
 const [code,setCode]=useState(''),[date,setDate]=useState(localDate),[demo,setDemo]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');const lock=useRef(false);
 const ui=SECRET_MESSAGE_UI[locale];
 async function submit(e){e.preventDefault();if(lock.current)return;lock.current=true;setBusy(true);setError('');try{const resolved=await resolveBowracleSecretCode(code,{demo});if(!resolved.valid){setError(resolved.reason);return;}const result=createSecretReading(resolved);if(!result){setError('invalid');return;}onReveal({...result,secretDate:date});}finally{lock.current=false;setBusy(false);}}
 return <section className="bt-secret-grove" aria-labelledby="bt-grove-title">
  <div className="bt-grove-world" aria-hidden="true"><picture><img src="/assets/bowracle/secret-garden/bowracle-secret-registration.webp" alt="" fetchPriority="high"/></picture><span className="bt-grove-mist bt-grove-mist--one"/><span className="bt-grove-mist bt-grove-mist--two"/>{Array.from({length:9},(_,i)=><i className="bt-firefly" style={{'--i':i,left:`${53+(i*17)%43}%`,top:`${8+(i*31)%83}%`}} key={i}/>)}</div>
  <div className="bt-grove-ritual"><header className="bt-grove-copy"><p className="br-kicker">{ui.formEyebrow}</p><h1 id="bt-grove-title">{ui.formTitle}</h1><p>{ui.formCopy}</p><blockquote>{ui.formMicro}</blockquote></header>
   <form className="bt-grove-registry" onSubmit={submit}><div className="bt-grove-registry__heading"><span>{ui.registry}</span><h2>{ui.formTitle}</h2><p>{ui.registryIntro}</p></div><div className="bt-grove-fields"><NameField value={name} onChange={onName} t={t} label={ui.nameLabel} hint={ui.nameHint} placeholder={ui.namePlaceholder}/><div className="bt-grove-field"><label htmlFor="bt-secret-date">{ui.dateLabel}</label><input id="bt-secret-date" type="date" value={date} onChange={e=>setDate(e.target.value)} required/><p>{ui.dateHint}</p></div><div className="bt-grove-field bt-grove-field--code"><label htmlFor="bt-code">{ui.codeLabel}</label><input id="bt-code" required maxLength={40} value={code} onChange={e=>{setCode(e.target.value);setError('');}} autoComplete="off" autoCapitalize="characters" spellCheck={false} placeholder="BWR-·····" aria-invalid={!!error} aria-describedby="bt-code-status bt-demo-note"/><p>{ui.codeHint}</p></div></div>
    <div className="bt-grove-demo"><label className="bt-demo-toggle"><input type="checkbox" checked={demo} onChange={e=>{setDemo(e.target.checked);setError('');}}/><span><b>{t('bowracle.tarot.demo')}</b><small>{t('bowracle.tarot.groveDemoHint')}</small></span></label><p id="bt-demo-note" className="bt-footnote">{t('bowracle.tarot.demoNote')}{demo&&<span className="bt-demo-example">{t('bowracle.tarot.demoExample')}</span>}</p></div>
    <div className="bt-grove-invocation"><p id="bt-code-status" role="alert">{error&&<>{error==='network'?ui.network:ui.invalid}<small>{error==='network'?'':ui.invalidHelp}</small></>}</p><button className="br-button bt-grove-cta" disabled={busy} type="submit"><span>{busy?t('bowracle.tarot.checking'):ui.formCta}</span><b aria-hidden="true">✦</b></button><small>{ui.formMicro}</small></div>
   </form>
  </div>
 </section>;
}
