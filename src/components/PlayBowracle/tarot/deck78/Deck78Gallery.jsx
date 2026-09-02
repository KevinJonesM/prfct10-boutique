import {useEffect,useState} from 'react';
import {CLASSIC_MAJOR_ARCANA,CLASSIC_MINOR_ARCANA,CLASSIC_SUITS} from './classicDeck78.js';
import ClassicTarotCard,{ClassicCardBack} from './ClassicTarotCard.jsx';

function CardTile({card,locale,onOpen}){return <button className="c78-gallery-card" type="button" onClick={()=>onOpen(card)} aria-label={`${card.rank||card.number} ${card.name}`}><ClassicTarotCard card={card} locale={locale}/><span>{card.name}</span></button>;}
export default function Deck78Gallery({onBack}){
 const [locale,setLocale]=useState('en'),[active,setActive]=useState(null),[showBack,setShowBack]=useState(false);
 useEffect(()=>{const key=e=>{if(e.key==='Escape')setActive(null)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
 const groups=[['MAJOR ARCANA',CLASSIC_MAJOR_ARCANA],...CLASSIC_SUITS.map(s=>[s,CLASSIC_MINOR_ARCANA.filter(c=>c.suit===s)])];
 return <main className="c78-gallery"><header><button className="br-link" type="button" onClick={onBack}>← THE BOW-RACLE</button><p>PRFCT10 PLAY · CLASSIC DECK ARCHIVE</p><h1>THE COMPLETE<br/><em>78-CARD UNIVERSE</em></h1><div className="c78-gallery-controls"><button type="button" aria-pressed={locale==='en'} onClick={()=>setLocale('en')}>EN</button><button type="button" aria-pressed={locale==='es'} onClick={()=>setLocale('es')}>ES</button><button type="button" onClick={()=>{setShowBack(true);setActive({name:'CARD BACK'})}}>VIEW CARD BACK</button></div></header>
 {groups.map(([name,cards])=><section key={name}><div className="c78-section-title"><h2>{name}</h2><span>{cards.length}</span></div><div className="c78-grid">{cards.map(card=><CardTile key={card.id} card={card} locale={locale} onOpen={card=>{setShowBack(false);setActive(card)}}/>)}</div></section>)}
 {active&&<div className="c78-modal" role="dialog" aria-modal="true" aria-label={active.name} onMouseDown={e=>{if(e.target===e.currentTarget)setActive(null)}}><div className="c78-modal-card"><button type="button" onClick={()=>setActive(null)} aria-label="Close">×</button>{showBack?<ClassicCardBack/>:<><ClassicTarotCard card={active} locale={locale}/><article><p>{active.rank||active.number} · {active.suit||'MAJOR ARCANA'}</p><h2>{active.name}</h2><p>{(active.shortMeaning||active.meaning)?.[locale]}</p><blockquote>{(active.microcopy||active.humorLine)?.[locale]}</blockquote><small>{active.tags.join(' · ')}</small></article></>}</div></div>}
 </main>;
}

