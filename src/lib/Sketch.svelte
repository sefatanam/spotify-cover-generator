<script lang="ts">
  //@ts-ignore
  import canvasSketch from "canvas-sketch";
  import { onMount } from "svelte";
  import { currentChanged, fadeSetting } from "../scripts/tools";
  import {
    addColorInTextOne,
    addColorInTextTwo,
    changeShapeColor,
    drawFadeColor,
    drawImageInCanvas,
    drawTextOne,
    drawTextTwo,
  } from "../scripts/engine";

  let canvas: HTMLCanvasElement;
  let settings = {};

  onMount(() => {
    settings = {
      dimensions: [2048, 2048],
      styleCanvas: false,
      units: "px",
      scaleToView: true,
      canvas: canvas,
      resizeCanvas: true,
      scaleToFit:false
    };
    currentChanged.subscribe(({ key, value }) => {
      canvasSketch(
        // @ts-ignore
        ({ context, canvasHeight, canvasWidth, ...args }) => {
          return () => {
            switch (key) {
              case "fileURL": {
                drawImageInCanvas(context, value, canvasWidth, canvasHeight);
                break;
              }
              case "text1": {
                drawTextOne(context, value);
                break;
              }
              case "text2": {
                drawTextTwo(context, value);
                break;
              }
              case "color1": {
                addColorInTextOne(context, $fadeSetting.text1, value);
                break;
              }
              case "color2": {
                addColorInTextTwo(context, $fadeSetting.text2, value);
                break;
              }
              case "fadeColor": {
                drawFadeColor(context, value, canvasWidth, canvasHeight);
                break;
              }
              case "shapeColor": {
                changeShapeColor(context, value, canvasWidth, canvasHeight);
                break;
              }
            }
          };
        },
        { ...settings, canvas }
      );
    });
  });


  const exportAsImage = () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `spotify-cover-${Date.now()}.png`;
    link.click( )
  }
</script>

<canvas bind:this={canvas} id="canvas" class="max-h-[300px] max-w-[300px] sm:max-h-[300px] sm:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"></canvas>

 
<button class="control text-white bg-slate-900 px-4 py-2" on:click={exportAsImage}>Export</button>