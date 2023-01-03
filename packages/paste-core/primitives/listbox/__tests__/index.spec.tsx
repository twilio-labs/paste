import * as React from 'react';
import {render} from '@testing-library/react';
import {Listbox} from '../src';

describe('Listbox', () => {
  it('should render', () => {
    const {getByText} = render(<Listbox>test</Listbox>);
    expect(getByText('test')).toBeDefined();
  });
});
