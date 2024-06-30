export interface CanvasLayer {
    draw: (context: CanvasRenderingContext2D) => void
}

export const layers: { [key: string]: CanvasLayer } = {}
export const addLayer = (context: CanvasRenderingContext2D, key: string, layer: CanvasLayer) => {
    layers[key] = layer;
    redrawCanvas(context)
}
export const removeLayer = (context: CanvasRenderingContext2D, key: string) => {
    delete layers[key];
    redrawCanvas(context);
};

let redrawPending = false;

const redrawCanvas = (context: CanvasRenderingContext2D) => {
    if (redrawPending) return;

    redrawPending = true;
    requestAnimationFrame(() => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        Object.values(layers).forEach(layer => layer.draw(context));
        redrawPending = false;
    });
};

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
        removeLayer(context, 'image');
        addLayer(context, 'image', {
            draw: (context: CanvasRenderingContext2D) => {
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
        })
    }
}

/**
 * Draws text in layer 'text2' on the canvas with a specified font and position.
 *
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {string} text - The text to be drawn.
 */
export const drawTextOne = (context: CanvasRenderingContext2D, text: string) => {
    removeLayer(context, 'text1');
    addLayer(context, 'text1', {
        draw: (context: CanvasRenderingContext2D) => {
            context.font = "bold 200px system-ui";
            context.fillText(text, 30, 200);
        }
    })
}

/**
 * Adds color to the text in layer 'text1' on the canvas.
 *
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {string} text - The text to be colored.
 * @param {string} color - The color to be applied to the text. If not provided, the text will be colored white.
 * @return {void} This function does not return anything.
 */
export const addColorInTextOne = (context: CanvasRenderingContext2D, text: string, color: string) => {
    removeLayer(context, 'text1');
    addLayer(context, 'text1', {
        draw: (context: CanvasRenderingContext2D) => {
            context.font = "bold 200px system-ui";
            context.fillStyle = color || 'white';
            context.fillText(text, 30, 200);
        }
    })
}

/**
 * Draws text in layer 'text2' on the canvas with a specified font and position.
 *
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {string} text - The text to be drawn.
 */
export const drawTextTwo = (context: CanvasRenderingContext2D, text: string) => {
    removeLayer(context, 'text2');
    addLayer(context, 'text2', {
        draw: (context: CanvasRenderingContext2D) => {
            context.font = "bold 200px system-ui";
            context.fillText(text, 30, 400);
        }
    })
}

/**
 * Adds color to the text in layer 'text1' on the canvas.
 *
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {string} text - The text to be colored.
 * @param {string} color - The color to be applied to the text. If not provided, the text will be colored white.
 * @return {void} This function does not return anything.
 */
export const addColorInTextTwo = (context: CanvasRenderingContext2D, text: string, color: string) => {
    removeLayer(context, 'text2');
    addLayer(context, 'text2', {
        draw: (context: CanvasRenderingContext2D) => {
            context.font = "bold 200px system-ui";
            context.fillStyle = color || 'white';
            context.fillText(text, 30, 400);
        }
    })
}



export const drawFadeColor = (context: CanvasRenderingContext2D, color: string, width: number, height: number) => {
    removeLayer(context, 'fadeColor');
    addLayer(context, 'fadeColor', {
        draw: (ctx: CanvasRenderingContext2D) => {
            const rgbColor = hexToRgb(color)  // Example RGB color
            // Draw a rectangle with a fading effect
            ctx.fillStyle = rgbColor;
            // Draw multiple rectangles with decreasing alpha transparency to create a fade effect
            for (let i = 0; i <= 10; i++) {
                 
                ctx.globalAlpha = 0.1;
                ctx.fillRect(0, 0, width, height);  // Example rectangle position and size
            }
            ctx.globalAlpha = 1;
        }
    })

}


// Convert hex color to RGB format
function hexToRgb(hex: string) {
    // Remove '#' if present
    hex = hex.replace('#', '');
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b}, 0.10 )`;
}
