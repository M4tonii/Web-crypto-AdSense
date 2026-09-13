// BrújulaCripto — funciones básicas del sitio
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

  // Banner de cookies (consentimiento simple para anuncios/análisis)
  var banner = document.getElementById('cookie-banner');
  if (banner) {
    var consent = localStorage.getItem('bc_cookie_consent');
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
        // Aquí se debe inicializar Google AdSense/Analytics en modo completo
        // una vez el usuario acepta, o usar Google Consent Mode v2.
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

  // Formulario de contacto: mientras no haya un backend/servicio real
  // conectado, generamos un enlace mailto con los datos ya rellenados
  // en lugar de fingir que el mensaje se ha enviado.
  // NOTA: sustituye este bloque por una integración real (Formspree,
  // Getform, backend propio...) en cuanto la tengas elegida; el atributo
  // action="mailto:..." del formulario es solo el respaldo sin JavaScript.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var subject = document.getElementById('subject');
      var message = document.getElementById('message');
      var body = 'Nombre: ' + (name ? name.value : '') + '\n' +
                 'Correo: ' + (email ? email.value : '') + '\n\n' +
                 (message ? message.value : '');
      var mailtoHref = 'mailto:contacto@brujulacripto.com'
        + '?subject=' + encodeURIComponent('[Web] ' + (subject ? subject.value : 'Consulta'))
        + '&body=' + encodeURIComponent(body);
      if (msg) {
        msg.innerHTML = 'Este formulario todavía no está conectado a un envío automático. ' +
          '<a href="' + mailtoHref + '">Pulsa aquí para enviarnos tu mensaje por correo</a> ' +
          '(se abrirá tu programa de correo con los datos ya rellenados).';
      }
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
          '<a href="mailto:contacto@brujulacripto.com">contacto@brujulacripto.com</a> ' +
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
