import * as React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';

interface ColorSwatchTextProps extends Pick<TextProps, 'color' | 'fontSize' | 'fontFamily' | 'margin' | 'aria-hidden'> {
  children: string;
  shouldKebabText?: boolean;
}
interface ColorSwatchProps extends Pick<BoxProps, 'borderColor' | 'backgroundColor' | 'color'> {
  children?: React.ReactNode;
}

export const ColorSwatchText: React.FC<ColorSwatchTextProps> = ({
  children,
  fontFamily = 'fontFamilyCode',
  fontSize = 'fontSize20',
  shouldKebabText = true,
  ...props
}) => {
  const swatchText = shouldKebabText ? `$${kebabCase(children)}` : children;

  return (
    <Text as="span" fontFamily={fontFamily} fontSize={fontSize} {...props}>
      {swatchText}
    </Text>
  );
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({borderColor, backgroundColor, color, children}) => {
  return (
    <Box
      position="relative"
      borderRadius="borderRadius20"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderColor ? 'borderWidth20' : 'borderWidth0'}
      borderStyle="solid"
      height="40px"
      display="flex"
      justifyContent={color ? 'left' : 'center'}
      alignItems="center"
      width={color ? 'max-content' : undefined}
    >
      {color && !children ? (
        <ColorSwatchText
          color={color}
          fontSize="fontSize70"
          margin="space20"
          shouldKebabText={false}
          aria-hidden="true"
        >
          Ag
        </ColorSwatchText>
      ) : (
        children
      )}
    </Box>
  );
};
