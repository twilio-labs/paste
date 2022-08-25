import * as React from 'react';
import type {Story, Meta} from '@storybook/react';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {FormPillGroup, FormPill, useFormPillState} from '@twilio-paste/form-pill-group';
import {useCombobox, useMultipleSelection} from '@twilio-paste/dropdown-library';
import {InputBox, InputChevronWrapper, getInputChevronIconColor} from '@twilio-paste/input-box';
import {GrowingInput} from '../src/multiselect/GrowingInput';
import includes from 'lodash/includes';
import type {
  UseComboboxPrimitiveGetItemPropsOptions,
  UseComboboxPrimitiveGetMenuPropsOptions,
  GetComboboxPrimitivePropsCommonOptions,
} from '@twilio-paste/combobox-primitive';

type Book = {
  author: string;
  title: string;
};

const books: Book[] = [
  {author: 'Harper Lee', title: 'To Kill a Mockingbird'},
  {author: 'Lev Tolstoy', title: 'War and Peace'},
  {author: 'Fyodor Dostoyevsy', title: 'The Idiot'},
  {author: 'Oscar Wilde', title: 'A Picture of Dorian Gray'},
  {author: 'George Orwell', title: '1984'},
  {author: 'Jane Austen', title: 'Pride and Prejudice'},
  {author: 'Marcus Aurelius', title: 'Meditations'},
  {author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov'},
  {author: 'Lev Tolstoy', title: 'Anna Karenina'},
  {author: 'Fyodor Dostoevsky', title: 'Crime and Punishment'},
];

function getBooksFilter(inputValue: string | undefined) {
  return function booksFilter(book: Book) {
    return (
      !inputValue || book.title.toLowerCase().includes(inputValue) || book.author.toLowerCase().includes(inputValue)
    );
  };
}

interface ItemProps {
  getItemProps: (options: UseComboboxPrimitiveGetItemPropsOptions<Book>) => any;
  item: Book;
  index: number;
  isHighlighted: boolean;
}

// eslint-disable-next-line react/display-name
const Item = React.memo(({item, index, getItemProps, isHighlighted, ...rest}: ItemProps) => {
  console.log('render book item:', item, index, getItemProps, isHighlighted);
  return (
    <li
      style={{
        position: 'relative',
        cursor: 'pointer',
        display: 'block',
        border: 'none',
        height: 'auto',
        textAlign: 'left',
        borderTop: 'none',
        lineHeight: '1em',
        fontSize: '1rem',
        textTransform: 'none',
        fontWeight: '400',
        boxShadow: 'none',
        padding: '.8rem 1.1rem',
        whiteSpace: 'normal',
        wordWrap: 'normal',
        color: isHighlighted ? 'blue' : 'black',
      }}
      {...getItemProps({item, index, ...rest})}
    >
      <span>{item.title}</span>
      <span> - {item.author}</span>
    </li>
  );
});

interface MenuProps {
  items: Book[];
  getMenuProps: (
    options?: UseComboboxPrimitiveGetMenuPropsOptions | undefined,
    otherOptions?: GetComboboxPrimitivePropsCommonOptions | undefined
  ) => any;
  getItemProps: (options: UseComboboxPrimitiveGetItemPropsOptions<Book>) => any;
  highlightedIndex: number;
  children?: never;
  isOpen: boolean;
}

// eslint-disable-next-line react/display-name
const Menu = React.memo(({isOpen, items, getMenuProps, getItemProps, highlightedIndex}: MenuProps) => {
  return (
    <ul
      {...getMenuProps()}
      style={{
        padding: 0,
        marginTop: 0,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        maxHeight: '20rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        outline: '0',
        transition: 'opacity .1s ease',
        borderRadius: '0 0 .28571429rem .28571429rem',
        boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
        borderColor: '#96c8da',
        borderTopWidth: '0',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
      }}
    >
      {isOpen &&
        items.map((item, index) => (
          <Item
            key={index}
            getItemProps={getItemProps}
            index={index}
            item={item}
            isHighlighted={highlightedIndex === index}
          />
        ))}
    </ul>
  );
});

export const MultiselectComboBox: Story = ({element = 'Multiselect'}) => {
  const [items, setItems] = React.useState(books);
  const pillState = useFormPillState();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    // Call and destructure its returned object on the selected item element.
    getSelectedItemProps,
    // Call optionally with preventKeyAction and destructure its returned object on the toggle button (select) or input (combobox) element.
    getDropdownProps,
    // Action prop that adds the item to the selection. Best used in useSelect and useCombobox prop onStateChange or onSelectedItemChange
    addSelectedItem,
    // Action prop that removes the item from the selection. Used in the X icon/button onClick handler.
    removeSelectedItem,
    // State value with the items currently selected. Used to render the Tags
    selectedItems,
    // initialSelectedItems i.e.: [items[0], items[1]]
    // TODO make a prop
  } = useMultipleSelection<Book>({initialSelectedItems: []});

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
    itemToString(item) {
      return item ? item.title : '';
    },
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
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
            isOpen: changes.selectedItem != null, // keep the menu open after selection.
          };
      }
      return changes;
    },
    // https://www.downshift-js.com/use-combobox#controlling-state
    onStateChange({inputValue, type, selectedItem}) {
      // Set items list to all books minus search and selection
      setItems(books.filter(getBooksFilter(inputValue)));

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (selectedItem) {
            if (includes(selectedItems, selectedItem)) {
              removeSelectedItem(selectedItem);
            } else {
              addSelectedItem(selectedItem);
            }
          }
          break;
        default:
          break;
      }
    },
  });

  console.log('re-render', isOpen);
  console.log('inputRef', inputRef);
  return (
    <Box position="relative" element={`${element}_WRAPPER`}>
      <Label {...getLabelProps()}>Choose an element:</Label>

      <InputBox disabled={false} hasError={false} element={'test-multiselect'} variant={'default'}>
        <Box
          {...getComboboxProps({
            role: 'combobox',
            onClick: () => {
              // Clicking anywhere on the combobox wrapper will focus the GrowingInput
              if (inputRef && inputRef.current) {
                inputRef.current.focus();
              }
            },
          })}
          position="relative"
          width="100%"
          paddingY="space30"
          paddingX="space40"
        >
          <FormPillGroup {...pillState} aria-label="Products:">
            {selectedItems.map(function renderSelectedItems(selectedItem, index) {
              return (
                <FormPill
                  key={`${selectedItem}-${index}`}
                  {...getSelectedItemProps({selectedItem, index})}
                  {...pillState}
                  onDismiss={() => {
                    removeSelectedItem(selectedItem);
                  }}
                >
                  {selectedItem.title}
                </FormPill>
              );
            })}
          </FormPillGroup>
          <GrowingInput
            ref={inputRef}
            {...getToggleButtonProps({tabIndex: 0})}
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

      <Menu
        isOpen={isOpen}
        highlightedIndex={highlightedIndex}
        getMenuProps={getMenuProps}
        getItemProps={getItemProps}
        items={items}
      />
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Multiselect',
  parameters: {},
  component: MultiselectComboBox,
} as Meta;
