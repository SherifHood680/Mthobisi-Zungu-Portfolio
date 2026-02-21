// GSAP Animations

// Check if GSAP is loaded
if (typeof gsap !== 'undefined') {

    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP ScrollTrigger plugin loaded successfully');
    } else {
        console.warn('GSAP ScrollTrigger plugin not loaded. Some animations may not work.');
    }

    // Hero Section Animations
    function initHeroAnimations() {
        // Skip animations if user prefers reduced motion
        if (prefersReducedMotion()) {
            return;
        }

        const heroTL = gsap.timeline({
            defaults: {
                ease: 'power3.out'
            }
        });

        // Animate hero title
        heroTL.from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1
        });

        // Animate subtitle and tagline with stagger
        heroTL.from('.hero-subtitle, .hero-tagline', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2
        }, '-=0.5');

        /* 
        // Animate CTA buttons (Disabled to prevent flickering/disappearing issue)
        heroTL.from('.hero-cta .btn', {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, '-=0.4');
        */

        // Animate scroll indicator
        heroTL.from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 0.5
        }, '-=0.3');
    }

    // Scroll-triggered animations for sections
    function initScrollAnimations() {
        // Skip animations if user prefers reduced motion
        if (prefersReducedMotion()) {
            // Just show all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('animate-in');
            });
            return;
        }

        // Intersection Observer options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Animate children elements if they exist
                    animateSectionChildren(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections except hero
        document.querySelectorAll('section:not(#hero)').forEach(section => {
            observer.observe(section);
        });
    }

    // Animate children elements within a section
    function animateSectionChildren(section) {
        // Animate cards with stagger (Excluded stat, skill, project, education, and certification cards to prevent alignment/visibility issues)
        const cards = section.querySelectorAll('.other-card-types-if-any'); // Emptying for now as all primary cards are handled by CSS
        if (cards.length > 0) {
            gsap.from(cards, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    once: true
                }
            });
        }

        // Animate timeline items
        const timelineItems = section.querySelectorAll('.timeline-item');
        if (timelineItems.length > 0) {
            gsap.from(timelineItems, {
                opacity: 0,
                x: -30,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    once: true
                }
            });
        }
    }

    // Navbar scroll animation
    function initNavbarAnimation() {
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', throttle(() => {
            const currentScroll = window.pageYOffset;

            // Add scrolled class when scrolled down
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, 100));
    }

    // Scroll indicator fade out
    function initScrollIndicatorAnimation() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;

        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const opacity = Math.max(0, 1 - (scrolled / 300));
            scrollIndicator.style.opacity = opacity;

            if (scrolled > 300) {
                scrollIndicator.style.display = 'none';
            } else {
                scrollIndicator.style.display = 'flex';
            }
        }, 50));
    }

    // Hover animations for project cards
    function initProjectCardAnimations() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            const image = card.querySelector('.project-image img');

            card.addEventListener('mouseenter', () => {
                if (!prefersReducedMotion() && image) {
                    gsap.to(image, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                if (!prefersReducedMotion() && image) {
                    gsap.to(image, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    // Initialize all animations when DOM is ready
    function initAnimations() {
        // Wait for page to load
        window.addEventListener('load', () => {
            initHeroAnimations();
            initScrollAnimations();
            initNavbarAnimation();
            initScrollIndicatorAnimation();
            initProjectCardAnimations();
        });
    }

    // Start animations
    initAnimations();

} else {
    console.warn('GSAP library not loaded. Animations will be disabled.');

    // Fallback: Show all sections immediately
    window.addEventListener('load', () => {
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    });
}
