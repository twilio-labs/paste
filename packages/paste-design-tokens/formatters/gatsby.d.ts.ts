import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';

import {isNumeric, pluralCategoryMap} from './utils';

const tokenLineTemplate = (key: string, value: string): string =>
  `   readonly ${key}: ${isNumeric(value) ? value : `${JSON.stringify(value)}`};`;
const categoryTemplate = (categoryName: string, props: DesignToken[]): string => {
  return `readonly "${categoryName}": readonly [
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

const getPluralCatName = (name: string): string => {
  const pluralName = pluralCategoryMap.get(name);
  if (pluralName === undefined) {
    throw new Error(
      "[@twilio-paste/design-tokens formatGroupTokensWithTemplate]: This category doesn't have a plural equivelant, please add one"
    );
  }
  return pluralName;
};

export const formatGroupTokensWithTemplate = (
  tokens: ImmutableStyleMap,
  categories: any, // @TODO fix.
  template: (cat: string, props: DesignToken[], isLast?: boolean) => string
): string => {
  let count = 0;
  const content = categories
    .map((cat: string): string | null => {
      count += 1;
      const catProps = tokens
        .get('props')
        .sortBy((prop) => {
          if (prop !== undefined) {
            return prop.get('name');
          }
        })
        .filter((prop) => prop !== undefined && cat === prop.get('category'))
        .toJS();

      if (typeof cat === 'string') {
        return template(getPluralCatName(cat), catProps, count === categories.size);
      }
      return null;
    })
    .join(',\n');

  return `{\n${content}\n};`;
};

export const gatsbyDTSTemplate = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = formatGroupTokensWithTemplate(result, categories, categoryTemplate);

  return `declare const Tokens: ${groupedTokens}\nexport default Tokens;`;
};
