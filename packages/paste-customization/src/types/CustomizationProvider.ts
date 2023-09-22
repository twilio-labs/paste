import type { GenericThemeShape, ThemeProviderProps } from '@twilio-paste/theme';

import type { PasteCustomCSS } from './PasteCSS';

export interface CustomizationProviderProps {
  children?: React.ReactNode | undefined;
  /**
   * Choose the base theme you would like your application to extend from
   *
   * @type {('default' | 'dark')}
   * @memberof CustomizationProviderProps
   */
  baseTheme?: 'default' | 'dark';
  /**
   * Provide an array of breakpoint sizes that you would like to be able to use in responsive
   * layouts, using the responsive style props
   *
   * @type {ThemeProviderProps['customBreakpoints']}
   * @memberof CustomizationProviderProps
   */
  customBreakpoints?: ThemeProviderProps['customBreakpoints'];
  /**
   * Manually disable all animations in the components using the animation library
   * useful for testing components such as performing visual regression testing
   *
   * @type {ThemeProviderProps['disableAnimations']}
   * @memberof CustomizationProviderProps
   */
  disableAnimations?: ThemeProviderProps['disableAnimations'];
  /**
   * Supply the Customization Provider an object of Elements that you would like to
   * customize the CSS of. Use the element name provided by Paste as a key and provide
   * any Valid CSS in the Emotion CSS Object format
   *
   * @type {[key: string]: PasteCustomCSS}
   * @memberof CustomizationProviderProps
   */
  elements?: { [key: string]: PasteCustomCSS };
  /**
   * Provide a full or partial Paste theme to be merged into the base theme that you provide
   *
   * @type {Partial<GenericThemeShape>}
   * @memberof CustomizationProviderProps
   */
  theme?: Partial<GenericThemeShape>;
}
