import * as React from 'react';
import {axe} from 'jest-axe';
import {uid} from 'react-uid';
import {render, screen} from '@testing-library/react';
import {FormLabel, FormHelpText, InputElement} from '@twilio-paste/form';
import {useCombobox, Combobox, ComboboxInputWrapper, ComboboxListbox, ComboboxListboxOption} from '../src';
import {ComboboxProps} from '../src/types';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

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

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<ComboboxMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
