import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Label} from '../src';

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
