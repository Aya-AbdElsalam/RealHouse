<template>
  <div class="bg-bg-third" v-if="show">
    <BannerPages>Real Estates</BannerPages>
    <Search class="-top-24" />
    <div
      style="transition: all 3s ease !important"
      class="container pb-20 flex gap-8 max-[1198px]:flex-col"
    >
      <RealEstateItems :RealEstates="store.RealEstates" />
      <div class="flex flex-col gap-5 grow justify-start">
        <p class="text-[22px]">Agents</p>
        <NuxtLink
          v-if="storeAgent.Agents"
          :to="'/agent/' + agent?.id"
          class="flex flex-col gap-3 group bg-white p-5 shadow-md justify-center max-[1198px]:justify-start items-center max-[1198px]:flex-row"
          v-for="agent in storeAgent.Agents"
          :key="agent?.id"
        >
          <img
            loading="lazy"
            :src="agent?.img"
            class="rounded-full size-[88.5px] group-hover:scale-110"
            :alt="agent?.name"
          />
          <div class="min-[1198px]:text-center">
            <p class="font-bold text-[18px]">{{ agent?.name }}</p>
            <p>{{ agent?.Email }}</p>
            <p>{{ agent?.WhatsApp }}</p>
          </div>
        </NuxtLink>
        <div
          v-else
          :key="n"
          v-for="n in [1, 2, 3, 4]"
          class="flex flex-col gap-3 group bg-white p-5 shadow-md justify-center max-[1198px]:justify-start items-center max-[1198px]:flex-row"
        >
          <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
          <div class="w-full">
            <Skeleton width="100%" class="mb-2"></Skeleton>
            <Skeleton width="90%" class="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const storeAgent = AgentsStore();
const store = RealEstateStore();
const show = ref(false);
onMounted(() => {
  show.value = true;
});
onBeforeMount(() => {
  store.GetRealEstate();
  storeAgent.GetAgents();
});
useSeoMeta({
  title: "RealEstate",
  description:
    "Discover your next property on our real estate page. Browse an extensive collection of homes, apartments, and commercial spaces, complete with detailed descriptions and high-quality images. Find the perfect property to meet your needs and start your journey today.",
});
</script>
