<template>
  <div class="bg-bg-third" v-if="show">
    <BannerSection />
    <Search />
    <RealEstateSection
      :allow="allow"
      :realEstate="near"
      title="Near you"
      p1="Properties"
      p2="Check out latest properties near you"
      py="0"
      pyMd="0"
    />
    <RealEstateSection
      :realEstate="Recent"
      title="Recent"
      p1="Properties"
      p2="Check out some of our latest properties."
      bg="white"
      py="36"
      pyMd="24"
    />
    <FeaturedRealEstate :realEstate="Featured" />
    <RealEstateSection
      :realEstate="Sale"
      title="Properties"
      p1="For Sale"
      p2="Check out latest properties for sale."
      py="36"
      pyMd="24"
      bg="white"
    />
    <RealEstateSection
      :realEstate="Rent"
      title="Properties"
      p1="For Rent"
      p2="Check out latest properties for rent."
      py="0"
      pyMd="0"
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
const near = ref();
const allow = inject("allow");
const GetLocation = inject("GetLocation");
const location = inject("location");

onBeforeMount(() => {
  store.value.GetRealEstate();
  GetLocation();
});

watch(
  store,
  (newValue, oldValue) => {
    if (store.value.RealEstates !== (null && undefined)) {
      near.value =
        store.value.RealEstates.filter((r) => {
          return r.location.toLowerCase() === location?.value?.toLowerCase();
        }) || [];
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
