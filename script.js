// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');

            // Scroll to section
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active nav link
            updateActiveNav(targetId);
        }
    });
});

// ========================================
// HAMBURGER MENU TOGGLE
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// STICKY HEADER WITH SCROLL DETECTION
// ========================================
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ========================================
function updateActiveNav(targetId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Update active nav on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    if (current) {
        updateActiveNav(`#${current}`);
    }
});

// ========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all genre cards and about content for animation
document.querySelectorAll('.genre-card, .about-text').forEach(element => {
    observer.observe(element);
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const event = document.getElementById('event').value;
    const message = document.getElementById('message').value;

    // In a real application, you would send this data to a server
    // For now, we'll show a success message and log the data
    console.log('Booking Request Submitted:', {
        name,
        email,
        event,
        message,
        timestamp: new Date().toLocaleString()
    });

    // Show success feedback
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, var(--accent-neon-lime), var(--accent-neon-cyan))';

    // Reset after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
});

// ========================================
// PARALLAX EFFECT ON SCROLL (SUBTLE)
// ========================================
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator && window.scrollY < window.innerHeight) {
        scrollIndicator.style.opacity = Math.max(0, 1 - (window.scrollY / (window.innerHeight * 0.5)));
    }
});

// ========================================
// WELCOME MESSAGE
// ========================================
console.log('%c🎧 Welcome to Club Caliche 🎧', 'font-size: 20px; font-weight: bold; color: #00f7ff; text-shadow: 0 0 10px #00f7ff;');
console.log('%cFeel the rhythm. Experience the energy. Book your set today!', 'font-size: 14px; color: #ff006e;');
