import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {ReactWrapper, mount} from 'enzyme';
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

  it('should filter out styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <OrderedList margin="space40">Children</OrderedList>
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

  it('should filter out styling props', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <UnorderedList textColor="textColorSuccess">Children</UnorderedList>
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
