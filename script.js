// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .project-card, .skill-chip').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

// Sticky nav
const nav = document.getElementById('nav');

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
