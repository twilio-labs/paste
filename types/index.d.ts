import {SpaceProps} from 'styled-system';
import {DefaultTheme} from '@paste/theme-tokens';

declare module '@styled-system/should-forward-prop';
declare module 'gulp-theo';
declare module 'color';

declare module '*.md' {
  const value: string;
  export default value;
}

export interface MarginThemeProps {
  m?: keyof typeof DefaultTheme.space;
  margin?: keyof typeof DefaultTheme.space;
  mt?: keyof typeof DefaultTheme.space;
  marginTop?: keyof typeof DefaultTheme.space;
  mr?: keyof typeof DefaultTheme.space;
  marginRight?: keyof typeof DefaultTheme.space;
  mb?: keyof typeof DefaultTheme.space;
  marginBottom?: keyof typeof DefaultTheme.space;
  ml?: keyof typeof DefaultTheme.space;
  marginLeft?: keyof typeof DefaultTheme.space;
  mx?: keyof typeof DefaultTheme.space;
  my?: keyof typeof DefaultTheme.space;
}

export interface PaddingThemeProps {
  p?: keyof typeof DefaultTheme.space;
  padding?: keyof typeof DefaultTheme.space;
  pt?: keyof typeof DefaultTheme.space;
  paddingTop?: keyof typeof DefaultTheme.space;
  pr?: keyof typeof DefaultTheme.space;
  paddingRight?: keyof typeof DefaultTheme.space;
  pb?: keyof typeof DefaultTheme.space;
  paddingBottom?: keyof typeof DefaultTheme.space;
  pl?: keyof typeof DefaultTheme.space;
  paddingLeft?: keyof typeof DefaultTheme.space;
  px?: keyof typeof DefaultTheme.space;
  py?: keyof typeof DefaultTheme.space;
}

export interface SpacingThemeProps extends SpaceProps, MarginThemeProps, PaddingThemeProps {}
