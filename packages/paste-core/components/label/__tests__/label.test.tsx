import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Label} from '../src';

describe('Label render', () => {
  it('it should render', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Label htmlFor="input">child</Label>
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should render with required', (): void => {
    const {asFragment} = render(
      <Theme.Provider theme="console">
        <Label htmlFor="input" required>
          child
        </Label>
      </Theme.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Label for prop', () => {
  const initialProps = {
    htmlFor: 'input',
  };

  it('should have a for prop on label', () => {
    render(
      <Label data-testid="test-label" {...initialProps}>
        Label
      </Label>
    );
    expect(screen.getByTestId('test-label').getAttribute('for')).toEqual('input');
  });
});

describe('Label required prop', () => {
  const initialProps = {
    htmlFor: 'input',
    required: true,
  };

  it('should have a required indicator', () => {
    render(<Label {...initialProps}>label</Label>);
    expect(screen.getByText('Required:')).not.toBeNull();
  });
});
