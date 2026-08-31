import BowracleSymbol from './BowracleSymbol.jsx';
export default function BowracleSymbolPicker({items,namespace,value,onChange,t,label}){
 return <div className="br-symbol-options" role="group" aria-label={label}>{items.map(item=><button type="button" key={item.id} aria-pressed={value===item.id} onClick={()=>onChange(item.id)}><BowracleSymbol symbol={item.symbol}/><strong>{t(`bowracle.${namespace}.${item.id}.name`)}</strong><span>{t(`bowracle.${namespace}.${item.id}.meaning`)}</span><i aria-hidden="true">{value===item.id?'✓':'✧'}</i></button>)}</div>;
}
