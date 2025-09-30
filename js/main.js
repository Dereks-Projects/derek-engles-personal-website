/**
 * Main JavaScript File - Derek Engles Portfolio
 * 
 * This file handles all interactive features:
 * 1. Smooth scroll navigation
 * 2. Scroll animations
 * 3. Mobile menu (if needed)
 * 4. Form validation (for future contact forms)
 * 5. Dynamic content loading
 */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio site loaded successfully');
    
    // Initialize all modules
    initSmoothScroll();
    //initScrollAnimations();
    initHeaderScroll();
    //initImageLazyLoad();
});

/**
 * SMOOTH SCROLL FUNCTIONALITY
 * Handles smooth scrolling for anchor links
 */
function initSmoothScroll() {
    // Get all links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element ID from href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * SCROLL ANIMATIONS
 * Adds fade-in animations as elements come into view
 */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = [
        '.hero-text',
        '.hero-image',
        '.premier-text',
        '.premier-image',
        '.portfolio-card',
        '.book-card',
        '.cta-text'
    ];
    
    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,  // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element is fully in view
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in class when element comes into view
                entry.target.classList.add('fade-in');
                
                // Stop observing this element after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Add initial opacity
            element.style.opacity = '0';
            observer.observe(element);
        });
    });
}

/**
 * HEADER SCROLL EFFECT
 * Changes header style on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to header when scrolled
        if (scrollTop > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Optional: Hide/show header on scroll direction
        // Uncomment if you want this feature
        /*
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
        */
    });
}

/**
 * LAZY LOAD IMAGES
 * Loads images only when they're about to enter viewport
 * Improves initial page load performance
 */
function initImageLazyLoad() {
    // Check if browser supports Intersection Observer
    if ('IntersectionObserver' in window) {
        // Get all images that should be lazy loaded
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Replace data-src with src
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    
                    // Stop observing this image
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'  // Start loading 50px before image enters viewport
        });
        
        // Observe all lazy images
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/**
 * UTILITY FUNCTIONS
 */

/**
 * Debounce function to limit how often a function can run
 * Useful for scroll and resize events
 */
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

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * MOBILE MENU TOGGLE
 * For future mobile menu implementation
 */
function initMobileMenu() {
    // This function is ready for when you add a mobile menu
    // Example implementation:
    /*
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    */
}

/**
 * FORM VALIDATION
 * For future contact form implementation
 */
function initFormValidation() {
    // Ready for when you add a contact form
    // Example implementation:
    /*
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Basic validation
            if (!email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email regex validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes, submit form
            // You would typically send this to a server
            console.log('Form submitted:', { email, message });
        });
    }
    */
}

/**
 * PERFORMANCE MONITORING
 * Track page load performance
 */
window.addEventListener('load', function() {
    // Check if Performance API is available
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`Page load time: ${pageLoadTime}ms`);
        
        // You could send this data to analytics
        // Example: sendToAnalytics('page_load_time', pageLoadTime);
    }
});

/**
 * ERROR HANDLING
 * Global error handler for debugging
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // In production, you might want to send errors to a logging service
});

/**
 * ACCESSIBILITY ENHANCEMENTS
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab key
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

/**
 * DYNAMIC COPYRIGHT YEAR
 * Automatically update copyright year
 */
function updateCopyrightYear() {
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `Copyright ${currentYear} - All Rights Reserved`;
    }
}

// Call on page load
updateCopyrightYear();

/**
 * ANALYTICS TRACKING
 * Ready for Google Analytics or other tracking
 */
function trackEvent(category, action, label) {
    // Example implementation with Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
    
    console.log('Event tracked:', { category, action, label });
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const buttonText = e.target.textContent;
        trackEvent('Button', 'Click', buttonText);
    }
});