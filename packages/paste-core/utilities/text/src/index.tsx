import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {
  display,
  DisplayProps,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  style,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import {ThemeShape} from '@twilio-paste/theme-tokens';

interface MarginProps {
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

interface PaddingProps {
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

export interface TextProps extends DisplayProps, TextAlignProps, MarginProps, PaddingProps {
  as?: string;
  children: ReactNode | string;
  fontFamily?: keyof ThemeShape['fonts'];
  fontSize?: keyof ThemeShape['fontSizes'];
  fontWeight?: keyof ThemeShape['fontWeights'];
  lineHeight?: keyof ThemeShape['lineHeights'];
  textColor?: keyof ThemeShape['textColors'];
  theme?: ThemeShape;
}

const textColor = style({
  prop: 'textColor',
  cssProperty: 'color',
  key: 'textColors',
});

const Text = styled.span<TextProps>`
  margin: 0;
  padding: 0;
  ${display}
  ${fontFamily}
  ${fontSize}
  ${textColor}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${space}
`;

Text.defaultProps = {
  as: 'p',
  fontSize: 'fontSize20',
  lineHeight: 'lineHeight20',
  textColor: 'colorText',
};

export {Text};
