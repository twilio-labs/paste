import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { Prefix } from '../src';

describe('HTML attributes', () => {
  it('should set a element data attribute for Prefix', () => {
    render(<Prefix element="INPUT">prefix</Prefix>);
    expect(screen.getByText('prefix').getAttribute('data-paste-element')).toEqual('INPUT_PREFIX');
  });

  it('should set a custom element data attribute for Prefix', () => {
    render(<Prefix element="foo">prefix</Prefix>);
    expect(screen.getByText('prefix').getAttribute('data-paste-element')).toEqual('foo_PREFIX');
  });
});

describe('Customization', () => {
  it('should add custom styles to Prefix', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT_PREFIX: { backgroundColor: 'colorBackground' },
        }}
      >
        <Prefix element="INPUT">prefix</Prefix>
      </CustomizationProvider>,
    );
    const renderedPrefix = screen.getByText('prefix');
    expect(renderedPrefix).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
  });

  it('should add custom styles to a Prefix variant', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT_PREFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Prefix element="INPUT" variant="inverse">
          prefix
        </Prefix>
      </CustomizationProvider>,
    );
    const renderedPrefix = screen.getByText('prefix');
    expect(renderedPrefix).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
  });

  it('should add custom styles to Prefix with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          FOO_PREFIX: { backgroundColor: 'colorBackground' },
        }}
      >
        <Prefix element="FOO">prefix</Prefix>
      </CustomizationProvider>,
    );
    const renderedPrefix = screen.getByText('prefix');
    expect(renderedPrefix).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
  });

  it('should add custom styles to a Prefix variant with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          FOO_PREFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Prefix element="FOO" variant="inverse">
          prefix
        </Prefix>
      </CustomizationProvider>,
    );
    const renderedPrefix = screen.getByText('prefix');
    expect(renderedPrefix).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
  });
});
