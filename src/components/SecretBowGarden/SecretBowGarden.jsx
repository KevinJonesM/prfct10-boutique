import {useEffect,useRef,useState} from 'react';
import {useI18n} from '../../i18n/I18nProvider';
import BowracleAtmosphere from '../PlayBowracle/BowracleAtmosphere.jsx';
import SecretCodeForm from '../PlayBowracle/tarot/SecretCodeForm.jsx';
import {tarotHandoff} from '../PlayBowracle/tarot/readingEngine.js';
import SecretMessageExperience,{SecretMessageEntry,SecretRecognition} from '../PlayBowracle/SecretMessageExperience.jsx';
import '../PlayBowracle/PlayBowracle.css';
import '../PlayBowracle/BowracleMystical.css';
import '../PlayBowracle/tarot/TarotTable.css';
import '../PlayBowracle/tarot/SecretGarden.css';

export default function SecretBowGarden({onBackToPlay,onStoreHandoff}){
 const {t,locale}=useI18n();
 const [page,setPage]=useState('entry'),[name,setName]=useState(''),[result,setResult]=useState(null),[paused,setPaused]=useState(false);
 const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 const pending=useRef(null);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)'),change=()=>setReduced(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change);},[]);
 useEffect(()=>{window.scrollTo({top:0,behavior:'auto'});},[page]);
 useEffect(()=>{if(page!=='recognition')return;const timer=setTimeout(()=>{if(!pending.current)return;setResult(pending.current);setPage('message');},reduced||paused?60:2300);return()=>clearTimeout(timer);},[page,reduced,paused]);
 const openRegistry=()=>{setName('');setResult(null);setPage('registry');};
 const reveal=next=>{if(!next)return;pending.current=next;setPage('recognition');};
 const restart=()=>{pending.current=null;setName('');setResult(null);setPage('entry');};
 return <main className={'br-shell bt-shell br-shell--secretGarden bt-secret-ritual br-shell--'+page+(paused?' br-motion-paused':'')+(reduced?' bt-reduced-motion':'')}>
  <BowracleAtmosphere/>
  <nav className="br-nav" aria-label="THE SECRET BOW GARDEN"><span>PRFCT10 <b>PLAY</b></span><div><button type="button" className="br-link br-motion-toggle" aria-pressed={paused} onClick={()=>setPaused(value=>!value)}>{t(paused?'bowracle.resumeMotion':'bowracle.pauseMotion')}</button><button type="button" className="br-link" onClick={onBackToPlay}>← {t('bowracle.backPlay')}</button></div></nav>
  {page==='entry'&&<SecretMessageEntry locale={locale} onEnter={openRegistry}/>}
  {page==='registry'&&<section className="bt-page"><SecretCodeForm t={t} locale={locale} name={name} onName={setName} onReveal={reveal}/><button type="button" className="br-link bt-grove-back" onClick={()=>setPage('entry')}>← {locale==='es'?'Volver al jardín':'Back to the garden'}</button></section>}
  {page==='recognition'&&<section className="bt-page"><SecretRecognition locale={locale}/></section>}
  {page==='message'&&result&&<section className="bt-page"><SecretMessageExperience result={result} firstName={name} locale={locale} t={t} onHandoff={onStoreHandoff?next=>onStoreHandoff(tarotHandoff(next)):null} onRestart={restart}/></section>}
  <footer className="br-footer"><span>PRFCT10 PLAY · THE SECRET BOW GARDEN</span></footer>
 </main>;
}
