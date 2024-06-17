<template>
  <div v-if="show">
    <BannerPages>My Profile</BannerPages>
    <Search class="-top-24" />
    <div class="container pb-20 flex gap-8 text-[15px] flex-col">
      <p class="text-secondary-color font-bold">Personal Information</p>
      <div>
        <div class="flex flex-wrap gap-x-24 gap-y-5 items-center">
          <p><span class="font-bold">Emai:</span> {{ email }}</p>
          <div class="flex gap-2 items-center" v-if="changePass">
            <span class="font-bold">Password:</span>
            <form
              class="flex gap-3"
              @submit="
                ($e) => {
                  $e.preventDefault();
                  updatePassword(user, newPassword)
                    .then(() => {
                      passupdated();
                      changePass = false;
                    })
                    .catch((error) => {});
                }
              "
            >
              <Password
                v-model="newPassword"
                required
                :feedback="false"
                placeholder="Password"
                class="max-w-[100px]"
                toggleMask
              />
              <Button type="submit">Change</Button>
              <Button
                label="cancel"
                severity="danger"
                outlined
                @click="changePass = false"
              />
            </form>
          </div>
        </div>

        <p
          class="mt-2 text-[14px] cursor-pointer hover:font-bold underline"
          @click="changePass = true"
        >
          Change password
        </p>
      </div>
      <hr />
      <p class="text-secondary-color font-bold">My Whishlist</p>
      <div
        class="flex justify-center flex-col items-center w-full"
        v-if="RealEstate?.wishlist?.length == 0"
      >
        <img
          loading="lazy"
          alt="no data found"
          src="../public/images/noData.webp"
          width="100%"
          class="max-w-[400px] h-[250px]"
          height="350px"
        />
        <p class="font-bold text-[18px] text-secondary-color">
          Whishlist is empity
        </p>
        <NuxtLink
          class="font-bold text-[19px] text-white px-6 py-1 hover:bg-primary-color/80 bg-primary-color rounded-md"
          to="/realEstate"
          >Explore RealeEstate</NuxtLink
        >
      </div>
      <RealEstateItems :RealEstates="RealEstate?.wishlist" />
      <Toast />
    </div>
  </div>
</template>
<script setup>
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const passupdated = () => {
  toast.add({
    severity: "success",
    detail: "your password has been updated",
    life: 7000,
  });
};
const changePass = ref(false);
const store = UsersStore();
const RealEstate = ref();
const email = ref();
const auth = getAuth();
const user = auth.currentUser;
const newPassword = ref();
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      email.value = user.email;
    }
  });
});
watch(
  store,
  (newValue, oldValue) => {
    RealEstate.value = store.userDetails;
  },
  { immediate: true, deep: true }
);
useSeoMeta({
  title: "profile",
  description:
    "Manage your account seamlessly on our profile page. Update your password for enhanced security and access your personalized wishlist to keep track of your favorite properties. Stay organized and in control of your real estate journey.",
});
const show = ref(false);
onMounted(() => {
  show.value = true;
});
definePageMeta({
  middleware: [
    (to, from) => {
      if (to.name == "profile" && useCookie("user").value == undefined) {
        return navigateTo({
          path: "/",
          query: { signIn: "false" },
        });
      }
    },
  ],
});
</script>
