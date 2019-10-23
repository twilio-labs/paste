import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Heading} from '../src';

describe('Heading', () => {
  it('it should render an H1 with 32px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h1" headingStyle="headingStyle60">
            This is an H1
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an H2 with 24px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h2" headingStyle="headingStyle50">
            This is an H2
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an H3 with 20px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h3" headingStyle="headingStyle40">
            This is an H3
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an H4 with 16px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h4" headingStyle="headingStyle30">
            This is an H4
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an H5 with 14px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h5" headingStyle="headingStyle20">
            This is an H5
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render an H6 with 12px font-size', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Heading as="h6" headingStyle="headingStyle10">
            This is an H6
          </Heading>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
