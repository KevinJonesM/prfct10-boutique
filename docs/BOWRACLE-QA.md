# THE BOW-RACLE — implementación y verificación

Fecha: 2026-08-30.

## Resultado

Nueva ruta manual `/play/the-bow-racle`, integrada en PLAY mediante la tarjeta 03 THE BOW-RACLE. Sustituye únicamente la entrada de Bow Lab dentro de PLAY. El Bow Lab comercial sigue disponible en sus entradas originales. No se añadieron dependencias, React Router, servicios de IA ni otro sistema de idioma.

Experiencia: bienvenida → estado emocional → mazo de doce arquetipos, con barajado → primer color → segundo color distinto → acabado, centro y tamaño reales → intención opcional → confirmar/refinar → revelación → carta descargable → diseñador comercial. Se puede volver, refinar, cancelar cambios, empezar de nuevo y recuperar la última lectura completada.

## Archivos creados

- `src/components/PlayBowracle/PlayBowracle.jsx`: recorrido y persistencia.
- `src/components/PlayBowracle/PlayBowracle.css`: estilo diario pastel, mazo, estados, responsive, revelación, impresión y reduced motion.
- `src/components/PlayBowracle/BowracleDeck.jsx`: reversos, abanico y selección/barajado.
- `src/components/PlayBowracle/BowracleSymbol.jsx`: doce símbolos SVG originales.
- `src/components/PlayBowracle/BowracleChoices.jsx`: elecciones emocionales y opciones físicas.
- `src/components/PlayBowracle/BowracleReveal.jsx`: lectura y CTA comercial posterior.
- `src/components/PlayBowracle/BowracleCard.jsx`: vista previa coleccionable.
- `src/components/PlayBowracle/BowracleShare.jsx`: PNG, preparación, error, reintento y Web Share.
- `src/components/PlayBowracle/bowracleArchetypes.js`: doce arquetipos editoriales bilingües.
- `src/components/PlayBowracle/bowracleColorMeanings.js`: significados para los 31 colores canónicos.
- `src/components/PlayBowracle/bowracleEngine.js`: validación, lectura determinística, código y handoff.
- `src/components/PlayBowracle/bowracleCardSvg.js`: composición única para preview y exportación.
- `src/components/BowDesigner/validateBowDesign.js`: validación de la configuración física.
- `src/i18n/bowracle.js`: contenido registrado en el proveedor EN/ES existente.
- `tests/bowracle.test.mjs`: diez pruebas nuevas del motor y sus contratos.
- `tests/manual/bowracle-export.html`: matriz reproducible de exportación real.
- Este informe.

## Archivos existentes modificados para esta entrega

- `src/App.jsx`: ruta, carga diferida y apertura del modal con configuración validada.
- `src/components/Header/Header.jsx`: estado activo de PLAY en Bow-racle.
- `src/components/Play/PlayPage.jsx`: tarjeta 03 y CTA de Bow-racle.
- `src/components/Play/PlayCards.css`: pequeño mazo decorativo de esa tarjeta; conserva las tipografías, pins y composición asimétrica existentes.
- `src/i18n/translations.js`: nuevo namespace y SEO EN/ES.
- `src/components/BowDesigner/BowDesignerModal.jsx`: props opcionales de precarga y contexto de origen. Sin cambios visuales ni nuevas opciones.
- `src/components/BowDesigner/BowPreview.jsx`: exporta la función existente `prepareSvg`; no se creó otro renderer del producto.
- `tests/manual/play-preview.html`: admite la nueva ruta y los seis anchos solicitados.

Otros cambios que ya existían en el worktree de PLAY/CODE 10 se conservaron; no forman parte de esta entrega.

## Producto y contenido

Se reutilizan `BOW_COLORS`, `FINISHES`, `CENTER_STYLES`, `BOW_SIZES`, `createBowCode`, el SVG real y el procesamiento de `BowPreview`, además de las utilidades existentes `svgToPng`, `imagotypeMarkup` y `gymnastMarkup`.

Arquetipos: Star, Spark, Crown, Bloom, Prism, Moon, Flame, Shield, Wave, Lightning, Heart y Spotlight. Cada uno tiene símbolo, afinidades reales, significado, fragmentos, afirmación y nota. Los significados de color son editoriales, no diagnósticos. No se copió el arte de las referencias; se tomó su dirección de diario pastel y cartas coleccionables.

El motor valida las elecciones y calcula una variante mediante un hash de ellas. La misma configuración emocional/física siempre produce la misma lectura base; no depende del día, de una API ni del azar. El barajado y «Sorpréndeme» afectan las elecciones, no la determinación posterior. El guardado solo contiene elecciones, sin nombres, fotografías, correos ni cuentas.

Ejemplo verificado en navegador:

```js
{
  colorMode: 'horizontalOmbre',
  topColor: '#FF2DAA', // neonPink
  bottomColor: '#174ED1', // cobaltBlue
  finish: 'glitter',
  centerStyle: 'silver',
  size: 'medium'
}
// P10-OM-NP-CB-GL-SI-M
// source: THE_BOW_RACLE; oracleCard: star
```

Al cambiar el tamaño a Large el código comprobado pasa a `P10-OM-NP-CB-GL-SI-L`. Antes de continuar, el modal comercial permite revisar y modificar el diseño. El enlace de WhatsApp contiene la configuración actual, código, carta, origen y URL; no se envió ningún pedido de prueba.

## Exportación

- Story: PNG 1080 × 1920.
- Feed: PNG 1080 × 1350.
- Preview y PNG parten de la misma composición.
- Imagotipo real inline; silueta y demás imágenes embebidas antes de rasterizar. No dependen de referencias externas al abrir el PNG.
- El archivo no contiene botones comerciales.
- Descarga y Web Share implementados. Si no hay soporte para compartir archivos o falla, se descarga; cancelar el diálogo no fuerza una descarga.
- Preparación, botones deshabilitados, errores y reintentos localizados.

## Pruebas ejecutadas

- `npm test`: **56/56 correctas**, incluidas diez nuevas de Bow-racle.
- Todas las parejas distintas entre 31 colores producen configuraciones válidas; colores iguales/opciones inválidas se rechazan.
- Doce arquetipos, seis estados emocionales, ocho intenciones, determinismo, códigos reales, almacenamiento dañado/bloqueado y paridad de claves EN/ES.
- Matriz en navegador: **48/48 PNG reales** (12 arquetipos × EN/ES × Story/Feed), sin errores XML, dimensiones incorrectas ni texto fuera de márgenes. Inspección visual de PNG Story y Feed: imagotipo, lazo y gimnasta presentes.
- Recorrido completo ES: estado → Star → rosa neón/azul cobalto → glitter/cristales plateados/mediano → confianza → confirmar → revelar.
- Segundo color: el primer color aparece deshabilitado.
- Barajado y selección de arquetipo funcionales.
- Descarga Story, descarga Feed y llamada Web Share realizadas; la interfaz devolvió confirmación de compartir. No se verificó recepción en un dispositivo o contacto externo de WhatsApp.
- Lectura EN actualizada al cambiar el idioma, sin cambiar el código físico.
- Refinamiento de tamaño y actualización del código; replay y recuperación tras recarga.
- Modal comercial precargado con los cinco atributos correctos. Escape lo cierra.
- Apertura normal desde Accessories conserva Lilac/Lime, Glitter, Silver Rhinestones, Medium: no hereda la lectura anterior.
- Intro en 375, 390, 430, 768, 1024 y 1440 px: **0 px de desbordamiento horizontal** en los seis anchos. Resultado inspeccionado también en 375 px y escritorio.
- Ruta directa, regreso a PLAY y entrada mediante tarjeta 03 comprobados.
- `npm run build`: **correcto**, Vite 8.0.14, aproximadamente 712 ms en esta ejecución. Chunk Bow-racle 18.45 kB / 6.02 kB gzip. El script de build elimina fallbacks sobredimensionados solo de `dist`; originales conservados.

## Alcance y límites de QA manual

Botones nativos, fieldsets, etiquetas, estados `aria-pressed`, foco visible, mensajes de validación y foco de encabezado al cambiar de página están implementados. Escape del modal se probó. Las reglas `prefers-reduced-motion` desactivan movimientos y muestran directamente la carta, pero no se cambió la preferencia del sistema operativo para una prueba física. La auditoría completa con lector de pantalla/teclado y cada pantalla en cada ancho sigue siendo una revisión manual adicional; no se presenta como realizada.

No se probaron impresoras físicas ni recepción en WhatsApp externo. Sí se rasterizó y examinó el contenido final que se descarga/comparte. El fallback de compartir está implementado y revisado en código; la sesión de navegador utilizada sí ofreció Web Share. No se realizó un envío comercial ni se alteraron carrito, autenticación, producto, precios, Power Check o preguntas de CODE 10.
