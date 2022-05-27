import camelCase from 'lodash/camelCase';
import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatSingleTokensWithTemplate} from '../utils/formatSingleTokensWithTemplate';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const tokenTemplate = ({name, value}: {name: string; value: string}): string =>
  `export const ${camelCase(name)} = "${value.replace(/"/g, '\\"')}";`;

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => `export const ${camelCase(
  categoryName
)} = {
${props.map((prop) => `${camelCase(prop.name)},`).join('\n')}
};`;

export const es6TokenFormat = (result: ImmutableStyleMap): string => {
  const singleTokens = formatSingleTokensWithTemplate(result, tokenTemplate);

  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return [singleTokens, groupedTokens].join('\n');
};
