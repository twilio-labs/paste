import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface BackgroundColorProps {
  backgroundColor?: keyof ThemeShape['backgroundColors'];
}

export interface FontFamilyProps {
  fontFamily?: keyof ThemeShape['fonts'];
}

export interface FontSizeProps {
  fontSize?: keyof ThemeShape['fontSizes'];
}

export interface FontWeightProps {
  fontWeight?: keyof ThemeShape['fontWeights'];
}

export interface LineHeightProps {
  lineHeight?: keyof ThemeShape['lineHeights'];
}

export interface TextColorProps {
  textColor?: keyof ThemeShape['textColors'];
}

export interface FontProps extends FontFamilyProps, FontSizeProps, FontWeightProps, LineHeightProps {}

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

export interface BorderStyleProps {
  borderStyle?: CSS.BorderStyleProperty;
}

export interface BorderWidthProps {
  borderWidth?: keyof ThemeShape['borderWidths'];
  borderBottomWidth?: keyof ThemeShape['borderWidths'];
  borderLeftWidth?: keyof ThemeShape['borderWidths'];
  borderRightWidth?: keyof ThemeShape['borderWidths'];
  borderTopWidth?: keyof ThemeShape['borderWidths'];
}

export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderRadiusProps, BorderColorProps {}

export interface WidthProps {
  width?: keyof ThemeShape['widths'];
}

export interface MaxWidthProps {
  maxWidth?: keyof ThemeShape['maxWidths'];
}

export interface MinWidthProps {
  minWidth?: keyof ThemeShape['minWidths'];
}

export interface HeightProps {
  height?: keyof ThemeShape['heights'];
}

export interface MaxHeightProps {
  maxHeight?: keyof ThemeShape['heights'];
}

export interface MinHeightProps {
  minHeight?: keyof ThemeShape['heights'];
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

export interface SpacingProps extends MarginProps, PaddingProps {}
