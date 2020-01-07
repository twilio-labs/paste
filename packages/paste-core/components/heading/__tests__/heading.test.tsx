import * as React from 'react';
import renderer from 'react-test-renderer';
import {render} from 'react-dom';
import {axe} from 'jest-axe';
import {Theme} from '@twilio-paste/theme';
import {Heading} from '../src';

describe('Heading', () => {
  it('it should render an H1 at fontSize90', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Heading as="h1" variant="heading10">
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
        <Theme.Provider theme="console">
          <Heading as="h2" variant="heading20">
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
        <Theme.Provider theme="console">
          <Heading as="h3" variant="heading30">
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
        <Theme.Provider theme="console">
          <Heading as="h4" variant="heading40">
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
        <Theme.Provider theme="console">
          <Heading as="h5" variant="heading50">
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
        <Theme.Provider theme="console">
          <Heading as="h6" variant="heading60">
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
        <Theme.Provider theme="console">
          <Heading as="h2" variant="heading20">
            <i>This is an italic H2</i>
          </Heading>
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
        <Heading as="h1" variant="heading10">
          This is an H1
        </Heading>
        <Heading as="h2" variant="heading20">
          This is an H2
        </Heading>
        <Heading as="h3" variant="heading30">
          This is an H3
        </Heading>
        <Heading as="h4" variant="heading40">
          This is an H4
        </Heading>
        <Heading as="h5" variant="heading50">
          This is an H5
        </Heading>
        <Heading as="h6" variant="heading60">
          This is an H6
        </Heading>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
