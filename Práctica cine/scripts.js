
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