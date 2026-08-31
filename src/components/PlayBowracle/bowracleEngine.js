import owner from './data/ownerContent.json' with {type:'json'};
import {BOW_COLORS,createBowCode} from '../BowDesigner/bowOptions.js';
import {validateBowDesign} from '../BowDesigner/validateBowDesign.js';
import {bowracleCards,bowracleCharms,bowracleCreatures,bowracleMoods,colorTags} from './data/bowracleSymbols.js';

export const STORAGE_KEY='prfct10-bowracle-v2';
export const DEFAULT_CHOICES={selectedCards:[],colorId:null,charmId:null,creatureId:null,moodId:null};
export const bowracleResults=owner.results;
const physical=new Set([1,2,3,4,8,16,22,28,30,31,34,41,42,47]);
const questGroups=[['TEAM',[6,7,10,21,27,33,40,46]],['FOCUS',[3,4,8,16,17,26,28,31,32,37,42,47]],['RESET',[9,12,13,15,20,22,25,41,43,45,48,49]],['SPOTLIGHT',[5,11,18,19,23,24,29,34,39,50]],['MISCHIEF',[1,2,14,18,24,29,30,35,36,46]],['CONFIDENCE',[1,2,5,19,23,25,27,31,38,39,44,45,49,50]]];
const loreGroups=[['TEAM',[1,3,7,9,12,14,16,20,26,33,38,41,43,45,46,49,50]],['FOCUS',[2,5,6,17,18,19,23,29,31,39]],['CHAOS',[3,4,10,15,16,20,21,25,27,28,32,35,40,42,50]],['SPOTLIGHT',[8,11,13,14,21,22,24,27,34,36,37,44,47]],['COMEBACK',[6,23,30,33,38,40,48]]];
const classify=(list,groups)=>list.map((item,index)=>({...item,energyTags:groups.filter(([,ns])=>ns.includes(index+1)).map(([tag])=>tag)}));
export const bowracleQuests=classify(owner.quests,questGroups).map((q,i)=>({...q,type:physical.has(i+1)?'training':'culture',safetyNote:physical.has(i+1)?'optionalTraining':null}));
export const bowracleLore=classify(owner.lore,loreGroups);
const byId=(list,id)=>list.find(item=>item.id===id);
const hash=value=>[...value].reduce((n,c)=>(Math.imul(n,31)+c.charCodeAt(0))>>>0,17);
const aliases={'cobalt':'cobaltBlue','baby blue':'babyBlue','light pink':'lightPink','hot pink':'fuchsia','neon pink':'neonPink','orange':'energyOrange','neon green':'neonGreen','navy':'navyBlue'};
const centers={'black band':'blackBand','black stones':'blackStones','gold stones':'goldStones',silver:'silver',neon:'neon'};
export function assignedDesign(colorId,template,dominantTag){
  const [pair,finish,center]=template.bow.split(' / ');
  const colors=pair.split(' + ').map(c=>aliases[c]||c);
  let second=colors[1]===colorId?colors[0]:colors[1];
  if(second===colorId)second=colorId==='white'?'lilac':'white';
  return validateBowDesign({topColor:byId(BOW_COLORS,colorId)?.value,bottomColor:byId(BOW_COLORS,second)?.value,finish:finish==='classic'?'classicTulle':finish,centerStyle:centers[center],size:['SPOTLIGHT','FIRE'].includes(dominantTag)?'large':dominantTag==='CALM'?'small':'medium'});
}
function choose(list,counts,seed,avoid){
  const ranked=list.map(item=>({item,score:item.energyTags.reduce((sum,tag)=>sum+(counts[tag]||0),0)}));
  const max=Math.max(...ranked.map(r=>r.score));
  const best=ranked.filter(r=>r.score===max).map(r=>r.item);
  const fresh=best.filter(item=>item.id!==avoid),pool=fresh.length?fresh:best;
  return pool[seed%pool.length];
}
export function createReading(input,previous=null){
  if(!input||!Array.isArray(input.selectedCards)||input.selectedCards.length!==3||new Set(input.selectedCards).size!==3)return null;
  const cards=input.selectedCards.map(id=>byId(bowracleCards,id));
  const color=byId(BOW_COLORS,input.colorId),charm=byId(bowracleCharms,input.charmId),creature=byId(bowracleCreatures,input.creatureId),mood=input.moodId?byId(bowracleMoods,input.moodId):null;
  if(cards.some(c=>!c)||!color||!charm||!creature||(input.moodId&&!mood))return null;
  const choices={selectedCards:[...input.selectedCards].sort(),colorId:color.id,charmId:charm.id,creatureId:creature.id,moodId:mood?.id||null};
  const signature=JSON.stringify(choices),seed=hash(signature);
  // Same inputs retain their reading; changed inputs rotate equally good matches.
  const context=previous?.signature===signature?(previous.context||null):previous?{archetypeId:previous.archetypeId,questId:previous.questId,loreId:previous.loreId}:null;
  const counts={};
  for(const item of [...cards,charm,creature,...(mood?[mood]:[]),{energyTags:colorTags[color.id]}])for(const tag of item.energyTags)counts[tag]=(counts[tag]||0)+(item.weight||1);
  const ranked=Object.keys(counts).sort((a,b)=>counts[b]-counts[a]||a.localeCompare(b));
  const template=choose(bowracleResults,counts,seed,context?.archetypeId);
  const quest=choose(bowracleQuests,counts,hash(signature+'quest'),context?.questId),lore=choose(bowracleLore,counts,hash(signature+'lore'),context?.loreId);
  const design=assignedDesign(color.id,template,ranked[0]);
  if(!design)return null;
  return {version:2,cardNumber:template.number,archetypeId:template.id,choices,signature,context,energyWords:ranked.slice(0,3),tagCounts:counts,questId:quest.id,loreId:lore.id,design,bowCode:createBowCode(design)};
}
export function readingCopy(result,t){
  const id=result.archetypeId,c=result.choices;
  return {title:t('bowracle.results.'+id+'.title'),shortReading:t('bowracle.results.'+id+'.reading'),tinyNote:t('bowracle.results.'+id+'.note'),energyWords:result.energyWords.map(tag=>t('bowracle.tags.'+tag)),quest:t('bowracle.quests.'+result.questId),lore:t('bowracle.lore.'+result.loreId),safetyNote:byId(bowracleQuests,result.questId)?.safetyNote?t('bowracle.optionalTraining'):null,colorNames:[result.design.topColor,result.design.bottomColor].map(hex=>t('bow.colors.'+BOW_COLORS.find(color=>color.value===hex).id)),inputSummary:[...c.selectedCards.map(card=>t('bowracle.cards.'+card+'.name')),t('bow.colors.'+c.colorId),t('bowracle.charms.'+c.charmId+'.name'),t('bowracle.creatures.'+c.creatureId+'.name'),...(c.moodId?[t('bowracle.moods.'+c.moodId+'.name')]:[])]};
}
export function surpriseChoices(random=Math.random){
  const pick=list=>list[Math.min(list.length-1,Math.max(0,Math.floor(random()*list.length)))];
  const pool=[...bowracleCards],selectedCards=[];
  while(selectedCards.length<3){const item=pick(pool);selectedCards.push(item.id);pool.splice(pool.indexOf(item),1);}
  return {selectedCards,colorId:pick(BOW_COLORS).id,charmId:pick(bowracleCharms).id,creatureId:pick(bowracleCreatures).id,moodId:null};
}
function restore(saved){return saved?.version===2?createReading(saved.choices,saved.context):null;}
export function storeHandoff(result){const valid=restore(result);return valid?{...valid.design,bowCode:valid.bowCode,oracleCard:valid.archetypeId,source:'THE_BOW_RACLE'}:null;}
export function readSavedReading(storage){try{return restore(JSON.parse(storage.getItem(STORAGE_KEY)));}catch{return null;}}
export function saveReading(storage,result){try{if(!restore(result))return false;storage.setItem(STORAGE_KEY,JSON.stringify(result));return true;}catch{return false;}}
