import { fireEvent, render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Label } from '@twilio-paste/label';
import { Theme } from '@twilio-paste/theme';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Option, Select, SelectElement } from '../src';
import type { SelectProps } from '../src';
import { createAttributeMap } from '../test-utils';

const onChangeMock: jest.Mock = jest.fn();

interface ExampleSelectProps extends SelectProps {
  element?: string;
  dataPrefix?: string;
  style?: React.CSSProperties | undefined;
  className?: string;
  height?: string;
  width?: string;
  size?: number;
}

const ExampleSelect: React.FC<React.PropsWithChildren<ExampleSelectProps>> = ({
  children,
  hasError = false,
  dataPrefix,
  ...props
}) => {
  const selectID = `select-${useUID()}`;
  return (
    <>
      <Label htmlFor={selectID}>Label</Label>
      <Select
        hasError={hasError}
        data-testid={dataPrefix ? `${dataPrefix}-select` : 'select'}
        {...props}
        id={selectID}
        onChange={onChangeMock}
        value={props.multiple ? [] : ''}
      >
        {children}
      </Select>
    </>
  );
};

const initTestId = (prefix?: string): string => `${prefix ? `${prefix}-` : ''}select-wrapper`;

const MockWrappedSelect: React.FC<React.PropsWithChildren<ExampleSelectProps>> = ({
  children,
  dataPrefix,
  ...props
}) => {
  return (
    <Theme.Provider theme="default" data-testid={initTestId(dataPrefix)}>
      <ExampleSelect dataPrefix={dataPrefix} {...props}>
        {children}
      </ExampleSelect>
    </Theme.Provider>
  );
};

const defaultProps = {
  id: 'id-select',
  onChange: onChangeMock,
  value: '',
};

describe('Select', () => {
  const blockListedPropsMap = {
    style: {},
    className: 'blocklisted',
    height: '1px',
    width: '2px',
    size: 2,
  };

  it('should have the correct accessibility attributes on the container', () => {
    const { getByTestId } = render(
      <MockWrappedSelect {...defaultProps}>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
    );
    expect(getByTestId('select').getAttribute('aria-invalid')).toEqual('false');

    const { getByTestId: getByTestIdWithError } = render(
      <MockWrappedSelect {...defaultProps} dataPrefix="has-error" hasError>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
    );
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
    const { getByTestId } = render(
      <MockWrappedSelect {...defaultProps} {...nativeAttributes}>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
    );
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
    const { getByTestId } = render(
      <MockWrappedSelect {...defaultProps} dataPrefix="blocklisted" {...blockListedPropsMap}>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
    );
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
    const { getByTestId: getByTestIdWithMultiple } = render(
      <MockWrappedSelect {...defaultProps} dataPrefix="blocklisted-multiple" {...multipleRenderProps}>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
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
    const { getByDisplayValue } = render(
      <MockWrappedSelect {...defaultProps}>
        <Option value="option-1">Option 1</Option>
        <Option data-testid="option-2" value="option-2">
          Option 2
        </Option>
      </MockWrappedSelect>,
    );
    fireEvent.change(getByDisplayValue('Option 1'), { target: { value: 'option-2' } });

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should set data-not-selectize="true" on the select element for console bootstrap overrides', () => {
    const { getByTestId } = render(
      <MockWrappedSelect {...defaultProps}>
        <Option value="option-1">test</Option>
      </MockWrappedSelect>,
    );
    expect(getByTestId('select').getAttribute('data-not-selectize')).toEqual('true');
  });

  it('should render with margin: space0', () => {
    const { getByTestId } = render(<SelectElement data-testid="select-margin">child</SelectElement>);
    expect(getByTestId('select-margin')).toHaveStyleRule('margin', 'space0');
  });

  describe('HTML Attribute', () => {
    it('should set an element data attribute for Select (default)', () => {
      render(
        <MockWrappedSelect {...defaultProps} dataPrefix="default-data-attribute" hasError>
          <Option value="option-1">test</Option>
        </MockWrappedSelect>,
      );

      expect(screen.getByTestId('default-data-attribute-select').getAttribute('data-paste-element')).toEqual(
        'SELECT_ELEMENT',
      );
    });

    it('should set an element data attribute for Select', () => {
      render(
        <MockWrappedSelect {...defaultProps} dataPrefix="unique-data-attribute" element="UNIQUE_NAME" hasError>
          <Option value="option-1">test</Option>
        </MockWrappedSelect>,
      );

      expect(screen.getByTestId('unique-data-attribute-select').getAttribute('data-paste-element')).toEqual(
        'UNIQUE_NAME_ELEMENT',
      );
    });
  });

  describe('Customization', () => {
    const CustomizationWrapper: React.FC<React.PropsWithChildren<{ children: React.ReactNode }>> = ({ children }) => (
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          SELECT: {
            color: 'colorTextLinkStronger',
            cursor: 'help',
            boxShadow: 'shadowBorderPrimary',
            variants: {
              inverse: {
                boxShadow: 'shadowBorderDestructiveWeaker',
              },
              default: {
                color: 'colorTextLinkStronger',
                cursor: 'help',
                boxShadow: 'shadowBorderPrimary',
              },
            },
          },
          SELECT_ELEMENT: {
            fontFamily: 'fontFamilyCode',
            variants: {
              inverse: {
                color: 'colorTextWarningStrong',
                fontWeight: 'fontWeightBold',
              },
              default: {
                color: 'inherit',
                fontWeight: 'inherit',
              },
            },
          },
          SELECT_CHEVRON_WRAPPER: {
            transform: 'rotate(90deg) translateX(-50%) translateY(-20%)',
          },
          SELECT_ICON: {
            color: 'colorTextInverseWeak',
          },
          HORSE: {
            color: 'colorTextError',
            cursor: 'not-allowed',
            boxShadow: 'shadowBorderPrimary',
          },
          HORSE_ELEMENT: {
            fontFamily: 'fontFamilyCode',
            fontSize: 'fontSize40',
            variants: {
              inverse: {
                color: 'colorTextWarningStrong',
                fontWeight: 'fontWeightBold',
              },
              default: {
                color: 'inherit',
                fontWeight: 'inherit',
              },
            },
          },
          HORSE_ICON: {
            transform: 'rotate(90deg) translateX(-50%) translateY(-20%)',
          },
          HORSE_CHEVRON_WRAPPER: {
            color: 'colorTextInverseWeak',
          },
        }}
      >
        {children}
      </CustomizationProvider>
    );
    it('should add custom styles to Select for default variant', () => {
      const dataPrefix = 'custom-styles';
      render(
        <CustomizationWrapper>
          <div data-testid={initTestId(dataPrefix)}>
            <ExampleSelect {...defaultProps} dataPrefix={dataPrefix}>
              <Option value="option-1">test</Option>
            </ExampleSelect>
          </div>
        </CustomizationWrapper>,
      );

      const nodeNamedSelect = screen.getByTestId('custom-styles-select-wrapper').lastChild as ChildNode;
      expect(nodeNamedSelect).toHaveStyleRule('color', 'rgb(3, 11, 93)');
      expect(nodeNamedSelect).toHaveStyleRule('cursor', 'help');
      expect(nodeNamedSelect).toHaveStyleRule('box-shadow', '0 0 0 1px #0263e0');

      const nodeNamedSelectElement = screen.getByTestId('custom-styles-select');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-family', "'TwilioSansMono',Courier,monospace");
      expect(nodeNamedSelectElement).toHaveStyleRule('color', 'inherit');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-weight', 'inherit');

      const nodeNamedBox = nodeNamedSelect.firstChild as ChildNode;
      const nodeNamedIconWrapper = nodeNamedBox.lastChild as ChildNode;
      expect(nodeNamedIconWrapper).toHaveStyleRule('transform', 'rotate(90deg) translateX(-50%) translateY(-20%)');

      const nodeNamedIcon = nodeNamedIconWrapper.firstChild as ChildNode;
      expect(nodeNamedIcon).toHaveStyleRule('color', 'rgb(174, 178, 193)');
    });

    it('should add custom styles to Select for inverse variant', () => {
      const dataPrefix = 'custom-styles';
      render(
        <CustomizationWrapper>
          <div data-testid={initTestId(dataPrefix)}>
            <ExampleSelect {...defaultProps} variant="inverse" dataPrefix={dataPrefix}>
              <Option value="option-1">test</Option>
            </ExampleSelect>
          </div>
        </CustomizationWrapper>,
      );

      const nodeNamedSelect = screen.getByTestId('custom-styles-select-wrapper').lastChild as ChildNode;
      expect(nodeNamedSelect).toHaveStyleRule('color', 'rgb(3, 11, 93)');
      expect(nodeNamedSelect).toHaveStyleRule('cursor', 'help');
      expect(nodeNamedSelect).toHaveStyleRule('box-shadow', '0 0 0 1px #fccfcf');

      const nodeNamedSelectElement = screen.getByTestId('custom-styles-select');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-family', "'TwilioSansMono',Courier,monospace");
      expect(nodeNamedSelectElement).toHaveStyleRule('color', 'rgb(141, 49, 24)');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-weight', '700');

      const nodeNamedBox = nodeNamedSelect.firstChild as ChildNode;
      const nodeNamedIconWrapper = nodeNamedBox.lastChild as ChildNode;
      expect(nodeNamedIconWrapper).toHaveStyleRule('transform', 'rotate(90deg) translateX(-50%) translateY(-20%)');

      const nodeNamedIcon = nodeNamedIconWrapper.firstChild as ChildNode;
      expect(nodeNamedIcon).toHaveStyleRule('color', 'rgb(174, 178, 193)');
    });

    it('should add custom styles to Select with a custom element data attribute', () => {
      const dataPrefix = 'custom-styles-unique-name';
      render(
        <CustomizationWrapper>
          <div data-testid={initTestId(dataPrefix)}>
            <ExampleSelect {...defaultProps} dataPrefix={dataPrefix} element="HORSE">
              <Option value="option-1">test</Option>
            </ExampleSelect>
          </div>
        </CustomizationWrapper>,
      );

      const nodeNamedSelect = screen.getByTestId('custom-styles-unique-name-select-wrapper').lastChild as ChildNode;
      expect(nodeNamedSelect).toHaveStyleRule('color', 'rgb(214, 31, 31)');
      expect(nodeNamedSelect).toHaveStyleRule('cursor', 'not-allowed');

      const nodeNamedSelectElement = screen.getByTestId('custom-styles-unique-name-select');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-family', "'TwilioSansMono',Courier,monospace");
      expect(nodeNamedSelectElement).toHaveStyleRule('color', 'inherit');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-weight', 'inherit');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-size', '1rem');

      const nodeNamedBox = nodeNamedSelect.firstChild as ChildNode;
      const nodeNamedIconWrapper = nodeNamedBox.lastChild as ChildNode;
      expect(nodeNamedIconWrapper).toHaveStyleRule('display', 'inline-flex');

      const nodeNamedIcon = nodeNamedIconWrapper.firstChild as ChildNode;
      expect(nodeNamedIcon).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to Select inverse variant with a custom element data attribute', () => {
      const dataPrefix = 'custom-styles-unique-name';
      render(
        <CustomizationWrapper>
          <div data-testid={initTestId(dataPrefix)}>
            <ExampleSelect {...defaultProps} variant="inverse" dataPrefix={dataPrefix} element="HORSE">
              <Option value="option-1">test</Option>
            </ExampleSelect>
          </div>
        </CustomizationWrapper>,
      );

      const nodeNamedSelect = screen.getByTestId('custom-styles-unique-name-select-wrapper').lastChild as ChildNode;
      expect(nodeNamedSelect).toHaveStyleRule('color', 'rgb(214, 31, 31)');
      expect(nodeNamedSelect).toHaveStyleRule('cursor', 'not-allowed');

      const nodeNamedSelectElement = screen.getByTestId('custom-styles-unique-name-select');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-family', "'TwilioSansMono',Courier,monospace");
      expect(nodeNamedSelectElement).toHaveStyleRule('color', 'rgb(141, 49, 24)');
      expect(nodeNamedSelectElement).toHaveStyleRule('font-weight', '700');

      const nodeNamedBox = nodeNamedSelect.firstChild as ChildNode;
      const nodeNamedIconWrapper = nodeNamedBox.lastChild as ChildNode;
      expect(nodeNamedIconWrapper).toHaveStyleRule('display', 'inline-flex');

      const nodeNamedIcon = nodeNamedIconWrapper.firstChild as ChildNode;
      expect(nodeNamedIcon).toHaveStyleRule('color', 'rgb(136, 145, 170)');
    });
  });
});
