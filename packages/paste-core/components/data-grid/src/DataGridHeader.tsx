import * as React from 'react';

import {DataGridCell} from './DataGridCell';
import type {ThProps} from './table/Th';

/**
 * DataGrid header (th) component.
 * Just a wrapper around the DataGridCell.
 *
 * @param {string} [element=DATA_GRID_HEADER] - customization element
 * @param {number} [colSpan] - how many columns the cell spans across
 */
export const DataGridHeader: React.FC<React.PropsWithChildren<ThProps>> = ({
  element = 'DATA_GRID_HEADER',
  ...props
}) => {
  return <DataGridCell element={element} {...props} as="th" />;
};

DataGridHeader.displayName = 'DataGridHeader';
