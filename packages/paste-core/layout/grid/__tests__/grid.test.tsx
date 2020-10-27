import * as React from 'react';
import {render} from '@testing-library/react';
import {Grid, Column} from '../src';
import {getOuterGutterPull, getStackedColumns, getColumnOffset, getColumnSpan} from '../src/utils';
import {getColumnStyles} from '../src/Column';

describe('Grid', () => {
  describe('Utils', () => {
    describe('getOuterGutterPull', () => {
      it('should return a negative token value', () => {
        expect(getOuterGutterPull('space20')).toEqual('spaceNegative20');
      });

      it('should return space0', () => {
        expect(getOuterGutterPull('space0')).toEqual('space0');
      });

      it('should return responsive negative token values', () => {
        expect(getOuterGutterPull(['space0', 'space30', 'space20'])).toEqual([
          'space0',
          'spaceNegative30',
          'spaceNegative20',
        ]);
      });
    });

    describe('getStackedColumns', () => {
      it('should return a vertical value of 100%', () => {
        expect(getStackedColumns(true)).toEqual('100%');
      });

      it('should return responsive vertical values of 100%, 0, 100%', () => {
        expect(getStackedColumns([true, false, true])).toEqual(['100%', '0', '100%']);
      });
    });

    describe('getColumnOffset', () => {
      it('should return an offset value of 16.666666666666664%', () => {
        expect(getColumnOffset(2)).toEqual('16.666666666666664%');
      });

      it('should return responsive offsets values of 16.666666666666664%, 25%, 50%', () => {
        expect(getColumnOffset([2, 3, 6])).toEqual(['16.666666666666664%', '25%', '50%']);
      });
    });

    describe('getColumnSpan', () => {
      it('should return a span value of 50%', (): void => {
        expect(
          getColumnSpan({
            count: 12,
            span: 6,
          })
        ).toEqual('50%');
      });

      it('should return a span value of 25%', (): void => {
        expect(
          getColumnSpan({
            count: 12,
            span: 3,
          })
        ).toEqual('25%');
      });

      it('should return a span value of 33.33333333333333%', (): void => {
        expect(
          getColumnSpan({
            count: 3,
          })
        ).toEqual('33.33333333333333%');
      });

      it('should return a span value of 8.333333333333332%', (): void => {
        expect(
          getColumnSpan({
            count: 12,
          })
        ).toEqual('8.333333333333332%');
      });

      it('should return the default span value of 8.333333333333332%', (): void => {
        expect(
          getColumnSpan({
            span: null,
          })
        ).toEqual('8.333333333333332%');
      });

      it('should return responsive span values of 25%, 50%, 25%', (): void => {
        expect(
          getColumnSpan({
            count: 12,
            span: [3, 6, 3],
          })
        ).toEqual(['25%', '50%', '25%']);
      });
    });
  });

  describe('Column', () => {
    describe('getColumnStyles', () => {
      it('should return column padding when passed a gutter', () => {
        expect(getColumnStyles({gutter: 'space20'})).toEqual({
          paddingLeft: 'space20',
          paddingRight: 'space20',
          width: '8.333333333333332%',
        });
      });

      it('should return column margin left when passed a column offset based on size of offset', () => {
        expect(getColumnStyles({offset: 2})).toEqual({
          marginLeft: '16.666666666666664%',
          width: '8.333333333333332%',
        });
        expect(getColumnStyles({offset: 6})).toEqual({
          marginLeft: '50%',
          width: '8.333333333333332%',
        });
      });

      it('should set 100% width and zero offset when a column is vertical', () => {
        expect(getColumnStyles({vertical: true, offset: 4})).toEqual({
          marginLeft: '33.33333333333333%',
          width: '8.333333333333332%',
        });
        expect(getColumnStyles({vertical: true})).toEqual({
          marginLeft: 'space0',
          minWidth: '100%',
          width: '8.333333333333332%',
        });
      });

      it('should set the column to stretch content and display flex when setting stretch column content', () => {
        expect(getColumnStyles({stretchColumnContent: true})).toEqual({
          alignContent: 'stretch',
          display: 'flex',
          width: '8.333333333333332%',
        });
      });
    });
  });

  describe('render', () => {
    it('it should render a Grid', () => {
      const {asFragment} = render(<Grid>child</Grid>);
      expect(asFragment()).toMatchSnapshot();
    });

    it('it should render a Grid as any HTML element', () => {
      const {asFragment} = render(<Grid as="section">child</Grid>);
      expect(asFragment()).toMatchSnapshot();
    });

    it('it should render a Column', () => {
      const {asFragment} = render(<Column>child</Column>);
      expect(asFragment()).toMatchSnapshot();
    });

    it('it should render responsive css', () => {
      const {asFragment} = render(
        <Grid gutter={['space10', 'space20', 'space30']} vertical={[true, true, false]}>
          <Column span={[2, 4, 2]} offset={[8, 6, 8]} />
          <Column />
        </Grid>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
