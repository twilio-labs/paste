import * as lodash from 'lodash';
import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatSingleTokensWithTemplate} from '../utils/formatSingleTokensWithTemplate';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

const isNumeric = (value: string): boolean => {
  // To check if a string is a number, we check if it isn't a number
  // eslint-disable-next-line no-restricted-globals,unicorn/prefer-number-properties
  return !isNaN(value as unknown as number);
};

export const tokenTemplate = ({name, value}: {name: string; value: string}): string =>
  `export declare const ${lodash.camelCase(name)} = "${value}";`;

const categoryTemplate = (
  categoryName: string,
  props: DesignToken[]
): string => `export declare const ${lodash.camelCase(categoryName)}: {
${props
  .map((prop) => {
    const value = isNumeric(prop.value) ? prop.value : `"${prop.value}"`;
    return `  ${lodash.camelCase(prop.name)}: ${value};`;
  })
  .join('\n')}
};`;

export const dTSTokenFormat = (result: ImmutableStyleMap): string => {
  const singleTokens = formatSingleTokensWithTemplate(result, tokenTemplate);

  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return [singleTokens, groupedTokens].join('\n');
};
