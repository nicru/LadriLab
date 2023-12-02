// Este script maneja la funcionalidad del carrusel que permite al usuario navegar a través de diferentes partes de un perro para su generación.

// Objeto que almacena las fuentes de imagen para cada parte del perro.
const dogParts = {
    cabeza: [
        'img/dibujos perritos/Perro_1_Cabeza.png',
        'img/dibujos perritos/Perro_2_Cabeza.png',
        'img/dibujos perritos/Perro_3_Cabeza.png',
        'img/dibujos perritos/Perro_4_Cabeza.png',
        'img/dibujos perritos/Perro_5_Cabeza.png',
        'img/dibujos perritos/Perro_6_Cabeza.png',
        'img/dibujos perritos/Perro_7_Cabeza.png',
        'img/dibujos perritos/Perro_8_Cabeza.png'
    ],
    cuerpo: [
        'img/dibujos perritos/Perro_1_Cuerpo.png',
        'img/dibujos perritos/Perro_2_Cuerpo.png',
        'img/dibujos perritos/Perro_3_Cuerpo.png',
        'img/dibujos perritos/Perro_4_Cuerpo.png',
        'img/dibujos perritos/Perro_5_Cuerpo.png',
        'img/dibujos perritos/Perro_6_Cuerpo.png',
        'img/dibujos perritos/Perro_7_Cuerpo.png',
        'img/dibujos perritos/Perro_8_Cuerpo.png'
    ],
    cola: [
        'img/dibujos perritos/Perro_1_Cola.png',
        'img/dibujos perritos/Perro_2_Cola.png',
        'img/dibujos perritos/Perro_3_Cola.png',
        'img/dibujos perritos/Perro_4_Cola.png',
        'img/dibujos perritos/Perro_5_Cola.png',
        'img/dibujos perritos/Perro_6_Cola.png',
        'img/dibujos perritos/Perro_7_Cola.png',
        'img/dibujos perritos/Perro_8_Cola.png'
    ]
};

// Índice actual para cada parte del perro.
const currentIndex = {
    cabeza: 0,
    cuerpo: 0,
    cola: 0
};

// Función para navegar a través de las imágenes.
function navigate(direction, part) {
    // Actualiza el índice según la dirección.
    if (direction === 'next') {
        currentIndex[part] = (currentIndex[part] + 1) % dogParts[part].length;
    } else if (direction === 'prev') {
        currentIndex[part] = (currentIndex[part] - 1 + dogParts[part].length) % dogParts[part].length;
    }

    // Selecciona el elemento img correcto según la parte.
    const imgElement = document.querySelector(`.contenedor-${part} img`);
    imgElement.src = dogParts[part][currentIndex[part]];
}

// Agrega este controlador de eventos una vez que se haya cargado completamente el DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Configura las imágenes iniciales para cada contenedor.
    document.querySelector('.contenedor-cabeza img').src = dogParts.cabeza[currentIndex.cabeza];
    document.querySelector('.contenedor-cuerpo img').src = dogParts.cuerpo[currentIndex.cuerpo];
    document.querySelector('.contenedor-cola img').src = dogParts.cola[currentIndex.cola];
});