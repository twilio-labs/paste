import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';
import {useCompositeState, Composite} from '@twilio-paste/reakit-library';
import {Table} from '@twilio-paste/table';
import type {TableProps} from '@twilio-paste/table';
import {DataGridContext} from './DataGridContext';
import {
  ensureFocus,
  getActiveElement,
  getFirstFocusableIn,
  getClosestCellFrom,
  getClosestGridCellFromCurrentFocus,
  isCell,
  delayedSetFocusable,
} from './utils';

export interface DataGridProps extends TableProps {
  'aria-label': string;
}

/**
 * DataGrid wrapper component.
 *
 * @param {string} aria-label - for screen readers
 * @param {boolean} striped - zebra striping on table rows
 * @param {string} element - customization element
 */
export const DataGrid = React.forwardRef<HTMLTableElement, DataGridProps>(
  ({element = 'DATA_GRID', striped = false, ...props}, ref) => {
    const dataGridId = `data-grid-${useUID()}`;
    const lastFocusedElement = React.useRef<Element | null>(null);
    const compositeState = useCompositeState({unstable_virtual: false});
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
      (event) => {
        const isDataGridBlurred = !event.currentTarget.contains(event.relatedTarget);

        if (isDataGridBlurred) {
          setActionable(false);

          if (lastFocusedElement.current != null) {
            const closestCell = getClosestCellFrom(lastFocusedElement.current, dataGridId);
            if (closestCell) {
              // TabIndex isn't resetting to 0 on escape. This makes it reset to 0 after a delay
              // Race condition fix vs Composite code
              delayedSetFocusable(closestCell);
            }
          }
        }
      },
      [dataGridId]
    );

    /**
     * Handles Enter and Escape keypresses for swapping between actionable and navigational modes
     */
    const handleKeypress = React.useCallback(
      (event: React.KeyboardEvent) => {
        switch (event.key) {
          // Wrapping cases in {} to avoid ESLint error
          // https://eslint.org/docs/rules/no-case-declarations
          case 'Enter': {
            // Set the actionable state
            setActionable(true);

            const activeElement = getActiveElement() as HTMLElement;
            // Only if it's a DataGrid cell
            if (isCell(activeElement)) {
              // Get the first focusable child
              const firstFocusableElement = getFirstFocusableIn(activeElement);

              // If there is a focusable child focus it
              if (firstFocusableElement) {
                ensureFocus(firstFocusableElement as HTMLElement);
                // First shift+tab fix upon entering actionable mode
                activeElement.tabIndex = actionable ? 0 : -1;
              }
            }
            break;
          }
          case 'Escape': {
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
      [actionable, dataGridId]
    );

    const dataGridState = {
      ...compositeState,
      actionable,
      striped,
    };

    return (
      <DataGridContext.Provider value={dataGridState}>
        <Box
          id={dataGridId}
          element={`${element}_WRAPPER`}
          overflowX="auto"
          whiteSpace="nowrap"
          boxShadow={actionable ? 'shadowFocus' : null}
        >
          <Composite
            {...props}
            {...compositeState}
            ref={ref}
            as={Table}
            element={element}
            role="grid"
            onKeyDown={handleKeypress}
            onMouseDown={handleMouseDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-actionable={actionable}
          />
        </Box>
      </DataGridContext.Provider>
    );
  }
);

DataGrid.displayName = 'DataGrid';
DataGrid.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  element: PropTypes.string,
};
