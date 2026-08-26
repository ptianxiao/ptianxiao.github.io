// script.js — Homunculus Bloc

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Stop the cover model from auto-rotating for users who prefer reduced motion
if (reducedMotion) {
    document.querySelectorAll('model-viewer[auto-rotate]').forEach(mv => {
        mv.removeAttribute('auto-rotate');
    });
}

// Scroll-reveal for figures and sheet headers
const revealTargets = document.querySelectorAll('.figure, .fig-row, .strip-item, .pull');

if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealTargets.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}
