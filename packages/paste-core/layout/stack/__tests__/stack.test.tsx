import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Card} from '@twilio-paste/card';
import {CustomizationProvider} from '@twilio-paste/customization';

import type {StackOrientation} from '../src';
import {getDirection, getAlignment, Stack} from '../src';

describe('Stack Unit Tests', () => {
  const mockResponsiveOrientation: StackOrientation = ['vertical', 'horizontal', 'vertical'];

  it('should return horizontal direction', () => {
    expect(getDirection('horizontal')).toStrictEqual('row');
  });

  it('should return vertical direction', () => {
    expect(getDirection('vertical')).toStrictEqual('column');
  });

  it('should return a responsive direction', () => {
    expect(getDirection(mockResponsiveOrientation)).toStrictEqual(['column', 'row', 'column']);
  });

  it('should return horizontal alignment', () => {
    expect(getAlignment('horizontal')).toStrictEqual('center');
  });

  it('should return vertical alignment', () => {
    expect(getAlignment('vertical')).toStrictEqual('stretch');
  });

  it('should return responsive alignment', () => {
    expect(getAlignment(mockResponsiveOrientation)).toStrictEqual(['stretch', 'center', 'stretch']);
  });
});

const MockHeaderStack: React.FC = () => {
  return (
    <Stack
      as="header"
      orientation="vertical"
      spacing="space60"
      data-testid="header"
      id="foo"
      title="foo"
      className="foo"
    >
      <Card>Card one</Card>
      <Card>Card two</Card>
    </Stack>
  );
};

describe('Stack', () => {
  it('renders a mock header with two children correctly', () => {
    const {getByTestId} = render(<MockHeaderStack />);
    const mockHeader = getByTestId('header');
    expect(mockHeader.tagName).toEqual('HEADER');
    expect(mockHeader.getAttribute('id')).toEqual('foo');
    expect(mockHeader.getAttribute('title')).toEqual('foo');
    expect(mockHeader.getAttribute('class')).not.toEqual('foo');
  });
});

describe('Stack Customization', () => {
  it('should set the data-paste-element attribute for Stack to "STACK"', () => {
    render(
      <CustomizationProvider baseTheme="default">
        <Stack orientation="vertical" spacing="space0" data-testid="stack-customization">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('stack-customization');
    expect(renderedBox).toHaveAttribute('data-paste-element', 'STACK');
  });

  it('should set the data-paste-attribute attribute for Stack Children to "STACK_CHILD"', () => {
    const {container} = render(
      <CustomizationProvider baseTheme="default">
        <Stack orientation="vertical" spacing="space0">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    expect(container.querySelector('[data-paste-element="STACK_CHILD"]')).toBeInTheDocument();
  });

  it('should allow a custom element name to be set for Stack', () => {
    render(
      <CustomizationProvider baseTheme="default">
        <Stack element="STACKY" orientation="vertical" spacing="space0" data-testid="stack-customization-name">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('stack-customization-name');
    expect(renderedBox).toHaveAttribute('data-paste-element', 'STACKY');
  });

  it('should allow a custom element name to be set for Stack children', () => {
    const {container} = render(
      <CustomizationProvider baseTheme="default">
        <Stack element="STACKY" orientation="vertical" spacing="space0">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    expect(container.querySelector('[data-paste-element="STACKY_CHILD"]')).toBeInTheDocument();
  });

  it('should style Stack according to the customization provider', () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{STACK: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
      >
        <Stack orientation="vertical" spacing="space0" data-testid="customizable-stack">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-stack');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });

  it('should style Stack children according to the customization provider', () => {
    const {container} = render(
      <CustomizationProvider
        baseTheme="default"
        elements={{STACK_CHILD: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
      >
        <Stack orientation="vertical" spacing="space0">
          <p>One</p>
          <p>Two</p>
        </Stack>
      </CustomizationProvider>
    );
    const childNode = container.querySelector('[data-paste-element="STACK_CHILD"]');
    expect(childNode).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(childNode).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
});
