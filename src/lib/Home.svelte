<script lang="ts">

  import Greeting from "./Greeting.svelte";
  import Templates from "./Templates.svelte";
</script>

<div class="linear-background sm:container md:min-w-[100%] sm:mx-auto flex flex-col lg:grid lg:grid-cols-2 min-h-screen" >
  <Greeting />
  <div class="flex-1">
    <Templates />
  </div>
</div>
