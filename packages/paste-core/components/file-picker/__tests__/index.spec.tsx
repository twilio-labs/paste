import * as React from 'react';
import {render} from '@testing-library/react';
import {FilePicker} from '../src';

describe('FilePicker', () => {
  it('should render', () => {
    const {getByText} = render(<FilePicker>test</FilePicker>);
    expect(getByText('test')).toBeDefined();
  });
});
