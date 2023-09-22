import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { OptionGroup, Option } from '../src';
import type { OptionGroupProps } from '../src';
import { createAttributeMap } from '../test-utils';

interface ExampleOptionGroupProps extends Omit<OptionGroupProps, 'children' | 'label'> {
  groupSuffix?: string;
}

const ExampleOptionGroup: React.FC<React.PropsWithChildren<ExampleOptionGroupProps>> = ({
  groupSuffix = 'test',
  ...props
}) => {
  return (
    <OptionGroup data-testid={`optgroup-1-${groupSuffix}`} {...props} label="first-group">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
    </OptionGroup>
  );
};

describe('OptionGroup', () => {
  it('should be able to take arbitrary html attributes on the container', () => {
    const additionalAttributes = {
      disabled: true,
      'data-attr': 'test-attribute',
      title: 'test-title',
      spellCheck: true,
      hidden: true,
      draggable: true,
      accessKey: 't e s t',
    };
    const { getByTestId } = render(<ExampleOptionGroup {...additionalAttributes} />);
    const attributeMap = createAttributeMap(getByTestId('optgroup-1-test'));

    expect(attributeMap['data-attr']).toEqual('test-attribute');
    expect(attributeMap.title).toEqual('test-title');
    expect(attributeMap.spellcheck).toEqual('true');
    expect(attributeMap.hidden).toEqual('');
    expect(attributeMap.draggable).toEqual('true');
    expect(attributeMap.accesskey).toEqual('t e s t');
    expect(attributeMap.disabled).toEqual('');
  });

  it('should filter blocklisted props', () => {
    const blockListedPropsMap = {
      style: {},
      className: 'blocklisted',
      height: '1px',
      width: '2px',
      size: 2,
    };
    const { getByTestId } = render(<ExampleOptionGroup {...blockListedPropsMap} />);
    const attributeMap = createAttributeMap(getByTestId('optgroup-1-test'));

    expect(attributeMap.hasOwnProperty('style')).toBe(false);
    expect(attributeMap.hasOwnProperty('className')).toBe(false);
    expect(attributeMap.hasOwnProperty('height')).toBe(false);
    expect(attributeMap.hasOwnProperty('width')).toBe(false);
    expect(attributeMap.hasOwnProperty('size')).toBe(false);
    expect(attributeMap.class).not.toBe('blocklisted');
  });

  describe('HTML Attribute', () => {
    it('should set an element data attribute for Option (default)', () => {
      render(<ExampleOptionGroup groupSuffix="default-data-attribute" />);
      expect(screen.getByTestId('optgroup-1-default-data-attribute').getAttribute('data-paste-element')).toEqual(
        'OPTION_GROUP',
      );
    });

    it('should set an element data attribute for Option', () => {
      render(<ExampleOptionGroup groupSuffix="unique-data-attribute" element="UNIQUE_NAME" />);

      expect(screen.getByTestId('optgroup-1-unique-data-attribute').getAttribute('data-paste-element')).toEqual(
        'UNIQUE_NAME',
      );
    });
  });

  describe('Customization', () => {
    it('should add custom styles to OptionGroup', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            OPTION: {
              color: 'colorTextLinkStronger',
            },
            OPTION_GROUP: {
              color: 'colorTextSuccess',
            },
          }}
        >
          <ExampleOptionGroup groupSuffix="custom-styles" />
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('optgroup-1-custom-styles')).toHaveStyleRule('color', 'rgb(14, 124, 58)');
    });

    it('should add custom styles to OptionGroup with a custom element data attribute', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            OPTION_GROUP: {
              color: 'colorTextLinkStronger',
            },
            UNIQUE_NAME: {
              color: 'colorTextLink',
            },
          }}
        >
          <ExampleOptionGroup groupSuffix="custom-styles-unique-name" element="UNIQUE_NAME" />
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('optgroup-1-custom-styles-unique-name')).toHaveStyleRule('color', 'rgb(2, 99, 224)');
    });
  });
});
