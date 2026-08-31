// Original editorial deck. Affinities point only to canonical BowDesigner IDs.
const entries = [
  ['star','I','THE STAR','LA ESTRELLA',['visibility','self-belief','possibility'],['fuchsia','babyBlue'],'glitter','silver',
    'You don’t need to dim yourself to belong.','No tienes que apagar tu brillo para encajar.',
    'Being seen is not the same as showing off.','Que te vean no significa que estés presumiendo.',
    'I can take up my moment.','Puedo ocupar mi momento.'],
  ['spark','II','THE SPARK','LA CHISPA',['motivation','beginnings','curiosity'],['energyOrange','butterYellow'],'shimmer','neon',
    'Small energy can start something big.','Una chispa pequeña puede empezar algo grande.',
    'One little beginning counts. Yes, that one.','Un comienzo pequeño también cuenta. Sí, ese.',
    'I can begin with what I have today.','Puedo empezar con lo que tengo hoy.'],
  ['crown','III','THE CROWN','LA CORONA',['confidence','ownership','presence'],['gold','black'],'glitter','goldStones',
    'Walk in like your place was already waiting for you.','Entra como si tu lugar ya te estuviera esperando.',
    'You don’t need to earn permission to be yourself.','No necesitas ganarte el permiso de ser tú.',
    'I belong in the moment I worked for.','Pertenezco al momento por el que trabajé.'],
  ['bloom','IV','THE BLOOM','LA FLOR',['growth','softness','becoming'],['lightPink','mint'],'classicTulle','silver',
    'You are allowed to grow at your own pace.','Puedes crecer a tu propio ritmo.',
    'Practice still counts on the days it felt messy.','La práctica también cuenta cuando no sale tan bonita.',
    'My pace is still progress.','A mi ritmo también avanzo.'],
  ['prism','V','THE PRISM','EL PRISMA',['individuality','complexity','creativity'],['purple','lime'],'shimmer','neon',
    'You were never supposed to be one color.','Nunca tuviste que ser de un solo color.',
    'Also: you are allowed to change your mind.','Y otra cosa: puedes cambiar de opinión.',
    'My style does not need permission.','Mi estilo no necesita permiso.'],
  ['moon','VI','THE MOON','LA LUNA',['intuition','calm','inner trust'],['lilac','white'],'shimmer','silver',
    'You don’t need every answer before you move.','No necesitas todas las respuestas para dar un paso.',
    'Soft does not mean unsure.','Suave no significa insegura.',
    'I don’t have to rush to be ready.','No tengo que correr para estar lista.'],
  ['flame','VII','THE FLAME','LA LLAMA',['courage','commitment','determination'],['red','energyOrange'],'glitter','blackStones',
    'You don’t have to feel fearless to be brave.','No tienes que sentirte sin miedo para ser valiente.',
    'Nerves don’t get the final decision.','Los nervios no tienen la última palabra.',
    'I trust what I practiced.','Confío en lo que practiqué.'],
  ['shield','VIII','THE SHIELD','EL ESCUDO',['boundaries','resilience','steadiness'],['navyBlue','silver'],'classicTulle','blackBand',
    'Protect your focus. Not everything deserves your attention.','Cuida tu enfoque. No todo merece tu atención.',
    'Focus first. Noise later.','Primero tu enfoque. El ruido puede esperar.',
    'I choose where my attention goes.','Yo elijo dónde pongo mi atención.'],
  ['wave','IX','THE WAVE','LA OLA',['flow','adaptability','freedom'],['turquoise','babyBlue'],'shimmer','silver',
    'You don’t have to force what you can flow through.','No hace falta forzar lo que puede fluir.',
    'A different rhythm can still be yours.','Un ritmo distinto también puede ser tuyo.',
    'I can adjust and keep going.','Puedo adaptarme y seguir.'],
  ['lightning','X','THE LIGHTNING','EL RAYO',['boldness','action','electricity'],['lime','neonPink'],'glitter','neon',
    'That little idea deserves a first step.','Esa pequeña idea merece un primer paso.',
    'Curiosity looks good on you.','La curiosidad te queda bien.',
    'I can try before I have it all figured out.','Puedo intentarlo sin tenerlo todo resuelto.'],
  ['heart','XI','THE HEART','EL CORAZÓN',['self-kindness','connection','warmth'],['peach','pink'],'classicTulle','goldStones',
    'Talk to yourself like someone you’re rooting for.','Háblate como a alguien a quien quieres ver triunfar.',
    'Being on your own side is a good start.','Estar de tu lado ya es un buen comienzo.',
    'I can be kind to myself and still aim high.','Puedo tratarme bien y seguir apuntando alto.'],
  ['spotlight','XII','THE SPOTLIGHT','EL REFLECTOR',['performance','charisma','visibility'],['black','gold'],'glitter','goldStones',
    'You don’t have to apologize for taking up your moment.','No tienes que disculparte por ocupar tu momento.',
    'Confidence can be quiet. Or not. Your call.','La confianza puede ser silenciosa. O no. Tú decides.',
    'I am allowed to enjoy being here.','Puedo disfrutar de estar aquí.']
];
export const BOWRACLE_ARCHETYPES = entries.map(([id,cardNumber,name_en,name_es,energyTags,colorAffinities,finish,center,meaningEn,meaningEs,noteEn,noteEs,affirmEn,affirmEs]) => ({
  id, cardNumber, name_en, name_es, symbol:id, energyTags, colorAffinities,
  finishAffinities:[finish], centerAffinities:[center], shortMeaning_en:meaningEn, shortMeaning_es:meaningEs,
  readingFragments_en:[meaningEn,noteEn], readingFragments_es:[meaningEs,noteEs],
  affirmations_en:[affirmEn], affirmations_es:[affirmEs], tinyNotes_en:[noteEn], tinyNotes_es:[noteEs]
}));

export function archetypeCopy(locale) {
  return Object.fromEntries(BOWRACLE_ARCHETYPES.map(card => [card.id, {
    name:card[`name_${locale}`], meaning:card[`shortMeaning_${locale}`],
    fragments:card[`readingFragments_${locale}`], affirmation:card[`affirmations_${locale}`][0], note:card[`tinyNotes_${locale}`][0]
  }]));
}
