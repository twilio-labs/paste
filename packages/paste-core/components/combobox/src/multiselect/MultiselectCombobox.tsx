import * as React from 'react';
import {useVirtual} from 'react-virtual';
import includes from 'lodash/includes';
import {useWindowSize} from '@twilio-paste/utils';
import {useTheme, remToPx} from '@twilio-paste/theme';
import {useUID} from '@twilio-paste/uid-library';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {FormPillGroup, FormPill, useFormPillState} from '@twilio-paste/form-pill-group';
import {useComboboxPrimitive, useMultiselectComboboxPrimitive} from '@twilio-paste/combobox-primitive';
import {InputBox, InputChevronWrapper, getInputChevronIconColor} from '@twilio-paste/input-box';
import {GrowingInput} from './GrowingInput';
import {ComboboxListbox} from '../styles/ComboboxListbox';
import {ComboboxItems} from '../ComboboxItems';
import type {Item, MultiselectComboboxProps} from '../types';
import {getHelpTextVariant} from '../helpers';

export const MultiselectCombobox = React.forwardRef<HTMLInputElement, MultiselectComboboxProps>(
  (
    {
      element = 'MULTISELECT_COMBOBOX',
      disabled,
      hasError,
      helpText,
      initialSelectedItems = [],
      inputValue,
      insertAfter,
      insertBefore,
      items,
      itemToString = (item: string | Record<string, unknown> | null): string => (item ? item.toString() : ''),
      labelText,
      optionTemplate,
      required,
      variant = 'default',
      initialIsOpen,
      onHighlightedIndexChange,
      onInputValueChange,
      onSelectedItemsChange,
      onIsOpenChange,
      groupItemsBy,
      groupLabelTemplate,
      ...props
    },
    ref
  ) => {
    const helpTextId = useUID();
    const pillState = useFormPillState();
    const theme = useTheme();
    const parentRef = React.useRef(null);
    const paddingStart = React.useMemo(() => remToPx(theme.space.space30, 'number') ?? 0, [theme]);
    const {width} = useWindowSize();

    const {
      // Call optionally with preventKeyAction and destructure its returned object on the toggle button (select) or input (combobox) element.
      getDropdownProps,
      // Action prop that removes the item from the selection. Used in the X icon/button onClick handler.
      removeSelectedItem,
      addSelectedItem,
      selectedItems,
    } = useMultiselectComboboxPrimitive<Item>({
      initialSelectedItems,
      onSelectedItemsChange: React.useCallback(
        (changes) => {
          if (onSelectedItemsChange) {
            onSelectedItemsChange(changes.selectedItems);
          }
        },
        [onSelectedItemsChange]
      ),
    });

    const {
      // State value with the open state of the menu. Used below for conditionally showing the items.
      isOpen,
      // Call and destructure its returned object on the toggle button (if any).
      getToggleButtonProps,
      // Call and destructure its returned object on the label element.
      getLabelProps,
      // Call and destructure its returned object on the menu element.
      getMenuProps,
      // Call and destructure its returned object on the input element.
      getInputProps,
      // Call and destructure its returned object on the input and toggle button parent.
      getComboboxProps,
      // Call with index or item and destructure its returned object on each menu item element.
      getItemProps,
      // State value with the index of thehighlighted menu item. Used below for styling.
      highlightedIndex,
    } = useComboboxPrimitive({
      // The controlled state of currently available items to select
      items,
      /* Items are objects and not strings.
       * As a result, the itemToString prop is passed to useCombobox. It will return
       * the string equivalent of the item which will be used for displaying the item
       * in the input once selected and for the a11y aria-live message that will occur
       * on every item selection: ${itemToString(item)} has been selected.
       *
       * item.title is chosen to be the string equialent of each item object,
       * so our prop will be passed as itemToString: item => item ? item.title : ''.
       *
       * Since clearing the input by Escape key is also considered an element change,
       * we will return an empty string in this case.
       */
      itemToString,
      // For multiselect, we need `selectedItem` to always be null because
      // we use the stateChange event to add/remove items to the multiselect hook
      selectedItem: null,
      onInputValueChange,
      onHighlightedIndexChange,
      onIsOpenChange,
      initialIsOpen,
      // https://www.downshift-js.com/use-combobox#state-reducer
      // Handles how state in Downshift should change as a result of user action
      stateReducer(_state, actionAndChanges) {
        const {changes, type} = actionAndChanges;

        switch (type) {
          case useComboboxPrimitive.stateChangeTypes.InputKeyDownEnter:
          case useComboboxPrimitive.stateChangeTypes.ItemClick:
          case useComboboxPrimitive.stateChangeTypes.InputBlur:
            return {
              ...changes,
              // The default behavior upon item selection has a few issues, so only upon selection do we want to change the state.
              ...(changes.selectedItem && {
                // FIX: We want to keep the dropdown open upon selection for multiselection
                isOpen: true,
                // FIX: We don't want the highlightedIndex to be reset to 0 upon selection, which scrolls the dropdown to the top.
                highlightedIndex: items.indexOf(changes.selectedItem),
                // FIX: When we select an item from the dropdown, downshift sets that selected item as the inputValue.
                // Since inputValue is being set to a value that has been selected, the items array will be filtered
                // to only include that item, but it's on the selectedList now so even that item won't be shown.
                // This means that for a split second the dropdown will render and empty items array until
                // after the inputValue is cleared again. This causes the dropdown to flicker on selection.
                // Setting inputValue to an empty string on selection fixes this jankiness.
                inputValue: '',
              }),
            };
          // FIX: Bluring the menu causes highlightedIndex to reset to -1, which causes the
          // menu to scroll to the last selectedItem per the `scrollToIndexRef` function.
          // By setting it to -2, we can prevent this behavior because -1 is now reserved for when
          // the menu is first opened.
          case useComboboxPrimitive.stateChangeTypes.MenuMouseLeave:
            return {
              ...changes,
              highlightedIndex: -2,
            };
        }
        return changes;
      },
      // https://www.downshift-js.com/use-combobox#controlling-state
      onStateChange({type, selectedItem: newSelectedItem}) {
        switch (type) {
          case useComboboxPrimitive.stateChangeTypes.InputKeyDownEnter:
          case useComboboxPrimitive.stateChangeTypes.ItemClick:
            if (newSelectedItem) {
              if (includes(selectedItems, newSelectedItem)) {
                removeSelectedItem(newSelectedItem);
              } else {
                addSelectedItem(newSelectedItem);
              }
            }
            break;
          default:
            break;
        }
      },
    });

    // Virtualizer for long lists that don't use `groupItemsBy`
    const rowVirtualizer = useVirtual({
      size: items.length,
      parentRef,
      paddingStart: paddingStart as number,
      overscan: 8,
    });

    // Fixes issue where dynamic height items would not recompute on window resize and list content wrapping
    React.useEffect(() => {
      rowVirtualizer.measure();
    }, [width]);

    // Use ref to focus the current selected item when the list is opened
    // https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs
    const scrollToIndexRef = React.useCallback(
      (node) => {
        // Only scroll to the selected item when the list is opened
        // When the list is opened, highlightedIndex is set to -1, so that's how we check if the list is opened
        // We also have a fix in the `stateReducer` to handle setting highlightedIndex to -2 when the
        // menu is blurred instead of -1
        if (node && highlightedIndex === -1) {
          const lastSelectedItem = selectedItems[selectedItems.length - 1];
          rowVirtualizer.scrollToIndex(items.indexOf(lastSelectedItem));
        }
      },
      [items, selectedItems, highlightedIndex]
    );

    return (
      <Box position="relative" element={`${element}_WRAPPER`}>
        <Label disabled={disabled} required={required} variant={variant} {...getLabelProps()}>
          {labelText}
        </Label>
        <InputBox
          disabled={disabled}
          hasError={hasError}
          element={`${element}_INPUT_WRAPPER`}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
          variant={variant}
        >
          <Box
            {...getToggleButtonProps({disabled})}
            {...getComboboxProps({
              disabled,
              role: 'combobox',
            })}
            position="relative"
            width="100%"
            paddingY="space30"
            paddingX="space40"
          >
            <FormPillGroup {...pillState} aria-label="Products:" element={`${element}_PILL_GROUP`}>
              {selectedItems.map(function renderSelectedItems(selectedItemPill: Item) {
                return (
                  <FormPill
                    variant={hasError ? 'error' : 'default'}
                    element={`${element}_PILL`}
                    key={`${itemToString(selectedItemPill)}`}
                    onDismiss={() => {
                      removeSelectedItem(selectedItemPill);
                    }}
                    // Prevents focus from being snatched from the pill to the input
                    onSelect={(event) => event.stopPropagation()}
                    {...pillState}
                  >
                    {itemToString(selectedItemPill)}
                  </FormPill>
                );
              })}
            </FormPillGroup>
            <GrowingInput
              // we spread props into `getInputProps` so that Downshift handles events correctly
              {...getInputProps({
                ...getDropdownProps({ref, preventKeyAction: isOpen}),
                disabled,
                required,
                ...props,
              })}
              aria-describedby={helpTextId}
              element={`${element}_ELEMENT`}
            />
            <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
              <ChevronDownIcon
                aria-hidden="true"
                decorative
                color={getInputChevronIconColor('default', false, false)}
                size="sizeIcon30"
              />
            </InputChevronWrapper>
          </Box>
        </InputBox>

        <ComboboxListbox hidden={!isOpen} element={element} {...getMenuProps({ref: parentRef})}>
          <ComboboxItems
            ref={scrollToIndexRef}
            items={items}
            element={`${element}_ITEMS}`}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            selectedItems={selectedItems}
            totalSize={rowVirtualizer.totalSize}
            virtualItems={rowVirtualizer.virtualItems}
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

MultiselectCombobox.displayName = 'MultiselectCombobox';
