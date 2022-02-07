import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

interface ColorSwatchProps extends Pick<BoxProps, 'borderColor' | 'backgroundColor' | 'color'> {
  children?: React.ReactNode;
}

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
        <Text as="span" color={color} fontSize="fontSize70" margin="space20" aria-hidden="true">
          Ag
        </Text>
      ) : (
        children
      )}
    </Box>
  );
};
