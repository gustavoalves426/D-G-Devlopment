document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navWrapper = document.querySelector('.nav-links-wrapper');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('is-active');
        navWrapper.classList.toggle('is-open');
    });
});