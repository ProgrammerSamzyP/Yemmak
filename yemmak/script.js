// WhatsApp functionality
const WHATSAPP_NUMBER = '23409110163057'; // Replace with actual WhatsApp number

function openWhatsApp() {
    const message = encodeURIComponent("Hello! I'm interested in your aluminum services. Could you please provide more information?");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // WhatsApp button event listeners
    const whatsAppButtons = [
        'heroWhatsApp',
        'ctaWhatsApp', 
        'ctaConsultation',
        'footerWhatsApp',
        'whatsappFloat'
    ];
    
    whatsAppButtons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', openWhatsApp);
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll([
        '.service-card',
        '.worker-card', 
        '.feature-item',
        '.review-card'
    ].join(', '));
    
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Smooth scrolling for anchor links
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
    
    // Add hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-0.5rem)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click tracking for analytics (optional)
    function trackClick(elementType, action) {
        // You can integrate with Google Analytics or other tracking services here
        console.log(`Tracked: ${elementType} - ${action}`);
    }
    
    // Track WhatsApp button clicks
    whatsAppButtons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                trackClick('WhatsApp Button', buttonId);
            });
        }
    });
    
    // Parallax effect for hero section (optional enhancement)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Show/hide WhatsApp button based on scroll
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.visibility = 'visible';
            } else {
                whatsappFloat.style.opacity = '0.8';
            }
        });
    }
    
    // Add loading animation completion
    document.body.classList.add('loaded');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Resume animations when page becomes visible
        const animatedElements = document.querySelectorAll([
            '.service-card',
            '.worker-card',
            '.feature-item', 
            '.review-card'
        ].join(', '));
        
        animatedElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.style.animationPlayState = 'running';
            }
        });
    }
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'images/hero-building.jpg',
        'images/aluminum-windows.jpg',
        'images/frameless-windows.jpg', 
        'images/casement-windows.jpg',
        'images/shower-doors.jpg',
        'images/balcony-glass.jpg',
        'images/worker1.jpg',
        'images/worker2.jpg',
        'images/worker3.jpg',
        'images/worker4.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Start preloading images
preloadImages();