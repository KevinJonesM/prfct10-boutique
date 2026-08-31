export type BowracleEnergyTag = 'FOCUS'|'CONFIDENCE'|'CHAOS'|'CALM'|'COMEBACK'|'DRAMA'|'SOFT_POWER'|'MAGNETIC'|'FIRE'|'RESET'|'FLOW'|'SPOTLIGHT'|'PRECISION'|'JOY'|'TEAM'|'COURAGE'|'MISCHIEF'|'GRACE'|'MOMENTUM'|'CURIOSITY';
export type BowracleCardId = 'THE_STICK'|'THE_CHALK'|'THE_RIP'|'THE_SALUTE'|'THE_BLOCK'|'THE_FLIGHT'|'THE_WOBBLE'|'THE_GRIP'|'THE_FULL_OUT'|'THE_RESET'|'THE_SPOTLIGHT'|'THE_COMEBACK';
export type BowracleCharmId = 'STAR'|'LIGHTNING'|'HEART'|'EYE'|'MOON'|'FLAME'|'PRISM'|'CHERRY'|'CLOUD'|'BUTTERFLY'|'GEM'|'RIBBON';
export type BowracleCreatureId = 'BLACK_CAT'|'FLAMINGO'|'BEE'|'BUNNY'|'FROG'|'MOTH'|'AXOLOTL'|'TIGER'|'BUTTERFLY'|'RACCOON'|'SWAN'|'FOX';
export type BowracleMoodId = 'MEET_DAY'|'PRACTICE_GRIND'|'FRESH_START'|'COMEBACK_DAY'|'BARS_BRAIN'|'MAIN_CHARACTER'|'SOFT_BUT_DANGEROUS'|'JUST_SURVIVE_BEAM';
export interface BowracleInput {selectedCards:BowracleCardId[];colorId:string;charmId:BowracleCharmId;creatureId:BowracleCreatureId;moodId?:BowracleMoodId|null}
export interface BowracleSymbol {id:string;name_en:string;name_es:string;energyTags:BowracleEnergyTag[];symbol:string;weight:number}
export interface BowracleResultTemplate {id:string;number:string;title_en:string;title_es:string;energyTags:BowracleEnergyTag[];reading_en:string;reading_es:string;note_en:string;note_es:string;bow:string}
export interface BowracleAssignedBow {colorMode:'horizontalOmbre';topColor:string;bottomColor:string;finish:'classicTulle'|'shimmer'|'glitter';centerStyle:'blackBand'|'silver'|'goldStones'|'blackStones'|'neon';size:'small'|'medium'|'large'}
export interface BowracleReadingResult {version:2;archetypeId:string;cardNumber:string;choices:BowracleInput;energyWords:BowracleEnergyTag[];questId:string;loreId:string;design:BowracleAssignedBow;bowCode:string;signature:string}
