const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const overlayNav = document.querySelector('.overlay-nav');

menuToggle.addEventListener('click', () => {
    overlayNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    overlayNav.classList.remove('active');
});
