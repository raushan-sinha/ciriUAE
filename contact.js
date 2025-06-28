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

//todo: Social media access -
const socialMediaLinks = [
    'https://x.com/CiriUAE',
    'https://wa.me/0971524308085',
    'https://www.linkedin.com/company/ciri-uae',
    'mailto:INQUIRY@CIRIUAE.COM'
];

document.querySelectorAll('.social-icons a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(socialMediaLinks[idx], '_self');
    }, false);
});