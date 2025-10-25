// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any anchor links
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
});

// Header background transition on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .testimonial-card, .motion-content');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Image loading with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image');
        const title = card.querySelector('.project-title');
        const link = card.querySelector('.project-link');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.02)';
            }
            if (title) {
                title.style.color = '#333';
            }
            if (link) {
                link.style.opacity = '0.7';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (title) {
                title.style.color = '#000';
            }
            if (link) {
                link.style.opacity = '1';
            }
        });
    });
});

// Testimonial card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        const text = card.querySelector('.testimonial-text');
        
        card.addEventListener('mouseenter', function() {
            if (text) {
                text.style.color = '#555';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (text) {
                text.style.color = '#666';
            }
        });
    });
});

// Link underline animations
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link, .project-link, .motion-link, .footer-link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < 500) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Staggered animation for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
});

// Staggered animation for testimonial cards
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 * (index + 1)}s`;
    });
});

// Smooth reveal animation for motion design section
document.addEventListener('DOMContentLoaded', function() {
    const motionContent = document.querySelector('.motion-content');
    if (motionContent) {
        motionContent.style.animationDelay = '0.3s';
    }
});

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(image => {
        if (!image.querySelector('img').src) {
            image.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999; font-size: 14px;">Loading...</div>';
        }
    });
}); 