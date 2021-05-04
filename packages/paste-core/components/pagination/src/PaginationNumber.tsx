import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {PaginationNumberProps} from './types';
import {PaginationNumberPropTypes} from './proptypes';
import {handleLinkValidation} from './utils';

const PaginationNumber = React.forwardRef<HTMLButtonElement, PaginationNumberProps>(
  ({as = 'button', children, href, isCurrent, label, ...props}, ref) => {
    handleLinkValidation({as, href});
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        aria-label={label}
        aria-current={isCurrent}
        as={as}
        href={href}
        appearance="none"
        background="none"
        backgroundColor={isCurrent ? 'colorBackgroundPrimaryWeakest' : 'transparent'}
        border="none"
        borderRadius="borderRadius10"
        color={isCurrent ? 'colorTextLink' : 'colorText'}
        display="inline-block"
        fontFamily="fontFamilyText"
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
        transition="background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in"
        _hover={{
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          color: 'colorTextLink',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        _focus={{
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          boxShadow: 'shadowFocus',
          color: 'colorTextLink',
          textDecoration: 'none',
        }}
        _active={{textDecoration: 'none'}}
      >
        {children ? (
          <Text aria-hidden="true" as="span" color="inherit">
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
