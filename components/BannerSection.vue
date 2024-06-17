<template>
  <div class="relative">
    <Carousel
      v-if="images !== null"
      :value="images"
      :numVisible="1"
      :circular="true"
      :autoplayInterval="6000"
      :numScroll="1"
      containerClass="Carousel-banner"
      :showIndicators="false"
      effect="fade"
    >
      <template
        #item="slotProps"
        class="absolute left-0 top-0 w-full h-[100vh] min-h-[850px]"
      >
        <img
          alt="images of realestate"
          :src="slotProps.data.src"
          height="130vh"
          width="100%"
          class="h-[115vh] md:h-[100vh] object-cover"
        />
      </template>
    </Carousel>
    <div
      v-else
      class="h-[100vh] min-h-[850px] w-full flex justify-center items-center bg-black transition-all"
    >
      <ProgressSpinner aria-label="Loading" />
    </div>
    <div class="flex absolute sm:right-[50px] bottom-[50px] group">
      <div
        class="bg-primary-color hidden group-hover:bg-secondary-color sm:flex justify-center items-center text-white size-[46px] mt-6 before:content-[''] before:absolute relative before:top-0 before:left-[100%] before:border-y-[23.5px] before:border-x-[15px] before:border-transparent before:border-l-primary-color before:group-hover:border-l-secondary-color"
      >
        <v-icon
          name="md-phoneintalk"
          scale="1.7"
          class="group-hover:rotate-12"
        />
      </div>
      <div class="py-8 px-6 bg-white sm:max-w-[450px] w-full">
        <p class="text-[24px] font-bold">Let Us Call You!</p>
        <p class="text-[15px] text-gray-500">
          To help you choose your property
        </p>
        <form class="flex gap-4 flex-col my-4" @submit="($e) => submitFun($e)">
          <div class="flex gap-2">
            <InputText
              type="text"
              placeholder="Your Name"
              required
              class="rounded-none w-1/2"
            />
            <InputText
              required
              type="number"
              placeholder="Your Number"
              class="rounded-none w-1/2"
            />
          </div>

          <InputText
            required
            type="email"
            placeholder="Your Email"
            class="rounded-none"
          />

          <Textarea
            required
            autoResize
            rows="5"
            cols="30"
            placeholder="Tell us about desired property"
            class="rounded-none"
          />
          <p class="text-[14px] font-bold">GDPR Agreement *</p>
          <div class="flex gap-2 items-center mt-2">
            <Checkbox
              v-model="checked"
              :binary="true"
              inputId="argeement"
              required
            />
            <label for="argeement" class="text-[14px]"
              >I consent to having this website store my submitted information
              so they can respond to my inquiry.</label
            >
          </div>
          <Button
            label="Submit"
            class="w-full mt-4 rounded-none bg-[#1ea69a]"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "THANKS!",
    detail:
      "The message has been sent successfully. We will contact you as soon as possible.",
    life: 7000,
  });
};
const checked = ref(false);
function submitFun(e) {
  e.preventDefault();
  showSuccess();
}
const images = ref(null);

onMounted(() => {
  images.value = [
    { src: new URL("~/public/images/slide-one.webp", import.meta.url) },
    { src: new URL("~/public/images/slide-three-1.webp", import.meta.url) },
    { src: new URL("~/public/images/slide-two.webp", import.meta.url) },
    { src: new URL("~/public/images/slide-three-1.webp", import.meta.url) },
  ];
});
</script>
<style lang="scss">
.Carousel-banner {
  overflow: hidden;
  transition: all 3s;
  &:hover button {
    display: flex;
  }
  button {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: #ea723d !important;
    opacity: 0.8;
    color: white;
    width: 30px;
    height: 30px;
    &:first-of-type {
      left: 0;
    }
    &:last-of-type {
      right: 0;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
