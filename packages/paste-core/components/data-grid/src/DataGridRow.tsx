import type { BoxElementProps } from "@twilio-paste/box";
import { CompositeGroup } from "@twilio-paste/reakit-library";
import * as React from "react";

import { DataGridContext } from "./DataGridContext";
import { Tr } from "./table/Tr";

export interface DataGridRowProps {
  children: NonNullable<React.ReactNode>;
  selected?: boolean;
  element?: BoxElementProps["element"];
}

/**
 * DataGrid cell component. Every visible box in a data grid is powered by the cell.
 *
 * @param {boolean} selected - highlights the row to mark it as selected
 * @param {string} element - customization element
 */
export const DataGridRow = React.forwardRef<HTMLTableRowElement, DataGridRowProps>(
  ({ element = "DATA_GRID_ROW", ...props }, ref) => {
    const dataGridState = React.useContext(DataGridContext);

    return <CompositeGroup as={Tr} {...props} element={element} {...dataGridState} ref={ref} role="row" />;
  },
);

DataGridRow.displayName = "DataGridRow";
