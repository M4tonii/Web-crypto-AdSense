// BrújulaCripto — funciones básicas del sitio

// Google Analytics (GA4): el script se carga siempre. Quien decide si de
// verdad se envían datos es Google Consent Mode (valores por defecto
// "denied" definidos en el <head> de cada página) según lo que el
// visitante responda en el mensaje de consentimiento de Google (CMP),
// activado desde AdSense el 20 sep 2026 — gestiona Analytics y anuncios
// a la vez, ya no hace falta el banner de cookies propio.
var GA_MEASUREMENT_ID = 'G-NVBT1C202J';
function loadGoogleAnalytics() {
  if (window.bcGaLoaded) return;
  window.bcGaLoaded = true;
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

// Consentimiento de cookies (banner propio, provisional hasta que el CMP de Google funcione)
var CONSENT_KEY = 'bc_consent_v1';

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
}

function applyConsent(granted) {
  var v = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    analytics_storage: v,
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v
  });
}

function initConsent() {
  ensureGtag();
  var saved = null;
  try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) {}
  if (saved === 'granted' || saved === 'denied') {
    applyConsent(saved === 'granted');
    return;
  }

  var bar = document.createElement('div');
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Aviso de cookies');
  Object.assign(bar.style, {
    position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '9999',
    background: '#0b2545', color: '#fff', padding: '14px 18px',
    display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center',
    justifyContent: 'center', fontSize: '14px', lineHeight: '1.4'
  });

  var text = document.createElement('span');
  text.innerHTML = 'Usamos cookies para medir el tráfico y mostrar anuncios. ' +
    'Puedes aceptarlas o rechazarlas. ' +
    '<a href="/legal/politica-cookies" style="color:#fff;text-decoration:underline">Más información</a>.';
  bar.appendChild(text);

  function makeBtn(label, granted) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    Object.assign(b.style, {
      padding: '8px 18px', border: '1px solid #fff', borderRadius: '6px',
      background: '#fff', color: '#0b2545', fontWeight: '600', cursor: 'pointer'
    });
    b.addEventListener('click', function () {
      try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied'); } catch (e) {}
      applyConsent(granted);
      bar.remove();
    });
    return b;
  }

  bar.appendChild(makeBtn('Rechazar', false));
  bar.appendChild(makeBtn('Aceptar', true));
  document.body.appendChild(bar);
}

document.addEventListener('DOMContentLoaded', function () {
  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Año dinámico en el footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Google Analytics: se carga siempre en todas las páginas. El
  // consentimiento real lo gestiona Google Consent Mode (ver <head>), no
  // esta llamada.
  initConsent();
  loadGoogleAnalytics();

  // Formulario de contacto: se envía a Web3Forms (servicio externo gratuito,
  // no depende del hosting). La access_key va en un input oculto en el HTML;
  // Web3Forms reenvía cada envío por email a la dirección con la que se creó
  // esa clave (contacto.labrujulacripto@gmail.com).
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      var submitBtn = form.querySelector('button[type="submit"]');

      // Honeypot anti-spam: si un bot rellena este campo oculto, ignoramos
      // el envío en silencio (un usuario real nunca lo ve ni lo rellena).
      var honeypot = form.querySelector('[name="bot-field"]');
      if (honeypot && honeypot.value) {
        return;
      }

      var formData = new FormData(form);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      if (submitBtn) submitBtn.disabled = true;
      if (msg) msg.textContent = 'Enviando...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response.json().then(function (result) {
          if (!response.ok || !result.success) { throw new Error(result.message || 'status ' + response.status); }
          if (msg) {
            msg.textContent = 'Gracias, tu mensaje se ha enviado correctamente. Te responderemos en un plazo máximo de 3-5 días laborables.';
          }
          form.reset();
        });
      }).catch(function () {
        if (msg) {
          msg.innerHTML = 'No hemos podido enviar el mensaje automáticamente. Escríbenos directamente a ' +
            '<a href="mailto:contacto.labrujulacripto@gmail.com">contacto.labrujulacripto@gmail.com</a>.';
        }
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  // Formulario de newsletter: sin proveedor de email marketing conectado
  // todavía. Mostramos un mensaje honesto en vez de fingir la suscripción.
  // NOTA: sustituye este bloque por la integración real (Mailchimp, Brevo...)
  // en cuanto la elijas.
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nmsg = document.getElementById('newsletter-msg');
      if (nmsg) {
        nmsg.innerHTML = 'El boletín todavía no está activo. Escríbenos a ' +
          '<a href="mailto:contacto.labrujulacripto@gmail.com">contacto.labrujulacripto@gmail.com</a> ' +
          'y te avisamos en cuanto esté disponible.';
      }
    });
  }

  // Anuncios de los rails laterales (izquierdo/derecho): en pantallas por
  // debajo de 1300px estos contenedores están ocultos (ver .ad-rail en
  // style.css), así que solo pedimos el anuncio si van a ser visibles,
  // para no desperdiciar peticiones de AdSense en contenedores de ancho 0.
  if (window.matchMedia('(min-width: 1300px)').matches) {
    document.querySelectorAll('.ad-rail .adsbygoogle').forEach(function () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }
});
