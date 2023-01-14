import { AemClient, AuthType, createEnhancer } from '@uniformdev/canvas-aem';

export function aemEnhancer() {
  console.log("AEM enhancer")
  const runtimeConfig = useRuntimeConfig();
  const { aemBaseUrl, aemEndpoint, aemAuthType, aemUser, aemPassword} = runtimeConfig;

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

  // if (aemAuthType === AuthType.TOKEN) {
  //   const client = new AemClient({
  //     AEMUrl: aemBaseUrl,
  //     authType: AuthType.TOKEN,
  //     endpoint: aemEndpoint,
  //     jwtToken: (envVars as TokenAuth).AEM_JWT_TOKEN,
  //     clientId: (envVars as TokenAuth).AEM_CLIENT_ID,
  //     clientSecret: (envVars as TokenAuth).AEM_SECRET,
  //   });
  //   await client.restLogin();
  //   return createEnhancer({
  //     clients: client,
  //   });
  // }

  return createEnhancer({
    clients: undefined,
  });
}
