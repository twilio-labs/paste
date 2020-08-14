import * as React from 'react';
import _ from 'lodash';
import {axe} from 'jest-axe';
import {uid} from 'react-uid';
import {render, screen, fireEvent} from '@testing-library/react';
import {FormLabel, FormHelpText, InputElement} from '@twilio-paste/form';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {Box} from '@twilio-paste/box';
import {useCombobox, Combobox, ComboboxInputWrapper, ComboboxListbox, ComboboxListboxOption} from '../src';
import {ComboboxProps} from '../src/types';

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

const ComboboxMock: React.FC<{}> = () => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <>
      <Combobox
        items={inputItems}
        initialIsOpen
        helpText="This is the help text"
        labelText="Choose a component:"
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(items.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
          }
        }}
      />
    </>
  );
};

const ComboboxPartsMock: React.FC<{}> = () => {
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
  } = useCombobox({items});
  return (
    <>
      <FormLabel htmlFor="example-textbox" {...getLabelProps()} id="example-label" data-testid="label">
        Choose a component:
      </FormLabel>
      <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})} aria-owns="example-combobox-menu">
        <InputElement
          type="text"
          {...getToggleButtonProps({tabIndex: 0})}
          {...getInputProps()}
          value={selectedItem || ''}
          // id="example-textbox"
          data-testid="textbox"
          aria-controls="example-combobox-menu"
          aria-describedby="example-helptext"
          aria-labelledby="example-label"
        />
      </ComboboxInputWrapper>
      <ComboboxListbox {...getMenuProps()} aria-labelledby="example-label">
        {isOpen &&
          items.map((item, index) => (
            <ComboboxListboxOption
              {...getItemProps({item, index})}
              highlighted={highlightedIndex === index}
              key={uid(item)}
            >
              {item}
            </ComboboxListboxOption>
          ))}
      </ComboboxListbox>
      <FormHelpText id="example-helptext">This is the help text</FormHelpText>
    </>
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
      itemToString={item => (item ? item.label : null)}
    />
  );
};

const ControlledCombobox: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState({});
  const [inputItems, setInputItems] = React.useState(objectItems);
  const {reset, ...state} = useCombobox({
    items: inputItems,
    itemToString: item => (item ? item.label : null),
    onSelectedItemChange: changes => {
      setSelectedItem(changes.selectedItem);
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        setInputItems(
          _.filter(objectItems, (item: any) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
        );
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

describe('Combobox ', () => {
  describe('Render', () => {
    it('should render', () => {
      const {asFragment} = render(<ComboboxMock />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render a combobox with aria attributes', () => {
      render(<ComboboxPartsMock />);
      const renderedCombobox = screen.getByRole('combobox');
      expect(renderedCombobox.getAttribute('aria-haspopup')).toEqual('listbox');
      expect(renderedCombobox.getAttribute('aria-owns')).toEqual('example-combobox-menu');
      expect(renderedCombobox.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render a textbox with aria attributes', () => {
      render(<ComboboxPartsMock />);
      const renderedCombobox = screen.getByRole('textbox');
      expect(renderedCombobox.getAttribute('aria-controls')).toEqual('example-combobox-menu');
      expect(renderedCombobox.getAttribute('aria-labelledby')).toEqual('example-label');
      expect(renderedCombobox.getAttribute('aria-describedby')).toEqual('example-helptext');
    });

    it('should render a list with aria attributes', () => {
      render(<ComboboxPartsMock />);
      const renderedCombobox = screen.getByRole('listbox');
      expect(renderedCombobox.getAttribute('aria-labelledby')).toEqual('example-label');
    });

    it('should render a label for that matches the input id', () => {
      render(<ComboboxPartsMock />);
      const renderedLabel = screen.getByTestId('label');
      const renderedTextbox = screen.getByTestId('textbox');
      expect(renderedLabel.getAttribute('for')).toEqual(renderedTextbox.getAttribute('id'));
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
      expect(renderedListbox.querySelectorAll('[role="listbox"] > [role="option"]').length).toEqual(1);
    });

    it('should render a custom group label', () => {
      render(<GroupedMockCombobox groupLabelTemplate={groupName => <span>hi {groupName}</span>} />);
      const renderedGroups = screen.getAllByRole('group');
      expect(renderedGroups[0].querySelector('[role="group"] > div[role="presentation"]').textContent).toEqual(
        'hi Components'
      );
      expect(renderedGroups[1].querySelector('[role="group"] > div[role="presentation"]').textContent).toEqual(
        'hi Primitives'
      );
      expect(renderedGroups[2].querySelector('[role="group"] > div[role="presentation"]').textContent).toEqual(
        'hi Layout'
      );
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
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
