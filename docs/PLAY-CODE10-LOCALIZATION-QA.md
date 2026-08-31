# PLAY + CODE 10 · Implementación y verificación

Fecha: 30 de agosto de 2026.

## PLAY

- Hero conservado: se retiraron el distintivo circular «COLOR YOUR POWER» y los puntos amarillos de las órbitas. Se añadieron dos stickers tipográficos nítidos, sin ampliar PNG pequeños.
- CTA «EXPLORE ALL GAMES / EXPLORAR LOS JUEGOS»: desplaza a los juegos y coloca el foco en su encabezado.
- Introducción EN/ES orientada a jugar, aprender gimnasia y descubrir.
- Las cinco frecuencias revelan su significado editorial. Se puede cerrar el panel; Escape devuelve el foco a la tarjeta correspondiente.
- Títulos del detalle en blanco, borde/sombra de color coordinado con cada objeto.
- Entrada escalonada de tarjetas al entrar en pantalla, respetando movimiento reducido. Sin pulsos nuevos.
- Cuadrícula azul y tres estudios vectoriales: trayectoria/velocidad, giro/inercia y caída libre. Están identificados como esquemas idealizados, sin escala.
- Decoraciones detrás del texto y del CTA para evitar superposiciones en móvil.

## Selección CODE 10

| Grupo | Selección | Comprobación |
|---|---|---|
| Programa / Xcel | `#96DAFA` | Azul; Compulsory y Optional siguen deshabilitados |
| División / futuro nivel | `#D4F542` | Amarillo ácido |
| Tipo de reto | `#EE257E` | Rosa intenso |

ChoiceGroup recibe un tono semántico y admite colores por identidad de programa. Se conservan `aria-checked`, marca de selección, borde de 2 px, sombra de 3 px, navegación con flechas y foco visible. El hover de una selección conserva su color. El nombre de grupo cambia a NIVEL para el futuro programa Compulsory sin activarlo.

## Auditoría de localización

| Control | Resultado |
|---|---:|
| Preguntas de producción VERIFIED | 265 |
| Localización EN completa | 265 / 265 |
| Localización ES completa | 265 / 265 |
| `question_es` faltantes | 0 |
| `explanation_es` faltantes | 0 |
| `takeaway_es` faltantes | 0 |
| `option.text_es` faltantes | 0 |
| `correctOptionId` inválidos | 0 |
| Opciones idénticas en español dentro de una pregunta | 0 |
| Texto inglés no intencional en nodos literales de componentes CODE 10 | 0 |
| Claves CODE 10 faltantes en el control estático/dinámico | 0 |
| Claves EN / ES | 103 / 103, paridad completa |
| Resultado, revisión, Story, Feed, PNG y texto compartido | Localizados |

Los únicos textos literales detectados en JSX son marcas, nombres oficiales y numeración: PRFCT10, PLAY, CODE 10 y Xcel. Las abreviaturas de volumen y los números son compartidos. Los formatos de pregunta utilizan un mapper de presentación en español; no se reescriben los eyebrows originales.

La capa lingüística se une al registro de producción por ID. Cada registro resultante incluye los campos explícitos EN/ES; los archivos originales de los ocho batches quedan intactos. Las pruebas comparan **todos los campos originales**, valores de opciones, IDs, regla, aplicabilidad y verificación. También comparan los valores numéricos y el orden de todas las opciones. La traducción no constituye una nueva verificación de las reglas.

Se conserva el fallback a inglés para futuras preguntas incompletas, con aviso solo cuando corresponde. No se muestran avisos de inglés en las 265 preguntas actuales.

## Pruebas realizadas

- `npm test`: **46 aprobadas, 0 fallidas**. Incluye seis pruebas nuevas de cobertura, integridad del banco, números en opciones, fallback, formatos exportables y tonos semánticos.
- `node scripts/audit-code10-localization.mjs`: correcto; emite el inventario detallado reproducible.
- `npm run build`: **correcto**, Vite 8.0.14. Sin dependencias nuevas.
- `git diff --check`: sin errores de espacios.
- Navegador: cinco significados EN; cierre con Escape y retorno de foco ES; CTA mantiene `/play` y enfoca el catálogo; entradas de tarjetas; detalle blanco y Bow Lab original abierto y cerrado.
- CODE 10: colores calculados coinciden con los tres hex; hover seleccionado conserva rosa; flecha derecha, End y Space; foco visible; programas no disponibles deshabilitados.
- Dos partidas completas de diez preguntas en español, feedback, resultados y revisión. Cambio EN → ES durante una respuesta sin perder la selección ni el marcador.
- Layout real dentro de viewports de **390 y 1440 px**: desbordamiento horizontal de **0 px** en PLAY y CODE 10. En 390 px también se cambiaron división y categoría mediante interacción con los botones; azul/amarillo/rosa permanecieron correctos.
- Exportación real y apertura del archivo PNG: Story **1080 × 1920** y Feed **1080 × 1350**. Imagotipo, silueta y textos españoles visibles. Compartir sin soporte nativo terminó en descarga PNG.
- Pruebas automatizadas de los once marcadores posibles en ambos idiomas y ambos formatos de exportación.

Alcance de QA: los viewports móviles son simulados en navegador, no un teléfono físico. No se envió contenido a WhatsApp ni a destinatarios externos. El flujo nativo de Web Share en un dispositivo compatible no se ejercitó; sí su fallback de descarga. Movimiento reducido está protegido por media query y por la condición del observador; no se cambió la configuración del sistema operativo. No se realizó una impresión física. Node mantiene sus advertencias existentes de módulos sin `type` y `stripTypeScriptTypes` experimental.

## Archivos modificados

Dentro de `C:/Users/kevin/Desktop/prfct10-boutique/`:

**PLAY**

- `src/components/Play/PlayPage.jsx`
- `src/components/Play/PlayPortal.css` (nuevo)
- `src/components/Play/PlayPhysicsNotes.jsx` (nuevo)
- `src/components/Play/usePortalEntrance.js` (nuevo)
- `src/i18n/translations.js` (solo textos del portal)

**CODE 10**

- `src/components/Code10/Code10.css`
- `src/components/Code10/Code10Builder.jsx`
- `src/components/Code10/Code10Page.jsx`
- `src/components/Code10/Code10Question.jsx`
- `src/components/Code10/Code10Result.jsx`
- `src/components/Code10/Code10Share.jsx`
- `src/components/Code10/Code10VintageScoreboard.jsx`
- `src/components/Code10/presentation.js` (nuevo)
- `src/i18n/code10.js`

**Banco bilingüe**

- `src/data/code10/xcel/index.ts`
- `src/data/code10/localize.js` (nuevo)
- `src/data/code10/locales/es/index.js` (nuevo)
- `src/data/code10/locales/es/core.js` (nuevo)
- `src/data/code10/locales/es/vault.js` (nuevo)
- `src/data/code10/locales/es/bars.js` (nuevo)
- `src/data/code10/locales/es/beam.js` (nuevo)
- `src/data/code10/locales/es/floor.js` (nuevo)
- `src/data/code10/locales/es/artistry-general.js` (nuevo)
- `src/data/code10/locales/es/myth-or-rule.js` (nuevo)
- `src/data/code10/locales/es/whats-the-call.js` (nuevo)

**Auditoría y pruebas**

- `scripts/lib/code10-source-bank.mjs` (nuevo)
- `scripts/audit-code10-localization.mjs` (nuevo)
- `tests/code10-localization.test.mjs` (nuevo)
- `tests/code10-registry.test.mjs` (resolver de imports JS/TS)
- `tests/manual/play-preview.html` (nuevo, harness de QA del sitio real)
- `docs/PLAY-CODE10-LOCALIZATION-QA.md` (este informe)

## Alcance preservado

Sin rutas nuevas de aplicación. Se mantienen `/play`, `/play/power-check` y `/play/code-10`. No se modificaron el motor, la puntuación, los batches originales, Power Check, el modal de Bow Lab, productos, filtros, carrito o autenticación. Los estados de contenido insuficiente siguen activos: no se inventaron preguntas para habilitar configuraciones pendientes.
