import * as React from 'react';
import { render, screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';
import { Text } from '@twilio-paste/text';

import { MultiselectCombobox } from '../src';

const getStyles = (element = 'MULTISELECT_COMBOBOX'): { [key: string]: PasteCustomCSS } => ({
  [`${element}_WRAPPER`]: { backgroundColor: 'colorBackgroundStrong', fontFamily: 'fontFamilyCode' },
  [`${element}`]: { backgroundColor: 'colorBackgroundPrimaryWeakest' },
  [`${element}_PILL_GROUP`]: { backgroundColor: 'colorBackgroundWarning' },
  [`${element}_PILL`]: { backgroundColor: 'colorBackgroundWarningWeakest' },
  [`${element}_ELEMENT`]: { cursor: 'pointer' },
  [`${element}_CHEVRON_WRAPPER`]: { backgroundColor: 'colorBackgroundBrandHighlightWeakest' },
  [`${element}_LISTBOX`]: { backgroundColor: 'colorBackgroundPrimaryWeaker' },
  [`${element}_LIST`]: { backgroundColor: 'colorBackgroundPrimaryWeak' },
  [`${element}_GROUPNAME`]: { fontFamily: 'fontFamilyText', cursor: 'help' },
  [`${element}_GROUPNAME_TEXT`]: { fontWeight: 'fontWeightLight' },
  [`${element}_LIST_ITEM`]: { backgroundColor: 'colorBackgroundPrimaryStrong' },
  [`${element}_LIST_ITEM_TEXT`]: { color: 'colorTextWeakest', fontWeight: 'fontWeightBold' },
  [`${element}_PREFIX`]: { backgroundColor: 'colorBackgroundRequired', borderRadius: 'borderRadius20' },
  [`${element}_SUFFIX`]: { backgroundColor: 'colorBackgroundSubaccount', borderRadius: 'borderRadiusCircle' },
});

const initCustomizationWrapper = (elementName?: string | undefined): RenderOptions['wrapper'] =>
  function Wrapper({ children }) {
    return (
      <CustomizationProvider theme={TestTheme} elements={getStyles(elementName)}>
        {children}
      </CustomizationProvider>
    );
  };

const items = [
  { letter: 'a', number: 1 },
  { letter: 'a', number: 2 },
  { letter: 'b', number: 3 },
];

const MultiselectComboboxToTest = ({ element = 'MULTISELECT_COMBOBOX' }): React.ReactElement => (
  <MultiselectCombobox
    items={items}
    initialSelectedItems={[items[0], items[2]]}
    groupItemsBy="letter"
    labelText="Choose a letter:"
    helpText="This is the help text"
    initialIsOpen
    element={element}
    optionTemplate={(item) => <div>{item.number}</div>}
    itemToString={(item) => (item ? item.letter : '')}
    insertBefore={<Text as="span">Z</Text>}
    insertAfter={<InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />}
  />
);

describe('MultiselectCombobox data-paste-element attributes', () => {
  it('should set the correct attributes on all MultiselectCombobox components', () => {
    const { container, getByRole } = render(<MultiselectComboboxToTest />, { wrapper: initCustomizationWrapper() });
    expect(getByRole('textbox').dataset.pasteElement).toEqual('MULTISELECT_COMBOBOX_ELEMENT');
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_ELEMENT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_CHEVRON_WRAPPER"]')).toBeInTheDocument();

    expect(container.querySelectorAll(`[data-paste-element="MULTISELECT_COMBOBOX_PILL"]`).length).toEqual(2);
    expect(
      container.querySelectorAll(`[data-paste-element="MULTISELECT_COMBOBOX_PILL"]`)[0].getAttribute('role'),
    ).toEqual('option');

    const dropdownlistbox = screen.getByRole('listbox', { name: 'Choose a letter:' });

    expect(dropdownlistbox.querySelectorAll(`[data-paste-element="MULTISELECT_COMBOBOX_LIST_ITEM"]`).length).toEqual(3);
    expect(
      dropdownlistbox.querySelectorAll(`[data-paste-element="MULTISELECT_COMBOBOX_LIST_ITEM"]`)[0].getAttribute('role'),
    ).toEqual('option');

    const [pillgroupListbox, comboboxListbox] = screen.getAllByRole('listbox');
    expect(pillgroupListbox.getAttribute('data-paste-element')).toEqual('MULTISELECT_COMBOBOX_PILL_GROUP');
    expect(comboboxListbox.getAttribute('data-paste-element')).toEqual('MULTISELECT_COMBOBOX_LISTBOX');
    expect(screen.getAllByRole('group')[0].getAttribute('data-paste-element')).toEqual('MULTISELECT_COMBOBOX_LIST');
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
    expect(screen.getAllByRole('presentation')[0].getAttribute('data-paste-element')).toEqual(
      'MULTISELECT_COMBOBOX_GROUPNAME',
    );

    expect(dropdownlistbox.querySelectorAll('[data-paste-element="MULTISELECT_COMBOBOX_LIST_ITEM_TEXT"]')).toHaveLength(
      3,
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_SUFFIX"]')).toBeInTheDocument();
  });
  it('should set the correct attributes on all MultiselectCombobox components with custom element prop', () => {
    const { container } = render(<MultiselectComboboxToTest element="FOO" />, { wrapper: initCustomizationWrapper() });
    expect(container.querySelector('[data-paste-element="FOO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_ELEMENT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_CHEVRON_WRAPPER"]')).toBeInTheDocument();

    expect(container.querySelectorAll(`[data-paste-element="FOO_PILL"]`).length).toEqual(2);
    expect(container.querySelectorAll(`[data-paste-element="FOO_PILL"]`)[0].getAttribute('role')).toEqual('option');

    const [pillgroupListbox, comboboxListbox] = screen.getAllByRole('listbox');

    expect(comboboxListbox.querySelectorAll(`[data-paste-element="FOO_LIST_ITEM"]`).length).toEqual(3);
    expect(comboboxListbox.querySelectorAll(`[data-paste-element="FOO_LIST_ITEM"]`)[0].getAttribute('role')).toEqual(
      'option',
    );

    expect(pillgroupListbox.getAttribute('data-paste-element')).toEqual('FOO_PILL_GROUP');
    expect(comboboxListbox.getAttribute('data-paste-element')).toEqual('FOO_LISTBOX');
    expect(screen.getAllByRole('group')[0].getAttribute('data-paste-element')).toEqual('FOO_LIST');
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
    expect(screen.getAllByRole('presentation')[0].getAttribute('data-paste-element')).toEqual('FOO_GROUPNAME');

    expect(comboboxListbox.querySelectorAll('[data-paste-element="FOO_LIST_ITEM_TEXT"]')).toHaveLength(3);
    expect(container.querySelector('[data-paste-element="FOO_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_SUFFIX"]')).toBeInTheDocument();
  });
});

describe('MultiselectCombobox customization', () => {
  it('should add styles to MultiselectCombobox', () => {
    const { container } = render(<MultiselectComboboxToTest />, {
      wrapper: initCustomizationWrapper('MULTISELECT_COMBOBOX'),
    });
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)',
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgb(225, 227, 234)',
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_ELEMENT"]')).toHaveStyleRule(
      'cursor',
      'pointer',
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_CHEVRON_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );

    const dropdownlistbox = screen.getByRole('listbox', { name: 'Choose a letter:' });

    expect(dropdownlistbox).toHaveStyleRule('background-color', 'rgb(204, 228, 255)');
    expect(dropdownlistbox.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_LIST"]')).toHaveStyleRule(
      'background-color',
      'rgb(153, 205, 255)',
    );
    expect(dropdownlistbox.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_GROUPNAME"]')).toHaveStyleRule(
      'cursor',
      'help',
    );
    expect(dropdownlistbox.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_LIST_ITEM"]')).toHaveStyleRule(
      'background-color',
      'rgb(0, 20, 137)',
    );
    expect(dropdownlistbox.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_LIST_ITEM_TEXT"]')).toHaveStyleRule(
      'font-weight',
      '700',
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_PREFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 86, 86)',
    );
    expect(container.querySelector('[data-paste-element="MULTISELECT_COMBOBOX_SUFFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(255, 241, 179)',
    );
  });

  it('should add styles to MultiselectCombobox with custom element attribute', () => {
    const { container } = render(<MultiselectComboboxToTest element="FOO" />, {
      wrapper: initCustomizationWrapper('FOO'),
    });
    expect(container.querySelector('[data-paste-element="FOO"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 244, 255)',
    );
    expect(container.querySelector('[data-paste-element="FOO_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgb(225, 227, 234)',
    );
    expect(container.querySelector('[data-paste-element="FOO_ELEMENT"]')).toHaveStyleRule('cursor', 'pointer');
    expect(container.querySelector('[data-paste-element="FOO_CHEVRON_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );

    const dropdownlistbox = screen.getByRole('listbox', { name: 'Choose a letter:' });

    expect(dropdownlistbox).toHaveStyleRule('background-color', 'rgb(204, 228, 255)');
    expect(dropdownlistbox.querySelector('[data-paste-element="FOO_LIST"]')).toHaveStyleRule(
      'background-color',
      'rgb(153, 205, 255)',
    );
    expect(dropdownlistbox.querySelector('[data-paste-element="FOO_GROUPNAME"]')).toHaveStyleRule('cursor', 'help');
    expect(dropdownlistbox.querySelector('[data-paste-element="FOO_LIST_ITEM"]')).toHaveStyleRule(
      'background-color',
      'rgb(0, 20, 137)',
    );
    expect(dropdownlistbox.querySelector('[data-paste-element="FOO_LIST_ITEM_TEXT"]')).toHaveStyleRule(
      'font-weight',
      '700',
    );
    expect(container.querySelector('[data-paste-element="FOO_PREFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235, 86, 86)',
    );
    expect(container.querySelector('[data-paste-element="FOO_SUFFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(255, 241, 179)',
    );
  });
});
