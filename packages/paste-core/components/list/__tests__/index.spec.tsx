import * as React from 'react';
import {render} from 'react-dom';
import renderer from 'react-test-renderer';
import {ReactWrapper, mount} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {OrderedList, UnorderedList, ListItem} from '../src';

describe('Ordered List', () => {
  it('should render a plain ordered list wrapper', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <OrderedList>Children</OrderedList>
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
        <OrderedList>
          <ListItem>item</ListItem>
        </OrderedList>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should filter out styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          {/* @ts-expect-error */}
          <OrderedList margin="space40">Children</OrderedList>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow marginTop and marginBottom styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <OrderedList marginTop="space40" marginBottom="space40">
            Children
          </OrderedList>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow aria attributes', () => {
    const wrapper: ReactWrapper = mount(<OrderedList aria-expanded="true">Children</OrderedList>);
    expect(wrapper.exists('ol[aria-expanded="true"]')).toEqual(true);
  });

  it('should allow data attributes', () => {
    const wrapper: ReactWrapper = mount(<OrderedList data-test="test-hook">Children</OrderedList>);
    expect(wrapper.exists('ol[data-test="test-hook"]')).toEqual(true);
  });

  it('should allow HTML attributes', () => {
    const wrapper: ReactWrapper = mount(<OrderedList title="random title">Children</OrderedList>);
    expect(wrapper.exists('ol[title="random title"]')).toEqual(true);
  });
});

describe('Unordered List', () => {
  it('should render a plain unordered list wrapper', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <UnorderedList>Children</UnorderedList>
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
        <UnorderedList>
          <ListItem>item</ListItem>
        </UnorderedList>
      </Theme.Provider>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should filter out styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <UnorderedList color="textColorSuccess">Children</UnorderedList>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow aria attributes', () => {
    const wrapper: ReactWrapper = mount(<UnorderedList aria-label="label">Children</UnorderedList>);
    expect(wrapper.exists('ul[aria-label="label"]')).toEqual(true);
  });

  it('should allow data attributes', () => {
    const wrapper: ReactWrapper = mount(<UnorderedList data-rando="test-hook">Children</UnorderedList>);
    expect(wrapper.exists('ul[data-rando="test-hook"]')).toEqual(true);
  });

  it('should allow HTML attributes', () => {
    const wrapper: ReactWrapper = mount(<UnorderedList title="random title">Children</UnorderedList>);
    expect(wrapper.exists('ul[title="random title"]')).toEqual(true);
  });
});

describe('ListItem', () => {
  it('should render a plain list item', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <ListItem>Children</ListItem>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should filter out styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          {/* @ts-expect-error */}
          <ListItem padding="textColorSuccess">Children</ListItem>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow aria attributes', () => {
    const wrapper: ReactWrapper = mount(<ListItem aria-pressed="true">Children</ListItem>);
    expect(wrapper.exists('li[aria-pressed="true"]')).toEqual(true);
  });

  it('should allow data attributes', () => {
    const wrapper: ReactWrapper = mount(<ListItem data-rando="test-hook">Children</ListItem>);
    expect(wrapper.exists('li[data-rando="test-hook"]')).toEqual(true);
  });

  it('should allow HTML attributes', () => {
    const wrapper: ReactWrapper = mount(<ListItem title="random title">Children</ListItem>);
    expect(wrapper.exists('li[title="random title"]')).toEqual(true);
  });
});
