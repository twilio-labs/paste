import type { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

import { useCombobox, useMultipleSelection } from "../src";

type Book = {
  author: string;
  title: string;
};

const books: Book[] = [
  { author: "Harper Lee", title: "To Kill a Mockingbird" },
  { author: "Lev Tolstoy", title: "War and Peace" },
  { author: "Fyodor Dostoyevsy", title: "The Idiot" },
  { author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
  { author: "George Orwell", title: "1984" },
  { author: "Jane Austen", title: "Pride and Prejudice" },
  { author: "Marcus Aurelius", title: "Meditations" },
  { author: "Fyodor Dostoevsky", title: "The Brothers Karamazov" },
  { author: "Lev Tolstoy", title: "Anna Karenina" },
  { author: "Fyodor Dostoevsky", title: "Crime and Punishment" },
];
const initialSelectedItems = [books[0], books[1]];

function getFilteredBooks(selectedItems: Book[], inputValue: string): Book[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return books.filter(function filterBook(book) {
    return (
      !selectedItems.includes(book) &&
      (book.title.toLowerCase().includes(lowerCasedInputValue) ||
        book.author.toLowerCase().includes(lowerCasedInputValue))
    );
  });
}

export const MultiselectComboBox: StoryFn = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItems, setSelectedItems] = React.useState<Book[]>(initialSelectedItems);
  const items = React.useMemo(() => getFilteredBooks(selectedItems, inputValue), [selectedItems, inputValue]);

  const {
    // Call and destructure its returned object on the selected item element.
    getSelectedItemProps,
    // Call optionally with preventKeyAction and destructure its returned object on the toggle button (select) or input (combobox) element.
    getDropdownProps,
    // Action prop that removes the item from the selection. Used in the X icon/button onClick handler.
    removeSelectedItem,
  } = useMultipleSelection<Book>({
    selectedItems,
    onStateChange({ selectedItems: newSelectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          setSelectedItems(newSelectedItems || []);
          break;
        default:
          break;
      }
    },
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
    /*
     * State value with the index of thehighlighted menu item. Used below for styling.
     * highlightedIndex,
     * selectedItem,
     */
  } = useCombobox({
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
    itemToString(item) {
      return item ? `${item.title} - ${item.author}` : "";
    },
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    /*
     * For multiselect, we need `selectedItem` to always be null.
     * We keep our selected items in a state variable, selectedItems.
     * TODO ? We use onSelectedItemChange prop to retrieve the selectedItem from useCombobox, which is added to / removed from the selectedItems array. We also use stateReducer to keep the menu open on selection by Enter key or by click, and also to keep the highlightedIndex to be the most recent selected item.
     */
    selectedItem: null,

    /*
     * https://www.downshift-js.com/use-combobox#state-reducer
     * Handles how state in Downshift should change as a result of user action
     */
    stateReducer(_state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            // If an item was selected, keep the menu open and reset the highlightedIndex to the first item.
            ...(changes.selectedItem && { isOpen: true, highlightedIndex: 0 }),
          };
        default:
          return changes;
      }
    },
    // https://www.downshift-js.com/use-combobox#controlling-state
    onStateChange({ inputValue: newInputValue = "", type, selectedItem: newSelectedItem }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            setSelectedItems([...selectedItems, newSelectedItem]);
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

  return (
    <div>
      <div>
        <label htmlFor="test-123" {...getLabelProps()}>
          Choose an element:
        </label>
        <div>
          {selectedItems.map(function renderSelectedItem(selectedItemForRender, index) {
            return (
              <span
                key={`selected-item-${index}`}
                {...getSelectedItemProps({
                  selectedItem: selectedItemForRender,
                  index,
                })}
              >
                {selectedItemForRender.title}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSelectedItem(selectedItemForRender);
                  }}
                >
                  &#10005;
                </span>
              </span>
            );
          })}
          <div {...getComboboxProps()}>
            <input placeholder="Best book ever" {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))} />
            <button aria-label="toggle menu" type="button" {...getToggleButtonProps()}>
              &#8595;
            </button>
          </div>
        </div>
      </div>
      <ul
        {...getMenuProps()}
        style={{
          padding: 0,
          marginTop: 0,
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          maxHeight: "20rem",
          overflowY: "auto",
          overflowX: "hidden",
          outline: "0",
          transition: "opacity .1s ease",
          borderRadius: "0 0 .28571429rem .28571429rem",
          boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
        }}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={`${item.author}${item.title}`}
              {...getItemProps({ item, index })}
              style={{
                position: "relative",
                cursor: "pointer",
                display: "block",
                border: "none",
                height: "auto",
                textAlign: "left",
                borderTop: "none",
                lineHeight: "1em",
                fontSize: "1rem",
                textTransform: "none",
                fontWeight: "400",
                boxShadow: "none",
                padding: ".8rem 1.1rem",
                whiteSpace: "normal",
                wordWrap: "normal",
              }}
            >
              <span>
                {item.title} - {item.author}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/dropdown/useMultipleSelection",
  parameters: {},
} as Meta;
