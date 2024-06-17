<template>
  <form class="flex flex-col gap-5 text-[14px] w-full" @submit="submitFun">
    <div class="flex flex-col gap-2">
      <label class="font-bold">Email</label>
      <InputText
        v-model="email"
        type="email"
        placeholder="Your Email"
        required
        class="rounded-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-bold">Password</label>
      <Password v-model="pass" required toggleMask placeholder="Password">
        <template #header>
          <h6>Pick a password</h6>
        </template>
        <template #footer>
          <Divider />
          <p class="mt-2 p-0 mb-2">Suggestions</p>
          <ul
            class="p-0 pl-2 m-0 ml-2 list-disc leading-6"
            style="line-height: 1.5"
          >
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
          </ul>
        </template>
      </Password>
    </div>
    <p v-if="errMsg" class="text-red-700 text-sm">{{ errMsg }}</p>

    <Button
      label="REGISTER"
      class="w-full mt-4 rounded-none bg-[#1ea69a]"
      type="submit"
    />
  </form>
  <toast />
</template>
<script setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYALD-Q1JUUPDY69K-9tyvOX1rdvqR_z0",
  authDomain: "real-house-65437.firebaseapp.com",
  projectId: "real-house-65437",
  storageBucket: "real-house-65437.appspot.com",
  messagingSenderId: "228031934800",
  appId: "1:228031934800:web:31504c3c95f6ace5a4bc55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
import {
  getAuth,
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
const email = ref();
import { getFirestore, setDoc, doc } from "firebase/firestore";

const pass = ref();
const errMsg = ref();
import { useToast } from "primevue/usetoast";
import { defineEmits } from "vue";
const toast = useToast();
const emits = defineEmits(["handleSubmit"]);
const showSuccess = () => {
  toast.add({
    severity: "success",
    detail: "Your account has been created successfully.",
    life: 4000,
  });
};
function submitFun(e) {
  e.preventDefault();
  createUserWithEmailAndPassword(getAuth(), email.value, pass.value)
    .then((data) => {
      errMsg.value = "";
      showSuccess();
      emits("handleSubmit");
      setDoc(doc(db, "users", data.user.uid), {
        wishlist: [],
      });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          errMsg.value = "email already in use";
          break;
        case "auth/weak-password":
          errMsg.value = "Password should be at least 6 characters";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
    });
}
</script>
