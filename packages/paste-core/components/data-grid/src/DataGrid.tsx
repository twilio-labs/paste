import { Composite, useCompositeState } from "@twilio-paste/reakit-library";
import { Table } from "@twilio-paste/table";
import type { TableProps } from "@twilio-paste/table";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { DataGridContext } from "./DataGridContext";
import {
  delayedSetFocusable,
  ensureFocus,
  getActiveElement,
  getClosestCellFrom,
  getClosestGridCellFromCurrentFocus,
  getFirstFocusableIn,
  isCell,
} from "./utils";

export interface DataGridProps extends TableProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID'
   * @type {TableProps['element']}
   * @memberof DataGridProps
   */
  element?: TableProps["element"];
  "aria-label": string;
  /**
   * If creating a treegrid, set this to "treegrid" to override the default role of "grid"
   *
   * @default "grid"
   * @type {"treegrid"}
   * @memberof DataGridProps
   */
  role?: "treegrid";
}

/**
 * DataGrid wrapper component.
 *
 * @param {string} aria-label - for screen readers
 * @param {boolean} striped - zebra striping on table rows
 * @param {string} element - customization element
 */
export const DataGrid = React.forwardRef<HTMLTableElement, DataGridProps>(
  ({ element = "DATA_GRID", role = "grid", striped = false, ...props }, ref) => {
    const dataGridId = `data-grid-${useUID()}`;
    const lastFocusedElement = React.useRef<Element | null>(null);
    const compositeState = useCompositeState({ unstable_virtual: false });
    const [actionable, setActionable] = React.useState<boolean>(false);

    /**
     * Clicking into the DataGrid should unconditionally enable actionable mode
     */
    const handleMouseDown = React.useCallback(() => {
      setActionable(true);
    }, []);

    /**
     * Keep track of the last focused element. This is needed to restore tabIndex to 0
     * when clicking out of the grid, so that we can tab back into it.
     */
    const handleFocus = React.useCallback((e: React.FocusEvent) => {
      if (e.target != null) {
        lastFocusedElement.current = e.target;
      }
    }, []);

    /**
     * - Reset DataGrid to navigational on blur
     * - Sets the last focused element before blurring to be the active tab stop (line 43)
     */
    const handleBlur = React.useCallback(
      (event: any) => {
        const isDataGridBlurred = !event.currentTarget.contains(event.relatedTarget);

        if (isDataGridBlurred) {
          setActionable(false);

          if (lastFocusedElement.current != null) {
            const closestCell = getClosestCellFrom(lastFocusedElement.current, dataGridId);
            if (closestCell) {
              /*
               * TabIndex isn't resetting to 0 on escape. This makes it reset to 0 after a delay
               * Race condition fix vs Composite code
               */
              delayedSetFocusable(closestCell);
            }
          }
        }
      },
      [dataGridId],
    );

    /**
     * Handles Enter and Escape keypresses for swapping between actionable and navigational modes
     */
    const handleKeypress = React.useCallback(
      (event: React.KeyboardEvent) => {
        switch (event.key) {
          /*
           * Wrapping cases in {} to avoid ESLint error
           * https://eslint.org/docs/rules/no-case-declarations
           */
          case "Enter": {
            // Set the actionable state
            setActionable(true);

            const activeElement = getActiveElement();
            // Only if it's a DataGrid cell
            if (activeElement && isCell(activeElement)) {
              // Get the first focusable child
              const firstFocusableElement = getFirstFocusableIn(activeElement);

              // If there is a focusable child focus it
              if (firstFocusableElement) {
                ensureFocus(firstFocusableElement);
                // First shift+tab fix upon entering actionable mode
                activeElement.tabIndex = actionable ? 0 : -1;
              }
            }
            break;
          }
          case "Escape": {
            // Set the actionable state
            setActionable(false);
            // From the current focus target, find the closest parent cell
            const closestCell = getClosestGridCellFromCurrentFocus(dataGridId);
            // If a cell is found, focus it
            if (closestCell) {
              ensureFocus(closestCell);
              // TabIndex isn't resetting to 0 on escape. This makes it reset to 0 after a delay
              delayedSetFocusable(closestCell);
            }
            break;
          }
          default:
            break;
        }
      },
      [actionable, dataGridId],
    );

    const dataGridState = {
      ...compositeState,
      actionable,
      striped,
    };

    return (
      <DataGridContext.Provider value={dataGridState}>
        <Composite
          {...props}
          {...compositeState}
          id={dataGridId}
          ref={ref}
          as={Table}
          element={element}
          role={role}
          onKeyDown={handleKeypress}
          onMouseDown={handleMouseDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isActionable={actionable}
          data-actionable={actionable}
        />
      </DataGridContext.Provider>
    );
  },
);

DataGrid.displayName = "DataGrid";
