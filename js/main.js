// BrújulaCripto — funciones básicas del sitio

// Google Analytics (GA4): el script solo se carga si el visitante ha
// aceptado cookies en el banner (ver más abajo). Si rechaza o todavía no ha
// decidido, no se carga nada de Google Analytics.
var GA_MEASUREMENT_ID = 'G-NVBT1C202J';
function loadGoogleAnalytics() {
  if (window.bcGaLoaded) return;
  window.bcGaLoaded = true;
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
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

  // Consentimiento de cookies: esta comprobación corre en las 43 páginas
  // (incluidas legal/404, que no muestran el banner) para que Analytics se
  // cargue en toda la web si el visitante ya aceptó antes, no solo en las
  // páginas que tienen el banner.
  var consent = localStorage.getItem('bc_cookie_consent');
  if (consent === 'accepted') {
    loadGoogleAnalytics();
  }

  // Banner de cookies (solo existe en la mayoría de páginas, no en legal/404)
  var banner = document.getElementById('cookie-banner');
  if (banner) {
    if (!consent) {
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('bc_cookie_consent', 'accepted');
        banner.style.display = 'none';
        loadGoogleAnalytics();
        // Cuando haya anuncios de AdSense activos, inicializarlos aquí
        // también (o usar Google Consent Mode v2 para ambos a la vez).
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        localStorage.setItem('bc_cookie_consent', 'rejected');
        banner.style.display = 'none';
        // Mantener anuncios/analítica en modo básico o desactivados
        // según la configuración de Consent Mode elegida.
      });
    }
  }

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
