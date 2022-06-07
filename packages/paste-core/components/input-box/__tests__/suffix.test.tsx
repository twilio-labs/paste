import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Suffix} from '../src';

describe('HTML attributes', () => {
  it('should set a element data attribute for Suffix', () => {
    render(<Suffix element="INPUT">suffix</Suffix>);
    expect(screen.getByText('suffix').getAttribute('data-paste-element')).toEqual('INPUT_SUFFIX');
  });

  it('should set a custom element data attribute for Prefix', () => {
    render(<Suffix element="foo">suffix</Suffix>);
    expect(screen.getByText('suffix').getAttribute('data-paste-element')).toEqual('foo_SUFFIX');
  });
});

describe('Customization', () => {
  it('should add custom styles to Suffix', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          INPUT_SUFFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Suffix element="INPUT">suffix</Suffix>
      </CustomizationProvider>
    );
    const renderedSuffix = screen.getByText('suffix');
    expect(renderedSuffix).toHaveStyleRule('background-color', TestTheme.backgroundColors.colorBackground);
  });

  it('should add custom styles to a Suffix variant', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          INPUT_SUFFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Suffix element="INPUT" variant="inverse">
          suffix
        </Suffix>
      </CustomizationProvider>
    );
    const renderedSuffix = screen.getByText('suffix');
    expect(renderedSuffix).toHaveStyleRule('background-color', TestTheme.backgroundColors.colorBackgroundBrand);
  });

  it('should add custom styles to Suffix with a custom element data attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          foo_SUFFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Suffix element="foo">suffix</Suffix>
      </CustomizationProvider>
    );
    const renderedSuffix = screen.getByText('suffix');
    expect(renderedSuffix).toHaveStyleRule('background-color', TestTheme.backgroundColors.colorBackground);
  });

  it('should add custom styles to a Suffix variant with a custom element data attribute', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          foo_SUFFIX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <Suffix element="foo" variant="inverse">
          suffix
        </Suffix>
      </CustomizationProvider>
    );
    const renderedSuffix = screen.getByText('suffix');
    expect(renderedSuffix).toHaveStyleRule('background-color', TestTheme.backgroundColors.colorBackgroundBrand);
  });
});
