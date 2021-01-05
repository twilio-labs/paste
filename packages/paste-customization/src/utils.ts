import type {ThemeShape} from '@twilio-paste/theme';

const merge = require('lodash.merge');

interface CreateCustomTheme {
  (baseTheme: Partial<ThemeShape>, overrides: Partial<ThemeShape>, breakpoints?: string[]): Partial<ThemeShape>;
}
export const createCustomTheme: CreateCustomTheme = (baseTheme, overrides, customBreakpoints) => {
  const breakpoints = customBreakpoints || baseTheme.breakpoints;
  const mergedTheme = merge({}, baseTheme, overrides);
  return {
    ...mergedTheme,
    breakpoints,
  };
};
