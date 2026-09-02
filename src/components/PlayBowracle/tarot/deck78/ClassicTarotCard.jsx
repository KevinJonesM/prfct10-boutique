import ClassicTarotArtwork from './ClassicTarotArtwork.jsx';
import {BowSigil,Eye,FourStar} from './tarotPrimitives.jsx';
import './deck78.css';

const SUIT_ACCENTS={VAULT:'#ff4f8d',BARS:'#1676e8',BEAM:'#aaff31',FLOOR:'#11c7c1',MAJOR:'#8254ff'};
const roman=n=>{const values=[[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];let out='';for(const [v,s] of values)while(n>=v){out+=s;n-=v;}return out;};
export function ClassicCardBack(){return <svg className="c78-card c78-card--back" viewBox="0 0 500 750" role="img" aria-label="THE EYE OF THE BOW-RACLE card back">
 <defs><radialGradient id="c78BackGlow"><stop stopColor="#8c35ff"/><stop offset=".48" stopColor="#35105f"/><stop offset="1" stopColor="#10021f"/></radialGradient><pattern id="c78BackDots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.8" fill="#ff61ae" opacity=".28"/></pattern></defs>
 <rect className="c78-back-ground" x="7" y="7" width="486" height="736" rx="34"/><rect x="8" y="8" width="484" height="734" rx="34" fill="url(#c78BackGlow)"/><rect x="8" y="8" width="484" height="734" rx="34" fill="url(#c78BackDots)"/>
 <g className="c78-back-ink"><rect x="21" y="21" width="458" height="708" rx="29"/><rect x="35" y="35" width="430" height="680" rx="23" strokeDasharray="5 8"/><path className="c78-back-zap" d="M38 205 116 181 84 248 145 230M455 490 381 510 418 447 355 466"/><circle cx="250" cy="340" r="184"/><circle cx="250" cy="340" r="145" strokeDasharray="4 12"/><path d="M250 132 432 455H68Z"/><path className="c78-back-rays" d="M250 113v-46M250 613v-48M48 340H8M492 340h-40M103 193 69 159M397 193l34-34M103 487l-34 34M397 487l34 34"/>
 <Eye x={250} y={318} s={1.22}/><BowSigil x={250} y={385} s={.72}/>{Array.from({length:10},(_,i)=><FourStar key={i} x={250+Math.cos(i*Math.PI*2/10)*185} y={340+Math.sin(i*Math.PI*2/10)*185} s={i%2?8:14} fill={i%3===0?'#b7ff39':'none'}/>) }
 <text className="c78-back-brand" x="250" y="78">PRFCT10 PLAY</text><text className="c78-back-kicker" x="250" y="552">ASK. FLIP. FIND OUT.</text><text className="c78-back-title" x="250" y="608">THE BOW-RACLE</text><text x="250" y="674">3 MAJOR · 7 MINOR · 10.000 ENERGY</text>
 <g className="c78-back-sticker c78-back-sticker--left"><rect x="36" y="92" width="118" height="40" rx="7"/><text x="95" y="118">GYM GOSSIP</text></g><g className="c78-back-sticker c78-back-sticker--right"><path d="M351 104h105v47H351z"/><text x="404" y="133">DO NOT PEEK</text></g>
 </g></svg>;}
export default function ClassicTarotCard({card,locale='en',back=false}){
 if(back)return <ClassicCardBack/>;
 const major=!card.suit,accent=SUIT_ACCENTS[card.suit||'MAJOR'],meaning=major?card.shortMeaning?.[locale]:card.meaning?.[locale],humor=major?card.microcopy?.[locale]:card.humorLine?.[locale];
 const rank=major?roman(card.number):card.rank;
 return <svg className={'c78-card c78-card--'+(major?'major':'minor')+' c78-card--'+(card.suit||'major').toLowerCase()} style={{'--c78-accent':accent}} viewBox="0 0 500 750" role="img" aria-label={`${rank} ${card.name}. ${meaning}`}>
  <defs><pattern id={'dots-'+card.id} width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor" opacity=".12"/></pattern></defs>
  <rect className="c78-paper" x="7" y="7" width="486" height="736" rx="31"/><rect className="c78-frame c78-frame--offset" x="20" y="19" width="456" height="708" rx="25"/><rect className="c78-frame" x="27" y="28" width="446" height="692" rx="20"/><path className="c78-frame-break" d="M22 155h72M405 155h73M22 575h54M425 575h53"/>
  <g className="c78-meta"><text x="48" y="65">PRFCT10</text><text x="452" y="65" textAnchor="end">THE BOW-RACLE</text><text className="c78-rank" x={major?'250':'52'} y={major?'125':'112'} textAnchor={major?'middle':'start'}>{rank}</text>{card.suit&&<text className="c78-suit" x="452" y="105" textAnchor="end">{card.suit}</text>}</g>
  <ClassicTarotArtwork card={card}/>
  <g className="c78-bottom"><text className="c78-title" x="250" y="605" textAnchor="middle">{card.name}</text><text className="c78-tags" x="250" y="641" textAnchor="middle">{card.tags.slice(0,3).join(' · ')}</text><text className="c78-humor" x="250" y="679" textAnchor="middle">{humor}</text></g>
  <path className="c78-tape" d="M366 535h83v27h-83z"/><text className="c78-easter" x="407" y="554" textAnchor="middle">{card.suit==='BARS'?'GRIPS?':card.suit==='BEAM'?'STILL UP':card.suit==='VAULT'?'SEND IT':card.suit==='FLOOR'?'HIT POSE':'10.000'}</text>
 </svg>;
}
