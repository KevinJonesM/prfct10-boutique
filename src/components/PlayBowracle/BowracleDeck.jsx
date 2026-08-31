import { useState } from 'react';
import { bowracleCards } from './data/bowracleSymbols.js';
import BowracleSymbol from './BowracleSymbol.jsx';

export function BowracleCardBack({symbol='star'}) {
  return <span className="br-card-back" aria-hidden="true"><span>PRFCT10 PLAY</span><i>✦</i><BowracleSymbol symbol={symbol}/><b>THE<br/>BOW-RACLE</b><small>✧ · ♡ · ✧</small></span>;
}
export function BowracleFan() {
  return <div className="br-fan" aria-hidden="true">{['moon','heart','star'].map((symbol,i)=><div className={`br-fan__card br-fan__card--${i}`} key={symbol}><BowracleCardBack symbol={symbol}/></div>)}</div>;
}
export default function BowracleCardPicker({value,onChange,t}) {
  const [order,setOrder]=useState(bowracleCards);
  function mix(){
    const cards=[...order];
    for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
    setOrder(cards);
  }
  return <><div className="br-deck-tools"><p role="status">{t('bowracle.cardCount',{count:value.length})}</p><button type="button" className="br-link" onClick={mix}>{t('bowracle.shuffle')}</button></div><div className="br-deck" role="group" aria-label={t('bowracle.deckLabel')}>
    {order.map((card,index)=><button type="button" className="br-deck-card" key={card.id} aria-pressed={value.includes(card.id)} aria-disabled={value.length===3&&!value.includes(card.id)} onClick={()=>onChange(card.id)}>
      <small>{String(bowracleCards.indexOf(card)+1).padStart(2,'0')}</small><BowracleSymbol symbol={card.symbol}/><strong>{t(`bowracle.cards.${card.id}.name`)}</strong>
      <span className="br-deck-card__meaning">{t(`bowracle.cards.${card.id}.meaning`)}</span>
      <span>{value.includes(card.id)?t('bowracle.chosen'):'✧'}</span>
    </button>)}
  </div></>;
}
