// // Get DOM elements
// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobileMenu');
// const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

// // Toggle mobile menu
// function toggleMobileMenu() {
//   hamburger.classList.toggle('active');
//   mobileMenu.classList.toggle('active');

//   // Prevent body scroll when menu is open
//   if (mobileMenu.classList.contains('active')) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = 'auto';
//   }
// }

// // Close mobile menu
// function closeMobileMenu() {
//   hamburger.classList.remove('active');
//   mobileMenu.classList.remove('active');
//   document.body.style.overflow = 'auto';
// }

// // Event listeners
// hamburger.addEventListener('click', toggleMobileMenu);

// // Close menu when clicking on a link
// mobileMenuLinks.forEach(link => {
//   link.addEventListener('click', closeMobileMenu);
// });

// // Close menu when clicking outside
// document.addEventListener('click', function (event) {
//   const isClickInsideNav = hamburger.contains(event.target) || mobileMenu.contains(event.target);

//   if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
//     closeMobileMenu();
//   }
// });

// // Close menu on window resize if screen becomes larger
// window.addEventListener('resize', function () {
//   if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
//     closeMobileMenu();
//   }
// });

// // Handle orientation change
// window.addEventListener('orientationchange', function () {
//   // Small delay to ensure proper rendering after orientation change
//   setTimeout(() => {
//     if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
//       closeMobileMenu();
//     }
//   }, 100);
// });

// // Smooth scrolling for anchor links (optional enhancement)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   });
// });


// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  // Close mobile menu when clicking on nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    const isClickInsideNav = hamburger.contains(event.target) || mobileMenu.contains(event.target);

    if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile scroll container touch improvements
  const mobileScrollContainers = document.querySelectorAll('.mobile-scroll-container');

  mobileScrollContainers.forEach(container => {
    let isScrolling = false;

    container.addEventListener('touchstart', function () {
      isScrolling = true;
    });

    container.addEventListener('touchend', function () {
      isScrolling = false;
    });

    // Prevent vertical scroll when horizontally scrolling
    container.addEventListener('touchmove', function (e) {
      if (isScrolling) {
        e.stopPropagation();
      }
    }, { passive: true });
  });

  // Add scroll indicators for mobile scroll containers
  mobileScrollContainers.forEach(container => {
    const scrollContent = container.querySelector('.mobile-scroll-content');

    if (scrollContent) {
      container.addEventListener('scroll', function () {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;

        // You can use this percentage to show scroll indicators if needed
        container.style.setProperty('--scroll-percentage', scrollPercentage + '%');
      });
    }
  });

  // Button click handlers (you can customize these)
  const buttons = document.querySelectorAll('button[id$="-infoBtn"], .service-button, .resource-button, .cta-button');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);

      // You can add specific functionality for each button here
      const buttonId = this.id || this.className;
      console.log(`Button clicked: ${buttonId}`);

      // Example: Show alert or redirect
      // alert(`You clicked: ${this.textContent}`);
    });
  });

  // Newsletter form handler
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('.email-input');
      const email = emailInput.value;

      if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
        emailInput.value = '';
      }
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Mobile scroll snap behavior
  if (window.innerWidth <= 768) {
    mobileScrollContainers.forEach(container => {
      container.style.scrollSnapType = 'x mandatory';

      const items = container.querySelectorAll('.mobile-scroll-item');
      items.forEach(item => {
        item.style.scrollSnapAlign = 'start';
      });
    });
  }
});

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const handleScroll = debounce(function () {
  const navbar = document.querySelector('.navbar');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, 10);

window.addEventListener('scroll', handleScroll);

// Handle orientation change
window.addEventListener('orientationchange', function () {
  setTimeout(function () {
    // Recalculate mobile scroll containers
    const mobileScrollContainers = document.querySelectorAll('.mobile-scroll-container');
    mobileScrollContainers.forEach(container => {
      container.scrollLeft = 0; // Reset scroll position
    });
  }, 100);
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


//todo: Touch Left -Right arrow
// Mobile Scroll Arrows Functionality
function initializeMobileScrollArrows() {
  const mobileScrollContainers = document.querySelectorAll(".mobile-scroll-container")

  mobileScrollContainers.forEach((container, index) => {
    // Create wrapper if it doesn't exist
    if (!container.parentElement.classList.contains("mobile-scroll-wrapper")) {
      const wrapper = document.createElement("div")
      wrapper.className = "mobile-scroll-wrapper"
      container.parentElement.insertBefore(wrapper, container)
      wrapper.appendChild(container)
    }

    const wrapper = container.parentElement

    // Create arrows container
    const arrowsContainer = document.createElement("div")
    arrowsContainer.className = "scroll-arrows"
    arrowsContainer.innerHTML = `
      <button class="scroll-arrow scroll-arrow-left" data-direction="left" aria-label="Scroll left">
      </button>
      <button class="scroll-arrow scroll-arrow-right" data-direction="right" aria-label="Scroll right">
      </button>
    `

    wrapper.appendChild(arrowsContainer)

    // Create scroll indicators
    const scrollContent = container.querySelector(".mobile-scroll-content")
    const items = container.querySelectorAll(".mobile-scroll-item")

    if (items.length > 1) {
      const indicatorsContainer = document.createElement("div")
      indicatorsContainer.className = "scroll-indicators"

      items.forEach((_, dotIndex) => {
        const dot = document.createElement("div")
        dot.className = `scroll-dot ${dotIndex === 0 ? "active" : ""}`
        dot.addEventListener("click", () => scrollToItem(container, dotIndex))
        indicatorsContainer.appendChild(dot)
      })

      wrapper.appendChild(indicatorsContainer)
    }

    // Get arrow buttons
    const leftArrow = arrowsContainer.querySelector(".scroll-arrow-left")
    const rightArrow = arrowsContainer.querySelector(".scroll-arrow-right")

    // Arrow click handlers
    leftArrow.addEventListener("click", () => {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    })

    rightArrow.addEventListener("click", () => {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    })

    // Update arrow states and indicators
    function updateScrollState() {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      const maxScroll = scrollWidth - clientWidth

      // Update arrows
      leftArrow.classList.toggle("disabled", scrollLeft <= 10)
      rightArrow.classList.toggle("disabled", scrollLeft >= maxScroll - 10)

      // Update indicators
      const indicators = wrapper.querySelectorAll(".scroll-dot")
      if (indicators.length > 0) {
        const itemWidth = items[0]?.offsetWidth || 300
        const gap = 24 // 1.5rem gap
        const currentIndex = Math.round(scrollLeft / (itemWidth + gap))

        indicators.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex)
        })
      }
    }

    // Scroll to specific item
    function scrollToItem(container, index) {
      const items = container.querySelectorAll(".mobile-scroll-item")
      if (items[index]) {
        const itemWidth = items[0].offsetWidth
        const gap = 24 // 1.5rem gap
        const scrollPosition = index * (itemWidth + gap)

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }

    // Listen for scroll events
    let scrollTimeout
    container.addEventListener("scroll", () => {
      container.classList.add("scrolling")

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        container.classList.remove("scrolling")
        updateScrollState()
      }, 150)
    })

    // Initial state
    updateScrollState()

    // Handle resize
    window.addEventListener(
      "resize",
      debounce(() => {
        if (window.innerWidth <= 768) {
          updateScrollState()
        }
      }, 250),
    )
  })
}

// Initialize arrows when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // ... existing DOMContentLoaded code ...

  // Initialize mobile scroll arrows
  if (window.innerWidth <= 768) {
    initializeMobileScrollArrows()
  }

  // Re-initialize on resize if switching to mobile
  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth <= 768) {
        // Remove existing arrows first
        document.querySelectorAll(".scroll-arrows, .scroll-indicators").forEach((el) => el.remove())
        // Re-initialize
        initializeMobileScrollArrows()
      }
    }, 300),
  )
})

// Touch swipe enhancement for better mobile experience
function enhanceTouchScrolling() {
  const mobileScrollContainers = document.querySelectorAll(".mobile-scroll-container")

  mobileScrollContainers.forEach((container) => {
    let startX = 0
    let scrollLeft = 0
    let isScrolling = false

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      isScrolling = true
      container.style.scrollBehavior = "auto"
    })

    container.addEventListener("touchmove", (e) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    })

    container.addEventListener("touchend", () => {
      isScrolling = false
      container.style.scrollBehavior = "smooth"

      // Snap to nearest item
      const itemWidth = container.querySelector(".mobile-scroll-item")?.offsetWidth || 300
      const gap = 24
      const snapPosition = Math.round(container.scrollLeft / (itemWidth + gap)) * (itemWidth + gap)

      container.scrollTo({
        left: snapPosition,
        behavior: "smooth",
      })
    })
  })
}

// Initialize touch scrolling
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    enhanceTouchScrolling()
  }
})

// Debounce function declaration
function debounce(func, wait) {
  let timeout
  return function (...args) {

    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
