<template>
  <div class="flex flex-col gap-2 text-center items-center justify-center">
    <p class="text-secondary-color text-[15px] p-0 m-0 font-bold">OUR</p>
    <p class="text-[36px] p-0 m-0">Partners</p>
    <p class="text-text-secondary text-[15px] p-0 m-0">
      We honoured to have these amazing partners.
    </p>
    <Carousel
      :value="brands || [1, 2, 3, 4, 5]"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      containerClass="Carousel-brand"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <div class="m-2 p-3" v-if="brands">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img
                loading="lazy"
                alt="images of brands"
                :src="slotProps.data.src"
                width="100%"
                height="100%"
                class="w-full h-full"
              />
            </div>
          </div>
        </div>
        <Skeleton shape="square" size="7rem" class="mr-2" v-else></Skeleton>
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const brands = ref(null);

onMounted(() => {
  brands.value = [
    { src: new URL("~/public/images/brand1.webp", import.meta.url) },
    { src: new URL("~/public/images/brand2.webp", import.meta.url) },
    { src: new URL("~/public/images/brand3.webp", import.meta.url) },
    { src: new URL("~/public/images/brand4.webp", import.meta.url) },
    { src: new URL("~/public/images/brand5.webp", import.meta.url) },
  ];
});
const responsiveOptions = ref([
  {
    breakpoint: "2000px",
    numVisible: 5,
    numScroll: 1,
  },

  {
    breakpoint: "767px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 1,
  },
]);
</script>
<style lang="scss">
.Carousel-brand {
  transition: all 0.5s;
  button:hover {
    background-color: #ea723d !important;
    cursor: pointer;
    color: white;
    width: 30px;
    height: 30px;
  }
}
</style>
