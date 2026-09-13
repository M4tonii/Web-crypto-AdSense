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

  // Formulario de contacto: validación básica de UX (sin backend propio)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var msg = document.getElementById('form-msg');
      if (msg) {
        msg.textContent = 'Gracias por tu mensaje. Te responderemos lo antes posible a tu correo.';
      }
      // NOTA: este formulario necesita conectarse a un servicio real
      // (Formspree, Getform, backend propio, etc.) o a un enlace mailto
      // antes de publicar la web. Revisa el atributo action del formulario.
    });
  }
});
