function combineImagesAndDownload() {
    // Create a virtual canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Get the images from the current state of the carousel
    const cabezaImg = new Image();
    cabezaImg.src = dogParts.cabeza[currentIndex.cabeza];

    const cuerpoImg = new Image();
    cuerpoImg.src = dogParts.cuerpo[currentIndex.cuerpo];

    const colaImg = new Image();
    colaImg.src = dogParts.cola[currentIndex.cola];

    // Wait for all images to load
    Promise.all([cabezaImg, cuerpoImg, colaImg].map(img => {
        return new Promise(resolve => {
            img.onload = resolve;
        });
    })).then(() => {
        // Set the canvas size to match the combined image size
        canvas.width = cabezaImg.width + cuerpoImg.width + colaImg.width;
        canvas.height = Math.max(cabezaImg.height, cuerpoImg.height, colaImg.height);

        // Draw the images onto the virtual canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(cabezaImg, 0, 0);
        ctx.drawImage(cuerpoImg, cabezaImg.width, 0);
        ctx.drawImage(colaImg, cabezaImg.width + cuerpoImg.width, 0);

        // Convert the canvas to a data URL
        const dataURL = canvas.toDataURL('image/png');

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'perrito.png';

        // Simulate a click on the anchor element to initiate the download
        downloadLink.click();

        // Remove the canvas element (optional)
        canvas.remove();
    });
}
