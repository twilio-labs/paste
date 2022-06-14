export const pluralCategoryMap = new Map(
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

export const isNumeric = (value: string): boolean => {
  // To check if a string is a number, we check if it isn't a number
  // eslint-disable-next-line no-restricted-globals,unicorn/prefer-number-properties
  return !isNaN(value as unknown as number);
};
