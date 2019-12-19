import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import renderer from 'react-test-renderer';
import {Card, CardFooter} from '../src';

describe('Card', () => {
  it('it should render default values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Card />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should filter out style props that are not allowed', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Card margin="space10" backgroundColor="colorBackgroundSuccess" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render default values unless overridden by the component', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Card paddingBottom="space200" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render children', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Card>I AM A JEDI!!!!</Card>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render CardFooter', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <CardFooter>Just | footer | things</CardFooter>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
