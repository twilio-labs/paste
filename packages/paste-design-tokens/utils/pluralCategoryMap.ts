// These plurals should map to the default styled system theme keys where possible
export const pluralCategoryMap = new Map(
  Object.entries({
    'background-color': 'background-colors',
    'background-gradient': 'background-gradients',
    'border-color': 'border-colors',
    'border-radius': 'border-radii',
    'border-width': 'border-widths',
    'border-style': 'border-styles',
    'box-shadow': 'box-shadows',
    'data-visualization': 'data-visualization',
    'drop-shadow': 'drop-shadows',
    color: 'colors',
    'color-scheme': 'color-schemes',
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
  }),
);

export const getPluralCatName = (name: string): string => {
  const pluralName = pluralCategoryMap.get(name);
  if (pluralName === undefined) {
    throw new Error(
      `[@twilio-paste/design-tokens]: This category ${name} doesn't have a plural equivelant, please add one`,
    );
  }
  return pluralName;
};
