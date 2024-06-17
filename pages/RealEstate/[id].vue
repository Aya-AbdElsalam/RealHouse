<template>
  <div v-if="show">
    <div class="relative">
      <Galleria
        :value="RealEstate?.images"
        :responsiveOptions="responsiveOptions"
        :showItemNavigators="true"
        :showItemNavigatorsOnHover="true"
        :numVisible="8"
        containerStyle="max-width: 100%"
      >
        <template #item="slotProps">
          <img
            loading="lazy"
            :src="slotProps.item"
            :alt="slotProps.item"
            style="width: 100%; display: block"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            loading="lazy"
            :src="slotProps.item"
            :alt="slotProps.item"
            style="display: block; border: 4px solid white"
          />
        </template>

        <template #caption="slotProps">
          <div class="flex justify-between">
            <div>
              <div class="text-xl mb-2 font-bold">
                {{ RealEstate?.name }}
              </div>
              <p class="text-white">{{ RealEstate?.address }}</p>
            </div>
            <div>
              <p>For {{ RealEstate?.type }}</p>
              <p class="text-secondary-color text-[30px]">
                ${{ RealEstate?.price
                }}{{
                  RealEstate?.type.toLowerCase() == "rent" ? " Monthly" : ""
                }}
              </p>
            </div>
          </div>
        </template>
      </Galleria>
      <div
        class="min-[770px]:hidden flex flex-col justify-between items-center gap-3 bg-bg-third py-8"
      >
        <div class="text-center">
          <p class="text-[24px] font-bold">{{ RealEstate?.name }}</p>
          <p class="text-text-secondary text-[15px]">
            {{ RealEstate?.address }}
          </p>
        </div>
        <div class="text-center">
          <p class="text-[15px]">For {{ RealEstate?.type }}</p>
          <p class="text-secondary-color text-[24px]">
            {{ RealEstate?.price }}
          </p>
        </div>
      </div>
    </div>
    <div class="py-8 bg-white">
      <div class="container text-[15px] flex flex-col gap-6">
        <div class="flex gap-8 flex-wrap">
          <div
            class="flex flex-col gap-2"
            v-if="RealEstate?.Bedrooms !== 'undefined'"
          >
            <p class="text-[13px]">Bedrooms</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="md-bedroomchild-round"
                class="text-secondary-color"
              />
              {{ RealEstate?.Bedrooms }}
            </div>
          </div>
          <div
            class="flex flex-col gap-2"
            v-if="RealEstate?.Bathrooms !== 'undefined'"
          >
            <p class="text-[13px]">Bathrooms</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="md-bathroom-twotone"
                class="text-secondary-color"
              />
              {{ RealEstate?.Bathrooms }}
            </div>
          </div>
          <div
            class="flex flex-col gap-2"
            v-if="RealEstate?.Garage !== 'undefined'"
          >
            <p class="text-[13px]">Garage</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="gi-home-garage"
                class="text-secondary-color"
              />
              {{ RealEstate?.Garage }}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-[13px]">Year Built</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="md-daterange-twotone"
                class="text-secondary-color"
              />
              {{ RealEstate?.YearBuilt }}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-[13px]">Area</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="co-border-style"
                class="text-secondary-color"
              />
              {{ RealEstate?.Area }}
              <span class="text-text-secondary">Sq Ft</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-[13px]">Lot Size</p>
            <div class="flex items-center gap-1 text-[14px]">
              <v-icon
                scale="1.8"
                name="md-photosizeselectsmall-sharp"
                class="text-secondary-color"
              />
              {{ RealEstate?.LotSize }}
              <span class="text-text-secondary">Sq Ft</span>
            </div>
          </div>
        </div>
        <p class="text-secondary-color text-[18px] font-bold">Description</p>
        <p class="text-text-secondary leading-[2]">{{ RealEstate?.details }}</p>
      </div>
    </div>
    <div class="py-8 bg-bg-third">
      <div class="container flex flex-col gap-3">
        <p class="text-secondary-color text-[18px] font-bold">
          Additional Details
        </p>
        <div class="flex gap-5 flex-wrap">
          <div class="flex flex-col gap-3 w-[650px]">
            <div class="flex flex-wrap gap-3">
              <p class="w-[171px] max-[774px]:w-full">Built In:</p>
              <p class="text-text-secondary">{{ RealEstate?.YearBuilt }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <p class="w-[171px] max-[774px]:w-full">Flooring:</p>
              <p class="text-text-secondary">{{ RealEstate?.FLOORS }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <p class="w-[171px] max-[774px]:w-full">Doors Windows:</p>
              <p class="text-text-secondary">{{ RealEstate?.DOORS_WINDOWS }}</p>
            </div>
            <div
              class="flex flex-wrap gap-3"
              v-if="RealEstate?.Bedrooms !== 'undefined'"
            >
              <p class="w-[171px] max-[774px]:w-full">Bedromm Features:</p>
              <p class="text-text-secondary">
                {{ RealEstate?.BEDROOM_FEATURES }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3 w-[650px]">
            <div class="flex gap-3 flex-wrap">
              <p class="w-[171px] max-[774px]:w-full">Diving area:</p>
              <p class="text-text-secondary">{{ RealEstate?.DINING_AREA }}</p>
            </div>
            <div class="flex gap-3 flex-wrap">
              <p class="w-[171px] max-[774px]:w-full">Flooring:</p>
              <p class="text-text-secondary">{{ RealEstate?.FLOORS }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 bg-white">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">Common Note</p>
        <p class="text-text-secondary leading-[2]">{{ RealEstate?.Note }}</p>
      </div>
    </div>
    <div class="py-8 bg-bg-third text-[15px]">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">Features</p>
        <div class="flex gap-8 flex-wrap">
          <p
            class="text-text-secondary min-w-36"
            v-for="Feature in RealEstate?.Features"
            :key="Feature"
          >
            <span class="text-primary-color"> <v-icon name="bi-check" /></span>
            {{ Feature }}
          </p>
        </div>
      </div>
    </div>
    <div class="py-8 bg-white floor-plans">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">Floor Plans</p>
        <Accordion
          expandIcon="pi pi-plus"
          collapseIcon="pi pi-minus"
          class="text-[15px]"
          v-model:activeIndex="active"
          contentClass="accordion-style"
        >
          <AccordionTab
            v-for="(f, index) in RealEstate?.Floor_Plans"
            :key="index"
            class="bg-[#e8f6f5]"
          >
            <template #header>
              <div
                class="flex justify-between gap-3 items-center w-full flex-wrap"
              >
                <span class="font-[500] white-space-nowrap leading-[2.5]">
                  <v-icon
                    name="fa-minus"
                    v-if="active == index"
                    class="text-text-secondary"
                  />
                  <v-icon name="fa-plus" v-else class="text-text-secondary" />
                  {{ f.name }}</span
                >
                <div class="flex gap-2">
                  <p class="border-r-2 border-text-secondary pr-2">
                    {{ f.area }} sq ft
                  </p>
                  <p
                    class="border-r-2 border-text-secondary pr-2"
                    v-if="f.Bedroom !== 'undefined'"
                  >
                    {{ f.Bedroom }} Bedrooms
                  </p>
                  <p v-if="f.Bedroom !== 'undefined'">
                    {{ f.Bathroom }} Bathrooms
                  </p>
                </div>
              </div>
            </template>
            <p class="m-0 text-text-secondary my-5 leading-[2]">
              {{ f.details }}
            </p>
            <img loading="lazy" :src="f.img" :alt="f.name" />
          </AccordionTab>
        </Accordion>
      </div>
    </div>
    <div class="py-8 bg-bg-third text-[15px]">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">
          Energy Performance
        </p>
        <div class="flex flex-col border-2 border-secondary-color text-[14px]">
          <div class="flex justify-between bg-white">
            <p class="p-3">ENERGY CLASS:</p>
            <p class="text-text-secondary p-3">
              {{ RealEstate?.ENERGY_CLASS }}
            </p>
          </div>
          <div class="flex justify-between">
            <p class="p-3">ENERGY PERFORMANCE:</p>
            <p class="p-3 text-text-secondary">
              {{ RealEstate?.ENERGY_PERFORMANCE }}
            </p>
          </div>
          <div class="flex justify-between bg-white">
            <p class="p-3">EPC CURRENT RATING:</p>
            <p class="p-3 text-text-secondary">
              {{ RealEstate?.EPC_CURRENT_RATING }}
            </p>
          </div>
          <div class="flex justify-between">
            <p class="p-3">EPC POTENTIAL RATING:</p>
            <p class="text-text-secondary p-3">
              {{ RealEstate?.EPC_POTENTIAL_RATING }}
            </p>
          </div>
        </div>
        <div class="flex font-bold text-white">
          <p
            class="w-[12.5%] bg-[#00845a] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'A+' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            A+
          </p>
          <p
            class="w-[12.5%] bg-[#18b058] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'A' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            A
          </p>
          <p
            class="w-[12.5%] bg-[#8dc643] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'B' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            B
          </p>
          <p
            class="w-[12.5%] bg-[#ffcc01] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'C' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            C
          </p>
          <p
            class="w-[12.5%] bg-[#f6ac63] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'D' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            D
          </p>
          <p
            class="w-[12.5%] bg-[#f78622] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'E' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            E
          </p>
          <p
            class="w-[12.5%] bg-[#ef1d3a] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'F' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            F
          </p>
          <p
            class="w-[12.5%] bg-[#d10400] text-center py-1 after:content-[''] relative after:border-transparent"
            :class="
              RealEstate?.ENERGY_CLASS == 'G' &&
              'after:absolute after:left-[30%] after:top-[-80%] after:border-[20px]  after:border-t-secondary-color'
            "
          >
            G
          </p>
        </div>
      </div>
    </div>
    <div class="py-8 bg-white text-[15px]">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">Virtual Tour</p>
        <iframe
          width="100%"
          height="600"
          :src="RealEstate?.virtual"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><br />
      </div>
    </div>
    <div class="py-8 bg-bg-third text-[15px]">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">
          Property on Map
        </p>
        <iframe
          width="100%"
          height="600"
          :src="RealEstate?.map"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><br />
      </div>
    </div>
    <div class="py-8 text-[15px]">
      <div class="container flex gap-5 flex-wrap-reverse">
        <ContactForm widthPx="320px" />
        <div class="flex flex-col gap-4 grow w-[350px]">
          <div class="flex gap-3">
            <img
              loading="lazy"
              :src="Agent?.img"
              :alt="Agent?.name"
              class="size-[126px]"
            />
            <div>
              <NuxtLink
                :to="'/agent/' + Agent?.id"
                class="text-[19px] hover:text-primary-color font-bold max-[404px]:w-full block"
                >{{ Agent?.name }}
              </NuxtLink>
              <NuxtLink
                :to="'/agent/' + Agent?.id"
                class="text-primary-color hover:text-secondary-color font-bold hover:underline pb-3 max-[404px]:w-full"
                >View My Listing
              </NuxtLink>
            </div>
          </div>
          <p
            class="text-text-secondary leading-[2] line-clamp-2 h-[57px] overflow-hidden max-[404px]:text-center"
            style="height: '120px'"
          >
            {{ Agent?.details }}
          </p>
          <div class="flex flex-col gap-3 font-semibold">
            <p class="text-text-secondary">
              Fax: <span class="text-black">{{ Agent?.Fax }}</span>
            </p>
            <p class="text-text-secondary">
              WhatsApp: <span class="text-black">{{ Agent?.WhatsApp }}</span>
            </p>
            <p class="text-text-secondary">
              Email: <span class="text-black">{{ Agent?.Email }}</span>
            </p>
            <p class="text-text-secondary">
              Office: <span class="text-black">{{ Agent?.Office }}</span>
            </p>
            <p class="text-text-secondary">
              Mobile: <span class="text-black">{{ Agent?.Mobile }}</span>
            </p>
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
      </div>
    </div>
    <div class="py-8 bg-bg-third text-[15px]">
      <div class="container text-[15px] flex flex-col gap-6">
        <p class="text-secondary-color text-[18px] font-bold">
          Schedule A Tour
        </p>
        <div class="flex gap-5 flex-wrap-reverse">
          <div class="w-[250px] grow Calendar-section">
            <div class="flex justify-center items-center mb-6 font-bold">
              <div
                class="h-[5px] bg-transparent border-y-2 w-[20px] grow border-[#e0dfdf]"
              ></div>

              <p
                class="px-8 text-text-secondary grow border-[#e0dfdf] border rounded-sm cursor-pointer"
                :class="
                  Schedule == 'person'
                    ? 'bg-secondary-color text-white'
                    : 'bg-transparent'
                "
                @click="Schedule = 'person'"
              >
                In Person
              </p>
              <p
                class="px-8 text-text-secondary grow border-[#e0dfdf] border rounded-sm cursor-pointer"
                :class="
                  Schedule == 'Video'
                    ? 'bg-secondary-color text-white'
                    : 'bg-transparent'
                "
                @click="Schedule = 'Video'"
              >
                Video Caht
              </p>
              <div
                class="h-[5px] bg-transparent border-y-2 w-[20px] grow border-[#e0dfdf]"
              ></div>
            </div>
            <Calendar
              class="calender mb-4"
              v-model="date"
              placeholder="select date"
              :minDate="new Date()"
              showIcon
              iconDisplay="input"
              inputId="icondisplay"
            />
            <ContactForm msg="Schedule" />
          </div>
          <div class="flex flex-col gap-3 w-[250px] grow">
            <img
              loading="lazy"
              src="@/public/images/tour.webp"
              alt="tour"
              height="204px"
              width="100%"
              class="h-[204px] w-full"
            />
            <p class="text-[16.5px] font-bold text-secondary-color">
              Discover your dream property
            </p>
            <p class="leading-[2]">
              Immerse yourself in the captivating ambiance of our properties.
              Book a personalized tour to explore the exquisite beauty and
              unique features of our property.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const RealEstate = ref();
const route = useRoute();

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
const active = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1024px",
    numVisible: 8,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
]);
const Agent = ref();
const date = ref();
const name = ref("RealEstate");
const details = ref("RealEstate");

const Schedule = ref("person");
onBeforeMount(() => {
  const latestQuery = query(doc(db, "RealEstate", route.params.id));
  onSnapshot(latestQuery, (snapshot) => {
    RealEstate.value = snapshot.data();
    const agenntQuery = query(doc(db, "Agents", snapshot.data().agentId));
    onSnapshot(agenntQuery, (snapshot) => {
      Agent.value = { ...{ id: snapshot.id }, ...snapshot.data() };
    });
  });
});
watch(
  RealEstate,
  (newValue, oldValue) => {
    name.value = RealEstate.value?.name;
    details.value = RealEstate.value?.details;
  },
  { immediate: true, deep: true }
);
useSeoMeta({
  title: name,
  description: details,
});
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>
<style lang="scss">
.floor-plans {
  [data-pc-name="accordiontab"] {
    border: 0;
    margin-bottom: 20px;
  }
  a {
    background-color: #f7f7f7;
    border: 1px solid #9b9797;
    border-radius: 0;
    padding: 10px;
  }
  [data-pc-section="content"] {
    border: 1px solid #9b9797;
    border-top: 1px solid transparent;
  }
}
.calender {
  width: 100%;
  input {
    border-radius: 0;
  }
}
#pv_id_4_panel {
  [data-pc-section="header"] {
    background-color: rgb(16 185 129) !important;
    padding: 0 !important;
    border-radius: 5px !important;
  }
  button {
    color: white !important;
    font-weight: bold !important;
    &:hover {
      background-color: transparent !important;
    }
  }
  [aria-disabled="false"] {
    background-color: #e0dfdf !important;
    border-radius: 0;
  }
  [aria-disabled="true"] {
    background-color: #f8f4f4f2 !important;
    border-radius: 0 !important;
  }
  [aria-selected="true"] {
    background-color: rgb(16 185 129) !important;
    color: white !important;
  }
}
.Calendar-section {
  input,
  textarea {
    background-color: transparent;
  }
}
</style>
