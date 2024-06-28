<script lang="ts">
  import { choosedCover as cover } from "../scripts/store";
</script>

<div class="linear-background space-y-4 p-6">
  <h1 class="font-bold text-3xl text-white md:text-6xl">Preview</h1>
  <div class="grid grid-cols-1 grid-rows-1 gap-4 md:gap-10 md:px-10 md:py-4">
    
      <button
        id={$cover?.id.toString()}      >
        <img
          src={$cover?.img}
          class="fit-img"
          alt={$cover?.name}
        />
        
      </button>
  
  </div>
 
</div>
