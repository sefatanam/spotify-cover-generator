<script lang="ts">
  import { choosedCover as cover } from "../scripts/store";
</script>

<div class="linear-background md:flex md:items-center md:justify-center p-10">
  <div class="space-y-4 md:w-1/2">
    <h1 class="font-bold text-3xl text-white md:text-4xl">Preview</h1>
    <div class="grid">
      <!-- TODO -->
      <!-- Drawing Canvas will be here -->
      <div id={$cover?.id.toString()}>
        <img src={$cover?.img} class="fit-img" alt={$cover?.name} />
      </div>
    </div>
  </div>
</div>
