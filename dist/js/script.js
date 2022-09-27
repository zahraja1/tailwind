//navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}
// bagian burger

const burger = document.querySelector('#burger');
const navMenu = document.querySelector ('#nav-menu');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active');
  navMenu.classList.toggle('hidden');
});