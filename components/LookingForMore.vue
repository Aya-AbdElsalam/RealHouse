<template>
  <div
    class="text-center relative justify-center flex flex-col items-center gap-6 text-white min-h-[80vh] bg-fixed font-bold bg-cover"
    style="
      clip-path: polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%);
      background: url(../_nuxt/public/images/bg.webp);
      background-attachment: fixed;
    "
  >
    <img
      loading="lazy"
      src="../public/images/bg.webp"
      alt="background of loooking for more section"
      class="absolute w-full h-full left-0 top-0 object-cover -z-10"
      width="100%"
      height="100%"
    />
    <div
      class="absolute top-0 left-0 w-full h-full bg-secondary-color/60 -z-10"
    ></div>
    <p class="text-[15px]">Looking for More?</p>
    <p class="text-[36px] font-normal">
      Talk to our experts or Browse through more properties.
    </p>
    <div class="flex justify-center font-bold">
      <button class="bg-black p-4 hover:bg-black/70">Get In Touch</button>
      <button class="bg-white text-black p-4 hover:bg-white/70">
        Browse More
      </button>
    </div>
  </div>
</template>
