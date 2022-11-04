import * as React from 'react';
import {render} from '@testing-library/react';
import {DisplayHeading} from '../src';

describe('DisplayHeading', () => {
  it('should render', () => {
    const {getByText} = render(<DisplayHeading>test</DisplayHeading>);
    expect(getByText('test')).toBeDefined();
  });
});
