import { useMemo } from 'react';
import { useI18n } from '../../i18n/I18nProvider';
import { createBowracleSvg } from './bowracleCardSvg.js';

export default function BowracleCard({result,format='story'}) {
  const {t}=useI18n();
  const svg=useMemo(()=>createBowracleSvg(result,t,format,'br-preview'),[result,t,format]);
  return <div className="br-collectible" role="img" aria-label={`${t('bowracle.cardLabel')}: ${t(`bowracle.results.${result.archetypeId}.title`)}. ${result.bowCode}`} dangerouslySetInnerHTML={{__html:svg}}/>;
}
