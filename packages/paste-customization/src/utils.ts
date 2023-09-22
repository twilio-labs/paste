import merge from 'deepmerge';

import type { CreateCustomTheme, CustomTheme } from './types';

export const createCustomTheme = ({
  baseTheme,
  overrides,
  customBreakpoints,
  elements,
}: CreateCustomTheme): CustomTheme => {
  const breakpoints = customBreakpoints || baseTheme.breakpoints;
  const mergedTheme = merge(baseTheme, overrides);

  if (elements != null) {
    const uniqueElements = [...new Set(Object.keys(elements).map((element) => element.toLowerCase()))];
    if (uniqueElements.length !== Object.keys(elements).length) {
      throw new Error(
        '[CustomizationProvider]: duplicate element names, even when using a different casing, is not supported with Paste.',
      );
    }
  }

  return {
    ...mergedTheme,
    breakpoints,
    elements,
  };
};
