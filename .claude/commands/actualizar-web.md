---
description: Revisa toda la web de BrújulaCripto y actualiza cualquier dato, fecha, cifra o afirmación que se haya quedado desactualizada.
---

Eres BrújulaCripto en modo de mantenimiento periódico. Antes de nada, lee `ESTADO-PROYECTO.md` completo para tener el contexto del proyecto (convenciones, decisiones ya tomadas, normas de edición).

Tu tarea: revisar el contenido de **toda la web** (los 38+ artículos de `articulos/`, las 11 páginas de `categorias/`, `index.html`) y corregir cualquier información que se haya quedado obsoleta desde la última revisión — sin añadir relleno, sin reescribir lo que ya es correcto, sin cambiar tono ni estructura.

## Qué buscar en cada página

1. **Fechas y plazos concretos**: estimaciones de eventos futuros (ej. "próximo halving ~2028"), plazos legales o fechas límite de normativas, cualquier "actualmente" o "a día de hoy" que dependa del calendario.
2. **Estado regulatorio**: leyes o procesos legales mencionados como "en trámite", "pendiente de aprobación", "propuesta" o similar (MiCA, GENIUS Act, CLARITY Act, caso SEC vs Ripple, normativas fiscales de cada país: España, EE. UU., Alemania, Francia, Reino Unido, Suiza, México) — comprobar si han avanzado, se han aprobado, modificado, resuelto o revertido.
3. **Cifras y datos verificables**: número de exchanges/wallets comparados, comisiones citadas, límites de servicios externos (ej. envíos gratis/mes de Web3Forms), cualquier estadística con fuente.
4. **Productos y servicios mencionados**: ¿sigue existiendo el exchange/wallet/servicio citado tal cual se describe? ¿ha cambiado de nombre, comisiones, disponibilidad en España, o características relevantes para la comparativa?
5. **Precios o rangos de precio de Bitcoin/XRP** citados como referencia — no hace falta el precio exacto del día, pero si hay una cifra o rango claramente desfasado, hay que actualizarlo o generalizarlo.
6. La fecha visible de "Actualizado: [fecha]" de cada artículo — úsala como pista de qué páginas llevan más tiempo sin revisión y priorízalas.

## Cómo hacerlo

- Verifica las afirmaciones dudosas con búsqueda web contra fuentes oficiales (páginas oficiales de los proyectos, boletines oficiales de cada país, sec.gov, xrpl.org, bitcoin.org, agencias tributarias, etc.) — la sección "Cómo verificamos esta información" de cada artículo ya tiene fuentes citadas, parte de ahí.
- Solo edites lo que de verdad esté desactualizado o sea incorrecto. Tres frases retocadas está bien si es lo que hace falta; no conviertas esto en una reescritura general.
- Si cambias contenido sustantivo de una página, actualiza su fecha visible de "Actualizado" y el campo `dateModified`/`datePublished` de su JSON-LD si aplica.
- Actualiza el `<lastmod>` de esa URL en `sitemap.xml` solo si el contenido cambió de verdad (no por cambios triviales de redacción).
- Respeta las normas ya fijadas en `ESTADO-PROYECTO.md`: sin enfoque a Latinoamérica salvo México, nunca uses un `.ps1` guardado a disco para ediciones masivas en Windows (usa Perl o Bash/sed), no toques la carga síncrona de Google Fonts, no toques la decisión del glosario sin foto, la autoría se mantiene como "Equipo Editorial de BrújulaCripto", las URLs canónicas/og:url/sitemap/breadcrumb van sin `.html` (ver sección del bug de indexación).
- Al terminar, verifica: los bloques JSON-LD siguen siendo JSON válido, no hay mojibake, no se han roto enlaces internos ni externos citados como fuente.

## Al terminar

Da un resumen claro: qué páginas se tocaron y por qué (qué dato estaba desactualizado y cuál es el dato nuevo, con la fuente), y qué páginas se revisaron pero no necesitaron cambios. Pregunta si quiere que hagas commit (y push) de los cambios antes de hacerlo — no lo hagas por tu cuenta.
