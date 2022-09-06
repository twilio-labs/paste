import * as React from 'react';
import type {Meta} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
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

/*
 * Basic
 */
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

/*
 * Basic - Inverse
 */
export const MultiselectComboboxInverse = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <MultiselectCombobox
        variant="inverse"
        labelText="Choose a book:"
        helpText="Reading books can be good for your mental health."
        items={filteredItems}
        onInputValueChange={({inputValue: newInputValue = ''}) => {
          setInputValue(newInputValue);
        }}
      />
    </Box>
  );
};
MultiselectComboboxInverse.story = {
  name: 'variant Inverse',
};

/*
 * Basic - Disabled
 */
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

/*
 * Basic - Disabled, Inverse, Required
 */
export const MultiselectComboboxDisabledInverseRequired = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <MultiselectCombobox
        disabled
        variant="inverse"
        required
        labelText="Choose a book:"
        helpText="Reading books can be good for your mental health."
        items={filteredItems}
        onInputValueChange={({inputValue: newInputValue = ''}) => {
          setInputValue(newInputValue);
        }}
      />
    </Box>
  );
};
MultiselectComboboxDisabledInverseRequired.story = {
  name: 'Basic - Disabled, Inverse, Required',
};

/*
 * Basic - Error
 */
export const MultiselectComboboxError = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      hasError
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
MultiselectComboboxError.story = {
  name: 'Basic - Error',
};

/*
 * Basic - Required
 */
export const MultiselectComboboxRequired = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      required
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
MultiselectComboboxRequired.story = {
  name: 'Basic - Required',
};

/*
 * initialSelectedItems
 */
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

/*
 * insertBefore and insertAfter
 */
export const MultiselectComboboxBeforeAfter = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : '')}
      initialSelectedItems={filteredItems.slice(20, 50)}
      insertBefore={
        <Text as="span" fontWeight="fontWeightSemibold">
          $10.99
        </Text>
      }
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
        </Anchor>
      }
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
MultiselectComboboxBeforeAfter.story = {
  name: 'with insertBefore and insertAfter',
};

/*
 * optionTemplate
 */
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
} as Meta;
