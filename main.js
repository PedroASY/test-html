document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navItems = document.querySelectorAll('.item-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    navItems.forEach(item => item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    }));
});