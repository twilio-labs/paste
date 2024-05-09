import * as React from 'react';
import {render} from '@testing-library/react';

import {AiLog} from '../src';

describe('AiLog', () => {
  it('should render', () => {
    const {getByText} = render(<AiLog>test</AiLog>);
    expect(getByText('test')).toBeDefined();
  });
});
