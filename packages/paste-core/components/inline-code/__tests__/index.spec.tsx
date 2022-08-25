import * as React from 'react';
import {render} from '@testing-library/react';
import {InlineCode} from '../src';

describe('InlineCode', () => {
  it('should render', () => {
    const {getByText} = render(<InlineCode>sid</InlineCode>);
    expect(getByText('sid')).toBeDefined();
  });
});
