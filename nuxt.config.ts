// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // State Management
    "@pinia/nuxt",
    // UI & Styling
    "@nuxtjs/tailwindcss",
    // Image Optimization and Handling
    "@nuxt/image",
    // Internationalization
    "@nuxtjs/i18n",
    // Additional Modules
    // Any other modules you add to your Nuxt app can be categorized here.

    // Example:
    // "@nuxtjs/auth-next",   // Authentication module
    // "@nuxt/http",          // HTTP module for API requests
    // "@nuxt/content",       // Content module for managing content
  ],
  // https://pinia.vuejs.org/ssr/nuxt.html#Auto-imports
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  imports: {
    dirs: ["stores"],
  },
  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  // https://image.nuxt.com/get-started/configuration
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
  // https://i18n.nuxtjs.org/getting-started/basic-usage#configurations
  i18n: {
    // All of routes will have a locale prefix added except for the default language.
    strategy: "prefix_except_default",

    lazy: true,
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
    ],
    langDir: "locales/",
    vueI18n: "./i18n.config.ts",
  },
});
