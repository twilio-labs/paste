import * as _ from 'lodash';
import {getHumanizedNameFromPackageName, getNameFromPackageName} from './RouteUtils';
import {sentenceCase} from './SentenceCase';

export type GraphqlData = Record<string, any>;

type MutationFunction = (data: GraphqlData) => GraphqlData;

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

const getPath = (key: string): string => {
  switch (key) {
    case 'allPasteComponent':
    case 'allPasteDesignTokensPackage':
    case 'allPasteLayout':
    case 'allPasteLibraries':
    case 'allPastePattern':
    case 'allPastePrimitive':
    case 'allPasteThemePackage': {
      return 'edges[0].node';
    }

    case 'allAirtable': {
      return 'edges[0].node.data';
    }

    default: {
      return '';
    }
  }
};

const shouldFlatten = (key: string): boolean => KEYS_TO_FLATTEN.has(key);

const getMutation = (key: string): MutationFunction => {
  switch (key) {
    case 'allPasteComponent':
    case 'allPasteDesignTokensPackage':
    case 'allPasteLayout':
    case 'allPasteLibraries':
    case 'allPastePattern':
    case 'allPastePrimitive':
    case 'allPasteThemePackage': {
      return ({name: packageName, version, description}) => {
        return {
          name: getHumanizedNameFromPackageName(packageName),
          packageName,
          version,
          description,
        };
      };
    }

    case 'allAirtable': {
      return ({status, Figma, ...rest}) => ({
        packageStatus: sentenceCase(status),
        figmaStatus: Figma,
        ..._.mapKeys(rest, (_noop, objKey) => _.camelCase(objKey)),
      });
    }

    default:
      return (data: GraphqlData) => data;
  }
};

const getNodeData = (data: GraphqlData, key: string): GraphqlData => {
  const path = getPath(key);

  const joiner = path ? '.' : '';
  const finalPath = [key, path].join(joiner);

  return _.get(data, finalPath, {});
};

export const getNormalizedHeaderData = (data: GraphqlData): GraphqlData => {
  const {mdx, ...filteredData} = data;
  const queryKeys = Object.keys(filteredData);

  return queryKeys.reduce((accum, currentKey) => {
    const dataFragment = getNodeData(data, currentKey);
    const mutateOperation = getMutation(currentKey);
    const mutatedData = mutateOperation(dataFragment);

    if (shouldFlatten(currentKey)) {
      return {
        ...accum,
        ...mutatedData,
      };
    }

    return {
      ...accum,
      [currentKey]: mutatedData,
    };
  }, {});
};

export const getNormalizedNavigationData = (data: GraphqlData): GraphqlData => {
  const queryKeys = Object.keys(data);
  const normalizedData: Record<string, GraphqlData> = {};

  queryKeys.forEach((currentKey) => {
    if (shouldFlatten(currentKey)) {
      const dataFragment = data[currentKey].edges;
      const mutateOperation = ({name, status}: GraphqlData): GraphqlData => ({
        name: getHumanizedNameFromPackageName(name),
        packageName: name,
        slug: getNameFromPackageName(name),
        status,
      });

      let res: Array<GraphqlData> = [];

      dataFragment.forEach((currentPackage: GraphqlData) => {
        const mutatedData = mutateOperation(currentPackage.node);
        res = [...res, mutatedData];
      });
      normalizedData[currentKey] = res;
    }
  });

  return normalizedData;
};
