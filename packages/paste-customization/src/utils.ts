import {ThemeShape} from '@twilio-paste/theme';

const merge = require('lodash.merge');

interface CreateCustomTheme {
  (baseTheme: Partial<ThemeShape>, overrides: {}, breakpoints?: string[]): {};
}
export const createCustomTheme: CreateCustomTheme = (baseTheme, overrides, customBreakpoints) => {
  const breakpoints = customBreakpoints || baseTheme.breakpoints;
  const mergedTheme = merge({}, baseTheme, overrides);
  return {
    ...mergedTheme,
    breakpoints,
  };
};
