import * as React from 'react';
import renderer from 'react-test-renderer';
import {ReactWrapper, mount} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {MediaObject, MediaFigure, MediaBody} from '../src';

describe('MediaObject', () => {
  it('should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaObject>default</MediaObject>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with center aligned children', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaObject verticalAlign="center">center align</MediaObject>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as another HTML element', (): void => {
    const wrapper: ReactWrapper = mount(<MediaObject as="section">background single</MediaObject>);
    expect(wrapper.exists('section')).toEqual(true);

    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaObject as="section">background single</MediaObject>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render bottom margin', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaObject marginBottom="space40">background single</MediaObject>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render top margin', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaObject marginTop="space40">background single</MediaObject>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MediaFigure', () => {
  it('should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaFigure>default</MediaFigure>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as any HTML element', (): void => {
    const wrapper: ReactWrapper = mount(<MediaFigure as="a">default</MediaFigure>);
    expect(wrapper.exists('a')).toEqual(true);

    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaFigure as="a">default</MediaFigure>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with spacing on the right for default alignment', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaFigure spacing="space40">center align</MediaFigure>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with spacing on the left for end alignment', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaFigure align="end" spacing="space40">
            center align
          </MediaFigure>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MediaBody', () => {
  it('should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaBody>default</MediaBody>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as any HTML element', (): void => {
    const wrapper: ReactWrapper = mount(<MediaBody as="article">default</MediaBody>);
    expect(wrapper.exists('article')).toEqual(true);

    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <MediaBody as="article">default</MediaBody>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
