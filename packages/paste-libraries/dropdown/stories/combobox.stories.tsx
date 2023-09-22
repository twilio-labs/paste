import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { useCombobox } from '../src';

type Book = {
  author: string;
  title: string;
};

const books: Book[] = [
  { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
  { author: 'Lev Tolstoy', title: 'War and Peace' },
  { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
  { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
  { author: 'George Orwell', title: '1984' },
  { author: 'Jane Austen', title: 'Pride and Prejudice' },
  { author: 'Marcus Aurelius', title: 'Meditations' },
  { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
  { author: 'Lev Tolstoy', title: 'Anna Karenina' },
  { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
];

function getBooksFilter(inputValue: string | undefined) {
  return function booksFilter(book: Book) {
    return (
      !inputValue || book.title.toLowerCase().includes(inputValue) || book.author.toLowerCase().includes(inputValue)
    );
  };
}

export const ComboBox: StoryFn = () => {
  const [items, setItems] = React.useState(books);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(books.filter(getBooksFilter(inputValue)));
    },
    items,
    itemToString(item) {
      return item ? item.title : '';
    },
  });

  return (
    <div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label {...getLabelProps()}>Choose your favorite book:</label>
        <div {...getComboboxProps()}>
          <input {...getInputProps()} />
          <button aria-label="toggle menu" type="button" {...getToggleButtonProps()}>
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </button>
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={{
                // eslint-disable-next-line unicorn/no-nested-ternary
                color: highlightedIndex === index ? 'blue' : selectedItem === item ? 'green' : 'black',
              }}
              key={`${item.title}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.title}</span>
              <span> - {item.author}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/dropdown/useCombobox',
  parameters: {},
} as Meta;
