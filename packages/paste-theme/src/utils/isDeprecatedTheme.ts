import type {DeprecatedThemeVariants} from '../constants';

export const isDeprecatedTheme = (theme: DeprecatedThemeVariants): null => {
  const themeToDeprecationMessage: Record<DeprecatedThemeVariants, string> = {
    console: 'It was removed in the 2022.02.04 release of Paste.',
  };

  if (themeToDeprecationMessage[theme] && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
    // eslint-disable-next-line no-console
    console.error(`Paste: ${theme} is a deprecated theme. ${themeToDeprecationMessage[theme]}`);
  }

  return null;
};
