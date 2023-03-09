import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

import type {PaginationNumberProps} from './types';
import {PaginationNumberPropTypes} from './proptypes';
import {handleLinkValidation} from './utils';

const PaginationNumber = React.forwardRef<HTMLButtonElement, PaginationNumberProps>(
  ({as = 'button', element = 'PAGINATION_NUMBER', children, href, isCurrent, label, ...props}, ref) => {
    handleLinkValidation({as, href});
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        aria-label={label}
        aria-current={isCurrent}
        as={as}
        href={href}
        appearance="none"
        background="none"
        backgroundColor={isCurrent ? 'colorBackgroundPrimaryWeakest' : 'transparent'}
        borderColor={isCurrent ? 'colorBorderPrimary' : 'transparent'}
        borderRadius="borderRadius20"
        borderStyle="solid"
        borderWidth="borderWidth10"
        color={isCurrent ? 'colorTextLink' : 'colorTextWeak'}
        display="inline-block"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontVariantNumeric="tabular-nums"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        margin="space0"
        outline="none"
        paddingBottom="space20"
        paddingLeft="space30"
        paddingRight="space30"
        paddingTop="space20"
        position="relative"
        textDecoration="none"
        transition="background-color 100ms ease-in, border-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in"
        _hover={{
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderColor: isCurrent ? 'colorBorderPrimaryStronger' : 'transparent',
          boxShadow: isCurrent ? 'none' : 'shadowBorderPrimaryStronger',
          color: isCurrent ? 'colorTextLinkStronger' : 'colorTextLink',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        _focus={{
          boxShadow: 'shadowFocus',
          borderColor: 'transparent',
          textDecoration: 'none',
        }}
        _active={{textDecoration: 'none'}}
      >
        {children ? (
          <Text aria-hidden="true" as="span" color="inherit" fontWeight="fontWeightMedium" element={`${element}_TEXT`}>
            {children}
          </Text>
        ) : null}
      </Box>
    );
  }
);

PaginationNumber.displayName = 'PaginationNumber';

PaginationNumber.propTypes = PaginationNumberPropTypes;

export {PaginationNumber};
