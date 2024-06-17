<template>
  <nuxt-layout>
    <NuxtPage />
  </nuxt-layout>
</template>
<script setup>
const visible = ref(false);
const route = useRoute();
const openSign = () => {
  visible.value = true;
};
const closeSign = () => {
  visible.value = false;
};
provide("visible", visible);
provide("openSign", openSign);
provide("closeSign", closeSign);
watch(
  route,
  (newValue, oldValue) => {
    route.query?.signIn == "false" ? (visible.value = true) : "";
  },
  { immediate: true, deep: true }
);
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<style>
@import url("./assets/style.css");
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
