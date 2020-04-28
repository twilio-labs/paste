import * as React from 'react';
import {useUID} from 'react-uid';
import {render} from 'react-dom';
import {render as testRender, fireEvent, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {Select, Option, FormLabel} from '../../src';

const onChangeMock: jest.Mock = jest.fn();

interface AttributesMap {
    class?: string;
    'data-testid'?: string;
    id?: string;
    'aria-invalid'?: string;
}

export const createAttributeMap = (element: HTMLElement): AttributesMap => {
  const attributesMap = {};
  const attributesNodeList: NamedNodeMap = element.attributes;
  for (let i = 0; i < attributesNodeList.length; i++) {
    const {name, value} = attributesNodeList[i];
    attributesMap[name] = value;
  }

  return attributesMap;
};

export interface MockSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dataPrefix?: string;
  children?: React.ReactNode;
  hasError?: boolean;
  style?: object;
  className?: string;
  height?: string;
  width?: string;
  size?: number;
  onChange?: jest.Mock<any, any>;
}

const MockSelect: React.FC<MockSelectProps> = ({children, hasError = false, dataPrefix, ...props}) => {
  const selectID = `select-${useUID()}`;
  return (
    <Theme.Provider theme="console">
      <FormLabel htmlFor={selectID}>Label</FormLabel>
      <Select
        id={selectID}
        onChange={onChangeMock}
        hasError={hasError}
        data-testid={dataPrefix ? `${dataPrefix}-select` : 'select'}
        {...props}
        value={props.multiple ? [] : ''}
      >
        {children}
      </Select>
    </Theme.Provider>
  );
};

describe('Form | Select', () => {
    const blackListedPropsMap = {
      style: {},
      className: 'blacklisted',
      height: '1px',
      width: '2px',
      size: 2,
    };
    afterEach(cleanup);

  it('shoud have the correct accessibility attributes on the container', () => {
    const {getByTestId} = testRender(<MockSelect />);
    expect(getByTestId('select').getAttribute('aria-invalid')).toEqual('false');

    const {getByTestId: getByTestIdWithError} = testRender(<MockSelect dataPrefix="has-error" hasError={true} />);
    expect(getByTestIdWithError('has-error-select').getAttribute('aria-invalid')).toEqual('true');
  });

  it('should be able to take arbitrary html attributes on the container', () => {
    // @TODO update this test, will fail.
    const nativeAttributes = {
      autoComplete: 'on',
      form: 'test-form',
      name: 'test-select',
      'data-attr': 'test-attribute',
      title: 'test-title',
      spellCheck: true,
      hidden: true,
      draggable: true,
      accessKey: 't e s t',
    };
    const {getByTestId} = testRender(<MockSelect {...nativeAttributes} />);
    const attributeMap = createAttributeMap(getByTestId('select'));

    expect(attributeMap.hasOwnProperty('autocomplete')).toBe(true);
    expect(attributeMap.hasOwnProperty('form')).toBe(true);
    expect(attributeMap.hasOwnProperty('name')).toBe(true);
    expect(attributeMap.hasOwnProperty('data-attr')).toBe(true);
    expect(attributeMap.hasOwnProperty('title')).toBe(true);
    expect(attributeMap.hasOwnProperty('spellcheck')).toBe(true);
    expect(attributeMap.hasOwnProperty('hidden')).toBe(true);
    expect(attributeMap.hasOwnProperty('draggable')).toBe(true);
    expect(attributeMap.hasOwnProperty('accesskey')).toBe(true);
  });

  it('should filter blacklisted props via safelySpreadFormControlProps', () => {
    const {getByTestId} = testRender(<MockSelect dataPrefix="blacklisted" {...blackListedPropsMap} />);
    const selectAttributesMap = createAttributeMap(getByTestId('blacklisted-select'));

    expect(selectAttributesMap.hasOwnProperty('style')).toBe(false);
    expect(selectAttributesMap.hasOwnProperty('className')).toBe(false);
    expect(selectAttributesMap.hasOwnProperty('height')).toBe(false);
    expect(selectAttributesMap.hasOwnProperty('width')).toBe(false);
    expect(selectAttributesMap.hasOwnProperty('size')).toBe(false);
    expect(selectAttributesMap.class).not.toBe('blacklisted');

    const multipleRenderProps = {
      ...blackListedPropsMap,
      multiple: true,
    };
    const {getByTestId: getByTestIdWithMultiple} = testRender(
      <MockSelect dataPrefix="blacklisted-multiple" {...multipleRenderProps} />
    );

    const selectMultipleAttributesMap = createAttributeMap(getByTestIdWithMultiple('blacklisted-multiple-select'));

    expect(selectMultipleAttributesMap.hasOwnProperty('style')).toBe(false);
    expect(selectMultipleAttributesMap.hasOwnProperty('className')).toBe(false);
    expect(selectMultipleAttributesMap.hasOwnProperty('height')).toBe(false);
    expect(selectMultipleAttributesMap.hasOwnProperty('width')).toBe(false);
    expect(selectMultipleAttributesMap.class).not.toBe('blacklisted');

    expect(selectMultipleAttributesMap.hasOwnProperty('size')).toBe(true);
    expect(selectMultipleAttributesMap.hasOwnProperty('multiple')).toBe(true);
  });

  it('should call onChange when an option is selected', () => {
    const {getByDisplayValue} = testRender(
      <MockSelect>
        <Option value="option-1">Option 1</Option>
        <Option data-testid="option-2" value="option-2">
          Option 2
        </Option>
      </MockSelect>
    );
    fireEvent.change(getByDisplayValue('Option 1'), {target: {value: 'option-2'}});

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(<MockSelect />, container);
    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});