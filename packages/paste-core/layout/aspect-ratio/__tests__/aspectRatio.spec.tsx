import * as React from 'react';
import {render} from '@testing-library/react';
import {AspectRatio} from '../src';

describe('AspectRatio', () => {
  it('should render a 4:3 aspect ratio div', () => {
    const {getByTestId} = render(
      <AspectRatio ratio="4:3" data-testid="foo">
        <p data-testid="foo">This is the AspectRatio utility.</p>
      </AspectRatio>
    );

    expect(getByTestId('foo')).toHaveStyleRule('padding', '75%');
  });
});
