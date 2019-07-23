import * as lodash from 'lodash';
import {ImmutableStyleMap} from 'theo';
import {Token} from '../types';
import getTokenCategories from '../utils/getTokenCategories';
import formatSingleTokensWithTemplate from '../utils/formatSingleTokensWithTemplate';
import formatGroupTokensWithTemplate from '../utils/formatGroupTokensWithTemplate';

export const tokenTemplate = ({name, value}: {name: string; value: string}): string =>
  `export declare const ${lodash.camelCase(name)} = "${value}";`;

const categoryTemplate = (categoryName: string, props: Token[]): string => `export declare const ${lodash.camelCase(
  categoryName
)}: {
${props.map(prop => `  ${lodash.camelCase(prop.name)}: 'string';`).join('\n')}
};`;

export const dTSTokenFormat = (result: ImmutableStyleMap): string => {
  const singleTokens = formatSingleTokensWithTemplate(result, tokenTemplate);

  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return [singleTokens, groupedTokens].join('\n');
};
