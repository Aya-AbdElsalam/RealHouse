<template>
  <div class="bg-bg-third">
    <TopHeader />
    <slot />
    <Footer />
    <ScrollTop
      class="rounded-none size-[43px] border-2 border-secondary-color font-bold bg-secondary-color hover:bg-secondary-color"
    />
  </div>
</template>
