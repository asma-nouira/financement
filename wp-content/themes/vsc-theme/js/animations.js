/**
 * Animations au scroll - Financement Sourire
 * Observe les classes .anim-* et ajoute .is-visible au scroll
 */
document.addEventListener('DOMContentLoaded', function () {
 
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
