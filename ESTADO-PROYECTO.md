# Estado del proyecto BrújulaCripto

> Fichero de contexto para retomar el trabajo en una sesión nueva de Claude Code, en cualquier ordenador. No es una página de la web (no está enlazado desde ningún sitio ni aparece en el sitemap), es solo para uso interno del proyecto. Última actualización: 15 sep 2026.

## Qué es esto

Web de noticias, guías y análisis sobre Bitcoin y XRP en español, dirigida a España y Latinoamérica. Sitio estático (HTML/CSS/JS puro, sin backend, sin build). Titular real: Toni Caimari.

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
- **Estructura de página tipo**: cada artículo/categoría sigue una plantilla idéntica (header, nav con las 11 categorías, article-head, article-body, author-box, footer, cookie-banner). Al crear contenido nuevo, copiar la estructura de un artículo existente para no romper el patrón.
- **Categorías actuales** (en este orden en el menú): Bitcoin, XRP y Ripple, Regulación, Guías, Exchanges, Wallets, Fiscalidad, Trading, Memecoins, Minería y Staking, Glosario.

## Lo que ya está hecho

- Contenido: 24 artículos completos + 11 páginas de categoría + inicio + legal (5 páginas) + contacto + sobre nosotros + 404.
- SEO técnico: sitemap.xml, robots.txt, datos estructurados (Article, BreadcrumbList, FAQPage) en todo el contenido, Open Graph completo, favicon en todas las páginas.
- Legal: aviso legal, política de privacidad, cookies, términos de uso y disclaimer, sin placeholders, con Toni Caimari como titular (sin NIF ni domicilio, por decisión expresa).
- Formulario de contacto: conectado a Netlify Forms (15 sep 2026) — envío real por AJAX sin recargar página, con honeypot antispam, y notificación por email a `contacto.labrujulacripto@gmail.com` configurada y **probada en producción, funciona**. Formulario de newsletter: sigue sin backend real, con mensaje honesto en vez de fingir la suscripción.
- Anuncios de AdSense: **retirados a propósito** de las 42 páginas hasta tener una cuenta real (placeholder `ca-pub-XXXX` quitado). Se puede volver a montar el mismo esqueleto en cuanto haya datos reales.
- Banner de cookies: funciona a nivel de interfaz (recuerda la elección), pero **no está conectado todavía** a Google Consent Mode porque no hay anuncios activos que gobernar.
- Google Search Console y Bing Webmaster Tools: propiedad verificada, sitemap (37 URLs) enviado en ambos. Auditoría técnica SEO/rendimiento (15 sep 2026): 1854 enlaces internos comprobados sin rotos reales, 0 imágenes sin `alt`, sin títulos/descripciones duplicados, cada página con 1 solo `<h1>`, CSS/JS ligeros (17KB/5,6KB), fuentes con `display=swap`. Se encontraron y arreglaron 4 portadas sobredimensionadas (600-700KB cada una, sin comprimir) que pesaban 2,6MB combinadas — redimensionadas a 900px de ancho y recomprimidas a 354KB combinadas (-86%). Peso total actual de las 22 portadas: 1,9MB.
- **Google Analytics (GA4)** (15 sep 2026): propiedad creada (cuenta "Toni Caimari", propiedad "BrújulaCripto", ID de medición `G-NVBT1C202J`, misma Gmail personal que Search Console). Implementado en `js/main.js` conectado al banner de cookies existente: solo se carga si el visitante acepta (no se activa si rechaza o no ha decidido, para cumplir la normativa de cookies). Funciona en las 43 páginas, incluidas legal/404 que no muestran el banner pero si el visitante ya había aceptado antes en otra página, igualmente se carga ahí. Probado en producción con el informe de Tiempo real: **funciona**, confirmado por el usuario.
- **PageSpeed Insights / Lighthouse** (15 sep 2026), medido en producción sobre `https://labrujulacripto.com/`: Accesibilidad 91→93/100, Prácticas recomendadas 96→100/100 (móvil y ordenador), SEO 100/100. Arreglos de jerarquía de encabezados (ver commit `c175059`): author-box de artículos h4→h3, footer h5→`<p class="footer-heading">` (deja de contar en la jerarquía, evita saltos en cualquier tipo de página), añadido `<h2>Artículos</h2>` en las 11 categorías. Enlaces dentro de texto de artículo/callout/autor/faq con subrayado (antes solo color). **Importante — no repetir**: se probó cargar Google Fonts de forma asíncrona (preload + `media=print` swap) para reducir el bloqueo de renderizado; **empeoró el rendimiento real** (LCP de 3.5s a 4.3s en móvil) porque el `<h1>` usa la fuente personalizada y el intercambio tardío de fuente retrasa el repintado del elemento que cuenta para LCP. Revertido (commit `5d84466`), fuentes siguen cargando de forma síncrona/bloqueante a propósito. Pendiente de más exprimido de rendimiento si se quiere en el futuro: 483-977 KiB de ahorro posible en imágenes sirviendo WebP/AVIF con `<picture>` además del JPEG (más trabajo, no hecho).

## Pendiente (lo que hay que retomar)

1. ~~**Fotos con formato incorrecto**~~ ✅ Resuelto (15 sep 2026): de las 22 portadas, 11 llevaban extensión `.jpg` pero por dentro eran AVIF (2), WebP (6) o PNG (3). Se reconvirtieron todas a JPEG real con PowerShell + WIC (códecs nativos de Windows, sin necesidad de squoosh.app). Las 22 portadas son ahora JPEG real, verificado con `file *.jpg`. Copia de los 11 originales guardada fuera del repo (carpeta temporal de la sesión) por si hiciera falta recuperar alguno.
2. ~~**Falta la foto del glosario**~~ ✅ Decisión definitiva (15 sep 2026): se queda sin foto, con el fondo de color y el emoji 📖 de respaldo — al usuario le gusta así. No tocar.
3. ~~**Correo de contacto**~~ ✅ Resuelto (15 sep 2026): formulario de la web conectado a Netlify Forms, con notificación a `contacto.labrujulacripto@gmail.com`, **probado en producción por el usuario y confirmado que funciona**. (Queda sin configurar el reenvío en Namecheap de `contacto@labrujulacripto.com` —el correo que aparece en aviso legal/footer para quien escribe directo sin pasar por el formulario— pero no es bloqueante; retomar solo si se quiere cerrar del todo.)
4. ~~**Aviso "formulario no seguro" en Chrome**~~ ✅ Resuelto (15 sep 2026): se añadieron los `autocomplete` correctos a todos los campos de `contacto.html`.
5. ~~**Autoría de los artículos**~~ ✅ Decisión definitiva (15 sep 2026): se queda "Equipo Editorial de BrújulaCripto" en los 23 artículos, sin cambios. Motivo: protege la privacidad del usuario (coherente con no poner NIF/domicilio en el aviso legal) y es válido para Google; el nombre real no se usa en ningún artículo.
6. ~~**Google Search Console y Bing Webmaster Tools**~~ ✅ Resuelto (15 sep 2026): propiedad `https://labrujulacripto.com/` verificada en Search Console con etiqueta `google-site-verification` (metaetiqueta añadida al `<head>` de `index.html`), sitemap.xml enviado (37 URLs). Bing Webmaster Tools verificado e importado directamente desde Google Search Console (sitio + sitemap en un solo paso). Cuenta usada: Gmail personal del usuario. El sitemap dio "No se ha podido obtener" las primeras horas en Google (fallo temporal normal en dominios recién verificados, confirmado técnicamente sano con `curl`/XML válido) — **se resolvió solo en menos de 24h**, ambos (Google y Bing) muestran ahora estado correcto/procesado.
7. **Redes sociales**: el dato `sameAs` de los datos estructurados de la organización está vacío; añadir enlaces si en algún momento hay perfiles de BrújulaCripto en redes.

## Decisión: cuentas de Google para monetización (pensando en 5 webs futuras)

El usuario quiere llegar a tener 5 webs monetizadas con AdSense. Decisión tomada (15 sep 2026): **una sola cuenta de Google (la personal del usuario) para AdSense y Search Console de las 5 webs**, no una cuenta distinta por web — es literalmente una norma de Google (varias cuentas de AdSense de la misma persona = riesgo de suspensión de todas). El saldo, el pago y el umbral mínimo de AdSense son compartidos entre todas las webs que se añadan a esa cuenta; hay un informe por sitio dentro del mismo panel. Las Gmail específicas de cada proyecto (como `contacto.labrujulacripto@gmail.com`) son independientes de esto y siguen sirviendo solo para el correo de contacto de lectores de cada web — no hay problema en tener una por proyecto.

**Descartado (15 sep 2026)**: la idea de un artículo con enlace de referidos a Bybit se elimina de la lista — no se va a hacer, el programa de afiliados de Bybit prohíbe usar el nombre de la marca en publicidad y no vale la pena seguir dándole vueltas.

## Decisión: idiomas (inglés/francés)

Se planteó añadir selector de idioma (ES/EN/FR) para captar tráfico y RPM de AdSense más alto en EEUU/Francia. Decisión tomada (15 sep 2026): **de momento no**. Primero consolidar y optimizar la web en español (cerrar pendientes, crecer contenido, estabilizar tráfico y AdSense). Retomar la expansión a inglés (primero) y francés (después) **dentro de unos 6 meses (aprox. marzo 2027)**, cuando la facturación lo justifique. Cuando se retome: la opción recomendada es subcarpeta (`/en/`, `/fr/`) en el mismo dominio, no un dominio ni subdominio aparte — hereda autoridad SEO y es más fácil de mantener con un único AdSense/Search Console. Un simple widget de traducción automática (tipo Google Translate embebido) **no sirve** para SEO real: Google no indexa lo que traduce ese widget, así que no trae visitantes nuevos por búsquedas en otro idioma; hacen falta páginas HTML reales traducidas.

## Para el final (decisión ya tomada de dejarlo para el cierre)

- Crear la cuenta real de Google AdSense una vez la web esté publicada y estable.
- Con el `pub-XXXXXXXXXX` real y los IDs de cada unidad de anuncio, volver a montar los tres bloques de anuncios (raíl izquierdo, raíl derecho, in-content) en las 42 páginas.
- Crear `ads.txt` con el ID real.
- Conectar el banner de cookies a Google Consent Mode a la vez que se reactivan los anuncios.

## Cómo retomar esto en una sesión nueva

Simplemente pide a Claude que lea este fichero (`ESTADO-PROYECTO.md`) al empezar. Contiene todo el contexto necesario para seguir sin tener que reexplicar el proyecto desde cero.
