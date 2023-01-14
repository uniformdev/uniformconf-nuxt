import { createItemEnhancer } from '@uniformdev/canvas-sitecore';

export function getSitecoreEnhancer() {
  const runtimeConfig = useRuntimeConfig();
  const { sitecoreApiKey, sitecoreSiteName, sitecoreApiUrl } = runtimeConfig;
  if (!sitecoreApiKey || !sitecoreSiteName || !sitecoreApiUrl) {
    throw 'Sitecore connection details are not configured';
  }
  return createItemEnhancer({
    pageId: 'id',
    config: {
      SITECORE_API_URL: sitecoreApiUrl,
      SITECORE_SITENAME: sitecoreSiteName,
      env: {
        SITECORE_API_KEY: sitecoreApiKey,
      },
    },
    isPreview: false,
    logger: null,
    modelOnly: false, // enable modelOnly after configuring model builders in Sitecore for all components and parameters
  });
}
