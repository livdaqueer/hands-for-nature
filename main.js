const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');
hamburgerMenu.addEventListener('click', (e) => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }
})