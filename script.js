const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('theme-light');
  document.body.classList.toggle('theme-dark');
});
