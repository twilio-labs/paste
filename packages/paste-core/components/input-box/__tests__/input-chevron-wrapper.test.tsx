import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {InputChevronWrapper} from '../src';

describe('HTML attributes', () => {
  it('should set a element data attribute for InputChevronWrapper', () => {
    render(<InputChevronWrapper element="INPUT_CHEVRON_WRAPPER">input-chevron</InputChevronWrapper>);
    expect(screen.getByText('input-chevron').getAttribute('data-paste-element')).toEqual('INPUT_CHEVRON_WRAPPER');
  });

  it('should set a custom element data attribute for InputChevronWrapper', () => {
    render(<InputChevronWrapper element="FOO_CHEVRON_WRAPPER">input-chevron</InputChevronWrapper>);
    expect(screen.getByText('input-chevron').getAttribute('data-paste-element')).toEqual('FOO_CHEVRON_WRAPPER');
  });
});

describe('Customization', () => {
  it('should add custom styles to InputChevronWrapper', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          INPUT_CHEVRON_WRAPPER: {backgroundColor: 'colorBackground'},
        }}
      >
        <InputChevronWrapper element="INPUT_CHEVRON_WRAPPER">input-chevron</InputChevronWrapper>
      </CustomizationProvider>
    );
    const renderedInputChevronWrapper = screen.getByText('input-chevron');
    expect(renderedInputChevronWrapper).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });

  it('should add custom styles to InputChevronWrapper with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          FOO_CHEVRON_WRAPPER: {backgroundColor: 'colorBackground'},
        }}
      >
        <InputChevronWrapper element="FOO_CHEVRON_WRAPPER">input-chevron</InputChevronWrapper>
      </CustomizationProvider>
    );
    const renderedInputChevronWrapper = screen.getByText('input-chevron');
    expect(renderedInputChevronWrapper).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });
});
