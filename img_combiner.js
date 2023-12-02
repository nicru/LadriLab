// Esta función combina las imágenes seleccionadas del carrusel y permite al usuario descargar la imagen combinada.

function combineImagesAndDownload() {
    // Crear un lienzo virtual
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Obtener las imágenes del estado actual del carrusel
    const cabezaImg = new Image();
    cabezaImg.src = dogParts.cabeza[currentIndex.cabeza];

    const cuerpoImg = new Image();
    cuerpoImg.src = dogParts.cuerpo[currentIndex.cuerpo];

    const colaImg = new Image();
    colaImg.src = dogParts.cola[currentIndex.cola];

    // Esperar a que se carguen todas las imágenes
    Promise.all([cabezaImg, cuerpoImg, colaImg].map(img => {
        return new Promise(resolve => {
            img.onload = resolve;
        });
    })).then(() => {
        // Establecer el tamaño del lienzo para que coincida con el tamaño de la imagen combinada
        canvas.width = cabezaImg.width + cuerpoImg.width + colaImg.width;
        canvas.height = Math.max(cabezaImg.height, cuerpoImg.height, colaImg.height);

        // Dibujar las imágenes en el lienzo virtual
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(cabezaImg, 0, 0);
        ctx.drawImage(cuerpoImg, cabezaImg.width, 0);
        ctx.drawImage(colaImg, cabezaImg.width + cuerpoImg.width, 0);

        // Convertir el lienzo en una URL de datos
        const dataURL = canvas.toDataURL('image/png');

        // Crear un elemento de anclaje para iniciar la descarga
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'perrito.png';

        // Simular un clic en el elemento de anclaje para iniciar la descarga
        downloadLink.click();

        // Eliminar el elemento del lienzo (opcional)
        canvas.remove();
    });
}