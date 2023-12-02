// Object to hold the image sources for each part of the dog
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

// Current index for each part
const currentIndex = {
    cabeza: 0,
    cuerpo: 0,
    cola: 0
};

// Function to navigate through the images
function navigate(direction, part) {
    // Update the index based on the direction
    if (direction === 'next') {
        currentIndex[part] = (currentIndex[part] + 1) % dogParts[part].length;
    } else if (direction === 'prev') {
        currentIndex[part] = (currentIndex[part] - 1 + dogParts[part].length) % dogParts[part].length;
    }

    // Select the correct img element based on the part
    const imgElement = document.querySelector(`.contenedor-${part} img`);
    imgElement.src = dogParts[part][currentIndex[part]];
}

// Add this event listener once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up the initial images for each container
    document.querySelector('.contenedor-cabeza img').src = dogParts.cabeza[currentIndex.cabeza];
    document.querySelector('.contenedor-cuerpo img').src = dogParts.cuerpo[currentIndex.cuerpo];
    document.querySelector('.contenedor-cola img').src = dogParts.cola[currentIndex.cola];
});
