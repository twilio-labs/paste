import * as React from 'react';
import {render as testRender} from '@testing-library/react';
import {Card} from '@twilio-paste/card';
import {Theme} from '@twilio-paste/theme';
import {getStackDisplay, Stack} from '../src';

describe('Stack Unit Tests', () => {
  const mockVerticalOrientation = 'vertical';
  const mockHorizontalOrientation = 'horizontal';
  const mockResponsiveOrientation = ['vertical', 'horizontal', 'vertical'];

  it('it should return display: block', (): void => {
    expect(getStackDisplay(mockVerticalOrientation)).toStrictEqual('block');
  });

  it('it should return display: flex', (): void => {
    expect(getStackDisplay(mockHorizontalOrientation)).toStrictEqual('flex');
  });

  it('it should return a reponsive display', (): void => {
    expect(getStackDisplay(mockResponsiveOrientation)).toStrictEqual(['block', 'flex', 'block']);
  });
});

const MockStack: React.FC = () => {
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

describe('Stack', () => {
  it('should render a vertical stack', () => {
    const {asFragment} = testRender(<MockStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a horizontal stack', () => {
    const {asFragment} = testRender(<MockHorizontalStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a responsive stack', () => {
    const {asFragment} = testRender(<MockResponsiveStack />);
    expect(asFragment()).toMatchSnapshot();
  });
});
