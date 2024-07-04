<template>
  <form class="flex flex-col gap-5 text-[14px] w-full" @submit="submitFun">
    <div class="flex flex-col gap-2">
      <label class="font-bold">Email ( for testing: demo@gmail.com )</label>
      <InputText
        v-model="email"
        type="email"
        @input="
          () => {
            msg = false;
            errMsg = false;
          }
        "
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
        @input="
          () => {
            msg = false;
            errMsg = false;
          }
        "
        :feedback="false"
        placeholder="Password"
        class="rounded-none w-full"
        toggleMask
      />
      <p
        class="underline cursor-pointer"
        @click="
          () => {
            sendPasswordResetEmail(auth, email)
              .then(() => {
                msg = false;
                errMsg = false;
                msg = true;
              })
              .catch((error) => {});
          }
        "
      >
        Forget password
      </p>
    </div>
    <p v-if="errMsg" class="text-red-700 text-sm">{{ errMsg }}</p>
    <p v-if="msg" class="text-secondary-color text-sm">
      The email has been sent to {{ email }} to reset your password.
    </p>

    <Button
      label="LOGIN"
      class="w-full mt-4 rounded-none bg-[#1ea69a]"
      type="submit"
    />
  </form>
</template>
<script setup>
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const email = ref();
const errMsg = ref();
const pass = ref();
const emits = defineEmits(["handleLogin"]);
const msg = ref(false);
const auth = getAuth();
const route = useRoute();
function submitFun(e) {
  e.preventDefault();
  msg.value = false;
  errMsg.value = false;
  signInWithEmailAndPassword(getAuth(), email.value, pass.value)
    .then((d) => {
      errMsg.value = "";
      useCookie("user").value = d.user.accessToken;
      emits("handleLogin");
      navigateTo({
        path: route.path,
        query: { signIn: "true" },
      });
    })
    .catch((err) => {
      console.group(err.message);
      errMsg.value = "Email or password was incorrect";
    });
}
</script>
