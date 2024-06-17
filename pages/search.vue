<template>
  <div v-if="show">
    <BannerPages>Search</BannerPages>
    <Search class="-top-24" />
    <div
      style="transition: all 3s ease !important"
      class="container pb-20 flex gap-8 text-[15px] flex-wrap"
    >
      <div
        class="flex justify-center flex-col items-center w-full"
        v-if="RealEstates?.length == 0"
      >
        <img
          loading="lazy"
          src="../public/images/noData.webp"
          width="100%"
          alt="no data found"
          class="max-w-[500px] h-[350px]"
          height="350px"
        />
        <p class="font-bold text-[18px] text-primary-color">No Data Found</p>
        <NuxtLink
          class="font-bold text-[20px] text-white px-6 py-3 hover:bg-primary-color/80 bg-primary-color rounded-md"
          to="search"
          >clear filter</NuxtLink
        >
      </div>
      <RealEstateItems v-else :RealEstates="RealEstates" />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const show = ref(false);
onMounted(() => {
  show.value = true;
});
const route = useRoute();
const RealEstates = ref([]);
const store = RealEstateStore();

onBeforeMount(() => {
  store.GetRealEstate();
});

watch(
  [store, route],
  ([newA, newB], [prevA, prevB]) => {
    RealEstates.value = store?.RealEstates?.filter((r) => {
      return (
        (route.query.location && route.query?.location?.length != 0
          ? route.query.location.indexOf(r.location.toLowerCase()) != -1
          : true) &&
        (route.query.PropertyStatus &&
        route.query.PropertyStatus.toLowerCase() != "any"
          ? r.type.toLowerCase() === route.query.PropertyStatus.toLowerCase()
          : true) &&
        (route.query.PropertyType && route.query?.PropertyType?.length != 0
          ? route.query.PropertyType.indexOf(r.typeRealEstate.toLowerCase()) !=
            -1
          : true) &&
        (route.query.MinBeds && route.query.MinBeds.toLowerCase() != "any"
          ? r.Bedrooms >= route.query.MinBeds
          : true) &&
        (route.query.MinBaths && route.query.MinBaths.toLowerCase() != "any"
          ? r.Bathrooms >= route.query.MinBaths
          : true) &&
        (route.query.MinPrice && route.query.MinPrice.toLowerCase() != "any"
          ? r.price >= route.query.MinPrice
          : true) &&
        (route.query.MaxPrice && route.query.MaxPrice.toLowerCase() != "any"
          ? r.price <= route.query.MaxPrice
          : true) &&
        (route.query.MinGarages && route.query.MinGarages.toLowerCase() != "any"
          ? r.Garage >= route.query.MinGarages
          : true) &&
        (route.query.Agent && route.query?.Agent?.length != 0
          ? route.query.Agent.indexOf(r.agent.toLowerCase()) !== -1
          : true) &&
        (route.query.MinArea ? r.Area >= route.query.MinArea : true) &&
        (route.query.MaxArea ? r.Area <= route.query.MaxArea : true) &&
        (route.query.PropertyID ? r.id == route.query.PropertyID : true)
      );
    });
  },
  { immediate: true, deep: true }
);
useSeoMeta({
  title: "search",
  description:
    "Easily find your ideal property with our intuitive search page. Filter listings by location, price, size, and more to discover homes that match your criteria. Start your journey to the perfect home with precise and customized search results.",
});
</script>
