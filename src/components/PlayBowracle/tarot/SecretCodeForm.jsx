import {useRef,useState} from 'react';
import {resolveBowracleSecretCode} from './secretCodes.js';
import {createSecretReading} from './readingEngine.js';
import {TarotSigil} from './TarotArtwork.jsx';
export function NameField({value,onChange,t,id='bt-first-name'}){return <div className="bt-name"><label htmlFor={id}>{t('bowracle.tarot.optionalName')}</label><input id={id} value={value} onChange={e=>onChange(e.target.value)} maxLength={30} autoComplete="off" aria-describedby={id+'-hint'}/><p id={id+'-hint'}>{t('bowracle.tarot.nameHint')}</p></div>;}
export default function SecretCodeForm({t,name,onName,onReveal}){
 const [code,setCode]=useState(''),[demo,setDemo]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');const lock=useRef(false);
 async function submit(e){e.preventDefault();if(lock.current)return;lock.current=true;setBusy(true);setError('');try{const resolved=await resolveBowracleSecretCode(code,{demo});if(!resolved.valid){setError(resolved.reason);return;}const result=createSecretReading(resolved);if(!result){setError('invalid');return;}onReveal(result);}finally{lock.current=false;setBusy(false);}}
 return <div className="bt-secret"><div className="bt-secret-art"><TarotSigil/><p>{t('bowracle.tarot.gossip')}</p></div><form onSubmit={submit}>
  <NameField value={name} onChange={onName} t={t}/><label htmlFor="bt-code">{t('bowracle.tarot.secretCode')}</label><input id="bt-code" required maxLength={40} value={code} onChange={e=>{setCode(e.target.value);setError('');}} autoComplete="off" autoCapitalize="characters" spellCheck={false} placeholder="BWR-·····" aria-invalid={!!error} aria-describedby="bt-code-status bt-demo-note"/>
  <label className="bt-demo-toggle"><input type="checkbox" checked={demo} onChange={e=>{setDemo(e.target.checked);setError('');}}/>{t('bowracle.tarot.demo')}</label><p id="bt-demo-note" className="bt-footnote">{t('bowracle.tarot.demoNote')}{demo&&<span className="bt-demo-example">{t('bowracle.tarot.demoExample')}</span>}</p>
  <p id="bt-code-status" role="alert">{error&&t('bowracle.tarot.'+error)}</p><button className="br-button" disabled={busy} type="submit">{t('bowracle.tarot.'+(busy?'checking':'lookup'))}</button>
 </form></div>;
}
