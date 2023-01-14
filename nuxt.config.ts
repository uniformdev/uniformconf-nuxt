import type { ManifestV2 } from '@uniformdev/context';
import manifestJson from './context-manifest.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  modules: ['nuxt-proxy', '@uniformdev/uniform-nuxt', '@nuxtjs/tailwindcss'],
  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app',
    outputType: process.env.OUTPUT_TYPE,
    manifest: manifestJson as ManifestV2,
    defaultConsent: true,
    // If you prefer to have full control over your Uniform Context instance:
    // uniformContextPath: './path-to-my-uniform-context-instance',
  },
  runtimeConfig: {
    sitecoreApiUrl: process.env.SITECORE_API_URL,
    sitecoreSiteName: process.env.SITECORE_SITENAME,
    sitecoreApiKey: process.env.SITECORE_API_KEY,
    aemBaseUrl: process.env.AEM_BASE_URL,
    aemEndpoint: process.env.AEM_ENDPOINT,
    aemAuthType: process.env.AEM_AUTH_TYPE,
    aemUser: process.env.AEM_USER,
    aemPassword: process.env.AEM_PASSWORD,
  },
  // See options here https://github.com/chimurai/http-proxy-middleware#options
  proxy: {
    options: {
      target: process.env.SITECORE_API_URL,
      changeOrigin: true,
      pathFilter: ['/-/media'],
    },
  },
});
