import * as React from 'react';
import {render} from '@testing-library/react';
import {Switch} from '../src';

describe('Switch', () => {
  it('should render', () => {
    const {getByText} = render(<Switch>test</Switch>);
    expect(getByText('test')).toBeDefined();
  });
});
