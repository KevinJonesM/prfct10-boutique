import {useState} from 'react';
import {shuffleCards,toggleCard} from './readingEngine.js';
import {TarotSigil,TarotFace} from './TarotArtwork.jsx';
export default function TarotSpread({deck,kind,value,onChange,t}){
 const [order,setOrder]=useState(()=>shuffleCards(deck)),[shuffle,setShuffle]=useState(0);
 const limit=kind==='major'?2:3;
 return <div className={'bt-table bt-table--'+kind}>
  <div className="bt-table-tools"><p role="status">{t('bowracle.tarot.count',{count:value.length,total:limit})}</p><button type="button" className="br-link" onClick={()=>{setOrder(shuffleCards(deck));setShuffle(n=>n+1);}}>{t('bowracle.tarot.shuffle')} ↻</button></div>
  <div className="bt-spread" role="group" aria-label={t('bowracle.tarot.'+kind)} key={shuffle}>
   {order.map((card,i)=>{const selected=value.includes(card.id);return <button type="button" className={'bt-card'+(selected?' is-selected':'')} style={{'--tilt':((i%5)-2)*1.4+'deg','--deal-delay':Math.min(i,12)*22+'ms'}} key={card.id} aria-pressed={selected} aria-disabled={!selected&&value.length===limit} aria-label={selected?t('bowracle.tarot.'+(kind==='major'?'majorCards':'minorCards')+'.'+card.id+'.name'):t('bowracle.tarot.hiddenCard',{kind:t('bowracle.tarot.'+kind),number:i+1})} onClick={()=>onChange(toggleCard(value,card.id,limit))}>
    <span className="bt-card-turn"><span className="bt-card-back"><TarotSigil/><b>THE BOW-RACLE</b><small>{String(i+1).padStart(2,'0')}</small></span><span className="bt-card-front" aria-hidden={!selected}>{selected&&<TarotFace card={card} kind={kind} t={t}/>}</span></span>
   </button>;})}
  </div>
  <div className="bt-tray" aria-label={t('bowracle.tarot.revealCards')}>{Array.from({length:limit},(_,i)=>{const card=deck.find(c=>c.id===value[i]);return <div className={'bt-tray-slot'+(card?' is-filled':'')} key={i}><small>{String(i+1).padStart(2,'0')}</small>{card?<><strong>{t('bowracle.tarot.'+(kind==='major'?'majorCards':'minorCards')+'.'+card.id+'.name')}</strong><span>{t('bowracle.tarot.'+(kind==='major'?'majorCards':'minorCards')+'.'+card.id+(kind==='major'?'.shortMeaning':'.meaning'))}</span></>:<span aria-hidden="true">✧</span>}</div>;})}</div>
 </div>;
}
