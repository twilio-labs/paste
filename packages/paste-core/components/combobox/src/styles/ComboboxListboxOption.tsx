import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SelectedIcon} from '@twilio-paste/icons/esm/SelectedIcon';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {PositionOptions} from '@twilio-paste/style-props';
import type {VirtualItem} from 'react-virtual';

export interface ComboboxListboxOptionProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  selected?: boolean;
  disabled?: boolean;
  variant: 'default' | 'groupOption';
  startHeight?: VirtualItem['start'];
}

const VariantStyles: {[key in ComboboxListboxOptionProps['variant']]: BoxStyleProps} = {
  groupOption: {
    paddingLeft: 'space90',
    paddingRight: 'space50',
  },
  default: {
    paddingLeft: 'space50',
    paddingRight: 'space50',
  },
};

const getVirtualStyles = (startHeight: number): Record<string, unknown> => ({
  position: 'absolute' as PositionOptions,
  top: 0,
  left: 0,
  width: '100%',
  transform: `translateY(${startHeight}px)`,
});

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  (
    {
      children,
      element = 'COMBOBOX',
      highlighted,
      selected,
      disabled = false,
      variant = 'default',
      startHeight,
      ...props
    },
    ref
  ) => {
    const virtualItemStyles = startHeight != null ? getVirtualStyles(startHeight) : {};

    return (
      <Box
        role="option"
        {...safelySpreadBoxProps(props)}
        // FIX: Manually control aria-selected state to be true when an item has been selected.
        // Downshift sets aria-selected to true when an item is highlighted, which we don't want.
        aria-selected={selected}
        aria-disabled={disabled}
        as="li"
        position="relative"
        element={`${element}_LIST_ITEM`}
        backgroundColor={highlighted ? 'colorBackgroundPrimaryWeakest' : 'colorBackgroundBody'}
        color={
          disabled
            ? 'colorTextWeaker'
            : highlighted
            ? 'colorTextLinkStronger'
            : selected
            ? 'colorTextLink'
            : 'colorText'
        }
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingY="space40"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        ref={ref}
        transition="background-color 150ms ease, color 150ms ease"
        borderBottomWidth="borderWidth10"
        borderBottomColor="colorBorderDecorative10Weaker"
        borderBottomStyle="solid"
        _before={{
          content: `""`,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          borderLeftWidth: 'borderWidth30',
          borderLeftColor: highlighted ? 'colorBorderPrimaryStronger' : 'transparent',
          borderLeftStyle: 'solid',
        }}
        _last={{
          borderBottomColor: 'transparent',
        }}
        {...virtualItemStyles}
        {...VariantStyles[variant]}
      >
        <Box as="span">
          <Text as="span" color="inherit" element={`${element}_LIST_ITEM_TEXT`}>
            {children}
          </Text>
        </Box>
        <Box as="span" hidden={selected ? false : true}>
          <SelectedIcon decorative color="inherit" />
        </Box>
      </Box>
    );
  }
);
ComboboxListboxOption.displayName = 'ComboboxListboxOption';

export {ComboboxListboxOption};
