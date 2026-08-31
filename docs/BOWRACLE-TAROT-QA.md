# THE BOW-RACLE · Tarot Table V3

Entrega: 2026-08-31. Ruta existente: `/play/the-bow-racle`.

## 1. Archivos creados

- `src/components/PlayBowracle/data/bowracleContent.js`: contenido del archivo del propietario, convertido de TypeScript a JavaScript sin dependencias nuevas.
- `src/components/PlayBowracle/tarot/content.js`: registro y deduplicación del contenido nuevo y V2.
- `src/components/PlayBowracle/tarot/readingEngine.js`: selección, cálculo, persistencia y handoff.
- `src/components/PlayBowracle/tarot/secretCodes.js`: adaptador de códigos y validación de metadata.
- `src/components/PlayBowracle/tarot/readingCopy.js`: resolución del contenido bilingüe.
- `src/components/PlayBowracle/tarot/artwork.js`: sigilo original y siete emblemas SVG.
- `src/components/PlayBowracle/tarot/TarotArtwork.jsx`: reversos y caras.
- `src/components/PlayBowracle/tarot/TarotSpread.jsx`: baraja, límites y selección.
- `src/components/PlayBowracle/tarot/SecretCodeForm.jsx`: nombre opcional y entrada secreta.
- `src/components/PlayBowracle/tarot/TarotResult.jsx`: lectura, House, coleccionables y lazo.
- `src/components/PlayBowracle/tarot/TarotTable.css`: estilo de mesa y responsive.
- `src/components/PlayBowracle/tarot/cardSvg.js`: Reading Card y House Card.
- `src/i18n/bowracleTarot.js`: incorporación al sistema EN/ES existente.
- `tests/bowracle-tarot.test.mjs`: ocho pruebas nuevas del motor.
- `tests/manual/bowracle-tarot-export.html`: matriz de 240 PNG.
- `tests/manual/bowracle-tarot-responsive.html`, `bowracle-tarot-state.html`, `bowracle-tarot-state.jsx`: fixtures aislados para tamaños de pantalla.
- Este informe.

## 2. Archivos existentes modificados en esta entrega

- `src/components/PlayBowracle/PlayBowracle.jsx`: reemplaza el recorrido de elecciones de producto por la mesa.
- `src/components/PlayBowracle/BowracleShare.jsx`: acepta un renderizador y tipo de coleccionable; conserva la exportación y Web Share existentes.
- `src/i18n/bowracle.js`: añade el diccionario Tarot al proveedor existente.

El repositorio ya contenía cambios anteriores en App, Play, Code 10 y BowDesigner. Esta entrega no los revierte ni cambia el funcionamiento del catálogo, carrito, autenticación, Power Check o CODE 10. No se instala React Router ni dependencias.

## 3. Arquitectura y recorrido

Intro → 2 Major → 3 Minor → formación de cinco → revelación → resultado.

La alternativa de código secreto es independiente: intro → formulario → resolver → House Reveal. Datos, motor, traducciones, arte, UI y exportación están separados. El ambiente CSS/SVG existente se conserva; los nuevos reversos usan un sigilo original, no arte de un mazo comercial.

## 4–5. Estructura de las cartas

22 Major Arcana y 56 Minor Arcana: 14 por Vault, Bars, Beam y Floor. IDs estables, nombres, tags y significados del contenido suministrado. Traducción de los nombres visibles al español. Las cartas se barajan boca abajo y se voltean al seleccionarlas; se pueden retirar antes de continuar.

No se puede cerrar una tirada incompleta ni añadir cartas por encima del límite. El motor también rechaza IDs inexistentes, duplicados o de la baraja incorrecta.

## 6. Houses

AXIS, NOVA, LUMA, PRISM, VANTA, FLUX y HALO. Emblema, acento, palabras de energía y declaración propios. Sin niveles ni rankings. Las siete son alcanzables en la prueba de combinaciones.

## 7. Motor

Los Major aportan peso 2 y los Minor peso 1 a sus tags. Se aplica `HOUSE_TAG_WEIGHTS` del pack. Los empates y las variaciones se resuelven mediante hash de los cinco IDs ordenados: el orden de selección no cambia el resultado.

Se seleccionan arquetipo, mensaje, profecía, forecast, quest, ley, ventana y color desde los registros disponibles. Lucky Number usa los pesos suministrados para 1–10. El lazo se asigna con el motor de diseños reales ya existente y se valida antes de exportarlo o transferirlo.

Inventario efectivo: 30 arquetipos, 5 profecías, 6 forecasts, 55 quests deduplicadas, 59 leyes deduplicadas y 8 ventanas. Se reutilizó contenido del propietario V2. Los objetivos de expansión editorial no se presentan como contenido ya creado.

El nombre es opcional y solo de presentación. Nunca interviene en el cálculo. La persistencia V3 guarda únicamente los cinco IDs; no guarda nombre ni código secreto.

## 8. Códigos secretos

`resolveBowracleSecretCode(value, {demo, lookup})` normaliza espacios/mayúsculas, valida formato, estado, House, seed y diseño. Devuelve solo campos permitidos; no propaga datos de cliente u orden.

Sin adaptador real y sin marcar demo, devuelve un estado controlado de servicio no conectado. El demo requiere selección explícita. No hay canjes, validación de propiedad ni seguridad fingida en el cliente. Un futuro adaptador de servidor puede sustituir el lookup sin rediseñar la UI.

## 9–10. Ejemplos de códigos

- Demo válido: `BWR-7K4N2` → NOVA.
- Otros demos: `BWR-P3M82` → PRISM; `BWR-F7X10` → FLUX.
- No reconocido por el registro demo: `BWR-XXXXX`.
- Formato inválido: `NOT-A-CODE`.

## 11. Ejemplo estándar reproducible

Major: `the-stick`, `the-flight`.
Minor: `vault-ace-the-run`, `bars-ace-the-swing`, `floor-ace-music`.

Resultado: THE NO-DRAMA FLIGHT / HOUSE NOVA, lucky number 09, Turquoise. Mensaje: “Do the setup. Trust the timing. Please cancel the unnecessary internal meeting.” Ventana 7 SEASONS, descrita explícitamente como juego y no plazo garantizado.

## 12. Ejemplo House Reveal

Con demo activado, `BWR-7K4N2` reconoce HOUSE NOVA y conserva su seed y diseño predeterminados. Muestra DEMO HOUSE REVEAL / REVELACIÓN DE CASA · DEMO. Cambiar el nombre no cambia House ni lectura. Si un futuro registro carece de diseño físico se señala que el lazo es sugerido, no una identificación del producto.

## 13–14. Lazo y código de producto

- Ejemplo estándar: Turquoise + White, horizontal ombré, shimmer, cristales plateados, mediano.
- Código real: `P10-OM-TU-WH-SH-SI-M`.
- Ejemplo demo NOVA: Cobalt Blue + Lime, shimmer, cristales plateados, mediano; `P10-OM-CB-LM-SH-SI-M`.

Los códigos `P10-…` describen configuración; los códigos `BWR-…` identifican una entrada del resolver. Son campos distintos. MAKE IT REAL / MAKE IT MORE ME abre el mismo BowDesigner existente, con los valores asignados. Se comprobó el modal y sus selecciones; no se envió ningún pedido por WhatsApp.

## 15. Exportación y compartir

Reading Card y House Card en Story 1080×1920 y Feed 1080×1350, PNG. Usan el imagotipo vectorial exacto, silueta de gimnasta y lazo real; los recursos se incluyen en el PNG, sin depender de imágenes externas al compartirlo.

Matriz ejecutada en navegador: 30 arquetipos × 2 idiomas × 2 formatos × 2 tipos = 240 PNG. XML válido, dimensiones correctas y textos dentro de los márgenes en todos. Se inspeccionaron visualmente PNG reales. Descarga disparada desde el resultado, con confirmación de la UI.

Web Share conserva el helper existente: éxito, ausencia de API, incompatibilidad, rechazo y cancelación probados automáticamente. La llamada nativa se inició en el navegador; no se completó un envío a una app externa ni se verificó WhatsApp en un teléfono físico.

## 16. Idiomas

Proveedor y persistencia EN/ES existentes, sin segundo sistema. Flujo estándar probado en ES y House Reveal cambiado a EN en vivo, sin recalcular el resultado. Se verifican claves y contenido bilingüe mediante pruebas.

## 17. Móvil y accesibilidad

Intro real revisada a 375, 390 y 430 px. Mesa y resultado renderizados en fixtures aislados de sus componentes reales a 375, 390, 430 y 1440 px: cero desbordamiento horizontal del documento; las barajas tienen scroll horizontal interno intencional.

Botones nativos, estado `aria-pressed`, límites comunicados, estados de error y progreso, nombre con etiqueta y explicación, cartas decorativas ocultas a tecnologías de asistencia, foco de encabezado al cambiar etapa y margen bajo el header fijo. Movimiento reducido con media query; control manual de pausa probado con barajado y cartas todavía visibles. No se realizó una auditoría con lector de pantalla ni pruebas en dispositivo móvil físico.

## 18. Pruebas

`npm test`: **62/62 correctas**, cero fallos. Incluye las ocho nuevas pruebas de Tarot y suites anteriores: selección estricta, determinismo, nombres opcionales, 4.000 combinaciones, siete Houses, lucky 1–10, diseños válidos, resolver y sus errores, persistencia, EN/ES, share y regresiones de motores existentes.

Recorrido de navegador: 2 Major → 3 Minor → formación → nombre opcional → reveal → resultado; recuperación tras recarga sin nombre; demo desactivado devuelve aviso; demo activado resuelve NOVA; cambio EN/ES; Bow Lab abre la configuración correcta; shuffle con ambiente pausado.

## 19. Build

`npm run build`: **correcto**, exit 0, 184 módulos, 693 ms en la ejecución final. Advertencia de chunk principal >500 kB (594,52 kB; gzip 190,95 kB). No se ocultó ni se cambió el umbral. Node muestra además el aviso existente de módulos ESM en un package sin `type`; no impide las pruebas.

## 20. Deliberadamente demo / pendientes externos

- Registro de códigos públicos demo. Falta servicio de servidor para inventario real, emisión segura, autorización y cualquier canje.
- Sin backend de clientes, sin pedidos automáticos y sin analytics nuevos.
- Targets de expansión de profecías/forecasts/etc. preparados en registros, pero no rellenados inventando inventario.
- Compartir a destinatarios externos y prueba física de impresión quedan fuera de esta verificación; la imagen exportada sí contiene el logo y la gimnasta.

La lectura se presenta como ficción editorial lúdica, no predicción cierta ni instrucciones que sustituyan entrenamiento supervisado.
