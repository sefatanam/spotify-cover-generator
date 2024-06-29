<script lang="ts">
  import { fly } from "svelte/transition";
  import Canvas from "./Canvas.svelte";
  import Tools from "./Tools.svelte";
</script>

<div class="slot-view" transition:fly={{duration: 330}}>
  <Canvas />
  <Tools />
</div>
