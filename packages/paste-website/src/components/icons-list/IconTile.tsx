import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import { Truncate } from '@twilio-paste/truncate';
import * as React from 'react';

import type { IconObject } from './types';

export interface IconTileProps {
  children?: React.ReactNode;
  icon: IconObject;
  onClick: () => void;
}
const IconTile = React.forwardRef<HTMLButtonElement, IconTileProps>(({ children, icon, onClick, ...props }, ref) => {
  const handleOnKeypress = (e: React.KeyboardEvent): void => {
    e.preventDefault();
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  };
  return (
    <Box
      borderStyle="solid"
      borderRadius="borderRadius30"
      borderWidth="borderWidth10"
      borderColor="colorBorder"
      cursor="pointer"
      padding="space50"
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
      transition="box-shadow 200ms linear"
      position="relative"
      onClick={onClick}
      onKeyPress={handleOnKeypress}
      role="option"
      _hover={{
        boxShadow: 'shadowLow',
      }}
      _selected={{
        borderColor: 'colorBorderPrimaryStronger',
        boxShadow: 'shadowBorderPrimary',
      }}
      _focus={{
        boxShadow: 'shadowFocus',
        outline: 'none',
      }}
      ref={ref}
      {...safelySpreadBoxProps(props)}
    >
      {children}
      <Box as="div" display="flex" color="colorTextWeak" marginTop="space30" maxWidth="100%">
        <ScreenReaderOnly>Show details for:</ScreenReaderOnly>
        <Truncate title={icon.name}>{icon.name.replace('Icon', '')}</Truncate>
      </Box>
    </Box>
  );
});

IconTile.displayName = 'IconTile';
export { IconTile };
