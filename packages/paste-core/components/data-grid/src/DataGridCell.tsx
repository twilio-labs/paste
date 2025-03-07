import type { BoxElementProps } from "@twilio-paste/box";
import { CompositeItem } from "@twilio-paste/reakit-library";
import { useMutationObservable } from "@twilio-paste/utils";
import isElement from "lodash/isElement";
import * as React from "react";

import { DataGridContext } from "./DataGridContext";
import { Td } from "./table/Td";
import type { TdProps } from "./table/Td";
import { Th } from "./table/Th";
import type { ThProps } from "./table/Th";
import { ensureFocus, isCell, updateTabIndexForActionable } from "./utils";

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export

export type DataGridCellBasePropsProps = {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_CELL'
   * @type {BoxElementProps['element']}
   * @memberof DataGridCellProps
   */
  element?: BoxElementProps["element"];
  /**
   * How many columns the cell spans across
   *
   * @type {number}
   * @memberof DataGridCellProps
   */
  colSpan?: number;
};
type DataGridCellAsThProps = ThProps &
  DataGridCellBasePropsProps & {
    as?: "th";
  };
type DataGridCellAsTdProps = TdProps &
  DataGridCellBasePropsProps & {
    as?: "td";
  };

export type DataGridCellProps = DataGridCellAsThProps | DataGridCellAsTdProps;

/**
 * DataGrid cell component. Every visible box in a data grid is powered by the cell.
 *
 * @param {"th" | "td"} [as=td] - is it a header or a regular cell
 * @param {string} [element=DATA_GRID_CELL] - customization element
 * @param {number} [colSpan] - how many columns the cell spans across
 */
export const DataGridCell: React.FC<React.PropsWithChildren<DataGridCellProps>> = ({
  element = "DATA_GRID_CELL",
  as = "td",
  ...props
}) => {
  const dataGridState = React.useContext(DataGridContext);
  const cellRef = React.useRef(null) as React.RefObject<HTMLTableCellElement | null>;

  const handleMouseDown = React.useCallback(() => {
    if (cellRef.current) {
      ensureFocus(cellRef.current);
    }
  }, []);

  /**
   * MutationObserver callback for the cell
   * Handles correcting tabindex values on the cell and children outside of the React lifecycle
   * This fixes discrepencies when trying to use Reakit Composite with actionable/navigation modes.
   */
  const onListMutation = React.useCallback(
    (mutationList: MutationRecord[]) => {
      if (mutationList.length === 0) {
        return;
      }

      mutationList.forEach((mutation) => {
        if (!isElement(mutation.target)) {
          return;
        }
        // Get the element being mutated
        const target = mutation.target as HTMLElement;

        /**
         * Reakit Composite resets tabindex to 0 on cell child focus, which breaks actionable mode on shift-tab.
         * This fixes the issue by tracking whenever tabindex changes on this cell and setting it to -1
         * when in actionable mode
         */
        if (
          mutation.attributeName === "tabindex" &&
          dataGridState.actionable &&
          target.tabIndex === 0 &&
          isCell(target)
        ) {
          target.tabIndex = -1;
        }
      });
    },
    [dataGridState.actionable],
  );
  useMutationObservable(cellRef.current || ({} as Element), onListMutation);

  /**
   * When actionable mode changes, toggle the tabindex of the cell and children
   */
  React.useEffect(() => {
    setTimeout(() => {
      if (cellRef.current) {
        // This delay solves issues around components that re-render immediately on mount, like the Select componenent
        updateTabIndexForActionable(cellRef.current, dataGridState.actionable);
      }
    }, 10);
  }, [dataGridState.actionable]);

  return (
    <CompositeItem
      {...props}
      {...dataGridState}
      element={element}
      ref={cellRef}
      as={as === "td" ? Td : Th}
      onClick={handleMouseDown}
    />
  );
};

DataGridCell.displayName = "DataGridCell";
