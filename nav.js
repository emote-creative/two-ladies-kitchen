// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a:not(.mega-trigger)').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Mobile mega menu toggle
const megaTrigger = document.querySelector('.mega-trigger');
const hasMega     = document.querySelector('.has-mega');
if (megaTrigger && hasMega) {
  megaTrigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 640) {
      e.preventDefault();
      hasMega.classList.toggle('open');
    }
  });
}

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.3)'
    : 'none';
});

// Active nav link highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('#')[0];
  if (href === currentPage) a.classList.add('active');
});
