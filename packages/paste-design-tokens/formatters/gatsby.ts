import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  // Remove redundant category name
  const tokenPairs = props.map(({category, ...rest}) => rest);

  return `
    "${categoryName}": ${JSON.stringify(tokenPairs)},
  `;
};

export const gatsbyJsonTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `module.exports = {${groupedTokens}}`;
};
