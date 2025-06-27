document.querySelector('#busDevStarted').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('careers.html', '_self');
})


// Select the hamburger button and navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('#hamburger');
    const navLinks = document.querySelector('#mobileMenu');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('#mobileMenu').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});