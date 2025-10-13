// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Intersection Observer para scroll reveal
// Referência: MDN Intersection Observer API
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax sutil
const parallaxEls = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  parallaxEls.forEach((el, i) => {
    const speed = (i + 1) * 0.03;
    el.style.transform = `translateY(${y * speed}px)`;
  });
});

// Modais
const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.classList.add('open');
      target.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      target.querySelector('h3')?.focus?.();
    }
  });
});

modals.forEach(modal => {
  const close = modal.querySelector('.modal-close');
  const dialog = modal.querySelector('.modal-dialog');

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  close?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (!dialog.contains(e.target)) closeModal();
  });
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

// Ano rodapé
document.getElementById('year').textContent = new Date().getFullYear();
