<script lang="ts">
  import curbeCover from "/curbe.svg";
  import defaultCover from "/default.svg";
  import fadeCover from "/fade.svg";
</script>

<div class="linear-background p-4 gap-4 grid">
  <h1 class="font-bold text-3xl text-white">Choose Template</h1>
  <div class="grid grid-cols-4 grid-rows-4 gap-4">
    <div class="col-start-1 col-end-3 row-start-1 row-end-3">
      <img src={defaultCover} class="fit-img" alt="Vite Logo" />
    </div>
    <div class="col-start-3 col-end-5 row-start-1 row-end-3">
      <img src={fadeCover} class="fit-img" alt="Vite Logo" />
    </div>
    <div class="col-start-2 col-end-4 row-start-3 row-end-5">
      <img src={curbeCover} class="fit-img" alt="Vite Logo" />
    </div>
  </div>
  <button type="button" class="bg-black text-white py-3 rounded-md border-current font-sans font-extralight text-xl hover:bg-slate-900">Continue</button>
</div>
