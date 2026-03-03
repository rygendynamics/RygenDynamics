// ============================================
// Rygen Dynamics - Interactive JavaScript
// ============================================

// ================== Navigation ==================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : '';
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================== Hero Statistics Counter ==================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Trigger counter animation when in view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            statNumbers.forEach(stat => animateCounter(stat));
            hasAnimated = true;
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    counterObserver.observe(heroStats);
}

// ================== Robotics Canvas Animation ==================
const canvas = document.getElementById('robotCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle system for robotic/tech background
class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        if (this.y > canvas.height) {
            this.reset();
        }
        
        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
    }
    
    draw() {
        ctx.fillStyle = `rgba(46, 163, 214, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Connection lines between particles
class Connection {
    static draw(p1, p2, distance) {
        const opacity = 1 - (distance / 150);
        ctx.strokeStyle = `rgba(46, 163, 214, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }
}

// Create particles
const particles = [];
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Circuit trace effect
class CircuitTrace {
    constructor() {
        this.points = [];
        this.generatePath();
        this.progress = 0;
    }
    
    generatePath() {
        const segments = Math.floor(Math.random() * 3) + 3;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        
        this.points.push({ x, y });
        
        for (let i = 0; i < segments; i++) {
            const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
            const distance = Math.random() * 100 + 50;
            
            if (direction === 'horizontal') {
                x += (Math.random() > 0.5 ? 1 : -1) * distance;
            } else {
                y += (Math.random() > 0.5 ? 1 : -1) * distance;
            }
            
            x = Math.max(0, Math.min(canvas.width, x));
            y = Math.max(0, Math.min(canvas.height, y));
            
            this.points.push({ x, y });
        }
    }
    
    update() {
        this.progress += 0.005;
        if (this.progress > 1) {
            this.points = [];
            this.generatePath();
            this.progress = 0;
        }
    }
    
    draw() {
        const currentLength = Math.floor(this.points.length * this.progress);
        
        if (currentLength < 2) return;
        
        ctx.strokeStyle = `rgba(0, 194, 255, 0.4)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i < currentLength; i++) {
            const point = this.points[i];
            if (i === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        }
        
        ctx.stroke();
        
        // Draw nodes at connection points
        for (let i = 0; i < currentLength; i++) {
            const point = this.points[i];
            ctx.fillStyle = `rgba(0, 194, 255, 0.8)`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

const circuitTraces = [new CircuitTrace(), new CircuitTrace(), new CircuitTrace()];

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                Connection.draw(particles[i], particles[j], distance);
            }
        }
    }
    
    // Update and draw circuit traces
    circuitTraces.forEach(trace => {
        trace.update();
        trace.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();

// ================== Parallax Effect ==================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ================== Intersection Observer for Animations ==================
const animatedElements = document.querySelectorAll('.capability-card, .innovation-card, .vision-card, .timeline-item');

const observerConfig = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerConfig);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// ================== Contact Form Handling ==================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message (in production, this would send to backend)
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate sending
    setTimeout(() => {
        button.textContent = 'Message Sent! ✓';
        button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 3000);
    }, 1500);
    
    console.log('Form submitted:', formData);
});

// ================== Newsletter Form ==================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = newsletterForm.querySelector('input[type="email"]');
        const button = newsletterForm.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Subscribed! ✓';
            input.value = '';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// ================== Cursor Trail Effect (Optional Enhancement) ==================
class CursorParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.02;
    }
    
    draw() {
        ctx.fillStyle = `rgba(46, 163, 214, ${this.life * 0.5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const cursorParticles = [];

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < 2; i++) {
        cursorParticles.push(new CursorParticle(x, y));
    }
});

// Update cursor particles in animation loop
function animateCursorParticles() {
    for (let i = cursorParticles.length - 1; i >= 0; i--) {
        cursorParticles[i].update();
        cursorParticles[i].draw();
        
        if (cursorParticles[i].life <= 0) {
            cursorParticles.splice(i, 1);
        }
    }
}

// Enhanced animation loop
function enhancedAnimate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                Connection.draw(particles[i], particles[j], distance);
            }
        }
    }
    
    // Draw circuit traces
    circuitTraces.forEach(trace => {
        trace.update();
        trace.draw();
    });
    
    // Draw cursor particles
    animateCursorParticles();
    
    requestAnimationFrame(enhancedAnimate);
}

// Replace the basic animate with enhanced version
enhancedAnimate();

// ================== Scroll Progress Indicator ==================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2EA3D6, #00C2FF);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ================== CTA Button Interactions ==================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            border-radius: inherit;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================== Section Reveal on Scroll ==================
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// ================== Tech Stats Real-time Updates ==================
// Simulate real-time data updates (optional feature)
function updateLiveStats() {
    const liveElements = document.querySelectorAll('[data-live]');
    
    liveElements.forEach(element => {
        const variance = Math.random() * 2 - 1; // -1 to 1
        const currentValue = parseInt(element.textContent);
        const newValue = currentValue + Math.floor(variance);
        
        if (newValue > 0 && newValue < 100) {
            element.textContent = newValue;
        }
    });
}

// Update every 5 seconds
setInterval(updateLiveStats, 5000);

// ================== Loading Screen (Optional) ==================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ================== Console Branding ==================
console.log('%c🤖 Rygen Dynamics', 'color: #2EA3D6; font-size: 24px; font-weight: bold;');
console.log('%cBuilding the Future of Intelligent Systems', 'color: #0E2A47; font-size: 14px;');
console.log('%cInterested in joining our team? Visit the Careers section!', 'color: #6B7280; font-size: 12px;');

// ================== Performance Monitoring ==================
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// ================== Accessibility Enhancements ==================
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

// ================== Smooth Reveal for Images ==================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    }
});

// ================== Dynamic Year in Footer ==================
const yearElements = document.querySelectorAll('.footer-bottom p');
yearElements.forEach(element => {
    if (element.textContent.includes('2026')) {
        const currentYear = new Date().getFullYear();
        element.textContent = element.textContent.replace('2026', currentYear);
    }
});

console.log('✅ Rygen Dynamics website initialized successfully');
