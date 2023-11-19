import { TBody } from "@twilio-paste/table";
import type { TBodyProps } from "@twilio-paste/table";
import * as React from "react";

export type DataGridBodyProps = TBodyProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_BODY'
   * @type {TBodyProps['element']}
   */
  element?: TBodyProps["element"];
};

/**
 * DataGrid body wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridBody = React.forwardRef<HTMLTableSectionElement, DataGridBodyProps>(
  ({ element = "DATA_GRID_BODY", ...props }, ref) => {
    return <TBody {...props} element={element} ref={ref} />;
  },
);
DataGridBody.displayName = "DataGridBody";
