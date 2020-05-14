import * as React from 'react';
import {axe} from 'jest-axe';
import {uid} from 'react-uid';
import {render, screen} from '@testing-library/react';
import {FormLabel, FormHelpText, InputElement} from '@twilio-paste/form';
import {useCombobox, Combobox, ComboboxInputWrapper, ComboboxListbox, ComboboxListboxOption} from '../src';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const ComboboxMock: React.FC<{}> = () => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <>
      <Combobox
        items={inputItems}
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
      <FormLabel htmlFor="example-textbox" {...getLabelProps()} id="example-label">
        Choose a component:
      </FormLabel>
      <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})} aria-owns="example-combobox-menu">
        <InputElement
          type="text"
          {...getInputProps()}
          {...getToggleButtonProps({tabIndex: 0})}
          value={selectedItem || ''}
          id="example-textbox"
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
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<ComboboxMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
