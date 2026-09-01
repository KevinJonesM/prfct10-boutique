import {useEffect,useMemo,useState} from 'react';
import {svgToPng} from '../Play/svgExport.js';
import {createBowracleSvg,CARD_FORMATS} from './bowracleCardSvg.js';
import {shareBowracleFile} from './bowracleShareFile.js';

function download(blob,name) {
  const url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=name;document.body.append(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
export default function BowracleShare({result,t,format,onFormat,renderSvg=createBowracleSvg,cardKind='reading',labels}) {
  const [prepared,setPrepared]=useState(null),[status,setStatus]=useState(''),[busy,setBusy]=useState(false),[attempt,setAttempt]=useState(0);
  const svg=useMemo(()=>renderSvg(result,t,format),[result,t,format,renderSvg]);
  useEffect(()=>{
    let active=true;setPrepared(null);setStatus('');
    svgToPng(svg,CARD_FORMATS[format]).then(blob=>{if(active)setPrepared({svg,blob});}).catch(()=>{if(active)setStatus('exportError');});
    return()=>{active=false;};
  },[svg,format,attempt]);
  const blob=prepared?.svg===svg?prepared.blob:null;
  const filename=`${labels?.filename||'PRFCT10-THE-BOW-RACLE'}-${cardKind}-${result.bowCode}-${format}.png`;
  async function share() {
    if(!blob||busy)return;setBusy(true);
    try {
      const file=new File([blob],filename,{type:'image/png'});
      setStatus(await shareBowracleFile(file,navigator,()=>download(blob,filename)));
    }catch{setStatus('exportError');}
    finally{setBusy(false);}
  }
  return <section className="br-share" aria-label={labels?.aria||t('bowracle.cardLabel')}>
    <div className="br-format">{Object.keys(CARD_FORMATS).map(id=><button type="button" key={id} aria-pressed={format===id} onClick={()=>onFormat(id)}>{t(`bowracle.${id}`)}</button>)}</div>
    <div className="br-actions"><button type="button" className="br-button" disabled={!blob||busy} onClick={()=>{download(blob,filename);setStatus('downloaded');}}>{labels?.download||t('bowracle.download')}</button><button type="button" className="br-button br-button--light" disabled={!blob||busy} onClick={share}>{labels?.share||t('bowracle.share')}</button></div>
    <p role="status">{status?t(`bowracle.${status}`):!blob?t('bowracle.preparing'):''}</p>
    {status==='exportError'&&<button className="br-link" type="button" onClick={()=>setAttempt(n=>n+1)}>{t('bowracle.retry')}</button>}
  </section>;
}
