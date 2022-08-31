import * as React from 'react';
import type {Story, Meta} from '@storybook/react';
import {useVirtualizer} from '@tanstack/react-virtual';
import {useWindowSize} from '@twilio-paste/utils';
import {useTheme, remToPx} from '@twilio-paste/theme';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {FormPillGroup, FormPill, useFormPillState} from '@twilio-paste/form-pill-group';
import {useCombobox, useMultipleSelection} from '@twilio-paste/dropdown-library';
import {InputBox, InputChevronWrapper, getInputChevronIconColor} from '@twilio-paste/input-box';
import {GrowingInput} from '../src/multiselect/GrowingInput';
import {ComboboxListbox} from '../src/styles/ComboboxListbox';
import {ComboboxItems} from '../src/ComboboxItems';
import includes from 'lodash/includes';

const estimateSize = (): number => 36;

function createLargeArray<TemplateResult = string & Record<string, string>>(
  template: (index?: number | undefined) => TemplateResult
): TemplateResult[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(new Array(1000), (_empty, index) => template(index));
}

type Book = {
  author: string;
  title: string;
};

const books: Book[] = createLargeArray((index) => ({
  title: `Book ${index}`,
  author: `Author ${index}`,
}));

function getFilteredBooks(inputValue: string): Book[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return books.filter(function filterBook(book) {
    return (
      book.title.toLowerCase().includes(lowerCasedInputValue) ||
      book.author.toLowerCase().includes(lowerCasedInputValue)
    );
  });
}

export const MultiselectComboBox: Story = ({groupItemsBy, element = 'Multiselect'}) => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);
  const pillState = useFormPillState();
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const parentRef = React.useRef(null);
  const paddingStart = React.useMemo(() => remToPx(theme.space.space30, 'number') ?? 0, [theme]);
  const {width} = useWindowSize();

  const {
    // Call and destructure its returned object on the selected item element.
    // getSelectedItemProps,
    // Call optionally with preventKeyAction and destructure its returned object on the toggle button (select) or input (combobox) element.
    getDropdownProps,
    // Action prop that removes the item from the selection. Used in the X icon/button onClick handler.
    removeSelectedItem,
    addSelectedItem,
    // initialSelectedItems i.e.: [items[0], items[1]]
    // TODO make a prop
    selectedItems,
  } = useMultipleSelection<Book>();

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
    // State value with the item that is selected. Used below for styling.
    // selectedItem,
    // State value with the search query. Used below for filtering the items.
    // inputValue,
  } = useCombobox({
    // The controlled state of currently available items to select
    // TODO this should always persist but render a checkmark
    items: filteredItems,
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
    itemToString(item) {
      return item ? `${item.title} - ${item.author}` : '';
    },
    // For multiselect, we need `selectedItem` to always be null.
    // We keep our selected items in a state variable, selectedItems.
    // TODO ? We use onSelectedItemChange prop to retrieve the selectedItem from useCombobox, which is added to / removed from the selectedItems array. We also use stateReducer to keep the menu open on selection by Enter key or by click, and also to keep the highlightedIndex to be the most recent selected item.
    selectedItem: null,
    // https://www.downshift-js.com/use-combobox#state-reducer
    // Handles how state in Downshift should change as a result of user action
    stateReducer(_state, actionAndChanges) {
      const {changes, type} = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            // If an item was selected, keep the menu open and reset the highlightedIndex to the first item.
            ...(changes.selectedItem && {isOpen: true, highlightedIndex: filteredItems.indexOf(changes.selectedItem)}),
          };
      }
      return changes;
    },
    // https://www.downshift-js.com/use-combobox#controlling-state
    onStateChange({inputValue: newInputValue = '', type, selectedItem: newSelectedItem}) {
      console.log('aaaaaaa');
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            if (includes(selectedItems, newSelectedItem)) {
              removeSelectedItem(newSelectedItem);
            } else {
              addSelectedItem(newSelectedItem);
            }
          }
          break;
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue);
          break;
        default:
          break;
      }
    },
  });

  // Virtualizer for long lists that don't use `groupItemsBy`
  const rowVirtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize,
    paddingStart: paddingStart as number,
    overscan: 4,
  });

  // Fixes issue where dynamic height items would not recompute on window resize and list content wrapping
  React.useEffect(() => {
    rowVirtualizer.measure();
  }, [width]);

  React.useEffect(() => {
    const comboboxIsVirtualized = typeof groupItemsBy !== 'string';
    if (comboboxIsVirtualized) {
      if (
        highlightedIndex !== undefined &&
        typeof rowVirtualizer.scrollToIndex === 'function' &&
        highlightedIndex > -1
      ) {
        rowVirtualizer.scrollToIndex(highlightedIndex);
      }
    }
  }, [highlightedIndex, rowVirtualizer.scrollToIndex, groupItemsBy]);

  return (
    <Box position="relative" element={`${element}_WRAPPER`}>
      <Label {...getLabelProps()}>Choose an element:</Label>

      <InputBox disabled={false} hasError={false} element={'test-multiselect'} variant={'default'}>
        <Box
          {...getToggleButtonProps({
            onClick: () => {
              // Clicking anywhere on the combobox wrapper will focus the GrowingInput
              if (inputRef && inputRef.current) {
                inputRef.current.focus();
              }
            },
          })}
          {...getComboboxProps({
            role: 'combobox',
          })}
          position="relative"
          width="100%"
          paddingY="space30"
          paddingX="space40"
        >
          <FormPillGroup {...pillState} aria-label="Products:">
            {selectedItems.map(function renderSelectedItems(selectedItem) {
              return (
                <FormPill
                  key={`${selectedItem.title}-${selectedItem.author}`}
                  onDismiss={() => {
                    removeSelectedItem(selectedItem);
                  }}
                  onSelect={(event) => event.stopPropagation()} // prevent losing focus on pill to focus input
                  {...pillState}
                >
                  {selectedItem.title}
                </FormPill>
              );
            })}
          </FormPillGroup>
          <GrowingInput
            ref={inputRef}
            // we spread props into `getInputProps` so that Downshift handles events correctly
            {...getInputProps(getDropdownProps({ref: inputRef, preventKeyAction: isOpen}))}
            element={`multi-input-element`}
          />

          <InputChevronWrapper element={`multi_CHEVRON_WRAPPER`}>
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
          items={filteredItems}
          element={'TESSSST'}
          getItemProps={getItemProps}
          highlightedIndex={highlightedIndex}
          selectedItems={selectedItems}
          totalSize={rowVirtualizer.getTotalSize()}
          virtualItems={rowVirtualizer.getVirtualItems()}
          optionTemplate={({title, author}) => (
            <Box as="span" display="flex" flexDirection="column">
              <Box as="span">{title}</Box>
              <Box as="span">{author}</Box>
            </Box>
          )}
        />
      </ComboboxListbox>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Multiselect',
  parameters: {},
  component: MultiselectComboBox,
} as Meta;
