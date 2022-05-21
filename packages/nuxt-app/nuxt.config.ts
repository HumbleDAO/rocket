import { defineNuxtConfig } from 'nuxt'

// TODO: bring in contract addresses as env vars

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  buildModules: ['@pinia/nuxt'],

  css: ['~/assets/css/tailwind.css'],

  modules: ['@nuxtjs/tailwindcss'],

  ssr: false,
})
