const menuToggle = document.querySelector('.opening-menu-toggle');
const menu = document.getElementById(menuToggle.getAttribute('aria-controls'));
const mobileNavigation = matchMedia('(max-width: 680px)');

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.hidden = false;

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || menuToggle.getAttribute('aria-expanded') !== 'true') return;

  setMenuOpen(false);
  menuToggle.focus();
});

mobileNavigation.addEventListener('change', () => setMenuOpen(false));
