const menuToggle = document.getElementById('menu_toggle');
const menuLinks = document.getElementById('menu_links');

menuToggle.addEventListener('click', function() {
    menuLinks.classList.toggle('hidden_sm');
})