import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { Option } from '../src';
import type { OptionProps } from '../src';
import { createAttributeMap } from '../test-utils';

interface ExampleOptionProps extends OptionProps {
  suffix?: string;
  element?: string;
}

const ExampleOption: React.FC<React.PropsWithChildren<ExampleOptionProps>> = ({
  suffix = 'test',
  ...props
}): React.ReactElement => {
  return (
    <Option data-testid={`option-${suffix}`} {...props}>
      Option 1
    </Option>
  );
};

describe('Option', () => {
  it('should be able to take arbitrary html attributes on the container', () => {
    const additionalAttributes = {
      disabled: true,
      label: 'option-1-label',
      'data-attr': 'test-attribute',
      title: 'test-title',
      spellCheck: true,
      hidden: true,
      draggable: true,
      accessKey: 't e s t',
    };
    const { getByTestId } = render(
      <ExampleOption {...additionalAttributes} value="option-1">
        Option 1
      </ExampleOption>,
    );
    const attributeMap = createAttributeMap(getByTestId('option-test'));

    expect(attributeMap['data-attr']).toEqual('test-attribute');
    expect(attributeMap.title).toEqual('test-title');
    expect(attributeMap.spellcheck).toEqual('true');
    expect(attributeMap.hidden).toEqual('');
    expect(attributeMap.draggable).toEqual('true');
    expect(attributeMap.accesskey).toEqual('t e s t');
    expect(attributeMap.disabled).toEqual('');
    expect(attributeMap.label).toEqual('option-1-label');
  });

  it('should filter blocklist props', () => {
    // hide console errors from terminal when throwing expected errors
    const errorSpy = jest.spyOn(console, 'error');
    errorSpy.mockImplementation(() => {});
    const warnSpy = jest.spyOn(console, 'warn');
    warnSpy.mockImplementation(() => {});

    const blockListedPropsMap = {
      style: {},
      className: 'blocklisted',
      height: '1px',
      width: '2px',
      size: 2,
      selected: true,
    };
    const { getByTestId } = render(
      <ExampleOption {...blockListedPropsMap} value="option-1">
        Option 1
      </ExampleOption>,
    );
    const attributeMap = createAttributeMap(getByTestId('option-test'));

    expect(attributeMap.hasOwnProperty('style')).toBe(false);
    expect(attributeMap.hasOwnProperty('className')).toBe(false);
    expect(attributeMap.hasOwnProperty('height')).toBe(false);
    expect(attributeMap.hasOwnProperty('width')).toBe(false);
    expect(attributeMap.hasOwnProperty('size')).toBe(false);
    expect(attributeMap.hasOwnProperty('selected')).toBe(false);
    expect(attributeMap.class).not.toBe('blocklisted');

    errorSpy.mockRestore();
    warnSpy.mockRestore();
  });

  describe('HTML Attribute', () => {
    it('should set an element data attribute for Option (default)', () => {
      render(
        <ExampleOption suffix="default-data-attribute" value="option-1">
          Option 1
        </ExampleOption>,
      );
      expect(screen.getByTestId('option-default-data-attribute').getAttribute('data-paste-element')).toEqual('OPTION');
    });

    it('should set an element data attribute for Option', () => {
      render(
        <ExampleOption suffix="unique-data-attribute" element="UNIQUE_NAME" value="option-1">
          Option 1
        </ExampleOption>,
      );

      expect(screen.getByTestId('option-unique-data-attribute').getAttribute('data-paste-element')).toEqual(
        'UNIQUE_NAME',
      );
    });
  });

  describe('Customization', () => {
    it('should add custom styles to Option', () => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            OPTION: {
              color: 'colorTextLinkStronger',
            },
            OPTION_GROUP: {
              color: 'colorText',
            },
          }}
        >
          <ExampleOption suffix="custom-styles" value="option-1">
            Option 1
          </ExampleOption>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('option-custom-styles')).toHaveStyleRule('color', 'rgb(3, 11, 93)');
    });

    it('should add custom styles to Option with a custom element data attribute', () => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            OPTION: {
              color: 'colorTextLinkStronger',
            },
            CAT: {
              color: 'colorTextLink',
            },
          }}
        >
          <ExampleOption suffix="custom-styles-unique-name" element="CAT" value="option-1">
            Option 1
          </ExampleOption>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('option-custom-styles-unique-name')).toHaveStyleRule('color', 'rgb(2, 99, 224)');
    });
  });
});
