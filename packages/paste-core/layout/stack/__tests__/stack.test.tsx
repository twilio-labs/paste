import * as React from 'react';
import {render} from '@testing-library/react';
import {Card} from '@twilio-paste/card';
import {Theme} from '@twilio-paste/theme';
import {getStackDisplay, getStackStyles, getStackChildMargins, Stack} from '../src';

describe('Stack Unit Tests', () => {
  const mockHorizontalOrientation = 'horizontal';
  const mockVerticalOrientation = 'vertical';
  const mockResponsiveOrientation = ['vertical', 'horizontal', 'vertical'];
  const mockSpace = 'space40';
  const horizontalStyles = {display: 'flex', alignItems: 'center', flexWrap: 'wrap'};
  const verticalStyles = {display: 'block', alignItems: 'center', flexWrap: 'wrap'};
  const marginRightStyles = {marginRight: 'space40'};
  const marginBottomStyles = {marginBottom: 'space40'};
  const marginReponsiveStyles = {
    marginBottom: ['space40', 'space0', 'space40'],
    marginRight: ['space0', 'space40', 'space0'],
  };

  it('it should return display: flex', (): void => {
    expect(getStackDisplay(mockHorizontalOrientation)).toStrictEqual('flex');
  });

  it('it should return display: block', (): void => {
    expect(getStackDisplay(mockVerticalOrientation)).toStrictEqual('block');
  });

  it('it should return a reponsive display', (): void => {
    expect(getStackDisplay(mockResponsiveOrientation)).toStrictEqual(['block', 'flex', 'block']);
  });

  it('it should return horizontal styles', (): void => {
    expect(getStackStyles(mockHorizontalOrientation)).toStrictEqual(horizontalStyles);
  });

  it('it should return vertical styles', (): void => {
    expect(getStackStyles(mockVerticalOrientation)).toStrictEqual(verticalStyles);
  });

  it('it should return marginRight styles', (): void => {
    expect(getStackChildMargins(mockHorizontalOrientation, mockSpace)).toStrictEqual(marginRightStyles);
  });

  it('it should return marginBottom styles', (): void => {
    expect(getStackChildMargins(mockVerticalOrientation, mockSpace)).toStrictEqual(marginBottomStyles);
  });

  it('it should return responsive margin styles', (): void => {
    expect(getStackChildMargins(mockResponsiveOrientation, mockSpace)).toStrictEqual(marginReponsiveStyles);
  });
});

const MockVerticalStack: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <Stack orientation="vertical" spacing="space60">
        <Card>Card one</Card>
        <Card>Card two</Card>
      </Stack>
    </Theme.Provider>
  );
};

const MockHorizontalStack: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <Stack orientation="horizontal" spacing="space60">
        <Card>Card one</Card>
        <Card>Card two</Card>
      </Stack>
    </Theme.Provider>
  );
};

const MockResponsiveStack: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <Stack orientation={['horizontal', 'vertical', 'horizontal']} spacing="space60">
        <Card>Card one</Card>
        <Card>Card two</Card>
      </Stack>
    </Theme.Provider>
  );
};

const MockHeaderStack: React.FC = () => {
  return (
    <Theme.Provider theme="console">
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
    </Theme.Provider>
  );
};

describe('Stack', () => {
  it('should render a vertical stack', () => {
    const {asFragment} = render(<MockVerticalStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a horizontal stack', () => {
    const {asFragment} = render(<MockHorizontalStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a responsive stack', () => {
    const {asFragment} = render(<MockResponsiveStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as a header', () => {
    const {asFragment} = render(<MockHeaderStack />);
    expect(asFragment().querySelector('header')).not.toBeNull();
  });

  it('should render with an id', () => {
    const {getByTestId} = render(<MockHeaderStack />);
    expect(getByTestId('header').getAttribute('id')).toEqual('foo');
  });

  it('should render with a title', () => {
    const {getByTestId} = render(<MockHeaderStack />);
    expect(getByTestId('header').getAttribute('title')).toEqual('foo');
  });

  it('should render without a className', () => {
    const {getByTestId} = render(<MockHeaderStack />);
    expect(getByTestId('header').getAttribute('class')).not.toEqual('foo');
  });
});
