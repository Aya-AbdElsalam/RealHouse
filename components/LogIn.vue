<template>
  <form class="flex flex-col gap-5 text-[14px] w-full" @submit="submitFun">
    <div class="flex flex-col gap-2">
      <label class="font-bold">Email ( for testing: demo@gmail.com )</label>
      <InputText
        v-model="email"
        type="email"
        placeholder="Your Email"
        required
        class="rounded-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-bold">Password ( for testing: 1234567DEMO )</label>
      <Password
        v-model="pass"
        required
        :feedback="false"
        placeholder="Password"
        class="rounded-none w-full"
        toggleMask
      />
    </div>
    <p v-if="errMsg" class="text-red-700 text-sm">{{ errMsg }}</p>

    <Button
      label="LOGIN"
      class="w-full mt-4 rounded-none bg-[#1ea69a]"
      type="submit"
    />
  </form>
</template>
<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const email = ref();
const errMsg = ref();
const pass = ref();
const emits = defineEmits(["handleLogin"]);

function submitFun(e) {
  e.preventDefault();
  signInWithEmailAndPassword(getAuth(), email.value, pass.value)
    .then((d) => {
      errMsg.value = "";
      useCookie("user").value = d.user.accessToken;
      emits("handleLogin");
    })
    .catch(() => {
      errMsg.value = "Email or password was incorrect";
    });
}
</script>
