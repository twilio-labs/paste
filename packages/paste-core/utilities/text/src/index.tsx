import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  SpaceProps,
  style,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import {ThemeShape} from '@twilio-paste/theme-tokens';

interface TextProps extends TextAlignProps, SpaceProps {
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
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight20',
  textColor: 'colorText',
};

export {Text};
