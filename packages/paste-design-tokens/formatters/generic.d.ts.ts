import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../types';
import {getTokenCategories} from '../utils/getTokenCategories';
import {isNumeric, pluralCategoryMap} from './utils';
import {filterDeprecatedTokens} from './generic';

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
  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  let count = 0;

  const content = categories
    .map((cat: string): string | null => {
      count += 1;
      let catProps = tokens
        .get('props')
        .sort((a, b) => {
          if (cat === 'font-weight') {
            return collator.compare(a.get('value') as string, b.get('value') as string);
          }
          return collator.compare(a.get('name') as string, b.get('name') as string);
        })
        .filter((prop) => prop !== undefined && cat === prop.get('category'))
        .toJS();

      // Filter out deprecated tokens in exported file
      catProps = filterDeprecatedTokens(catProps);

      if (typeof cat === 'string') {
        return template(getPluralCatName(cat), catProps, count === categories.size);
      }
      return null;
    })
    .join(',\n');

  return content;
};

export const genericDTsTemplate = (result: ImmutableStyleMap): string => {
  const categories = getTokenCategories(result);

  const groupedTokens = `{\n"tokens":{${formatGroupTokensWithTemplate(result, categories, categoryTemplate)}}\n}`;

  return `declare const Tokens: ${groupedTokens}\nexport default Tokens;`;
};
