const menuToggle = document.querySelector('.menu-toggle');
const leftNav = document.querySelector('.nav-left');
const rightNav = document.querySelector('.nav-right');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
if (menuToggle && leftNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    leftNav.classList.toggle('is-open', !isOpen);
  });
  leftNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    leftNav.classList.remove('is-open');
  }));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      leftNav.classList.remove('is-open');
    }
  });
}
rightNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    rightNav.classList.remove('is-open');
}));