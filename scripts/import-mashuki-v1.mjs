import fs from 'node:fs';

const source=process.argv[2];
const target=process.argv[3];
if(!source||!target)throw new Error('Usage: node scripts/import-mashuki-v1.mjs SOURCE TARGET');
const raw=fs.readFileSync(source,'utf8').replace(/\r\n/g,'\n');
const pattern=/-{20,}\n([A-Z]{3}-[A-Z]+-\d{2})\nFAMILY:\s*([A-Z_]+)\nTITLE:\s*([^\n]+)\n-{20,}\n([\s\S]*?)(?=\n\n-{20,}\n|\n={20,}\n)/g;
const houseFor=id=>id.startsWith('POI-')?'POISE':id.startsWith('VEL-')?'VELOCITY':id.startsWith('PWR-')?'POWER':'FLIGHT';
const letters=[];
for(const match of raw.matchAll(pattern)){
  const [,id,family,title,section]=match;
  const blocks=section.trim().split(/\n\s*\n/).map(value=>value.trim()).filter(Boolean);
  if(/^Querida \[FIRST_NAME\]:$/i.test(blocks[0]))blocks.shift();
  if(blocks.at(-1)==='Mashuki')blocks.pop();
  const signoff=blocks.pop()||'Con cariño,';
  letters.push({edition:'MASHUKI_LETTERS_V1',id,house:houseFor(id),family,title:{es:title},body:{es:blocks},signoff:{es:signoff}});
}
if(letters.length!==20)throw new Error(`Expected 20 letters, found ${letters.length}`);
const output=`/** Canonical owner-supplied content. Do not rewrite or randomize. */\nexport const MASHUKI_LETTERS_V1=${JSON.stringify(letters,null,2)};\n\nexport const MASHUKI_LETTERS_BY_ID=new Map(MASHUKI_LETTERS_V1.map(letter=>[letter.id,letter]));\n`;
fs.writeFileSync(target,output);
