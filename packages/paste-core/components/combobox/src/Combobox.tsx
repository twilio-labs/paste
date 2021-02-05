import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useVirtual} from 'react-virtual';
import {useTheme, remToPx} from '@twilio-paste/theme';
import {useUID} from '@twilio-paste/uid-library';
import {useComboboxPrimitive} from '@twilio-paste/combobox-primitive';
import type {UseComboboxPrimitiveStateChange} from '@twilio-paste/combobox-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {InputBox, InputChevronWrapper} from '@twilio-paste/input-box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {HelpTextVariants} from '@twilio-paste/help-text';
import type {InputVariants} from '@twilio-paste/input';
import type {TextColor} from '@twilio-paste/style-props';
import {ComboboxInputSelect} from './styles/ComboboxInputSelect';
import {ComboboxInputWrapper} from './styles/ComboboxInputWrapper';
import {ComboboxListbox} from './styles/ComboboxListbox';
import {ComboboxItems} from './ComboboxItems';
import type {RowVirtualizer, ComboboxProps} from './types';

const getHelpTextVariant = (variant: InputVariants, hasError: boolean | undefined): HelpTextVariants => {
  if (hasError && variant === 'inverse') {
    return 'error_inverse';
  }
  if (hasError) {
    return 'error';
  }
  if (variant === 'inverse') {
    return 'inverse';
  }
  return 'default';
};

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      autocomplete,
      disabled,
      hasError,
      helpText,
      initialSelectedItem,
      initialIsOpen,
      inputValue,
      insertAfter,
      insertBefore,
      items,
      itemToString,
      labelText,
      onInputValueChange,
      onSelectedItemChange,
      optionTemplate,
      onHighlightedIndexChange,
      onIsOpenChange,
      required,
      selectedItem,
      groupItemsBy,
      groupLabelTemplate,
      variant = 'default',
      state,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const parentRef = React.useRef(null);
    const helpTextId = useUID();

    // Only virtualize non-grouped items and not templated items
    const rowVirtualizer: RowVirtualizer =
      !groupItemsBy && !optionTemplate
        ? useVirtual({
            size: items.length,
            parentRef,
            // 36 is a magic number that represents the comboboxItem height in px
            // this is an estimate, and gets recalculated in runtime
            estimateSize: React.useCallback(() => 36, []),
            overscan: 4,
            // @ts-ignore - will return a number
            paddingStart: remToPx(theme.space.space30, 'number'),
          })
        : undefined;

    const {
      getComboboxProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
    } =
      state ||
      useComboboxPrimitive({
        initialSelectedItem,
        items,
        onHighlightedIndexChange: (changes: UseComboboxPrimitiveStateChange<string>) => {
          const currentHighlight = highlightedIndex ?? 0;
          const newHighlight = changes.highlightedIndex ?? currentHighlight;
          if (rowVirtualizer) {
            rowVirtualizer.scrollToIndex(newHighlight);
          }
          if (onHighlightedIndexChange) {
            onHighlightedIndexChange(changes);
          }
        },
        onInputValueChange,
        onIsOpenChange,
        onSelectedItemChange,
        ...(itemToString != null && {itemToString}),
        ...(initialIsOpen != null && {initialIsOpen}),
        ...(inputValue != null && {inputValue}),
        ...(selectedItem != null && {selectedItem}),
      });

    if (
      getComboboxProps === undefined ||
      getInputProps === undefined ||
      getItemProps === undefined ||
      getLabelProps === undefined ||
      getMenuProps === undefined ||
      getToggleButtonProps === undefined ||
      highlightedIndex === undefined ||
      isOpen === undefined
    ) {
      throw new Error(
        '[Combobox]: One of getComboboxProps, getInputProps, getItemProps, getLabelProps, getMenuProps, getToggleButtonProps, highlightedIndex or isOpen is missing from the state object. Please make sure this is provided.'
      );
    }

    let iconColor = 'colorTextIcon' as TextColor;
    if (disabled) {
      iconColor = 'colorTextWeaker';
    } else if (variant === 'inverse') {
      iconColor = 'colorTextInverseWeak';
    }

    return (
      <Box position="relative">
        <Label disabled={disabled} required={required} variant={variant} {...getLabelProps()}>
          {labelText}
        </Label>
        <InputBox
          disabled={disabled}
          hasError={hasError}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
          variant={variant}
        >
          <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})}>
            <ComboboxInputSelect
              {...getToggleButtonProps({tabIndex: 0})}
              {...getInputProps({disabled, ref})}
              {...(!autocomplete ? {onChange: (event: React.ChangeEvent) => event.preventDefault()} : undefined)}
              autocomplete={autocomplete}
              aria-describedby={helpTextId}
              {...props}
              type="text"
            />
            {!autocomplete && (
              <InputChevronWrapper>
                <ChevronDownIcon aria-hidden="true" decorative color={iconColor} size="sizeIcon30" />
              </InputChevronWrapper>
            )}
          </ComboboxInputWrapper>
        </InputBox>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps({ref: parentRef})}>
          <ComboboxItems
            items={items}
            rowVirtualizer={rowVirtualizer}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            optionTemplate={optionTemplate}
            groupItemsBy={groupItemsBy}
            groupLabelTemplate={groupLabelTemplate}
          />
        </ComboboxListbox>
        {helpText && (
          <HelpText id={helpTextId} variant={getHelpTextVariant(variant, hasError)}>
            {helpText}
          </HelpText>
        )}
      </Box>
    );
  }
);

Combobox.displayName = 'Combobox';

if (process.env.NODE_ENV === 'development') {
  Combobox.propTypes = {
    autocomplete: PropTypes.bool,
    groupItemsBy: PropTypes.string,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    initialIsOpen: PropTypes.bool,
    initialSelectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    itemToString: PropTypes.func,
    labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onHighlightedIndexChange: PropTypes.func,
    onInputValueChange: PropTypes.func,
    onIsOpenChange: PropTypes.func,
    onSelectedItemChange: PropTypes.func,
    optionTemplate: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };
}

export {Combobox};
