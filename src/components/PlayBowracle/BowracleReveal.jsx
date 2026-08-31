import {useState} from 'react';
import {readingCopy,storeHandoff} from './bowracleEngine.js';
import BowracleCard from './BowracleCard.jsx';
import BowracleShare from './BowracleShare.jsx';
import {BowracleCardBack} from './BowracleDeck.jsx';

export default function BowracleReveal({result,t,onHandoff,onRefine,onAgain}) {
  const [format,setFormat]=useState('story');
  const copy=readingCopy(result,t);
  return <>
    <div className="br-result">
      <div className="br-reveal-stage"><div className="br-reveal-back"><BowracleCardBack symbol={result.archetypeId}/></div><div className="br-reveal-front"><BowracleCard result={result} format={format}/></div></div>
      <div className="br-result-copy">
        <p className="br-kicker">{t('bowracle.cardNumber')} {result.cardNumber}</p><h2>{copy.title}</h2>
        <p className="br-energy">{copy.energyWords.join(' · ')}</p>
        <h3>{t('bowracle.reading')}</h3><p>{copy.shortReading}</p>
        <h3>{t('bowracle.quest')}</h3><p>{copy.quest}</p>{copy.safetyNote&&<p className="br-safety">{copy.safetyNote}</p>}
        <h3>{t('bowracle.loreTitle')}</h3><blockquote>{copy.lore}</blockquote><p className="br-safety">{t('bowracle.loreNote')}</p><p className="br-note">{copy.tinyNote}</p>
        <details className="br-clues"><summary>{t('bowracle.inputs')}</summary><ul>{copy.inputSummary.map((clue,index)=><li key={index}>{clue}</li>)}</ul></details>
        <BowracleShare result={result} t={t} format={format} onFormat={setFormat}/>
      </div>
    </div>
    <section className="br-commerce"><p className="br-kicker">THE BOW-RACLE / BOW LAB</p><h2>{t('bowracle.assignedBow')}</h2><p>{copy.colorNames.join(' + ')} · {['finish','centerStyle','size'].map(key=>t(`bow.options.${result.design[key]}`)).join(' · ')}</p><p>{t('bowracle.realText')}</p><code>{result.bowCode}</code>
      <div className="br-actions"><button type="button" className="br-button" onClick={()=>onHandoff(storeHandoff(result))}>{t('bowracle.makeReal')}</button><button type="button" className="br-button br-button--light" onClick={onRefine}>{t('bowracle.tweak')}</button></div>
    </section>
    <button type="button" className="br-link br-again" onClick={onAgain}>{t('bowracle.again')}</button>
  </>;
}
