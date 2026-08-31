import {MAJOR_ARCANA,MINOR_ARCANA,BOWRACLE_HOUSES,HOUSE_TAG_WEIGHTS,PROPHECIES,COACH_FORECASTS,MANIFESTATION_WINDOWS,POWER_COLORS,LUCKY_NUMBERS,archetypes,quests,gymLaws} from './content.js';
import {assignedDesign} from '../bowracleEngine.js';
import {BOW_COLORS,createBowCode} from '../../BowDesigner/bowOptions.js';
import {validateBowDesign} from '../../BowDesigner/validateBowDesign.js';
export const TAROT_STORAGE_KEY='prfct10-bowracle-table-v3';
export const hash=value=>[...value].reduce((n,c)=>(Math.imul(n,31)+c.charCodeAt(0))>>>0,17);
export const cleanFirstName=value=>typeof value==='string'?value.replace(/[\u0000-\u001f<>]/g,'').trim().slice(0,30):'';
export function toggleCard(ids,id,limit){return ids.includes(id)?ids.filter(value=>value!==id):ids.length<limit?[...ids,id]:ids;}
export function validSelection(ids,deck,count){return Array.isArray(ids)&&ids.length===count&&new Set(ids).size===count&&ids.every(id=>deck.some(card=>card.id===id));}
export function shuffleCards(deck,random=Math.random){const items=[...deck];for(let i=items.length-1;i>0;i--){const j=Math.max(0,Math.min(i,Math.floor(random()*(i+1))));[items[i],items[j]]=[items[j],items[i]];}return items;}
function choose(pool,counts,seed,salt){const ranked=pool.map(item=>({item,score:(item.tags||[]).reduce((n,tag)=>n+(counts[tag]||0),0)}));const max=Math.max(...ranked.map(r=>r.score));const best=ranked.filter(r=>r.score===max);return best[hash(seed+salt)%best.length].item;}
export function houseFromTags(counts,seed){return choose(BOWRACLE_HOUSES.map(h=>({...h,tags:[],score:Object.entries(HOUSE_TAG_WEIGHTS[h.id]).reduce((n,[tag,weight])=>n+(counts[tag]||0)*weight,0)})).filter((h,_,arr)=>h.score===Math.max(...arr.map(v=>v.score))),{},seed,'house').id;}
export function luckyNumber(seed){const total=LUCKY_NUMBERS.reduce((n,item)=>n+item.weight,0);let value=hash(seed+'lucky')/4294967296*total;for(const item of LUCKY_NUMBERS){value-=item.weight;if(value<0)return item.value;}return 10;}
function assemble(seed,counts,house,extra){
 const archetype=choose(archetypes,counts,seed,'archetype'),powerColor=choose(POWER_COLORS,counts,seed,'color');
 const dominantTags=Object.keys(counts).sort((a,b)=>counts[b]-counts[a]||a.localeCompare(b));
 const design=extra.design||assignedDesign(powerColor.id,archetype,dominantTags[0]);
 if(!validateBowDesign(design))return null;
 return {version:3,seed,house,dominantTags,archetypeId:archetype.id,prophecyId:choose(PROPHECIES,counts,seed,'prophecy').id,coachId:choose(COACH_FORECASTS,counts,seed,'coach').id,questId:choose(quests,counts,seed,'quest').id,lawId:choose(gymLaws,counts,seed,'law').id,windowId:MANIFESTATION_WINDOWS[hash(seed+'window')%MANIFESTATION_WINDOWS.length].id,luckyNumber:luckyNumber(seed),powerColorId:BOW_COLORS.find(c=>c.value===design.topColor).id,design,bowCode:createBowCode(design),...extra};
}
export function createTarotReading(input){
 if(!input||!validSelection(input.majorArcanaIds,MAJOR_ARCANA,2)||!validSelection(input.minorArcanaIds,MINOR_ARCANA,3))return null;
 const majorArcanaIds=[...input.majorArcanaIds].sort(),minorArcanaIds=[...input.minorArcanaIds].sort();
 const seed=JSON.stringify([majorArcanaIds,minorArcanaIds]),counts={};
 for(const [deck,ids,weight] of [[MAJOR_ARCANA,majorArcanaIds,2],[MINOR_ARCANA,minorArcanaIds,1]])for(const id of ids)for(const tag of deck.find(card=>card.id===id).tags)counts[tag]=(counts[tag]||0)+weight;
 return assemble(seed,counts,houseFromTags(counts,seed),{mode:'reading',majorArcanaIds,minorArcanaIds});
}
export function createSecretReading(resolved){
 if(!resolved?.valid||!BOWRACLE_HOUSES.some(h=>h.id===resolved.house)||!resolved.readingSeed)return null;
 const counts=Object.fromEntries(BOWRACLE_HOUSES.find(h=>h.id===resolved.house).tags.map(tag=>[tag,2]));
 const design=resolved.bowConfig?validateBowDesign(resolved.bowConfig):null;if(resolved.bowConfig&&!design)return null;
 return assemble(resolved.readingSeed,counts,resolved.house,{mode:'house',code:resolved.code,edition:resolved.edition,demo:resolved.demo,hasPhysicalBow:!!design,...(design?{design}:{})});
}
export function tarotHandoff(result){const design=validateBowDesign(result?.design);return design?{...design,bowCode:createBowCode(design),oracleCard:result.house+' / '+result.archetypeId,source:'THE_BOW_RACLE'}:null;}
// Persist only selected card IDs. No first name, secret code or customer details.
export function saveTarotReading(storage,result){try{if(result?.mode!=='reading'||!createTarotReading(result))return false;storage.setItem(TAROT_STORAGE_KEY,JSON.stringify({version:3,majorArcanaIds:result.majorArcanaIds,minorArcanaIds:result.minorArcanaIds}));return true;}catch{return false;}}
export function readTarotReading(storage){try{const input=JSON.parse(storage.getItem(TAROT_STORAGE_KEY));return input?.version===3?createTarotReading(input):null;}catch{return null;}}
