<template>
  <div class="flex flex-col items-center justify-center forRent">
    <p class="text-secondary-color text-[15px] p-0 m-0 font-bold">Check out</p>
    <p class="text-[36px] p-0 m-0">Featured Properties</p>
    <p class="text-text-secondary text-[15px] p-0 m-0">
      View list of our short listed properties
    </p>
    <Carousel
      :value="realEstate || [1, 2, 3, 4, 5]"
      :numScroll="1"
      :numVisible="1"
    >
      <template #item="slotProps">
        <div class="mt-10" v-if="realEstate">
          <img
            loading="lazy"
            :alt="slotProps?.data.name"
            :src="slotProps?.data.img"
            width="100%"
            height="375px"
            class="w-full h-[375px]"
          />
          <div
            class="relative bg-white shadow-md w-[98%] md:w-[70%] mx-auto -top-16 py-10"
          >
            <div
              v-if="slotProps?.data.Featured"
              class="top-[-18px] left-0 bg-primary-color absolute text-white"
            >
              <div
                class="relative after:content-[''] px-3 py-1 after:absolute after:right-[-32px] after:top-0 after:border-[16.7px] after:border-transparent after:border-l-primary-color"
              >
                Featured
              </div>
            </div>

            <v-icon
              @click="
                ($event) => {
                  useCookie('user').value == undefined
                    ? openSign()
                    : AddToWishList(slotProps?.data);
                }
              "
              name="oi-heart-fill"
              class="absolute bottom-5 right-5 hover:text-red-400 cursor-pointer stroke-red-500"
              :class="
                store?.userDetails?.wishlist?.find((i) => {
                  return slotProps?.data?.id == i.id;
                })
                  ? 'text-red-600'
                  : 'text-white'
              "
              scale="1.7"
            />

            <div class="flex flex-wrap gap-2 m-5 grow max-[768px]:pb-5 w-full">
              <div class="flex gap-3 flex-col">
                <NuxtLink
                  :to="'/Realestate/' + slotProps?.data.id"
                  class="text-[17px] font-bold hover:text-secondary-color"
                >
                  {{ slotProps?.data?.name }}
                </NuxtLink>
                <p
                  class="text-text-secondary text-[14px] line-clamp-1 h-[26px] overflow-hidden w-[95%]"
                >
                  {{ slotProps?.data.details }}
                </p>
                <div class="flex gap-3 text-[13px]">
                  <div
                    class="font-bold"
                    v-if="slotProps?.data.Bedrooms !== 'undefined'"
                  >
                    <p class="mb-2">Bedrooms</p>
                    <p class="flex items-center gap-2">
                      <v-icon
                        scale="1.8"
                        name="md-bedroomchild-round"
                        class="text-text-secondary"
                      />
                      {{ slotProps?.data.Bedrooms }}
                    </p>
                  </div>
                  <div
                    class="font-bold"
                    v-if="slotProps?.data.Bedrooms !== 'undefined'"
                  >
                    <p class="mb-2">Bathrooms</p>
                    <p class="flex items-center gap-2">
                      <v-icon
                        scale="1.8"
                        name="md-bathroom-twotone"
                        class="text-text-secondary"
                      />
                      {{ slotProps?.data.Bathrooms }}
                    </p>
                  </div>
                  <div class="font-bold">
                    <p class="mb-2">Area</p>
                    <p class="flex items-center gap-2">
                      <v-icon
                        scale="1.8"
                        name="co-border-style"
                        class="text-text-secondary"
                      />
                      {{ slotProps?.data.Area }}
                      <span class="text-text-secondary">Sq Ft</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p>For {{ slotProps?.data.type }}</p>
                  <p class="text-secondary-color text-[22px] font-semibold">
                    ${{ slotProps?.data.price
                    }}{{
                      slotProps?.data.type.toLowerCase() == "rent"
                        ? " Monthly"
                        : ""
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
});
const openSign = inject("openSign");
const store = UsersStore();

function AddToWishList(s) {
  store.userDetails.wishlist.find((i) => {
    return s.id == i.id;
  })
    ? store.RemoveRealEstate(s.id)
    : store.AddRealEstate(s);
}
</script>
