import camelCase from 'lodash/camelCase';
import type { ImmutableStyleMap } from 'theo';

import type { DesignToken } from '../types';
import { getTokenCategories } from '../utils/getTokenCategories';
import { formatSingleTokensWithTemplate } from '../utils/formatSingleTokensWithTemplate';
import { formatGroupTokensWithTemplate } from '../utils/formatGroupTokensWithTemplate';
import { isNumeric } from '../utils/isNumeric';

export const tokenTemplate = ({ name, value }: { name: string; value: string }): string =>
  `export declare const ${camelCase(name)} = "${value}";`;

const categoryTemplate = (categoryName: string, props: DesignToken[]): string => `export declare const ${camelCase(
  categoryName,
)}: {
${props
  .map((prop) => {
    const value = isNumeric(prop.value) ? prop.value : `"${prop.value}"`;
    return `  ${camelCase(prop.name)}: ${value};`;
  })
  .join('\n')}
};`;

export const dTSTokenFormat = (result: ImmutableStyleMap): string => {
  const singleTokens = formatSingleTokensWithTemplate(result, tokenTemplate);

  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return [singleTokens, groupedTokens].join('\n');
};
