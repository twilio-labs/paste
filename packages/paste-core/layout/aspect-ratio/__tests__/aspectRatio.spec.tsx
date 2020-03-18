import * as React from 'react';
import {mount} from 'enzyme';
import {AspectRatio} from '../src';

describe('AspectRatio', () => {
  it('should render a 4:3 aspect ratio div', () => {
    const wrapper = mount(
      <AspectRatio ratio="4:3">
        <p>This is the AspectRatio utility.</p>
      </AspectRatio>
    );
    expect(
      wrapper
        .find('div')
        .first()
        .props().style.paddingBottom
    ).toBe('75%');
  });
});
