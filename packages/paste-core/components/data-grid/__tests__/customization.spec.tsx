import { render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { customElementStyles } from '../stories/components/CustomizableDataGrid';
import { PlainDataGrid } from '../stories/components/PlainDataGrid';

describe('Data Grid Customization', () => {
  it('can be customized generically', () => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={customElementStyles()}>
        <PlainDataGrid />
      </CustomizationProvider>,
    );
    const datagrid = getByTestId('data-grid');
    const datagridHead = getByTestId('data-grid-head');
    const datagridHeader = getByTestId('data-grid-header');
    const datagridBody = getByTestId('data-grid-body');
    const datagridFoot = getByTestId('data-grid-foot');
    const datagridRow = getByTestId('data-grid-row');
    const datagridCell = getByTestId('data-grid-cell');

    // data-element atttributes
    expect(datagrid.getAttribute('data-paste-element')).toBe('DATA_GRID');
    expect(datagridHead.getAttribute('data-paste-element')).toBe('DATA_GRID_HEAD');
    expect(datagridHeader.getAttribute('data-paste-element')).toBe('DATA_GRID_HEADER');
    expect(datagridBody.getAttribute('data-paste-element')).toBe('DATA_GRID_BODY');
    expect(datagridFoot.getAttribute('data-paste-element')).toBe('DATA_GRID_FOOT');
    expect(datagridRow.getAttribute('data-paste-element')).toBe('DATA_GRID_ROW');
    expect(datagridCell.getAttribute('data-paste-element')).toBe('DATA_GRID_CELL');

    // Style overrides
    expect(datagridRow).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagrid).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagrid).toHaveStyleRule('font-size', '0.75rem');
    expect(datagridHead).toHaveStyleRule('font-weight', '600');
    expect(datagridHead).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(datagridHead).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagridFoot).toHaveStyleRule('font-weight', '600');
    expect(datagridFoot).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(datagridFoot).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagridHeader).toHaveStyleRule('padding', '0.125rem');
    expect(datagridCell).toHaveStyleRule('padding', '0.125rem');
  });

  it('can be customized uniquely', () => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={customElementStyles('FOO')}>
        <PlainDataGrid element="FOO" />
      </CustomizationProvider>,
    );

    const datagrid = getByTestId('data-grid');
    const datagridHead = getByTestId('data-grid-head');
    const datagridHeader = getByTestId('data-grid-header');
    const datagridBody = getByTestId('data-grid-body');
    const datagridFoot = getByTestId('data-grid-foot');
    const datagridRow = getByTestId('data-grid-row');
    const datagridCell = getByTestId('data-grid-cell');

    // data-element atttributes
    expect(datagrid.getAttribute('data-paste-element')).toBe('FOO');
    expect(datagridHead.getAttribute('data-paste-element')).toBe('FOO_HEAD');
    expect(datagridHeader.getAttribute('data-paste-element')).toBe('FOO_HEADER');
    expect(datagridBody.getAttribute('data-paste-element')).toBe('FOO_BODY');
    expect(datagridFoot.getAttribute('data-paste-element')).toBe('FOO_FOOT');
    expect(datagridRow.getAttribute('data-paste-element')).toBe('FOO_ROW');
    expect(datagridCell.getAttribute('data-paste-element')).toBe('FOO_CELL');

    // Style overrides
    expect(datagridRow).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagrid).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagrid).toHaveStyleRule('font-size', '0.75rem');
    expect(datagridHead).toHaveStyleRule('font-weight', '600');
    expect(datagridHead).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(datagridHead).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagridFoot).toHaveStyleRule('font-weight', '600');
    expect(datagridFoot).toHaveStyleRule('background-color', 'rgb(225, 227, 234)');
    expect(datagridFoot).toHaveStyleRule('border-color', 'rgb(96, 107, 133)');
    expect(datagridHeader).toHaveStyleRule('padding', '0.125rem');
    expect(datagridCell).toHaveStyleRule('padding', '0.125rem');
  });
});
