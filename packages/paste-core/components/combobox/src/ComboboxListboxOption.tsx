import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export interface ComboboxListboxOptionProps {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
}

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  ({children, highlighted, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        padding="space30"
        paddingLeft="space50"
        paddingRight="space50"
        backgroundColor={highlighted ? 'colorBackgroundPrimaryLightest' : null}
        cursor="pointer"
        ref={ref}
      >
        <Text as="span" textDecoration={highlighted ? 'underline' : null}>
          {children}
        </Text>
      </Box>
    );
  }
);

ComboboxListboxOption.displayName = 'ComboboxListboxOption';

if (process.env.NODE_ENV === 'development') {
  ComboboxListboxOption.propTypes = {
    children: PropTypes.node.isRequired,
    highlighted: PropTypes.bool,
  };
}

export {ComboboxListboxOption};
