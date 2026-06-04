/**
 * Navigation mobile - Financement Sourire
 * Gère l'ouverture/fermeture du menu hamburger
 */
document.addEventListener('DOMContentLoaded', function () {

  var toggle = document.querySelector('.menu-toggle');
  var menu   = document.querySelector('#primary-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.contains('toggled');

    if (isOpen) {
      menu.classList.remove('toggled');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    } else {
      menu.classList.add('toggled');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = '✕';
    }
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-navigation')) {
      menu.classList.remove('toggled');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }
  });

});