<template>
  <div
    class="w-full h-[45vh] bg-cover brightness-75 relative"
    style="background-image: url(../_nuxt/public/images/bg2.webp)"
  >
    <img
      src="../public/images/bg2.webp"
      class="absolute w-full h-full left-0 top-0 object-cover -z-10"
      width="100%"
      alt="banner"
      height="100%"
    />
  </div>

  <h1 class="text-[36px] text-white font-bold -top-32 relative container">
    <slot />
  </h1>
</template>
