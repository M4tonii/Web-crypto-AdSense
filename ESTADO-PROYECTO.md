# Estado del proyecto BrújulaCripto

> Fichero de contexto para retomar el trabajo en una sesión nueva de Claude Code, en cualquier ordenador. No es una página de la web (no está enlazado desde ningún sitio ni aparece en el sitemap), es solo para uso interno del proyecto. Última actualización: 29 sep 2026.

## Qué es esto

Web de noticias, guías y análisis sobre Bitcoin, Ethereum y XRP en español, dirigida a España y Latinoamérica. Sitio estático (HTML/CSS/JS puro, sin backend, sin build). Titular real: Toni Caimari.

- **Dominio**: `labrujulacripto.com` (comprado en Namecheap, `brujulacripto.com` estaba cogido).
- **Repositorio**: `github.com/M4tonii/Web-crypto-AdSense`, rama `main`.
- **Hosting**: Cloudflare Workers (proyecto `web-crypto-adsense`, cuenta `tonicaimaricrespi@gmail.com`), migrado desde Netlify el 16 sep 2026. Conectado directamente al repositorio de GitHub (rama `main`) — cada `git push` publica solo, sin pasos manuales. Se despliega vía `npx wrangler deploy` (gestionado automáticamente por Cloudflare, no hay que tocarlo). Configuración en `wrangler.jsonc` (raíz del repo): `assets.directory: "."`, `html_handling: "auto-trailing-slash"` (las URLs `.html` redirigen 307 a la versión sin extensión — pequeño salto extra aceptado a propósito, ver nota abajo), `not_found_handling: "404-page"` (sirve el `404.html` propio). Fichero `.assetsignore` en la raíz excluye `.git/`, `.wrangler/`, `wrangler.jsonc` y `README.md` de lo que se publica como estático — **importante no borrarlo**, sin él Cloudflare sube la carpeta `.git` entera como archivos públicos (fuga de seguridad real, pasó una vez el 16 sep y se corrigió).
- **Por qué se migró de Netlify**: el 15 sep 2026 la cuenta de Netlify agotó su cuota de créditos gratuitos del mes (probablemente por los ~20 despliegues seguidos de esa sesión) y bloqueó nuevos despliegues hasta el 13 de octubre salvo pago. Se decidió migrar a Cloudflare en vez de esperar o pagar, ya que el plan gratis de Cloudflare es mucho más generoso para una web estática (3.000 min de compilación/mes, sin sistema de "créditos compartidos"). El proyecto en Netlify se **eliminó del todo el 16 sep 2026** (Danger zone → Delete project), una vez confirmado que Cloudflare funcionaba bien.
- **Formulario de contacto**: ya no usa Netlify Forms (no existe en Cloudflare). Ahora usa **Web3Forms** (servicio externo gratuito, `access_key` en el HTML de `contacto.html`, hasta 250 envíos/mes gratis). Notifica a `contacto.labrujulacripto@gmail.com`. **Importante**: el primer correo de Web3Forms puede caer en Spam — hay que marcarlo como "No es spam" y crear un filtro de Gmail para esa dirección (ya hecho el 16 sep 2026).
- **DNS**: nameservers de **Cloudflare** (`kristin.ns.cloudflare.com`, `terin.ns.cloudflare.com`) configurados en Namecheap desde el 16 sep 2026 (antes eran los de Netlify/NS1). SSL emitido y gestionado automáticamente por Cloudflare.

## Convenciones importantes para seguir trabajando

- **Portadas de artículos**: cada tarjeta de artículo busca automáticamente `img/portadas/<slug-del-articulo>.jpg`. Si el fichero no existe, se oculta solo (`onerror="this.remove()"`) y se ve el icono de color de respaldo. Para poner una foto nueva, basta con guardarla con el nombre exacto en esa carpeta, sin tocar código.
- **Tipografía**: Source Serif 4 (titulares) + Inter (cuerpo/UI), cargadas vía Google Fonts en todas las páginas.
- **Paleta de color**: variables CSS en `css/style.css` (`--primary` navy, `--accent-btc` naranja, `--accent-xrp` azul, `--accent` teal, etc.).
- **Estructura de página tipo**: cada artículo/categoría sigue una plantilla idéntica (header, nav con las 12 categorías, article-head, article-body, author-box, footer, cookie-banner). Al crear contenido nuevo, copiar la estructura de un artículo existente para no romper el patrón.
- **Categorías actuales** (en este orden en el menú): Bitcoin, Ethereum, XRP y Ripple, Regulación, Guías, Exchanges, Wallets, Fiscalidad, Trading, Memecoins, Minería y Staking, Glosario.

## Lo que ya está hecho

- Contenido: 24 artículos completos + 11 páginas de categoría + inicio + legal (5 páginas) + contacto + sobre nosotros + 404.
- SEO técnico: sitemap.xml, robots.txt, datos estructurados (Article, BreadcrumbList, FAQPage) en todo el contenido, Open Graph completo, favicon en todas las páginas.
- Legal: aviso legal, política de privacidad, cookies, términos de uso y disclaimer, sin placeholders, con Toni Caimari como titular (sin NIF ni domicilio, por decisión expresa).
- Formulario de contacto: conectado a Netlify Forms (15 sep 2026) — envío real por AJAX sin recargar página, con honeypot antispam, y notificación por email a `contacto.labrujulacripto@gmail.com` configurada y **probada en producción, funciona**. Formulario de newsletter: sigue sin backend real, con mensaje honesto en vez de fingir la suscripción.
- Anuncios de AdSense: **cuenta real creada y solicitada la revisión (20 sep 2026)**, ver sección propia más abajo. Todavía no se han montado los bloques de anuncios en el contenido (eso llega cuando aprueben la cuenta).
- Banner de cookies: **retirado (20 sep 2026)**, ver sección "Alta de Google AdSense" más abajo — sustituido por la CMP de Google conectada a Consent Mode.
- Google Search Console y Bing Webmaster Tools: propiedad verificada, sitemap (37 URLs) enviado en ambos. Auditoría técnica SEO/rendimiento (15 sep 2026): 1854 enlaces internos comprobados sin rotos reales, 0 imágenes sin `alt`, sin títulos/descripciones duplicados, cada página con 1 solo `<h1>`, CSS/JS ligeros (17KB/5,6KB), fuentes con `display=swap`. Se encontraron y arreglaron 4 portadas sobredimensionadas (600-700KB cada una, sin comprimir) que pesaban 2,6MB combinadas — redimensionadas a 900px de ancho y recomprimidas a 354KB combinadas (-86%). Peso total actual de las 22 portadas: 1,9MB.
- **Google Analytics (GA4)** (15 sep 2026): propiedad creada (cuenta "Toni Caimari", propiedad "BrújulaCripto", ID de medición `G-NVBT1C202J`, misma Gmail personal que Search Console). Implementado en `js/main.js` conectado al banner de cookies existente: solo se carga si el visitante acepta (no se activa si rechaza o no ha decidido, para cumplir la normativa de cookies). Funciona en las 43 páginas, incluidas legal/404 que no muestran el banner pero si el visitante ya había aceptado antes en otra página, igualmente se carga ahí. Probado en producción con el informe de Tiempo real: **funciona**, confirmado por el usuario.
- **PageSpeed Insights / Lighthouse** (15 sep 2026), medido en producción sobre `https://labrujulacripto.com/`: Accesibilidad 91→93/100, Prácticas recomendadas 96→100/100 (móvil y ordenador), SEO 100/100. Arreglos de jerarquía de encabezados (ver commit `c175059`): author-box de artículos h4→h3, footer h5→`<p class="footer-heading">` (deja de contar en la jerarquía, evita saltos en cualquier tipo de página), añadido `<h2>Artículos</h2>` en las 11 categorías. Enlaces dentro de texto de artículo/callout/autor/faq con subrayado (antes solo color). **Importante — no repetir**: se probó cargar Google Fonts de forma asíncrona (preload + `media=print` swap) para reducir el bloqueo de renderizado; **empeoró el rendimiento real** (LCP de 3.5s a 4.3s en móvil) porque el `<h1>` usa la fuente personalizada y el intercambio tardío de fuente retrasa el repintado del elemento que cuenta para LCP. Revertido (commit `5d84466`), fuentes siguen cargando de forma síncrona/bloqueante a propósito. Pendiente de más exprimido de rendimiento si se quiere en el futuro: 483-977 KiB de ahorro posible en imágenes sirviendo WebP/AVIF con `<picture>` además del JPEG (más trabajo, no hecho).

## Pendiente (lo que hay que retomar)

1. ~~**Fotos con formato incorrecto**~~ ✅ Resuelto (15 sep 2026): de las 22 portadas, 11 llevaban extensión `.jpg` pero por dentro eran AVIF (2), WebP (6) o PNG (3). Se reconvirtieron todas a JPEG real con PowerShell + WIC (códecs nativos de Windows, sin necesidad de squoosh.app). Las 22 portadas son ahora JPEG real, verificado con `file *.jpg`. Copia de los 11 originales guardada fuera del repo (carpeta temporal de la sesión) por si hiciera falta recuperar alguno.
2. ~~**Falta la foto del glosario**~~ ✅ Decisión definitiva (15 sep 2026): se queda sin foto, con el fondo de color y el emoji 📖 de respaldo — al usuario le gusta así. No tocar.
3. ~~**Correo de contacto**~~ ✅ Resuelto (15 sep 2026): formulario de la web conectado a Netlify Forms (luego migrado a Web3Forms), con notificación a `contacto.labrujulacripto@gmail.com`, **probado en producción por el usuario y confirmado que funciona**. **Corrección (17 sep 2026)**: todo el sitio (footer, páginas legales, autor de artículos, formulario, y el `ContactPoint` del schema Organization) mostraba `contacto@labrujulacripto.com` — un email de dominio que nunca se llegó a configurar con reenvío en Namecheap y que no recibía nada. Sustituido en las 54 páginas + `js/main.js` (148 apariciones) por la dirección real, `contacto.labrujulacripto@gmail.com`, que es la única que de verdad funciona.
4. ~~**Aviso "formulario no seguro" en Chrome**~~ ✅ Resuelto (15 sep 2026): se añadieron los `autocomplete` correctos a todos los campos de `contacto.html`.
5. ~~**Autoría de los artículos**~~ ✅ Decisión definitiva (15 sep 2026): se queda "Equipo Editorial de BrújulaCripto" en los 23 artículos, sin cambios. Motivo: protege la privacidad del usuario (coherente con no poner NIF/domicilio en el aviso legal) y es válido para Google; el nombre real no se usa en ningún artículo.
6. ~~**Google Search Console y Bing Webmaster Tools**~~ ✅ Resuelto (15 sep 2026): propiedad `https://labrujulacripto.com/` verificada en Search Console con etiqueta `google-site-verification` (metaetiqueta añadida al `<head>` de `index.html`), sitemap.xml enviado (37 URLs). Bing Webmaster Tools verificado e importado directamente desde Google Search Console (sitio + sitemap en un solo paso). Cuenta usada: Gmail personal del usuario. El sitemap dio "No se ha podido obtener" las primeras horas en Google (fallo temporal normal en dominios recién verificados, confirmado técnicamente sano con `curl`/XML válido) — **se resolvió solo en menos de 24h**, ambos (Google y Bing) muestran ahora estado correcto/procesado.
7. **Redes sociales**: el dato `sameAs` de los datos estructurados de la organización está vacío; añadir enlaces si en algún momento hay perfiles de BrújulaCripto en redes.
8. **Solicitar indexación manual en Search Console — EN CURSO (20 sep 2026)**: ver sección "Bug de indexación por redirect .html" más abajo. El usuario se quedó en el enlace nº 17 de la lista de 52; **queda pedir indexación manual del nº 17 en adelante**, siguiendo el orden de esa lista (ya viene ordenada por prioridad SEO/tráfico, no hace falta reordenar nada). No hay que rehacer análisis ni repetir los primeros 16, ya están hechos.

## Decisión: cuentas de Google para monetización (pensando en 5 webs futuras)

El usuario quiere llegar a tener 5 webs monetizadas con AdSense. Decisión tomada (15 sep 2026): **una sola cuenta de Google (la personal del usuario) para AdSense y Search Console de las 5 webs**, no una cuenta distinta por web — es literalmente una norma de Google (varias cuentas de AdSense de la misma persona = riesgo de suspensión de todas). El saldo, el pago y el umbral mínimo de AdSense son compartidos entre todas las webs que se añadan a esa cuenta; hay un informe por sitio dentro del mismo panel. Las Gmail específicas de cada proyecto (como `contacto.labrujulacripto@gmail.com`) son independientes de esto y siguen sirviendo solo para el correo de contacto de lectores de cada web — no hay problema en tener una por proyecto.

**Descartado (15 sep 2026)**: la idea de un artículo con enlace de referidos a Bybit se elimina de la lista — no se va a hacer, el programa de afiliados de Bybit prohíbe usar el nombre de la marca en publicidad y no vale la pena seguir dándole vueltas.

## Decisión: idiomas (inglés/francés)

Se planteó añadir selector de idioma (ES/EN/FR) para captar tráfico y RPM de AdSense más alto en EEUU/Francia. Decisión tomada (15 sep 2026): **de momento no**. Primero consolidar y optimizar la web en español (cerrar pendientes, crecer contenido, estabilizar tráfico y AdSense). Retomar la expansión a inglés (primero) y francés (después) **dentro de unos 6 meses (aprox. marzo 2027)**, cuando la facturación lo justifique. Cuando se retome: la opción recomendada es subcarpeta (`/en/`, `/fr/`) en el mismo dominio, no un dominio ni subdominio aparte — hereda autoridad SEO y es más fácil de mantener con un único AdSense/Search Console. Un simple widget de traducción automática (tipo Google Translate embebido) **no sirve** para SEO real: Google no indexa lo que traduce ese widget, así que no trae visitantes nuevos por búsquedas en otro idioma; hacen falta páginas HTML reales traducidas.

## Alta de Google AdSense y Consent Mode (20 sep 2026)

Cuenta real de Google AdSense creada con el Gmail personal del usuario (la misma de Search Console/GA4), sitio `labrujulacripto.com` dado de alta. **ID de publicador real: `pub-3014707151576797`**.

- **Verificación de propiedad**: método "Fragmento de código de AdSense" — se añadió el script `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3014707151576797" crossorigin="anonymous"></script>` al principio del `<head>` de las 58 páginas (commit `8515189`). Verificado correctamente por Google.
- **Revisión solicitada**: ya enviada, pendiente de que Google la evalúe (puede tardar de días a semanas).
- **CMP de Google activada** para cumplir el RGPD en visitantes de UE/Reino Unido/Suiza: se eligió la opción de 3 botones (Consentir / No consentir / Gestionar opciones) — es la más segura legalmente porque rechazar es tan fácil como aceptar (exigencia de la AEPD/RGPD). Se gestiona desde AdSense → Privacidad y mensajes, no requiere código propio para mostrarse ni para actualizar el consentimiento — lo hace sola en cuanto detecta el script de AdSense en la página.
- **Banner de cookies casero retirado** (commit `467deeb`) para no duplicar con el mensaje de Google: `#cookie-banner` puesto a `display:none` en `css/style.css`, y en `js/main.js` se quitó toda la lógica de mostrar/ocultar el banner y el gate de `localStorage` que condicionaba la carga de GA4 a haber aceptado. Google Analytics ahora se carga siempre en las 58 páginas; quien decide si se envían datos de verdad es **Google Consent Mode v2**, con el snippet `gtag('consent','default',{ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied', wait_for_update:500})` añadido justo antes del script de AdSense en el `<head>` de las 58 páginas — así Analytics y anuncios comparten la misma señal de consentimiento real del visitante en vez de la lógica manual que había antes.
- Verificado tras el cambio: sin duplicados del script de AdSense, 147 bloques JSON-LD siguen siendo JSON válido, sin mojibake.

**Pendiente para cuando aprueben la cuenta**:
- Con los IDs de cada unidad de anuncio, montar los tres bloques de anuncios (raíl izquierdo, raíl derecho, in-content) en las páginas — ya existe algo de infraestructura en `js/main.js` (líneas del final, `.ad-rail .adsbygoogle`) pendiente de revisar si sigue vigente o hay que rehacerla.
- Crear `ads.txt` en la raíz con el `pub-3014707151576797` real (Google suele indicarlo explícitamente tras la aprobación).

## Fase 4 del prompt maestro — SEO técnico (17 sep 2026)

Ejecutados los 4 arreglos mecánicos de más impacto/menos riesgo marcados por la auditoría, en las 54 páginas:
- **`inLanguage: "es-ES"`** añadido al JSON-LD `Article`/`HowTo` de los 34 artículos.
- **Schema `Organization`** (name/url/sameAs) añadido en las 19 páginas que no tenían ningún dato estructurado propio: 11 categorías, `contacto.html`, `sobre-nosotros.html`, `404.html` y las 5 páginas legales.
- **`width`/`height`** añadidos a las 43 imágenes de portada que no los tenían (en las 11 categorías + `index.html`), usando las dimensiones reales de cada archivo.
- **`og:locale: es_ES`** añadido en las 47 páginas que tenían bloque Open Graph y no lo tenían (34 artículos + 11 categorías + contacto + sobre nosotros).

**Importante — no repetir el método usado:** el primer intento se hizo con un script de PowerShell (`.ps1` guardado a disco) que corrompió los acentos (mojibake tipo "BrÃºjulaCripto") porque Windows PowerShell 5.1 lee los `.ps1` sin BOM con el codepage ANSI del sistema, no UTF-8 — un segundo intento con `.Replace()` en una sola línea de PowerShell **vació a 0 bytes las 47 páginas objetivo** (el error de conversión de tipo dentro del bucle no detuvo la ejecución y `WriteAllText` se llamó igualmente con contenido nulo). Se recuperó todo con `git checkout` sin pérdida de datos, y se rehizo todo con un script Perl (`open ... ":encoding(UTF-8)"`), que funcionó a la primera y se verificó exhaustivamente: 0 archivos a 0 bytes, 0 mojibake, los 134 bloques JSON-LD del sitio validados como JSON parseable, `</head>` una sola vez por archivo. **Para cualquier edición futura por script en este proyecto (Windows): usar Perl o Bash/sed, nunca un `.ps1` guardado a disco con caracteres acentuados.**

Pendiente de Fase 4: conversión de imágenes a WebP/AVIF con `<picture>`, CSS crítico inline, cabeceras de caché en el Worker de Cloudflare (rendimiento — más trabajo, no bloqueante). El resto de Fase 4 (canonical, viewport, charset, BreadcrumbList, FAQPage visible, robots.txt, sitemap) ya estaba correcto según la auditoría, sin cambios necesarios.

## Decisión: enfoque geográfico — España/Europa/EEUU, NO Latinoamérica (16 sep 2026)

El usuario decidió enfocar la web a **España, Europa (Alemania, Francia, Reino Unido, Suiza) y Estados Unidos** (público hispanohablante), y **dejar de lado Latinoamérica** por pagar mucho menos en AdSense — **excepto México, que se mantiene**. Cambios hechos:
- Eliminado el artículo `xrp-latinoamerica-remesas-bancos.html`.
- Eliminados los artículos de fiscalidad de Argentina y Colombia (creados y luego borrados en la misma sesión).
- Añadidos 4 artículos nuevos de fiscalidad: Alemania, Francia, Reino Unido, Suiza.
- `articulos/impuestos-criptomonedas-mexico.html` editado para quitar el enfoque "de Latinoamérica" del texto (se queda como único país latinoamericano).
- `que-son-las-stablecoins-guia.html` editado para quitar menciones a Latinoamérica.
- `categorias/fiscalidad.html` reordenado: España → EEUU → Alemania → Reino Unido → Francia → Suiza → México.
- **Norma a partir de ahora**: cualquier contenido nuevo, no mencionar ni dirigirse a Latinoamérica (salvo México).

## Trabajo de contenido y SEO (16 sep 2026)

- Añadidos 10 artículos nuevos en total (wallets fría/caliente, stablecoins, trading con apalancamiento, airdrops, RLUSD, ETF Bitcoin al contado, cómo evaluar memecoins, staking para principiantes, + los 4 de fiscalidad europea).
- Todas las tarjetas de portada e "Más artículos recientes" del `index.html` y las 11 páginas de categoría reordenadas por interacción/interés de búsqueda.
- Creado `CONTEXTO-IA-WEB.md`: documento resumen completo de la web (identidad, enfoque de mercado, modelo de negocio, stack técnico, categorías, los 34 artículos con slug+título+resumen) pensado para dar contexto a otra IA.
- Guardado `PROMPT-SEO-ADSENSE-BRUJULACRIPTO.md`: prompt maestro de 6 fases (auditoría, títulos/metadatos, E-E-A-T/contenido, SEO técnico, maquetación anuncios, enlazado interno) aportado por el usuario para optimizar SEO/AdSense.
- Generado `AUDITORIA-SEO-2026.md` (Fase 1, solo lectura): inventario de 54 páginas. Hallazgos clave: 33/34 artículos con menos de 800 palabras (bloqueante nº1 para AdSense), 33/34 títulos de más de 60 caracteres, 4 categorías con solo 2 artículos (Exchanges, Regulación, Trading, Minería y Staking), 5 páginas legales sin JSON-LD, robots.txt correcto (se descartó una suposición errónea del prompt). Todos estos puntos ya están resueltos (ver secciones siguientes).

## Fase 3 del prompt maestro — E-E-A-T y ampliación a 800+ palabras (17 sep 2026)

Los 34 artículos revisados uno a uno con: fecha visible de "Actualizado", sección "Cómo verificamos esta información" con fuentes oficiales reales citadas, FAQ ampliado a mínimo 4 preguntas (JSON-LD `FAQPage` + `<dl class="faq">` visible), y ampliación de contenido hasta superar 800 palabras en `article-body`. Verificado al cierre: las 34 páginas ≥800 palabras, ≥4 FAQ (glosario exento, es formato de referencia), 0 mojibake, JSON-LD 100% válido.

Se encontraron y corrigieron varias inconsistencias factuales reales durante el proceso (no solo ampliación mecánica): `precio-bitcoin-hoy-analisis.html` prometía "7 factores" y solo desarrollaba 5 (se escribieron 2 secciones nuevas reales, no relleno); `halving-bitcoin-que-es.html` no daba nunca una estimación del próximo halving pese a que el FAQ lo insinuaba (se añadió cronología histórica real 2009-2024 + estimación ~2028 explícitamente marcada como aproximada); `impuestos-criptomonedas-estados-unidos.html` se había saltado por error en el lote original de fiscalidad y se completó en la verificación final.

**Regla dura, ya documentada arriba pero reconfirmada en esta fase**: todas las sustituciones masivas de texto se hicieron con Perl (`open(..., "<:raw", ...)` para JSON-LD, `perl -i -pe` para find-replace), nunca con un `.ps1` guardado a disco.

## Corrección del email de contacto en todo el sitio (17 sep 2026)

Se detectó que `contacto@labrujulacripto.com` (dominio nunca configurado con reenvío en Namecheap) estaba en uso en 148 sitios de 54 páginas + `js/main.js`, incluido el `ContactPoint` del schema `Organization`. Sustituido globalmente por la dirección real que sí funciona, `contacto.labrujulacripto@gmail.com`. Verificado 0 apariciones de la dirección antigua y confirmado en producción vía `curl` sobre `/contacto`.

## Fase 6 del prompt maestro — enlazado interno (17 sep 2026)

Arquitectura hub-and-spoke verificada y reforzada: las 11 páginas de categoría enlazan a todas sus tarjetas de artículo, cada artículo enlaza de vuelta a su categoría vía breadcrumb, y se añadieron enlaces cruzados contextuales (no genéricos) entre artículos relacionados — especialmente el clúster de fiscalidad (7 países, cada uno enlaza a los 2 siguientes en rotación fija, cerrando el ciclo) y 12 artículos más con una sección H2 nueva de 1-2 enlaces contextuales cada uno. Verificado: 0 artículos huérfanos, 135+ bloques JSON-LD válidos tras el cierre de fase.

## Cierre del único bloqueante real de AdSense que quedaba: categorías con menos de 3 artículos (17 sep 2026)

La auditoría de Fase 1 había marcado "ninguna categoría con menos de 3 artículos" como el único punto de la checklist de AdSense que seguía sin resolver una vez completadas las Fases 3, 4 y 6 (todo lo demás — 800+ palabras, metadatos, E-E-A-T, enlazado interno, SEO técnico — ya estaba cerrado). Se escribió un artículo nuevo por cada una de las 4 categorías afectadas, usando solo hechos ya verificados en el resto del sitio (regla "no inventes datos"):
- **Exchanges** (2→3): `mejores-exchanges-espana.html` — Bit2Me, Criptan, Binance y Kraken comparados para el mercado español (el hueco de contenido más grave marcado por el propio prompt maestro: había guía de EE. UU. pero no de España, el mercado principal).
- **Regulación** (2→3): `genius-act-stablecoins-eeuu.html` — la ley federal de stablecoins de pago de EE. UU. (2025), ya mencionada como contexto en el artículo de la CLARITY Act pero nunca desarrollada por separado.
- **Trading** (2→3): `dca-dollar-cost-averaging-cripto.html` — estrategia de inversión periódica, con ejemplo numérico ilustrativo.
- **Minería y Staking** (2→3): `como-funciona-mineria-bitcoin.html` — la categoría solo tenía contenido de staking pese a su nombre; cubre prueba de trabajo, ASIC, dificultad y pools de minería.

Cada artículo nuevo sigue la plantilla exacta del sitio (≥800 palabras, ≥4 FAQ, sección de fuentes, author-box), tiene su tarjeta añadida en la categoría correspondiente, su entrada en `sitemap.xml`, y enlaces cruzados bidireccionales con artículos existentes relacionados. De paso se corrigió una card desactualizada en `categorias/glosario.html` que seguía diciendo "31 términos" (el artículo ya decía 37 desde una ampliación de una sesión anterior). Verificado al cierre: 38 artículos totales, las 11 categorías con ≥3 tarjetas (glosario es una página de referencia única por diseño, no aplica), 147 bloques JSON-LD válidos, 0 mojibake, 0 enlaces internos rotos.

## Incidente: caída total del sitio (16-17 sep 2026) — resuelto, causa: Cloudflare

El 16 sep, tras el commit `63d0c5a` y un despliegue exitoso, la web dejó de cargar por completo (`ERR_CONNECTION_TIMED_OUT`) para el usuario y confirmado también con `curl -v` (timeout TCP puro contra las IPs anycast de Cloudflare `188.114.96.5`/`188.114.97.5`, sin respuesta SYN-ACK). Se descartó progresivamente: código/Worker (se probó redeploy, y más tarde se borró y recreó el proyecto entero desde cero — mismo fallo persistió incluso en la URL nueva `*.workers.dev`), dominio personalizado, rutas de Workers, DNS (resolvía bien a las IPs de Cloudflare), certificado SSL (activo, válido). En "Seguridad → Análisis" de la zona se vio que Cloudflare **sí estaba entregando tráfico real a otros visitantes durante todo el incidente** (picos de cientos de peticiones/hora, 0 actividad sospechosa) — es decir, la caída no era global, sino específica de la ruta de red de este usuario (y del entorno de pruebas usado), lo que apuntaba a un problema de enrutamiento puntual en el lado de Cloudflare hacia esas redes concretas, no a la configuración de la web. **Se resolvió solo** la mañana del 17 sep 2026 (confirmado con `curl` → HTTP 200). Conclusión del usuario: "era problema suyo [de Cloudflare], no mío". No quedó ninguna causa raíz 100% confirmada más allá de esto; si se repite, revisar de nuevo "Seguridad → Análisis/Eventos" de la zona antes de tocar nada del proyecto.

## Bug de indexación por redirect .html — encontrado y corregido (19-20 sep 2026)

**Síntoma**: el usuario solicitó indexación manual de 11 URLs en Search Console y todas salían "La URL no está en Google" con "Error de redirección".

**Causa raíz**: `wrangler.jsonc` tiene `html_handling: "auto-trailing-slash"` (decisión ya tomada y documentada arriba, migración a Cloudflare del 16 sep), que hace que cualquier URL `.html` responda con **redirect 307** a la versión sin extensión (ej. `/articulos/foo.html` → `/articulos/foo`). Pero el `sitemap.xml`, las etiquetas `<link rel="canonical">`, `<meta property="og:url">` y las URLs `"item"` del `BreadcrumbList` (JSON-LD) de **todas las páginas seguían apuntando a la versión con `.html`**. Google pedía la URL del sitemap (`.html`), recibía el redirect, y la página de destino declaraba como canónica la URL que acababa de redirigirle — contradicción circular que Search Console interpreta como "Error de redirección" y no indexa.

**Fix aplicado** (commit `3a18ec1`, ya en `main` y desplegado): con Perl (nunca `.ps1`, ver norma ya documentada arriba) se quitó `.html` de canonical, og:url, sitemap.xml y BreadcrumbList en las 58 páginas afectadas. Caso especial: la entrada de la home en el sitemap pasó de `/index.html` a `/` (raíz). Verificado: 0 `.html` restante en esos 4 sitios, 147 bloques JSON-LD siguen siendo JSON válido, sitemap bien formado, 0 mojibake. **No se tocaron** los ~2500 enlaces internos (menú, footer, enlaces cruzados entre artículos) que siguen apuntando a `.html` — siguen dando el salto extra de redirect al hacer clic, pero eso no afecta a la indexación, es una pérdida de rendimiento menor pendiente de limpiar algún día si se quiere apurar más (no urgente).

**Verificado que el fix funciona**: al inspeccionar URLs ya corregidas en Search Console (ej. `categorias/bitcoin`), sale "La URL está en Google", "Declarada por el usuario como canónica" y "Seleccionada por Google como canónica" coinciden (sin `.html`), obtención de página "Correcto".

**Nota sobre el panel "Indexación de páginas" (el agregado, no la inspección de URL suelta)**: este informe se actualiza con retraso de días/semanas ("Última actualización" lo indica arriba a la derecha) y puede mostrar datos viejos (ej. solo "1 página conocida, sin indexar") que contradicen lo que ya ves correcto en la Inspección de URLs individual. Es normal, no indica un problema nuevo — hay que esperar a que ese informe agregado se refresque solo. El botón "Validar corrección" en bloque (dentro de Indexación → Páginas → clic en la fila del motivo de error) puede no aparecer si el volumen de URLs afectadas es bajo o el informe aún no categorizó el error como fila propia; en ese caso no hay problema en seguir pidiendo indexación URL por URL desde el buscador de arriba, funciona igual.

**Plan de recuperación — pedir indexación manual, en orden de prioridad SEO/tráfico** (cupo diario limitado en Search Console, ~10-12/día). El usuario ya hizo del 1 al 16. **Falta desde el 17 en adelante**:

1. `https://labrujulacripto.com/`
2. `https://labrujulacripto.com/articulos/que-es-bitcoin-como-funciona`
3. `https://labrujulacripto.com/articulos/que-es-xrp-guia-completa`
4. `https://labrujulacripto.com/articulos/precio-bitcoin-hoy-analisis`
5. `https://labrujulacripto.com/articulos/como-comprar-bitcoin-primera-vez`
6. `https://labrujulacripto.com/articulos/mejores-exchanges-espana`
7. `https://labrujulacripto.com/articulos/declarar-bitcoin-xrp-renta-espana`
8. `https://labrujulacripto.com/articulos/halving-bitcoin-que-es`
9. `https://labrujulacripto.com/articulos/caso-sec-ripple-resumen`
10. `https://labrujulacripto.com/articulos/mejores-wallets-bitcoin-xrp`
11. `https://labrujulacripto.com/categorias/bitcoin`
12. `https://labrujulacripto.com/categorias/xrp-ripple`
13. `https://labrujulacripto.com/categorias/guias-principiantes`
14. `https://labrujulacripto.com/categorias/exchanges`
15. `https://labrujulacripto.com/categorias/fiscalidad`
16. `https://labrujulacripto.com/articulos/como-comprar-xrp-guia-segura`
17. `https://labrujulacripto.com/articulos/que-son-las-stablecoins-guia`
18. `https://labrujulacripto.com/articulos/wallet-fria-vs-caliente-ledger-trezor`
19. `https://labrujulacripto.com/articulos/bit2me-vs-binance-comparativa`
20. `https://labrujulacripto.com/articulos/mejores-exchanges-estados-unidos`
21. `https://labrujulacripto.com/articulos/como-funciona-mineria-bitcoin`
22. `https://labrujulacripto.com/articulos/dca-dollar-cost-averaging-cripto`
23. `https://labrujulacripto.com/articulos/genius-act-stablecoins-eeuu`
24. `https://labrujulacripto.com/articulos/que-es-staking-guia-principiantes`
25. `https://labrujulacripto.com/articulos/como-evaluar-memecoin-antes-invertir`
26. `https://labrujulacripto.com/articulos/trading-apalancamiento-futuros-cripto`
27. `https://labrujulacripto.com/articulos/airdrops-cripto-como-conseguirlos`
28. `https://labrujulacripto.com/articulos/etf-bitcoin-al-contado-que-son`
29. `https://labrujulacripto.com/articulos/rlusd-stablecoin-ripple-explicado`
30. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-alemania`
31. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-francia`
32. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-reino-unido`
33. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-suiza`
34. `https://labrujulacripto.com/categorias/regulacion`
35. `https://labrujulacripto.com/categorias/trading`
36. `https://labrujulacripto.com/categorias/mineria-staking`
37. `https://labrujulacripto.com/articulos/mica-espana-que-significa`
38. `https://labrujulacripto.com/articulos/clarity-act-eeuu-explicado`
39. `https://labrujulacripto.com/articulos/analisis-tecnico-basico-bitcoin-xrp`
40. `https://labrujulacripto.com/articulos/como-proteger-criptomonedas-estafas`
41. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-mexico`
42. `https://labrujulacripto.com/articulos/impuestos-criptomonedas-estados-unidos`
43. `https://labrujulacripto.com/articulos/es-posible-staking-xrp`
44. `https://labrujulacripto.com/articulos/glosario-cripto-terminos-basicos`
45. `https://labrujulacripto.com/articulos/que-son-las-memecoins-como-funcionan`
46. `https://labrujulacripto.com/articulos/rug-pull-estafa-memecoins-explicada`
47. `https://labrujulacripto.com/articulos/como-comprar-memecoins-sin-caer-en-estafas`
48. `https://labrujulacripto.com/categorias/wallets-seguridad`
49. `https://labrujulacripto.com/categorias/memecoins`
50. `https://labrujulacripto.com/categorias/glosario`
51. `https://labrujulacripto.com/sobre-nosotros`
52. `https://labrujulacripto.com/contacto`

Criterio de orden usado: primero contenido con más intención de búsqueda/tráfico comercial (guías de compra, precio, fiscalidad España, comparativas de exchanges), luego categorías principales (hub pages), luego los artículos publicados el 16-17 sep 2026 (nacieron con el canonical ya roto por la migración a Cloudflare, así que nunca llegaron a indexarse bien — se les da prioridad por eso, no por tema), y al final el contenido más antiguo/nicho y las páginas sin intención de búsqueda (`sobre-nosotros`, `contacto`, quedan las últimas a propósito, no hace falta gastar cupo en ellas, se indexan solas por rastreo). No pasa nada por volver a pedir indexación de una URL ya pedida antes, no se duplica ni da error.

## Primera ejecución real de `/actualizar-web`, pasada 1 — Binance pierde la licencia MiCA (27 sep 2026)

Al ejecutar el comando por primera vez se encontró un error factual real y con impacto: **Binance retiró su solicitud de licencia MiCA** (presentada en Grecia) el 24 de junio de 2026, seis días antes de que terminara el periodo transitorio del reglamento, y desde el 1 de julio de 2026 **no admite clientes nuevos, depósitos ni operativa nueva en España** (solo retiradas para quienes ya tenían cuenta abierta). Ha declarado que buscará licencia vía Francia, pero no consta que la haya obtenido a fecha de esta revisión.

Esto contradecía directamente lo que decían tres artículos (todos revisados por última vez el 17 sep 2026, es decir, el error ya existía antes de esa fecha, no es un cambio posterior a la última revisión):
- `bit2me-vs-binance-comparativa.html`: afirmaba que ambas plataformas tenían licencia MiCA en regla. Corregido por completo (tabla comparativa, presencia regulatoria, KYC, depósitos, "¿cuál elegir?" y las 4 FAQ, visibles y en JSON-LD), con un aviso destacado al inicio del artículo.
- `mejores-exchanges-espana.html`: recomendaba Binance como opción para España. Sustituido por Kraken (licencia MiCA vigente vía Banco Central de Irlanda desde jun. 2025, verificado) como alternativa internacional con licencia en regla.
- `mica-espana-que-significa.html`: citaba la comparativa Bit2Me/Binance como ejemplo de "dos plataformas con licencia MiCA operando en España". Corregido para usar el caso Binance como ejemplo real de qué pasa cuando una plataforma no consigue la licencia a tiempo.
- Referencias cruzadas actualizadas en `mejores-exchanges-estados-unidos.html`, `categorias/exchanges.html` e `index.html`.

De paso se corrigió una inconsistencia de título en `clarity-act-eeuu-explicado.html`: se titulaba "CLARITY Act: la nueva ley cripto de EE. UU." pese a que el Senado rechazó la moción de cloture el 15 sep 2026 y no es ley — cambiado a "la propuesta de ley" en el artículo, `index.html` y `categorias/regulacion.html` (title, h1, meta, og:title, JSON-LD).

Se verificaron también sin encontrar errores: CLARITY Act (resto del contenido), caso SEC vs Ripple (cierre definitivo ya reflejado correctamente), GENIUS Act, ausencia de licencia BitLicense de Kraken en Nueva York, recuento de 37 términos del glosario, y la reforma fiscal alemana en estudio para 2027 (ya cubierta con matices correctos, sin afirmar nada no confirmado). El resto de los 38 artículos, revisados por última vez el 17 sep 2026 (10 días antes de esta ejecución), seguían vigentes sin cambios.

Verificado al cierre: 147 bloques JSON-LD siguen siendo JSON válido, 0 mojibake, 0 enlaces internos rotos, sitemap.xml bien formado con `lastmod` actualizado en las 4 páginas con cambio real de contenido (`bit2me-vs-binance-comparativa`, `mejores-exchanges-espana`, `mica-espana-que-significa`, `clarity-act-eeuu-explicado`).

## Misma sesión, pasada 2 — Trezor recupera chip de seguridad y año fiscal de Reino Unido (27 sep 2026)

El usuario pidió repetir `/actualizar-web` justo después de la pasada 1, así que esta vez el foco fue en lo que no se había revisado a fondo la primera vez: el contenido concreto de las guías fiscales por país y los artículos de producto (wallets).

- **`wallet-fria-vs-caliente-ledger-trezor.html`**: el artículo afirmaba que Trezor no tiene chip de seguridad dedicado, a diferencia de Ledger. Eso ya no es cierto para el catálogo actual: la serie Safe de Trezor (Safe 3, Safe 5 y Safe 7) incorpora desde hace tiempo un elemento seguro certificado EAL6+ (chip Infineon OPTIGA Trust M), manteniendo su firmware de código abierto. Solo el Model T, ya un modelo antiguo dentro de su catálogo, sigue sin chip dedicado. Corregida la tabla comparativa (chip de seguridad, conectividad, rango de precio — el Safe 7 y no el Model T es ahora el tope de gama, ~250€) y el párrafo de "diferencia filosófica principal", que asumía el chip como un diferenciador limpio entre marcas.
- **`impuestos-criptomonedas-reino-unido.html`**: citaba el ejercicio fiscal 2025/26 como el vigente, cuando el ejercicio actual (desde abril de 2026) es el 2026/27. Verificado que el importe exento (3.000 libras) y los tipos de Capital Gains Tax (18%/24%) no han cambiado entre ejercicios, así que solo se actualizó la referencia al año fiscal, sin tocar ninguna cifra.

Revisado sin cambios: fiscalidad de Francia (flat tax 31,4% desde PLFSS 2026, correcto), Suiza (impuesto al patrimonio cantonal, contenido genérico y estable), México (sin cifras concretas que puedan desactualizarse), EE. UU. (tramos del IRS y Formulario 1099-DA, correcto), estimación del halving (~2028, ya bien matizada), y la reforma fiscal alemana en estudio para 2027 (sigue en fase de propuesta tal y como dice el artículo).

Verificado al cierre: JSON-LD válido, 0 mojibake, 0 enlaces rotos, `lastmod` actualizado en `wallet-fria-vs-caliente-ledger-trezor` e `impuestos-criptomonedas-reino-unido`.

Ambas pasadas de esta sesión ya están commiteadas y pusheadas a `main` (commits `b351db2` y `3b6db27`).

## Comando de mantenimiento: `/actualizar-web` (20 sep 2026)

Se creó un comando personalizado de Claude Code guardado en `.claude/commands/actualizar-web.md` (viaja con el repo, funciona en cualquier PC en el que se clone/haga `git pull`). Al escribir `/actualizar-web` en una sesión de Claude Code dentro de este proyecto, revisa toda la web (38+ artículos, 11 categorías, index) buscando información desactualizada (fechas/plazos, estado de leyes y procesos regulatorios en trámite, cifras verificables, productos/servicios que hayan podido cambiar, precios de referencia) y la corrige usando búsqueda web contra fuentes oficiales, sin reescribir lo que ya es correcto. Pensado para ejecutarse manualmente cuando el usuario quiera (semanalmente o cuando le apetezca), no es una tarea programada automática. Antes de tocar nada, el propio comando indica que hay que leer este fichero para tener el contexto y las normas del proyecto.

## Rechazo de AdSense: "Contenido de poco valor" (28 sep 2026)

Google rechazó la revisión solicitada el 20 sep con el motivo "Contenido de poco valor". Análisis:

**Causa 1 — fechas de "Publicado" falsas, encontrada y corregida.** Se detectó que 16 de los 38 artículos declaraban fechas de publicación fabricadas, repartidas entre enero y junio de 2026 (ej. glosario decía "30 ene 2026"), simulando meses de historial cuando el repositorio real se creó el **13 sep 2026** (verificado con `git log`, primer commit). El usuario confirmó que esto no fue decisión suya, sino de una sesión anterior. Corregido en los 16 artículos afectados (`analisis-tecnico-basico-bitcoin-xrp`, `bit2me-vs-binance-comparativa`, `caso-sec-ripple-resumen`, `como-comprar-bitcoin-primera-vez`, `como-comprar-xrp-guia-segura`, `como-proteger-criptomonedas-estafas`, `declarar-bitcoin-xrp-renta-espana`, `es-posible-staking-xrp`, `glosario-cripto-terminos-basicos`, `halving-bitcoin-que-es`, `impuestos-criptomonedas-mexico`, `mejores-wallets-bitcoin-xrp`, `mica-espana-que-significa`, `precio-bitcoin-hoy-analisis`, `que-es-bitcoin-como-funciona`, `que-es-xrp-guia-completa`): tanto el `<span>Publicado: ...</span>` visible como el `datePublished` del JSON-LD `Article` puestos a `13 sep 2026` / `2026-09-13`, su fecha real de creación. **Norma a partir de ahora**: la fecha de "Publicado" de cualquier artículo nuevo debe ser la fecha real en la que se escribe, nunca una fecha inventada para simular antigüedad — es exactamente el tipo de señal que penalizan las políticas de spam de Google, y strictamente deshonesto de cara al lector.

**Causa 2 — el sitio es demasiado joven, con tráfico real casi nulo.** Confirmado por el usuario en GA4 (menos de 50-100 visitas totales). Coincide con lo que se vio en la sección de indexación más arriba: el sitemap no se procesó bien hasta el 18 sep, y la indexación real todavía se estaba pidiendo manualmente URL a URL en la fecha del rechazo (20 sep). Google exige explícitamente "un nivel de interés genuino por parte de los usuarios" antes de aprobar anuncios — esto no se arregla con código, solo con tiempo y visitas reales.

**Causa 3 — bug de CSP encontrado el mismo día, gravísimo: Analytics, AdSense y el CMP de consentimiento llevaban desde el 20 sep sin poder ejecutarse en ningún visitante real.** El fichero `_headers` (cabeceras de seguridad, añadidas en la Fase 4 del 17 sep, antes de que existiera AdSense) tenía `Content-Security-Policy: script-src 'self' https://www.googletagmanager.com` — sin `'unsafe-inline'` y sin los dominios de Google Ads. Esto bloqueaba en silencio (sin error visible para un usuario normal, solo en la consola de desarrollador): el script inline de `gtag('consent','default',...)` presente en las 58 páginas desde el alta de AdSense, el propio script de carga de AdSense (`pagead2.googlesyndication.com`), y el CMP de Funding Choices (`fundingchoicesmessages.google.com`, el banner "Consentir/No consentir"). Es decir: durante más de una semana, ni Analytics registraba visitas reales, ni el consentimiento se gestionaba, ni el propio AdSense podía verificarse correctamente en el navegador de un visitante real — todo mientras la cuenta estaba pendiente de revisión.

**Fix aplicado** (commits `64bc49b` y `abde344`, ya en `main` y desplegado): añadido a `_headers` `'unsafe-inline'` en `script-src`, y los dominios `pagead2.googlesyndication.com`, `tpc.googlesyndication.com`, `googleads.g.doubleclick.net`, `www.google.com`, `www.google-analytics.com`, `fundingchoicesmessages.google.com`, `www.googletagservices.com` en `script-src`/`connect-src`/`img-src`/`frame-src` según corresponda. **Verificado en el navegador real del usuario** (consola de DevTools): 0 errores de CSP, "No Issues". **Verificado en GA4 tiempo real**: usuario activo registrado correctamente tras el fix (antes no se registraba ninguno). El banner del CMP (mensaje "Reglamentos europeos" con "Activos: 1" en AdSense → Privacidad y mensajes, confirmado configurado y activo) sigue sin mostrarse en el navegador pese al fix — hipótesis más probable: Google no sirve el mensaje de Funding Choices mientras la cuenta de AdSense siga en estado de revisión rechazada, ya que va ligado al mismo sistema de anuncios. Pendiente de comprobar de nuevo una vez se apruebe la cuenta.

**Herramienta nueva — calculadora de impuestos cripto España** (commit `88479ae`): `calculadora-impuestos-cripto-espana.html`, calcula el IRPF estimado de una venta de cripto con la escala progresiva real de la base del ahorro 2026 (19% hasta 6.000€, 21% hasta 50.000€, 23% hasta 200.000€, 27% hasta 300.000€, 30% en adelante — verificado contra dos fuentes independientes), teniendo en cuenta otras ganancias/pérdidas del ahorro del mismo ejercicio para el cálculo marginal correcto. Lógica verificada contra el ejemplo numérico ya publicado en `declarar-bitcoin-xrp-renta-espana.html` (209€ de impuesto sobre 1.100€ de base neta, coincide exacto). Pensada específicamente para cubrir el hueco que señalaba el rechazo de AdSense: "herramientas o servicios auténticos", ya que hasta ahora la web era 100% artículos de texto. Enlazada desde `categorias/fiscalidad.html`, el artículo de declaración de la renta, y el footer de `index.html`. Añadida a `sitemap.xml` (dispara el aviso automático a IndexNow/Bing).

**Estado de la indexación verificado el mismo día (21 sep según "última actualización" del informe, pero consultado el 28 sep)**: 73 páginas indexadas, 26 sin indexar. El número de indexadas ya supera las 52 URLs reales porque Google sigue contando también las variantes antiguas `.html` como entradas separadas (que ahora redirigen bien). De las 26 "sin indexar": 10 son esas mismas URLs `.html` con redirección correcta (no es un problema), 10 excluidas por `noindex` (6 de ellas intencionadas — las 5 páginas legales + `404.html`, llevan `<meta name="robots" content="noindex, follow">` a propósito desde el principio, práctica estándar), 1 "error de redirección" puntual (probable bache de red transitorio, mismo patrón que otros ya vistos), y solo 5 páginas genuinamente pendientes de indexar ("rastreada sin indexar" + "descubierta sin indexar"), con tendencia al alza. Conclusión: la indexación está prácticamente completa, no es ya un bloqueante real.

**Siguiente paso antes de reenviar la revisión de AdSense**: ya no depende de más código. Esperar varias semanas a que se acumule tráfico orgánico real (ahora que Analytics por fin funciona de verdad) antes de volver a solicitar la revisión. No reenviar solo porque se hayan corregido las causas técnicas — el factor de tráfico/interés genuino sigue pendiente y es el que de verdad decide la aprobación.

**No resolver esto solo con la corrección de fechas.** Aunque el fix de fechas es necesario y ya está hecho, **no se debe reenviar la web a revisión de inmediato**: con tráfico real todavía cercano a cero, es muy probable que Google la rechace otra vez por el mismo motivo. Recomendación: esperar semanas (no días) a que se acumule tráfico orgánico real (ayuda seguir con la indexación manual pendiente, ver lista más arriba, y considerar compartir la web en foros/redes de cripto en español de forma legítima — nunca comprar tráfico ni clics, es motivo de expulsión permanente de AdSense) antes de volver a solicitar la revisión.

Verificado al cierre: 0 fechas de "Publicado" anteriores a sep 2026 restantes, JSON-LD balanceado en los 16 archivos tocados (comprobación de llaves).

## Widget de precios en vivo en la portada (28 sep 2026)

Segunda herramienta real del sitio, mismo objetivo que la calculadora (cubrir "herramientas o servicios auténticos" del rechazo de AdSense). Primera versión: BTC/XRP en fila fija. A petición del usuario, rehecho como cinta deslizante (`price-ticker-wrap`/`price-ticker-track`, animación CSS `translateX` en bucle infinito duplicando el set de chips, se pausa al pasar el ratón, respeta `prefers-reduced-motion`) con el **top 10 real por capitalización de mercado** vía el endpoint `/coins/markets` de la API pública de CoinGecko (sin backend, sin API key), en **euros** (coherente con la calculadora de impuestos y el enfoque España/Europa del sitio). Refresco cada 60s actualizando el DOM in-place (no reconstruye la cinta, para no cortar la animación). Requirió añadir `api.coingecko.com` al `connect-src` del CSP — si no, se bloquea en silencio igual que pasó con Analytics/AdSense el mismo día.

## Ampliación a Ethereum: reposicionamiento del sitio (28-29 sep 2026)

El usuario pidió replantear el enfoque de la web: ya no solo Bitcoin y XRP, sino también Ethereum, por volumen de búsqueda real y para no depender de solo dos monedas. Decisión tomada (confirmada por el usuario vía pregunta directa): posicionamiento **"Bitcoin, Ethereum y XRP"** (las tres principales, sin diluir a "cripto en general"), con 3 artículos nuevos para arrancar la categoría.

**Cambios de posicionamiento site-wide** (afecta a las 59 páginas que ya existían):
- `title`, meta `description`, `og:title`, `og:description` y el `<h1>`/párrafo de la portada (`index.html`) actualizados de "Bitcoin y XRP" a "Bitcoin, Ethereum y XRP".
- El eslogan del footer ("Medio independiente en español especializado en Bitcoin y XRP...") actualizado en las 59 páginas con un `perl -i -pe` de reemplazo literal (verificado: 0 apariciones de la frase vieja, 59 de la nueva, sin mojibake).
- Enlace a la nueva categoría **Ethereum** añadido al menú de navegación y al footer de las 59 páginas existentes, en la posición Bitcoin → Ethereum → XRP y Ripple (coincide con el orden real de capitalización de mercado). Pill `Ξ Ethereum` añadida también en `index.html` y `404.html`.
- **Nota técnica importante para futuras ediciones masivas de este repo**: los ficheros HTML de este proyecto usan **finales de línea CRLF** (no LF), pese a que `file` a veces lo detecta mal y un `grep -c $'\r'` en este entorno bash puede dar 0 falsamente. Cualquier script Perl que use `\n` literal en un regex para casar el final de una línea debe usar `\r?\n` (y escribir `\r\n` al insertar contenido nuevo), o el regex no encontrará nada aunque el texto exista — pasó exactamente eso en esta sesión, diagnosticado comparando un `index()` literal (que sí encontraba el texto) contra la regex fallida, hasta inspeccionar los bytes uno a uno con Perl. El script final (`add_ethereum_nav.pl`, en el scratchpad de la sesión, no en el repo) se probó primero sobre copias de 5 archivos representativos (uno de cada profundidad de carpeta) y se verificó con `diff` contra el original que solo añadía las 2 líneas esperadas, antes de ejecutarlo sobre los 59 archivos reales.

**Categoría nueva**: `categorias/ethereum.html`, plantilla idéntica al resto, icono SVG propio (diamante, no el logo oficial de la Ethereum Foundation por marca registrada) en color `--accent-eth: #627eea` (azul-violeta oficial de Ethereum), clases CSS `.cat-badge-eth` y `.thumb-eth` añadidas junto a las del resto de categorías.

**3 artículos nuevos** (todos con fecha real `28 sep 2026`, ≥800 palabras, ≥4 FAQ, sección de fuentes con enlaces verificados, siguiendo la norma de fechas honestas ya establecida):
- `que-es-ethereum-como-funciona.html`: contratos inteligentes, la EVM, ETH como gas, la fusión a prueba de participación (15 sep 2022, verificado), tabla PoW vs. PoS, capas 2, y su tratamiento bajo MiCA (mismo trato que Bitcoin: criptoactivo descentralizado sin emisor, sin normas de emisión, pero los exchanges que lo ofrecen sí necesitan licencia).
- `como-comprar-ethereum-seguro.html`: guía de compra paralela a la de Bitcoin, con aviso específico sobre reservar ETH para pagar el gas de una futura retirada.
- `staking-ethereum-guia.html` (categoría Minería y Staking, no Ethereum, seguiendo la convención ya usada para el resto de contenido de staking del sitio): validadores, los 32 ETH del staking en solitario, staking delegado/líquido, slashing, y el cambio de la actualización Pectra (7 mayo 2025, saldo máximo efectivo de 32 a 2.048 ETH por validador) — todos los datos verificados con búsqueda web antes de escribir, ninguno inventado.

Enlaces cruzados bidireccionales añadidos: `es-posible-staking-xrp.html` ahora enlaza a `staking-ethereum-guia.html` en su primera mención textual de Ethereum. Tarjeta de `staking-ethereum-guia.html` añadida a `categorias/mineria-staking.html`.

Verificado al cierre: 0 llaves desbalanceadas en los ficheros tocados/creados, 0 mojibake, los 3 artículos nuevos por encima de 800 palabras (1037/875/893), `sitemap.xml` bien formado con 57 `<url>` (53 anteriores + 4 nuevas: categoría + 3 artículos), todas las URLs de fuentes citadas verificadas con `curl` antes de publicar.

**Pendiente, no bloqueante**: `CONTEXTO-IA-WEB.md` (el documento resumen para dar contexto a otra IA) todavía no se ha actualizado con la categoría Ethereum ni los 3 artículos nuevos — hacerlo la próxima vez que se edite ese fichero.

## Auditoría SEO completa siguiendo PROMPT-SEO-ADSENSE-BRUJULACRIPTO.md (29 sep 2026)

El usuario pidió una revisión completa aplicando todas las pautas SEO/AdSense acordadas a lo largo del proyecto. Auditoría automatizada real (no solo visual) sobre las 53 páginas de artículos+categorías y las 10 páginas raíz/legales, con scripts Perl guardados en el scratchpad de la sesión (no en el repo):

- **Validación JSON-LD con parser real** (`JSON::PP`, no solo comprobación de llaves): 161 bloques en todo el sitio, 0 mal formados. **Nota para el futuro**: al validar JSON ya decodificado como UTF-8 por el propio script, hay que leer el fichero en crudo (`<:raw`) y dejar que el parser JSON haga su propia decodificación UTF-8 — si se lee el fichero ya como `:encoding(UTF-8)` y se pasa el texto (ya Unicode) al parser, este intenta decodificarlo una segunda vez y falla con "malformed UTF-8 character" en cualquier tilde, un falso positivo que no indica ningún problema real del sitio.
- **Longitud de titles/meta descriptions/H1** contra las tablas exactas del prompt maestro (título 50-60 car., meta description 150-160, un solo H1 por página): 3 meta descriptions fuera de rango corregidas (artículo de Ethereum 178→157 car., portada 167→159, `legal/terminos-uso.html` 58→154, estaba muy por debajo del mínimo útil).
- **Palabras por artículo, nº de FAQ, enlaces internos contextuales, imágenes sin `alt`, múltiples/ningún H1, `canonical` ausente, `noindex` accidental**: 0 incidencias en todas estas categorías.
- **LatAm fuera de México y promesas de rentabilidad**: 0 apariciones reales (las únicas coincidencias de palabras como "sin riesgo" o "inversión segura" eran negaciones explícitas dentro de avisos de riesgo, no promesas).
- **Enlaces internos rotos** (artículo→artículo y artículo→categoría): 0.
- **Inconsistencia real encontrada y corregida**: `categorias/mineria-staking.html` seguía titulándose "Bitcoin y XRP" pese a tener ya un artículo de staking de Ethereum desde el día anterior. Título cambiado a "Minería y Staking Cripto 2026" (más genérico y ya no queda desactualizado si se añade contenido de otra red en el futuro).
- **Menciones de la identidad del sitio sin actualizar**: `sobre-nosotros.html`, `legal/disclaimer.html`, `404.html` seguían describiendo el sitio como "Bitcoin y XRP" en vez de "Bitcoin, Ethereum y XRP" — corregido.
- **Hueco de enlazado interno real**: la guía de compra de Ethereum no estaba enlazada desde `categorias/guias-principiantes.html`, pese a que las de Bitcoin y XRP sí lo estaban — tarjeta añadida.

**Hallazgo más importante de la auditoría — resuelto**: el prompt maestro (Fase 2) exige 150-300 palabras de texto introductorio propio en cada página de categoría, antes del listado de artículos, marcándolo explícitamente como riesgo de "contenido fino" para la revisión de AdSense. Las 12 categorías solo tenían una frase de ~30-45 palabras en la cabecera. Se escribió un párrafo introductorio nuevo (150-240 palabras, verificado con recuento real) para cada una de las 12 categorías, basado únicamente en hechos ya verificados en los propios artículos de cada sección (sin inventar datos, siguiendo la regla del prompt maestro) — por ejemplo, la introducción de Exchanges menciona que Binance perdió su vía de licencia MiCA en España en 2026 (hecho ya verificado en una ejecución anterior de `/actualizar-web`). Al insertar estos párrafos se detectaron y eliminaron 2 frases que quedaban duplicadas dentro de la misma página (`categorias/regulacion.html` tenía una sección "Por qué seguimos de cerca la regulación" al final que repetía casi literalmente la nueva intro; `categorias/guias-principiantes.html` tenía una frase de cierre que también se solapaba) — se conservó una sola versión de cada una.

Verificado al cierre: 24 bloques JSON-LD de las 12 categorías siguen siendo válidos tras la edición, 0 llaves desbalanceadas, 0 enlaces internos rotos, recuento de palabras real de cada intro entre 159 y 240.

## Cómo retomar esto en una sesión nueva

Simplemente pide a Claude que lea este fichero (`ESTADO-PROYECTO.md`) al empezar. Contiene todo el contexto necesario para seguir sin tener que reexplicar el proyecto desde cero.
