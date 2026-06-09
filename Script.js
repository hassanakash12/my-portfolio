// DARK MODE
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("darkModeBtn");

  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }

});

// SMOOTH SCROLL
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
