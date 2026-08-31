import owner from '../components/PlayBowracle/data/ownerContent.json' with {type:'json'};
import {bowracleCards,bowracleCharms,bowracleCreatures,bowracleMoods,tagNames} from '../components/PlayBowracle/data/bowracleSymbols.js';
export function bowracleContent(locale){
 const choices=list=>Object.fromEntries(list.map(item=>[item.id,{name:item['name_'+locale],meaning:item['meaning_'+locale]||''}]));
 return {cards:choices(bowracleCards),charms:choices(bowracleCharms),creatures:choices(bowracleCreatures),moods:choices(bowracleMoods),tags:Object.fromEntries(Object.entries(tagNames).map(([id,names])=>[id,names[locale==='es'?1:0]])),results:Object.fromEntries(owner.results.map(r=>[r.id,{title:r['title_'+locale],reading:r['reading_'+locale],note:r['note_'+locale]}])),quests:Object.fromEntries(owner.quests.map(q=>[q.id,q['text_'+locale]])),lore:Object.fromEntries(owner.lore.map(q=>[q.id,q['text_'+locale]]))};
}
export const bowracleV2En={
 tagline:'Pick a card. Follow the magic. Reveal your bow.',supporting:'The Bow-racle chooses back.',
 intro:'Don’t overthink it. Choose what pulls you in. The Bow-racle will do the rest.',
 edition:'THE SECRET DECK / VOL. 02',diary:'three cards. a little chaos. something very you.',
 description:'Three cards, a color, a charm and a creature. A secret reading, a tiny quest and a real bow chosen for you.',
 cardTitle:'Three cards. One little plot twist.',cardHint:'Pick exactly three. They don’t have to make sense together. Yet.',
 cardCount:'{count} / 3 cards chosen',cardLimit:'Your three are chosen. Deselect one to change the story.',
 colorHint:'Just one color. The Bow-racle chooses its other half.',
 charmTitle:'A tiny symbol. A big feeling.',charmHint:'Choose one charm. A symbol for the reading — not a physical product.',
 creatureTitle:'Who’s coming with you?',creatureHint:'Pick your unlikely little accomplice.',
 moodTitle:'And today feels like…',moodHint:'Optional. One more clue, or leave a little mystery.',
 revealAction:'Reveal my reading',processingTitle:'The deck is connecting the dots.',processingHint:'Your cards. Your color. A little unexpected chemistry.',
 step:'Chapter {step} / 5',pauseMotion:'Pause atmosphere',resumeMotion:'Animate atmosphere',
 quest:'Today’s quest',loreTitle:'Secret gym law',loreNote:'Inside jokes, not official rules.',
 optionalTraining:'Optional, never a punishment. Only do trained movements in your normal, safe training setting. Follow your coach and skip anything uncomfortable.',
 inputs:'Your chosen clues',assignedBow:'The bow that chose you',revealHint:'A reading. A quest. Some gym lore. And your very own bow.',
 realText:'The Bow-racle assigned your second color, finish, center and size. Keep its choice or refine it in the existing Bow Lab.',
 makeReal:'Make it real',tweak:'Make it more me',skip:'Keep a little mystery',
 revealTitle:'The Bow-racle has a theory.',
};
export const bowracleV2Es={
 tagline:'Elige una carta. Sigue la magia. Revela tu lazo.',supporting:'El Bow-racle también te elige.',
 intro:'No lo pienses demasiado. Elige lo que te llame. El Bow-racle se encarga del resto.',
 edition:'EL MAZO SECRETO / VOL. 02',diary:'tres cartas. un poquito de caos. algo muy tú.',
 description:'Tres cartas, un color, un símbolo y una criatura. Una lectura secreta, un pequeño reto y un lazo real elegido para ti.',
 cardTitle:'Tres cartas. Un pequeño giro de trama.',cardHint:'Elige exactamente tres. No tienen que tener sentido juntas. Todavía.',
 cardCount:'{count} / 3 cartas elegidas',cardLimit:'Ya tienes tus tres. Deselecciona una para cambiar la historia.',
 colorHint:'Solo un color. El Bow-racle elige su otra mitad.',
 charmTitle:'Un pequeño símbolo. Una gran sensación.',charmHint:'Elige un símbolo para tu lectura; no es un accesorio físico.',
 creatureTitle:'¿Quién viene contigo?',creatureHint:'Elige a tu pequeña e inesperada cómplice.',
 moodTitle:'Y hoy se siente como…',moodHint:'Opcional. Una pista más, o deja un poquito de misterio.',
 revealAction:'Revelar mi lectura',processingTitle:'El mazo está conectando las pistas.',processingHint:'Tus cartas. Tu color. Una química inesperada.',
 step:'Capítulo {step} / 5',pauseMotion:'Pausar ambiente',resumeMotion:'Animar ambiente',
 quest:'Tu reto de hoy',loreTitle:'Ley secreta del gym',loreNote:'Chistes internos, no reglas oficiales.',
 optionalTraining:'Opcional, nunca un castigo. Haz solo movimientos entrenados en tu entorno habitual y seguro. Sigue a tu entrenador y omite lo que te incomode.',
 inputs:'Las pistas que elegiste',assignedBow:'El lazo que te eligió',revealHint:'Una lectura. Un reto. Historias del gym. Y tu propio lazo.',
 realText:'El Bow-racle eligió tu segundo color, acabado, centro y tamaño. Consérvalos o ajústalos en el Bow Lab existente.',
 makeReal:'Hacerlo real',tweak:'Hacerlo más mío',skip:'Dejar un poco de misterio',
 revealTitle:'El Bow-racle tiene una teoría.',
};
