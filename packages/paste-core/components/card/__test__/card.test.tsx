import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Card} from '../src';

describe('Card', () => {
  it('should render', (): void => {
    render(
      <Theme.Provider theme="default">
        <Card data-testid="card" />
      </Theme.Provider>
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toBeDefined();
  });

  it('should render default padding', (): void => {
    render(
      <Theme.Provider theme="default">
        <Card data-testid="card" />
      </Theme.Provider>
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toHaveStyleRule('padding', '1.25rem');
  });

  it('should render custom padding values', (): void => {
    render(
      <Theme.Provider theme="default">
        <Card
          data-testid="card"
          paddingTop="space20"
          paddingRight="space30"
          paddingBottom="space40"
          paddingLeft="space50"
        />
      </Theme.Provider>
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toHaveStyleRule('padding-top', '0.25rem');
    expect(renderedCard).toHaveStyleRule('padding-right', '0.5rem');
    expect(renderedCard).toHaveStyleRule('padding-bottom', '0.75rem');
    expect(renderedCard).toHaveStyleRule('padding-left', '1rem');
  });

  it('should render children', (): void => {
    render(
      <Theme.Provider theme="default">
        <Card>I AM A JEDI!!!!</Card>
      </Theme.Provider>
    );
    const renderedCardContent = screen.getByText('I AM A JEDI!!!!');
    expect(renderedCardContent).toBeDefined();
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(
      <Theme.Provider theme="console">
        <Card>card content</Card>
      </Theme.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('HTML attributes', () => {
  it('should set a element data attribute for Card', () => {
    render(<Card>card-content</Card>);
    expect(screen.getByText('card-content').getAttribute('data-paste-element')).toEqual('CARD');
  });
  it('should set a custom element data attribute for Card', () => {
    render(<Card element="foo">card-content</Card>);
    expect(screen.getByText('card-content').getAttribute('data-paste-element')).toEqual('foo');
  });
});

describe('Customization', () => {
  it('should add custom styles to Card', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{CARD: {backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive'}}}
      >
        <Card data-testid="customizable-card">Custom card</Card>
      </CustomizationProvider>
    );
    const renderedCard = screen.getByTestId('customizable-card');
    expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214,31,31)');
  });

  it('should add custom styles to Card with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{foo: {backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive'}}}
      >
        <Card element="foo" data-testid="customizable-card">
          Custom card
        </Card>
      </CustomizationProvider>
    );
    const renderedCard = screen.getByTestId('customizable-card');
    expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244,244,246)');
    expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214,31,31)');
  });
});
