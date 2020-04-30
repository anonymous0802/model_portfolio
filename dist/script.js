//initial event click button
const btnMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const branding = document.getElementById('branding');
const nav = document.getElementById('nav');
const items = document.querySelectorAll('.nav-item');
let showMenu = false;

btnMenu.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        btnMenu.classList.add('close');
        menu.classList.add('show');
        branding.classList.add('show');
        nav.classList.add('show');
        items.forEach(item => {
            item.classList.add('show');
        })
        showMenu = true;
    } else {
        btnMenu.classList.remove('close');
        menu.classList.remove('show');
        branding.classList.remove('show');
        nav.classList.remove('show');
        items.forEach(item => {
            item.classList.remove('show');
        })
        showMenu = false;
    }
}
