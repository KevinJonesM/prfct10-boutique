# THE BOW-RACLE V2 — entrega y verificación

Fecha: 2026-08-31. Este informe sustituye la descripción del flujo V1 en BOWRACLE-QA.md.

## Experiencia

Ruta existente: `/play/the-bow-racle`. Bienvenida → exactamente tres cartas → un color real → charm → criatura → estado opcional → revelación → lectura y lazo asignado. No se pide elegir segundo color, acabado, centro ni tamaño antes de la revelación.

Atmósfera con degradados plum/violet, nubes suaves, niebla, motas, halos, destellos y bordes de carta luminosos. SVG/CSS locales; sin nuevas dependencias ni renderizado pesado. Animación mediante transform/opacity, menos capas en móvil, control para pausar y reglas prefers-reduced-motion. El resto de PLAY y los juegos existentes no se rediseñaron en esta revisión.

## Contenido y motor

- Pack creativo de la propietaria: 30 lecturas, 50 quests y 50 textos de lore EN/ES. Se conservan los textos proporcionados; no se presentan como reglas deportivas verificadas.
- 12 cartas, 12 charms, 12 criaturas y 8 estados opcionales.
- Metadatos editoriales conectan las elecciones con los resultados. El color también contribuye al cálculo.
- Mismas elecciones y mismo contexto previo generan el mismo resultado. Entre empates se evita repetir inmediatamente el resultado anterior cuando hay alternativas.
- El guardado V2 se valida y recalcula al recuperar; no requiere cuentas ni datos personales.
- El motor usa los 31 colores, acabados, centros, tamaños y códigos reales de Bow Lab. No duplica el diseñador.
- Los retos físicos llevan aclaración de opcionalidad, seguridad y supervisión; el lore está identificado como humor del gimnasio.

## Archivos de esta revisión

Nuevos:

- `scripts/import-bowracle-content.mjs`
- `src/components/PlayBowracle/data/ownerContent.json`
- `src/components/PlayBowracle/data/bowracleSymbols.js`
- `src/components/PlayBowracle/data/bowracleTypes.ts`
- `src/components/PlayBowracle/BowracleAtmosphere.jsx`
- `src/components/PlayBowracle/BowracleMystical.css`
- `src/components/PlayBowracle/BowracleSymbolPicker.jsx`
- `src/components/PlayBowracle/bowracleShareFile.js`
- `src/i18n/bowracleV2.js`
- Este informe.

Actualizados:

- `src/components/PlayBowracle/PlayBowracle.jsx`
- `src/components/PlayBowracle/BowracleDeck.jsx`
- `src/components/PlayBowracle/BowracleSymbol.jsx`
- `src/components/PlayBowracle/BowracleReveal.jsx`
- `src/components/PlayBowracle/BowracleCard.jsx`
- `src/components/PlayBowracle/BowracleShare.jsx`
- `src/components/PlayBowracle/bowracleEngine.js`
- `src/components/PlayBowracle/bowracleCardSvg.js`
- `src/i18n/bowracle.js`
- `tests/bowracle.test.mjs`
- `tests/manual/bowracle-export.html`

Otros cambios presentes en el worktree pertenecen a trabajo anterior y se conservaron.

## Pruebas

- `npm run build`: correcto, 175 módulos. Permanece aviso de tamaño de chunk mayor de 500 kB; no es error de compilación.
- `npm test`: 54/54 pruebas correctas, incluidas ocho pruebas de Bow-racle.
- Validación de tres cartas únicas, opciones inválidas, determinismo, contexto previo, persistencia, handoff, paridad EN/ES y contenido exacto de la propietaria.
- Asignación válida para 30 arquetipos × 31 colores; muestreo de 30.000 entradas alcanzó los 30 arquetipos.
- Navegador: flujo manual completo en inglés, límite de tres cartas, un color, charm, criatura, estado omitido, revelación, pausa, recuperación y cambio EN/ES.
- Caso completo: The Controlled Chaos, código `P10-OM-CB-NP-SH-NE-M`.
- Modal comercial existente abierto con configuración y código coincidentes; cierre con Escape. No se envió ningún pedido ni mensaje de WhatsApp.
- Vista real en iframe de 390 y 1440 px: sin desbordamiento horizontal. Inspección visual móvil de bienvenida y selección de cartas; no se afirma haber recorrido todas las combinaciones en móvil.
- Matriz real de exportación: 120 PNG (30 lecturas × EN/ES × Story/Feed), sin errores XML, dimensiones incorrectas ni texto fuera de los márgenes comprobados. Incluye color negro y textos largos de quest/lore.
- Story 1080 × 1920; Feed 1080 × 1350. Inspección visual de ambos PNG con imagotipo y gimnasta presentes. Recursos embebidos antes de rasterizar.
- Descarga probada en navegador. Web Share: pruebas unitarias de éxito, falta de soporte, rechazo y cancelación; fallback de descarga, excepto cancelación voluntaria.

## Límites de la verificación

No se enviaron archivos a contactos, ni se verificó un dispositivo físico de impresión o la aplicación WhatsApp. El PNG generado ya contiene el imagotipo y la gimnasta rasterizados. Reduced motion está implementado en CSS y en el tiempo de revelación; se verificó la pausa manual, no un cambio de preferencia a nivel del sistema operativo. La matriz de exportación comprueba límites de texto, no constituye una auditoría exhaustiva de todas las posibles superposiciones.
