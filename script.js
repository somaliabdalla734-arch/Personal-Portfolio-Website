
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.add('bg-white/70');
        navbar.classList.remove('bg-white/40');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('bg-white/70');
        navbar.classList.add('bg-white/40');
    }
});

document.getElementById('current-year').textContent = new Date().getFullYear();

