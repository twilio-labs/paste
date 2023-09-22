import { TBody } from "@twilio-paste/table";
import type { TBodyProps } from "@twilio-paste/table";
import * as React from "react";

/**
 * DataGrid body wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ element = "DATA_GRID_BODY", ...props }, ref) => {
    return <TBody {...props} element={element} ref={ref} />;
  },
);
DataGridBody.displayName = "DataGridBody";
