/**
 * Animations au scroll - Financement Sourire
 * Désactivé automatiquement dans l'éditeur Visual Composer
 */
document.addEventListener('DOMContentLoaded', function () {

  var ANIM_SELECTOR = '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in, .anim-circle-grow, .anim-badge-pop';

  // VC charge le frontend dans une iframe
  // Il injecte window.vcv, window.VCV_WP_NONCE et des classes sur le body
  var isVCEditor = typeof window.vcv !== 'undefined'
                || typeof window.VCV_WP_NONCE !== 'undefined'
                || document.body.classList.contains('vcv-is-editor-opened')
                || document.querySelector('.vcv-layout') !== null
                || document.querySelector('[data-vcv-element]') !== null;

  // Forcer tous les éléments visibles dans l'éditeur
  if (isVCEditor) {
    document.querySelectorAll(ANIM_SELECTOR).forEach(function (el) {
      el.classList.add('is-visible');
    });

    // VC peut ajouter des éléments dynamiquement, on observe les nouveaux
    var mutationObserver = new MutationObserver(function () {
      document.querySelectorAll(ANIM_SELECTOR + ':not(.is-visible)').forEach(function (el) {
        el.classList.add('is-visible');
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return;
  }

  // Désactiver si prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // IntersectionObserver pour le frontend normal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll(ANIM_SELECTOR).forEach(function (el) {
    observer.observe(el);
  });

});