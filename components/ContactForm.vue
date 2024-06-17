<template>
  <form
    class="flex gap-4 flex-col grow"
    @submit="submitFun"
    :style="{ width: widthPx }"
  >
    <label for="name">Name</label>
    <InputText
      id="name"
      v-model="name"
      type="text"
      placeholder="Your Name"
      required
      class="rounded-none h-[52px]"
    />
    <label for="email">Email</label>

    <InputText
      v-model="email"
      required
      type="email"
      id="email"
      placeholder="Your Email"
      class="rounded-none h-[52px]"
    /><label for="phone">Phone Number </label>
    <InputText
      v-model="phone"
      required
      id="phone"
      type="number"
      placeholder="Your Number"
      class="rounded-none h-[52px]"
    />
    <label for="Message">Message</label>
    <Textarea
      v-model="message"
      id="Message"
      required
      autoResize
      rows="5"
      cols="30"
      placeholder="Your Message"
      class="rounded-none h-[52px]"
    />
    <p class="text-[14px] font-bold">GDPR Agreement *</p>
    <div class="flex gap-2 items-baseline mt-2">
      <Checkbox v-model="checked" :binary="true" inputId="argeement" required />
      <label for="argeement" class="text-[14px]"
        >I consent to having this website store my submitted information so they
        can respond to my inquiry.</label
      >
    </div>
    <Button
      :label="msg !== undefined ? msg : 'Send Message'"
      class="w-full mt-4 rounded-none bg-[#1ea69a]"
      type="submit"
    />
  </form>
  <Toast />
</template>
<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();
const name = ref();
const phone = ref();
const message = ref();
const email = ref();
const checked = ref(false);
const props = defineProps({
  widthPx: {
    type: String,
    required: false,
  },
  msg: {
    type: String,
    required: false,
  },
});
const { widthPx } = props;
const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "THANKS!",
    detail:
      "The message has been sent successfully. We will contact you as soon as possible.",
    life: 7000,
  });
};
function submitFun(e) {
  e.preventDefault();
  showSuccess();
  name.value = "";
  phone.value = "";
  message.value = "";
  email.value = "";
  checked.value = false;
}
</script>
