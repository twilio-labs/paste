import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Card} from '@twilio-paste/card';
import {CustomizationProvider} from '@twilio-paste/customization';

import type {StackOrientation} from '../src';
import {getStackDisplay, getStackStyles, getStackChildMargins, Stack} from '../src/Stack';

describe('Stack Unit Tests', () => {
  const mockHorizontalOrientation = 'horizontal';
  const mockVerticalOrientation = 'vertical';
  const mockResponsiveOrientation: StackOrientation = ['vertical', 'horizontal', 'vertical'];
  const mockSpace = 'space40';
  const horizontalStyles = {display: 'flex', alignItems: 'center', flexWrap: 'wrap'};
  const verticalStyles = {display: 'block', alignItems: 'center', flexWrap: 'wrap'};
  const marginRightStyles = {marginRight: 'space40'};
  const marginBottomStyles = {marginBottom: 'space40'};
  const marginReponsiveStyles = {
    marginBottom: ['space40', 'space0', 'space40'],
    marginRight: ['space0', 'space40', 'space0'],
  };

  it('should return display: flex', (): void => {
    expect(getStackDisplay(mockHorizontalOrientation)).toStrictEqual('flex');
  });

  it('should return display: block', (): void => {
    expect(getStackDisplay(mockVerticalOrientation)).toStrictEqual('block');
  });

  it('should return a reponsive display', (): void => {
    expect(getStackDisplay(mockResponsiveOrientation)).toStrictEqual(['block', 'flex', 'block']);
  });

  it('should return horizontal styles', (): void => {
    expect(getStackStyles(mockHorizontalOrientation)).toStrictEqual(horizontalStyles);
  });

  it('should return vertical styles', (): void => {
    expect(getStackStyles(mockVerticalOrientation)).toStrictEqual(verticalStyles);
  });

  it('should return marginRight styles', (): void => {
    expect(getStackChildMargins(mockHorizontalOrientation, mockSpace)).toStrictEqual(marginRightStyles);
  });

  it('should return marginBottom styles', (): void => {
    expect(getStackChildMargins(mockVerticalOrientation, mockSpace)).toStrictEqual(marginBottomStyles);
  });

  it('should return responsive margin styles', (): void => {
    expect(getStackChildMargins(mockResponsiveOrientation, mockSpace)).toStrictEqual(marginReponsiveStyles);
  });
});

const MockHeaderStack = (): JSX.Element => {
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

const MockSingleChildStack = (): JSX.Element => {
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

  it('should set the data-paste-attribute attribute for Stack Children to "STACK_CHILD"', (): void => {
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

  it('should allow a custom element name to be set for Stack children', (): void => {
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

  it('should style Stack children according to the customization provider', (): void => {
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
