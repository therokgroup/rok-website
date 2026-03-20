function initMobileNav(){
  const btn=document.querySelector('[data-menu-btn]');
  const panel=document.querySelector('[data-mobile-panel]');
  if(!btn||!panel) return;
  btn.addEventListener('click',()=>{
    const open=panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true':'false');
  });
}
document.addEventListener('DOMContentLoaded', initMobileNav);
