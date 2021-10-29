import * as React from 'react';
import {render} from '@testing-library/react';
import {AspectRatio} from '../src';

describe('AspectRatio', () => {
  it('should render a 4:3 aspect ratio div', () => {
    const {getByTestId} = render(
      <div data-testid="wrapper">
        <AspectRatio ratio="4:3">
          <p>This is the AspectRatio utility.</p>
        </AspectRatio>
      </div>
    );

    expect(getByTestId('wrapper').firstChild).toHaveAttribute('style', 'padding-bottom: 75%;');
  });
});
