import {imagotypeMarkup,gymnastMarkup} from '../../Play/exportArtwork.js';
import {prepareSvg} from '../../BowDesigner/BowPreview.jsx';
import {CARD_FORMATS,wrapText} from '../bowracleCardSvg.js';
import {tarotCopy} from './readingCopy.js';
import {cleanFirstName} from './readingEngine.js';
import {emblemMarkup,HOUSE_ACCENTS,sigilMarkup} from './artwork.js';
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function createTarotSvg(result,t,format='story',{kind='reading',firstName='',prefix='tarot-card'}={}){
 const {height}=CARD_FORMATS[format],feed=format==='feed',houseCard=kind==='house',copy=tarotCopy(result,t),accent=HOUSE_ACCENTS[result.house],name=cleanFirstName(firstName),get=key=>t('bowracle.tarot.'+key);
 const garden=houseCard&&result.mode==='house',ink=garden?'#2b1830':'#f6edfc';
 const text=(value,x,y,size,extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-family="Arial,sans-serif" fill="${ink}" ${extra}>${esc(value)}</text>`;
 const para=(value,y,size=30,width=840,extra='')=>wrapText(value,size,width).map((s,i)=>text(s,540,y+i*size*1.22,size,'text-anchor="middle" '+extra)).join('');
 const botanical=garden?`<g fill="none" stroke="#789175" stroke-width="3" opacity=".7"><path d="M65 330C145 275 130 170 230 105M1015 330C935 275 950 170 850 105"/><path d="M83 284q64-45 114-5M997 284q-64-45-114-5"/><path d="M109 226q52-35 91-1M971 226q-52-35-91-1"/></g><g fill="#d89ab8" opacity=".82"><circle cx="176" cy="128" r="12"/><circle cx="904" cy="128" r="12"/><circle cx="112" cy="306" r="8"/><circle cx="968" cy="306" r="8"/></g><g fill="#9fcfca"><path d="M127 145q28-31 48 0-26-7-48 0m826 0q-28-31-48 0 26-7 48 0"/></g>`:'';
 let output=`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="${height}" viewBox="0 0 1080 ${height}"><defs><linearGradient id="${prefix}-bg" x2="1" y2="1"><stop stop-color="${garden?'#fffaf0':'#271737'}"/><stop offset=".6" stop-color="${garden?'#f2e3ea':'#170e26'}"/><stop offset="1" stop-color="${garden?'#dceae3':'#37385c'}"/></linearGradient></defs><rect width="1080" height="${height}" fill="${garden?'#fbf5e9':'#180e26'}"/><rect x="25" y="25" width="1030" height="${height-50}" rx="75" fill="url(#${prefix}-bg)" stroke="${garden?'#9c708b':accent}" stroke-width="3"/><rect x="43" y="43" width="994" height="${height-86}" rx="62" fill="none" stroke="${garden?'#9c708b88':'#ebcaff45'}"/>${botanical}`;
 output+=imagotypeMarkup(82,70,104,91)+text('THE BOW-RACLE',540,107,28,'text-anchor="middle" letter-spacing="3"')+text(result.demo?get('demoResult'):'PRFCT10 PLAY / '+get(houseCard?'houseCard':'readingCard').toUpperCase(),540,147,18,'text-anchor="middle" letter-spacing="2"');
 let y=200;if(name){output+=para(name.toUpperCase()+',',y,Math.min(32,800/(name.length*.72)));y+=42;}
 if(houseCard){
  const size=feed?175:255;output+=emblemMarkup(result.house,540-size/2,y,size);y+=size+38;
  output+=para(get(result.mode==='house'?'belongsTo':'houseToday'),y,21);y+=65;
  output+=para(copy.house.name,y,64,860,'font-weight="700"');y+=47;
  output+=para(copy.house.energyWords,y,24);y+=wrapText(copy.house.energyWords,24,840).length*29+20;
 }else{
  output+=para(get('todayYouAre'),y,18);y+=57;
  let titleSize=feed?43:54;while(wrapText(copy.title,titleSize,820).length>2)titleSize--;
  output+=para(copy.title,y,titleSize,820,'font-weight="700"');y+=wrapText(copy.title,titleSize,820).length*titleSize*1.22+15;
  output+=emblemMarkup(result.house,140,y-24,65)+para(copy.house.name+' · '+String(result.luckyNumber).padStart(2,'0'),y+14,32);y+=62;
 }
 const bowHeight=houseCard?(feed?170:245):(feed?110:180);
 output+=prepareSvg({prefix:prefix+'-bow',...result.design}).replace('viewBox="0 0 900 650"','viewBox="70 65 760 505"').replace('<svg ',`<svg x="255" y="${y}" width="570" height="${bowHeight}" `);
 output+=gymnastMarkup({id:prefix+'-gymnast',x:855,y:y+5,width:105,height:Math.max(100,bowHeight-10),fill:accent,offset:'#ad72be'});y+=bowHeight+27;
 output+=para(get('powerColor')+' · '+copy.powerColor.toUpperCase(),y,21);y+=38;
 const blocks=houseCard?[[get('luckyNumber'),String(result.luckyNumber).padStart(2,'0')],[get('houseMessage'),copy.house.statement],[get('prophecy'),copy.prophecy.prose]]:[[get('bowracleSays'),copy.message],[get('prophecy'),copy.prophecy.prose],[get('manifestation'),copy.window.label+'*'],[get('coachForecast'),copy.coach.prose],[get('todayQuest'),copy.quest.prose],[get('secretGymLaw'),copy.law.prose]];
 let size=houseCard?(feed?34:45):(feed?27:35);
 const blockH=s=>blocks.reduce((n,[,body])=>n+37+wrapText(body,s,830).length*s*1.22+20,0);
 while(y+blockH(size)>height-180&&size>18)size--;
 for(const [label,body] of blocks){output+=`<path d="M116 ${y-10}H964" stroke="${accent}" opacity=".4"/>`+para(label.toUpperCase(),y+13,16,840,'letter-spacing="1.5"');output+=para(body,y+47,size,830,'font-weight="600"');y+=37+wrapText(body,size,830).length*size*1.22+20;}
 if(!houseCard)output+=para(get('questNote'),height-157,16,820);
 const footer=get(houseCard?'certified':'windowNote');output+=para(footer,height-131,houseCard?21:16,820);
 if(result.mode==='house')output+=para(get('secretLabel')+' · '+result.code,height-87,19);
 else output+=para(get('luckyNumber')+' · '+String(result.luckyNumber).padStart(2,'0')+' / '+get('loreNote'),height-89,15,820);
 output+=para(result.bowCode,height-55,18)+`<g color="${accent}" opacity=".35">`+sigilMarkup().replace('<svg ',`<svg x="76" y="${height-153}" width="45" height="60" `)+'</g></svg>';
 return output;
}
