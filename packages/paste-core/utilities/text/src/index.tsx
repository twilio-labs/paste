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
import {ThemeShape, FontProps, TextColorProps, SpacingProps} from '@twilio-paste/types';

interface TextProps extends DisplayProps, TextAlignProps, SpacingProps, FontProps, TextColorProps {
  as?: string;
  children: ReactNode | string;
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

export {Text, TextProps};
