import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {PositionOptions} from '@twilio-paste/style-props';
import type {VirtualItem} from 'react-virtual/types';

export interface ComboboxListboxOptionProps {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  variant: 'default' | 'groupOption';
  virtualItem: VirtualItem;
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
  ({children, highlighted, variant = 'default', virtualItem, ...props}, ref) => {
    const virtualItemStyles = virtualItem
      ? {
          position: 'absolute' as PositionOptions,
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${virtualItem.start}px)`,
        }
      : {};
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        backgroundColor={highlighted ? 'colorBackgroundPrimaryWeakest' : 'colorBackgroundBody'}
        padding="space30"
        cursor="pointer"
        ref={ref}
        {...virtualItemStyles}
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
