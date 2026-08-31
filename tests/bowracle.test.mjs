import test from 'node:test';
import assert from 'node:assert/strict';
import owner from '../src/components/PlayBowracle/data/ownerContent.json' with {type:'json'};
import {BOW_COLORS,createBowCode,INITIAL_BOW_DESIGN} from '../src/components/BowDesigner/bowOptions.js';
import {validateBowDesign} from '../src/components/BowDesigner/validateBowDesign.js';
import {bowracleCards,bowracleCharms,bowracleCreatures,bowracleMoods,colorTags,tagNames} from '../src/components/PlayBowracle/data/bowracleSymbols.js';
import {createReading,assignedDesign,surpriseChoices,readingCopy,storeHandoff,readSavedReading,saveReading,bowracleQuests,bowracleLore} from '../src/components/PlayBowracle/bowracleEngine.js';
import {bowracleEn,bowracleEs} from '../src/i18n/bowracle.js';
import {shareBowracleFile} from '../src/components/PlayBowracle/bowracleShareFile.js';
const base={selectedCards:['THE_STICK','THE_CHALK','THE_RIP'],colorId:'cobaltBlue',charmId:'STAR',creatureId:'BLACK_CAT',moodId:null};
const tFor=copy=>key=>key.startsWith('bowracle.')?key.slice(9).split('.').reduce((o,k)=>o?.[k],copy):key;
test('owner pack: 12 cards/charms/creatures, 30 readings, 50 quests and 50 lore lines',()=>{
 for(const list of [bowracleCards,bowracleCharms,bowracleCreatures]){assert.equal(list.length,12);assert.equal(new Set(list.map(c=>c.id)).size,12);}
 assert.equal(owner.results.length,30);assert.equal(bowracleQuests.length,50);assert.equal(bowracleLore.length,50);
 for(const list of [bowracleCards,bowracleCharms,bowracleCreatures,bowracleMoods,owner.results,bowracleQuests,bowracleLore])for(const item of list)assert.ok(item.energyTags.every(tag=>tagNames[tag]));
 assert.equal(bowracleQuests[41].safetyNote,'optionalTraining');
 assert.match(bowracleQuests[41].text_en,/safe, trained/);
});
test('all archetype tendencies × all 31 primary colors map to actual product values',()=>{
 for(const template of owner.results)for(const color of BOW_COLORS){const design=assignedDesign(color.id,template,'FOCUS');assert.ok(design,template.id+' '+color.id);assert.equal(design.topColor,color.value);assert.notEqual(design.topColor,design.bottomColor);assert.ok(!createBowCode(design).includes('XX'));}
 assert.equal(Object.keys(colorTags).length,BOW_COLORS.length);
});
test('exactly 3 distinct valid cards and valid choices required; optional mood validated',()=>{
 for(const cards of [[],base.selectedCards.slice(0,2),[...base.selectedCards,'THE_RESET'],['THE_STICK','THE_STICK','THE_CHALK'],['bad','THE_STICK','THE_CHALK']])assert.equal(createReading({...base,selectedCards:cards}),null);
 for(const key of ['colorId','charmId','creatureId','moodId'])assert.equal(createReading({...base,[key]:'bad'}),null);
 assert.equal(createReading(null),null);assert.ok(createReading(base));
});
test('deterministic, order-independent, all symbolic groups contribute to totals',()=>{
 const result=createReading(base);assert.deepEqual(result,createReading({...base,selectedCards:[...base.selectedCards].reverse()}));
 assert.equal(result.bowCode,createBowCode(result.design));
 for(const [key,list] of [['colorId',BOW_COLORS],['charmId',bowracleCharms],['creatureId',bowracleCreatures],['moodId',bowracleMoods]]){
  const variants=list.map(item=>createReading({...base,[key]:item.id}));
  assert.ok(variants.every(Boolean));assert.ok(new Set(variants.map(r=>JSON.stringify(r.tagCounts))).size>1);
 }
 assert.deepEqual(createReading(base,result),result);
});
test('history, saved context and commerce preserve the exact computed result',()=>{
 const a=createReading(base),b=createReading({...base,charmId:'FLAME',moodId:'MAIN_CHARACTER'},a);
 let value=null;const storage={getItem:()=>value,setItem:(_,v)=>{value=v;}};
 for(const result of [a,b]){assert.ok(saveReading(storage,result));assert.deepEqual(readSavedReading(storage),result);const payload=storeHandoff(result);assert.deepEqual(validateBowDesign(payload),result.design);assert.equal(payload.bowCode,result.bowCode);assert.equal(payload.source,'THE_BOW_RACLE');}
 assert.deepEqual(createReading(b.choices,b),b);
 assert.deepEqual(validateBowDesign(INITIAL_BOW_DESIGN),INITIAL_BOW_DESIGN);
 value='{';assert.equal(readSavedReading(storage),null);value='{"version":1}';assert.equal(readSavedReading(storage),null);
 const blocked={getItem:()=>{throw Error();},setItem:()=>{throw Error();}};
 assert.equal(readSavedReading(blocked),null);assert.equal(saveReading(blocked,a),false);assert.equal(storeHandoff({}),null);
});
test('all owner prose has exact bilingual dictionary values and matching leaf keys',()=>{
 const flatten=(value,prefix='')=>Object.entries(value).flatMap(([k,v])=>v&&typeof v==='object'?flatten(v,prefix+k+'.'):[prefix+k]);
 assert.deepEqual(flatten(bowracleEn).sort(),flatten(bowracleEs).sort());
 for(const [locale,dict] of [['en',bowracleEn],['es',bowracleEs]]){
  for(const r of owner.results){assert.equal(dict.results[r.id].reading,r['reading_'+locale]);assert.equal(dict.results[r.id].title,r['title_'+locale]);}
  for(const q of owner.quests)assert.equal(dict.quests[q.id],q['text_'+locale]);
  for(const q of owner.lore)assert.equal(dict.lore[q.id],q['text_'+locale]);
  for(let i=0;i<60;i++){const copy=readingCopy(createReading(surpriseChoices(()=>i/60)),tFor(dict));for(const field of ['title','shortReading','quest','lore','tinyNote'])assert.equal(typeof copy[field],'string');}
 }
});
test('surprise yields valid exactly-three-card readings, including RNG boundaries',()=>{
 for(const n of [0,.1,.49,.99,1]){const input=surpriseChoices(()=>n);assert.equal(new Set(input.selectedCards).size,3);assert.ok(createReading(input));assert.ok(!('finish' in input));assert.ok(!('secondaryColor' in input));}
});
test('Web Share file success, missing API, rejected share and cancellation',async()=>{
 const file=new File(['png'],'card.png',{type:'image/png'});let downloads=0,shares=0;
 const download=()=>downloads++;
 assert.equal(await shareBowracleFile(file,{canShare:()=>true,share:async data=>{assert.equal(data.files[0],file);shares++;}},download),'shared');
 assert.equal(shares,1);assert.equal(downloads,0);
 assert.equal(await shareBowracleFile(file,{},download),'downloaded');
 assert.equal(await shareBowracleFile(file,{canShare:()=>false,share:async()=>{}},download),'downloaded');
 assert.equal(await shareBowracleFile(file,{canShare:()=>true,share:async()=>{throw Error('denied');}},download),'downloaded');
 assert.equal(downloads,3);
 assert.equal(await shareBowracleFile(file,{canShare:()=>true,share:async()=>{throw new DOMException('cancel','AbortError');}},download),'');assert.equal(downloads,3);
});
