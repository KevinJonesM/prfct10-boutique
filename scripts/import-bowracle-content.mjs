// Read the owner's content pack without rewriting or generating its creative copy.
// Prints JSON for review; it never writes to the repository.
import fs from 'node:fs';
const source = fs.readFileSync(process.argv[2], 'utf8').replaceAll('\r', '');
const section = (a,b) => source.slice(source.indexOf(a),source.indexOf(b));
const resultSection = section('01. THE ELECTRIC COMEBACK','F. 50');
const results = [...resultSection.matchAll(/^(\d{2})\. (THE .+?)\n([\s\S]*?)(?=^\d{2}\. THE |^={10}|$(?![\s\S]))/gm)].map(([,number,title,body])=>{
  const field = (label,next) => body.match(new RegExp('(?:^|\\n)'+label+':\\n([\\s\\S]*?)(?=\\n'+next+':)'))?.[1].trim();
  const notes=field('Note','Bow')?.split('\n').filter(Boolean);
  return {id:title.replace(/^THE /,'').replaceAll(/[^A-Z0-9]+/g,'_'),number,title_en:title,title_es:body.match(/^ES: (.+)/m)[1],energyTags:field('Tags','(?:Reading )?EN').split(/,\s*/),reading_en:field('(?:Reading )?EN','(?:Reading )?ES'),reading_es:field('(?:Reading )?ES','(?:Tiny note EN|Note)'),note_en:notes?.[0]||field('Tiny note EN','Tiny note ES'),note_es:notes?.[1]||field('Tiny note ES','Bow tendency'),bow:body.match(/\nBow(?: tendency)?:\n([^\n]+)/)[1]};
});
function bank(a,b,prefix){return [...section(a,b).matchAll(/^(\d+)\.\nEN: (.+)\nES: (.+)/gm)].map(([,n,en,es])=>({id:`${prefix}_${n.padStart(2,'0')}`,text_en:en,text_es:es}));}
const quests=bank('F. 50','G. 50','QUEST'), lore=bank('G. 50','H. HOW','LORE');
if(results.length!==30||quests.length!==50||lore.length!==50||results.some(r=>!r.reading_en||!r.reading_es||!r.note_en||!r.note_es)) throw Error(`Invalid owner pack: ${results.length}/${quests.length}/${lore.length}`);
process.stdout.write(JSON.stringify({provenance:'Owner-defined creative content pack V1. Gym lore is humor, not technical rules.',results,quests,lore},null,2));
