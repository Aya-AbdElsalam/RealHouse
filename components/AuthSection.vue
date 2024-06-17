<template>
  <div class="flex">
    <div
      class="w-[500px] relative h-auto max-[1000px]:hidden"
      style="background-image: url(../_nuxt/public/images/bg3.webp)"
    >
      <img
        loading="lazy"
        src="../public/images/bg3.webp"
        alt="Authentication"
        class="absolute w-full h-full left-0 top-0 object-cover -z-10"
        width="100%"
        height="100%"
      />
      <div class="w-full h-full absolute top-0 left-0 bg-black/65" />
      <div class="flex flex-col justify-between h-full p-6 z-20 relative">
        <div>
          <p class="text-[22px] text-white italic">
            Owning a home is a keystone of wealth… both financial affluence and
            emotional security.
          </p>
          <p class="text-text-secondary text-[20px] italic">Suze Orman</p>
        </div>
        <div>
          <p class="text-white text-[20px]">June 5, 2024</p>
          <p class="text-white text-[30px]">Wednesday!</p>
        </div>
      </div>
    </div>
    <div class="min-[500px]:w-[500px] p-12">
      <p class="text-[26px] text-text-secondary font-bold mb-[30px]">
        RealHomes Modern
      </p>
      <div
        class="flex gap-4 text-[14px] text-text-secondary font-[400] mb-[32px]"
      >
        <p
          @click="
            ($e) => {
              auth = 'login';
            }
          "
          :class="
            auth.trim() === 'login'
              ? 'after:bg-secondary-color text-secondary-color'
              : 'after:bg-text-secondary'
          "
          class="hover:after:bg-secondary-color hover:text-secondary-color cursor-pointer min-w-[55px] text-center after:w-full after:absolute relative after:-bottom-[15px] after:left-0 after:h-[1px]"
        >
          Login
        </p>
        <p
          :class="
            auth.trim() === 'register'
              ? 'after:bg-secondary-color text-secondary-color'
              : 'after:bg-text-secondary'
          "
          @click="
            ($e) => {
              auth = 'register';
            }
          "
          class="hover:after:bg-secondary-color hover:text-secondary-color cursor-pointer min-w-[55px] text-center after:w-full after:absolute relative after:-bottom-[15px] after:left-0 after:h-[1px]"
        >
          Register
        </p>
      </div>
      <LogIn
        v-if="auth == 'login'"
        @handle-login="() => emits('handleLogin')"
      />
      <Register v-else @handle-submit="() => (auth = 'login')" />
    </div>
  </div>
</template>

<script setup>
const auth = ref("login");
const emits = defineEmits(["handleLogin"]);
</script>
