import {useEffect,useRef,useState} from 'react';
import {useI18n} from '../../i18n/I18nProvider';
import BowracleAtmosphere from './BowracleAtmosphere.jsx';
import {MAJOR_ARCANA,MINOR_ARCANA} from './tarot/content.js';
import {createTarotReading,readTarotReading,saveTarotReading,TAROT_STORAGE_KEY} from './tarot/readingEngine.js';
import {TarotFace} from './tarot/TarotArtwork.jsx';
import TarotSpread from './tarot/TarotSpread.jsx';
import {NameField} from './tarot/SecretCodeForm.jsx';
import TarotResult from './tarot/TarotResult.jsx';
import Deck78Gallery from './tarot/deck78/Deck78Gallery.jsx';
import {ClassicCardBack} from './tarot/deck78/ClassicTarotCard.jsx';
import {MAJOR_DRAW_COUNT,MINOR_DRAW_COUNT} from './tarot/readingEngine.js';
import './PlayBowracle.css';
import './BowracleMystical.css';
import './tarot/TarotTable.css';
import './tarot/SecretGarden.css';

export default function PlayBowracle({onBackToPlay,onStoreHandoff,gallery=false,onOpenDeck}){
 const {t}=useI18n(),get=(key,vars)=>t('bowracle.tarot.'+key,vars);
 const [page,setPage]=useState('intro'),[major,setMajor]=useState([]),[minor,setMinor]=useState([]),[name,setName]=useState(''),[result,setResult]=useState(null),[paused,setPaused]=useState(false),[storageError,setStorageError]=useState(false);
 const [saved,setSaved]=useState(()=>{try{return readTarotReading(window.localStorage);}catch{return null;}});
 const heading=useRef(null),pending=useRef(null);
 const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)'),change=()=>setReduced(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change);},[]);
 useEffect(()=>{if(page!=='intro'){heading.current?.focus({preventScroll:true});heading.current?.scrollIntoView({block:'start',behavior:'auto'});}},[page]);
 useEffect(()=>{if(page!=='processing')return;const timer=setTimeout(()=>{const next=pending.current;if(!next)return;setResult(next);if(next.mode==='reading'){setSaved(next);try{setStorageError(!saveTarotReading(window.localStorage,next));}catch{setStorageError(true);}}setPage(next.mode==='house'?'secretResult':'result');},reduced||paused?60:900);return()=>clearTimeout(timer);},[page,reduced,paused]);
 function start(){setMajor([]);setMinor([]);setResult(null);setName('');pending.current=null;setPage('major');}
 function reveal(next){if(!next)return;pending.current=next;setPage('processing');}
 const cards=[...major.map(id=>({card:MAJOR_ARCANA.find(c=>c.id===id),kind:'major'})),...minor.map(id=>({card:MINOR_ARCANA.find(c=>c.id===id),kind:'minor'}))];
 const title=page==='major'?get('majorTitle'):page==='minor'?get('minorTitle'):page==='formation'?get('formation'):page==='processing'?get('processing'):get('spoken');
 if(gallery)return <Deck78Gallery onBack={()=>window.history.back()}/>;
 return <main className={'br-shell bt-shell br-shell--'+page+(paused?' br-motion-paused':'')+(reduced?' bt-reduced-motion':'')}>
  <BowracleAtmosphere/><nav className="br-nav" aria-label="THE BOW-RACLE"><span>PRFCT10 <b>PLAY</b></span><div>{onOpenDeck&&<button type="button" className="br-link" onClick={onOpenDeck}>{get('viewDeck')}</button>}<button type="button" className="br-link br-motion-toggle" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{t(paused?'bowracle.resumeMotion':'bowracle.pauseMotion')}</button><button type="button" className="br-link" onClick={onBackToPlay}>← {t('bowracle.backPlay')}</button></div></nav>
  {page==='intro'?<section className="bt-intro"><div className="bt-intro-copy"><p className="br-kicker">{get('table')}</p><h1>THE<br/><em>BOW-RACLE</em></h1><h2>{get('tagline')}</h2><p>{get('intro')}</p><div className="br-actions"><button type="button" className="br-button" onClick={start}>{get('ask')} <span aria-hidden="true">✧</span></button></div><p className="bt-footnote">{get('disclaimer')}</p></div><div className="bt-hero-table" aria-hidden="true"><span className="bt-table-orbit"/>{[0,1,2].map(i=><div className={'bt-hero-card bt-hero-card--'+i} key={i}><ClassicCardBack/></div>)}<span className="bt-hero-caption">III + VII / LXXVIII</span></div>{saved&&<div className="br-saved"><p>{get('saved')}</p><button type="button" className="br-link" onClick={()=>{setName('');setResult(saved);setPage('result');}}>{get('resume')}</button><button type="button" className="br-link" onClick={()=>{try{window.localStorage.removeItem(TAROT_STORAGE_KEY);setSaved(null);}catch{setStorageError(true);}}}>{get('clear')}</button></div>}</section>:
  <section className="bt-page"><header className="bt-page-heading"><p className="br-kicker">{get('table')}</p><h1 ref={heading} tabIndex={-1}>{title}</h1>{['major','minor','formation'].includes(page)&&<p>{get(page+'Hint')}</p>}</header>
   {['major','minor'].includes(page)&&<><TarotSpread key={page} deck={page==='major'?MAJOR_ARCANA:MINOR_ARCANA} kind={page} value={page==='major'?major:minor} onChange={page==='major'?setMajor:setMinor} t={t}/><div className="br-page-actions"><button className="br-link" type="button" onClick={()=>setPage(page==='major'?'intro':'major')}>← {get('back')}</button><p role="status">{(page==='major'?major.length!==MAJOR_DRAW_COUNT:minor.length!==MINOR_DRAW_COUNT)&&get('choose',{total:page==='major'?MAJOR_DRAW_COUNT:MINOR_DRAW_COUNT})}</p><button type="button" className="br-button" disabled={page==='major'?major.length!==MAJOR_DRAW_COUNT:minor.length!==MINOR_DRAW_COUNT} onClick={()=>setPage(page==='major'?'minor':'formation')}>{get('next')} →</button></div></>}
   {(page==='formation'||page==='processing')&&<><div className={'bt-formation'+(page==='processing'?' is-revealing':'')} aria-label={get('revealCards')}>{cards.map((item,i)=><div className="bt-formation-card" style={{'--i':i}} key={item.card.id}><div className="bt-card-turn"><div className="bt-card-back"><ClassicCardBack/></div><div className="bt-card-front" aria-hidden={page!=='processing'}><TarotFace card={item.card} kind={item.kind} t={t}/></div></div></div>)}</div>{page==='formation'&&<div className="bt-formation-controls"><NameField value={name} onChange={setName} t={t}/><div className="br-actions"><button type="button" className="br-link" onClick={()=>setPage('minor')}>← {get('back')}</button><button type="button" className="br-button" onClick={()=>reveal(createTarotReading({majorArcanaIds:major,minorArcanaIds:minor}))}>{get('reveal')} ✧</button></div></div>}{page==='processing'&&<p className="bt-processing-note" role="status">{get('processing')}</p>}</>}
   {page==='result'&&result&&<TarotResult key={result.seed} result={result} firstName={name} t={t} onHandoff={onStoreHandoff} onAgain={start}/>}</section>}
  {storageError&&<p className="br-storage-warning" role="status">{t('bowracle.storageError')}</p>}<footer className="br-footer"><span>PRFCT10 PLAY · THE BOW-RACLE</span><p>{get('disclaimer')}</p></footer>
 </main>;
}
