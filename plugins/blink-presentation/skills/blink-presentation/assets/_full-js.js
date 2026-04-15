// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in, .divider').forEach(el => {
  observer.observe(el);
});

// Weight bar animation
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.weight-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });

const weightSection = document.getElementById('weightBars');
if (weightSection) barObserver.observe(weightSection);

// Match score counter animation
const scoreObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      let current = 0;
      const target = 74;
      const duration = 1800;
      const step = 16;
      const increment = target / (duration / step);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.round(current) + '%';
      }, step);
      scoreObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

const matchScore = document.getElementById('matchScore');
if (matchScore) scoreObserver.observe(matchScore);

// Progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
});

// ========== SIDE NAV MENU ==========
(function() {
  const toggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const backdrop = document.getElementById('menuBackdrop');
  const navLinks = sideNav.querySelectorAll('a');

  function openMenu() {
    sideNav.classList.add('active');
    backdrop.classList.add('active');
    toggle.classList.add('active');
  }
  function closeMenu() {
    sideNav.classList.remove('active');
    backdrop.classList.remove('active');
    toggle.classList.remove('active');
  }
  function toggleMenu() {
    sideNav.classList.contains('active') ? closeMenu() : openMenu();
  }

  toggle.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        closeMenu();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('active')) closeMenu();
  });

  // Highlight active section on scroll
  const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').slice(1));
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function updateActive() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0] ? sections[0].id : null;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    }
    navLinks.forEach(a => {
      a.classList.toggle('active-section', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();