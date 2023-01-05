import * as React from 'react';
import {render} from '@testing-library/react';

import {DescriptionList} from '../src';

describe('DescriptionList', () => {
  it('should render', () => {
    const {getByText} = render(<DescriptionList>test</DescriptionList>);
    expect(getByText('test')).toBeDefined();
  });
});
