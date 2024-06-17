export default defineNuxtConfig({
  plugins: ["~/plugins/oh-vue-icons.js", "~/plugins/vue2-google-maps.js"],

  build: {
    transpile: ["oh-vue-icons", /^vue2-google-maps($|\/)/],
  },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    optimizeDeps: {
      exclude: ["oh-vue-icons/icons"],
    },
    ssr: {
      noExternal: ["oh-vue-icons"],
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: "Aura", from: "~/presets/aura" }, //import and apply preset
  },
});
