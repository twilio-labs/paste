import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  return `{
    "categoryName": "${categoryName}",
    "tokens": ${JSON.stringify(props)}
  },`;
};

export const gatsbyJsonTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `{
    "tokens": [${groupedTokens.slice(0, Math.max(0, groupedTokens.length - 1))}]
  }`;
};
