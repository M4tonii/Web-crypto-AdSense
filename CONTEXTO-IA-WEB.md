# Contexto completo de BrújulaCripto para IA

> Documento de referencia para que una IA (ChatGPT, Claude, Gemini, etc.) entienda completamente esta web y pueda ayudar a generar contenido, estrategia o prompts personalizados. No es una página de la web, es de uso interno. Generado: 16 sep 2026.

## 1. Identidad del proyecto

- **Nombre de marca**: BrújulaCripto
- **Dominio**: `labrujulacripto.com`
- **Titular**: Toni Caimari (persona física, sin sociedad registrada)
- **Qué es**: medio digital de noticias, guías y análisis sobre Bitcoin y XRP, en español, formato blog/web de contenido estático
- **Qué NO es**: no da asesoramiento financiero, fiscal ni legal personalizado; no vende productos ni servicios propios; no gestiona fondos de terceros
- **Tono editorial**: divulgativo, claro, sin sensacionalismo, sin promesas de rentabilidad, con avisos de riesgo constantes. Firma "Equipo Editorial de BrújulaCripto" (no se usa el nombre real del titular en los artículos, por decisión de privacidad)

## 2. Público objetivo y enfoque de mercado (IMPORTANTE — decisión estratégica del 16 sep 2026)

El enfoque de audiencia **cambió hoy** y es clave para cualquier prompt o estrategia de contenido futura:

- **Mercados prioritarios**: España, Europa (especialmente Alemania, Francia, Reino Unido, Suiza) y Estados Unidos (población hispanohablante)
- **Mercados descartados expresamente**: Latinoamérica (Argentina, Colombia, y contenido genérico "LatAm") — **excepción: México se mantiene** como único país latinoamericano cubierto
- **Motivo del cambio**: Europa y EE. UU. tienen un RPM de AdSense mucho más alto que Latinoamérica; el objetivo es maximizar ingresos publicitarios, no solo tráfico
- **Idioma**: 100% en español (no hay planes de traducir a inglés/francés/alemán en el corto plazo — se revisará en ~6 meses, marzo 2027, cuando haya facturación real que lo justifique)
- **Implicación práctica**: cualquier contenido nuevo, ejemplo, cifra de país o caso de uso debe orientarse a España/Europa/EE.UU., nunca a países latinoamericanos (salvo México)

## 3. Modelo de negocio

- **Monetización**: Google AdSense (pendiente de activar — se solicitará la cuenta cuando haya tráfico real y estable; los anuncios se retiraron a propósito del código hasta entonces)
- **Sin backend, sin ventas propias, sin suscripción de pago**
- **Plan de expansión**: el titular quiere llegar a tener 5 webs monetizadas con AdSense en total (BrújulaCripto es la primera). Estrategia ya decidida: una única cuenta de AdSense y de Google Analytics para las 5 webs (es una norma de Google, no se puede tener más de una cuenta de AdSense por persona)
- **Contacto**: formulario en la web (vía Web3Forms) + email `contacto@labrujulacripto.com`

## 4. Stack técnico

- **Sitio 100% estático**: HTML + CSS + JS puro, sin frameworks, sin build, sin base de datos
- **Hosting**: Cloudflare Workers (migrado desde Netlify en sep 2026)
- **Repositorio**: GitHub (`M4tonii/Web-crypto-AdSense`, rama `main`), con despliegue automático en cada `git push`
- **Analítica**: Google Analytics 4 (activo, respeta el banner de cookies — solo mide si el visitante acepta)
- **SEO técnico**: verificado en Google Search Console y Bing Webmaster Tools, sitemap.xml activo, datos estructurados Schema.org (Article, BreadcrumbList, FAQPage, Organization) en todo el contenido
- **Formulario de contacto**: Web3Forms (servicio externo gratuito, sin backend propio)
- **Tipografía**: Source Serif 4 (titulares) + Inter (cuerpo)
- **Paleta**: navy (`--primary`), naranja (`--accent-btc`), azul (`--accent-xrp`), teal (`--accent`)

## 5. Estructura fija del sitio

- Portada (`index.html`)
- 11 páginas de categoría (`categorias/`)
- Artículos individuales (`articulos/`)
- Páginas legales: aviso legal, política de privacidad, cookies, términos de uso, disclaimer de riesgo (`legal/`)
- Contacto (`contacto.html`)
- Sobre nosotros (`sobre-nosotros.html`)
- 404 personalizada

## 6. Las 11 categorías

1. **Bitcoin** — todo sobre BTC: qué es, precio, halving, cómo comprarlo, ETFs
2. **XRP y Ripple** — qué es XRP, caso SEC vs. Ripple, RLUSD, XRP Ledger
3. **Regulación** — MiCA, CLARITY Act y marco legal cripto en general
4. **Guías** — guías prácticas para principiantes (comprar, conceptos base, airdrops)
5. **Exchanges** — comparativas de plataformas de compraventa
6. **Wallets** — monederos, seguridad, wallets frías vs. calientes
7. **Fiscalidad** — impuestos país por país (España, EE. UU., Alemania, Reino Unido, Francia, Suiza, México)
8. **Trading** — análisis técnico, apalancamiento y futuros
9. **Memecoins** — qué son, cómo comprarlas, cómo evaluarlas, estafas (rug pull)
10. **Minería y Staking** — staking general, staking de XRP (que no existe de forma nativa)
11. **Glosario** — términos básicos explicados

## 7. Listado completo de artículos (34)

### Bitcoin
- **¿Qué es Bitcoin y cómo funciona? Guía completa 2026** (`que-es-bitcoin-como-funciona`) — Blockchain, minería, oferta limitada de 21 millones.
- **Cómo comprar Bitcoin por primera vez: guía paso a paso** (`como-comprar-bitcoin-primera-vez`) — Elegir exchange, verificar identidad, mover a monedero propio.
- **Precio de Bitcoin hoy: factores que lo mueven en 2026** (`precio-bitcoin-hoy-analisis`) — ETFs, política monetaria, halving, sentimiento de mercado (artículo evergreen, sin cifra de precio fija).
- **ETF de Bitcoin al contado: qué son y cómo invertir sin comprar BTC** (`etf-bitcoin-al-contado-que-son`) — Ventajas/desventajas frente a comprar BTC directo.
- **Halving de Bitcoin: qué es y cómo afecta al precio** (`halving-bitcoin-que-es`) — Reducción de recompensa cada 4 años.

### XRP y Ripple
- **¿Qué es XRP y para qué sirve? Guía completa de Ripple** (`que-es-xrp-guia-completa`) — Diferencias XRP/Ripple/XRP Ledger, pagos internacionales.
- **Caso SEC vs. Ripple: resumen completo y qué significa para XRP** (`caso-sec-ripple-resumen`) — Litigio, sanción de 125M$, efecto en cotización.
- **RLUSD: el stablecoin de Ripple explicado** (`rlusd-stablecoin-ripple-explicado`) — Nuevo stablecoin de Ripple, comparación con USDT/USDC.

### Regulación
- **CLARITY Act: la ley de estructura de mercado cripto de EE. UU. explicada** (`clarity-act-eeuu-explicado`) — Votación fallida en el Senado (15 sep 2026), reparto SEC/CFTC.
- **MiCA en España: qué significa para quien invierte en cripto** (`mica-espana-que-significa`) — Reglamento europeo, licencias CNMV.

### Guías
- **Qué son las stablecoins y cómo funcionan: guía USDT y USDC** (`que-son-las-stablecoins-guia`) — Tipos de stablecoins, USDT vs. USDC.
- **Cómo comprar XRP de forma segura: guía 2026** (`como-comprar-xrp-guia-segura`) — Exchanges, comisiones, error del destination tag.
- **Airdrops cripto: qué son, cómo conseguirlos y cómo evitar estafas** (`airdrops-cripto-como-conseguirlos`) — Cómo funcionan en 2026, señales de estafa.
- *(Cómo comprar Bitcoin por primera vez también aparece en esta categoría, ver arriba)*

### Exchanges
- **Bit2Me vs. Binance: comparativa completa 2026** (`bit2me-vs-binance-comparativa`) — Comisiones, seguridad, licencia MiCA.
- **Mejores exchanges de criptomonedas en Estados Unidos: guía 2026** (`mejores-exchanges-estados-unidos`) — Coinbase, Kraken, Gemini.

### Wallets
- **Mejores wallets para guardar Bitcoin y XRP en 2026** (`mejores-wallets-bitcoin-xrp`) — Hardware, software, exchange.
- **Wallet fría vs. caliente: Ledger vs. Trezor, cuál elegir en 2026** (`wallet-fria-vs-caliente-ledger-trezor`) — Comparativa de hardware wallets.
- **Cómo proteger tus criptomonedas de estafas y hackeos** (`como-proteger-criptomonedas-estafas`) — Phishing, checklist de seguridad.

### Fiscalidad (7 países)
- **España** (`declarar-bitcoin-xrp-renta-espana`) — Ganancias patrimoniales, modelo 721, IRPF.
- **Estados Unidos** (`impuestos-criptomonedas-estados-unidos`) — Formulario 1099-DA, Form 1040, IRS.
- **Alemania** (`impuestos-criptomonedas-alemania`) — Exención por tenencia >1 año, cambio propuesto para 2027.
- **Reino Unido** (`impuestos-criptomonedas-reino-unido`) — Capital Gains Tax, exención de £3.000, marco CARF 2026.
- **Francia** (`impuestos-criptomonedas-francia`) — Flat tax 31,4% (2026), exención de 305€.
- **Suiza** (`impuestos-criptomonedas-suiza`) — Ganancias de capital exentas, impuesto al patrimonio cantonal.
- **México** (`impuestos-criptomonedas-mexico`) — Tratamiento del SAT (único país latinoamericano que se mantiene).

### Trading
- **Análisis técnico básico para Bitcoin y XRP: indicadores clave** (`analisis-tecnico-basico-bitcoin-xrp`) — Medias móviles, RSI, soportes/resistencias.
- **Trading con apalancamiento (futuros) en cripto: cómo funciona y riesgos** (`trading-apalancamiento-futuros-cripto`) — Futuros perpetuos, liquidación.

### Memecoins
- **Qué son las memecoins y por qué han hecho ganar (y perder) tanto dinero** (`que-son-las-memecoins-como-funcionan`) — Fenómeno, casos reales.
- **Cómo comprar memecoins sin caer en una estafa: guía práctica** (`como-comprar-memecoins-sin-caer-en-estafas`) — Checklist antes de comprar.
- **Cómo evaluar una memecoin antes de invertir: señales de alerta** (`como-evaluar-memecoin-antes-invertir`) — Liquidez bloqueada, holders, "mindshare".
- **Qué es un rug pull: la estafa más común en memecoins, explicada** (`rug-pull-estafa-memecoins-explicada`) — Cómo funciona, cómo detectarlo.

### Minería y Staking
- **Qué es el staking y cómo funciona: guía para principiantes** (`que-es-staking-guia-principiantes`) — Proof of Stake, tipos de staking, riesgos.
- **¿Se puede hacer staking de XRP? Todo lo que debes saber** (`es-posible-staking-xrp`) — Por qué XRP Ledger no tiene staking nativo.

### Glosario
- **Glosario cripto: 50 términos que todo principiante debe conocer** (`glosario-cripto-terminos-basicos`) — Referencia de términos básicos.

## 8. Convenciones de contenido (para generar artículos nuevos coherentes)

- **Estructura de artículo**: introducción → 3-6 secciones con `<h2>` → callout de aviso (si aplica) → sección de Preguntas Frecuentes (2 preguntas mínimo) → caja de enlace a artículo relacionado (cta-box) → recuadro de autor
- **Longitud**: 7-11 minutos de lectura habitual (700-1300 palabras aprox.)
- **Cada artículo lleva**: `datePublished`/`dateModified`, meta description única, Open Graph, y 2-3 bloques de datos estructurados JSON-LD (Article + BreadcrumbList + FAQPage)
- **Enlaces internos**: cada artículo enlaza a 1-2 artículos relacionados ya existentes
- **Avisos legales constantes**: "esto no es asesoramiento financiero/fiscal", recomendación de consultar a un profesional, especialmente en fiscalidad y trading de riesgo
- **Sin bombo ni promesas de rentabilidad**: nunca se afirma que algo "va a subir" o es "una oportunidad segura"

## 9. Decisiones estratégicas ya tomadas (para no repetir preguntas ya resueltas)

- ❌ No se traduce la web a otros idiomas por ahora (revisar en ~6 meses)
- ❌ No se genera contenido enfocado a Latinoamérica (excepto México)
- ❌ No se usa el nombre real del titular en los artículos (solo "Equipo Editorial")
- ❌ No se monta AdSense todavía (esperar a tráfico real)
- ✅ Una sola cuenta de Google para AdSense/Analytics en las 5 webs futuras del titular
- ✅ La web debe seguir creciendo con más artículos, priorizando temas de alto volumen de búsqueda y alta interacción (evergreen + noticias de actualidad regulatoria/fiscal en los países objetivo)

## 10. Qué se espera de una IA que reciba este contexto

Con este documento, una IA debería poder:
- Proponer nuevos temas de artículo coherentes con el nicho (Bitcoin/XRP, público España/Europa/EE.UU.)
- Escribir contenido con el mismo tono, estructura y nivel de detalle que el resto de la web
- Sugerir estrategias de SEO, distribución o marketing alineadas con el modelo de negocio (AdSense, RPM alto, sin Latinoamérica)
- Entender qué categorías existen y en cuál encajaría cada idea nueva
- No proponer expansión a otros idiomas ni a Latinoamérica sin que se le pida explícitamente
