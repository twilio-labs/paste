import * as React from 'react';
import {render} from '@testing-library/react';
import {InPageNavigation} from '../src';

describe('InPageNavigation', () => {
  it('should render', () => {
    const {getByText} = render(<InPageNavigation>test</InPageNavigation>);
    expect(getByText('test')).toBeDefined();
  });
});
