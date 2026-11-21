const menu=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
document.querySelector('[data-top]')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
if('IntersectionObserver' in window){const links=[...document.querySelectorAll('.nav a')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){for(const a of links){const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}}},{rootMargin:'-10% 0px -65% 0px'});links.forEach(a=>{const section=document.querySelector(a.hash);if(section)observer.observe(section);});}
