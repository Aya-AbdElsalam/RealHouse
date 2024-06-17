<template>
  <div v-if="show">
    <BannerPages>{{ Agent?.name }}</BannerPages>
    <Search class="-top-24" />
    <div class="container pb-20 flex gap-8 text-[15px] flex-wrap">
      <div class="flex flex-col gap-10 w-[550px] grow">
        <div class="bg-white shadow-md flex flex-col gap-4 p-5">
          <div
            class="flex gap-3 items-end flex-wrap max-[404px]:justify-center"
          >
            <img
              loading="lazy"
              :src="Agent?.img"
              :alt="Agent?.name"
              width="132px"
              height="132px"
              class="size-[132px] -mt-[70px]"
            />

            <div class="flex justify-between w-[80%] flex-wrap">
              <div class="mb-3">
                <p class="text-[24px] font-bold mb-2">{{ Agent?.name }}</p>
                <p>
                  <span class="text-secondary-color font-bold">{{
                    RealEstate?.length
                  }}</span>
                  Listed Properties
                </p>
              </div>
              <div class="text-text-secondary flex gap-2">
                <v-icon
                  name="bi-facebook"
                  scale="1.3"
                  class="hover:text-blue-900 cursor-pointer"
                />
                <v-icon
                  name="co-twitter"
                  scale="1.3"
                  class="hover:text-blue-600 cursor-pointer"
                />
                <v-icon
                  name="co-linkedin-in"
                  scale="1.3"
                  class="hover:text-blue-700 cursor-pointer"
                />
                <v-icon
                  name="co-instagram"
                  scale="1.3"
                  class="hover:text-red-300 cursor-pointer"
                />
                <v-icon
                  name="co-pinterest"
                  scale="1.3"
                  class="hover:text-red-500 cursor-pointer"
                />
                <v-icon
                  name="pr-youtube"
                  scale="1.3"
                  class="hover:text-red-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p class="text-text-secondary leading-[1.9]" v-if="Agent">
            {{ Agent?.details }}
          </p>
          <div class="flex flex-col gap-3" v-else>
            <Skeleton
              width="100%"
              class="mb-2"
              v-for="(n, index) in [1, 1, 1, 1, 1, 1]"
              :key="index"
            ></Skeleton>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-wrap gap-3 max-[404px]:flex-col">
              <p class="text-text-secondary flex items-center gap-2">
                Office:
                <span class="text-black" v-if="Agent">{{ Agent?.Office }}</span>
                <Skeleton width="90px" height="10px" v-else></Skeleton>
              </p>
              <p class="text-text-secondary flex items-center gap-2">
                Mobile:
                <span class="text-black" v-if="Agent">{{ Agent?.Mobile }}</span>
                <Skeleton width="90px" height="10px" v-else></Skeleton>
              </p>
            </div>
            <div class="flex flex-wrap gap-3 max-[404px]:flex-col">
              <p class="text-text-secondary flex items-center gap-2">
                Fax:
                <span class="text-black" v-if="Agent">{{ Agent?.Fax }}</span>
                <Skeleton width="90px" height="10px" v-else></Skeleton>
              </p>
              <p class="text-text-secondary flex items-center gap-2">
                WhatsApp:
                <span class="text-black" v-if="Agent">{{
                  Agent?.WhatsApp
                }}</span>
                <Skeleton width="90px" height="10px" v-else></Skeleton>
              </p>
            </div>
            <p class="text-text-secondary flex items-center gap-2">
              Email:
              <span class="text-black" v-if="Agent">{{ Agent?.Email }}</span>
              <Skeleton width="90px" height="10px" v-else></Skeleton>
            </p>
          </div>
          <p class="font-bold text-[18px]">Progress & Stats</p>
          <hr />
          <div class="flex gap-4 justify-between flex-wrap">
            <div v-if="Rent && sale">
              <p>Property <span class="font-bold">Status</span></p>
              <Chart
                :labelsChart="['Sale', 'Rent']"
                :precentage="[
                  (Rent?.length / (Rent?.length + sale?.length)) * 100,

                  (sale?.length / (Rent?.length + sale?.length)) * 100,
                ]"
              />
            </div>
            <div v-if="precentage">
              <p>Property <span class="font-bold">Location</span></p>
              <Chart :labelsChart="locations" :precentage="precentage" />
            </div>

            <div>
              <p>Property <span class="font-bold">Type</span></p>
              <Chart :labelsChart="types" :precentage="typePrecentages" />
            </div>
          </div>
          <hr />
          <ContactForm />
        </div>
        <p class="text-secondary-color font-bold">My Listingg</p>
        <RealEstateItems :RealEstates="RealEstate" />
      </div>
      <div
        v-if="Featured !== null && Featured?.length > 0"
        class="w-[300px] grow"
      >
        <p class="text-[22px]">Featured Properties</p>
        <div v-for="f in Featured" class="flex flex-col" :key="f.id">
          <RealEstateCard :items="f" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const Rent = ref();
const sale = ref();
const RealEstate = ref();
const route = useRoute();
const precentage = ref([]);
import { getFirestore, onSnapshot, doc, query } from "firebase/firestore";
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
const Agent = ref();
const Featured = ref();
const locations = ref([]);
const locationsAll = ref([]);

const types = ref([]);
const typesAll = ref([]);
const typesNumber = ref();

const store = RealEstateStore();
const number = ref();
const typePrecentages = ref([]);
const name = ref("agent");
const details = ref("agent");
watch(
  store,
  (newValue, oldValue) => {
    name.value = Agent.value?.name;
    details.value = Agent.value?.details;

    locationsAll.value = [];
    typePrecentages.value = [];
    RealEstate.value = [];
    locations.value = [];
    types.value = [];
    typesAll.value = [];
    precentage.value = [];
    RealEstate.value = store?.RealEstates?.filter((r) => {
      return r.agentId == route.params.id;
    });
    RealEstate?.value?.map((i) => {
      if (i.agentId == route.params.id) {
        locationsAll.value.push(i.location);
        typesAll.value.push(i.typeRealEstate);

        if (types.value.indexOf(i.typeRealEstate.toLowerCase()) === -1) {
          types.value.push(i.typeRealEstate.toLowerCase());
        }
        if (locations.value.indexOf(i.location.toLowerCase()) === -1) {
          locations.value.push(i.location.toLowerCase());
        }
      }
    });
    types.value.map((l) => {
      typesNumber.value = 0;
      typesAll.value.map((b) => {
        if (b.toLowerCase() === l.toLowerCase()) {
          typesNumber.value = typesNumber.value + 1;
        }
      });
      typePrecentages.value.push(typesNumber.value);
    });
    locations.value.map((l) => {
      number.value = 0;
      locationsAll.value.map((b) => {
        if (b.toLowerCase() === l.toLowerCase()) {
          number.value = number.value + 1;
        }
      });
      precentage.value.push(number.value);
    });
    Featured.value = store?.RealEstates?.filter((r) => {
      return r.Featured === true && r.agentId == route.params.id;
    });
    Rent.value =
      store?.RealEstates?.filter((r) => {
        return r.type.toLowerCase() === "rent" && r.agentId == route.params.id;
      }) || [];
    sale.value =
      store?.RealEstates?.filter((r) => {
        return r.type.toLowerCase() === "sale" && r.agentId == route.params.id;
      }) || [];
  },
  { immediate: true, deep: true }
);
onMounted(() => {
  store.GetRealEstate();
  const agenntQuery = query(doc(db, "Agents", route.params.id));
  onSnapshot(agenntQuery, (snapshot) => {
    Agent.value = snapshot.data();
  });
});
const show = ref(false);
onMounted(() => {
  show.value = true;
});
useSeoMeta({
  title: name,
  description: details,
});
</script>
