# Estado del proyecto BrújulaCripto

> Fichero de contexto para retomar el trabajo en una sesión nueva de Claude Code, en cualquier ordenador. No es una página de la web (no está enlazado desde ningún sitio ni aparece en el sitemap), es solo para uso interno del proyecto. Última actualización: 15 sep 2026.

## Qué es esto

Web de noticias, guías y análisis sobre Bitcoin y XRP en español, dirigida a España y Latinoamérica. Sitio estático (HTML/CSS/JS puro, sin backend, sin build). Titular real: Toni Caimari.

- **Dominio**: `labrujulacripto.com` (comprado en Namecheap, `brujulacripto.com` estaba cogido).
- **Repositorio**: `github.com/M4tonii/Web-crypto-AdSense`, rama `main`.
- **Hosting**: Netlify, conectado directamente al repositorio de GitHub. Cada `git push` a `main` publica solo, sin pasos manuales.
- **DNS**: nameservers de Netlify configurados en Namecheap. SSL (Let's Encrypt) ya emitido y activo.

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

## Pendiente (lo que hay que retomar)

1. ~~**Fotos con formato incorrecto**~~ ✅ Resuelto (15 sep 2026): de las 22 portadas, 11 llevaban extensión `.jpg` pero por dentro eran AVIF (2), WebP (6) o PNG (3). Se reconvirtieron todas a JPEG real con PowerShell + WIC (códecs nativos de Windows, sin necesidad de squoosh.app). Las 22 portadas son ahora JPEG real, verificado con `file *.jpg`. Copia de los 11 originales guardada fuera del repo (carpeta temporal de la sesión) por si hiciera falta recuperar alguno.
2. **Falta la foto del glosario** (`glosario-cripto-terminos-basicos.jpg`) — decisión consciente de dejarla sin foto por ahora.
3. **Correo de contacto**: parcialmente resuelto (15 sep 2026). El **formulario de la web** ya funciona de punta a punta — conectado a Netlify Forms con notificación por email a `contacto.labrujulacripto@gmail.com` (Gmail creada para el proyecto), probado en producción y confirmado que llega. Lo que **queda pendiente** es el reenvío del correo `contacto@labrujulacripto.com` (el que aparece en aviso legal/footer para quien escriba directo, sin pasar por el formulario) — hay que configurarlo en Namecheap (Domain List → `labrujulacripto.com` → Manage → Email Forwarding) hacia esa misma Gmail, y verificar el correo de confirmación que manda Namecheap.
4. ~~**Aviso "formulario no seguro" en Chrome**~~ ✅ Resuelto (15 sep 2026): se añadieron los `autocomplete` correctos a todos los campos de `contacto.html`.
5. **Autoría de los artículos**: pendiente de decidir si se deja "Equipo Editorial de BrújulaCripto" o se pone el nombre real de Toni Caimari en algunos artículos (fiscalidad/regulación). No urgente.
6. **Bybit**: hay una idea de artículo con enlace de referidos a Bybit, pausada porque el programa de "invita a un amigo" prohíbe expresamente usar el nombre de la marca en publicidad; hace falta confirmar con el programa de afiliados de Bybit (`affiliates.bybit.eu`) qué está permitido antes de escribirlo.
7. **Google Search Console y Bing Webmaster Tools**: todavía no se han dado de alta ni se ha enviado el sitemap. Mejor esperar a que el punto 4 esté resuelto del todo.
8. **Redes sociales**: el dato `sameAs` de los datos estructurados de la organización está vacío; añadir enlaces si en algún momento hay perfiles de BrújulaCripto en redes.

## Decisión: idiomas (inglés/francés)

Se planteó añadir selector de idioma (ES/EN/FR) para captar tráfico y RPM de AdSense más alto en EEUU/Francia. Decisión tomada (15 sep 2026): **de momento no**. Primero consolidar y optimizar la web en español (cerrar pendientes, crecer contenido, estabilizar tráfico y AdSense). Retomar la expansión a inglés (primero) y francés (después) **dentro de unos 6 meses (aprox. marzo 2027)**, cuando la facturación lo justifique. Cuando se retome: la opción recomendada es subcarpeta (`/en/`, `/fr/`) en el mismo dominio, no un dominio ni subdominio aparte — hereda autoridad SEO y es más fácil de mantener con un único AdSense/Search Console. Un simple widget de traducción automática (tipo Google Translate embebido) **no sirve** para SEO real: Google no indexa lo que traduce ese widget, así que no trae visitantes nuevos por búsquedas en otro idioma; hacen falta páginas HTML reales traducidas.

## Para el final (decisión ya tomada de dejarlo para el cierre)

- Crear la cuenta real de Google AdSense una vez la web esté publicada y estable.
- Con el `pub-XXXXXXXXXX` real y los IDs de cada unidad de anuncio, volver a montar los tres bloques de anuncios (raíl izquierdo, raíl derecho, in-content) en las 42 páginas.
- Crear `ads.txt` con el ID real.
- Conectar el banner de cookies a Google Consent Mode a la vez que se reactivan los anuncios.

## Cómo retomar esto en una sesión nueva

Simplemente pide a Claude que lea este fichero (`ESTADO-PROYECTO.md`) al empezar. Contiene todo el contexto necesario para seguir sin tener que reexplicar el proyecto desde cero.
