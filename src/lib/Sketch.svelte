<script lang="ts">
  //@ts-ignore
  import canvasSketch from "canvas-sketch";
  import { onMount } from "svelte";
  import { currentChanged } from "../scripts/tools";
  import {
    drawImageInCanvas,
    drawText1AndColorInCanvas,
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
      canvasHeight: 2048,
      canvasWidth: 2048,
      styleHeight: 500,
      styleWidth: 500,
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
                drawText1AndColorInCanvas(context, value);
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
