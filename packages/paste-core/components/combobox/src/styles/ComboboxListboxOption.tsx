import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {PositionOptions} from '@twilio-paste/style-props';
import type {VirtualItem} from '@tanstack/react-virtual';
import type {Item} from '../types';

export interface ComboboxListboxOptionProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  selected?: boolean;
  variant: 'default' | 'groupOption';
  startHeight?: VirtualItem<Item>['start'];
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
  ({children, element = 'COMBOBOX', highlighted, selected, variant = 'default', startHeight, ...props}, ref) => {
    console.log('re-render item');
    const virtualItemStyles =
      startHeight !== undefined
        ? {
            position: 'absolute' as PositionOptions,
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${startHeight}px)`,
          }
        : {};
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        element={`${element}_LIST_ITEM`}
        backgroundColor={
          selected ? 'colorBackgroundBrand' : highlighted ? 'colorBackgroundPrimaryWeakest' : 'colorBackgroundBody'
        }
        padding="space30"
        cursor="pointer"
        ref={ref}
        {...virtualItemStyles}
        {...VariantStyles[variant]}
      >
        <Text
          as="span"
          color="colorText"
          element={`${element}_LIST_ITEM_TEXT`}
          textDecoration={highlighted ? 'underline' : null}
        >
          {children}
        </Text>
      </Box>
    );
  }
);
ComboboxListboxOption.displayName = 'ComboboxListboxOption';

export {ComboboxListboxOption};
