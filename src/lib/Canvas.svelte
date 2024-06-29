<script lang="ts">
  import { choosedCover as cover } from "../scripts/store";
  import { fadeSetting, currentChanged } from "../scripts/tools";
  import {
    drawImageInCanvas,
    drawText1AndColorInCanvas,
  } from "../scripts/engine";
  import { onMount, afterUpdate } from "svelte";

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  onMount(() => {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    context = canvas?.getContext("2d") as CanvasRenderingContext2D;
  });

  currentChanged.subscribe(({ key, value }) => {
    if (!context) return;
    switch (key) {
      case "fileURL": {
        drawImageInCanvas(context, value, 500, 500);
        break;
      }
      case "text1": {
        drawText1AndColorInCanvas(context, value);
      }
      default: {
        console.log("key: ", key, " value: ", value, "invalid");
      }
    }
  });
  
</script>

<div class="linear-background md:flex md:items-center md:justify-center p-10">
  <div class="space-y-4 md:w-1/2">
    <h1 class="font-bold text-3xl text-white md:text-4xl">
      Preview of {$cover?.name} cover
    </h1>
    <canvas id="canvas" width="500" height="500" class="bg-white">
      (Your browser does not support the canvas element)
    </canvas>
  </div>
</div>
