import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { Card } from '../src';

describe('Card', () => {
  it('should render', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Card data-testid="card" />
      </CustomizationProvider>,
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toBeDefined();
  });

  it('should render default padding', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Card data-testid="card" />
      </CustomizationProvider>,
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toHaveStyleRule('padding', '2.25rem');
  });

  it('should render custom padding values', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Card
          data-testid="card"
          paddingTop="space20"
          paddingRight="space30"
          paddingBottom="space40"
          paddingLeft="space50"
        />
      </CustomizationProvider>,
    );
    const renderedCard = screen.getByTestId('card');
    expect(renderedCard).toHaveStyleRule('padding-top', '0.25rem');
    expect(renderedCard).toHaveStyleRule('padding-right', '0.5rem');
    expect(renderedCard).toHaveStyleRule('padding-bottom', '0.75rem');
    expect(renderedCard).toHaveStyleRule('padding-left', '1rem');
  });

  it('should render children', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Card>I AM A JEDI!!!!</Card>
      </CustomizationProvider>,
    );
    const renderedCardContent = screen.getByText('I AM A JEDI!!!!');
    expect(renderedCardContent).toBeDefined();
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
        elements={{ CARD: { backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive' } }}
      >
        <Card data-testid="customizable-card">Custom card</Card>
      </CustomizationProvider>,
    );
    const renderedCard = screen.getByTestId('customizable-card');
    expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');
  });

  it('should add custom styles to Card with a custom element data attribute', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ foo: { backgroundColor: 'colorBackground', borderColor: 'colorBorderDestructive' } }}
      >
        <Card element="foo" data-testid="customizable-card">
          Custom card
        </Card>
      </CustomizationProvider>,
    );
    const renderedCard = screen.getByTestId('customizable-card');
    expect(renderedCard).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedCard).toHaveStyleRule('border-color', 'rgb(214, 31, 31)');
  });
});
