import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components'],
  },
  runtimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    canvasApiHost: process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app',
  },
  css: ['@/assets/css/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],
});
