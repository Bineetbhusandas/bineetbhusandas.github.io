/* ===== Bineetbhusan Das — Portfolio 2026 ===== */

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav: shadow on scroll + back-to-top
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  toTop.classList.toggle('show', y > 600);
});

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Scroll-reveal animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated count-up for impact metrics
const animateCount = (el) => {
  const target = Number.parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
};
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target); countIO.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.metric .num').forEach(el => countIO.observe(el));

// Active nav link based on section in view
const navMap = {};
document.querySelectorAll('.nav-links a[data-nav]').forEach(a => {
  navMap[a.getAttribute('href').slice(1)] = a;
});
const sectionIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && navMap[e.target.id]) {
      Object.values(navMap).forEach(a => a.classList.remove('active'));
      navMap[e.target.id].classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['impact', 'approach', 'ai-edge', 'skills', 'projects', 'recognition', 'contact'].forEach(id => {
  const sec = document.getElementById(id);
  if (sec) sectionIO.observe(sec);
});
