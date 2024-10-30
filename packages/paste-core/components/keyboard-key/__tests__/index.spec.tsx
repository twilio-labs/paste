import * as React from 'react';
import {render} from '@testing-library/react';

import {KeyboardKey} from '../src';

describe('KeyboardKey', () => {
  it('should render', () => {
    const {getByText} = render(<KeyboardKey>test</KeyboardKey>);
    expect(getByText('test')).toBeDefined();
  });
});
