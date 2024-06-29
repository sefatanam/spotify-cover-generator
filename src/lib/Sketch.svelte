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

  const startSketch = () => {
    canvasSketch(
      // @ts-ignore
      ({ context, width, height }) => {
        return () => {
          context.fillStyle = "white";
          context.fillRect(0, 0, width, height);
        };
      },
      { settings, canvas }
    );
  };

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
    // startSketch()
    currentChanged.subscribe(({ key, value }) => {
      canvasSketch(
        // @ts-ignore
        ({ context, width, height }) => {
          console.log(width, height);
          return () => {
            switch (key) {
              case "fileURL": {
                drawImageInCanvas(context, value, width, height);
                break;
              }
              case "text1": {
                drawText1AndColorInCanvas(context, value);
              }
              default: {
                console.log("key: ", key, " value: ", value, "invalid");
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

