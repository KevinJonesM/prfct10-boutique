import source from './classicDeck78.json' with {type:'json'};

export const CLASSIC_MAJOR_ARCANA=Object.freeze(source.major);
export const CLASSIC_MINOR_ARCANA=Object.freeze(source.minor);
export const CLASSIC_DECK_78=Object.freeze([...source.major,...source.minor]);
export const CLASSIC_SUITS=Object.freeze(['VAULT','BARS','BEAM','FLOOR']);

export function classicCardById(id){return CLASSIC_DECK_78.find(card=>card.id===id)||null;}
