import {imagotypeMarkup,gymnastMarkup} from '../Play/exportArtwork.js';
import {prepareSvg} from '../BowDesigner/BowPreview.jsx';
import {readingCopy} from './bowracleEngine.js';

export const CARD_FORMATS={story:{width:1080,height:1920},feed:{width:1080,height:1350}};
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function wrapText(value,size,width){
 const lines=[];let line='';
 const measure=text=>[...text].reduce((n,c)=>n+(/[MW@%]/.test(c)?.92:/[ilI.,'’ ]/.test(c)?.3:.59)*size,0);
 for(const word of String(value).split(/\s+/)){if(line&&measure(line+' '+word)>width){lines.push(line);line=word;}else line=line?line+' '+word:word;}
 if(line)lines.push(line);return lines;
}
export function createBowracleSvg(result,t,format='story',prefix='bowracle-export'){
 const {height}=CARD_FORMATS[format]||CARD_FORMATS.story,feed=height===1350,copy=readingCopy(result,t);
 const ink='#f3e6fb',muted='#dac4e9';
 const text=(value,x,y,size=30,extra='')=>'<text x="'+x+'" y="'+y+'" fill="'+ink+'" '+(extra.includes('font-family=')?'':'font-family="Arial,sans-serif" ')+'font-size="'+size+'" '+extra+'>'+escape(value)+'</text>';
 const paragraph=(value,y,size,width=830,extra='')=>wrapText(value,size,width).map((line,i)=>text(line,540,y+i*size*1.25,size,'text-anchor="middle" '+extra)).join('');
 let titleSize=feed?51:65;
 while(wrapText(copy.title,titleSize,820).length>2)titleSize--;
 const titleLines=wrapText(copy.title,titleSize,820);
 let y=230+titleLines.length*titleSize*1.14;
 const title=paragraph(copy.title,230,titleSize,820,'font-weight="700"');
 const energy=paragraph(copy.energyWords.join(' · ').toUpperCase(),y+7,feed?22:26,820,'letter-spacing="1"');y+=feed?38:55;
 const bowY=y,bowHeight=feed?185:285;y+=bowHeight;
 const bow=prepareSvg({prefix:prefix+'-bow',...result.design}).replace('viewBox="0 0 900 650"','viewBox="70 65 760 505"').replace('<svg ','<svg x="225" y="'+bowY+'" width="630" height="'+bowHeight+'" ');
 const bowLabels=paragraph(copy.colorNames.join(' + '),y+15,24,800,'font-weight="700"');y+=50;
 const clues=copy.inputSummary.join(' · ');
 const clueSize=feed?20:24,clueLines=wrapText(clues,clueSize,810);
 const inputMarkup=text(t('bowracle.inputs').toUpperCase(),540,y,18,'text-anchor="middle" letter-spacing="3"')+paragraph(clues,y+30,clueSize,810);
 y+=36+clueLines.length*clueSize*1.25+18;
 const blocks=[['reading',copy.shortReading],['quest',copy.quest],['loreTitle',copy.lore]];
 const footerTop=height-155;
 let size=feed?31:39;
 const bodyHeight=s=>blocks.reduce((n,[,value])=>n+46+wrapText(value,s,800).length*s*1.25+22,0);
 while(y+bodyHeight(size)>footerTop&&size>23)size--;
 let body='';
 for(const [label,value] of blocks){
  const lines=wrapText(value,size,800),h=46+lines.length*size*1.25+22;
  body+='<rect x="100" y="'+(y-18)+'" width="880" height="'+(h-10)+'" rx="20" fill="#f7ddff09" stroke="#dec0ef40"/>';
  body+=text(t('bowracle.'+label).toUpperCase(),540,y+5,18,'text-anchor="middle" letter-spacing="3"');
  body+=paragraph(value,y+43,size,800,label==='reading'?'font-weight="700"':'');
  y+=h;
 }
 const note=copy.safetyNote?t('bowracle.optionalTraining'):t('bowracle.loreNote');
 return '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="'+height+'" viewBox="0 0 1080 '+height+'" style="print-color-adjust:exact;-webkit-print-color-adjust:exact">'+
 '<defs><linearGradient id="'+prefix+'-night" x2="1" y2="1"><stop stop-color="#382044"/><stop offset=".5" stop-color="#20182f"/><stop offset="1" stop-color="#293653"/></linearGradient><linearGradient id="'+prefix+'-foil" x2="1" y2="1"><stop stop-color="#e4c8ff"/><stop offset=".3" stop-color="#a9e9e0"/><stop offset=".6" stop-color="#efb3df"/><stop offset="1" stop-color="#dafa91"/></linearGradient></defs>'+
 '<rect width="1080" height="'+height+'" fill="#170f23"/><rect x="24" y="24" width="1032" height="'+(height-48)+'" rx="48" fill="url(#'+prefix+'-night)" stroke="url(#'+prefix+'-foil)" stroke-width="5"/><rect x="43" y="43" width="994" height="'+(height-86)+'" rx="34" fill="none" stroke="#cfb4e34d"/>'+
 imagotypeMarkup(77,75,104,91)+text('THE BOW-RACLE',540,105,27,'text-anchor="middle" letter-spacing="4"')+text('PRFCT10 PLAY · '+result.cardNumber,540,142,17,'text-anchor="middle" letter-spacing="3"')+
 title+energy+'<ellipse cx="540" cy="'+(bowY+bowHeight/2)+'" rx="310" ry="'+(bowHeight*.47)+'" fill="#d8b7ef16" stroke="#d4b6ef40"/>'+bow+bowLabels+
 gymnastMarkup({id:prefix+'-gymnast',x:864,y:bowY+25,width:98,height:Math.min(bowHeight-25,165),fill:'#d6b4ef',offset:'#bce5e4'})+
 inputMarkup+body+
 paragraph(note,height-119,feed?16:18,810)+
 text(result.bowCode,540,height-54,23,'text-anchor="middle" font-family="monospace" font-weight="700"')+
 '<path d="M970 91V125M953 108H987M77 '+(height-98)+'V'+(height-64)+'M60 '+(height-81)+'H94" stroke="'+muted+'" stroke-width="2"/></svg>';
}
