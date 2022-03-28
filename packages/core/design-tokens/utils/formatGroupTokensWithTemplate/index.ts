import type {ImmutableStyleMap} from 'theo';
import type {DesignToken} from '../../types';

// These plurals should map to the default styled system theme keys where possible
const pluralCategoryMap = new Map(
  Object.entries({
    'background-color': 'background-colors',
    'background-gradient': 'background-gradients',
    'border-color': 'border-colors',
    'border-radius': 'border-radii',
    'border-width': 'border-widths',
    'border-style': 'border-styles',
    'box-shadow': 'box-shadows',
    'drop-shadow': 'drop-shadows',
    color: 'colors',
    font: 'fonts',
    'font-family': 'font-families',
    'font-size': 'font-sizes',
    'font-style': 'font-styles',
    'font-weight': 'font-weights',
    gradient: 'gradients',
    'hr-color': 'horizontal-rule-colors',
    'inner-shadow': 'inner-shadows',
    'line-height': 'line-heights',
    'media-query': 'media-queries',
    radius: 'radii',
    shadow: 'shadows',
    sizing: 'sizings',
    spacing: 'spacings',
    'text-color': 'text-colors',
    'text-shadow': 'text-shadows',
    time: 'time',
    'z-index': 'z-indices',
  })
);

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
  categories: any,
  categoryTemplate: (cat: string, props: DesignToken[]) => string
): string => {
  return categories
    .map((cat: string): string | null => {
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
        return categoryTemplate(getPluralCatName(cat), catProps);
      }
      return null;
    })
    .join('\n');
};
