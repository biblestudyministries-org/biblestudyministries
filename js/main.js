// Theme toggle functionality
(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('bsm-theme');
  if (saved) root.setAttribute('data-theme', saved);
  
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.textContent = '☀️';
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('bsm-theme', next);
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
  
  const header = document.querySelector('header .bar');
  if (header) header.appendChild(toggle);
})();

// Mobile menu toggle
(function() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
})();

// Form submission handler
(function() {
  const form = document.getElementById('f');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const ok = document.getElementById('ok');
      if (ok) ok.style.display = 'block';
      this.reset();
    });
  }
})();
