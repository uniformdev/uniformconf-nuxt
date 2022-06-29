import { defineNuxtConfig, type NuxtConfig } from 'nuxt';
import manifestJson from './context-manifest.json';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // TODO: Extend the build config inside the Nuxt module
  build: {
    transpile: [
      '@uniformdev/uniform-nuxt',
      '@uniformdev/canvas-vue',
      '@uniformdev/context-vue',
      '@uniformdev/canvas',
      '@uniformdev/context',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['rfdc', 'retry'],
    },
  },
  css: ['~/assets/css/styles.css'],
  modules: [
    [
      '@uniformdev/uniform-nuxt',
      {
        manifest: manifestJson,
        projectId: process.env.UNIFORM_PROJECT_ID,
        readOnlyApiKey: process.env.UNIFORM_API_KEY,
        apiHost: process.env.UNIFORM_API_HOST,
        outputType: process.env.OUTPUT_TYPE,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
