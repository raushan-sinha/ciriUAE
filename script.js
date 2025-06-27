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


//todo: Resource button 
document.querySelector('#resource-infoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('resources.html', '_self');
});


//todo: News button 
document.querySelector('#news-infoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('news.html', '_self');
});

//todo: FAQs button 
document.querySelector('#faqs-infoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('faqs.html', '_self');
});

//todo: Consultation button 
document.querySelector('#consultation-infoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('consult.html', '_self');
});

