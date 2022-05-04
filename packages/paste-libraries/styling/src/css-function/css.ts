// Very lightly TS Version of https://github.com/styled-system/styled-system/blob/685be747c51862b4c574bc18b03a6715c6c7ee6e/packages/css/src/index.js
// not typed correctly in the slightest

import type {CSSObject} from '@styled-system/css';

interface GetFunc {
  (object: unknown, key: string | number, fallback?: unknown): any;
}
// based on https://github.com/developit/dlv
// this is simplified from the original method in styled system
export const get: GetFunc = (object, key, fallback) => {
  const keyAsArray = key && typeof key === 'string' ? key.split('.') : [key];
  let values: any = object;
  keyAsArray.forEach((k) => {
    values = values ? values[k] : undefined;
  });
  return values === undefined ? fallback : values;
};

const defaultBreakpoints = [40, 52, 64].map((n) => `${n}em`);

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
};

const multiples: {[key: string]: string[]} = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
};

// scales modified from styled system, we don't follow a generic colors bucket.
// each color type belongs to their own color bucket
const scales = {
  color: 'textColors',
  backgroundColor: 'backgroundColors',
  borderColor: 'borderColors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'borderColors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'borderColors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'borderColors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'borderColors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'outlineColors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // safari overrides
  '-webkit-text-fill-color': 'textColors',
  // svg
  fill: 'fillColors',
  stroke: 'strokeColors',
};

const positiveOrNegative = (scale: any, value: any): string | number => {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === 'string') return `-${n}`;
  return n * -1;
};

const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'top',
  'bottom',
  'left',
  'right',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);

export const responsive = (styles: {[key: string]: any}) => (theme: JSON) => {
  const next: {[key: string]: any} = {};
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints) as unknown as [];
  const mediaQueries = [null, ...breakpoints.map((n) => `@media screen and (min-width: ${n})`)];

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in styles) {
    const value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];

    // eslint-disable-next-line no-continue
    if (value == null) continue;
    if (!Array.isArray(value)) {
      next[key] = value;
      // eslint-disable-next-line no-continue
      continue;
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];
      if (!media) {
        next[key] = value[i];
        // eslint-disable-next-line no-continue
        continue;
      }
      next[media] = next[media] || {};
      // eslint-disable-next-line no-continue
      if (value[i] == null) continue;
      next[media][key] = value[i];
    }
  }

  return next;
};

export const css =
  (args: any) =>
  (props = {}): CSSObject => {
    // @ts-ignore
    const theme = {...defaultTheme, ...(props.theme || props)};
    let result: {[key: string]: any} = {};
    const obj = typeof args === 'function' ? args(theme) : args;
    const styles = responsive(obj)(theme);

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in styles) {
      const x = styles[key];
      const val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        const variant = css(get(theme, val))(theme);
        result = {...result, ...variant};
        // eslint-disable-next-line no-continue
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        // eslint-disable-next-line no-continue
        continue;
      }

      const prop = get(aliases, key, key);
      const scaleName = get(scales, prop);
      const scale = get(theme, scaleName, get(theme, prop, {}));
      const transform = get(transforms, prop, get);
      const value = transform(scale, val, val);

      if (multiples[prop]) {
        const dirs = multiples[prop];

        // eslint-disable-next-line unicorn/no-for-loop
        for (let i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };

// eslint-disable-next-line import/no-default-export
export default css;
