// Animate numbers on scroll
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Add click handler for CTA button
document.getElementById('cta-button').addEventListener('click', () => {
    // Create a simple modal effect
    const button = document.getElementById('cta-button');
    button.style.transform = 'scale(0.95)';
    button.textContent = 'Welcome! 🎉';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.textContent = 'Get Started';
    }, 1000);
});

// Add floating animation to feature cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card, index) => {
        setInterval(() => {
            const offset = Math.sin(Date.now() * 0.001 + index) * 5;
            card.style.transform = `translateY(${offset}px)`;
        }, 50);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    
    // Add a slight delay before starting floating animation
    setTimeout(addFloatingAnimation, 2000);
});

// Add smooth scrolling for any future navigation
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