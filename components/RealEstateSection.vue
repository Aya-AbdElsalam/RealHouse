<template>
  <div
    class="flex flex-col items-center justify-center forRent w-full"
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
    <div v-if="allow == false && title == 'Near you'">
      <h2
        class="text-[18px] mt-3 text-center text-secondary-color font-semibold"
      >
        Allow the site to access your location to find nearby properties.
      </h2>
      <img
        src="../public/images/allowlocation.png"
        class="w-full h-[250px] md:h-[300px] object-cover"
        width="100%"
        height="300px"
      />
    </div>
    <div
      v-else-if="
        allow == true && title == 'Near you' && realEstate?.length == 0
      "
      class="flex flex-col items-center text-center"
    >
      <h2
        class="text-[18px] mt-3 text-center text-secondary-color font-semibold"
      >
        There are no properties near you.
      </h2>

      <img
        src="../public/images/notAvailable.png"
        class="w-full h-[250px] md:h-[300px] object-cover"
        width="100%"
        height="300px"
      />
      <NuxtLink
        class="font-bold text-[19px] mt-3 text-white px-6 py-1 hover:bg-primary-color/80 bg-primary-color rounded-md w-full"
        to="/realEstate"
        >Explore RealeEstates</NuxtLink
      >
    </div>
    <Carousel
      v-else
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
const allow = inject("allow");
</script>
<style>
[data-pc-section="item"] > div {
  width: 98%;
}
</style>
