import { AemClient, AuthType, createEnhancer } from '@uniformdev/canvas-aem';

export function aemEnhancer() {
  const runtimeConfig = useRuntimeConfig();
  const { aemBaseUrl, aemEndpoint, aemAuthType, aemUser, aemPassword } =
    runtimeConfig;

  if (!aemBaseUrl || !aemEndpoint || !aemAuthType) {
    throw 'AEM connection details are not configured';
  }

  if (aemAuthType === AuthType.BASIC) {
    const client = new AemClient({
      AEMUrl: aemBaseUrl,
      authType: AuthType.BASIC,
      endpoint: aemEndpoint,
      user: aemUser,
      password: aemPassword,
    });
    return createEnhancer({
      clients: client,
    });
  }

  return createEnhancer({
    clients: undefined,
  });
}
