

/**
 * Draws an image on a canvas element while maintaining the aspect ratio.
 *
 * @param {HTMLCanvasElement} canvasRef - The canvas element to draw on.
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {HTMLImageElement} img - The image element to draw.
 * @param {number} width - The width of the canvas.
 * @param {number} height - The height of the canvas.
 * @param {string} url - The URL of the image.
 */
export const drawImageInCanvas = (context: CanvasRenderingContext2D, imgURL: string, width: number, height: number) => {
    const img = document.createElement('img') as HTMLImageElement
    img.src = imgURL;

    img.onload = () => {
        var canvasAspect = width / height;
        var imageAspect = img.width / img.height;
        var renderWidth, renderHeight, xOffset, yOffset;

        if (canvasAspect > imageAspect) {
            renderWidth = width;
            renderHeight = width / imageAspect;
            xOffset = 0;
            yOffset = (height - renderHeight) / 2;
        } else {
            renderWidth = height * imageAspect;
            renderHeight = height;
            xOffset = (width - renderWidth) / 2;
            yOffset = 0;
        }
        context.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
    }
}


export const drawText1AndColorInCanvas = (context: CanvasRenderingContext2D, text: string) => {
    context.font = "bold 30px system-ui";
    context.fillStyle = "white";
    context.fillText(text, 30, 300);
}