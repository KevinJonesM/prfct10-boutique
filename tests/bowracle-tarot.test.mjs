import test from 'node:test';
import assert from 'node:assert/strict';
import {MAJOR_ARCANA,MINOR_ARCANA,BOWRACLE_HOUSES,PROPHECIES,COACH_FORECASTS,quests,gymLaws} from '../src/components/PlayBowracle/tarot/content.js';
import {createTarotReading,createSecretReading,toggleCard,validSelection,shuffleCards,luckyNumber,cleanFirstName,tarotHandoff,saveTarotReading,readTarotReading} from '../src/components/PlayBowracle/tarot/readingEngine.js';
import {resolveBowracleSecretCode,normalizeSecretCode} from '../src/components/PlayBowracle/tarot/secretCodes.js';
import {createBowCode,INITIAL_BOW_DESIGN} from '../src/components/BowDesigner/bowOptions.js';
import {validateBowDesign} from '../src/components/BowDesigner/validateBowDesign.js';
import {tarotCopy} from '../src/components/PlayBowracle/tarot/readingCopy.js';
import {bowracleEn,bowracleEs} from '../src/i18n/bowracle.js';
import {MASHUKI_LETTERS_V1} from '../src/components/PlayBowracle/mashukiLettersV1.js';
import {MASHUKI_LETTERS_EN_V1} from '../src/components/PlayBowracle/mashukiLettersEnglishV1.js';
const base={majorArcanaIds:['the-stick','the-flight'],minorArcanaIds:['daily-empty-bottle','daily-forgot-grips','daily-rip']};
test('Mashuki V1 contains five canonical Spanish letters for each of exactly four bow Houses',()=>{
 assert.equal(MASHUKI_LETTERS_V1.length,20);assert.equal(new Set(MASHUKI_LETTERS_V1.map(letter=>letter.id)).size,20);
 assert.deepEqual(Object.fromEntries(['POISE','VELOCITY','POWER','FLIGHT'].map(house=>[house,MASHUKI_LETTERS_V1.filter(letter=>letter.house===house).length])),{POISE:5,VELOCITY:5,POWER:5,FLIGHT:5});
 for(const letter of MASHUKI_LETTERS_V1){assert.ok(letter.body.es.length>=10);assert.ok(letter.title.es);assert.ok(letter.signoff.es);}
});
test('table contains 22 Major + 30 Daily Chaos cards, five families of six and seven unranked Houses',()=>{
 assert.equal(MAJOR_ARCANA.length,22);assert.equal(MINOR_ARCANA.length,30);assert.equal(BOWRACLE_HOUSES.length,7);
 assert.equal(new Set([...MAJOR_ARCANA,...MINOR_ARCANA].map(c=>c.id)).size,52);
 for(const family of ['SURVIVAL_BAG','COACH_ENERGY','BODY_SUFFERING','SKILL_ERA','GYM_CHAOS']){const cards=MINOR_ARCANA.filter(c=>c.family===family);assert.equal(cards.length,6);assert.ok(cards.every(c=>c.accent&&c.hook?.en&&c.visualConcept?.en));}
 assert.equal(PROPHECIES.length,5);assert.equal(COACH_FORECASTS.length,6);assert.ok(quests.length>=50);assert.ok(gymLaws.length>=50);
});
test('selection refuses over-limit, under-limit, duplicate, cross-deck and missing cards',()=>{
 for(const [deck,max] of [[MAJOR_ARCANA,2],[MINOR_ARCANA,3]]){let ids=[];for(let i=0;i<max;i++)ids=toggleCard(ids,deck[i].id,max);assert.deepEqual(toggleCard(ids,deck[max].id,max),ids);assert.equal(toggleCard(ids,ids[0],max).length,max-1);assert.ok(validSelection(ids,deck,max));assert.ok(!validSelection(ids.slice(1),deck,max));}
 for(const majorArcanaIds of [[],['the-stick'],['the-stick','the-stick'],['bad','the-stick'],['the-stick','the-flight','the-fall']])assert.equal(createTarotReading({...base,majorArcanaIds}),null);
 for(const minorArcanaIds of [[],base.minorArcanaIds.slice(0,2),[...base.minorArcanaIds,MINOR_ARCANA[3].id],['the-stick',...base.minorArcanaIds.slice(1)]])assert.equal(createTarotReading({...base,minorArcanaIds}),null);
 assert.equal(createTarotReading(null),null);
});
test('card order and optional names never change reading, House or assigned bow',()=>{
 const result=createTarotReading(base);assert.ok(result);assert.equal(result.house,'AXIS');
 for(const firstName of [undefined,'','Sofia','Valentina','<svg>'])assert.deepEqual(createTarotReading({...base,firstName,majorArcanaIds:[...base.majorArcanaIds].reverse(),minorArcanaIds:[...base.minorArcanaIds].reverse()}),result);
 assert.equal(cleanFirstName('<Sofia>\n'),'Sofia');assert.equal(cleanFirstName('x'.repeat(99)).length,30);
 assert.equal(result.bowCode,createBowCode(result.design));assert.deepEqual(validateBowDesign(tarotHandoff(result)),result.design);
 assert.deepEqual(validateBowDesign(INITIAL_BOW_DESIGN),INITIAL_BOW_DESIGN);
});
test('all seven Houses reachable; sampled assignments valid; lucky numbers cover 01–10',()=>{
 let state=711;const random=()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/4294967296),houses=new Set(),numbers=new Set();
 for(let i=0;i<4000;i++){const result=createTarotReading({majorArcanaIds:shuffleCards(MAJOR_ARCANA,random).slice(0,2).map(c=>c.id),minorArcanaIds:shuffleCards(MINOR_ARCANA,random).slice(0,3).map(c=>c.id)});assert.ok(validateBowDesign(result.design));assert.equal(result.bowCode,createBowCode(result.design));houses.add(result.house);numbers.add(luckyNumber('sample-'+i));}
 assert.equal(houses.size,7);assert.equal(numbers.size,10);
});
test('secret code normalization, opt-in demo isolation and deterministic House',async()=>{
 assert.equal(normalizeSecretCode(' bwr - 7k4 n2 '),'BWR-7K4N2');
 assert.equal((await resolveBowracleSecretCode('BWR-7K4N2')).reason,'unavailable');
 assert.equal((await resolveBowracleSecretCode('BWR-XXXXX',{demo:true})).reason,'invalid');
 assert.equal((await resolveBowracleSecretCode('P10-OM-CB-LM-SH-SI-M',{demo:true})).valid,false);
 for(const [code,house,secretHouse] of [['BWR-7K4N2','NOVA','POISE'],['BWR-P3M82','PRISM','VELOCITY'],['BWR-PWR10','VANTA','POWER'],['BWR-F7X10','FLUX','FLIGHT']]){
  const record=await resolveBowracleSecretCode(code,{demo:true}),a=createSecretReading(record),b=createSecretReading({...record,firstName:'Sofia'});assert.deepEqual(a,b);assert.equal(a.house,house);assert.equal(a.secretHouse,secretHouse);assert.equal(a.bowCode,createBowCode(a.design));assert.ok(a.demo);assert.notEqual(a.code,a.bowCode);
 }
});
test('every public Secret Garden demo letter has complete English editorial copy',()=>{
 for(const id of ['POI-TRUST-01','VEL-MOMENTUM-06','PWR-DISCIPLINE-12','FLT-CONFIDENCE-16']){const letter=MASHUKI_LETTERS_EN_V1[id];assert.ok(letter?.title);assert.ok(letter.body.length>=8);assert.equal(letter.signoff,'With love,');}
});
test('future secret resolver returns safe metadata and handles inactive/network/malformed records',async()=>{
 const good={house:'AXIS',secretHouse:'POISE',messageFamily:'SELF_TRUST',messageId:'POI-TRUST-01',status:'ACTIVE',readingSeed:'test',customerEmail:'not-returned',orderId:'not-returned'};
 const resolve=record=>resolveBowracleSecretCode('BWR-ABCDE',{lookup:async()=>record});
 const result=await resolve(good);assert.ok(result.valid);assert.ok(!('customerEmail' in result));assert.ok(!('orderId' in result));assert.ok(!result.demo);
 for(const status of ['EXPIRED','DISABLED','BAD'])assert.ok(!(await resolve({...good,status})).valid);
 for(const status of ['ACTIVE','LIMITED','SPECIAL_EDITION'])assert.ok((await resolve({...good,status})).valid);
 assert.ok(!(await resolve({...good,house:'BAD'})).valid);assert.ok(!(await resolve({...good,secretHouse:'FLIGHT'})).valid);assert.ok(!(await resolve({...good,messageId:'UNKNOWN'})).valid);assert.ok(!(await resolve({...good,bowConfig:{topColor:'fake'}})).valid);
 assert.equal((await resolveBowracleSecretCode('BWR-ABCDE',{lookup:async()=>{throw Error();}})).reason,'network');
});
test('V3 persistence contains only cards, not names or secret codes; invalid storage handled',async()=>{
 let value=null;const storage={setItem:(_,v)=>value=v,getItem:()=>value};const result=createTarotReading(base);
 assert.ok(saveTarotReading(storage,{...result,firstName:'Sofia',code:'BWR-SECRET'}));assert.ok(!value.includes('Sofia'));assert.ok(!value.includes('BWR-'));assert.deepEqual(readTarotReading(storage),result);
 assert.equal(saveTarotReading(storage,createSecretReading(await resolveBowracleSecretCode('BWR-7K4N2',{demo:true}))),false);
 value='{';assert.equal(readTarotReading(storage),null);value='{"version":2}';assert.equal(readTarotReading(storage),null);
 const blocked={getItem:()=>{throw Error();},setItem:()=>{throw Error();}};assert.equal(readTarotReading(blocked),null);assert.equal(saveTarotReading(blocked,result),false);
});
test('all reading sections resolve through the existing EN/ES dictionaries',()=>{
 for(const dict of [bowracleEn,bowracleEs]){const t=key=>key.startsWith('bowracle.')?key.slice(9).split('.').reduce((o,k)=>o?.[k],dict):key;const copy=tarotCopy(createTarotReading(base),t);for(const key of ['title','message','powerColor'])assert.equal(typeof copy[key],'string');for(const key of ['prophecy','coach','quest','law'])assert.equal(typeof copy[key].prose,'string');assert.equal(typeof copy.house.statement,'string');assert.equal(typeof copy.window.label,'string');for(const card of MAJOR_ARCANA)assert.equal(typeof dict.tarot.majorCards[card.id].name,'string');for(const card of MINOR_ARCANA)assert.equal(typeof dict.tarot.minorCards[card.id].name,'string');}
});
