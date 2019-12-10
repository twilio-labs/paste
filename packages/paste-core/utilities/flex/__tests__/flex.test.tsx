import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {shallow, ReactWrapper, mount} from 'enzyme';
import {Flex} from '../src';

describe('Flex Display', () => {
  it('it should set a display: flex property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a display: inline-flex property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="inline-flex">
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flex Options', () => {
  it('it should set a flex-grow property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex grow>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a flex-shrink property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex grow shrink>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a flex-basis property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex basis={400}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flex Row', () => {
  it('it should not set a flex-direction property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a flex-direction: column property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" vertical>
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flex Wrap', () => {
  it('it should not set a flex-wrap property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a flex-wrap: wrap property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" wrap>
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Vertical Alignment', () => {
  it('it should set a align-items: flex-start property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" vAlignContent="top">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a align-items: center property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" vAlignContent="center">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a align-items: flex-end property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" vAlignContent="bottom">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a align-items: stretch property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" vAlignContent="stretch">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Horizontal Alignment', () => {
  it('it should set a justify-content: flex-start property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" hAlignContent="left">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a justify-content: center property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" hAlignContent="center">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a justify-content: flex-end property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" hAlignContent="right">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a justify-content: space-around property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" hAlignContent="around">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a justify-content: space-between property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Flex display="flex" hAlignContent="between">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
