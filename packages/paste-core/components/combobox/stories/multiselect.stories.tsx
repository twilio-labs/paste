import * as React from 'react';
import type {Meta} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {MultiselectCombobox} from '../src';

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

const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
];

function getFilteredItems(inputValue: string): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

export const MultiselectComboboxBasic = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

MultiselectComboboxBasic.story = {
  name: 'Basic',
};

export const MultiselectComboboxDisabled = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      disabled
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

MultiselectComboboxDisabled.story = {
  name: 'Basic - Disabled',
};

export const MultiselectComboboxInitialSelectedItems = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      initialSelectedItems={['Alert', 'Anchor']}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

MultiselectComboboxInitialSelectedItems.story = {
  name: 'with initialSelectedItems',
};

export const MultiselectComboboxOptionTemplate = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : '')}
      optionTemplate={({title, author}: Book) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{title}</Box>
          <Box as="span">{author}</Box>
        </Box>
      )}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

MultiselectComboboxOptionTemplate.story = {
  name: 'with optionTemplate',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Multiselect',
  parameters: {},
  component: MultiselectComboboxBasic,
} as Meta;
