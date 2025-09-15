document.addEventListener('DOMContentLoaded', () => {
    // Código para o Menu Hambúrguer
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navWrapper = document.querySelector('.nav-links-wrapper');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('is-active');
        navWrapper.classList.toggle('is-open');
    });

    // Código para a Animação de Rolagem (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = revealElements[i].getBoundingClientRect().top;
            let revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chama a função na inicialização para exibir elementos já visíveis
});

// Função para o Modo Escuro/Claro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'light-mode') {
        themeToggleBtn.innerHTML = '🌙';
    } else {
        themeToggleBtn.innerHTML = '☀️';
    }
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        themeToggleBtn.innerHTML = '🌙';
    } else {
        localStorage.removeItem('theme');
        themeToggleBtn.innerHTML = '☀️';
    }
});