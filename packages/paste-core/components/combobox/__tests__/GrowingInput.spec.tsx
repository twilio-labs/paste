import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';

import { GrowingInput } from '../src/multiselect/GrowingInput';

const TEST_ID = 'growing-input-test-id-123';

describe('GrowingInput component', () => {
  it('should set the correct width and have an id', () => {
    render(
      <Theme.Provider theme="default">
        <GrowingInput id={TEST_ID} />
      </Theme.Provider>,
    );
    const input = screen.getByRole('textbox');

    expect(input).toHaveStyleRule('width', '100%');
    expect(input.getAttribute('id')).toEqual(TEST_ID);
  });
});
