const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const countdownTarget = new Date();
countdownTarget.setDate(countdownTarget.getDate() + 24);
countdownTarget.setHours(countdownTarget.getHours() + 13);
countdownTarget.setMinutes(countdownTarget.getMinutes() + 45);
countdownTarget.setSeconds(countdownTarget.getSeconds() + 34);

const countdownEl = document.getElementById('countdown');

function formatTime(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  if (!countdownEl) return;

  const now = new Date();
  const diff = countdownTarget - now;

  if (diff <= 0) {
    countdownEl.textContent = '00 : 00 : 00 : 00';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  countdownEl.textContent = `${formatTime(days)} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
  rootMargin: '0px 0px -40px 0px'
});

revealItems.forEach((item) => revealObserver.observe(item));
