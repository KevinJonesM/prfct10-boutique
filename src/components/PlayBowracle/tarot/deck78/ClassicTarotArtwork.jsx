import {Bars,Beam,BowSigil,DoodleField,Eye,FourStar,Gymnast,Halo,Vault} from './tarotPrimitives.jsx';

const special={
 'the-stick':'landing','the-chalk':'chalk','the-rip':'hands','the-salute':'salute','the-block':'vault','the-flight':'flight','the-wobble':'wobble','the-grip':'grips','full-out':'spiral','the-reset':'orbit','the-spotlight':'spotlight','the-comeback':'comet','the-fall':'comet','the-spot':'hands','the-correction':'correction','the-fear':'eye','the-routine':'path','the-score':'score','the-rotation':'wheel','the-wait':'hourglass','the-podium':'podium','the-ten':'ten',
 'beam-9-four-inches':'measure','bars-9-one-more-turn':'orbit','floor-queen':'queen'
};
const minorTypes={
 VAULT:['flight','correction','vault','path','vault','flight','flight','path','landing','landing','salute','spotlight','correction','queen'],
 BARS:['orbit','path','correction','path','correction','orbit','flight','hands','orbit','flight','grips','chalk','correction','queen'],
 BEAM:['beam','measure','landing','orbit','flight','path','hourglass','wobble','measure','flight','beam','eye','correction','queen'],
 FLOOR:['path','eye','salute','flight','path','spiral','chalk','path','eye','spotlight','salute','path','correction','queen']
};
const typeFor=card=>special[card.id]||(card.suit?minorTypes[card.suit][Math.max(0,(card.number||1)-1)]:null)||'star';
function ArrowNotes({text='AGAIN'}){return <g className="c78-notes"><path d="M92 190q55 15 84 66l-18-7m18 7-5-19M404 410q-42-9-77-56l4 20m-4-20 21 4"/><text x="58" y="178" transform="rotate(-8 58 178)">{text}</text><text x="348" y="450" transform="rotate(6 348 450)">TOES!</text></g>;}
function ApparatusScene({card,type}){
 const n=card.number||1;
 if(type==='chalk')return <><Halo/><path className="c78-hands" d="M80 370Q145 285 230 310L258 355Q163 356 111 430M420 370Q355 285 270 310L242 355Q337 356 389 430"/><g className="c78-cloud"><circle cx="250" cy="260" r="76"/><circle cx="182" cy="275" r="44"/><circle cx="318" cy="275" r="46"/></g><BowSigil x={250} y={265} s={.45}/></>;
 if(type==='landing')return <><Halo/><path className="c78-object" d="M145 185q12 90 42 145l-22 112q38 22 85 0l-9-112 9-145M355 185q-12 90-42 145l22 112q-38 22-85 0l9-112-9-145"/><path className="c78-pulse" d="M145 460h210M205 445l45 15 45-15"/><FourStar x={250} y={460} s={20}/></>;
 if(type==='salute')return <><path className="c78-spot-cone" d="M155 105h190l90 410H65Z"/><Gymnast x={250} y={315} pose="salute" s={1.55}/><Halo cy={310} r={150}/></>;
 if(type==='flight'||type==='spiral'||type==='comet')return <><path className="c78-motion" d={type==='spiral'?'M75 430Q430 480 390 250T120 190Q45 330 250 410T425 170':'M55 430Q170 390 235 285T445 135'}/><Gymnast x={260} y={280} pose="flight" s={1.35}/><FourStar x={410} y={145} s={type==='comet'?48:26}/></>;
 if(type==='path')return <>{[0,1,2,3].map(i=><Gymnast key={i} x={85+i*110} y={245+(i%2)*105} pose={['salute','flight','handstand','balance'][i]} s={.48}/>) }<path className="c78-motion" d="M65 245Q140 160 195 350T305 245T440 350"/></>;
 if(type==='wobble'||type==='measure')return <><Beam y={375}/><Gymnast x={260} y={278} pose="balance" s={1.05}/><path className="c78-pulse" d={type==='measure'?'M75 208H425M75 195v26M425 195v26':'M30 380h55l24-42 22 91 28-130 30 112 25-65 28 18 35-7 27 22 35-8 30 11 81-2'}/>{type==='measure'&&<><text className="c78-giant-number" x="250" y="245">4″</text><text className="c78-sticker" x="74" y="470">APPARENTLY ENOUGH SPACE</text></>}</>;
 if(type==='score')return <><Halo r={155}/><g className="c78-score"><rect x="60" y="230" width="380" height="165" rx="18"/><text x="250" y="350">9.375</text></g><text className="c78-sticker" x="85" y="435">WE ALL SAW THE SAME ROUTINE, RIGHT?</text><Eye x={390} y={165} s={.35}/></>;
 if(type==='correction')return <><Gymnast x={250} y={300} pose="handstand" s={1.45}/><path className="c78-grid" d="M250 112V488M112 300H390M165 145 335 455M335 145 165 455"/><ArrowNotes text="RIBS"/></>;
 if(type==='ten')return <><Halo r={180}/><text className="c78-ten" x="250" y="365">10.000</text><BowSigil x={250} y={455} s={.7}/>{[0,1,2,3].map(i=><Gymnast key={i} x={95+i*105} y={185+(i%2)*25} pose={i%2?'flight':'salute'} s={.42}/>)}</>;
 if(type==='orbit')return <><Bars x={250} y={360} s={.75}/>{[0,1,2,3].map(i=><ellipse key={i} className="c78-orbit" cx="250" cy="290" rx={85+i*22} ry={65+i*17}/>) }<text className="c78-one-more" x="250" y="170">ONE MORE × {n+3}</text><Gymnast x={250} y={240} pose="flight" s={.7}/></>;
 if(type==='queen')return <><path className="c78-spot-cone" d="M155 105h190l90 390H65Z"/><Gymnast x={250} y={315} pose="salute" s={1.55}/><path className="c78-crown" d="M195 185l18-54 37 38 37-38 18 54Z"/><FourStar x={250} y={90} s={35}/></>;
 if(type==='spotlight')return <><path className="c78-spot-cone" d="M180 90h140l110 420H70Z"/><Gymnast x={250} y={320} pose="leap" s={1.4}/><FourStar x={250} y={120} s={28}/></>;
 if(type==='hourglass')return <><path className="c78-object" d="M145 145H355M145 455H355M165 160Q175 260 250 300Q325 260 335 160M165 440Q175 340 250 300Q325 340 335 440"/><text className="c78-sticker" x="110" y="495">BUFFERING SINCE FOREVER</text><BowSigil x={250} y={310} s={.55}/></>;
 if(type==='podium')return <><g className="c78-podium"><path d="M60 420h120V300h140v120h120v85H60Z"/><text x="250" y="390">1</text><text x="120" y="470">2</text><text x="380" y="470">3</text></g><FourStar x={250} y={210} s={54}/></>;
 if(type==='grips'||type==='hands')return <><Halo/><path className="c78-hands" d="M145 425V245q0-28 20-28t20 28v-80q0-25 20-25t20 25v70-100q0-25 20-25t20 25v100-75q0-25 20-25t20 25v130q0 98-80 140Z"/><path className="c78-grip" d="M142 330h170v72H142ZM185 190h40v125h-40M265 190h40v125h-40"/></>;
 if(type==='eye')return <><Eye x={250} y={285} s={1.7}/><path className="c78-velvet-rope" d="M80 410H420M100 370v80M400 370v80"/><path className="c78-blob" d="M105 180q65-92 123-5 81-62 122 34 78 63-12 117-83 62-147 2-103 5-86-83Z"/></>;
 if(type==='wheel')return <><Halo r={165}/><circle className="c78-wheel" cx="250" cy="300" r="135"/><path className="c78-wheel" d="M250 165v270M115 300h270"/><text className="c78-wheel-label" x="250" y="215">VAULT</text><text className="c78-wheel-label" x="320" y="305">BARS</text><text className="c78-wheel-label" x="250" y="390">BEAM</text><text className="c78-wheel-label" x="180" y="305">FLOOR</text></>;
 if(type==='vault'||card.suit==='VAULT')return <><Vault y={370} s={1.05}/><path className="c78-motion" d={`M45 ${410-n*5}Q160 ${390-n*8} 215 300T430 ${145+n*4}`}/><Gymnast x={290} y={245} pose="flight" s={.75}/><ArrowNotes text={card.rank==='COACH'?'RUN!':'GO!'}/></>;
 if(type==='bars'||card.suit==='BARS')return <><Bars y={350}/><ellipse className="c78-orbit" cx="220" cy="270" rx={130} ry={155}/><Gymnast x={220} y={205+(n%4)*18} pose={n%2?'handstand':'flight'} s={.75}/><text className="c78-sticker" x="300" y="490">TAP? AGAIN.</text></>;
 if(type==='beam'||card.suit==='BEAM')return <><Beam y={385}/><Gymnast x={215+(n%3)*25} y={290} pose={n%2?'leap':'balance'} s={.95}/><path className="c78-pulse" d="M40 390h80l17-28 19 48 20-62 22 38 50-4 35 12 50-8 45 7 82-3"/><Eye x={405} y={180} s={.3}/></>;
 if(type==='floor'||card.suit==='FLOOR')return <><path className="c78-floor" d="M65 430 250 520 435 430 250 340Z"/><path className="c78-wave" d={`M45 250q35-${20+n} 70 0t70 0t70 0t70 0t70 0`}/><Gymnast x={250} y={300} pose={n%3===0?'salute':'leap'} s={1.15}/><FourStar x={385} y={170} s={28}/></>;
 return <><Halo/><FourStar x={250} y={300} s={88}/></>;
}
export default function ClassicTarotArtwork({card}){const seed=[...card.id].reduce((a,c)=>a+c.charCodeAt(0),0);return <g className={'c78-scene c78-scene--'+typeFor(card)}><DoodleField seed={seed}/><ApparatusScene card={card} type={typeFor(card)}/></g>;}
