import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {
  Flex,
  getGrow,
  getShrink,
  getBasis,
  getSuffix,
  getVertical,
  getWrap,
  vAlignToProps,
  hAlignToProps,
} from '../src';

describe('Flex Unit Tests', () => {
  it('it should return grow: 1', (): void => {
    const mockGrow = {
      grow: 1,
    };
    expect(getGrow(mockGrow)).toStrictEqual(1);
  });

  it('it should return grow: 1, 1, 0', (): void => {
    const mockGrow = {
      grow: [true, 1, 0],
    };
    expect(getGrow(mockGrow)).toStrictEqual([1, 1, 0]);
  });

  it('it should return shrink: 1', (): void => {
    const mockShrink = {
      shrink: 1,
    };
    expect(getShrink(mockShrink)).toStrictEqual(1);
  });

  it('it should return shrink: 1, 1, 0', (): void => {
    const mockShrink = {
      shrink: [true, 1, 0],
    };
    expect(getShrink(mockShrink)).toStrictEqual([1, 1, 0]);
  });

  it('it should return basis: 400px', (): void => {
    const mockBasis = {
      basis: '400px',
    };
    expect(getBasis(mockBasis)).toStrictEqual('400px');
  });

  it('it should return basis: 400px - number method', (): void => {
    const mockBasis = {
      basis: 400,
    };
    expect(getBasis(mockBasis)).toStrictEqual('400px');
  });

  it('it should return basis: 400rem', (): void => {
    const mockBasis = {
      basis: '400rem',
    };
    expect(getBasis(mockBasis)).toStrictEqual('400rem');
  });

  it('it should return basis: 100%', (): void => {
    const mockBasis = {
      basis: '100%',
    };
    expect(getBasis(mockBasis)).toStrictEqual('100%');
  });

  it('it should return basis: 400px, 100%, 200rem', (): void => {
    const mockBasis = {
      basis: [400, '100%', '200rem'],
    };
    expect(getBasis(mockBasis)).toStrictEqual(['400px', '100%', '200rem']);
  });

  it('it should return 400px (getSuffix)', (): void => {
    const mockValue = '400px';
    expect(getSuffix(mockValue)).toStrictEqual('400px');
  });

  it('it should return 400px (getSuffix - number method)', (): void => {
    const mockValue = 400;
    expect(getSuffix(mockValue)).toStrictEqual('400px');
  });

  it('it should return vertical: column', (): void => {
    const mockVertical = {
      vertical: true,
    };
    expect(getVertical(mockVertical)).toStrictEqual('column');
  });

  it('it should return vertical: row', (): void => {
    const mockVertical = {
      vertical: false,
    };
    expect(getVertical(mockVertical)).toStrictEqual('row');
  });

  it('it should return vertical: column, row, row', (): void => {
    const mockVertical = {
      vertical: [true, false, false],
    };
    expect(getVertical(mockVertical)).toStrictEqual(['column', 'row', 'row']);
  });

  it('it should return wrap: wrap', (): void => {
    const mockWrap = {
      wrap: true,
    };
    expect(getWrap(mockWrap)).toStrictEqual('wrap');
  });

  it('it should return wrap: nowrap', (): void => {
    const mockWrap = {
      wrap: false,
    };
    expect(getWrap(mockWrap)).toStrictEqual('nowrap');
  });

  it('it should return wrap: nowrap, wrap, wrap', (): void => {
    const mockWrap = {
      wrap: [false, true, true],
    };
    expect(getWrap(mockWrap)).toStrictEqual(['nowrap', 'wrap', 'wrap']);
  });

  it('it should return vAlignContent: flex-start', (): void => {
    const mockVerticalAlign: {} = {
      vAlignContent: 'top',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('flex-start');
  });

  it('it should return vAlignContent: center', (): void => {
    const mockVerticalAlign: {} = {
      vAlignContent: 'center',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('center');
  });

  it('it should return vAlignContent: flex-end', (): void => {
    const mockVerticalAlign: {} = {
      vAlignContent: 'bottom',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('flex-end');
  });

  it('it should return vAlignContent: stretch', (): void => {
    const mockVerticalAlign: {} = {
      vAlignContent: 'stretch',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('stretch');
  });

  it('it should return hAlignContent: flex-start', (): void => {
    const mockHorizontalAlign: {} = {
      hAlignContent: 'left',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('flex-start');
  });

  it('it should return hAlignContent: center', (): void => {
    const mockHorizontalAlign: {} = {
      hAlignContent: 'center',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('center');
  });

  it('it should return hAlignContent: flex-end', (): void => {
    const mockHorizontalAlign: {} = {
      hAlignContent: 'right',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('flex-end');
  });

  it('it should return hAlignContent: space-around', (): void => {
    const mockHorizontalAlign: {} = {
      hAlignContent: 'around',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('space-around');
  });

  it('it should return hAlignContent: space-between', (): void => {
    const mockHorizontalAlign: {} = {
      hAlignContent: 'between',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('space-between');
  });
});

describe('Flex Display', () => {
  it('it should set a display: flex property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex>
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
        <Theme.Provider theme="console">
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
        <Theme.Provider theme="console">
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
        <Theme.Provider theme="console">
          <Flex basis={400}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive flex-grow property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex grow={[true, false, 1]}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive flex-shrink property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex grow shrink={[true, false, 1]}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive flex-basis property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex basis={[400, 100, 200]}>
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
        <Theme.Provider theme="console">
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

  it('it should set a responsive flex-direction property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex display="flex" vertical={[true, false, false]}>
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
        <Theme.Provider theme="console">
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

  it('it should set a responsive flex-wrap property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex display="flex" wrap={[true, true, false]}>
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
        <Theme.Provider theme="console">
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

  it('it should set a responvise align-items property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex display="flex" vAlignContent={['top', 'center', 'bottom']}>
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
        <Theme.Provider theme="console">
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

  it('it should set a responsive justify-content property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Flex display="flex" hAlignContent={['left', 'center', 'right']}>
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
