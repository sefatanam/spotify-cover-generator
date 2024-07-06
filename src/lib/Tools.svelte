<script lang="ts">
  import { positions, fadeSetting, currentChanged } from "../scripts/tools";

  const handleFileChange = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const reader = new FileReader();
      reader.onload = () => {
        currentChanged.set({ key: "fileURL", value: reader.result as string });
      };
      reader.readAsDataURL(files[0]);
    }
  };
</script>

<div class="p-10 space-y-2">
  <h1 class="font-bold text-3xl text-white md:text-4xl">Tools</h1>
  <p class="text-white text-xl md:text-2xl font-thin">
    (To Start Editing, Please Upload a Image First)
  </p>

  <div class="space-y-4 pt-10">
    <h2 class="font-bold text-xl text-white md:text-2xl">Default</h2>
    <div>
      <label for="file-picker" class="label">File Picker</label>
      <input
        type="file"
        id="file-picker"
        class=" contorl"
        on:change={(event) => handleFileChange(event)}
      />
    </div>

    <div>
      <label for="textbox1" class="label">Text 1</label>
      <input
        type="text"
        id="textbox1"
        class=" contorl"
        bind:value={$fadeSetting.text1}
        on:change={() =>
          currentChanged.set({ key: "text1", value: $fadeSetting.text1 })}
      />
    </div>

    <div>
      <label for="textbox2" class="label">Text 2</label>
      <input
        type="text"
        id="textbox2"
        class="contorl"
        bind:value={$fadeSetting.text2}
        on:change={() =>
          currentChanged.set({ key: "text2", value: $fadeSetting.text2 })}
      />
    </div>

    <div>
      <label for="color-picker1" class="label">Text Color 1</label>
      <input
        type="color"
        id="color-picker1"
        class="contorl"
        bind:value={$fadeSetting.color1}
        on:change={() =>
          currentChanged.set({ key: "color1", value: $fadeSetting.color1 })}
      />
    </div>

    <div>
      <label for="color-picker2" class="label">Text Color 2</label>
      <input
        type="color"
        id="color-picker2"
        class="contorl"
        bind:value={$fadeSetting.color2}
        on:change={() =>
          currentChanged.set({ key: "color2", value: $fadeSetting.color2 })}
      />
    </div>
    <div>
      <label for="color-picker2" class="label">Fade Color</label>
      <input
        type="color"
        id="color-picker2"
        class="contorl"
        bind:value={$fadeSetting.fadeColor}
        on:change={() =>
          currentChanged.set({
            key: "fadeColor",
            value: $fadeSetting.fadeColor,
          })}
      />
    </div>
    <div>
      <label for="color-picker3" class="label">Shape Color</label>
      <input
        type="color"
        id="color-picker3"
        class="contorl"
        bind:value={$fadeSetting.shapeColor}
        on:change={() =>
          currentChanged.set({
            key: "shapeColor",
            value: $fadeSetting.shapeColor,
          })}
      />
    </div>

    <!-- <div>
      <label for="position-picker" class="label">Text Position</label>
      <select
        id="position-picker"
        class=" contorl"
        bind:value={$fadeSetting.position}
      >
        <option value="">Select Position</option>

        {#each $positions as pos}
          <option value={pos}>{pos}</option>
        {/each}
      </select>
    </div> -->
  </div>
</div>
