import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
import {useUID} from '@twilio-paste/uid-library';
import {Theme} from '@twilio-paste/theme';
import {Label} from '@twilio-paste/label';
import axe from '../../../../../.jest/axe-helper';
import {Select, Option} from '../src';
import {createAttributeMap} from '../test-utils';

const onChangeMock: jest.Mock = jest.fn();

interface MockSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dataPrefix?: string;
  children?: React.ReactNode;
  hasError?: boolean;
  style?: unknown;
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
      <Label htmlFor={selectID}>Label</Label>
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
  const blockListedPropsMap = {
    style: {},
    className: 'blocklisted',
    height: '1px',
    width: '2px',
    size: 2,
  };

  it('shoud have the correct accessibility attributes on the container', () => {
    const {getByTestId} = testRender(<MockSelect />);
    expect(getByTestId('select').getAttribute('aria-invalid')).toEqual('false');

    const {getByTestId: getByTestIdWithError} = testRender(<MockSelect dataPrefix="has-error" hasError />);
    expect(getByTestIdWithError('has-error-select').getAttribute('aria-invalid')).toEqual('true');
  });

  it('should be able to take arbitrary html attributes on the container', () => {
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

    expect(attributeMap['data-attr']).toEqual('test-attribute');
    expect(attributeMap.title).toEqual('test-title');
    expect(attributeMap.spellcheck).toEqual('true');
    expect(attributeMap.hidden).toEqual('');
    expect(attributeMap.draggable).toEqual('true');
    expect(attributeMap.accesskey).toEqual('t e s t');
    expect(attributeMap.autocomplete).toEqual('on');
    expect(attributeMap.form).toEqual('test-form');
  });

  it('should filter blocklisted props', () => {
    const {getByTestId} = testRender(<MockSelect dataPrefix="blocklisted" {...blockListedPropsMap} />);
    const selectAttributesMap = createAttributeMap(getByTestId('blocklisted-select'));

    expect(selectAttributesMap.style).toBe(undefined);
    expect(selectAttributesMap.className).toBe(undefined);
    expect(selectAttributesMap.height).not.toBe('1px');
    expect(selectAttributesMap.width).not.toBe('2px');
    expect(selectAttributesMap.size).not.toBe(2);
    expect(selectAttributesMap.class).not.toBe('blocklisted');

    const multipleRenderProps = {
      ...blockListedPropsMap,
      multiple: true,
    };
    const {getByTestId: getByTestIdWithMultiple} = testRender(
      <MockSelect dataPrefix="blocklisted-multiple" {...multipleRenderProps} />
    );

    const selectMultipleAttributesMap = createAttributeMap(getByTestIdWithMultiple('blocklisted-multiple-select'));

    expect(selectMultipleAttributesMap.style).toBe(undefined);
    expect(selectMultipleAttributesMap.className).toBe(undefined);
    expect(selectMultipleAttributesMap.height).not.toBe('1px');
    expect(selectMultipleAttributesMap.width).not.toBe('2px');
    expect(selectMultipleAttributesMap.class).not.toBe('blocklisted');

    expect(selectMultipleAttributesMap.size).not.toBe(2);
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

  it('should set data-not-selectize="true" on the select element for console bootstrap overrides', () => {
    const {getByTestId} = testRender(<MockSelect />);
    expect(getByTestId('select').getAttribute('data-not-selectize')).toEqual('true');
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(<MockSelect />, container);
    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
