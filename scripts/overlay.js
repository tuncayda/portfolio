document.getElementById('menu-button').addEventListener('click', openOverlay);
document.getElementById('close-button').addEventListener('click', closeOverlay);

function openOverlay() {
    document.getElementById('overlay').style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
}

function closeOverlay() {
    document.getElementById('overlay').style.width = '0%';
    document.documentElement.style.overflow = 'scroll';
}