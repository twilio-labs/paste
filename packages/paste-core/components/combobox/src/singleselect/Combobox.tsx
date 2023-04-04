import * as React from 'react';
import PropTypes from 'prop-types';
import {useVirtual} from 'react-virtual';
import {useUID} from '@twilio-paste/uid-library';
import {useWindowSize} from '@twilio-paste/utils';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {InputBox, InputChevronWrapper, getInputChevronIconColor} from '@twilio-paste/input-box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {HelpTextVariants} from '@twilio-paste/help-text';
import type {InputVariants} from '@twilio-paste/input';
import {Portal} from '@twilio-paste/reakit-library';
import {useRect} from '@radix-ui/react-use-rect';

import {ComboboxInputSelect} from '../styles/ComboboxInputSelect';
import {ComboboxInputWrapper} from '../styles/ComboboxInputWrapper';
import {ComboboxListbox} from '../styles/ComboboxListbox';
import {ComboboxItems} from '../ComboboxItems';
import type {ComboboxProps} from '../types';
import {extractPropsFromState} from './extractPropsFromState';

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
      element = 'COMBOBOX',
      hasError,
      helpText,
      initialSelectedItem,
      disabledItems,
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
      emptyState,
      getA11yStatusMessage,
      getA11ySelectionMessage,
      state,
      ...props
    },
    ref
  ) => {
    const parentRef = React.useRef<HTMLElement>(null);
    const helpTextId = useUID();
    const {width} = useWindowSize();

    // gets the dimensions of the inputBox to position the listbox
    const inputBoxRef = React.useRef<HTMLDivElement>(null);
    const inputBoxDimensions = useRect(inputBoxRef.current);

    const {
      getComboboxProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getToggleButtonProps,
      highlightedIndex,
      selectedItem: internalSelectedItem,
      isOpen,
    } = extractPropsFromState({
      onInputValueChange,
      onIsOpenChange,
      onSelectedItemChange,
      onHighlightedIndexChange,
      itemToString,
      initialIsOpen,
      inputValue,
      selectedItem,
      initialSelectedItem,
      items,
      state,
      getA11yStatusMessage,
      getA11ySelectionMessage,
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

    // Virtualizer for long lists that don't use `groupItemsBy`
    const rowVirtualizer = useVirtual({
      size: items.length,
      parentRef,
      overscan: 8,
    });

    // Fixes issue where dynamic height items would not recompute on window resize and list content wrapping
    React.useEffect(() => {
      rowVirtualizer.measure();
    }, [width]);

    /*
     * Use ref to focus the current selected item when the list is opened
     * https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs
     */
    const scrollToIndexRef = React.useCallback(
      (node: any) => {
        if (node) {
          rowVirtualizer.scrollToIndex(items.indexOf(internalSelectedItem));
        }
      },
      [items, internalSelectedItem]
    );

    return (
      <Box position="relative" element={`${element}_WRAPPER`}>
        <Label disabled={disabled} required={required} variant={variant} {...getLabelProps()}>
          {labelText}
        </Label>
        <InputBox
          disabled={disabled}
          element={element}
          hasError={hasError}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
          variant={variant}
          ref={inputBoxRef}
        >
          <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})}>
            <ComboboxInputSelect
              {...getToggleButtonProps({tabIndex: 0})}
              // we spread props into `getInputProps` so that Downshift handles events correctly
              {...getInputProps({disabled, required, ref, ...props})}
              {...(!autocomplete ? {onChange: (event: React.ChangeEvent) => event.preventDefault()} : undefined)}
              autocomplete={autocomplete}
              aria-describedby={helpTextId}
              element={`${element}_ELEMENT`}
            />
            {!autocomplete && (
              <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
                <ChevronDownIcon
                  decorative
                  color={getInputChevronIconColor(variant, disabled, false)}
                  size="sizeIcon30"
                />
              </InputChevronWrapper>
            )}
          </ComboboxInputWrapper>
        </InputBox>
        <Portal>
          <Box
            position="fixed"
            top={inputBoxDimensions?.bottom}
            left={inputBoxDimensions?.left}
            right={inputBoxDimensions?.right}
            width={inputBoxDimensions?.width}
            zIndex="zIndex90"
            display={isOpen ? 'block' : 'none'}
          >
            <ComboboxListbox hidden={!isOpen} element={`${element}_LISTBOX`} {...getMenuProps({ref: parentRef})}>
              <ComboboxItems
                ref={scrollToIndexRef}
                items={items}
                element={element}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                disabledItems={disabledItems}
                optionTemplate={optionTemplate}
                groupItemsBy={groupItemsBy}
                groupLabelTemplate={groupLabelTemplate}
                totalSize={rowVirtualizer.totalSize}
                virtualItems={rowVirtualizer.virtualItems}
                emptyState={emptyState}
              />
            </ComboboxListbox>
          </Box>
        </Portal>
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

Combobox.propTypes = {
  autocomplete: PropTypes.bool,
  element: PropTypes.string,
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

export {Combobox};
