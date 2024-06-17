<template>
  <div class="flex flex-col pb-10 text-center items-center justify-center">
    <p class="text-secondary-color text-[15px] p-0 m-0 font-bold">Meet Our</p>
    <p class="text-[36px] p-0 m-0">Agents</p>
    <p class="text-text-secondary text-[15px] p-0 m-0">
      Get in touch with our real estate experts.
    </p>
    <div
      class="flex gap-5 text-[15px] flex-wrap justify-center items-center mt-[80px] gap-y-24"
    >
      <div
        v-if="store.Agents"
        class="flex flex-col shadow-lg w-[287px] gap-3 bg-white h-[317px] items-center justify-center group relative"
        v-for="agent in store.Agents"
        :key="agent.id"
      >
        <img
          loading="lazy"
          :alt="agent.name"
          :src="agent.img"
          width="128px"
          height="128px"
          class="size-[128px] -mt-[70px]"
        />
        <div class="flex flex-col gap-3">
          <NuxtLink
            class="text-[19px] font-bold hover:text-primary-color"
            :to="'/agent/' + agent.id"
          >
            {{ agent.name }}
          </NuxtLink>
          <p class="text-secondary-color">{{ agent.Mobile }}</p>
          <p class="">{{ agent.Email }}</p>
          <div>
            <p class="text-[24px] text-secondary-color font-bold">
              {{ agent.realEstate }}
            </p>
            <p class="text-[13px] font-bold">Listed Properties</p>
          </div>
        </div>
        <NuxtLink
          :to="'/agent/' + agent.id"
          class="bg-primary-color font-bold p-3 rounded-full text-white hidden absolute left-[45%] top-[92%] group-hover:block"
          ><v-icon name="fa-arrow-right" />
        </NuxtLink>
      </div>
      <skeletonCardHorizontal
        v-else
        v-for="agent in [1, 2, 3, 4]"
        :key="agent"
      />
    </div>
  </div>
</template>
<script setup>
const store = AgentsStore();
const storeRealEstate = RealEstateStore();
onMounted(() => {
  storeRealEstate.GetRealEstate();
  store.GetAgents();
});
</script>
