<template>
  <div class="bg-bg-third pb-20" v-if="show">
    <BannerPages>Our Agents </BannerPages>
    <Search class="-top-24" />
    <div class="container font-[400]">
      <div class="flex flex-col gap-24 text-[15px]">
        <div
          v-if="store.Agents"
          class="flex flex-col gap-3 bg-white p-5"
          v-for="agent in store.Agents"
          :key="agent.id"
        >
          <div
            class="flex gap-3 items-end flex-wrap max-[404px]:justify-center"
          >
            <img
              loading="lazy"
              :src="agent.img"
              :alt="agent.name"
              width="132px"
              height="132px"
              class="size-[132px] -mt-[70px]"
            />
            <div>
              <NuxtLink
                :to="'/agent/' + agent.id"
                class="hover:text-secondary-color font-bold mb-2 text-[24px]"
                >{{ agent.name }}
              </NuxtLink>
              <div class="text-text-secondary flex gap-2">
                <v-icon
                  name="bi-facebook"
                  scale="1.3"
                  class="hover:text-blue-900 cursor-pointer"
                />
                <v-icon
                  name="co-twitter"
                  scale="1.3"
                  class="hover:text-blue-600 cursor-pointer"
                />
                <v-icon
                  name="co-linkedin-in"
                  scale="1.3"
                  class="hover:text-blue-700 cursor-pointer"
                />
                <v-icon
                  name="co-instagram"
                  scale="1.3"
                  class="hover:text-red-300 cursor-pointer"
                />
                <v-icon
                  name="co-pinterest"
                  scale="1.3"
                  class="hover:text-red-500 cursor-pointer"
                />
                <v-icon
                  name="pr-youtube"
                  scale="1.3"
                  class="hover:text-red-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p
            class="text-text-secondary leading-[2] line-clamp-3 h-[97px] overflow-hidden max-[404px]:text-center"
            style="height: '120px'"
          >
            {{ agent.details }}
          </p>
          <div class="flex gap-5 justify-between flex-wrap">
            <div class="flex flex-col gap-3">
              <div class="flex flex-wrap gap-3 max-[404px]:flex-col">
                <p class="text-text-secondary">
                  Office: <span class="text-black">{{ agent.Office }}</span>
                </p>
                <p class="text-text-secondary">
                  Mobile: <span class="text-black">{{ agent.Mobile }}</span>
                </p>
              </div>
              <div class="flex flex-wrap gap-3 max-[404px]:flex-col">
                <p class="text-text-secondary">
                  Fax: <span class="text-black">{{ agent.Fax }}</span>
                </p>
                <p class="text-text-secondary">
                  WhatsApp: <span class="text-black">{{ agent.WhatsApp }}</span>
                </p>
              </div>
              <p class="text-text-secondary">
                Email: <span class="text-black">{{ agent.Email }}</span>
              </p>
            </div>
            <NuxtLink
              :to="'/agent/' + agent.id"
              class="text-primary-color hover:text-secondary-color font-bold hover:underline pb-3 max-[404px]:w-full"
              >View My Listing
            </NuxtLink>
          </div>
        </div>
        <AgentCardSkeleton v-else v-for="agent in [1, 2, 3, 4]" :key="agent" />
      </div>
    </div>
  </div>
</template>
<script setup>
const show = ref(false);
onMounted(() => {
  store.GetAgents();

  show.value = true;
});
const store = AgentsStore();
useSeoMeta({
  title: "Agents",
  description:
    "Meet our experienced agents dedicated to helping you find your perfect property. Browse agent profiles to learn about their expertise, specialties, and client reviews. Connect with a trusted professional to guide you through your real estate journey.",
});
</script>
