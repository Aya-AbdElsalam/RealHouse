<template>
  <div class="bg-bg-third pb-20" v-if="show">
    <BannerPages>Contact</BannerPages>
    <Search class="-top-24" />
    <ContactSection />
  </div>
</template>
<script setup>
const show = ref(false);
onMounted(() => {
  show.value = true;
});
useHead({
  title: "contact",
  meta: [
    {
      name: "description",
      content:
        "Reach out to us on our contact page for any inquiries or assistance. Fill out the form, call, or email us to get in touch with our dedicated support team. We're here to help you with all your real estate needs.",
    },
  ],
});
</script>
