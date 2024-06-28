<script lang="ts">
  import Greeting from "./lib/Greeting.svelte";

  import Home from "./lib/Home.svelte";
</script>

<main class="sm:container md:min-w-[100%] sm:mx-auto grid md:grid-cols-2 min-h-screen">
    <Greeting />
    <Home />
</main>
