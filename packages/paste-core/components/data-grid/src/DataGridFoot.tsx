import { TFoot } from "@twilio-paste/table";
import type { TFootProps } from "@twilio-paste/table";
import * as React from "react";

export type DataGridFootProps = TFootProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_FOOT'
   * @type {TFootProps['element']}
   */
  element?: TFootProps["element"];
};

/**
 * DataGrid foot wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(
  ({ element = "DATA_GRID_FOOT", ...props }, ref) => {
    return <TFoot {...props} element={element} ref={ref} />;
  },
);

DataGridFoot.displayName = "DataGridFoot";
