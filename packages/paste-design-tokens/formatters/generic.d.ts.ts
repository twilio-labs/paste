import type {ImmutableStyleMap} from 'theo';

import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {isNumeric} from '../utils/isNumeric';
import {tweakTokens} from './generic';
import {formatGroupTokensWithTemplate} from '../utils/formatGroupTokensWithTemplate';

const tokenLineTemplate = (key: string, value: string): string =>
  `   ${key}: ${isNumeric(value) ? value : `${JSON.stringify(value)}`};`;

const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  return `"${categoryName}": [
    ${props
      .map((prop) => {
        const results = [];

        for (const k in prop) {
          const key = k as keyof typeof prop;
          results.push(tokenLineTemplate(key, prop[key] as string));
        }
        return `{\n${results.join('\n')}\n}`;
      })

      .join(',\n')}
]`;
};

export const genericDTsTemplate = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = `{\n"tokens":{${formatGroupTokensWithTemplate(
    result,
    categories,
    categoryTemplate,
    tweakTokens
  )}}\n}`;

  return `declare const Tokens: ${groupedTokens}\nexport default Tokens;`;
};
