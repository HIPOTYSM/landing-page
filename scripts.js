document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
