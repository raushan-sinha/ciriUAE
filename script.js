// Get DOM elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

// Toggle mobile menu
function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// Close mobile menu
function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
hamburger.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
  const isClickInsideNav = hamburger.contains(event.target) || mobileMenu.contains(event.target);

  if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

// Close menu on window resize if screen becomes larger
window.addEventListener('resize', function () {
  if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

// Handle orientation change
window.addEventListener('orientationchange', function () {
  // Small delay to ensure proper rendering after orientation change
  setTimeout(() => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }, 100);
});

// Smooth scrolling for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


//todo: Get in touch Button -
document.querySelector('.cta-button').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('contact.html', '_self');
});

//todo: About More Info Button -
document.querySelector('#about-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('about.html', '_self');
});


//todo: Services More Info Button -
document.querySelector('#services-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('services.html', '_self');
});


//todo: Contact More Info Button -
document.querySelector('#contact-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('contact.html', '_self');
});


//todo: Resources Contact More Info Button -
document.querySelector('#resources-contactBn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('contact.html', '_self');
});


//todo: Industries More Info Button -
document.querySelector('#industries-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('industries.html', '_self');
});


//todo: case studies More Info Button -
document.querySelector('#case-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('caseStudies.html', '_self');
});


//todo: Blog More Info Button -
document.querySelector('#blog-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('blog.html', '_self');
});


//todo: Marketing Button
document.querySelector('#marketing-infoBtn').addEventListener('click', (event) => {
  event.preventDefault();
  window.open('marketing.html', '_self');
});

//todo: Business Development Button
document.querySelector('#businessDev-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('businessDev.html', '_self');
});


//todo: Financial More Info Button -
document.querySelector('#financial-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('financial.html', '_self');
});

//todo: Digital More Info Button -
document.querySelector('#digital-infoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('digital.html', '_self');
});
