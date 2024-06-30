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

<div class="md:grid md:place-items-center h-full">
  <div class="space-y-4 p-6">
    <h1 class="font-bold text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl vt-name-[title]">Choose Preset</h1>
    <div class="grid grid-cols-4 grid-rows-4 gap-4 md:gap-10 md:px-10 md:py-4">
      {#each covers as cover}
        <button
          id={cover.id.toString()}
          on:click={() => selectCoverHandler(cover)}
          class="{cover.position} hover:cursor-pointer relative vt-name-[{cover.name}]"
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
  </div>
</div>

