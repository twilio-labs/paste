import * as React from 'react';
import renderer from 'react-test-renderer';
import {ReactWrapper, mount} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {Grid, Column} from '../src';
import {getOuterGutterPull, getStackedColumns, getColumnGutters, getColumnOffset, getColumnSpan} from '../src/helpers';

describe('Grid Unit Tests', () => {
  const mockTheme = {
    space: {
      space10: '2px',
      space20: '4px',
      space30: '6px',
      space40: '8px',
    },
  };
  const mockGutter = 'space20';
  const mockGutters = ['space10', 'space30', 'space20'];

  it('it should return a single negative margin', (): void => {
    expect(getOuterGutterPull(mockTheme, mockGutter)).toStrictEqual('-4px');
  });

  it('it should return a responsive set of negative margin values', (): void => {
    expect(getOuterGutterPull(mockTheme, mockGutters)).toStrictEqual(['-2px', '-6px', '-4px']);
  });

  it('it should return a single padding', (): void => {
    expect(getColumnGutters(mockTheme, mockGutter)).toStrictEqual('4px');
  });

  it('it should return a responsive set of padding values', (): void => {
    expect(getColumnGutters(mockTheme, mockGutters)).toStrictEqual(['2px', '6px', '4px']);
  });

  it('it should return a vertical value of 0', (): void => {
    const mockVertical = false;
    expect(getStackedColumns(mockVertical)).toStrictEqual('0');
  });

  it('it should return a vertical value of 100%', (): void => {
    const mockVertical = true;
    expect(getStackedColumns(mockVertical)).toStrictEqual('100%');
  });

  it('it should return responsive vertical values of 100%, 0, 100%', (): void => {
    const mockVertical = [true, false, true];
    expect(getStackedColumns(mockVertical)).toStrictEqual(['100%', '0', '100%']);
  });

  it('it should return responsive vertical values of null, null, null', (): void => {
    const mockVertical = ['test', 'test', 'test'];
    expect(getStackedColumns(mockVertical)).toStrictEqual([null, null, null]);
  });

  it('it should return an offset value of 16.666666666666664%', (): void => {
    const mockOffset = 2;
    expect(getColumnOffset(mockOffset)).toStrictEqual('16.666666666666664%');
  });

  it('it should return responsive offsets values of 16.666666666666664%, 25%, 50%', (): void => {
    const mockOffset = [2, 3, 6];
    expect(getColumnOffset(mockOffset)).toStrictEqual(['16.666666666666664%', '25%', '50%']);
  });

  it('it should return a span value of 50%', (): void => {
    const mockSpan = {
      count: 12,
      span: 6,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('50%');
  });

  it('it should return a span value of 25%', (): void => {
    const mockSpan = {
      count: 12,
      span: 3,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('25%');
  });

  it('it should return a span value of 33.33333333333333%', (): void => {
    const mockSpan = {
      count: 3,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('33.33333333333333%');
  });

  it('it should return a span value of 8.333333333333332%', (): void => {
    const mockSpan = {
      count: 12,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('8.333333333333332%');
  });

  it('it should return the default span value of 8.333333333333332%', (): void => {
    const mockSpan = {
      span: null,
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual('8.333333333333332%');
  });

  it('it should return responsive span values of 25%, 50%, 25%', (): void => {
    const mockSpan = {
      count: 12,
      span: [3, 6, 3],
    };
    expect(getColumnSpan(mockSpan)).toStrictEqual(['25%', '50%', '25%']);
  });
});

describe('Grid render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid>child</Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render as any HTML element', (): void => {
    const wrapper: ReactWrapper = mount(<Grid as="section">child</Grid>);
    expect(wrapper.exists('section')).toEqual(true);

    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Grid as="section">child</Grid>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Column render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Column>child</Column>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render as any HTML element', (): void => {
    const wrapper: ReactWrapper = mount(<Column as="article">child</Column>);
    expect(wrapper.exists('article')).toEqual(true);

    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Column as="article">child</Column>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Grid Gutter Prop', () => {
  it('it should render two columns with gutters', (): void => {
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

  it('it should render two columns with responsive gutters', (): void => {
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
  it('it should render two stacked columns', (): void => {
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

  it('it should render two columns stacked only on mobile and tablet', (): void => {
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
  it('it should render two columns, one with a offset', (): void => {
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

  it('it should render two columns, one with a responsive offset', (): void => {
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
  it('it should render two columns, one spaning 8 columns, the other spanning 4 columns', (): void => {
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

  it('it should render two columns with different responsive column spans', (): void => {
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
  it('it should render a grid with 12 columns', (): void => {
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

  it('it should render a grid with 1 column', (): void => {
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

  it('it should render a grid with 2 columns', (): void => {
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

  it('it should render a grid with 3 columns', (): void => {
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

  it('it should render a grid with 4 columns', (): void => {
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

  it('it should render a grid with 6 columns', (): void => {
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
