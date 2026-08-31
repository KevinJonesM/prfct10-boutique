// Owner-defined symbolic choices. Spanish descriptions are faithful UI translations.
const rows = (items) => items.map(([id,name_en,name_es,tags,symbol,meaning_en,meaning_es])=>({id,name_en,name_es,energyTags:tags.split(' '),symbol,meaning_en,meaning_es,weight:1}));
export const bowracleCards=rows([
 ['THE_STICK','The Stick','El Stick','FOCUS PRECISION CONFIDENCE','spark','Finish what you started. Hold the moment. Don’t rush the ending.','Termina lo que empezaste. Sostén el momento. No apresures el final.'],
 ['THE_CHALK','The Chalk','La Tiza','CHAOS RESET TEAM','cloud','Ritual. Preparation. Messy hands, clear intention.','Ritual. Preparación. Manos llenas de tiza, intención clara.'],
 ['THE_RIP','The Rip','El Rip','COMEBACK COURAGE DRAMA','rip','Something annoying happened. You survived. Moving on.','Pasó algo molesto. Sobreviviste. A seguir.'],
 ['THE_SALUTE','The Salute','El Saludo','SPOTLIGHT CONFIDENCE GRACE','salute','Be seen. Take your moment. Start like you mean it.','Déjate ver. Toma tu momento. Empieza con intención.'],
 ['THE_BLOCK','The Block','El Block','FIRE MOMENTUM PRECISION','lightning','Commit. Push through. Energy has direction.','Comprométete. Impúlsate. La energía tiene dirección.'],
 ['THE_FLIGHT','The Flight','El Vuelo','FLOW COURAGE JOY','flight','Let go at the right moment. Trust what happens after the push.','Suéltate en el momento justo. Confía en lo que viene después del impulso.'],
 ['THE_WOBBLE','The Wobble','El Wobble','CHAOS COMEBACK MISCHIEF','wobble','Recovery counts. Not everything beautiful is perfectly straight.','Recuperarte cuenta. No todo lo bonito es perfectamente recto.'],
 ['THE_GRIP','The Grip','El Grip','FOCUS PRECISION TEAM','grip','Hold on. Know when to release. Use what helps.','Sujétate. Aprende cuándo soltar. Usa lo que te ayuda.'],
 ['THE_FULL_OUT','The Full Out','El Full Out','FIRE COURAGE SPOTLIGHT','wave','Stop negotiating with the thing you already decided to do.','Deja de negociar con eso que ya decidiste hacer.'],
 ['THE_RESET','The Reset','El Reset','RESET CALM FOCUS','reset','New turn. New routine. New attempt.','Nuevo turno. Nueva rutina. Nuevo intento.'],
 ['THE_SPOTLIGHT','The Spotlight','El Spotlight','SPOTLIGHT MAGNETIC CONFIDENCE','spotlight','Visibility is not arrogance. You are allowed to enjoy being good at something.','Ser visible no es arrogancia. Puedes disfrutar de ser buena en algo.'],
 ['THE_COMEBACK','The Comeback','El Comeback','COMEBACK SOFT_POWER COURAGE','star','Return without pretending nothing happened.','Vuelve sin fingir que no pasó nada.'],
]);
export const bowracleCharms=rows([
 ['STAR','Star','Estrella','SPOTLIGHT CONFIDENCE','star','Be noticeable on purpose.','Hazte notar a propósito.'],
 ['LIGHTNING','Lightning','Rayo','FIRE MOMENTUM','lightning','Less meeting. More doing.','Menos reuniones. Más acción.'],
 ['HEART','Heart','Corazón','SOFT_POWER TEAM','heart','Root for yourself too.','Anímate a ti también.'],
 ['EYE','Eye','Ojo','FOCUS CURIOSITY','eye','Notice more. Assume less.','Observa más. Supón menos.'],
 ['MOON','Moon','Luna','CALM GRACE','moon','Not everything needs an audience.','No todo necesita público.'],
 ['FLAME','Flame','Llama','FIRE COURAGE','flame','Use the nerves.','Aprovecha los nervios.'],
 ['PRISM','Prism','Prisma','MAGNETIC CURIOSITY','prism','One light. A lot of colors.','Una luz. Muchos colores.'],
 ['CHERRY','Cherry','Cerezas','JOY MISCHIEF','cherry','Take the sport seriously. Not every second of yourself.','Tómate el deporte en serio. No cada segundo de tu vida.'],
 ['CLOUD','Cloud','Nube','RESET CALM','cloud','Your brain can put that down now.','Tu cerebro ya puede soltar eso.'],
 ['BUTTERFLY','Butterfly','Mariposa','COMEBACK GRACE','butterfly','New does not mean fake.','Nuevo no significa falso.'],
 ['GEM','Gem','Gema','PRECISION SPOTLIGHT','gem','Details are allowed to matter.','Los detalles pueden importar.'],
 ['RIBBON','Ribbon','Cinta','FLOW JOY','ribbon','Leave room for a little drama.','Deja espacio para un poquito de drama.'],
]);
export const bowracleCreatures=rows([
 ['BLACK_CAT','Black cat','Gato negro','CALM MISCHIEF CONFIDENCE','cat','Knows something. Refuses to explain.','Sabe algo. Se niega a explicarlo.'],
 ['FLAMINGO','Flamingo','Flamenco','GRACE SPOTLIGHT JOY','flamingo','Standing on one leg for absolutely no reason.','De pie en una pata sin absolutamente ninguna razón.'],
 ['BEE','Bee','Abeja','TEAM MOMENTUM FOCUS','bee','Has a schedule. Lost the schedule.','Tiene un horario. Perdió el horario.'],
 ['BUNNY','Bunny','Conejito','JOY SOFT_POWER MOMENTUM','bunny','Cute is not the same as fragile.','Tierno no es lo mismo que frágil.'],
 ['FROG','Frog','Rana','CHAOS COURAGE JOY','frog','No explanation. Just frog.','Sin explicación. Solo rana.'],
 ['MOTH','Moth','Polilla','CURIOSITY MAGNETIC CALM','moth','Will absolutely investigate the glow.','Por supuesto que va a investigar ese brillo.'],
 ['AXOLOTL','Axolotl','Ajolote','COMEBACK RESET JOY','axolotl','Regrowing the vibe.','Regenerando la vibra.'],
 ['TIGER','Tiger','Tigre','FIRE CONFIDENCE COURAGE','tiger','Not asking twice.','No lo va a pedir dos veces.'],
 ['BUTTERFLY','Butterfly','Mariposa','GRACE COMEBACK FLOW','butterfly','Different is allowed.','Se vale ser diferente.'],
 ['RACCOON','Raccoon','Mapache','CHAOS MISCHIEF CURIOSITY','raccoon','Probably has your missing tape.','Probablemente tiene tu tape perdido.'],
 ['SWAN','Swan','Cisne','GRACE PRECISION CALM','swan','Elegant above water. Absolute business below.','Elegante sobre el agua. Trabajo serio por debajo.'],
 ['FOX','Fox','Zorro','FOCUS CURIOSITY CONFIDENCE','fox','Already noticed the shortcut.','Ya vio el atajo.'],
]);
export const bowracleMoods=rows([
 ['MEET_DAY','Meet day','Día de competencia','SPOTLIGHT CONFIDENCE','spotlight'],
 ['PRACTICE_GRIND','Practice grind','Día de entreno','FOCUS PRECISION','grip'],
 ['FRESH_START','Fresh start','Nuevo comienzo','RESET CURIOSITY','reset'],
 ['COMEBACK_DAY','Comeback day','Día de comeback','COMEBACK COURAGE','star'],
 ['BARS_BRAIN','Bars brain','Cerebro en barras','FOCUS TEAM','grip'],
 ['MAIN_CHARACTER','Main character','Protagonista','SPOTLIGHT MAGNETIC','crown'],
 ['SOFT_BUT_DANGEROUS','Soft but dangerous','Suave pero peligrosa','SOFT_POWER CONFIDENCE','heart'],
 ['JUST_SURVIVE_BEAM','Just survive beam','Solo sobrevivir a viga','CALM MISCHIEF','wobble'],
]);
// Editorial associations, not scientific color psychology.
export const colorTags={red:['FIRE','COURAGE'],burgundy:['DRAMA','CONFIDENCE'],fuchsia:['SPOTLIGHT','JOY'],neonPink:['MISCHIEF','FIRE'],pink:['JOY','TEAM'],lightPink:['SOFT_POWER','GRACE'],peach:['RESET','SOFT_POWER'],coral:['JOY','MOMENTUM'],energyOrange:['FIRE','MOMENTUM'],intenseYellow:['JOY','CONFIDENCE'],butterYellow:['CALM','JOY'],neonGreen:['CHAOS','FIRE'],lime:['MOMENTUM','CURIOSITY'],pistachio:['CALM','RESET'],mint:['RESET','FLOW'],slateGreen:['CALM','FOCUS'],emeraldGreen:['CONFIDENCE','GRACE'],navyBlue:['FOCUS','MAGNETIC'],royalBlue:['CONFIDENCE','PRECISION'],cobaltBlue:['COURAGE','FOCUS'],babyBlue:['CALM','FLOW'],turquoise:['FLOW','CURIOSITY'],lilac:['SOFT_POWER','COMEBACK'],purple:['MAGNETIC','CURIOSITY'],gold:['SPOTLIGHT','CONFIDENCE'],champagne:['GRACE','SOFT_POWER'],silver:['PRECISION','MAGNETIC'],black:['FOCUS','CONFIDENCE'],gray:['CALM','PRECISION'],white:['RESET','FOCUS'],cream:['CALM','SOFT_POWER']};
export const tagNames={FOCUS:['Focus','Enfoque'],CONFIDENCE:['Confidence','Confianza'],CHAOS:['Chaos','Caos'],CALM:['Calm','Calma'],COMEBACK:['Comeback','Comeback'],DRAMA:['Drama','Drama'],SOFT_POWER:['Soft power','Poder suave'],MAGNETIC:['Magnetic','Magnética'],FIRE:['Fire','Fuego'],RESET:['Reset','Reset'],FLOW:['Flow','Fluidez'],SPOTLIGHT:['Spotlight','Protagonismo'],PRECISION:['Precision','Precisión'],JOY:['Joy','Alegría'],TEAM:['Team','Equipo'],COURAGE:['Courage','Valentía'],MISCHIEF:['Mischief','Travesura'],GRACE:['Grace','Gracia'],MOMENTUM:['Momentum','Impulso'],CURIOSITY:['Curiosity','Curiosidad']};
