<template>
  <div class="bg-bg-third pb-20" v-if="show">
    <BannerPages>FAQs – Filterable Accordion </BannerPages>
    <Search class="-top-24" />
    <div class="container">
      <div class="flex gap-6 flex-wrap">
        <AccordionSection class="faq" />
        <div class="w-[320px] grow">
          <h2 class="text-[22px] mb-3">Contact</h2>
          <ContactForm widthPx="100%" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const show = ref(false);
onMounted(() => {
  show.value = true;
});
useSeoMeta({
  title: "FAQs",
  description:
    "Get answers to your most common questions on our FAQ page. Browse through our comprehensive list of topics to find detailed information and helpful solutions. We're here to support you with all the information you need for a smooth real estate experience.",
});
</script>
