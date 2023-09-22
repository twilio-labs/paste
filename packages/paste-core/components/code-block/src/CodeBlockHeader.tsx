import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import type { asTags } from '@twilio-paste/heading';

export interface CodeBlockHeaderProps extends Partial<Omit<HTMLHeadingElement, 'children'>> {
  children: string;
  element?: BoxProps['element'];
  as?: asTags;
}

export const CodeBlockHeader = React.forwardRef<HTMLHeadingElement, CodeBlockHeaderProps>(
  ({ children, element = 'CODE_BLOCK_HEADER', as = 'h3', ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as={as}
      backgroundColor="colorBackgroundInverseStrong"
      color="colorTextInverse"
      paddingY="space50"
      paddingX="space70"
      margin="space0"
      borderTopLeftRadius="borderRadius20"
      borderTopRightRadius="borderRadius20"
      fontWeight="fontWeightSemibold"
      fontSize="fontSize30"
    >
      {children}
    </Box>
  ),
);

CodeBlockHeader.displayName = 'CodeBlockHeader';
