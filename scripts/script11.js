// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar Toggle for Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle'); // button or hamburger icon
  const menu = document.querySelector('.nav-menu');     // nav menu container

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('active'); // optional for animation
    });
  }
});
