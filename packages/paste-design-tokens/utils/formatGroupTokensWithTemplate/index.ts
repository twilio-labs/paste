import type {ImmutableStyleMap} from 'theo';

import type {DesignToken} from '../../types';
import {getPluralCatName} from '../pluralCategoryMap';

export const formatGroupTokensWithTemplate = (
  tokens: ImmutableStyleMap,
  categories: any,
  categoryTemplate: (cat: string, props: DesignToken[]) => string,
  additionalFilterFn?: (key: DesignToken[]) => any[]
): string => {
  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

  return categories
    .map((cat: string): string | null => {
      let catProps = tokens
        .get('props')
        .sort((a, b) => {
          if (cat === 'font-weight') {
            return collator.compare(a.get('value') as string, b.get('value') as string);
          }
          return collator.compare(a.get('name') as string, b.get('name') as string);
        })
        .filter((prop) => prop !== undefined && cat === prop.get('category'))
        .toJS() as DesignToken[];

      /*
       * Run a conditional filter function against the tokens
       * Used to remove the deprecated tokens from the website `generic` token file
       */
      if (additionalFilterFn != null) {
        catProps = additionalFilterFn(catProps);
      }

      if (typeof cat === 'string') {
        return categoryTemplate(getPluralCatName(cat), catProps);
      }
      return null;
    })
    .join('\n');
};
