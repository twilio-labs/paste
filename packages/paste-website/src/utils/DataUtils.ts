import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

import {getHumanizedNameFromPackageName, getNameFromPackageName} from './RouteUtils';
import {sentenceCase} from './SentenceCase';

export type ApiData = Record<string, any>;

type MutationFunction = (data: ApiData) => ApiData;

const KEYS_TO_FLATTEN = new Set([
  'allAirtable',
  'allPasteComponent',
  'allPasteDesignTokensPackage',
  'allPasteLayout',
  'allPasteLibraries',
  'allPastePattern',
  'allPastePrimitive',
  'allPasteThemePackage',
]);

const shouldFlatten = (key: string): boolean => KEYS_TO_FLATTEN.has(key);

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

const getNavigationDataMutation = (key: string): MutationFunction => {
  switch (key) {
    case 'allPasteComponent':
    case 'allPasteLayout':
    case 'allPastePrimitive': {
      return ({name, status}: ApiData): ApiData => ({
        name: getHumanizedNameFromPackageName(name),
        packageName: name,
        slug: getNameFromPackageName(name),
        packageStatus: status,
      });
    }

    case 'allPastePattern': {
      return ({status, Feature}: ApiData): ApiData => {
        return {
          name: Feature,
          packageStatus: status,
          slug: Feature.toLowerCase().replace(/\s/g, '-'),
        };
      };
    }

    default:
      return (data: ApiData) => data;
  }
};

export const getNormalizedNavigationData = (data: ApiData): ApiData => {
  const queryKeys = Object.keys(data);
  const normalizedData: Record<string, ApiData> = {};

  queryKeys.forEach((currentKey) => {
    if (shouldFlatten(currentKey)) {
      const dataFragment = data[currentKey];
      const mutateOperation = getNavigationDataMutation(currentKey);
      let res: Array<ApiData> = [];

      dataFragment.forEach((currentPackage: ApiData) => {
        const mutatedData = mutateOperation(currentPackage);
        res = [...res, mutatedData];
      });
      normalizedData[currentKey] = res;
    }
  });

  return normalizedData;
};
