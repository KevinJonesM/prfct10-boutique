import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {HouseEmblem,TarotFace} from './TarotArtwork.jsx';
import {HOUSE_ACCENTS} from './artwork.js';
import {MAJOR_ARCANA,MINOR_ARCANA} from './content.js';
import {tarotCopy} from './readingCopy.js';
import {tarotHandoff,cleanFirstName} from './readingEngine.js';
import {createTarotSvg} from './cardSvg.js';
import {gymFamiliarFor} from './gymFamiliars.js';
import BowracleShare from '../BowracleShare.jsx';
import BowPreview from '../../BowDesigner/BowPreview.jsx';

const STAGES=['consulting','identity','house','fortune','heart','bow','keepsake'];
export default function TarotResult({result,firstName,t,onHandoff,onAgain}){
 const [stage,setStage]=useState(0),[format,setFormat]=useState('story'),[kind,setKind]=useState('reading'),[activeCard,setActiveCard]=useState(null);
 const heading=useRef(null),copy=tarotCopy(result,t),get=(key,vars)=>t('bowracle.tarot.'+key,vars),name=cleanFirstName(firstName),familiar=gymFamiliarFor(result.house);
 const cards=[[MAJOR_ARCANA,result.majorArcanaIds,'major'],[MINOR_ARCANA,result.minorArcanaIds,'minor']].flatMap(([deck,ids,type])=>ids.map(id=>({card:deck.find(c=>c.id===id),type})));
 const current=STAGES[stage],renderer=useCallback((r,translate,f)=>createTarotSvg(r,translate,f,{kind,firstName:name}),[kind,name]),svg=useMemo(()=>renderer(result,t,format),[renderer,result,t,format]);
 useEffect(()=>{heading.current?.focus({preventScroll:true});heading.current?.scrollIntoView({block:'start',behavior:'auto'});},[stage]);
 const next=()=>setStage(value=>Math.min(STAGES.length-1,value+1));
 return <div className="bt-reading bt-ceremony" style={{'--house-accent':HOUSE_ACCENTS[result.house]}}>
  <header className="bt-ceremony-head"><p>{get('cardsRemain')}</p><div className="bt-stage-dots" aria-label={`${stage+1} / ${STAGES.length}`}>{STAGES.map((_,i)=><span key={i} className={i<=stage?'is-lit':''}/>)}</div></header>
  <div className="bt-oracle-rack" aria-label={get('revealCards')}>{cards.map(({card,type},i)=><button type="button" onClick={()=>setActiveCard({card,type})} key={card.id} style={{'--i':i}} aria-label={`${get('zoomCard')}: ${card.name}`}><TarotFace card={card} kind={type} t={t}/></button>)}</div>
  <section className={'bt-ceremony-stage bt-ceremony-stage--'+current}><h1 ref={heading} tabIndex={-1}>{get(current+'Reveal')}</h1>
   {current==='consulting'&&<div className="bt-consulting"><span className="bt-oracle-vessel" aria-hidden="true">◉</span><p>{get('consulting')}</p><ol><li>{get('consultingLine1')}</li><li>{get('consultingLine2')}</li><li>{get('consultingLine3')}</li></ol><button className="br-button" type="button" onClick={next}>{get('continueReading')} →</button></div>}
   {current==='identity'&&<div className="bt-identity"><p className="br-kicker">{name?name+', ':''}{get('todayYouAre')}</p><h2>{copy.title}</h2><blockquote>{copy.message}</blockquote><button className="br-button" type="button" onClick={next}>{get('meetHouse')} →</button></div>}
   {current==='house'&&<div className="bt-house-moment"><HouseEmblem house={result.house}/><p className="br-kicker">{get('houseToday')}</p><h2>{copy.house.name}</h2><p>{copy.house.energyWords}</p><blockquote>{copy.house.statement}</blockquote><div className="bt-familiar"><span>{familiar.symbol}</span><p><small>{get('familiar')}</small><strong>{get('familiar')==='TU GYM FAMILIAR'?familiar.es:familiar.en}</strong><em>{familiar.mark}</em></p></div><button className="br-button" type="button" onClick={next}>{get('readFortune')} →</button></div>}
   {current==='fortune'&&<div className="bt-fortune"><article className="bt-prophecy"><p className="br-kicker">{get('prophecy')}</p><h2>{copy.prophecy.prose}</h2><p>{copy.prophecy.rhyme}</p></article><div className="bt-cosmic-details"><p className="br-kicker">{get('cosmicDetails')}</p><div><span><small>{get('luckyNumber')}</small><b>{String(result.luckyNumber).padStart(2,'0')}</b></span><span><small>{get('powerColor')}</small><b>{copy.powerColor}</b></span><span><small>{get('manifestation')}</small><b>{copy.window.label}</b></span></div></div><article className="bt-coach-bulletin"><p className="br-kicker">{get('coachForecast')}</p><h3>{copy.coach.prose}</h3><em>{copy.coach.rhyme}</em></article><article><p className="br-kicker">{get('todayQuest')}</p><h3>{copy.quest.prose}</h3></article><article className="bt-gym-law"><p className="br-kicker">{get('secretGymLaw')}</p><h3>{copy.law.prose}</h3></article><button className="br-button" type="button" onClick={next}>{get('continueReading')} →</button></div>}
   {current==='heart'&&<div className="bt-heart"><span aria-hidden="true">✦</span><blockquote>{get('positiveMessage')}</blockquote><p>{copy.message}</p><button className="br-button" type="button" onClick={next}>{get('revealBow')} →</button></div>}
   {current==='bow'&&<div className="bt-bow-climax"><div className="bt-assigned-art"><BowPreview {...result.design}/></div><div><p className="br-kicker">{get('yourBow')}</p><h2>{copy.colors.join(' + ')}</h2><p>{['finish','centerStyle','size'].map(key=>t('bow.options.'+result.design[key])).join(' · ')}</p><code>{result.bowCode}</code><div className="br-actions"><button className="br-button" type="button" onClick={next}>{get('keepReading')} →</button><button className="br-link" type="button" onClick={()=>onHandoff(tarotHandoff(result))}>{get('makeItReal')}</button></div></div></div>}
   {current==='keepsake'&&<div className="bt-keepsake"><div className="bt-collectible"><p className="br-kicker">{get('cardType')}</p><div className="br-format">{['reading','house'].map(id=><button type="button" key={id} aria-pressed={kind===id} onClick={()=>setKind(id)}>{get(id==='reading'?'readingCard':'houseCard')}</button>)}</div><div className="bt-card-preview" role="img" aria-label={copy.house.name} dangerouslySetInnerHTML={{__html:svg}}/><BowracleShare result={result} t={t} format={format} onFormat={setFormat} renderSvg={renderer} cardKind={kind}/></div><div className="br-actions"><button className="br-button" type="button" onClick={()=>onHandoff(tarotHandoff(result))}>{get('makeItReal')}</button><button className="br-button br-button--light" type="button" onClick={onAgain}>{get('askAgain')}</button></div></div>}
  </section>
  {activeCard&&<div className="bt-card-zoom" role="dialog" aria-modal="true" aria-label={activeCard.card.name} onMouseDown={event=>{if(event.target===event.currentTarget)setActiveCard(null)}}><div className="bt-card-zoom__panel"><button type="button" className="bt-card-zoom__close" onClick={()=>setActiveCard(null)} aria-label={get('closeCard')}>×</button><TarotFace card={activeCard.card} kind={activeCard.type} t={t}/></div></div>}
 </div>;
}
