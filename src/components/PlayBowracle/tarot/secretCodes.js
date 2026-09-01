import {DEMO_SECRET_BOW_CODES,BOWRACLE_HOUSES} from '../data/bowracleContent.js';
import {validateBowDesign} from '../../BowDesigner/validateBowDesign.js';
import {MASHUKI_LETTERS_BY_ID} from '../mashukiLettersV1.js';

// Demo metadata only. Replace this adapter with an authenticated/server-side lookup
// before issuing real inventory. No customer data, redemption or entitlement logic.
export const normalizeSecretCode=value=>typeof value==='string'?value.replace(/\s/g,'').toUpperCase():'';
export const demoCodeLookup=async code=>DEMO_SECRET_BOW_CODES.find(record=>record.code===code)||null;
const allowed=new Set(['ACTIVE','LIMITED','SPECIAL_EDITION']);
export async function resolveBowracleSecretCode(value,{demo=false,lookup}={}){
 const code=normalizeSecretCode(value);
 if(!/^BWR-[A-Z0-9]{5,16}$/.test(code))return {valid:false,reason:'invalid'};
 if(!lookup&&!demo)return {valid:false,reason:'unavailable'};
 try{
  const record=await (lookup||demoCodeLookup)(code);
  if(!record)return {valid:false,reason:'invalid'};
  if(!allowed.has(record.status))return {valid:false,reason:['EXPIRED','DISABLED'].includes(record.status)?record.status.toLowerCase():'invalid'};
  const letter=MASHUKI_LETTERS_BY_ID.get(record.messageId);
  if(!BOWRACLE_HOUSES.some(h=>h.id===record.house)||!['POISE','VELOCITY','POWER','FLIGHT'].includes(record.secretHouse)||typeof record.readingSeed!=='string'||!record.readingSeed||!letter||letter.house!==record.secretHouse||letter.family!==record.messageFamily)return {valid:false,reason:'invalid'};
  const bowConfig=record.bowConfig?validateBowDesign(record.bowConfig):null;
  if(record.bowConfig&&!bowConfig)return {valid:false,reason:'invalid'};
  // Allowlist prevents backend/customer fields from leaking into UI or exports.
  return {valid:true,code,house:record.house,secretHouse:record.secretHouse,messageFamily:record.messageFamily,messageId:record.messageId,bowCollection:typeof record.bowCollection==='string'?record.bowCollection.slice(0,80):null,bowName:typeof record.bowName==='string'?record.bowName.slice(0,80):null,readingSeed:record.readingSeed,edition:typeof record.edition==='string'?record.edition.slice(0,60):null,bowConfig,status:record.status,demo:!lookup};
 }catch{return {valid:false,reason:'network'};}
}
