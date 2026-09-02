import {useEffect,useRef,useState} from 'react';
import {shuffleCards,MAJOR_DRAW_COUNT,MINOR_DRAW_COUNT} from './readingEngine.js';
import {ClassicCardBack} from './deck78/ClassicTarotCard.jsx';

export default function TarotSpread({deck,kind,value,onChange,t}){
 const [order,setOrder]=useState(()=>shuffleCards(deck));
 const [dealing,setDealing]=useState(false);
 const timers=useRef([]);
 const limit=kind==='major'?MAJOR_DRAW_COUNT:MINOR_DRAW_COUNT;

 useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);

 function drawSpread(){
  if(value.length>=limit||dealing)return;
  const sealed=order.filter(card=>!value.includes(card.id)).slice(0,limit-value.length);
  setDealing(true);
  timers.current=sealed.map((card,i)=>setTimeout(()=>{
   onChange([...value,...sealed.slice(0,i+1).map(item=>item.id)]);
   if(i===sealed.length-1)setDealing(false);
  },100+i*105));
 }

 function shuffle(){
  setOrder(shuffleCards(deck));
  timers.current.forEach(clearTimeout);
  timers.current=[];
  setDealing(false);
  onChange([]);
 }

 return <div className={'bt-table bt-table--'+kind}>
  <div className="bt-table-tools"><p role="status">{t('bowracle.tarot.count',{count:value.length,total:limit})}</p><button type="button" className="br-link" onClick={shuffle}>{t('bowracle.tarot.shuffle')} ↻</button></div>
  <div className="bt-draw-board bt-draw-board--mystery" role="group" aria-label={t('bowracle.tarot.'+kind)}>
   <div className="bt-deck-zone">
    <button type="button" className={'bt-deck-pile'+(dealing?' is-dealing':'')} onClick={drawSpread} disabled={value.length>=limit||dealing} aria-label={t('bowracle.tarot.takeCards',{total:limit})}>
     <span className="bt-deck-shadow bt-deck-shadow--2"/><span className="bt-deck-shadow bt-deck-shadow--1"/><span className="bt-card-back"><ClassicCardBack/></span>
    </button>
    <strong>{dealing?t('bowracle.tarot.dealingCards'):value.length>=limit?t('bowracle.tarot.spreadSealed'):t('bowracle.tarot.takeCards',{total:limit})}</strong>
    <small>{dealing?t('bowracle.tarot.cardsChoosing'):value.length>=limit?t('bowracle.tarot.keepMystery'):t('bowracle.tarot.oneTap')}</small>
   </div>
   <div className="bt-drawn-cards" aria-label={t('bowracle.tarot.revealCards')}>
    {Array.from({length:limit},(_,i)=>{const filled=Boolean(value[i]);return <div className={'bt-drawn-slot'+(filled?' is-filled is-sealed':'')} style={{'--slot-index':i}} key={value[i]||i}>
     {filled?<><div className="bt-drawn-face"><ClassicCardBack/></div><strong>{t('bowracle.tarot.sealedCard',{number:String(i+1).padStart(2,'0')})}</strong></>:<><span aria-hidden="true">✧</span><small>{String(i+1).padStart(2,'0')}</small></>}
    </div>;})}
   </div>
  </div>
 </div>;
}
