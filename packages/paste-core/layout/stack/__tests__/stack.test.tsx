import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Card} from '@twilio-paste/card';
import {CustomizationProvider} from '@twilio-paste/customization';

import type {StackOrientation} from '../src/Stack';
import {getDirection, getAlignment, getStackStyles, Stack} from '../src/Stack';

describe('Stack Unit Tests', () => {
  const mockHorizontalOrientation = 'horizontal';
  const mockVerticalOrientation = 'vertical';
  const mockResponsiveOrientation: StackOrientation = ['vertical', 'horizontal', 'vertical'];
  const mockSpace = 'space40';
  const horizontalStyles = {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 'space40',
    rowGap: 'space40',
  };
  const verticalStyles = {
    flexDirection: 'column',
    alignItems: 'stretch',
    columnGap: 'space40',
    rowGap: 'space40',
  };

  // Direction
  it('should return display: flex', (): void => {
    expect(getDirection(mockHorizontalOrientation)).toStrictEqual('row');
  });

  it('should return display: block', (): void => {
    expect(getDirection(mockVerticalOrientation)).toStrictEqual('column');
  });

  it('should return a reponsive display', (): void => {
    expect(getDirection(mockResponsiveOrientation)).toStrictEqual(['column', 'row', 'column']);
  });

  // Alignment
  it('should return horizontal alignment as center', (): void => {
    expect(getAlignment(mockHorizontalOrientation)).toStrictEqual('center');
  });
  it('should return vertical alignment as stretch', (): void => {
    expect(getAlignment(mockVerticalOrientation)).toStrictEqual('stretch');
  });
  it('should return responsive alignment correctly', (): void => {
    expect(getAlignment(mockResponsiveOrientation)).toStrictEqual(['stretch', 'center', 'stretch']);
  });

  // Stack Styles
  it('should return horizontal styles', (): void => {
    expect(getStackStyles(mockHorizontalOrientation, mockSpace)).toStrictEqual(horizontalStyles);
  });

  it('should return vertical styles', (): void => {
    expect(getStackStyles(mockVerticalOrientation, mockSpace)).toStrictEqual(verticalStyles);
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

const MockSingleChildStack: React.FC = () => {
  return (
    <>
      <Stack orientation="horizontal" spacing="space60" data-testid="single-horizontal">
        {null}
        <Card>Card one</Card>
        {null}
      </Stack>
      <Stack orientation="vertical" spacing="space60" data-testid="single-vertical">
        {null}
        <Card>Card one</Card>
        {null}
      </Stack>
    </>
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

  it('renders a single child with no extra padding', () => {
    const {getByTestId} = render(<MockSingleChildStack />);
    const mockSingleChildHorizontal = getByTestId('single-horizontal');
    expect(mockSingleChildHorizontal).not.toHaveStyleRule('marginRight', 'space60');
    const mockSingleChildVertical = getByTestId('single-vertical');
    expect(mockSingleChildVertical).not.toHaveStyleRule('marginBottom', 'space60');
  });
});

describe('Stack Customization', () => {
  it('should set the data-paste-element attribute for Stack to "STACK"', (): void => {
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

  it('should allow a custom element name to be set for Stack', (): void => {
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

  it('should style Stack according to the customization provider', (): void => {
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
});
