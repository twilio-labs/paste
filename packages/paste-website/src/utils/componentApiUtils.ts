import PackageCache from '../../../../tools/.cache/packages.json';

export type ComponentApiPropDetails = {
  type: string;
  defaultValue?: string | boolean | null;
  required: boolean;
  description?: string;
  externalProp?: boolean;
};
export type ComponentApiProp = {
  [propName: string]: ComponentApiPropDetails;
};
export type ComponentApi = {
  [componentName: string]: ComponentApiProp;
};
export type GroupedComponentApi = {
  [componentName: string]: {
    externalProps: ComponentApiProp;
    internalProps: ComponentApiProp;
  };
};

export const getPathFromPackageName = (packageName: string): string => {
  let packagePath = '';
  PackageCache.forEach((pkg: {name: string; version: string; private: boolean; location: string}) => {
    if (pkg.name === packageName) {
      packagePath = pkg.location;
    }
  });
  return packagePath;
};

export function groupPropsByExternal(api: ComponentApi): GroupedComponentApi {
  const newApi: GroupedComponentApi = {};

  Object.keys(api).forEach((componentName) => {
    const component = api[componentName];
    const internalProps: ComponentApiProp = {};
    const externalProps: ComponentApiProp = {};

    Object.keys(component).forEach((propName) => {
      const prop = component[propName];
      if (prop.externalProp) {
        externalProps[propName] = prop;
      } else {
        internalProps[propName] = prop;
      }
    });

    newApi[componentName] = {
      internalProps,
      externalProps,
    };
  });

  return newApi;
}

export function getTocDataFromComponentApi(api: ComponentApi): {value: string; depth: number}[] {
  return Object.keys(api).map((componentName) => {
    return {
      value: componentName,
      depth: 3,
    };
  });
}
