<template>
  <div class="flex flex-col gap-5 grow">
    <div
      v-if="RealEstates"
      v-for="s in RealEstates"
      :key="s.id"
      class="flex gap-3 bg-white shadow-md max-[768px]:flex-wrap"
    >
      <div
        class="relative max-[768px]:grow max-[768px]:max-h-[445px] w-[215px]"
      >
        <img
          loading="lazy"
          :src="s.img"
          width="100%"
          height="auto"
          class="h-full"
          :alt="s.name"
        />
        <div
          v-if="s.Featured"
          class="top-[-14px] left-0 bg-primary-color absolute text-white"
        >
          <div
            class="relative after:content-[''] px-3 py-1 after:absolute after:right-[-32px] after:top-0 after:border-[16.7px] after:border-transparent after:border-l-primary-color"
          >
            Featured
          </div>
        </div>
        <div
          class="absolute bottom-5 left-5 bg-red-500 text-white rounded-sm px-3 py-1"
          v-if="s.Hot"
        >
          Hot
        </div>
        <div
          class="absolute bottom-5 left-5 bg-secondary-color text-white rounded-sm px-3 py-1"
          v-if="s.Trendy"
        >
          Trendy
        </div>
        <v-icon
          @click="
            ($event) => {
              useCookie('user').value == undefined
                ? openSign()
                : AddToWishList(s);
            }
          "
          name="oi-heart-fill"
          class="absolute bottom-5 right-5 hover:text-red-400 cursor-pointer stroke-red-500"
          :class="
            store?.userDetails?.wishlist?.find((i) => {
              return s.id == i.id;
            })
              ? 'text-red-600'
              : 'text-white'
          "
          scale="1.7"
        />
      </div>

      <div
        class="flex flex-wrap gap-2 m-5 mx-3 w-80 grow border-r max-[570px]:border-b max-[570px]:border-r-0 max-[768px]:pb-5"
      >
        <div class="flex gap-3 flex-col">
          <NuxtLink
            :to="'/Realestate/' + s.id"
            class="text-[17px] font-bold hover:text-secondary-color"
          >
            {{ s.name }}
          </NuxtLink>
          <p
            class="text-text-secondary text-[14px] line-clamp-1 h-[26px] overflow-hidden"
          >
            {{ s.details }}
          </p>
          <div class="flex gap-3 text-[13px]">
            <div class="font-bold" v-if="s.Bedrooms !== 'undefined'">
              <p class="mb-2">Bedrooms</p>
              <p class="flex items-center gap-2">
                <v-icon
                  scale="1.8"
                  name="md-bedroomchild-round"
                  class="text-text-secondary"
                />
                {{ s.Bedrooms }}
              </p>
            </div>
            <div class="font-bold" v-if="s.Bedrooms !== 'undefined'">
              <p class="mb-2">Bathrooms</p>
              <p class="flex items-center gap-2">
                <v-icon
                  scale="1.8"
                  name="md-bathroom-twotone"
                  class="text-text-secondary"
                />
                {{ s.Bathrooms }}
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
                {{ s.Area }}
                <span class="text-text-secondary">Sq Ft</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between py-5 w-[200px] text-[13px] font-bold max-[768px]:pt-0 pl-3"
      >
        <div>
          <p>For {{ s.type }}</p>
          <p class="text-secondary-color text-[22px] font-semibold">
            ${{ s.price }}{{ s.type.toLowerCase() == "rent" ? " Monthly" : "" }}
          </p>
        </div>
        <div>
          <p class="text-text-secondary">By</p>
          <p>{{ s.agent }}</p>
        </div>
      </div>
    </div>
    <skeletonCardVertical v-else v-for="n in [1, 2, 3, 4, 5]" :key="n" />
  </div>
</template>
<script setup>
const openSign = inject("openSign");
const store = UsersStore();

function AddToWishList(s) {
  store.userDetails.wishlist.find((i) => {
    return s.id == i.id;
  })
    ? store.RemoveRealEstate(s.id)
    : store.AddRealEstate(s);
}
const props = defineProps({
  RealEstates: {
    type: Object && undefined,
    required: true,
  },
});
</script>
