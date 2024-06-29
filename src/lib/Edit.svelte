<script lang="ts">
  import { fly } from "svelte/transition";
  import Canvas from "./Canvas.svelte";
  import Tools from "./Tools.svelte";
</script>

<div class="linear-background sm:container md:min-w-[100%] sm:mx-auto flex flex-col md:grid md:grid-cols-2 min-h-screen" transition:fly={{duration: 330}}>
  
    <Canvas />
 
  <div class="flex-1 bg-black">
    <Tools />
  </div>
</div>
