import * as React from 'react';
import * as _ from 'lodash';
import {render, screen, fireEvent} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {Box} from '@twilio-paste/box';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {useCombobox, Combobox} from '../src';
import {ComboboxProps} from '../src/types';
import {getIndexedItems, getGroupedItems} from '../src/helpers';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const objectItems = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '43'},
];

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

const smallGroupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Primitives', label: 'Box'},
  {label: 'Design Tokens'},
];

const ComboboxMock: React.FC = () => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <Theme.Provider theme="default">
      <Combobox
        items={inputItems}
        initialIsOpen
        helpText="This is the help text"
        labelText="Choose a component:"
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
          }
        }}
      />
    </Theme.Provider>
  );
};

const GroupedMockCombobox: React.FC<{groupLabelTemplate?: ComboboxProps['groupLabelTemplate']}> = ({
  groupLabelTemplate,
}) => {
  return (
    <Combobox
      initialIsOpen
      groupItemsBy="group"
      items={groupedItems}
      labelText="Choose a component:"
      helpText="This is group"
      groupLabelTemplate={groupLabelTemplate}
      optionTemplate={(item: any) => <div>{item.label}</div>}
      itemToString={(item) => (item && typeof item !== 'string' ? item.label : null)}
    />
  );
};

const ControlledCombobox: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState({});
  const [inputItems, setInputItems] = React.useState(objectItems);
  const {reset, ...state} = useCombobox({
    items: inputItems,
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: (changes) => {
      // @ts-ignore
      setSelectedItem(changes.selectedItem);
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        const newInputItems = _.filter(objectItems, (item: any) =>
          item.label.toLowerCase().startsWith(inputValue.toLowerCase())
        ) as [];
        setInputItems(newInputItems);
        setValue(inputValue);
      }
    },
    inputValue: value,
  });
  return (
    <>
      <Combobox
        state={state}
        items={inputItems}
        autocomplete
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: any) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        insertAfter={
          <Button
            variant="link"
            size="reset"
            onClick={() => {
              reset();
            }}
          >
            <CloseIcon decorative={false} title="Clear" />
          </Button>
        }
      />
      <Box paddingTop="space70">
        Input value state: <span data-testid="input-value-span">{JSON.stringify(value)}</span>
        <br />
        Selected item state: <span data-testid="selected-item-span">{JSON.stringify(selectedItem)}</span>
      </Box>
    </>
  );
};

describe('Combobox', () => {
  describe('Unit tests', () => {
    it('should return an indexed array of items', () => {
      expect(getIndexedItems(smallGroupedItems)).toStrictEqual([
        {group: 'Components', index: 0, label: 'Alert'},
        {group: 'Primitives', index: 1, label: 'Box'},
        {index: 2, label: 'Design Tokens'},
      ]);
    });

    it('should return grouped object of items with original array index', () => {
      expect(getGroupedItems(getIndexedItems(smallGroupedItems), 'group')).toStrictEqual({
        Components: [{group: 'Components', index: 0, label: 'Alert'}],
        Primitives: [{group: 'Primitives', index: 1, label: 'Box'}],
        undefined: [{index: 2, label: 'Design Tokens'}],
      });
    });
  });

  describe('Render', () => {
    it('should render a combobox with aria attributes', () => {
      render(<ComboboxMock />);
      const renderedCombobox = screen.getByRole('combobox');
      expect(renderedCombobox.getAttribute('aria-haspopup')).toEqual('listbox');
      expect(renderedCombobox.getAttribute('aria-owns')).toEqual(screen.getByRole('listbox').id);
      expect(renderedCombobox.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render a textbox with aria attributes', () => {
      render(<ComboboxMock />);
      const renderedCombobox = screen.getByRole('textbox');
      expect(renderedCombobox.getAttribute('aria-controls')).toEqual(screen.getByRole('listbox').id);
      expect(renderedCombobox.getAttribute('aria-labelledby')).toEqual(document.querySelector('label')!.id);
      expect(renderedCombobox.getAttribute('aria-describedby')).not.toEqual('');
    });

    it('should render a list with aria attributes', () => {
      render(<ComboboxMock />);
      const renderedCombobox = screen.getByRole('listbox');
      expect(renderedCombobox.getAttribute('aria-labelledby')).toEqual(document.querySelector('label')!.id);
    });

    it('should render a list with unique option ids', () => {
      render(<ComboboxMock />);
      const renderedOptions = screen.getAllByRole('option');
      const optionIDs = renderedOptions.map((option) => option.id);
      const uniqueIDs = _.uniq(optionIDs);
      expect(uniqueIDs.length).toEqual(optionIDs.length);
    });

    it('should render a label for that matches the input id', () => {
      render(<ComboboxMock />);
      const renderedLabel = document.querySelector('label');
      const renderedTextbox = screen.getByRole('textbox');
      expect(renderedLabel!.getAttribute('for')).toEqual(renderedTextbox.getAttribute('id'));
    });
  });

  describe('Groups', () => {
    it('should render a group of options', () => {
      render(<GroupedMockCombobox />);
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
      render(<GroupedMockCombobox />);
      const renderedListbox = screen.getByRole('listbox');
      const renderedGroups = screen.getAllByRole('group');
      // check we have 3 groups
      expect(renderedGroups.length).toEqual(3);
      // check any options that are not nested in groups
      expect(
        renderedListbox.querySelectorAll('[role="listbox"] > [role="presentation"] > [role="option"]').length
      ).toEqual(1);
    });

    it('should render a listbox with groups of options that contains no duplicate ids', () => {
      render(<GroupedMockCombobox />);
      const renderedOptions = screen.getAllByRole('option');
      const optionIDs = renderedOptions.map((option) => option.id);
      const uniqueIDs = _.uniq(optionIDs);
      expect(uniqueIDs.length).toEqual(optionIDs.length);
    });

    it('should render a custom group label', () => {
      render(<GroupedMockCombobox groupLabelTemplate={(groupName) => <span>hi {groupName}</span>} />);
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
      render(<GroupedMockCombobox />);
      // open the combobox
      fireEvent.click(screen.getByRole('textbox'));
      // select the third item using ArrowDown keyDown
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowDown', code: 'ArrowDown'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'Enter', code: 'Enter'});
      // @ts-ignore Property 'value' does not exist on type 'HTMLElement' (I get it, but this is right)
      expect(screen.getByRole('textbox').value).toEqual('Button');
      // select the first item using ArrowUp keyDown
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowUp', code: 'ArrowUp'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'ArrowUp', code: 'ArrowUp'});
      fireEvent.keyDown(screen.getByRole('textbox'), {key: 'Enter', code: 'Enter'});
      // @ts-ignore Property 'value' does not exist on type 'HTMLElement' (I get it, but this is right)
      expect(screen.getByRole('textbox').value).toEqual('Alert');
    });
  });

  describe('Controlled Combobox', () => {
    it('should be able to clear a Combobox', () => {
      render(<ControlledCombobox />);
      // open the combobox
      fireEvent.click(screen.getByRole('textbox'));
      // select the first item
      fireEvent.click(screen.getAllByRole('option')[0]);
      // @ts-ignore Property 'value' does not exist on type 'HTMLElement' (I get it, but this is right)
      expect(screen.getByRole('textbox').value).toEqual('Andorra');
      expect(screen.getByTestId('input-value-span').textContent).toEqual('"Andorra"');
      expect(screen.getByTestId('selected-item-span').textContent).toEqual(
        '{"code":"AD","label":"Andorra","phone":"376"}'
      );
      // click the clear button
      fireEvent.click(screen.getByText('Clear'));
      // @ts-ignore Property 'value' does not exist on type 'HTMLElement' (I get it, but this is right)
      expect(screen.getByRole('textbox').value).toEqual('');
      expect(screen.getByTestId('input-value-span').textContent).toEqual('""');
      expect(screen.getByTestId('selected-item-span').textContent).toEqual('null');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<ComboboxMock />);
      const results = await axe(container, {
        rules: {
          // Incorrectly thinks our markup is bad for a11y.
          // False negative
          'aria-required-parent': {enabled: false},
          'aria-required-children': {enabled: false},
        },
      });
      expect(results).toHaveNoViolations();
    });
  });
});
