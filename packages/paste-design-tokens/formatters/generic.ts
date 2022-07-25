import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  const tokenPairs = props.map(({category, ...rest}) => rest);

  return `
    "${categoryName}": ${JSON.stringify(tokenPairs)},
  `;
};

// Filter out deprecated tokens in exported file
export const filterDeprecatedTokens = (tokenCategory: DesignToken[]): DesignToken[] => {
  return tokenCategory.filter((token) => !token.deprecated);
};

export const genericCommonJsTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = `"tokens":{${formatGroupTokensWithTemplate(
    result,
    categories,
    categoryTemplate,
    filterDeprecatedTokens
  )}}`;

  return `module.exports = {\n${groupedTokens}\n}`;
};
