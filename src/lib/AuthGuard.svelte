<script lang="ts">
  import { choosedCover } from "../scripts/store";
</script>

{#if $choosedCover?.id}
  <slot name="edit"></slot>
{:else}
  <slot name="home"></slot>
{/if}
