/**
 * Animations au scroll - Financement Sourire
 */

// Détection immédiate de l'éditeur VC — avant même le DOMContentLoaded
// VC injecte window.vcv et window.VCV_WP_NONCE dans son iframe
var IS_VC_EDITOR = (
     typeof window.vcv !== 'undefined'
  || typeof window.VCV_WP_NONCE !== 'undefined'
  || typeof window.vcvSourceUrl !== 'undefined'
);

var ANIM_SELECTOR = [
  '.anim-fade-up',
  '.anim-fade-left',
  '.anim-fade-right',
  '.anim-scale-in',
  '.anim-circle-grow',
  '.anim-badge-pop'
].join(', ');

// Fonction : rendre tous les éléments visibles immédiatement
function showAll() {
  document.querySelectorAll(ANIM_SELECTOR).forEach(function (el) {
    el.style.opacity  = '1';
    el.style.transform = 'none';
    el.classList.add('is-visible');
  });
}
console.log(IS_VC_EDITOR);
// ---- MODE ÉDITEUR VC ----
if (IS_VC_EDITOR) {

  // Appliquer dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showAll);
  } else {
    showAll();
  }

  // Observer les éléments ajoutés dynamiquement par VC (drag & drop)
  var mutationObs = new MutationObserver(function () {
    document.querySelectorAll(ANIM_SELECTOR + ':not(.is-visible)').forEach(function (el) {
      el.style.opacity   = '1';
      el.style.transform = 'none';
      el.classList.add('is-visible');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    mutationObs.observe(document.body, { childList: true, subtree: true });
  });

// ---- MODE FRONTEND NORMAL ----
} else {

  document.addEventListener('DOMContentLoaded', function () {

    // Respecter prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll();
      return;
    }

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

}