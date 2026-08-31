import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {I18nProvider,useI18n} from '/src/i18n/I18nProvider.jsx';
import TarotSpread from '/src/components/PlayBowracle/tarot/TarotSpread.jsx';
import TarotResult from '/src/components/PlayBowracle/tarot/TarotResult.jsx';
import {MAJOR_ARCANA} from '/src/components/PlayBowracle/tarot/content.js';
import {createTarotReading} from '/src/components/PlayBowracle/tarot/readingEngine.js';
import '/src/App.css';
import '/src/components/PlayBowracle/PlayBowracle.css';
import '/src/components/PlayBowracle/BowracleMystical.css';
import '/src/components/PlayBowracle/tarot/TarotTable.css';
function Fixture(){const {t}=useI18n(),[value,setValue]=useState(['the-stick']);const result=createTarotReading({majorArcanaIds:['the-stick','the-flight'],minorArcanaIds:['vault-ace-the-run','bars-ace-the-swing','floor-ace-music']});return <main className="br-shell bt-shell br-motion-paused"><p>ISOLATED QA FIXTURE</p>{new URLSearchParams(location.search).get('state')==='table'?<TarotSpread deck={MAJOR_ARCANA} kind="major" value={value} onChange={setValue} t={t}/>:<TarotResult result={result} firstName="Alexandra" t={t} onHandoff={()=>{}} onAgain={()=>{}} onSecret={()=>{}}/>}</main>;}
createRoot(document.querySelector('#root')).render(<I18nProvider><Fixture/></I18nProvider>);
