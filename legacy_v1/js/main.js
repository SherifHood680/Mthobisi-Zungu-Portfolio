// Main JavaScript - Navigation, Scroll Effects, and Interactions

// ===== NAVIGATION =====

// Mobile menu toggle
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scroll navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();
            smoothScrollTo(href, 80);
        });
    });
}

// Active section highlighting
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', throttle(updateActiveSection, 100));
    updateActiveSection(); // Initial call
}

// ===== SCROLL TO TOP BUTTON =====

function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, 100));

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL INDICATOR =====

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;

    scrollIndicator.addEventListener('click', () => {
        smoothScrollTo('#about', 80);
    });
}

// ===== TECH TAGS INTERACTION =====

function initTechTags() {
    const techTags = document.querySelectorAll('.tech-tag');

    techTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Add a subtle pulse animation
            if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
                gsap.fromTo(tag,
                    { scale: 1 },
                    {
                        scale: 1.1,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power2.inOut'
                    }
                );
            }
        });
    });
}

// ===== STATS COUNTER ANIMATION =====

function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateStatNumber(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateStatNumber(element) {
    const text = element.textContent;
    const hasNumber = /\d+/.test(text);

    if (!hasNumber || prefersReducedMotion()) return;

    const number = parseInt(text.match(/\d+/)[0]);
    const suffix = text.replace(/\d+/, '');

    let current = 0;
    const increment = number / 30; // 30 frames
    const duration = 1000; // 1 second
    const frameTime = duration / 30;

    const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + suffix;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, frameTime);
}

// ===== PROJECT CARD INTERACTIONS =====

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const link = card.querySelector('.project-links a');
                if (link) link.click();
            }
        });
    });
}

// ===== LAZY LOADING IMAGES =====

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE MONITORING =====

function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;

                console.log('Performance Metrics:');
                console.log(`Page Load Time: ${pageLoadTime}ms`);
                console.log(`Connect Time: ${connectTime}ms`);
                console.log(`Render Time: ${renderTime}ms`);
            }, 0);
        });
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====

function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.className = 'skip-link sr-only';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: var(--background-dark);
    padding: var(--space-sm) var(--space-md);
    text-decoration: none;
    z-index: 10000;
  `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex') && element.tabIndex === -1) {
            element.setAttribute('tabindex', '0');
        }
    });
}

// ===== THEME DETECTION =====

function detectColorScheme() {
    // Check if user prefers dark mode (already default)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('User prefers dark mode:', prefersDark);

    // Listen for changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        console.log('Color scheme changed to:', e.matches ? 'dark' : 'light');
    });
}

// ===== EASTER EGG =====

function initEasterEgg() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateEasterEgg();
        }
    });
}

function activateEasterEgg() {
    console.log('🎉 Easter egg activated! You found the secret!');

    // Add fun animation to the page
    if (typeof gsap !== 'undefined') {
        const sections = document.querySelectorAll('section');
        gsap.to(sections, {
            rotation: 360,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(sections, { rotation: 0 });
            }
        });
    }

    // Show message
    alert('🚀 You found the secret! Thanks for exploring my portfolio!');
}

// ===== INITIALIZATION =====

function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

function initializeApp() {
    console.log('Initializing portfolio...');

    // Core functionality
    initMobileMenu();
    initSmoothScroll();
    initActiveSection();
    initScrollToTop();
    initScrollIndicator();

    // Enhancements
    initTechTags();
    initStatsCounter();
    initProjectCards();
    initLazyLoading();
    initAccessibility();

    // Utilities
    detectColorScheme();
    logPerformanceMetrics();
    initEasterEgg();

    console.log('Portfolio initialized successfully! ✨');
}

// Start the app
init();
