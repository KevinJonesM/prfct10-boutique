import {sigilMarkup,emblemMarkup} from './artwork.js';
import BowracleSymbol from '../BowracleSymbol.jsx';
import ClassicTarotCard from './deck78/ClassicTarotCard.jsx';
const symbolMap={'landing-line':'salute','chalk-cloud':'cloud','taped-palm':'rip','vault-block':'flight','flight-arc':'flight','beam-pulse':'wobble','gymnastics-grips':'grip','twisting-spiral':'flame','circular-arrow-star':'reset','returning-star':'star','falling-star':'star','supporting-hands':'heart','pencil-arrow':'lightning','eye-flame':'eye','connected-path':'ribbon','scoreboard':'gem','four-event-wheel':'prism','hourglass-star':'moon','podium-star':'star','perfect-ten':'star'};
const illustratedMajorArcana=new Set(['the-stick','the-chalk','the-rip','the-salute','the-block','the-flight','the-wobble','the-grip','full-out','the-reset','the-spotlight','the-comeback','the-spot','the-correction','the-fear','the-routine','the-score','the-rotation','the-wait','the-podium','the-ten']);
export function TarotSigil(){return <span className="bt-sigil" aria-hidden="true" dangerouslySetInnerHTML={{__html:sigilMarkup()}}/>;}
export function HouseEmblem({house}){return <span className="bt-emblem" aria-hidden="true" dangerouslySetInnerHTML={{__html:emblemMarkup(house)}}/>;}
export function TarotFace({card,kind,t}){
 const key='bowracle.tarot.'+(kind==='major'?'majorCards':'minorCards')+'.'+card.id;
 if(kind==='major'||card.suit)return <span className="bt-card-face bt-card-face--classic"><ClassicTarotCard card={card}/></span>;
 return <span className="bt-card-face" style={{'--card-accent':card.accent}}><small>{kind==='major'?'I — XXII':t('bowracle.tarot.suits.'+card.suit)} · {String(card.number).padStart(2,'0')}</small><BowracleSymbol symbol={symbolMap[card.symbol]||card.symbol||({VAULT:'flight',BARS:'grip',BEAM:'wobble',FLOOR:'salute'}[card.suit])||'star'}/><strong>{t(key+'.name')}</strong>{kind==='minor'&&<b>{t(key+'.hook')}</b>}<span>{t(key+(kind==='major'?'.microcopy':'.humorLine'))}</span></span>;
}
