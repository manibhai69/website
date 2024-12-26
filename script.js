



//------------< ABOUT PAGE  >-------
// Add animation to cards when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.team-card, .expertise-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add hover effects to expertise icons
document.querySelectorAll('.expertise-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.icon');
        icon.style.transform = 'scale(1.2)';
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.icon');
        icon.style.transform = 'scale(1)';
    });
});