const btn = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu]');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
  });
}
