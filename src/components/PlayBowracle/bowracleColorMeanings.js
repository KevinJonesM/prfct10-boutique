import { BOW_COLORS } from '../BowDesigner/bowOptions.js';

// An editorial interpretation layer, never a second product catalogue.
const groups = [
  [['fuchsia','neonPink'], 'Expression','Expresión', 'You can be seen without explaining yourself.','Puedes dejarte ver sin tener que explicarte.'],
  [['royalBlue','cobaltBlue','navyBlue'], 'Focus','Enfoque', 'Give your next moment your full attention.','Dale toda tu atención a tu próximo momento.'],
  [['babyBlue','mint','slateGreen'], 'Ease','Calma', 'Calm can be a kind of power, too.','La calma también puede ser una forma de poder.'],
  [['lilac'], 'Grace','Gracia', 'Soft can still be strong.','Lo suave también puede ser fuerte.'],
  [['purple'], 'Imagination','Imaginación', 'There is room for your own way of doing things.','Hay espacio para tu propia manera de hacer las cosas.'],
  [['neonGreen','lime'], 'Boldness','Audacia', 'Let curiosity get the first word.','Deja que la curiosidad hable primero.'],
  [['turquoise'], 'Flow','Fluidez', 'Find a rhythm that leaves room to breathe.','Encuentra un ritmo que te deje respirar.'],
  [['energyOrange','coral'], 'Momentum','Impulso', 'One small move can get you going again.','Un pequeño paso puede ayudarte a arrancar otra vez.'],
  [['red','burgundy'], 'Determination','Determinación', 'Bring your attention back to what matters to you.','Vuelve a poner tu atención en lo que te importa.'],
  [['white','cream','gray'], 'Clarity','Claridad', 'You are allowed a fresh beginning.','Puedes darte un nuevo comienzo.'],
  [['black'], 'Quiet power','Fuerza serena', 'You don’t need to be loud to be strong.','No tienes que hacer ruido para ser fuerte.'],
  [['gold','champagne'], 'Presence','Presencia', 'You are allowed to want the big moment.','Puedes querer ese gran momento.'],
  [['silver'], 'Precision','Precisión', 'Notice the little things you already do well.','Reconoce esas pequeñas cosas que ya haces bien.'],
  [['peach','lightPink','pink'], 'Kindness','Amabilidad', 'Be on your own side while you keep growing.','Ponte de tu lado mientras sigues creciendo.'],
  [['intenseYellow','butterYellow'], 'Joy','Alegría', 'Leave a little room for the fun part.','Deja un poquito de espacio para disfrutar.'],
  [['pistachio','emeraldGreen'], 'Growth','Crecimiento', 'Slow progress is still yours to keep.','El progreso lento también es tuyo.']
];
export const BOWRACLE_COLOR_MEANINGS = Object.fromEntries(groups.flatMap(([ids,energy_en,energy_es,message_en,message_es]) => ids.map(id => [id,{energy_en,energy_es,message_en,message_es}])));
export function colorMeaningCopy(locale) {
  return Object.fromEntries(BOW_COLORS.map(({id})=>[id,{energy:BOWRACLE_COLOR_MEANINGS[id][`energy_${locale}`],message:BOWRACLE_COLOR_MEANINGS[id][`message_${locale}`]}]));
}
