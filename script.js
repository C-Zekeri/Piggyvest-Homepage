const mobileNav = document.querySelector('.navbar_mobile');
const toggler = document.querySelector('.navbar-toggler');
const widescreenNav = document.querySelector('.navbar-collapse');

toggler.addEventListener('click', displayNav);

function displayNav() {
    mobileNav.classList.toggle('hide');
}