/**
 * Animations au scroll - Financement Sourire
 * Utilise IntersectionObserver pour ajouter .is-visible
 * quand un élément [data-animate] entre dans le viewport
 */
document.addEventListener('DOMContentLoaded', function () {

  // Pas d'animation si l'utilisateur préfère réduire les mouvements
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // On arrête d'observer après l'animation (one-shot)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,   // déclenche quand 15% de l'élément est visible
    rootMargin: '0px 0px -40px 0px'  // légèrement avant le bas du viewport
  });

  // Observer tous les éléments avec data-animate
  var elements = document.querySelectorAll('[data-animate]');
  elements.forEach(function (el) {
    observer.observe(el);
  });

});
