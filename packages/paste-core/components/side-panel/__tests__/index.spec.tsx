import * as React from 'react';
import {render} from '@testing-library/react';

import {SidePanel} from '../src';

describe('SidePanel', () => {
  it('should render', () => {
    const {getByText} = render(<SidePanel>test</SidePanel>);
    expect(getByText('test')).toBeDefined();
  });
});
