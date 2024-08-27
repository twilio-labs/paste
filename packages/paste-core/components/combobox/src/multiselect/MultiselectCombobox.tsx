import { Box } from "@twilio-paste/box";
import { useComboboxPrimitive } from "@twilio-paste/combobox-primitive";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { HelpText } from "@twilio-paste/help-text";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { InputBox, InputChevronWrapper, getInputChevronIconColor } from "@twilio-paste/input-box";
import { Label } from "@twilio-paste/label";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useUID } from "@twilio-paste/uid-library";
import { useWindowSize } from "@twilio-paste/utils";
import includes from "lodash/includes";
import * as React from "react";
import { createPortal } from "react-dom";
import { useVirtual } from "react-virtual";

import { ComboboxItems } from "../ComboboxItems";
import { ListBoxPositioner } from "../ListboxPositioner";
import { getHelpTextVariant } from "../helpers";
import { ComboboxListbox } from "../styles/ComboboxListbox";
import type { MultiselectComboboxProps } from "../types";
import { GrowingInput } from "./GrowingInput";
import { extractPropsFromState } from "./extractPropsFromState";

export const MultiselectCombobox = React.forwardRef<HTMLInputElement, MultiselectComboboxProps>(
  (
    {
      element = "MULTISELECT_COMBOBOX",
      disabled,
      hasError,
      helpText,
      state,
      initialSelectedItems = [],
      disabledItems,
      inputValue,
      placeholder,
      insertAfter,
      insertBefore,
      items,
      itemToString = (item: string | Record<string, unknown> | null): string => (item ? item.toString() : ""),
      labelText,
      optionTemplate,
      required,
      variant = "default",
      initialIsOpen,
      onHighlightedIndexChange,
      onInputValueChange,
      onSelectedItemsChange: onSelectedItemsChangeProp,
      onIsOpenChange,
      groupItemsBy,
      groupLabelTemplate,
      emptyState,
      maxHeight = "100%",
      selectedItemsLabelText,
      i18nKeyboardControls = "Press Delete or Backspace to remove. Press Enter to toggle selection.",
      ...props
    },
    ref,
  ) => {
    const a11yLabelId = useUID();
    const helpTextId = useUID();
    const pillState = useFormPillState();
    const parentRef = React.useRef(null);
    const { width } = useWindowSize();

    // gets the dimensions of the inputBox to position the listbox
    const inputBoxRef = React.useRef<HTMLDivElement>(null);

    const onSelectedItemsChange = React.useCallback(
      (changes: any) => {
        if (onSelectedItemsChangeProp) {
          // Only pass the selectedItems, not the other downshift state data
          onSelectedItemsChangeProp(changes.selectedItems);
        }
      },
      [onSelectedItemsChangeProp],
    );

    const {
      // Call optionally with preventKeyAction and destructure its returned object on the toggle button (select) or input (combobox) element.
      getDropdownProps,
      // Action prop that removes the item from the selection. Used in the X icon/button onClick handler.
      removeSelectedItem,
      // Action prop that adds the item to the selection. Best used in useSelect and useCombobox prop onStateChange or onSelectedItemChange
      addSelectedItem,
      selectedItems,
    } = extractPropsFromState({
      state,
      initialSelectedItems,
      onSelectedItemsChange,
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
      /*
       * Items are objects and not strings.
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
      /*
       * For multiselect, we need `selectedItem` to always be null because
       * we use the stateChange event to add/remove items to the multiselect hook
       */
      selectedItem: null,
      defaultInputValue: inputValue,
      onInputValueChange,
      onHighlightedIndexChange,
      onIsOpenChange,
      initialIsOpen,
      /*
       * https://www.downshift-js.com/use-combobox#state-reducer
       * Handles how state in Downshift should change as a result of user action
       */
      stateReducer(_state, actionAndChanges) {
        const { changes, type } = actionAndChanges;

        switch (type) {
          case useComboboxPrimitive.stateChangeTypes.InputKeyDownEnter:
          case useComboboxPrimitive.stateChangeTypes.ItemClick:
          case useComboboxPrimitive.stateChangeTypes.InputBlur:
            return {
              ...changes,
              // The default behavior upon item selection has a few issues, so only upon selection do we want to change the state.
              ...(changes.selectedItem != null
                ? {
                    // FIX: We want to keep the dropdown open upon selection for multiselection
                    isOpen: true,
                    // FIX: We don't want the highlightedIndex to be reset to 0 upon selection, which scrolls the dropdown to the top.
                    highlightedIndex: items.indexOf(changes.selectedItem),
                    /*
                     * FIX: When we select an item from the dropdown, downshift sets that selected item as the inputValue.
                     * Since inputValue is being set to a value that has been selected, the items array will be filtered
                     * to only include that item, but it's on the selectedList now so even that item won't be shown.
                     * This means that for a split second the dropdown will render and empty items array until
                     * after the inputValue is cleared again. This causes the dropdown to flicker on selection.
                     * Setting inputValue to an empty string on selection fixes this jankiness.
                     */
                    inputValue: "",
                  }
                : {}),
            };
          /*
           * FIX: Bluring the menu causes highlightedIndex to reset to -1, which causes the
           * menu to scroll to the last selectedItem per the `scrollToIndexRef` function.
           * By setting it to -2, we can prevent this behavior because -1 is now reserved for when
           * the menu is first opened.
           */
          case useComboboxPrimitive.stateChangeTypes.MenuMouseLeave:
            return {
              ...changes,
              highlightedIndex: -2,
            };
          /* Fixes issue where controlled input values were getting blown away by Downshift */
          case useComboboxPrimitive.stateChangeTypes.ControlledPropUpdatedSelectedItem:
            return { ...changes, inputValue };
        }
        return changes;
      },
      // https://www.downshift-js.com/use-combobox#controlling-state
      onStateChange({ type, selectedItem: newSelectedItem }) {
        switch (type) {
          case useComboboxPrimitive.stateChangeTypes.InputKeyDownEnter:
          case useComboboxPrimitive.stateChangeTypes.ItemClick:
            if (newSelectedItem) {
              if (disabledItems != null && includes(disabledItems, newSelectedItem)) {
                return;
              }
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

    const size = React.useMemo(() => items.length, [items]);
    // Virtualizer for long lists that don't use `groupItemsBy`
    const rowVirtualizer = useVirtual({
      size,
      parentRef,
      overscan: 8,
    });

    // Fixes issue where dynamic height items would not recompute on window resize, when list options (un)wrap
    React.useEffect(() => {
      rowVirtualizer.measure();
    }, [width]);

    /*
     * Use ref to focus the current selected item when the list is opened
     * https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs
     */
    const scrollToIndexRef = React.useCallback(
      (node: any) => {
        // Do nothing if the ref hasn't been set yet
        if (node == null) {
          return;
        }

        /*
         * FEAT: Scroll to the last selected item when the list is opened
         * When the list is opened, highlightedIndex is set to -1, so that's how we check if the list is opened
         * We also have a fix in the `stateReducer` to handle setting highlightedIndex to -2 when the
         * menu is blurred instead of being set to -1, which confuses this check.
         */
        if (highlightedIndex === -1) {
          const lastSelectedItem = selectedItems[selectedItems.length - 1];
          rowVirtualizer.scrollToIndex(items.indexOf(lastSelectedItem));
        }

        // FIX: Looping fix, scroll to the beginning of the list when the first item is highlighted
        if (highlightedIndex === 0) {
          rowVirtualizer.scrollToIndex(0);
        }
        // FIX: Looping fix, scroll to the end of the list when the last item is highlighted
        if (highlightedIndex === size - 1) {
          rowVirtualizer.scrollToIndex(size - 1);
        }
      },
      [items, selectedItems, highlightedIndex],
    );

    /*
     * If we press the enter key in a form, it will attempt to submit the form
     * but if this is a required field and there are no selected items, we don't want
     * to submit the form
     */
    const { onKeyDown } = props;
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" && required && selectedItems.length === 0) {
          // Don't submit the form
          event.preventDefault();
        }
        onKeyDown?.(event);
      },
      [required, selectedItems, onKeyDown],
    );

    // Fix the a11y issue where `aria-expanded` isn't being set until the dropdown opens the very first time
    const comboboxProps = getComboboxProps({
      disabled,
      role: "combobox",
    });
    const ariaExpanded = comboboxProps["aria-expanded"] || "false";

    const [domReady, setDomReady] = React.useState(false);

    React.useEffect(() => {
      setDomReady(true);
    }, []);

    return (
      <Box position="relative" element={`${element}_WRAPPER`}>
        <Label disabled={disabled} required={required} variant={variant} {...getLabelProps()}>
          {labelText}
        </Label>
        <InputBox
          disabled={disabled}
          hasError={hasError}
          element={element}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
          variant={variant}
          ref={inputBoxRef}
        >
          <Box
            {...getToggleButtonProps({ disabled })}
            {...comboboxProps}
            aria-expanded={ariaExpanded}
            position="relative"
            width="100%"
            lineHeight="lineHeight50"
            paddingY="space20"
            paddingLeft="space40"
            paddingRight="space100"
            maxHeight={maxHeight}
            overflowY="auto"
            display="flex"
            alignItems="center"
            flexDirection="row"
            flexWrap="wrap"
            columnGap="space20"
          >
            <FormPillGroup
              {...pillState}
              element={`${element}_PILL_GROUP`}
              display="flex"
              aria-label={selectedItemsLabelText}
              aria-describedby={a11yLabelId}
              i18nKeyboardControls=""
            >
              {selectedItems.map(function renderSelectedItems(selectedItemPill: any) {
                /*
                 * When using groupItemsBy, then `itemToString` can potentially return the same string for several groups of items.
                 * i.e.: Components->Combobox and Primitive->Combobox both return "Combobox"
                 * So we prefix the key with the group name to make it unique.
                 */
                const key =
                  groupItemsBy != null && typeof selectedItemPill !== "string"
                    ? `${selectedItemPill[groupItemsBy]}-${itemToString(selectedItemPill)}`
                    : itemToString(selectedItemPill);
                return (
                  <FormPill
                    variant={hasError ? "error" : "default"}
                    element={`${element}_PILL`}
                    key={key}
                    disabled={disabled}
                    onDismiss={
                      disabled
                        ? undefined
                        : (event) => {
                            removeSelectedItem(selectedItemPill);
                            event.stopPropagation();
                          }
                    }
                    // Prevents focus from being snatched from the pill to the input
                    onSelect={(event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
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
                ...getDropdownProps({ ref, preventKeyAction: isOpen }),
                ...props,
                disabled,
                onKeyDown: handleKeyDown,
              })}
              placeholder={selectedItems.length === 0 ? placeholder : ""}
              aria-describedby={helpTextId}
              element={`${element}_ELEMENT`}
            />
            <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
              <ChevronDownIcon decorative color={getInputChevronIconColor("default", false, false)} size="sizeIcon30" />
            </InputChevronWrapper>
          </Box>
        </InputBox>
        {domReady &&
          createPortal(
            <ListBoxPositioner inputBoxRef={inputBoxRef} dropdownBoxRef={parentRef}>
              <ComboboxListbox
                {...getMenuProps({ ref: parentRef })}
                element={`${element}_LISTBOX`}
                hidden={!isOpen}
                aria-multiselectable="true"
              >
                <ComboboxItems
                  ref={scrollToIndexRef}
                  items={items}
                  element={element}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                  selectedItems={selectedItems}
                  disabledItems={disabledItems}
                  totalSize={rowVirtualizer.totalSize}
                  virtualItems={rowVirtualizer.virtualItems}
                  optionTemplate={optionTemplate}
                  groupItemsBy={groupItemsBy}
                  groupLabelTemplate={groupLabelTemplate}
                  emptyState={emptyState}
                />
              </ComboboxListbox>
            </ListBoxPositioner>,
            inputBoxRef.current as Element,
          )}
        {helpText && (
          <HelpText id={helpTextId} variant={getHelpTextVariant(variant, hasError)} element={`${element}_HELP_TEXT`}>
            {helpText}
          </HelpText>
        )}
        <ScreenReaderOnly id={a11yLabelId}>{i18nKeyboardControls}</ScreenReaderOnly>
      </Box>
    );
  },
);

MultiselectCombobox.displayName = "MultiselectCombobox";
