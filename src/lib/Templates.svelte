<script lang="ts">
    import { covers, type Cover, choosedCover } from "../scripts/store";
    const selectCoverHandler = (cover: Cover) => {
      if ($choosedCover?.id !== cover.id) {
        choosedCover.set(cover);
        return;
      }
      choosedCover.set(null);
    };
  </script>
  
  <div class="linear-background space-y-4 p-6">
    <h1 class="font-bold text-3xl text-white md:text-6xl">Choose Template</h1>
    <div class="grid grid-cols-4 grid-rows-4 gap-4 md:gap-10 md:px-10 md:py-4">
      {#each covers as cover}
        <button
          id={cover.id.toString()}
          on:click={() => selectCoverHandler(cover)}
          class="{cover.position} hover:cursor-pointer relative"
        >
          <img
            src={cover.img}
            class="fit-img hover:brightness-50 {$choosedCover?.id === cover.id
              ? 'brightness-50'
              : 'brightness-100'}"
            alt={cover.name}
          />
          {#if $choosedCover?.id === cover.id}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute size-28 top-1 right-1 text-white z-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          {/if}
        </button>
      {/each}
   
    </div>
    <!-- <div class="flex justify-center h-fit">
      <button
        disabled={!$choosedCover?.id}
        type="button"
        class="bg-black text-white px-8 py-3 rounded-md border-current font-sans font-extralight text-xl hover:bg-slate-900 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >Continue</button
      >
    </div> -->
  </div>
  