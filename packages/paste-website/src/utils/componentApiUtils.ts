import PackageCache from '../../../../tools/.cache/packages.json';

export type ComponentAPIPropDetails = {
  type: string;
  defaultValue?: string | boolean | null;
  required: boolean;
  description?: string;
  externalProp?: boolean;
};
export type ComponentAPIProp = {
  [propName: string]: ComponentAPIPropDetails;
};
export type ComponentAPI = {
  [componentName: string]: ComponentAPIProp;
};
export type GroupedComponentAPI = {
  [componentName: string]: {
    externalProps: ComponentAPIProp;
    internalProps: ComponentAPIProp;
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

export function groupPropsByExternal(api: ComponentAPI): GroupedComponentAPI {
  const newApi: GroupedComponentAPI = {};

  Object.keys(api).forEach((componentName) => {
    const component = api[componentName];
    const internalProps: ComponentAPIProp = {};
    const externalProps: ComponentAPIProp = {};

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
