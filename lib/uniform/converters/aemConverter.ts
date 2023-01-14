const runtimeConfig = useRuntimeConfig();
const { aemPublishUrl } = runtimeConfig;

export const aemConverter = ({ parameter }: any) => {
  const value = parameter.value;
  if (!value) {
    return {};
  }
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return transformFragment(value[0]);
    }
    return value.map((p) => transformFragment(p));
  } else {
    return transformFragment(value);
  }
};

function transformFragment(fragment: any) {
  const { links } = fragment;
  // process as asset
  if (links && Array.isArray(links)) {
    // console.log(JSON.stringify(fragment));
    if (links.length <= 0) {
      return {
        src: '',
      };
    }
    return {
      src: convertAssetLinkToPublicUrl(links),
    };
  }

  // process as content fragment
  if (!fragment || !fragment.elements) {
    return fragment;
  }

  const parameters: any = {};
  Object.keys(fragment.elements).forEach((key) => {
    let value = fragment.elements[key].value;
    if (value && value.startsWith('/content/dam')) {
      value = `${aemPublishUrl}${value}`;
    }
    parameters[key] = value ?? '';
  });
  return parameters;
}

function convertAssetLinkToPublicUrl(assetLinks: Array<{ href: string }>) {
  if (!assetLinks || assetLinks.length <= 1) {
    return '';
  }
  const authorUrl = assetLinks[0]?.href;
  return authorUrl
    .replace('https://author-', 'https://publish-')
    .replace('api/assets', 'content/dam')
    .replace('.json', '');
}
