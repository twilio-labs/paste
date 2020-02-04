import * as React from 'react';
import renderer from 'react-test-renderer';
import {DefaultTheme} from '@twilio-paste/theme-tokens';
import {Theme} from '@twilio-paste/theme';
import {Space} from '@twilio-paste/style-props';
import {Grid, Column} from '../src';
import {getOuterGutterPull, getStackedColumns, getColumnOffset, getColumnSpan} from '../src/helpers';

describe('Grid Unit Tests', () => {
  it('it should return: -0.25rem', (): void => {
    const mockGutter: Space = 'space20';
    expect(getOuterGutterPull(DefaultTheme, mockGutter)).toStrictEqual('-0.25rem');
  });

  it('it should return: -0.25rem, -0.5rem, -0.75rem', (): void => {
    const mockGutter: Space = ['space20', 'space30', 'space40'];
    expect(getOuterGutterPull(DefaultTheme, mockGutter)).toStrictEqual(['-0.25rem', '-0.5rem', '-0.75rem']);
  });

  it('it should return vertical: 0', (): void => {
    const mockVertical = false;
    expect(getStackedColumns(mockVertical)).toStrictEqual('0');
  });

  it('it should return vertical: 100%', (): void => {
    const mockVertical = true;
    expect(getStackedColumns(mockVertical)).toStrictEqual('100%');
  });

  it('it should return vertical: 100%, 0, 100%', (): void => {
    const mockVertical = [true, false, true];
    expect(getStackedColumns(mockVertical)).toStrictEqual(['100%', '0', '100%']);
  });

  it('it should return vertical: null, null, null', (): void => {
    const mockVertical = ['test', 'test', 'test'];
    expect(getStackedColumns(mockVertical)).toStrictEqual([null, null, null]);
  });

  it('it should return offset: 16.666666666666664%', (): void => {
    const mockOffset = 2;
    expect(getColumnOffset(mockOffset)).toStrictEqual('16.666666666666664%');
  });

  it('it should return offset: 16.666666666666664%, 25%, 50%', (): void => {
    const mockOffset = [2, 3, 6];
    expect(getColumnOffset(mockOffset)).toStrictEqual(['16.666666666666664%', '25%', '50%']);
  });

  it('it should return span: 50%', (): void => {
    const mockSpan = {
      count: 12,
      span: 6,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('50%');
  });

  it('it should return span: 25%', (): void => {
    const mockSpan = {
      count: 12,
      span: 3,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('25%');
  });

  it('it should return span: 33.33333333333333%', (): void => {
    const mockSpan = {
      count: 3,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('33.33333333333333%');
  });

  it('it should return span: 8.333333333333332%', (): void => {
    const mockSpan = {
      count: 12,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('8.333333333333332%');
  });

  it('it should return span: 8.333333333333332% (null span)', (): void => {
    const mockSpan = {
      span: null,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('8.333333333333332%');
  });

  it('it should return span: 25%, 50%, 25%', (): void => {
    const mockSpan = {
      count: 12,
      span: [3, 6, 3],
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual(['25%', '50%', '25%']);
  });
});

describe('Grid Gutter Prop', () => {
  it('it should set a gutter property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid gutter="space20">
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive gutter property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid gutter={['space10', 'space20', 'space30']}>
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Grid Vertical Prop', () => {
  it('it should set a vertical property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid vertical>
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive vertical property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid vertical={[true, true, false]}>
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Column Offset Prop', () => {
  it('it should set a offset property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={2} offset={8} />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive offset property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={[2, 4, 2]} offset={[8, 6, 8]} />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Column Span Prop', () => {
  it('it should set a span property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={8} />
            <Column span={4} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should set a responsive span property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={[8, 4, 2]} />
            <Column span={[4, 8, 10]} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('12 Column Options', () => {
  it('it should render a 12 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 1 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 2 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 3 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 4 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
            <Column />
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 6 column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 5 span, 5 span, 2 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={5} />
            <Column span={5} />
            <Column span={2} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 6 span, 6 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={6} />
            <Column span={6} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 8 span, 4 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={8} />
            <Column span={4} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 9 span, 3 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={9} />
            <Column span={3} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 10 span, 2 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={10} />
            <Column span={2} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 11 span, 1 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={11} />
            <Column span={1} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 11 span, 2 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={11} />
            <Column span={2} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render a 5 span, 3 span column grid', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>
            <Column span={5} />
            <Column span={3} />
          </Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
