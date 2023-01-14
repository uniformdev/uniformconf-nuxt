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
      src: links[0]?.href,
    };
  }

  // process as content fragment
  if (!fragment || !fragment.elements) {
    return fragment;
  }

  const parameters: any = {};
  Object.keys(fragment.elements).forEach((key) => {
    parameters[key] = fragment.elements[key].value ?? '';
  });
  return parameters;
}
