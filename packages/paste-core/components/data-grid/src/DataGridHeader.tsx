import * as React from "react";

import { DataGridCell } from "./DataGridCell";
import type { ThProps } from "./table/Th";

export type DataGridHeaderProps = ThProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_HEADER'
   * @type {ThProps['element']}
   */
  element?: ThProps["element"];
};

/**
 * DataGrid header (th) component.
 * Just a wrapper around the DataGridCell.
 *
 * @param {string} [element=DATA_GRID_HEADER] - customization element
 * @param {number} [colSpan] - how many columns the cell spans across
 */
export const DataGridHeader: React.FC<React.PropsWithChildren<DataGridHeaderProps>> = ({
  element = "DATA_GRID_HEADER",
  ...props
}) => {
  return <DataGridCell element={element} {...props} as="th" />;
};

DataGridHeader.displayName = "DataGridHeader";
