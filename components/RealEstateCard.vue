<template>
  <div class="bg-white shadow-md mt-10">
    <div class="relative">
      <img
        loading="lazy"
        :src="items?.img"
        :alt="items?.name"
        width="100%"
        height="auto"
        class="w-full h-[320px]"
      />
      <div
        v-if="items?.Featured"
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
        v-if="items?.Hot"
      >
        Hot
      </div>
      <div
        class="absolute bottom-5 left-5 bg-secondary-color text-white rounded-sm px-3 py-1"
        v-if="items?.Trendy"
      >
        Trendy
      </div>
      <v-icon
        @click="
          ($event) => {
            useCookie('user').value == undefined
              ? openSign()
              : AddToWishList(items);
          }
        "
        name="oi-heart-fill"
        class="absolute bottom-5 right-5 hover:text-red-400 cursor-pointer stroke-red-500"
        :class="
          store?.userDetails?.wishlist?.find((i) => {
            return items?.id == i.id;
          })
            ? 'text-red-600'
            : 'text-white'
        "
        scale="1.7"
      />
    </div>

    <div class="flex flex-wrap gap-2 m-5 grow max-[768px]:pb-5">
      <div class="flex gap-3 flex-col">
        <NuxtLink
          :to="'/Realestate/' + items?.id"
          class="text-[17px] font-bold hover:text-secondary-color"
        >
          {{ items?.name }}
        </NuxtLink>
        <p
          class="text-text-secondary text-[14px] line-clamp-1 h-[26px] overflow-hidden"
        >
          {{ items?.details }}
        </p>
        <div class="flex gap-3 text-[13px]">
          <div class="font-bold" v-if="items?.Bedrooms !== 'undefined'">
            <p class="mb-2">Bedrooms</p>
            <p class="flex items-center gap-2">
              <v-icon
                scale="1.8"
                name="md-bedroomchild-round"
                class="text-text-secondary"
              />
              {{ items?.Bedrooms }}
            </p>
          </div>
          <div class="font-bold" v-if="items?.Bedrooms !== 'undefined'">
            <p class="mb-2">Bathrooms</p>
            <p class="flex items-center gap-2">
              <v-icon
                scale="1.8"
                name="md-bathroom-twotone"
                class="text-text-secondary"
              />
              {{ items?.Bathrooms }}
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
              {{ items?.Area }}
              <span class="text-text-secondary">Sq Ft</span>
            </p>
          </div>
        </div>
        <div>
          <p>For {{ items?.type }}</p>
          <p class="text-secondary-color text-[22px] font-semibold">
            ${{ items?.price
            }}{{ items?.type.toLowerCase() == "rent" ? " Monthly" : "" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Object && undefined,
    required: true,
  },
});
const { items } = props;
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
