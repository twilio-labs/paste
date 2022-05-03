import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
<<<<<<< HEAD
=======
  // Remove redundant category name
>>>>>>> 579c9b534 (chore: checkpoint redesigned page)
  const tokenPairs = props.map(({category, ...rest}) => rest);

  return `
    "${categoryName}": ${JSON.stringify(tokenPairs)},
  `;
};

<<<<<<< HEAD
export const newGatsbyJsonTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = `"tokens":{${formatGroupTokensWithTemplate(result, categories, categoryTemplate)}}`;

  return `module.exports = {\n${groupedTokens}\n}`;
=======
export const gatsbyJsonTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `module.exports = {${groupedTokens}}`;
>>>>>>> 579c9b534 (chore: checkpoint redesigned page)
};
