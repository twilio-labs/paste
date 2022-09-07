import * as React from 'react';
import type {Meta} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Anchor} from '@twilio-paste/anchor';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import filter from 'lodash/filter';
import {MultiselectCombobox} from '../src';

function createLargeArray<TemplateResult = string & Record<string, string>>(
  template: (index?: number | undefined) => TemplateResult
): TemplateResult[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(new Array(1000), (_empty, index) => template(index));
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
      onSelectedItemsChange={(selectedItems: string[]) => {
        console.log(selectedItems);
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
        onSelectedItemsChange={(selectedItems: string[]) => {
          console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: string[]) => {
        console.log(selectedItems);
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
        onSelectedItemsChange={(selectedItems: string[]) => {
          console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: string[]) => {
        console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: string[]) => {
        console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: string[]) => {
        console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: Book[]) => {
        console.log(selectedItems);
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
      onSelectedItemsChange={(selectedItems: Book[]) => {
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxOptionTemplate.story = {
  name: 'with optionTemplate',
};

/*
 * groupedItemsBy
 */
interface GroupedItem {
  group?: string;
  label: string;
}
const groupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

function getFilteredGroupedItems(inputValue: string): GroupedItem[] {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return filter(groupedItems, (item: GroupedItem) => item.label.toLowerCase().includes(lowerCasedInputValue));
}

export const MultiselectComboboxOptionGroups = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      groupItemsBy="group"
      items={filteredItems}
      itemToString={(item: GroupedItem) => (item ? item.label : '')}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems: GroupedItem[]) => {
        console.log(selectedItems);
      }}
      labelText="Choose a component:"
      helpText="This is group"
      initialIsOpen
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      groupLabelTemplate={(groupName: string) => {
        if (groupName === 'Components') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <AttachIcon color="colorTextIcon" decorative={false} title="icon" />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        return groupName;
      }}
    />
  );
};

MultiselectComboboxOptionGroups.story = {
  name: 'with groups',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Multiselect',
} as Meta;
