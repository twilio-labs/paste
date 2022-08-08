import * as React from 'react';
import * as PropTypes from 'prop-types';
import {DataGridCell, DataGridCellProps} from './DataGridCell';
import type {ThProps} from './table/Th';

type DataGridHeaderProps = ThProps & Omit<DataGridCellProps, 'as'>;

/**
 * DataGrid header (th) component.
 * Just a wrapper around the DataGridCell.
 *
 * @param {string} element - customization element
 * @param {number} colspan - how many columns the cell spans across
 */
export const DataGridHeader: React.FC<DataGridHeaderProps> = ({element = 'DATA_GRID_HEADER', ...props}) => {
  return <DataGridCell element={element} {...props} as="th" />;
};

DataGridHeader.displayName = 'DataGridHeader';
DataGridHeader.propTypes = {
  element: PropTypes.string,
};
