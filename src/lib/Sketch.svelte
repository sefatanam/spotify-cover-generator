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
      styleCanvas: true,
      units: "px",
      scaleToView: true,
      canvas: canvas,
      resizeCanvas: true,
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
</script>

<canvas bind:this={canvas} id="canvas"></canvas>

<style>
  #canvas {
    max-height: 500px !important;
    max-width: 500px !important;
  }
</style>
