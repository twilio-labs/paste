import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Paragraph} from '../src';

describe('Paragraph', () => {
  it('it should render a single paragraph', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Paragraph>This is a paragraph</Paragraph>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
