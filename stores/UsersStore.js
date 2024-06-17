import { defineStore } from "pinia";

import {
  getFirestore,
  onSnapshot,
  doc,
  setDoc,
  query,
} from "firebase/firestore";

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
export const UsersStore = defineStore("Users", {
  state: () => ({
    userDetails: undefined,
    userId: undefined,
  }),
  actions: {
    setUserId(id) {
      this.userId = id;
    },
    AddRealEstate(realEstate) {
      setDoc(doc(db, "users", this.userId), {
        wishlist: this.userDetails.wishlist.concat([realEstate]),
      });
    },
    RemoveRealEstate(realEstate) {
      setDoc(doc(db, "users", this.userId), {
        wishlist: this.userDetails.wishlist.filter((c) => {
          return c.id !== realEstate;
        }),
      });
    },
    GetUserDetails(id) {
      const latestQuery = query(doc(db, "users", id));
      onSnapshot(latestQuery, (snapshot) => {
        this.userDetails = snapshot.data();
      });
    },
  },
});
