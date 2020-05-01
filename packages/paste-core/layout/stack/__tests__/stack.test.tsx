import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Card} from '@twilio-paste/card';
import {Theme} from '@twilio-paste/theme';
import {Stack} from '../src';

const MockStack: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <Stack spacing="space60">
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

describe('Stack', () => {
  it('should render a vertical stack', () => {
    const {asFragment} = testRender(<MockStack />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a horizontal stack', () => {
    const {asFragment} = testRender(<MockHorizontalStack />);
    expect(asFragment()).toMatchSnapshot();
  });
});
