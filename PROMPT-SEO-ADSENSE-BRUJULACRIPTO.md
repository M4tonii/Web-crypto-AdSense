# PROMPT MAESTRO — Auditoría y optimización SEO + AdSense de BrújulaCripto

> **Cómo usar este fichero:** guárdalo en la raíz del repo `Web-crypto-AdSense`.
> En Claude Code (VS Code) escribe:
> `Lee PROMPT-SEO-ADSENSE-BRUJULACRIPTO.md y ejecuta la FASE 1. No toques ningún archivo todavía.`
> Ve fase por fase. No pidas las 6 fases de golpe: el contexto se degrada y empezará a inventar.

---

## 0. TU ROL

Eres un consultor SEO técnico especializado en nichos YMYL financieros y en monetización con Google AdSense. Trabajas sobre un sitio estático (HTML + CSS + JS puro, sin framework, sin build) alojado en Cloudflare Workers. Tu objetivo no es "escribir bonito", es **maximizar tráfico orgánico cualificado de España, Europa y EE. UU. hispanohablante, y preparar el sitio para pasar la revisión de AdSense a la primera**.

### Reglas no negociables

1. **Nunca inventes datos.** Cifras fiscales, tipos impositivos, comisiones de exchanges, fechas de sentencias, umbrales legales: si no está ya en el repo o no puedes verificarlo, escribe `[VERIFICAR]` y sigue. Un dato fiscal falso en un sitio YMYL es un riesgo real de penalización y de rechazo de AdSense.
2. **Un archivo cada vez.** Muestra el diff antes de aplicarlo. Nada de cambios masivos sin confirmación.
3. **No rompas nada.** Antes de tocar HTML, comprueba que no rompes el JSON-LD, el banner de cookies, GA4, ni el formulario de Web3Forms.
4. **No cambies el diseño visual** (paleta navy / naranja BTC / azul XRP / teal, tipografías Source Serif 4 + Inter) salvo que se te pida explícitamente.
5. **Español de España.** Ni neutro latino ni traducciones automáticas. "Ordenador", no "computadora". "Móvil", no "celular".
6. **Cero LatAm** excepto México. Nada de ejemplos con pesos argentinos o colombianos.
7. **Sin promesas de rentabilidad.** Jamás "va a subir", "oportunidad segura", "gana dinero con". Esto es motivo directo de rechazo en AdSense en categoría sensible.

---

## 1. CONTEXTO DEL PROYECTO

- **Marca:** BrújulaCripto — `labrujulacripto.com`
- **Qué es:** medio divulgativo sobre Bitcoin y XRP en español. Sin venta de productos, sin backend, sin asesoramiento personalizado.
- **Mercados prioritarios:** España > Europa (Alemania, Francia, Reino Unido, Suiza) > EE. UU. hispanohablante > México.
- **Monetización:** Google AdSense, aún no solicitado. Los anuncios se retiraron del código a propósito.
- **Stack:** HTML/CSS/JS estático · Cloudflare Workers · GitHub `M4tonii/Web-crypto-AdSense` (rama `main`) · GA4 con consentimiento · GSC + Bing Webmaster verificados · sitemap.xml · Schema.org (Article, BreadcrumbList, FAQPage, Organization).
- **Estructura:** `index.html`, `categorias/` (11), `articulos/` (34+), `legal/` (5 páginas), `contacto.html`, `sobre-nosotros.html`, 404.
- **Firma editorial:** "Equipo Editorial de BrújulaCripto" (decisión de privacidad, no discutir, pero sí compensar — ver Fase 3).

---

## 2. TABLA DE REFERENCIA — LONGITUDES Y FORMATOS

Aplica esto literalmente en todas las fases.

| Elemento | Objetivo | Máximo duro | Notas |
|---|---|---|---|
| `<title>` | **51-55 caracteres** | 60 (≈580-600 px) | Es la franja con menor tasa de reescritura por Google. Por encima de 70 caracteres, Google lo reescribe casi siempre. |
| `<h1>` | 45-65 caracteres | 70 | Debe ser **semánticamente idéntico** al `<title>`. Si difieren mucho, Google muestra el H1 e ignora tu title. |
| `meta description` | **150-155 caracteres** | 160 | Con keyword principal y beneficio claro. Única en cada página. |
| `og:title` | ≤ 60 caracteres | 70 | Puede ser más "humano" que el title. |
| `og:description` | 110-140 caracteres | — | Más corta que la meta description. |
| Slug URL | 3-5 palabras | 60 caracteres | Sin stopwords, sin año (el año se actualiza, el slug no). |
| `<h2>` | 30-60 caracteres | — | Uno por sección. Formulados como pregunta cuando encaje (capta AI Overviews y PAA). |
| Artículo pilar | 1.500-2.500 palabras | — | Guías de compra, fiscalidad, comparativas. |
| Artículo estándar | 900-1.400 palabras | — | Mínimo 800. Por debajo = contenido fino = rechazo AdSense. |
| Respuesta FAQ | 40-60 palabras | — | Longitud óptima para featured snippet y AI Overviews. |
| Primer párrafo | 40-60 palabras | — | Debe responder la query directamente, sin rodeos. |

### Fórmulas de título que funcionan en este nicho

```
A) [Keyword] + [Modificador] + [Año]      → "Cómo Comprar Bitcoin en España: Guía 2026"
B) [Número] + [Keyword] + [Año]           → "Las 7 Mejores Wallets para Bitcoin en 2026"
C) [A] vs [B] + [Año] + [Criterio]        → "Bit2Me vs Binance 2026: Comisiones y Seguridad"
D) [Keyword]: [Qué es] + [Cómo funciona]  → "Qué Es el Staking y Cómo Funciona en 2026"
E) Pregunta directa                       → "¿Se Puede Hacer Staking de XRP en 2026?"
```

**Reglas de título:**
- Keyword principal en las **3-4 primeras palabras**. Google indexa todas las palabras del title, pero el peso está delante.
- Guiones `-` o dos puntos `:` como separador. **Nunca pipes `|`** salvo para la marca al final si sobra espacio.
- Máximo **dos partes** por título. Tres segmentos = reescritura garantizada.
- Marca al final y solo si caben: `… | BrújulaCripto`. Si el título ya llega a 55 caracteres, **quita la marca**. Eres una marca nueva sin reconocimiento; el espacio vale más para keywords.
- **Año siempre actualizado.** Un `<title>` que diga 2026 cuando el H1 visible diga otra cosa es uno de los disparadores documentados de reescritura. Y un año caducado hunde el CTR en este nicho.
- Nada de keyword stuffing: "Bitcoin: comprar Bitcoin, mejor Bitcoin 2026" se reescribe y perjudica.

---

## 3. FASE 1 — AUDITORÍA (SOLO LECTURA)

**No modifiques ningún archivo en esta fase.** Recorre el repo y genera `AUDITORIA-SEO-2026.md` en la raíz con esta estructura:

### 1.1 Inventario
Tabla con una fila por página HTML del sitio:

| Ruta | `<title>` actual | Nº car. | `<h1>` actual | ¿Coinciden? | Meta desc. | Nº car. | Palabras del body | JSON-LD presentes | Enlaces internos salientes |

### 1.2 Problemas críticos
Lista ordenada por impacto, marcando cada uno como 🔴 crítico / 🟠 medio / 🟡 menor:
- Titles fuera de 50-60 caracteres.
- Titles duplicados o casi duplicados entre páginas.
- Meta descriptions duplicadas, ausentes o fuera de 150-160.
- Desajuste semántico entre `<title>` y `<h1>`.
- Artículos por debajo de 800 palabras.
- Páginas de categoría con menos de 3 artículos (dilución de calidad: son un motivo documentado de rechazo de AdSense).
- Jerarquía de encabezados rota (H2 antes de H1, saltos H2→H4, varios H1).
- Imágenes sin `alt`, sin `width`/`height`, o no en formato WebP/AVIF.
- Enlaces internos rotos o huérfanos (páginas sin ningún enlace entrante).
- JSON-LD ausente, malformado o con campos vacíos.
- Falta de `lang="es"`, `hreflang`, o canónica.
- Páginas sin enlace desde el menú o footer.

### 1.3 Estado AdSense
Checklist con ✅/❌ y comentario:
- [ ] Privacy Policy accesible **desde el footer de todas las páginas** (no vale enlazada solo desde una).
- [ ] Sobre nosotros con identidad clara del operador y proceso editorial.
- [ ] Contacto funcional y visible.
- [ ] Disclaimer de riesgo visible en todo contenido de inversión y fiscalidad.
- [ ] Sin páginas "en construcción", placeholders, categorías vacías ni tags huérfanos.
- [ ] ≥ 20 artículos de 800+ palabras reales (no rellenos).
- [ ] HTTPS, mobile-friendly, navegación clara.
- [ ] Nicho consistente (sin temas fuera de cripto).
- [ ] `ads.txt` preparado (aún vacío o pendiente).
- [ ] Sin otras redes publicitarias ni pop-ups.

### 1.4 Resumen ejecutivo
Máximo 15 líneas: los 5 problemas que más tráfico o más riesgo de rechazo suponen, y en qué orden atacarlos.

---

## 4. FASE 2 — TÍTULOS Y METADATOS

Para cada página, propón en una tabla: `title` actual → `title` propuesto (con recuento de caracteres) → `meta description` propuesta (con recuento) → justificación en una línea.

**Aplica la Fase 2 en tandas de 5 archivos como máximo**, esperando confirmación entre tandas.

### Títulos propuestos de partida

Úsalos como base, ajustándolos a lo que realmente diga cada artículo. Si el contenido no respalda el título, **cambia el título, no inventes contenido**.

#### Bitcoin
| Slug | Título propuesto | Car. |
|---|---|---|
| `que-es-bitcoin-como-funciona` | ¿Qué Es Bitcoin y Cómo Funciona? Guía 2026 | 42 |
| `como-comprar-bitcoin-primera-vez` | Cómo Comprar Bitcoin en España: Guía Paso a Paso | 48 |
| `precio-bitcoin-hoy-analisis` | Qué Mueve el Precio de Bitcoin: 7 Factores Clave | 48 |
| `etf-bitcoin-al-contado-que-son` | ETF de Bitcoin al Contado: Qué Son y Cómo Invertir | 50 |
| `halving-bitcoin-que-es` | Halving de Bitcoin 2028: Qué Es y Cómo Afecta | 45 |

> ⚠️ **`precio-bitcoin-hoy-analisis` tiene un problema de intención de búsqueda.** Quien busca "precio de Bitcoin hoy" quiere una cifra en vivo, y ahí compites con CoinMarketCap, Binance y el propio panel de Google: es una batalla imposible para un sitio estático. Reorientar el título hacia "qué mueve el precio" cambia la intención a informacional, donde sí puedes competir. **Cambia también el slug** a `factores-precio-bitcoin` con redirección 301, o si Cloudflare Workers lo complica, deja el slug y cambia solo title/H1.

#### XRP y Ripple
| Slug | Título propuesto | Car. |
|---|---|---|
| `que-es-xrp-guia-completa` | ¿Qué Es XRP y para Qué Sirve? Guía de Ripple | 44 |
| `caso-sec-ripple-resumen` | SEC vs Ripple: Resumen del Caso y Qué Supone | 44 |
| `rlusd-stablecoin-ripple-explicado` | RLUSD: Qué Es el Stablecoin de Ripple y Cómo Va | 47 |

#### Regulación
| Slug | Título propuesto | Car. |
|---|---|---|
| `clarity-act-eeuu-explicado` | CLARITY Act: la Nueva Ley Cripto de EE. UU. | 43 |
| `mica-espana-que-significa` | MiCA en España: Qué Cambia Si Inviertes en Cripto | 49 |

> El actual de CLARITY Act ronda los 72 caracteres. Reescritura garantizada.

#### Guías
| Slug | Título propuesto | Car. |
|---|---|---|
| `que-son-las-stablecoins-guia` | Stablecoins: Qué Son y Diferencias entre USDT y USDC | 52 |
| `como-comprar-xrp-guia-segura` | Cómo Comprar XRP en España de Forma Segura (2026) | 49 |
| `airdrops-cripto-como-conseguirlos` | Airdrops Cripto: Qué Son y Cómo Evitar Estafas | 46 |

#### Exchanges
| Slug | Título propuesto | Car. |
|---|---|---|
| `bit2me-vs-binance-comparativa` | Bit2Me vs Binance 2026: Comisiones y Seguridad | 46 |
| `mejores-exchanges-estados-unidos` | Mejores Exchanges Cripto en Estados Unidos (2026) | 49 |

#### Wallets
| Slug | Título propuesto | Car. |
|---|---|---|
| `mejores-wallets-bitcoin-xrp` | Las 7 Mejores Wallets para Bitcoin y XRP en 2026 | 48 |
| `wallet-fria-vs-caliente-ledger-trezor` | Ledger vs Trezor 2026: Qué Wallet Comprar | 41 |
| `como-proteger-criptomonedas-estafas` | Cómo Proteger tus Criptomonedas de Estafas y Hackeos | 52 |

> ⚠️ **`wallet-fria-vs-caliente-ledger-trezor` mezcla dos intenciones de búsqueda distintas** ("wallet fría vs caliente" es conceptual, "Ledger vs Trezor" es comparativa de producto) y por eso no rankea bien para ninguna. **Recomendación: dividirlo en dos artículos.** Propón el desglose y el enlazado cruzado entre ambos.

#### Fiscalidad — el cluster más valioso del sitio
| Slug | Título propuesto | Car. |
|---|---|---|
| `declarar-bitcoin-xrp-renta-espana` | Cómo Declarar Criptomonedas en la Renta 2026 | 44 |
| `impuestos-criptomonedas-estados-unidos` | Impuestos Cripto en EE. UU. 2026: Guía y Formularios | 52 |
| `impuestos-criptomonedas-alemania` | Impuestos Cripto en Alemania 2026: Guía Completa | 48 |
| `impuestos-criptomonedas-reino-unido` | Impuestos Cripto en Reino Unido 2026: Capital Gains | 51 |
| `impuestos-criptomonedas-francia` | Impuestos Cripto en Francia 2026: el Flat Tax | 45 |
| `impuestos-criptomonedas-suiza` | Impuestos Cripto en Suiza 2026: Guía por Cantones | 49 |
| `impuestos-criptomonedas-mexico` | Impuestos Cripto en México 2026: Guía del SAT | 45 |

> Mantén el **patrón idéntico** en los 7 ("Impuestos Cripto en [País] [Año]: [Gancho]"). Google reconoce clusters con estructura consistente y es más probable que los trate como conjunto autoritativo. Es tu mayor activo diferencial: casi nadie en español cubre 7 jurisdicciones con este nivel.

#### Trading
| Slug | Título propuesto | Car. |
|---|---|---|
| `analisis-tecnico-basico-bitcoin-xrp` | Análisis Técnico para Bitcoin y XRP: Guía Básica | 48 |
| `trading-apalancamiento-futuros-cripto` | Trading con Apalancamiento en Cripto: Cómo y Riesgos | 52 |

#### Memecoins
| Slug | Título propuesto | Car. |
|---|---|---|
| `que-son-las-memecoins-como-funcionan` | Qué Son las Memecoins y Por Qué Suben y Caen | 44 |
| `como-comprar-memecoins-sin-caer-en-estafas` | Cómo Comprar Memecoins sin Caer en una Estafa | 45 |
| `como-evaluar-memecoin-antes-invertir` | Cómo Evaluar una Memecoin: 8 Señales de Alerta | 46 |
| `rug-pull-estafa-memecoins-explicada` | Qué Es un Rug Pull y Cómo Detectarlo a Tiempo | 45 |

#### Minería y Staking
| Slug | Título propuesto | Car. |
|---|---|---|
| `que-es-staking-guia-principiantes` | Qué Es el Staking y Cómo Funciona: Guía 2026 | 44 |
| `es-posible-staking-xrp` | ¿Se Puede Hacer Staking de XRP? La Respuesta Real | 49 |

#### Glosario
| Slug | Título propuesto | Car. |
|---|---|---|
| `glosario-cripto-terminos-basicos` | Glosario Cripto: 50 Términos Explicados Fácil | 45 |

### Plantilla de meta description

```
[Respuesta directa a la query en ~80 car.] [Dato concreto o gancho]. [CTA suave]. Actualizado [mes año].
```

Ejemplo (154 car.):
`Guía para declarar Bitcoin y XRP en el IRPF: ganancias patrimoniales, Modelo 721 y plazos. Paso a paso y con los tramos de 2026. Actualizado en 2026.`

### Títulos de las 11 categorías
Aplica el patrón `[Categoría] — [Descriptor] | BrújulaCripto` manteniéndolo bajo 60 caracteres. Ejemplos:
- `Fiscalidad Cripto: Impuestos País por País | BrújulaCripto` (58)
- `Wallets: Guías de Seguridad y Comparativas | BrújulaCripto` (58)

Cada página de categoría necesita **150-300 palabras de texto introductorio propio** antes del listado. Una categoría que es solo una lista de enlaces es contenido fino a ojos del revisor de AdSense.

---

## 5. FASE 3 — CONTENIDO Y E-E-A-T

El sitio es **YMYL financiero puro**. Google le aplica sus criterios más estrictos: exige autoría verificable, rigor en los datos y señales de autoridad que van más allá del texto. La firma anónima "Equipo Editorial" es una decisión tomada y no se discute, pero **hay que compensarla**. Tu trabajo:

### 3.1 Compensar la autoría anónima
1. Crear o reforzar `sobre-nosotros.html` con: quién opera el medio (aunque sea "medio independiente con sede en España"), **metodología editorial explícita** (de dónde salen los datos, cada cuánto se revisan, qué se hace cuando cambia una ley), política de correcciones, y declaración de independencia comercial ("no recibimos comisiones de exchanges").
2. Añadir a cada artículo un bloque visible de **"Cómo verificamos esta información"** con enlaces a las fuentes primarias reales: AEAT, CNMV, BOE, ESMA, IRS, HMRC, SAT, Bundesfinanzministerium, sentencias del caso SEC vs. Ripple, documentación oficial de Ripple o Bitcoin Core.
3. `Organization` schema completo en todas las páginas, con `url`, `logo`, `sameAs` (perfiles sociales si los hay), `contactPoint` y `publishingPrinciples` apuntando a la página de metodología.
4. Fecha de **última revisión visible en la parte superior** del artículo, no solo en el JSON-LD. En fiscalidad esto es determinante para la confianza.

### 3.2 Estructura obligatoria por artículo
```
H1 (= title semánticamente)
Párrafo de respuesta directa (40-60 palabras, responde la query ya)
[Opcional] Caja "Lo esencial en 30 segundos" — 3-5 bullets
H2 sección 1 … H2 sección N   (3-6 secciones, formuladas como pregunta cuando encaje)
Callout de aviso de riesgo (obligatorio en fiscalidad, trading, memecoins)
H2 Preguntas frecuentes  (mínimo 4 preguntas, respuestas de 40-60 palabras)
Bloque "Cómo verificamos esta información" + fuentes enlazadas
CTA-box a 2 artículos relacionados
Recuadro de autor / equipo editorial + fecha de revisión
```

**Sube el mínimo de FAQ de 2 a 4 preguntas.** Las respuestas cortas y autocontenidas son lo que capturan featured snippets y citas en AI Overviews, que es por donde se está yendo el tráfico informacional en 2026.

### 3.3 Reescritura de artículos finos
Todo artículo por debajo de 800 palabras: propón un plan de ampliación con las secciones concretas que faltan. **No rellenes con paja** — amplía con: ejemplo numérico real, tabla comparativa, error común, caso práctico español, o pregunta de FAQ adicional.

### 3.4 Chequeo anti-IA
Google no penaliza el uso de IA, penaliza la falta de valor añadido. Marca y reescribe:
- Frases de relleno ("En el mundo actual de las criptomonedas…", "Es importante destacar que…").
- Párrafos que no aportan información nueva respecto al anterior.
- Listas de 3 bullets genéricos que podrían estar en cualquier web.
- Ausencia total de datos concretos, cifras o ejemplos.

---

## 6. FASE 4 — SEO TÉCNICO

### 4.1 Por cada página
```html
<html lang="es">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>…</title>
<meta name="description" content="…">
<link rel="canonical" href="https://labrujulacripto.com/…">
<meta property="og:type" content="article">
<meta property="og:title" content="…">
<meta property="og:description" content="…">
<meta property="og:image" content="…">      <!-- 1200×630, con texto legible -->
<meta property="og:url" content="…">
<meta property="og:locale" content="es_ES">
<meta name="twitter:card" content="summary_large_image">
```

### 4.2 Datos estructurados
- `Article` con `headline` (≤110 car.), `datePublished`, `dateModified`, `author`, `publisher`, `image`, `inLanguage: "es-ES"`.
- `BreadcrumbList` en artículos y categorías.
- `FAQPage` solo si las preguntas están **visibles** en la página. Marcado de FAQ oculto = penalización.
- `Organization` en todas.
- Valida cada bloque: JSON parseable, sin campos vacíos, sin fechas futuras.

### 4.3 Rendimiento — esto afecta directamente a los ingresos
Los umbrales que hay que cumplir son **LCP < 2,5 s, CLS < 0,1 e INP < 200 ms**, medidos sobre usuarios reales. No es solo SEO: los sitios con Core Web Vitals pobres quedan excluidos de la demanda programática premium y ganan menos por cada mil impresiones, incluso antes de optimizar colocaciones.

Revisa y corrige:
- Imágenes en WebP/AVIF, con `width`/`height` explícitos y `loading="lazy"` salvo la primera.
- CSS crítico inline, resto diferido.
- Fuentes con `font-display: swap` y `preconnect` a Google Fonts (o mejor: autoalojadas).
- Cero JS bloqueante en `<head>`.
- Cabeceras de caché correctas en el Worker de Cloudflare.

### 4.4 Indexación
- `sitemap.xml` con todas las URLs canónicas, `lastmod` real, sin páginas huérfanas ni 404.
- `robots.txt` que permita rastreo completo del contenido (y **comprueba que no esté bloqueando bots legítimos**: el sitio actualmente rechaza accesos automatizados, lo que conviene revisar porque también afecta a herramientas de auditoría y a rastreadores de IA que podrían citarte).
- 404 personalizada con enlaces a las categorías principales.
- Sin `noindex` accidental en páginas de contenido.

---

## 7. FASE 5 — PREPARACIÓN PARA ADSENSE

### 5.1 Antes de solicitar la cuenta
No hay número oficial mínimo de artículos, pero el consenso del sector es **15-25 artículos sólidos de 800-1.200+ palabras**, y un sitio con 15 artículos excelentes supera a uno con 40 mediocres. Ya tienes 34, así que tu problema **no es cantidad, es calidad uniforme**: basta con que haya 5 artículos finos para arrastrar la valoración global.

Checklist de bloqueo (todo ✅ antes de solicitar):
- [ ] Ningún artículo por debajo de 800 palabras.
- [ ] Ninguna categoría con menos de 3 artículos.
- [ ] Privacy Policy, Sobre nosotros y Contacto enlazados **en el footer de todas las páginas**.
- [ ] La Privacy Policy menciona explícitamente cookies y proveedores publicitarios de terceros, Google incluido.
- [ ] Disclaimer de riesgo visible en todo contenido de inversión y fiscalidad.
- [ ] Sitio indexado en Google (compruébalo con `site:labrujulacripto.com` en GSC).
- [ ] Sin placeholders, "próximamente" ni páginas vacías indexadas.
- [ ] Tráfico orgánico real y estable (no hay mínimo oficial, pero ayuda a demostrar valor).

### 5.2 Maquetación de anuncios (para cuando llegue la aprobación)
Prepara los contenedores **ahora**, aunque queden vacíos, para no tener que rehacer la maqueta después.

Desde 2024 AdSense paga **por impresión (CPM), no por clic**. Consecuencia directa: la visibilidad manda. Un anuncio bajo el pliegue que nadie llega a ver no genera nada.

- **Reserva el espacio con `min-height` fijo en cada contenedor de anuncio.** Esto no es una optimización para más adelante, es obligatorio: los anuncios que cargan y empujan el contenido son la causa número uno de CLS alto en sitios de publisher.
- **Densidad:** máximo 3-4 unidades en móvil incluyendo el anchor. Más anuncios ≠ más ingresos.
- **Estrategia híbrida recomendada:** 2-3 unidades manuales en posiciones probadas + Auto Ads con la opción "usar unidades existentes" activada.
- **Posiciones para este sitio:** (1) tras el primer párrafo de respuesta, (2) a mitad del artículo entre H2, (3) antes de la sección de FAQ, (4) anchor inferior en móvil. Los laterales verticales fijos funcionan en desktop pero **no en móvil**, donde está el 70% de tu tráfico.
- Respeta los Better Ads Standards: nada de pop-ups, intersticiales ni densidad excesiva en móvil. Incumplirlos puede costarte el servicio de anuncios hasta que lo arregles.
- Unidades responsive por defecto: rinden mejor que las de tamaño fijo.
- `ads.txt` limpio en la raíz en cuanto tengas la cuenta.
- Nunca coloques anuncios junto a botones o zonas de toque frecuente: los clics accidentales cuentan como tráfico inválido.

### 5.3 Contenido de alto RPM
Enlaza a GA4 para identificar qué artículos rinden más y produce más de esos. En tu nicho, por orden previsible de RPM:
1. **Fiscalidad** (España, Alemania, Reino Unido, Suiza) — máximo RPM, estacionalidad fuerte abril-junio en España y enero-marzo para el Modelo 721.
2. **Comparativas de exchanges y wallets** — intención comercial alta.
3. **Guías de compra** — intención transaccional.
4. **Regulación** (MiCA, CLARITY) — audiencia europea/EE.UU. de alto valor.
5. Memecoins y trading — mucho tráfico, RPM más bajo y volátil.

---

## 8. FASE 6 — ARQUITECTURA Y ENLAZADO INTERNO

- **Mínimo 3-5 enlaces internos contextuales por artículo** (ahora hay 1-2, es insuficiente).
- Anchor text descriptivo con keyword. Nunca "haz clic aquí" ni "este artículo".
- **Modelo hub-and-spoke:** cada categoría es el hub, enlaza a todos sus artículos, y cada artículo enlaza de vuelta al hub.
- Enlaces cruzados entre clusters: los 7 artículos de fiscalidad deben enlazarse entre sí (un lector de "impuestos en Alemania" es candidato a leer "impuestos en Suiza").
- Ningún artículo huérfano: todo debe ser alcanzable en ≤3 clics desde la home.
- Breadcrumbs visibles y marcados en todas las páginas internas.

### Huecos de contenido detectados (propón estos artículos nuevos, por prioridad)

| # | Artículo propuesto | Por qué |
|---|---|---|
| 1 | **Mejores Exchanges para Comprar Cripto en España 2026** | 🔴 El agujero más grave del sitio: tienes la guía de EE. UU. pero no la de tu mercado principal. Aquí compiten Material Bitcoin, Novatos Trading Club y Bit2Me — hay hueco si aportas comparativa honesta con licencias MiCA y CNMV. |
| 2 | **Modelo 721: Cómo Declarar Cripto en el Extranjero** | Keyword muy buscada de enero a marzo, intención altísima, y tu artículo de renta lo menciona pero no lo desarrolla. |
| 3 | **Cómo Declarar Criptomonedas de Binance en España** | Búsqueda de cola larga con volumen real y competencia baja. Replicable luego con Bit2Me, Coinbase, Kraken. |
| 4 | **Wallet Fría vs Caliente: Diferencias y Cuál Elegir** | Desdoblamiento del artículo Ledger vs Trezor (ver Fase 2). |
| 5 | **Qué Es Ethereum y en Qué se Diferencia de Bitcoin** | Top-of-funnel enorme. Ahora mismo tu web no capta nada del tráfico ETH, que es el segundo mayor del nicho. |
| 6 | **Calculadora de Impuestos Cripto (España)** | Herramienta en JS puro. Genera enlaces entrantes naturales, tiempo de permanencia alto y visitas recurrentes: es lo que más eleva el RPM. |
| 7 | **Cómo Pasar Cripto a Euros sin Problemas con Hacienda** | Intención transaccional + fiscal, combinación de RPM muy alto. |
| 8 | **Estafas Cripto Más Comunes en España y Cómo Detectarlas** | Refuerza E-E-A-T (contenido protector del usuario, que Google premia en YMYL) y capta búsquedas de gran volumen. |

---

## 9. ORDEN DE EJECUCIÓN RECOMENDADO

```
1. FASE 1  → auditoría, sin tocar nada          (1 sesión)
2. FASE 4  → SEO técnico y rendimiento          (2-3 sesiones)
3. FASE 2  → títulos y metadatos, tandas de 5   (3-4 sesiones)
4. FASE 3  → E-E-A-T, metodología, FAQ a 4      (3-4 sesiones)
5. FASE 6  → enlazado interno                   (1-2 sesiones)
6. Artículos nuevos 1-4 de la tabla             (según ritmo)
7. FASE 5  → maqueta de anuncios y solicitud    (1 sesión)
```

Tras cada fase: `git add -A && git commit -m "SEO: [qué se hizo]"` y comprobación en local antes de push.

---

## 10. CHECKLIST FINAL ANTES DE SOLICITAR ADSENSE

- [ ] 100% de los titles entre 50 y 60 caracteres y coherentes con su H1
- [ ] 100% de las meta descriptions únicas y entre 150 y 160 caracteres
- [ ] 0 artículos por debajo de 800 palabras
- [ ] ≥4 preguntas de FAQ por artículo, visibles y marcadas con FAQPage
- [ ] ≥3 enlaces internos contextuales por artículo
- [ ] Bloque de fuentes verificables en todo artículo de fiscalidad y regulación
- [ ] LCP < 2,5 s · CLS < 0,1 · INP < 200 ms en PageSpeed Insights (móvil)
- [ ] Legales enlazadas desde el footer de todas las páginas
- [ ] sitemap.xml actualizado y enviado en GSC
- [ ] 0 errores de cobertura en Search Console
- [ ] Contenedores de anuncios con `min-height` reservado
- [ ] Sin contenido LatAm salvo México
- [ ] Sin promesas de rentabilidad en ninguna página

---

*Generado el 16 de septiembre de 2026 para BrújulaCripto (labrujulacripto.com). Las cifras fiscales, comisiones y fechas citadas en los artículos deben verificarse contra fuentes oficiales antes de publicar: este documento define el método, no los datos.*
