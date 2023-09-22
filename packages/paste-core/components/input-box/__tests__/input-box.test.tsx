import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { InputBox } from '../src';

describe('HTML attributes', () => {
  it('should set a element data attribute for InputBox', () => {
    render(<InputBox element="INPUT_BOX">input-box</InputBox>);
    expect(screen.getByText('input-box').getAttribute('data-paste-element')).toEqual('INPUT_BOX');
  });

  it('should set a custom element data attribute for InputBox', () => {
    render(<InputBox element="foo">input-box</InputBox>);
    expect(screen.getByText('input-box').getAttribute('data-paste-element')).toEqual('foo');
  });
});

describe('Customization', () => {
  it('should add custom styles to InputBox', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT_BOX: { backgroundColor: 'colorBackground' },
        }}
      >
        <InputBox element="INPUT_BOX">input-box</InputBox>
      </CustomizationProvider>,
    );
    const renderedInputBox = screen.getByText('input-box');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
  });

  it('should add custom styles to a InputBox variant', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT_BOX: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <InputBox element="INPUT_BOX" variant="inverse">
          input-box
        </InputBox>
      </CustomizationProvider>,
    );
    const renderedInputBox = screen.getByText('input-box');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
  });

  it('should add custom styles to InputBox with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: { backgroundColor: 'colorBackground' },
        }}
      >
        <InputBox element="foo">input-box</InputBox>
      </CustomizationProvider>,
    );
    const renderedInputBox = screen.getByText('input-box');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
  });

  it('should add custom styles to a InputBox variant with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: {
            backgroundColor: 'colorBackground',
            variants: {
              inverse: {
                backgroundColor: 'colorBackgroundBrand',
              },
            },
          },
        }}
      >
        <InputBox element="foo" variant="inverse">
          input-box
        </InputBox>
      </CustomizationProvider>,
    );
    const renderedInputBox = screen.getByText('input-box');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(0, 20, 137)');
  });
});
