import { THead } from "@twilio-paste/table";
import type { THeadProps } from "@twilio-paste/table";
import * as React from "react";

export type DataGridHeadProps = THeadProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_HEAD'
   * @type {THeadProps['element']}
   */
  element?: THeadProps["element"];
};

/**
 * DataGrid head wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridHead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({ element = "DATA_GRID_HEAD", ...props }, ref) => {
    return <THead {...props} element={element} ref={ref} />;
  },
);

DataGridHead.displayName = "DataGridHead";
