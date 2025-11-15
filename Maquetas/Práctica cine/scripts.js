//-----COMPORTAMIENTO DEL CARRUSEL-----
const carrusel = document.querySelector('.carrusel');
const items = document.querySelectorAll('.item-carrusel');
let currentIndex = 0;
const totalItems = items.length;

function actualizarCarrusel() {
    const desplazamiento = -currentIndex * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

function moverCarrusel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    actualizarCarrusel()
}

actualizarCarrusel()

//-----COMPORTAMIENTO DE LOS BOTONES DEL CARRUSEL-----
const botonPrev = document.querySelector('.prev-button');
const botonNext = document.querySelector('.next-button');

botonNext.addEventListener('click', () => {
    moverCarrusel(1);
})

botonPrev.addEventListener('click', () => {
    moverCarrusel(-1);
})

//-----COMPORTAMIENTO DEL FRAME DEL MAPA

document.addEventListener('DOMContentLoaded', function() {
    const dondeEstamosLink = document.getElementById('donde-estamos-link');
    const mapFrameContainer = document.getElementById('map-frame-container');
    const closeMapFrame = document.getElementById('close-map-frame');

    dondeEstamosLink.addEventListener('click', function(e) {
        e.preventDefault();
        mapFrameContainer.classList.add('show');
        mapFrameContainer.classList.remove('hidden');
    });

    closeMapFrame.addEventListener('click', function() {
        mapFrameContainer.classList.remove('show');
        mapFrameContainer.classList.add('hidden');
    });
});