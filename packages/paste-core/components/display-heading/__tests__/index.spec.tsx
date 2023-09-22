import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import { DisplayHeading } from '../src';

describe('DisplayHeading', () => {
  it('should render as an h1 when passed as="h1', () => {
    render(
      <DisplayHeading as="h1" variant="displayHeading10">
        test
      </DisplayHeading>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 1 });
    expect(renderedDisplayHeading).toBeDefined();
  });
  it('should render as an h2 when passed as="h2', () => {
    render(
      <DisplayHeading as="h2" variant="displayHeading20">
        test
      </DisplayHeading>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 2 });
    expect(renderedDisplayHeading).toBeDefined();
  });
  it('should render as an h3 when passed as="h3', () => {
    render(
      <DisplayHeading as="h3" variant="displayHeading30">
        test
      </DisplayHeading>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 3 });
    expect(renderedDisplayHeading).toBeDefined();
  });
  it('should remove bottom margin when passed margin="space0', () => {
    render(
      <Theme.Provider theme="default">
        <DisplayHeading as="h3" variant="displayHeading30" marginBottom="space0">
          test
        </DisplayHeading>
      </Theme.Provider>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 3 });
    expect(renderedDisplayHeading).toHaveStyleRule('margin-bottom', '0');
  });
});

describe('Customization', () => {
  it('should set a data paste element attribute on Display Heading', () => {
    render(
      <DisplayHeading as="h3" variant="displayHeading30" marginBottom="space0">
        test
      </DisplayHeading>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 3 });
    expect(renderedDisplayHeading.getAttribute('data-paste-element')).toEqual('DISPLAY_HEADING');
  });
  it('should set a custom data paste element attribute on Display Heading', () => {
    render(
      <DisplayHeading as="h3" variant="displayHeading30" marginBottom="space0" element="foo">
        test
      </DisplayHeading>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 3 });
    expect(renderedDisplayHeading.getAttribute('data-paste-element')).toEqual('foo');
  });
  it('should add custom styles to Display Heading', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ DISPLAY_HEADING: { color: 'colorTextWeak' } }}
      >
        <DisplayHeading as="h1" variant="displayHeading10">
          test
        </DisplayHeading>
      </CustomizationProvider>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 1 });
    expect(renderedDisplayHeading).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
  it('should add custom styles to a custom named Display Heading', () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={{ foo: { color: 'colorTextWeak' } }}>
        <DisplayHeading as="h1" variant="displayHeading10" element="foo">
          test
        </DisplayHeading>
      </CustomizationProvider>,
    );
    const renderedDisplayHeading = screen.getByRole('heading', { level: 1 });
    expect(renderedDisplayHeading).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
});
