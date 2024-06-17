<template>
  <div
    class="flex flex-col items-center justify-center forRent"
    :class="'py-' + py + ' md:py-' + pyMd"
    :style="
      bg == 'white' &&
      ' background:white; clip-path:polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%)'
    "
  >
    <p class="text-secondary-color text-[15px] p-0 m-0 font-bold">
      {{ title }}
    </p>
    <p class="text-[36px] p-0 m-0">{{ p1 }}</p>
    <p class="text-text-secondary text-[15px] p-0 m-0">
      {{ p2 }}
    </p>
    <Carousel
      :value="realEstate || [1, 2, 3, 4, 5]"
      :responsiveOptions="responsiveOptions"
      :numScroll="1"
      :numVisible="3"
    >
      <template #item="slotProps">
        <RealEstateCard :items="slotProps?.data" v-if="realEstate" />
        <skeletonCardHorizontal v-else />
      </template>
    </Carousel>
  </div>
</template>
<script setup>
const props = defineProps({
  realEstate: {
    type: Object && undefined,
    required: true,
  },
  py: {
    type: String,
  },
  pyMd: {
    type: String,
  },
  bg: {
    type: String,
  },
  title: {
    type: String,
  },
  p1: {
    type: String,
  },
  p2: {
    type: String,
  },
});
const responsiveOptions = ref([
  {
    breakpoint: "2000px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1025px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "760px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
<style>
[data-pc-section="item"] > div {
  width: 98%;
}
</style>
