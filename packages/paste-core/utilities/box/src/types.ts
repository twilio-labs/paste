import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface BackgroundColorProp {
  backgroundColor?: keyof ThemeShape['backgroundColors'];
}

export interface BorderColorProps {
  borderColor?: keyof ThemeShape['borderColors'];
  borderBottomColor?: keyof ThemeShape['borderColors'];
  borderLeftColor?: keyof ThemeShape['borderColors'];
  borderRightColor?: keyof ThemeShape['borderColors'];
  borderTopColor?: keyof ThemeShape['borderColors'];
}

export interface BorderRadiusProps {
  borderRadius?: keyof ThemeShape['radii'];
  borderBottomLeftRadius?: keyof ThemeShape['radii'];
  borderBottomRightRadius?: keyof ThemeShape['radii'];
  borderTopLeftRadius?: keyof ThemeShape['radii'];
  borderTopRightRadius?: keyof ThemeShape['radii'];
}

export interface BorderStyleProp {
  borderStyle?: CSS.BorderStyleProperty;
}

export interface BorderWidthProps {
  borderWidth?: keyof ThemeShape['borderWidths'];
  borderBottomWidth?: keyof ThemeShape['borderWidths'];
  borderLeftWidth?: keyof ThemeShape['borderWidths'];
  borderRightWidth?: keyof ThemeShape['borderWidths'];
  borderTopWidth?: keyof ThemeShape['borderWidths'];
}

export interface HeightProp {
  height?: keyof ThemeShape['heights'];
}

export interface MarginProps {
  m?: keyof ThemeShape['space'];
  margin?: keyof ThemeShape['space'];
  mt?: keyof ThemeShape['space'];
  marginTop?: keyof ThemeShape['space'];
  mr?: keyof ThemeShape['space'];
  marginRight?: keyof ThemeShape['space'];
  mb?: keyof ThemeShape['space'];
  marginBottom?: keyof ThemeShape['space'];
  ml?: keyof ThemeShape['space'];
  marginLeft?: keyof ThemeShape['space'];
  mx?: keyof ThemeShape['space'];
  my?: keyof ThemeShape['space'];
}

export interface MaxWidthProp {
  maxWidth?: keyof ThemeShape['maxWidths'];
}

export interface MinWidthProp {
  minWidth?: keyof ThemeShape['maxWidths'];
}

export interface PaddingProps {
  p?: keyof ThemeShape['space'];
  padding?: keyof ThemeShape['space'];
  pt?: keyof ThemeShape['space'];
  paddingTop?: keyof ThemeShape['space'];
  pr?: keyof ThemeShape['space'];
  paddingRight?: keyof ThemeShape['space'];
  pb?: keyof ThemeShape['space'];
  paddingBottom?: keyof ThemeShape['space'];
  pl?: keyof ThemeShape['space'];
  paddingLeft?: keyof ThemeShape['space'];
  px?: keyof ThemeShape['space'];
  py?: keyof ThemeShape['space'];
}

export interface SpacingThemeProps extends MarginProps, PaddingProps {}

export interface WidthProps {
  width?: keyof ThemeShape['widths'];
}
