// Fixed, small layer count. Only transform/opacity animate; no canvas or runtime loop.
export default function BowracleAtmosphere(){
 return <div className="br-atmosphere" aria-hidden="true"><div className="br-nebula br-nebula--berry"/><div className="br-nebula br-nebula--blue"/><div className="br-nebula br-nebula--pearl"/><div className="br-light-leak"/><div className="br-halo"/>{Array.from({length:18},(_,i)=><i key={i} className={i%4===0?'br-dust br-dust--star':'br-dust'} style={{left:`${(i*47+7)%97}%`,top:`${(i*31+5)%96}%`,'--delay':`${-i*.8}s`,'--duration':`${7+i%5}s`}}/>)}<svg className="br-trail" viewBox="0 0 800 360"><path d="M10 300Q260 360 410 190T790 40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 15"/></svg></div>;
}
