import type { ImmutableStyleMap } from 'theo';

import type { DesignToken, GenericDesignToken } from '../types';
import { formatGroupTokensWithTemplate } from '../utils/formatGroupTokensWithTemplate';
import { getTokenCategories } from '../utils/getTokenCategories';
import { remToPx } from '../utils/remToPx';
import { rgbToHex } from '../utils/rgbToHex';

export const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  const tokenPairs = props.map(({ category, ...rest }) => rest);

  return `
    "${categoryName}": ${JSON.stringify(tokenPairs)},
  `;
};

const getTokenAltValue = ({ category, value }: { category: string; value: string }): string | null => {
  switch (category) {
    case 'background-color':
    case 'border-color':
    case 'text-color':
      return typeof value === 'string' ? rgbToHex(value) : null;
    case 'font-size':
    case 'line-height':
    case 'sizing':
    case 'spacing':
      return remToPx(value, 'string') as string;
    default:
      return null;
  }
};

/*
 * Filter out deprecated tokens in exported list
 * Add altValues in exported list
 * Remove originalValue (shouldn't reveal how the sausage is made)
 */
export const tweakTokens = (tokenCategory: DesignToken[]): GenericDesignToken[] => {
  const tokensWithoutDeprecated = tokenCategory.filter((token) => !token.deprecated);
  return tokensWithoutDeprecated.map(({ originalValue, ...token }) => ({
    ...token,
    altValue: getTokenAltValue(token),
  }));
};

export const genericJsTokenFormat = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = `"tokens":{${formatGroupTokensWithTemplate(
    result,
    categories,
    categoryTemplate,
    tweakTokens,
  )}}`;

  return `export default {\n${groupedTokens}\n}`;
};
