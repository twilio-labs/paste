import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {PaginationArrowButtonProps} from '../types';

const PaginationArrowButton = React.forwardRef<HTMLButtonElement, PaginationArrowButtonProps>(
  ({children, element = 'PAGINATION_ARROW_BUTTON', disabled, visibleLabel, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        aria-hidden={disabled}
        alignItems="center"
        appearance="none"
        border="none"
        background="none"
        borderColor="colorBorder"
        borderRadius={visibleLabel ? 'borderRadius10' : 'borderRadiusCircle'}
        color="colorText"
        display="flex"
        fontFamily="inherit"
        fontVariantNumeric="tabular-nums"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        margin="space0"
        outline="none"
        opacity={disabled ? '0' : '1'}
        padding="space0"
        position="relative"
        textDecoration="none"
        transition="border-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in, opacity 150ms ease-in, visibility 150ms ease-in"
        visibility={disabled ? 'hidden' : 'visible'}
        _hover={{
          borderColor: 'colorBorderPrimaryStronger',
          color: 'colorTextLinkStronger',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        _focus={{
          borderColor: 'colorBorderPrimaryStronger',
          boxShadow: 'shadowFocus',
          color: 'colorTextLinkStronger',
          textDecoration: 'none',
        }}
        _active={{textDecoration: 'none'}}
      >
        {children}
      </Box>
    );
  }
);

PaginationArrowButton.displayName = 'PaginationArrowButton';

export {PaginationArrowButton};
