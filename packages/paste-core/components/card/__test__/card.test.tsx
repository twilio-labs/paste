import * as React from 'react';
import {render} from 'react-dom';
import {Theme} from '@twilio-paste/theme';
import renderer from 'react-test-renderer';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Card} from '../src';

describe('Card', () => {
  it('should render default values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Card />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should filter out style props that are not allowed', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          {/* @ts-expect-error */}
          <Card margin="space10" backgroundColor="colorBackgroundSuccess" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render default values unless overridden by the component', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Card paddingBottom="space200" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render children', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Card>I AM A JEDI!!!!</Card>
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
        <Card>card content</Card>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
