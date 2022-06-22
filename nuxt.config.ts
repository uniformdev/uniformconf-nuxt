import { defineNuxtConfig } from 'nuxt';
import manifestJson from './context-manifest.json';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  // TODO: Extend the build config inside the Nuxt module
  build: {
    transpile: [
      '@uniformdev/uniform-nuxt',
      '@uniformdev/canvas-vue',
      '@uniformdev/context-vue',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['rfdc'],
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: ['~/assets/css/styles.css'],
  modules: [
    [
      '@uniformdev/uniform-nuxt',
      {
        manifest: manifestJson,
        projectId: process.env.UNIFORM_PROJECT_ID,
        readOnlyApiKey: process.env.UNIFORM_API_KEY,
        apiHost: process.env.UNIFORM_CLI_BASE_URL,
        outputType: 'standard',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
