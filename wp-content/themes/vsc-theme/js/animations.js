/**
 * Animations au scroll - Financement Sourire
 * Observe les classes .anim-* et ajoute .is-visible au scroll
 * Désactivé automatiquement dans l'éditeur Visual Composer
 */
document.addEventListener('DOMContentLoaded', function () {

  // Désactiver les animations dans l'éditeur Visual Composer
  // VC utilise ?vcv-action=frontend dans l'URL
  var isVCEditor = document.body.classList.contains('vc_editor')
                || document.body.classList.contains('vc-editor-mode')
                || window.location.search.indexOf('vcv-action') !== -1
                || window.location.search.indexOf('vc_editable') !== -1
                || typeof window.vcv !== 'undefined';

  if (isVCEditor) {
    // Rendre tous les éléments animés visibles immédiatement
    var allAnimated = document.querySelectorAll(
      '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in, .anim-circle-grow, .anim-badge-pop'
    );
    allAnimated.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // Désactiver si prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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

  // Observer toutes les classes anim-*
  var elements = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in, .anim-circle-grow, .anim-badge-pop'
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });

});