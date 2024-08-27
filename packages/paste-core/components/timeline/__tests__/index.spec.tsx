import * as React from 'react';
import {render} from '@testing-library/react';

import {Timeline} from '../src';

describe('Timeline', () => {
  it('should render', () => {
    const {getByText} = render(<Timeline>test</Timeline>);
    expect(getByText('test')).toBeDefined();
  });
});
