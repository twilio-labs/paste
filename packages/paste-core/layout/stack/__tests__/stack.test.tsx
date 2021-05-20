import * as React from 'react';
import {render} from '@testing-library/react';
import {matchers} from 'jest-emotion';
import {Card} from '@twilio-paste/card';
import {getStackDisplay, getStackStyles, getStackChildMargins, Stack, StackOrientation} from '../src';

expect.extend(matchers);

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
