import { enhance } from '@uniformdev/canvas';
import {
  compose,
  EnhancerBuilder,
  RootComponentInstance,
} from '@uniformdev/canvas';
import { getSitecoreEnhancer } from './enhancers/sitecore';
import { CANVAS_SITECORE_PARAMETER_TYPES } from '@uniformdev/canvas-sitecore';
import { AEM_PARAMETER_TYPES } from '@uniformdev/canvas-aem';
import { aemEnhancer } from './enhancers/aem';
import { aemConverter } from './converters/aemConverter';

const noopEnhancer = () => {
  console.log('WARN: noopEnhancer enhancer called.');
};

export default async function doEnhance(composition: RootComponentInstance) {
  const enhancedComposition = { ...composition };
  await enhance({
    composition: enhancedComposition,
    enhancers: new EnhancerBuilder()
      .parameterType(CANVAS_SITECORE_PARAMETER_TYPES, getSitecoreEnhancer())
      .parameterType(
        AEM_PARAMETER_TYPES,
        aemConfigured() ? compose(aemEnhancer(), aemConverter) : noopEnhancer,
      ),
  });

  return enhancedComposition;
}

export function aemConfigured() {
  const runtimeConfig = useRuntimeConfig();
  const { aemBaseUrl, aemEndpoint, aemAuthType, aemUser, aemPassword } =
    runtimeConfig;
  return aemBaseUrl && aemEndpoint && aemAuthType && aemUser && aemPassword;
}

export function sitecoreConfigured() {
  const runtimeConfig = useRuntimeConfig();
  const { sitecoreApiKey, sitecoreSiteName, sitecoreApiUrl } = runtimeConfig;
  if (!sitecoreApiKey || !sitecoreSiteName || !sitecoreApiUrl) {
    return false;
  }
  return true;
}
