import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Heading} from '../src';

describe('Heading', () => {
  it('it should render an H1 at fontSize90', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h1" variant="heading60">
            This is an H1
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an H2 at fontSize70', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h2" variant="heading50">
            This is an H2
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an H3 at fontSize60', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h3" variant="heading40">
            This is an H3
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an H4 at fontSize40', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h4" variant="heading30">
            This is an H4
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an H5 at fontSize30', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h5" variant="heading20">
            This is an H5
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an H6 at fontSize20', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h6" variant="heading10">
            This is an H6
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render an italic H2 at fontSize50', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h2" variant="heading50">
            <i>This is an italic H2</i>
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
