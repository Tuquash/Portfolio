// Basic interactions: year, theme toggle, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

// theme toggle (simple)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  if (document.documentElement.hasAttribute('data-light')) {
    document.documentElement.removeAttribute('data-light');
    themeToggle.textContent = '🌗';
  } else {
    document.documentElement.setAttribute('data-light','true');
    themeToggle.textContent = '🌞';
  }
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});