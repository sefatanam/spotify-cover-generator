<script lang="ts">
  let file: File | null = null;
  let text1: string = "";
  let text2: string = "";
  let color1: string = "#000000";
  let color2: string = "#000000";
  let position: string = "";
  let fadeColor: string = "#000000";

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const handleFileChange = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      console.log("File selected");
      file= files[0];
      console.log(file)
    }
  };
</script>

<div class="p-10 space-y-8">
  <h1 class="font-bold text-3xl text-white md:text-4xl">Tools</h1>
  <div class="space-y-4">
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
      <input type="text" id="textbox1" class=" contorl" bind:value={text1} />
    </div>

    <div>
      <label for="textbox2" class="label">Text 2</label>
      <input type="text" id="textbox2" class="contorl" bind:value={text2} />
    </div>

    <div>
      <label for="color-picker1" class="label">Text Color 1</label>
      <input
        type="color"
        id="color-picker1"
        class="contorl"
        bind:value={color1}
      />
    </div>

    <div>
      <label for="color-picker2" class="label">Text Color 2</label>
      <input
        type="color"
        id="color-picker2"
        class=" contorl"
        bind:value={color2}
      />
    </div>
    <div>
        <label for="color-picker2" class="label">Fade Color</label>
        <input
          type="color"
          id="color-picker2"
          class=" contorl"
          bind:value={fadeColor}
        />
      </div>

    <div>
      <label for="position-picker" class="label">Position Picker</label>
      <select id="position-picker" class=" contorl" bind:value={position}>
        <option value="">Select Position</option>

        {#each positions as pos}
          <option value={pos}>{pos}</option>
        {/each}
      </select>
    </div>
  </div>
</div>
