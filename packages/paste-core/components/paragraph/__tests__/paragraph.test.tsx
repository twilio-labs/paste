import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Paragraph} from '../src';

describe('Paragraph', () => {
  it('it should render a single paragraph', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Paragraph>This is a paragraph</Paragraph>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a single paragraph with italic text', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Paragraph>
            <i>This is a paragraph with italic text</i>
          </Paragraph>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a single paragraph with bold text', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Paragraph>
            <strong>This is a paragraph with bold text</strong>
          </Paragraph>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
