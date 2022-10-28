import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import filter from 'lodash/filter';
import uniq from 'lodash/uniq';

import {MultiselectCombobox} from '../src';
import type {MultiselectComboboxProps} from '../src';

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

const ThemeWrapper: RenderOptions['wrapper'] = ({children}) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

const MultiselectComboboxMock: React.FC<Partial<MultiselectComboboxProps>> = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);
  return (
    <MultiselectCombobox
      labelText="Choose a book:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      disabledItems={[items[3]]}
      initialIsOpen
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems: string[]) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
      required
      {...props}
    />
  );
};

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

const GroupedMultiselectComboboxMock: React.FC<Partial<MultiselectComboboxProps>> = (props) => {
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
      labelText="Choose a component:"
      helpText="This is group"
      initialIsOpen
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      {...props}
    />
  );
};

describe('MultiselectCombobox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Render', () => {
    it('should render a combobox with aria attributes', () => {
      render(<MultiselectComboboxMock initialIsOpen={false} />, {
        wrapper: ThemeWrapper,
      });

      // PillGroup aria attributes
      const [pillGroupListbox, dropdownListbox] = screen.getAllByRole('listbox');
      expect(pillGroupListbox.getAttribute('aria-label')).toBeDefined();
      expect(pillGroupListbox.getAttribute('aria-describedby')).toBeDefined();

      // Combobox aria attributes
      const renderedCombobox = screen.getByRole('combobox');
      expect(renderedCombobox.getAttribute('aria-haspopup')).toEqual('listbox');
      expect(renderedCombobox.getAttribute('aria-owns')).toEqual(dropdownListbox.id);
      expect(renderedCombobox.getAttribute('aria-expanded')).toEqual('false');
      fireEvent.click(renderedCombobox);
      expect(renderedCombobox.getAttribute('aria-expanded')).toEqual('true');

      // Textbox aria attributes
      const renderedTextbox = screen.getByRole('textbox');
      expect(renderedTextbox.getAttribute('aria-controls')).toEqual(dropdownListbox.id);
      expect(renderedTextbox.getAttribute('aria-describedby')).not.toEqual('');
      expect(renderedTextbox.getAttribute('aria-labelledby')).toEqual(document.querySelector('label')!.id);
      expect(renderedTextbox.getAttribute('required')).toEqual('');

      // unique option ids
      const renderedOptions = screen.getAllByRole('option');
      expect(renderedOptions[3].getAttribute('aria-disabled')).toEqual('true');
      const optionIDs = renderedOptions.map((option) => option.id);
      const uniqueIDs = uniq(optionIDs);
      expect(uniqueIDs.length).toEqual(optionIDs.length);

      // Label matches the input id
      const renderedLabel = document.querySelector('label');
      expect(renderedLabel!.getAttribute('for')).toEqual(renderedTextbox.getAttribute('id'));
    });
  });

  describe('Groups', () => {
    it('should render a group of options', () => {
      render(<GroupedMultiselectComboboxMock />, {wrapper: ThemeWrapper});
      const renderedGroups = screen.getAllByRole('group');
      // check groups, group label and number of options per group
      expect(renderedGroups[0].getAttribute('aria-label')).toEqual('Components');
      expect(renderedGroups[0].querySelectorAll('[role="option"]').length).toEqual(8);
      expect(renderedGroups[1].getAttribute('aria-label')).toEqual('Primitives');
      expect(renderedGroups[1].querySelectorAll('[role="option"]').length).toEqual(3);
      expect(renderedGroups[2].getAttribute('aria-label')).toEqual('Layout');
      expect(renderedGroups[2].querySelectorAll('[role="option"]').length).toEqual(1);
    });

    it('should render any items not identified as part of the group as ungrouped options', () => {
      const {getAllByRole} = render(<GroupedMultiselectComboboxMock />, {wrapper: ThemeWrapper});
      const [pillGroupListbox, dropdownListbox] = getAllByRole('listbox');
      const renderedGroups = getAllByRole('group');

      // Check there's a listbox for the pill group
      expect(pillGroupListbox).toBeDefined();

      // check we have 3 groups
      expect(renderedGroups.length).toEqual(3);
      // check any options that are not nested in groups
      expect(
        dropdownListbox.querySelectorAll('[role="listbox"] > [role="presentation"] > [role="option"]').length
      ).toEqual(1);
    });

    it('should render a listbox with groups of options that contains no duplicate ids', () => {
      render(<GroupedMultiselectComboboxMock />, {wrapper: ThemeWrapper});
      const renderedOptions = screen.getAllByRole('option');
      const optionIDs = renderedOptions.map((option) => option.id);
      const uniqueIDs = uniq(optionIDs);
      expect(uniqueIDs.length).toEqual(optionIDs.length);
    });

    it('should render a custom group label', () => {
      render(<GroupedMultiselectComboboxMock groupLabelTemplate={(groupName) => <span>hi {groupName}</span>} />, {
        wrapper: ThemeWrapper,
      });
      const renderedGroups = screen.getAllByRole('group');
      expect(renderedGroups[0].querySelector('[role="group"] > li[role="presentation"]')!.textContent).toEqual(
        'hi Components'
      );
      expect(renderedGroups[1].querySelector('[role="group"] > li[role="presentation"]')!.textContent).toEqual(
        'hi Primitives'
      );
      expect(renderedGroups[2].querySelector('[role="group"] > li[role="presentation"]')!.textContent).toEqual(
        'hi Layout'
      );
    });

    it('should select item using keyboard', () => {
      const mockSelectedItemsChangeFn = jest.fn((selectedItems) => selectedItems);
      render(<GroupedMultiselectComboboxMock onSelectedItemsChange={mockSelectedItemsChangeFn} />, {
        wrapper: ThemeWrapper,
      });
      // open the combobox
      fireEvent.click(screen.getByRole('textbox'));
      // select the third item using ArrowDown keyDown
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'Enter', code: 'Enter'});
      expect(mockSelectedItemsChangeFn).toHaveBeenCalledTimes(1);
      expect(mockSelectedItemsChangeFn.mock.results[0].value).toEqual([{group: 'Components', label: 'Button'}]);

      // select the first item using ArrowUp keyDown
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowUp', code: 'ArrowUp'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowUp', code: 'ArrowUp'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'Enter', code: 'Enter'});
      expect(mockSelectedItemsChangeFn).toHaveBeenCalledTimes(2);
      expect(mockSelectedItemsChangeFn.mock.results[1].value).toEqual([
        {group: 'Components', label: 'Button'},
        {group: 'Components', label: 'Alert'},
      ]);

      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'Enter', code: 'Enter'});
      expect(mockSelectedItemsChangeFn).toHaveBeenCalledTimes(3);
      expect(mockSelectedItemsChangeFn.mock.results[2].value).toEqual([{group: 'Components', label: 'Button'}]);
    });
  });
});
