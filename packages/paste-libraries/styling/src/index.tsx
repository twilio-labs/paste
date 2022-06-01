// Custom styling application (styled-system)
// https://github.com/styled-system/styled-system/tree/master/
import './types';
export type {
  SystemStyleObject,
  SystemCssProperties,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  VariantProperty,
  UseThemeFunction,
  EmotionLabel,
  CSSObject,
} from '@styled-system/css';
export {css} from './css-function';
export {themeGet} from '@styled-system/theme-get';
export {createShouldForwardProp, props} from '@styled-system/should-forward-prop';
export * from 'styled-system';

export type {StyledComponent, Interpolation} from '@emotion/styled';
export type {SerializedStyles} from '@emotion/react';
export {
  Global as StylingGlobals,
  ThemeContext,
  keyframes,
  css as EmotionCSS,
  ThemeProvider,
  withTheme,
} from '@emotion/react';

export {default as styled} from '@emotion/styled';
