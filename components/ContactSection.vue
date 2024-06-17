<template>
  <div class="container">
    <div class="flex flex-col gap-8 bg-white p-10 shadow-md">
      <div class="flex gap-x-8 flex-wrap bg-white w-full">
        <ContactForm widthPx="320px" />
        <div class="flex gap-4 flex-col my-4 w-[350px] grow">
          <div class="flex gap-4">
            <v-icon
              name="fa-phone-alt"
              class="text-text-secondary"
              scale="1.3"
            />
            <div class="flex gap-2 flex-col">
              <p class="m-0 p-0 text-[14px]">Phone</p>
              <p class="text-text-secondary p-0 m-0 text-[15px]">
                +123-456-789
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <v-icon
              name="fa-mobile-alt"
              class="text-text-secondary"
              scale="1.3"
            />
            <div class="flex gap-2 flex-col">
              <p class="m-0 p-0 text-[14px]">Mobile</p>
              <p class="text-text-secondary p-0 m-0 text-[15px]">
                +123-456-789
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <v-icon name="fa-fax" class="text-text-secondary" scale="1.3" />
            <div class="flex gap-2 flex-col">
              <p class="m-0 p-0 text-[14px]">Fax</p>
              <p class="text-text-secondary p-0 m-0 text-[15px]">
                +123-456-789
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <v-icon
              name="md-email-round"
              class="text-text-secondary"
              scale="1.3"
            />
            <div class="flex gap-2 flex-col">
              <p class="m-0 p-0 text-[14px]">Email</p>
              <p class="text-text-secondary p-0 m-0 text-[15px]">
                hello@realhouse.com
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <v-icon
              name="md-locationon-sharp"
              class="text-text-secondary"
              scale="1.3"
            />
            <div class="flex gap-2 flex-col">
              <p class="m-0 p-0 text-[14px]">Address</p>
              <p class="text-text-secondary p-0 m-0 text-[15px]">
                3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.3329545782094!2d-80.20946560979459!3d25.75956380000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6f56a7a20f7%3A0x6fa6a952b01d83ea!2s705%20SW%2026th%20Rd%2C%20Miami%2C%20FL%2033129!5e0!3m2!1sar!2sus!4v1717422932040!5m2!1sar!2sus"
        width="100%"
        height="450"
        style="border: 0"
        class="mb-3"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
