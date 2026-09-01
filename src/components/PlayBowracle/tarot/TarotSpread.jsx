import {useEffect,useState} from 'react';
import {shuffleCards} from './readingEngine.js';
import {TarotSigil,TarotFace} from './TarotArtwork.jsx';
export default function TarotSpread({deck,kind,value,onChange,t}){
 const [order,setOrder]=useState(()=>shuffleCards(deck));
 const [activeCard,setActiveCard]=useState(null);
 const limit=kind==='major'?2:3;
 const keyRoot='bowracle.tarot.'+(kind==='major'?'majorCards':'minorCards');
 const selected=value.map(id=>deck.find(card=>card.id===id)).filter(Boolean);
 const nextCard=order.find(card=>!value.includes(card.id));

 useEffect(()=>{
  if(!activeCard)return undefined;
  const close=event=>{if(event.key==='Escape')setActiveCard(null);};
  window.addEventListener('keydown',close);
  return()=>window.removeEventListener('keydown',close);
 },[activeCard]);

 function draw(){
  if(!nextCard||value.length>=limit)return;
  onChange([...value,nextCard.id]);
  setActiveCard(nextCard);
 }

 function shuffle(){
  setOrder(shuffleCards(deck));
  onChange([]);
  setActiveCard(null);
 }

 function returnCard(card){
  onChange(value.filter(id=>id!==card.id));
  setActiveCard(null);
 }

 return <div className={'bt-table bt-table--'+kind}>
  <div className="bt-table-tools"><p role="status">{t('bowracle.tarot.count',{count:value.length,total:limit})}</p><button type="button" className="br-link" onClick={shuffle}>{t('bowracle.tarot.shuffle')} ↻</button></div>
  <div className="bt-draw-board" role="group" aria-label={t('bowracle.tarot.'+kind)}>
   <div className="bt-deck-zone">
    <button type="button" className="bt-deck-pile" onClick={draw} disabled={value.length>=limit||!nextCard} aria-label={t('bowracle.tarot.drawCard')}>
     <span className="bt-deck-shadow bt-deck-shadow--2"/><span className="bt-deck-shadow bt-deck-shadow--1"/><span className="bt-card-back"><TarotSigil/><b>THE BOW-RACLE</b></span>
    </button>
    <strong>{value.length>=limit?t('bowracle.tarot.spreadComplete'):t('bowracle.tarot.drawCard')}</strong>
    <small>{t('bowracle.tarot.cardsRemaining',{count:deck.length-value.length})}</small>
   </div>
   <div className="bt-drawn-cards" aria-label={t('bowracle.tarot.revealCards')}>
    {Array.from({length:limit},(_,i)=>{const card=selected[i];return <div className={'bt-drawn-slot'+(card?' is-filled':'')} key={card?.id||i}>
     {card?<><div className="bt-drawn-face"><TarotFace card={card} kind={kind} t={t}/></div><strong>{t(keyRoot+'.'+card.id+'.name')}</strong><div className="bt-drawn-actions"><button type="button" onClick={()=>setActiveCard(card)}>{t('bowracle.tarot.zoomCard')}</button><button type="button" onClick={()=>returnCard(card)} aria-label={t('bowracle.tarot.returnCard')}>↶</button></div></>:<><span aria-hidden="true">✧</span><small>{String(i+1).padStart(2,'0')}</small></>}
    </div>;})}
   </div>
  </div>
  {activeCard&&<div className="bt-card-zoom" role="dialog" aria-modal="true" aria-label={t(keyRoot+'.'+activeCard.id+'.name')} onMouseDown={event=>{if(event.target===event.currentTarget)setActiveCard(null);}}>
   <div className="bt-card-zoom__panel"><button type="button" className="bt-card-zoom__close" onClick={()=>setActiveCard(null)} aria-label={t('bowracle.tarot.closeCard')}>×</button><TarotFace card={activeCard} kind={kind} t={t}/></div>
  </div>}
 </div>;
}
