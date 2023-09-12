import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

import {getHumanizedNameFromPackageName} from './RouteUtils';
import {sentenceCase} from './SentenceCase';
import type {Feature} from './api';

export type ApiData = Record<string, any>;

type NavItem = {
  name: string;
  packageName?: string;
  packageStatus: string;
  slug: string;
};
type NavData = {
  allPasteComponent: NavItem[];
  allPastePrimitive: NavItem[];
  allPasteLayout: NavItem[];
  allPastePattern: NavItem[];
  allPastePageTemplate: NavItem[];
};

export const getNormalizedHeaderData = (data: ApiData): ApiData => {
  const {name: packageName, version, description, status, Figma, ...rest} = data;

  return {
    name: getHumanizedNameFromPackageName(packageName),
    packageName,
    version,
    description,
    packageStatus: status ? sentenceCase(status) : undefined,
    figmaStatus: Figma,
    ...mapKeys(rest, (_noop, objKey) => camelCase(objKey)),
  };
};

const getKebabCaseFeatureName = (name: string): string => name.toLowerCase().replace(/\s/g, '-');

const mutateFeatureToPackage = ({Feature: FeatureName, status}: Feature): NavItem => {
  const formattedName = getKebabCaseFeatureName(FeatureName);
  return {
    name: FeatureName,
    packageName: `@twilio-paste/${formattedName}`,
    packageStatus: status,
    slug: formattedName,
  };
};
const mutateFeatureToPattern = ({Feature: FeatureName, status}: Feature): NavItem => {
  const formattedName = getKebabCaseFeatureName(FeatureName);
  return {
    name: FeatureName,
    packageStatus: status,
    slug: formattedName,
  };
};

export const getNormalizedNavigationData = (data: Feature[]): NavData => {
  // split features into categories
  const normalizedData: NavData = {
    allPasteComponent: [],
    allPasteLayout: [],
    allPastePrimitive: [],
    allPastePattern: [],
    allPastePageTemplate: [],
  };

  if (data.length === 0) return normalizedData;

  data.forEach((feature: Feature) => {
    // only display nav items for components that have docs
    if (!feature.Documentation) return;

    switch (feature['Component Category']) {
      case 'component':
        normalizedData.allPasteComponent.push(mutateFeatureToPackage(feature));
        break;
      case 'layout':
        normalizedData.allPasteLayout.push(mutateFeatureToPackage(feature));
        break;
      case 'primitive':
        normalizedData.allPastePrimitive.push(mutateFeatureToPackage(feature));
        break;
      case 'pattern':
        normalizedData.allPastePattern.push(mutateFeatureToPattern(feature));
        break;
      case 'page template':
        normalizedData.allPastePageTemplate.push(mutateFeatureToPackage(feature));
        break;
    }
  });
  return normalizedData;
};
