// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image"],
  devtools: { enabled: true },
  imports: {
    dirs: ["stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  image: {
    providers: {
      keycdn: {
        name: "keycdn",
        provider: "~/providers/keycdn",
        options: {
          baseURL: "https://cdn.enkarto.com/",
        },
      },
    },
    provider: "keycdn",
  },
});
