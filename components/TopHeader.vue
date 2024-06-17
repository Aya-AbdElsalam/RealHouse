<template>
  <header
    class="absolute top-0 left-0 w-full z-30 bg-hero-pattern text-white h-16 pt-3 Top-header"
  >
    <div class="container flex items-center justify-between">
      <NuxtLink class="block w-[119px] h-[62px] logo" to="/">
        <span class="sr-only">Home</span>
        <img
          loading="lazy"
          src="@/public/images/logo.webp"
          width="119px"
          height="62px"
          alt="logo"
        />
      </NuxtLink>

      <div
        class="flex items-center gap-12 text-[14px] font-bold grow justify-end relative"
      >
        <nav
          aria-label="Global"
          class="top-[52px] bg-black rounded-md p-[21px] lg:p-0 lg:rounded-none lg:bg-transparent lg:block w-full lg:w-fit z-50"
          :class="openMenu ? 'absolute lg:block lg:static' : 'hidden  lg:block'"
        >
          <ul class="flex items-center flex-col lg:flex-row gap-1 lg:gap-0">
            <li
              v-for="l in links"
              :key="l.name"
              class="linkHeader w-full lg:w-max text-center"
            >
              <NuxtLink
                @click="() => (openMenu = !openMenu)"
                :to="l.link"
                class="px-5 py-4 inline-block w-full lg:w-max"
                >{{ l.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <nav
          aria-label="Global"
          class="lg:hidden"
          @click="() => (openMenu = !openMenu)"
        >
          <v-icon
            class="cursor-pointer"
            name="ri-menu-2-line"
            scale="1.5"
            v-if="openMenu == false"
          />
          <v-icon
            class="cursor-pointer"
            name="md-close-twotone"
            scale="1.5"
            v-else
          />
        </nav>
        <div class="sm:flex items-center gap-4 hidden mt-2">
          <v-icon name="fa-phone-alt" animation="wrench" />
          <p>1-800-555-1234</p>
          <button
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="
              ($event) => {
                useCookie('user').value == undefined
                  ? (visible = true)
                  : toggle($event);
              }
            "
          >
            <v-icon scale="2" name="hi-solid-user-circle" />
          </button>

          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
      </div>
    </div>
    <div
      class="flex items-center gap-4 sm:hidden justify-center py-2 border-y-2 bg-[#0505054f]"
    >
      <v-icon name="fa-phone-alt" animation="wrench" />
      <button
        aria-label="user"
        @click="
          ($event) => {
            useCookie('user').value == undefined ? openSign() : toggle($event);
          }
        "
      >
        <v-icon scale="2" name="hi-solid-user-circle" />
      </button>

      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
    <Dialog v-model:visible="visible" modal>
      <AuthSection @handle-login="closeSign" />
    </Dialog>
  </header>
</template>
<script setup>
//add
const openSign = inject("openSign");
const closeSign = inject("closeSign");
const visible = inject("visible");

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAYALD-Q1JUUPDY69K-9tyvOX1rdvqR_z0",
  authDomain: "real-house-65437.firebaseapp.com",
  projectId: "real-house-65437",
  storageBucket: "real-house-65437.appspot.com",
  messagingSenderId: "228031934800",
  appId: "1:228031934800:web:31504c3c95f6ace5a4bc55",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const menu = ref();
let auth;
const email = ref();
const router = useRouter();
const store = UsersStore();

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      email.value = user.email;
      store.setUserId(user.uid);
      store.GetUserDetails(user.uid);
    }
  });
});
const items = ref([
  {
    label: email,
    items: [
      {
        label: "My Profile ",
        command: () => {
          router.push("/profile");
        },
      },
      {
        label: " Log out",
        command: () => {
          signOut(getAuth()).then(() => {
            router.push("/");
            store.setUserId(undefined);
            useCookie("user").value = undefined;
          });
        },
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const links = ref([
  { link: "/", name: "Home" },
  { link: "/Realestate", name: "Real Estate" },
  { link: "/faq", name: "FAQs" },
  { link: "/agent", name: "Agents" },
  { link: "/contact", name: "Contact" },
]);
const openMenu = ref(false);
</script>
<style>
.Top-header .router-link-active.router-link-exact-active {
  background-color: #ea723d;
}
.logo {
  background-color: transparent !important;
}
.linkHeader a:hover {
  background-color: #ea723d;
}
</style>
