import {useCallback,useMemo,useState} from 'react';
import {HouseEmblem,TarotFace} from './TarotArtwork.jsx';
import {HOUSE_ACCENTS} from './artwork.js';
import {MAJOR_ARCANA,MINOR_ARCANA} from './content.js';
import {tarotCopy} from './readingCopy.js';
import {tarotHandoff,cleanFirstName} from './readingEngine.js';
import {createTarotSvg} from './cardSvg.js';
import BowracleShare from '../BowracleShare.jsx';
import BowPreview from '../../BowDesigner/BowPreview.jsx';
export default function TarotResult({result,firstName,t,onHandoff,onAgain}){
 const [format,setFormat]=useState('story'),[kind,setKind]=useState(result.mode==='house'?'house':'reading');
 const copy=tarotCopy(result,t),get=(key,vars)=>t('bowracle.tarot.'+key,vars),name=cleanFirstName(firstName);
 const renderer=useCallback((r,translate,f)=>createTarotSvg(r,translate,f,{kind,firstName:name}),[kind,name]);
 const svg=useMemo(()=>renderer(result,t,format),[renderer,result,t,format]);
 const sections=[['bowracleSays',copy.message],['prophecy',copy.prophecy.prose,copy.prophecy.rhyme],['manifestation',copy.window.label,copy.window.microcopy],['coachForecast',copy.coach.prose,copy.coach.rhyme],['luckyNumber',String(result.luckyNumber).padStart(2,'0')],['todayQuest',copy.quest.prose,copy.quest.rhyme],['secretGymLaw',copy.law.prose],['powerColor',copy.powerColor]];
 return <div className="bt-reading" style={{'--house-accent':HOUSE_ACCENTS[result.house]}}>
  {result.mode==='house'&&<section className="bt-grove-keepsake-intro"><p className="br-kicker">{get('groveLetterLabel')}</p><span>{result.secretDate?.replaceAll('-',' · ')||'✦'}</span><h1>{get('groveFound',{name:name||get('groveTraveler')})}</h1><p>{get('groveFoundReason')}</p><blockquote>{get('groveGuidance')}</blockquote><small>{get('groveSignature')}</small></section>}
  <header className="bt-house-reveal"><p className="br-kicker">{result.demo?get('demoResult'):get('spoken')}</p>{name&&<p className="bt-personal-name">{name},</p>}<p>{get(result.mode==='house'?'recognized':'todayYouAre')}</p>{result.mode==='reading'&&<h2>{copy.title}</h2>}<HouseEmblem house={result.house}/><p className="br-kicker">{get(result.mode==='house'?'belongsTo':'houseToday')}</p><h2 className="bt-house-name">{copy.house.name}</h2><p className="bt-house-energy">{copy.house.energyWords}</p><blockquote>{copy.house.statement}</blockquote><p className="bt-footnote">{get('houseNote')}</p></header>
  {result.mode==='reading'&&<details className="bt-card-reading"><summary>{get('revealCards')}</summary><div className="bt-five-faces">{[[MAJOR_ARCANA,result.majorArcanaIds,'major'],[MINOR_ARCANA,result.minorArcanaIds,'minor']].flatMap(([deck,ids,type])=>ids.map(id=><div key={id}><TarotFace card={deck.find(c=>c.id===id)} kind={type} t={t}/></div>))}</div></details>}
  <div className="bt-reading-layout"><div className="bt-reading-sections">{sections.map(([label,body,note],index)=><section className={'bt-reading-chapter bt-reading-chapter--'+label} key={label} style={{'--reveal-delay':index*110+'ms'}}><p className="br-kicker">{String(index+3).padStart(2,'0')} / {get(label)}</p><h3>{body}</h3>{note&&<p className="bt-verse">{note}</p>}{label==='manifestation'&&<p className="bt-footnote">{get('windowNote')}</p>}{label==='todayQuest'&&<p className="bt-footnote">{get('training')}</p>}{label==='secretGymLaw'&&<p className="bt-footnote">{get('loreNote')}</p>}{label==='powerColor'&&<span className="bt-color-orb" style={{background:result.design.topColor}} aria-hidden="true"/>}</section>)}</div>
   <aside className="bt-collectible"><p className="br-kicker">{get('cardType')}</p><div className="br-format">{['reading','house'].map(id=><button type="button" key={id} aria-pressed={kind===id} onClick={()=>setKind(id)}>{get(id==='reading'?'readingCard':'houseCard')}</button>)}</div><div className="bt-card-preview" role="img" aria-label={get(kind==='house'?'houseCard':'readingCard')+' · '+copy.house.name} dangerouslySetInnerHTML={{__html:svg}}/><BowracleShare result={result} t={t} format={format} onFormat={setFormat} renderSvg={renderer} cardKind={kind}/></aside>
  </div>
  <section className="bt-assigned"><div className="bt-assigned-art"><BowPreview {...result.design}/></div><div><p className="br-kicker">11 / {get('yourBow')}</p><h2>{copy.colors.join(' + ')}</h2><p>{['finish','centerStyle','size'].map(key=>t('bow.options.'+result.design[key])).join(' · ')}</p><p>{get('realNote')}</p>{result.mode==='house'&&!result.hasPhysicalBow&&<p>{get('noPhysical')}</p>}<small>{get('productLabel')}</small><code>{result.bowCode}</code>{result.mode==='house'&&<><small>{get('secretLabel')}</small><code>{result.code}</code></>}<div className="br-actions"><button type="button" className="br-button" onClick={()=>onHandoff(tarotHandoff(result))}>{get('makeItReal')}</button><button type="button" className="br-link" onClick={()=>onHandoff(tarotHandoff(result))}>{get('refine')}</button></div></div></section>
  <div className="br-actions bt-result-actions"><button type="button" className="br-button" onClick={onAgain}>{get('askAgain')}</button></div>
 </div>;
}
