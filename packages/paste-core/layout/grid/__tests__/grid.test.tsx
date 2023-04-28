import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Column, Grid} from '../src';
import {getColumnStyles} from '../src/Column';
import {
  getColumnOffset,
  getColumnSpan,
  getOuterGutterPull,
  getStackedColumns,
  getSpacing,
  getResponsiveSpacing,
} from '../src/utils';

describe('Grid', () => {
  const BASE_PADDING = {
    paddingBottom: 'space0',
    paddingLeft: 'space0',
    paddingRight: 'space0',
    paddingTop: 'space0',
  };
  const BASE_MARGIN = {
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
  };
  describe('Utils', () => {
    describe('getSpacing', () => {
      it('should return the correct spacing when vertical is true and the prefix is "margin"', () => {
        expect(getSpacing(true, 'margin', 'space20')).toEqual({
          ...BASE_MARGIN,
          marginTop: 'space20',
          marginBottom: 'space20',
        });
      });

      it('should return the correct spacing when vertical is true and the prefix is "padding"', () => {
        expect(getSpacing(true, 'padding', 'space20')).toEqual({
          ...BASE_PADDING,
          paddingTop: 'space20',
          paddingBottom: 'space20',
        });
      });

      it('should return the correct spacing when vertical is false and the prefix is "margin"', () => {
        expect(getSpacing(false, 'margin', 'space20')).toEqual({
          ...BASE_MARGIN,
          marginRight: 'space20',
          marginLeft: 'space20',
        });
      });

      it('should return the correct spacing when vertical is false and the prefix is "padding"', () => {
        expect(getSpacing(false, 'padding', 'space20')).toEqual({
          ...BASE_PADDING,
          paddingRight: 'space20',
          paddingLeft: 'space20',
        });
      });

      it('should return the default spacing whenever spacing is undefined', () => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        expect(getSpacing(true, 'padding', undefined)).toEqual({
          ...BASE_PADDING,
        });

        // eslint-disable-next-line unicorn/no-useless-undefined
        expect(getSpacing(true, 'margin', undefined)).toEqual({
          ...BASE_MARGIN,
        });
      });
    });

    describe('getResponsiveSpacing', () => {
      it('should return the default responsive spacing if spacing is undefined', () => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        expect(getResponsiveSpacing([true, true, false], 'margin', undefined)).toEqual({
          marginTop: ['auto', 'auto', 'auto'],
          marginBottom: ['auto', 'auto', 'auto'],
          marginLeft: ['auto', 'auto', 'auto'],
          marginRight: ['auto', 'auto', 'auto'],
        });
        // eslint-disable-next-line unicorn/no-useless-undefined
        expect(getResponsiveSpacing([true, true, false], 'padding', undefined)).toEqual({
          paddingTop: ['space0', 'space0', 'space0'],
          paddingBottom: ['space0', 'space0', 'space0'],
          paddingLeft: ['space0', 'space0', 'space0'],
          paddingRight: ['space0', 'space0', 'space0'],
        });
      });

      it('should return the correct responsive spacing if spacing is a single token', () => {
        expect(getResponsiveSpacing([true, true, false], 'margin', 'space20')).toEqual({
          marginTop: ['space20', 'space20', 'auto'],
          marginBottom: ['space20', 'space20', 'auto'],
          marginLeft: ['auto', 'auto', 'space20'],
          marginRight: ['auto', 'auto', 'space20'],
        });

        expect(getResponsiveSpacing([true, true, false], 'padding', 'space20')).toEqual({
          paddingTop: ['space20', 'space20', 'space0'],
          paddingBottom: ['space20', 'space20', 'space0'],
          paddingLeft: ['space0', 'space0', 'space20'],
          paddingRight: ['space0', 'space0', 'space20'],
        });
      });

      it('should return the correct responsive spacing if spacing is a responsive array', () => {
        expect(getResponsiveSpacing([true, true, false], 'margin', ['space10', 'space40', 'space80'])).toEqual({
          marginTop: ['space10', 'space40', 'auto'],
          marginBottom: ['space10', 'space40', 'auto'],
          marginLeft: ['auto', 'auto', 'space80'],
          marginRight: ['auto', 'auto', 'space80'],
        });

        expect(getResponsiveSpacing([true, true, false], 'padding', ['space10', 'space40', 'space80'])).toEqual({
          paddingTop: ['space10', 'space40', 'space0'],
          paddingBottom: ['space10', 'space40', 'space0'],
          paddingLeft: ['space0', 'space0', 'space80'],
          paddingRight: ['space0', 'space0', 'space80'],
        });
      });
    });

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
      it('should return correct column padding when passed a gutter', () => {
        expect(getColumnStyles({gutter: 'space20'})).toEqual({
          ...BASE_PADDING,
          paddingLeft: 'space20',
          paddingRight: 'space20',
          width: '8.333333333333332%',
        });
      });

      it('should return correct column padding when passed a gutter and vertical is true', () => {
        expect(getColumnStyles({gutter: 'space20', vertical: true})).toEqual({
          ...BASE_PADDING,
          marginLeft: 'space0',
          minWidth: '100%',
          paddingBottom: 'space20',
          paddingTop: 'space20',
          width: '8.333333333333332%',
        });
      });

      it('should return correct column padding when passed no gutter and vertical is true', () => {
        expect(getColumnStyles({vertical: true})).toEqual({
          ...BASE_PADDING,
          marginLeft: 'space0',
          minWidth: '100%',
          width: '8.333333333333332%',
        });
      });

      it('should return correct column padding when passed a gutter and vertical is a responsive array value', () => {
        expect(getColumnStyles({gutter: 'space20', vertical: [true, true, false]})).toEqual({
          marginLeft: 'space0',
          minWidth: ['100%', '100%', '0'],
          paddingBottom: ['space20', 'space20', 'space0'],
          paddingLeft: ['space0', 'space0', 'space20'],
          paddingRight: ['space0', 'space0', 'space20'],
          paddingTop: ['space20', 'space20', 'space0'],
          width: '8.333333333333332%',
        });
      });

      it('should return correct column padding when passed a responsive array value for gutter and vertical', () => {
        expect(getColumnStyles({gutter: ['space10', 'space30', 'space60'], vertical: [true, true, false]})).toEqual({
          marginLeft: 'space0',
          minWidth: ['100%', '100%', '0'],
          paddingBottom: ['space10', 'space30', 'space0'],
          paddingLeft: ['space0', 'space0', 'space60'],
          paddingRight: ['space0', 'space0', 'space60'],
          paddingTop: ['space10', 'space30', 'space0'],
          width: '8.333333333333332%',
        });
      });

      it('should return column margin left when passed a column offset based on size of offset', () => {
        expect(getColumnStyles({offset: 2})).toEqual({
          ...BASE_PADDING,
          marginLeft: '16.666666666666664%',
          width: '8.333333333333332%',
        });
        expect(getColumnStyles({offset: 6})).toEqual({
          ...BASE_PADDING,
          marginLeft: '50%',
          width: '8.333333333333332%',
        });
      });

      it('should set 100% width and zero offset when a column is vertical', () => {
        expect(getColumnStyles({vertical: true, offset: 4})).toEqual({
          ...BASE_PADDING,
          marginLeft: '33.33333333333333%',
          width: '8.333333333333332%',
        });
        expect(getColumnStyles({vertical: true})).toEqual({
          ...BASE_PADDING,
          marginLeft: 'space0',
          minWidth: '100%',
          width: '8.333333333333332%',
        });
      });

      it('should set the column to stretch content and display flex when setting stretch column content', () => {
        expect(getColumnStyles({stretchColumnContent: true})).toEqual({
          ...BASE_PADDING,
          alignContent: 'stretch',
          display: 'flex',
          width: '8.333333333333332%',
        });
      });
    });
  });

  describe('render', () => {
    it('should render a Grid as any HTML element', () => {
      render(
        <>
          <Grid as="section" data-testid="grid-container">
            child
          </Grid>
          <Grid as="span" data-testid="grid-container-2">
            child
          </Grid>
        </>
      );
      expect(screen.getByTestId('grid-container').tagName).toBe('SECTION');
      expect(screen.getByTestId('grid-container-2').tagName).toBe('SPAN');
    });

    it('should render responsive css', () => {
      render(
        <Grid gutter={['space10', 'space20', 'space30']} vertical={[true, true, false]} data-testid="grid">
          <Column span={[2, 4, 2]} offset={[8, 6, 8]} data-testid="column" />
        </Grid>
      );
      const renderedGrid = screen.getByTestId('grid');
      const renderedColumn = screen.getByTestId('column');

      // responsive gutters on grid
      expect(renderedGrid).toHaveStyleRule('margin-right', 'auto');
      expect(renderedGrid).toHaveStyleRule('margin-left', 'auto');
      expect(renderedGrid).toHaveStyleRule('margin-right', 'auto', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedGrid).toHaveStyleRule('margin-left', 'auto', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedGrid).toHaveStyleRule('margin-right', 'spaceNegative30', {
        media: 'screen and (min-width:52em)',
      });
      expect(renderedGrid).toHaveStyleRule('margin-left', 'spaceNegative30', {
        media: 'screen and (min-width:52em)',
      });
      // responsive orientation on grid
      expect(renderedGrid).toHaveStyleRule('flex-direction', 'column');
      expect(renderedGrid).toHaveStyleRule('flex-direction', 'column', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedGrid).toHaveStyleRule('flex-direction', 'row', {
        media: 'screen and (min-width:52em)',
      });

      // responsive gutters on column
      expect(renderedColumn).toHaveStyleRule('padding-left', 'space0');
      expect(renderedColumn).toHaveStyleRule('padding-right', 'space0');
      expect(renderedColumn).toHaveStyleRule('padding-top', 'space10');
      expect(renderedColumn).toHaveStyleRule('padding-bottom', 'space10');
      expect(renderedColumn).toHaveStyleRule('padding-left', 'space0', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-right', 'space0', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-top', 'space20', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-bottom', 'space20', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-left', 'space30', {
        media: 'screen and (min-width:52em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-right', 'space30', {
        media: 'screen and (min-width:52em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-top', 'space0', {
        media: 'screen and (min-width:52em)',
      });
      expect(renderedColumn).toHaveStyleRule('padding-bottom', 'space0', {
        media: 'screen and (min-width:52em)',
      });

      // responsive offset on column
      expect(renderedColumn).toHaveStyleRule('margin-left', '66.66666666666666%');
      expect(renderedColumn).toHaveStyleRule('margin-left', '50%', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('margin-left', '66.66666666666666%', {
        media: 'screen and (min-width:52em)',
      });
      // responsive width on column
      expect(renderedColumn).toHaveStyleRule('width', '16.666666666666664%');
      expect(renderedColumn).toHaveStyleRule('width', '33.33333333333333%', {
        media: 'screen and (min-width:40em)',
      });
      expect(renderedColumn).toHaveStyleRule('width', '16.666666666666664%', {
        media: 'screen and (min-width:52em)',
      });
    });
  });

  describe('HTML attributes', () => {
    it('should set a element data attribute for Grid', () => {
      render(<Grid>grid</Grid>);
      expect(screen.getByText('grid').getAttribute('data-paste-element')).toEqual('GRID');
    });
    it('should set a custom element data attribute for Grid', () => {
      render(<Grid element="foo">grid</Grid>);
      expect(screen.getByText('grid').getAttribute('data-paste-element')).toEqual('foo');
    });
    it('should set a element data attribute for Column', () => {
      render(<Column>column</Column>);
      expect(screen.getByText('column').getAttribute('data-paste-element')).toEqual('COLUMN');
    });
    it('should set a custom element data attribute for Column', () => {
      render(<Column element="foo">column</Column>);
      expect(screen.getByText('column').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to Grid', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{GRID: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Grid data-testid="customizable-grid">Custom grid</Grid>
        </CustomizationProvider>
      );
      const renderedBox = screen.getByTestId('customizable-grid');
      expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to Grid with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{foo: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Grid element="foo" data-testid="customizable-grid">
            Custom grid
          </Grid>
        </CustomizationProvider>
      );
      const renderedBox = screen.getByTestId('customizable-grid');
      expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to Column', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{COLUMN: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Column data-testid="customizable-column">Custom column</Column>
        </CustomizationProvider>
      );
      const renderedBox = screen.getByTestId('customizable-column');
      expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to Column with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{foo: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Column element="foo" data-testid="customizable-column">
            Custom column
          </Column>
        </CustomizationProvider>
      );
      const renderedBox = screen.getByTestId('customizable-column');
      expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });
  });
});
