<template>
  <div class="bg-bg-third" v-if="show">
    <BannerSection />
    <Search />
    <RealEstateSection
      :realEstate="Recent"
      title="Recent"
      p1="Properties"
      p2="Check out some of our latest properties."
      py="0"
      pyMd="0"
    />
    <FeaturedRealEstate :realEstate="Featured" />
    <RealEstateSection
      :realEstate="Sale"
      title="Properties"
      p1="For Sale"
      p2="Check out latest properties for sale."
      py="0"
      pyMd="0"
    />
    <RealEstateSection
      :realEstate="Rent"
      bg="white"
      title="Properties"
      p1="For Rent"
      p2="Check out latest properties for rent."
      py="36"
      pyMd="24"
    />

    <BuyOrSell />
    <AgentSection />
    <Quote />
    <FeaturesSection />
    <LookingForMore />
    <Brands />
  </div>
</template>
<script setup>
const store = ref(RealEstateStore());
const Rent = ref();
const Sale = ref();
const Recent = ref();
const Featured = ref();

onBeforeMount(() => {
  store.value.GetRealEstate();
});
watch(
  store,
  (newValue, oldValue) => {
    if (store.value.RealEstates !== (null && undefined)) {
      Rent.value = store.value.RealEstates.filter((r) => {
        return r.type.toLowerCase() === "rent";
      });
      Sale.value = store.value.RealEstates.filter((r) => {
        return r.type.toLowerCase() === "sale";
      });
      Featured.value = store.value.RealEstates.filter((r) => {
        return r.Featured === true;
      });
      Recent.value = store.value.RealEstates.slice(0, 6);
    }
  },
  { immediate: true, deep: true }
);
const show = ref(false);
onMounted(() => {
  show.value = true;
});
useSeoMeta({
  title: "Home",
  description:
    "Find your dream home with our comprehensive real estate platform, offering a wide range of properties tailored to your needs. Explore detailed listings, virtual tours, and expert advice to make informed decisions effortlessly. Your perfect home is just a click away!",
});
</script>
