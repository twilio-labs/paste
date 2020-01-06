import * as React from 'react';
import renderer from 'react-test-renderer';
import {render} from 'react-dom';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {Anchor} from '../src';

describe('Anchor', () => {
  it('it should render an anchor', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Anchor href="/">This is an anchor</Anchor>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an external anchor', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Anchor href="https://twilio.com">
            This is an anchor that links to Twilio.com with an external target and rel
          </Anchor>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an external anchor with overwritten target and rel', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Anchor href="https://twilio.com" target="_self" rel="noopener">
            This is an anchor that links to Twilio.com with the target and rel overwritten
          </Anchor>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <Theme.Provider theme="console">
        <Anchor href="/">This is an anchor</Anchor>
        <Anchor href="https://twilio.com">
          This is an anchor that links to Twilio.com with an external target and rel
        </Anchor>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
