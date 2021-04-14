import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {PaginationArrowButtonProps} from '../types';
import {PaginationArrowButtonPropTypes} from '../proptypes';

const PaginationArrowButton = React.forwardRef<HTMLButtonElement, PaginationArrowButtonProps>(
  ({children, visibleLabel, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        alignItems="center"
        appearance="none"
        background="none"
        border="none"
        borderColor="colorBorder"
        borderRadius={visibleLabel ? 'borderRadius10' : 'borderRadiusCircle'}
        color="colorText"
        display="flex"
        fontFamily="fontFamilyText"
        fontVariantNumeric="tabular-nums"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        margin="space0"
        outline="none"
        padding="space0"
        position="relative"
        textDecoration="none"
        transition="border-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in"
        _hover={{borderColor: 'colorBorderPrimary', color: 'colorTextLink', cursor: 'pointer', textDecoration: 'none'}}
        _focus={{
          borderColor: 'colorBorderPrimary',
          boxShadow: 'shadowFocus',
          color: 'colorTextLink',
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

PaginationArrowButton.propTypes = PaginationArrowButtonPropTypes;

export {PaginationArrowButton};
