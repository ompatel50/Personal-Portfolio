/**
 * Om M. Patel — Portfolio
 *
 * Design rule: nothing here is required to read or navigate the site.
 * The reveal animation opts in by adding a class to <html>, so if this
 * file fails to load or errors out, every element stays visible. The
 * navigation is plain links with no toggle, and the contact form posts
 * natively — this script only improves the error messages.
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveal (opt-in) ---------- */

  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js-reveal');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });

    // Anything already on screen at load reveals immediately, so the
    // first viewport never sits blank.
    window.setTimeout(function () {
      document.querySelectorAll('.reveal').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible');
        }
      });
    }, 60);
  }

  /* ---------- Contact form ----------
     Uses the browser's own validity state rather than a hand-rolled
     check, and announces errors instead of only coloring the border. */

  var form = document.querySelector('.contact-form');

  if (form) {
    var showError = function (field, message) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.add('has-error');
      field.setAttribute('aria-invalid', 'true');
      var note = wrap.querySelector('.field-error');
      if (note) note.textContent = message;
    };

    var clearError = function (field) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.remove('has-error');
      field.removeAttribute('aria-invalid');
    };

    form.addEventListener('submit', function (e) {
      var firstInvalid = null;

      form.querySelectorAll('input, textarea').forEach(function (field) {
        if (field.type === 'hidden') return;

        if (!field.checkValidity()) {
          var message = field.validity.valueMissing
            ? 'This field is required.'
            : field.type === 'email'
              ? 'Enter a valid email address.'
              : 'Check this value.';
          showError(field, message);
          if (!firstInvalid) firstInvalid = field;
        } else {
          clearError(field);
        }
      });

      if (firstInvalid) {
        e.preventDefault();
        firstInvalid.focus();
      }
    });

    form.addEventListener('input', function (e) {
      if (e.target.matches('input, textarea')) clearError(e.target);
    });
  }
})();
