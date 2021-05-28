import type {CustomTheme, CreateCustomTheme} from './types';

const merge = require('lodash.merge');

export const createCustomTheme = ({
  baseTheme,
  overrides,
  customBreakpoints,
  elements,
}: CreateCustomTheme): CustomTheme => {
  const breakpoints = customBreakpoints || baseTheme.breakpoints;
  const mergedTheme = merge({}, baseTheme, overrides);
  return {
    ...mergedTheme,
    breakpoints,
    elements,
  };
};
