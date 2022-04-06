import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Text} from '@twilio-paste/text';
import {Combobox} from '../src';

const getStyles = (element = 'COMBOBOX'): {[key: string]: PasteCustomCSS} => ({
  [`${element}_WRAPPER`]: {backgroundColor: 'colorBackgroundDark', fontFamily: 'fontFamilyCode'},
  [`${element}`]: {backgroundColor: 'colorBackgroundPrimaryLightest'},
  [`${element}_ELEMENT`]: {cursor: 'pointer'},
  [`${element}_CHEVRON_WRAPPER`]: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
  [`${element}_LISTBOX`]: {backgroundColor: 'colorBackgroundPrimaryLighter'},
  [`${element}_LIST`]: {backgroundColor: 'colorBackgroundPrimaryLight'},
  [`${element}_GROUPNAME`]: {fontFamily: 'fontFamilyText', cursor: 'help'},
  [`${element}_GROUPNAME_TEXT`]: {fontWeight: 'fontWeightLight'},
  [`${element}_LIST_ITEM`]: {backgroundColor: 'colorBackgroundPrimaryDark'},
  [`${element}_LIST_ITEM_TEXT`]: {color: 'colorTextWeakest', fontWeight: 'fontWeightBold'},
  [`${element}_PREFIX`]: {backgroundColor: 'colorBackgroundRequired', borderRadius: 'borderRadius20'},
  [`${element}_SUFFIX`]: {backgroundColor: 'colorBackgroundSubaccount', borderRadius: 'borderRadiusCircle'},
});

const initCustomizationWrapper = (elementName?: string | undefined): RenderOptions['wrapper'] =>
  function Wrapper({children}) {
    return (
      <CustomizationProvider theme={TestTheme} elements={getStyles(elementName)}>
        {children}
      </CustomizationProvider>
    );
  };

const ComboboxToTest = ({element = 'COMBOBOX'}): React.ReactElement => (
  <Combobox
    items={[
      {letter: 'a', number: 1},
      {letter: 'a', number: 2},
      {letter: 'b', number: 3},
    ]}
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

describe('Combobox data-paste-element attributes', () => {
  it('should set the correct attributes on all Combobox components', () => {
    const {container} = render(<ComboboxToTest />, {wrapper: initCustomizationWrapper()});
    expect(container.querySelector('[data-paste-element="COMBOBOX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="COMBOBOX_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="COMBOBOX_ELEMENT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="COMBOBOX_CHEVRON_WRAPPER"]')).toBeInTheDocument();
    expect(screen.getByRole('listbox').getAttribute('data-paste-element')).toEqual('COMBOBOX_LISTBOX');
    expect(screen.getAllByRole('group')[0].getAttribute('data-paste-element')).toEqual('COMBOBOX_LIST');
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
    expect(screen.getAllByRole('presentation')[0].getAttribute('data-paste-element')).toEqual('COMBOBOX_GROUPNAME');
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getAllByRole('option')[0].getAttribute('data-paste-element')).toEqual('COMBOBOX_LIST_ITEM');
    expect(container.querySelectorAll('[data-paste-element="COMBOBOX_LIST_ITEM_TEXT"]')).toHaveLength(3);
    expect(container.querySelector('[data-paste-element="COMBOBOX_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="COMBOBOX_SUFFIX"]')).toBeInTheDocument();
  });
  it('should set the correct attributes on all Combobox components with custom element prop', () => {
    const {container} = render(<ComboboxToTest element="FOO" />, {wrapper: initCustomizationWrapper()});
    expect(container.querySelector('[data-paste-element="FOO"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_ELEMENT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_CHEVRON_WRAPPER"]')).toBeInTheDocument();
    expect(screen.getByRole('listbox').getAttribute('data-paste-element')).toEqual('FOO_LISTBOX');
    expect(screen.getAllByRole('group')[0].getAttribute('data-paste-element')).toEqual('FOO_LIST');
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
    expect(screen.getAllByRole('presentation')[0].getAttribute('data-paste-element')).toEqual('FOO_GROUPNAME');
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getAllByRole('option')[0].getAttribute('data-paste-element')).toEqual('FOO_LIST_ITEM');
    expect(container.querySelectorAll('[data-paste-element="FOO_LIST_ITEM_TEXT"]')).toHaveLength(3);
    expect(container.querySelector('[data-paste-element="FOO_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_SUFFIX"]')).toBeInTheDocument();
  });
});

describe('Combobox customization', () => {
  it('should add styles to Combobox', () => {
    const {container} = render(<ComboboxToTest />, {wrapper: initCustomizationWrapper('COMBOBOX')});
    expect(container.querySelector('[data-paste-element="COMBOBOX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235,244,255)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgb(225,227,234)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_ELEMENT"]')).toHaveStyleRule('cursor', 'pointer');
    expect(container.querySelector('[data-paste-element="COMBOBOX_CHEVRON_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242,47,70,0.1)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_LISTBOX"]')).toHaveStyleRule(
      'background-color',
      'rgb(204,228,255)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_LIST"]')).toHaveStyleRule(
      'background-color',
      'rgb(153,205,255)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_GROUPNAME"]')).toHaveStyleRule('cursor', 'help');
    expect(container.querySelector('[data-paste-element="COMBOBOX_LIST_ITEM"]')).toHaveStyleRule(
      'background-color',
      'rgb(0,20,137)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_LIST_ITEM_TEXT"]')).toHaveStyleRule(
      'font-weight',
      '700'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_PREFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235,86,86)'
    );
    expect(container.querySelector('[data-paste-element="COMBOBOX_SUFFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(255,241,179)'
    );
  });

  it('should add styles to Combobox with custom element attribute', () => {
    const {container} = render(<ComboboxToTest element="FOO" />, {wrapper: initCustomizationWrapper('FOO')});
    expect(container.querySelector('[data-paste-element="FOO"]')).toHaveStyleRule(
      'background-color',
      'rgb(235,244,255)'
    );
    expect(container.querySelector('[data-paste-element="FOO_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgb(225,227,234)'
    );
    expect(container.querySelector('[data-paste-element="FOO_ELEMENT"]')).toHaveStyleRule('cursor', 'pointer');
    expect(container.querySelector('[data-paste-element="FOO_CHEVRON_WRAPPER"]')).toHaveStyleRule(
      'background-color',
      'rgba(242,47,70,0.1)'
    );
    expect(container.querySelector('[data-paste-element="FOO_LISTBOX"]')).toHaveStyleRule(
      'background-color',
      'rgb(204,228,255)'
    );
    expect(container.querySelector('[data-paste-element="FOO_LIST"]')).toHaveStyleRule(
      'background-color',
      'rgb(153,205,255)'
    );
    expect(container.querySelector('[data-paste-element="FOO_GROUPNAME"]')).toHaveStyleRule('cursor', 'help');
    expect(container.querySelector('[data-paste-element="FOO_LIST_ITEM"]')).toHaveStyleRule(
      'background-color',
      'rgb(0,20,137)'
    );
    expect(container.querySelector('[data-paste-element="FOO_LIST_ITEM_TEXT"]')).toHaveStyleRule('font-weight', '700');
    expect(container.querySelector('[data-paste-element="FOO_PREFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(235,86,86)'
    );
    expect(container.querySelector('[data-paste-element="FOO_SUFFIX"]')).toHaveStyleRule(
      'background-color',
      'rgb(255,241,179)'
    );
  });
});
