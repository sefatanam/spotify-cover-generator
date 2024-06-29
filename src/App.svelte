<script lang="ts">
  import AuthGuard from "./lib/AuthGuard.svelte";
  import Edit from "./lib/Edit.svelte";
  import Home from "./lib/Home.svelte";
</script>

<AuthGuard>
  <Home slot="home" />
  <Edit slot="edit" />
</AuthGuard>
