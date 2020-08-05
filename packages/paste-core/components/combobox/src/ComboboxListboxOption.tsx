import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps, BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export interface ComboboxListboxOptionProps {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  variant: 'default' | 'groupOption';
}

const VariantStyles: {[key in ComboboxListboxOptionProps['variant']]: BoxStyleProps} = {
  groupOption: {
    paddingLeft: 'space90',
    paddingRight: 'space90',
  },
  default: {
    paddingLeft: 'space70',
    paddingRight: 'space70',
  },
};

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  ({children, highlighted, variant = 'default', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        backgroundColor={highlighted ? 'colorBackgroundPrimaryLightest' : 'colorBackgroundBody'}
        padding="space30"
        cursor="pointer"
        ref={ref}
        {...VariantStyles[variant]}
      >
        <Text
          as="span"
          color={highlighted ? 'colorTextLink' : 'colorText'}
          textDecoration={highlighted ? 'underline' : null}
        >
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
