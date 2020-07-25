import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Space} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export interface ComboboxListboxOptionProps {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  variant: 'default' | 'groupOption';
}

const VariantStyles = {
  groupOption: {
    paddingLeft: 'space70' as Space,
    paddingRight: 'space70' as Space,
  },
  default: {
    paddingLeft: 'space50' as Space,
    paddingRight: 'space50' as Space,
  },
};

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  ({children, highlighted, variant = 'default', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        padding="space30"
        backgroundColor={highlighted ? 'colorBackgroundPrimaryLightest' : null}
        cursor="pointer"
        ref={ref}
        {...VariantStyles[variant]}
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
    variant: PropTypes.oneOf(['default', 'groupOption']).isRequired as any,
  };
}

export {ComboboxListboxOption};
