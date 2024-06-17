<template>
  <div class="container -top-10 relative">
    <div
      class="flex transition-none bg-white shadow-sm border-[.5px] border-text-secondary/10 min-h-[95px] items-stretch flex-wrap border-t-0"
    >
      <div class="grow-[3] flex flex-col">
        <div class="flex flex-wrap grow">
          <div
            class="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="Location && 'bg-secondary-color text-white'"
          >
            <p class="text-[14px] font-bold" :class="Location && 'text-white'">
              Location
            </p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  Location = !Location;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                }
              "
            >
              <p
                v-if="LocationValue.length == 0"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="Location && 'text-white'"
              >
                All Locations
              </p>
              <div v-else-if="LocationValue.length < 3">
                <span
                  v-for="i in LocationValue"
                  :key="i"
                  class="text-bg-secondary font-semibold text-[15px]"
                  :class="Location && 'text-white'"
                >
                  {{ i + ", " }}
                </span>
              </div>

              <p
                v-else-if="LocationValue.length >= 3"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="Location && 'text-white'"
              >
                {{ LocationValue.length + "Locations Selected" }}
              </p>

              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="Location ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="Location"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30"
            >
              <div class="flex border-white border items-center mx-2 mb-2">
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="
                    LocationValue = [
                      'Miami'.toLowerCase(),
                      'Little Havana'.toLowerCase(),
                      'Doral'.toLowerCase(),
                    ]
                  "
                >
                  <v-icon
                    name="io-checkmark-done-outline"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="LocationValue = []"
                >
                  <v-icon
                    name="io-return-up-back"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
              </div>
              <p
                v-for="select in ['Miami', 'Little Havana', 'Doral']"
                @click="
                  ($event) =>
                    LocationValue.indexOf(select.toLowerCase()) !== -1
                      ? (LocationValue = LocationValue.filter(
                          (p) => p.toLowerCase() != select.toLowerCase()
                        ))
                      : LocationValue.push(select.toLowerCase())
                "
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="
                  LocationValue.indexOf(select.toLowerCase()) !== -1 &&
                  'bg-Third-color'
                "
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="propertyStatus && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Property Status</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  propertyStatus = !propertyStatus;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="propertyStatus ? 'text-white' : 'text-bg-secondary '"
              >
                {{ propertyStatusValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="propertyStatus ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="propertyStatus"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30"
            >
              <p
                v-for="select in ['Any', 'Rent', 'Sale']"
                @click="
                  ($event) => (propertyStatusValue = $event.target.textContent)
                "
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == propertyStatusValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="propertyType && 'bg-secondary-color text-white'"
          >
            <p
              class="text-[14px] font-bold"
              :class="propertyType && 'text-white'"
            >
              Property Type
            </p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  propertyType = !propertyType;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  Location = false;
                }
              "
            >
              <p
                v-if="propertyTypeValue.length == 0"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="propertyType && 'text-white'"
              >
                All Types
              </p>
              <div v-else-if="propertyTypeValue.length < 3">
                <span
                  v-for="i in propertyTypeValue"
                  :key="i"
                  class="text-bg-secondary font-semibold text-[15px]"
                  :class="propertyType && 'text-white'"
                >
                  {{ i + ", " }}
                </span>
              </div>
              <p
                v-else-if="propertyTypeValue.length >= 3"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="propertyType && 'text-white'"
              >
                {{ propertyTypeValue.length + "Types Selected" }}
              </p>

              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="propertyType ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="propertyType"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30"
            >
              <div class="flex border-white border items-center mx-2 mb-2">
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="
                    propertyTypeValue = [
                      'Home'.toLowerCase(),
                      'Villa'.toLowerCase(),
                      'Apartment'.toLowerCase(),
                      'Restaurant'.toLowerCase(),
                      'Office'.toLowerCase(),
                    ]
                  "
                >
                  <v-icon
                    name="io-checkmark-done-outline"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="propertyTypeValue = []"
                >
                  <v-icon
                    name="io-return-up-back"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
              </div>
              <p
                v-for="select in [
                  'Home',
                  'Villa',
                  'Apartment',
                  'Restaurant',
                  'Office',
                ]"
                @click="
                  ($event) =>
                    propertyTypeValue.indexOf(select.toLowerCase()) !== -1
                      ? (propertyTypeValue = propertyTypeValue.filter(
                          (p) => p.toLowerCase() != select.toLowerCase()
                        ))
                      : propertyTypeValue.push(select.toLowerCase())
                "
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="
                  propertyTypeValue.indexOf(select.toLowerCase()) !== -1 &&
                  'bg-Third-color'
                "
              >
                {{ select }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap" v-if="advancedSearch">
          <div
            class="scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative h-[95px] justify-center"
            :class="Beds && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Min Beds</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  Beds = !Beds;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="Beds ? 'text-white' : 'text-bg-secondary '"
              >
                {{ BedsValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="Beds ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="Beds"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30 h-[165px] overflow-y-auto"
            >
              <p
                v-for="select in ['Any', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                @click="($event) => (BedsValue = select)"
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == BedsValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center flex scroller gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="Baths && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Min Baths</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  Baths = !Baths;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="Baths ? 'text-white' : 'text-bg-secondary '"
              >
                {{ BathsValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="Baths ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="Baths"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30 h-[165px] overflow-y-auto"
            >
              <p
                v-for="select in ['Any', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                @click="($event) => (BathsValue = select)"
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == BathsValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="MinPrice && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Min Price</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  MinPrice = !MinPrice;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="MinPrice ? 'text-white' : 'text-bg-secondary '"
              >
                <span v-if="typeof MinPriceValue == 'number'">$</span>
                {{ MinPriceValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="MinPrice ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="MinPrice"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30 h-[165px] overflow-y-auto"
            >
              <p
                v-for="select in [
                  'Any',
                  1000,
                  5000,
                  10000,
                  50000,
                  100000,
                  200000,
                  300000,
                  400000,
                  500000,
                  600000,
                ]"
                @click="
                  ($event) => {
                    MinPriceValue = select;
                  }
                "
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == MinPriceValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="MaxPrice && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Max Price</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  MaxPrice = !MaxPrice;
                  MinPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="MaxPrice ? 'text-white' : 'text-bg-secondary '"
              >
                <span v-if="typeof MaxPriceValue == 'number'">$</span>
                {{ MaxPriceValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="MaxPrice ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="MaxPrice"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30 h-[165px] overflow-y-auto"
            >
              <p
                v-for="select in [
                  'Any',
                  1000,
                  5000,
                  10000,
                  50000,
                  100000,
                  200000,
                  300000,
                  400000,
                  500000,
                  600000,
                ]"
                @click="($event) => (MaxPriceValue = select)"
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == MaxPriceValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="Garages && 'bg-secondary-color text-white '"
          >
            <p class="text-[14px] font-bold">Min Garages</p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  Garages = !Garages;
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                class="font-semibold text-[15px]"
                :class="Garages ? 'text-white' : 'text-bg-secondary '"
              >
                {{ GaragesValue }}
              </p>
              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="Garages ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="Garages"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30 h-[165px] overflow-y-auto"
            >
              <p
                v-for="select in ['Any', 1, 2, 3, 4, 5, 6, 7]"
                @click="($event) => (GaragesValue = select)"
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="select == GaragesValue && 'bg-Third-color'"
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
            :class="Agent && 'bg-secondary-color text-white'"
          >
            <p class="text-[14px] font-bold" :class="Agent && 'text-white'">
              Agent
            </p>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="
                ($event) => {
                  Agent = !Agent;
                  MinPrice = false;
                  MaxPrice = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            >
              <p
                v-if="AgentValue.length == 0"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="Agent && 'text-white'"
              >
                All Agents
              </p>
              <div v-else-if="AgentValue.length < 3">
                <span
                  v-for="i in AgentValue"
                  :key="i"
                  class="text-bg-secondary font-semibold text-[15px]"
                  :class="Agent && 'text-white'"
                >
                  {{ i + ", " }}
                </span>
              </div>

              <p
                v-else-if="AgentValue.length >= 3"
                class="text-bg-secondary font-semibold text-[15px]"
                :class="Agent && 'text-white'"
              >
                {{ AgentValue.length + " Agents Selected" }}
              </p>

              <v-icon
                name="md-keyboardarrowdown-twotone"
                :class="Agent ? 'text-white' : 'text-text-secondary'"
              />
            </div>
            <div
              v-if="Agent"
              class="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30"
            >
              <div class="flex border-white border items-center mx-2 mb-2">
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="
                    AgentValue = [
                      'Nathan James'.toLowerCase(),
                      'Melissa William'.toLowerCase(),
                      'Alice Brian'.toLowerCase(),
                      'John David'.toLowerCase(),
                    ]
                  "
                >
                  <v-icon
                    name="io-checkmark-done-outline"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
                <p
                  class="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer"
                  @click="AgentValue = []"
                >
                  <v-icon
                    name="io-return-up-back"
                    scale="1.3"
                    class="text-white"
                  />
                </p>
              </div>
              <p
                v-for="select in [
                  'Nathan James',
                  'Melissa William',
                  'Alice Brian',
                  'John David',
                ]"
                @click="
                  ($event) =>
                    AgentValue.indexOf(select.toLowerCase()) !== -1
                      ? (AgentValue = AgentValue.filter(
                          (p) => p.toLowerCase() != select.toLowerCase()
                        ))
                      : AgentValue.push(select.toLowerCase())
                "
                :key="select"
                class="py-2 cursor-pointer px-6 hover:bg-Third-color"
                :class="
                  AgentValue.indexOf(select.toLowerCase()) !== -1 &&
                  'bg-Third-color'
                "
              >
                {{ select }}
              </p>
            </div>
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
          >
            <p class="text-[14px] font-bold">Min Area (sq ft)</p>
            <InputNumber
              v-model="MinAreaValue"
              inputId="integeronly"
              placeholder="Any"
              @focus="
                ($event) => {
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            />
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
          >
            <p class="text-[14px] font-bold">Max Area (sq ft)</p>
            <InputNumber
              v-model="MaxAreaValue"
              inputId="integeronly"
              placeholder="Any"
              @focus="
                ($event) => {
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            />
          </div>
          <div
            class="justify-center scroller flex gap-2 flex-col w-[204px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative"
          >
            <p class="text-[14px] font-bold">Property ID</p>
            <InputNumber
              v-model="ID"
              inputId="integeronly"
              placeholder="Any"
              @focus="
                ($event) => {
                  MinPrice = false;
                  MaxPrice = false;
                  Agent = false;
                  Baths = false;
                  Garages = false;
                  Beds = false;
                  propertyStatus = false;
                  propertyType = false;
                  Location = false;
                }
              "
            />
          </div>
        </div>
      </div>
      <div
        @click="
          ($event) => {
            advancedSearch = !advancedSearch;
            MinPrice = false;
            MaxPrice = false;
            Agent = false;
            Baths = false;
            Garages = false;
            Beds = false;
            propertyStatus = false;
            propertyType = false;
            Location = false;
          }
        "
        class="grow bg-secondary-color min-h-[95px] flex justify-center items-center border-text-secondary/10 border-[.5px] text-white h-full w-[75px] brightness-90 hover:brightness-100 cursor-pointer"
      >
        <v-icon name="fa-search-minus" scale="1.3" v-if="advancedSearch" />
        <v-icon name="fa-search-plus" scale="1.3" v-else />
      </div>
      <div
        @click="
          () => {
            router.push({
              name: 'search',
              query: {
                location: LocationValue,
                PropertyStatus: propertyStatusValue.toLowerCase(),
                PropertyType: propertyTypeValue,
                MinBeds: BedsValue,
                MinBaths: BathsValue,
                MinPrice: MinPriceValue,
                MaxPrice: MaxPriceValue,
                MinGarages: GaragesValue,
                Agent: AgentValue,
                MinArea: MinAreaValue,
                MaxArea: MaxAreaValue,
                PropertyID: ID,
              },
            });
          }
        "
        class="grow min-h-[95px] bg-secondary-color flex justify-center items-center text-white w-[123px] gap-2 hover:brightness-90 cursor-pointer h-full"
      >
        <v-icon name="bi-search" scale="1.3" />
        <p>Search</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const LocationValue = ref(
  Array.isArray(route?.query?.location)
    ? route?.query?.location
    : typeof route?.query?.location == "string"
    ? [route?.query?.location]
    : []
);
const propertyStatusValue = ref(route?.query?.PropertyStatus || "Any");
const propertyTypeValue = ref(
  Array.isArray(route?.query?.PropertyType)
    ? route?.query?.PropertyType
    : typeof route?.query?.PropertyType == "string"
    ? [route?.query?.PropertyType]
    : []
);

const BedsValue = ref(route?.query?.MinBeds || "Any");
const BathsValue = ref(route?.query?.MinBaths || "Any");
const MinPriceValue = ref(route?.query?.MinPrice || "Any");
const MaxPriceValue = ref(route?.query?.MaxPrice || "Any");
const GaragesValue = ref(route?.query?.MinGarages || "Any");
const AgentValue = ref(
  Array.isArray(route?.query?.Agent)
    ? route?.query?.Agent
    : typeof route?.query?.Agent == "string"
    ? [route?.query?.Agent]
    : []
);
const MinAreaValue = ref(route?.query?.MinArea || "");
const MaxAreaValue = ref(route?.query?.MaxArea || "");
const ID = ref(route?.query?.PropertyID || "");

const advancedSearch = ref(false);
const propertyStatus = ref(false);
const propertyType = ref(false);
const Location = ref(false);
const Beds = ref(false);
const Baths = ref(false);
const MinPrice = ref(false);
const MaxPrice = ref(false);
const Garages = ref(false);
const Agent = ref(false);
</script>
<style>
#integeronly:focus {
  outline-width: 0 !important;
  border-width: 0 !important;
  box-shadow: none;
}
#integeronly {
  padding-left: 0;
}
/* width */
::-webkit-scrollbar {
  width: 7px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0b8278 !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #085e57 !important;
}
@-moz-document url-prefix() {
  .scroller {
    scrollbar-color: #0b8278 transparent;
    scrollbar-width: thin;
  }
  .scroller:hover {
    scrollbar-color: #085e57 transparent;
    scrollbar-width: thin;
  }
}
</style>
