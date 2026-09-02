export const GYM_FAMILIARS=Object.freeze({
 AXIS:{id:'chalk-moth',en:'The Chalk Moth',es:'La Polilla de Magnesio',mark:'MOTH · FOCUS',symbol:'✦'},
 NOVA:{id:'runway-comet',en:'The Runway Comet',es:'El Cometa de la Pista',mark:'COMET · FIRE',symbol:'↗'},
 LUMA:{id:'moon-hare',en:'The Moon Hare',es:'La Liebre Lunar',mark:'HARE · TRUST',symbol:'☾'},
 PRISM:{id:'spotlight-magpie',en:'The Spotlight Magpie',es:'La Urraca del Spotlight',mark:'MAGPIE · SHINE',symbol:'◇'},
 VANTA:{id:'velvet-cat',en:'The Velvet Cat',es:'La Gata de Terciopelo',mark:'CAT · RETURN',symbol:'◉'},
 FLUX:{id:'wobble-gecko',en:'The Wobble Gecko',es:'El Gecko del Wobble',mark:'GECKO · CHAOS',symbol:'〰'},
 HALO:{id:'hype-firefly',en:'The Hype Firefly',es:'La Luciérnaga Hype',mark:'FIREFLY · JOY',symbol:'✺'}
});
export function gymFamiliarFor(house){return GYM_FAMILIARS[house]||GYM_FAMILIARS.AXIS;}

