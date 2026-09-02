// Curated owner content. Expansion targets are not fabricated production inventory.
export {BOWRACLE_HOUSES,HOUSE_TAG_WEIGHTS,PROPHECIES,COACH_FORECASTS,MANIFESTATION_WINDOWS,POWER_COLORS,LUCKY_NUMBERS} from '../data/bowracleContent.js';
export {CLASSIC_MAJOR_ARCANA as MAJOR_ARCANA,CLASSIC_MINOR_ARCANA as MINOR_ARCANA,CLASSIC_DECK_78} from './deck78/classicDeck78.js';
export {DAILY_CHAOS_CARDS} from '../data/bowracleDailyChaosDeck.js';
import {TODAY_QUESTS,SECRET_GYM_LAWS} from '../data/bowracleContent.js';
import {bowracleQuests,bowracleLore,bowracleResults} from '../bowracleEngine.js';
const legacyLine=item=>({id:'owner-v2-'+item.id,tags:item.energyTags,prose:{en:item.text_en,es:item.text_es},training:item.type==='training'});
const unique=list=>list.filter((item,index)=>list.findIndex(other=>other.prose.en===item.prose.en)===index);
export const quests=unique([...TODAY_QUESTS.map(q=>({...q,training:['quest-pushups','quest-calf-raises','quest-hollow-rocks'].includes(q.id)})),...bowracleQuests.map(legacyLine)]);
export const gymLaws=unique([...SECRET_GYM_LAWS,...bowracleLore.map(legacyLine)]);
export const archetypes=bowracleResults.map(r=>({...r,tags:r.energyTags.map(tag=>({MAGNETIC:'CHARISMA',DRAMA:'SPOTLIGHT'}[tag]||tag))}));
