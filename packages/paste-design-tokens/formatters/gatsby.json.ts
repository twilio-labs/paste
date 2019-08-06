import {ImmutableStyleMap} from 'theo';
import {Token} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const categoryTemplate = (categoryName: string, props: Token[]): string => {
  return `{
    "categoryName": "${categoryName}",
    "tokens": ${JSON.stringify(props)}
  },`;
};

export const gatsbyJsonTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `{
    "tokens": [${groupedTokens.substring(0, groupedTokens.length - 1)}]
  }`;
};
