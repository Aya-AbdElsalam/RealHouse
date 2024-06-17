<template>
  <div
    class="bg-bg-secondary flex"
    :class="$route.path == '/' ? ' min-h-[98vh]' : ' min-h-[70vh]'"
    :style="
      $route.path == '/' &&
      'clip-path: polygon(100% 0%, 100% 36%, 100% 100%, 0px 100%, 0 7%)'
    "
  >
    <div class="container flex flex-col gap-14 h-full justify-center">
      <div
        class="flex justify-between items-center flex-wrap gap-3"
        :class="$route.path == '/' && ' pt-60'"
      >
        <div class="flex items-center gap-3">
          <img
            loading="lazy"
            src="@/public/images/logo.webp"
            width="119px"
            height="62px"
            alt="logo"
          />
          <span class="text-text-secondary text-[14px]"
            >/Simply #1 Real Estate Theme</span
          >
        </div>
        <div class="text-text-secondary flex gap-3">
          <v-icon
            name="bi-facebook"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
          <v-icon
            name="co-twitter"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
          <v-icon
            name="co-linkedin-in"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
          <v-icon
            name="co-instagram"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
          <v-icon
            name="co-pinterest"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
          <v-icon
            name="pr-youtube"
            scale="1.3"
            class="hover:text-white cursor-pointer"
          />
        </div>
      </div>
      <div class="flex justify-between text-[15px] gap-5 flex-wrap">
        <div class="flex flex-col gap-4 grow">
          <p class="text-white font-bold">Contact Us</p>
          <div class="flex items-center gap-3 text-text-secondary">
            <v-icon name="md-locationon-sharp" scale="1.3" />
            <p class="">3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
          </div>
          <div class="flex items-center gap-3 text-text-secondary">
            <v-icon name="co-whatsapp" scale="1.3" />
            <p class="">+123-456-789</p>
          </div>
          <div class="flex items-center gap-3 text-text-secondary">
            <v-icon name="md-email-round" scale="1.3" />
            <p class="">sales@example.com</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 grow">
          <p class="text-white font-bold">Remain Updated</p>
          <input
            class="p-4 h-[50px]"
            type="text"
            placeholder="Your email address"
          />
          <Button
            label="Sign Up"
            class="rounded-none w-fit bg-primary-color border-primary-color hover:bg-transparent hover:border-primary-color border-2"
          />
        </div>
      </div>
      <div
        class="flex justify-between gap-3 flex-wrap text-[15px] text-text-secondary"
      >
        <p>© {{ date }}. All rights reserved.</p>
        <p>Created by Aya</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const date = ref(new Date().getFullYear());
</script>
