import type {DeprecatedThemeVariants} from '../constants';

export const isDeprecatedTheme = (theme: DeprecatedThemeVariants): null => {
  // eslint-disable-next-line no-console
  console.error(`Paste: "${theme}" is a deprecated theme. It was removed in the 2022.02.04 release of Paste.`);

  return null;
};
