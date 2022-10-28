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
        backgroundColor={isCurrent ? 'colorBackgroundPrimaryStronger' : 'transparent'}
        borderColor="transparent"
        borderRadius="borderRadius10"
        borderStyle="solid"
        borderWidth="borderWidth10"
        color={isCurrent ? 'colorTextWeakest' : 'colorText'}
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
          backgroundColor: isCurrent ? 'colorBackgroundPrimaryStronger' : 'colorBackgroundPrimaryWeakest',
          borderColor: isCurrent ? 'transparent' : 'colorBorderPrimaryStronger',
          color: isCurrent ? 'colorTextWeakest' : 'colorTextLinkStronger',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        _focus={{
          backgroundColor: isCurrent ? 'colorBackgroundPrimaryStronger' : 'colorBackgroundPrimaryWeakest',
          borderColor: isCurrent ? 'transparent' : 'colorBorderPrimaryStronger',
          boxShadow: 'shadowFocus',
          color: isCurrent ? 'colorTextWeakest' : 'colorTextLinkStronger',
          textDecoration: 'none',
        }}
        _active={{textDecoration: 'none'}}
      >
        {children ? (
          <Text aria-hidden="true" as="span" color="inherit" element={`${element}_TEXT`}>
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
