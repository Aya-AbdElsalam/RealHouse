<template>
  <div
    class="relative"
    style="clip-path: polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%)"
  >
    <img
      loading="lazy"
      alt="buy or sell"
      src="../public/images/bg2.webp"
      class="absolute w-full h-full left-0 top-0 object-cover"
      width="100%"
      height="100%"
    />

    <div
      class="container text-center relative justify-center flex flex-col items-center gap-6 text-white min-h-[100vh] font-bold"
    >
      <p class="text-[15px]">Buy or Sell</p>
      <p class="text-[26px] sm:text-[36px] font-normal">
        Looking to Buy a new property or Sell an existing one? RealHomes
        provides an awesome solution!
      </p>
      <div class="flex justify-center font-bold gap-3">
        <button class="bg-primary-color p-4 hover:bg-primary-color/70">
          Submit Property
        </button>
        <button class="bg-white text-black/50 p-4 hover:bg-white/70">
          Browse Properties
        </button>
      </div>
    </div>
  </div>
</template>
