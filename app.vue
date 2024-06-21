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
const allow = ref(false);
const location = ref();
provide("allow", allow);
provide("GetLocation", GetLocation);
provide("location", location);

function GetLocation() {
  console.log("location");
  const http = new XMLHttpRequest();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const APIR = `https://api-bdc.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&key=bdc_f317e5b3c98c4a04a97415f6b6a061c9`;
        http.open("GET", APIR);
        http.send();
        http.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            location.value = JSON.parse(this.responseText).city;
            allow.value = true;
          }
        };
      },
      (err) => {
        allow.value = false;
      }
    );
  } else {
    alert("GEOlocation is not supported");
  }
}
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
