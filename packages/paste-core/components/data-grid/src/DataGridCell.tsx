import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxElementProps} from '@twilio-paste/box';
import {CompositeItem} from '@twilio-paste/reakit-library';
import {useMutationObservable} from '@twilio-paste/utils';
import {DataGridContext} from './DataGridContext';
import {updateTabIndexForActionable, isCell, ensureFocus} from './utils';
import {Td} from './table/Td';
import {Th} from './table/Th';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const isElement = require('lodash.iselement');

type CellType = 'th' | 'td';
export interface DataGridCellProps {
  as?: CellType;
  element?: BoxElementProps['element'];
}

/**
 * DataGrid cell component. Every visible box in a data grid is powered by the cell.
 *
 * @param {"th" | "td"} as - is it a header or a regular cell
 * @param {string} element - customization element
 */
export const DataGridCell: React.FC<DataGridCellProps> = ({element = 'DATA_GRID_CELL', as = 'td', ...props}) => {
  const dataGridState = React.useContext(DataGridContext);
  const cellRef = React.useRef() as React.MutableRefObject<HTMLTableCellElement>;

  const handleMouseDown = React.useCallback(() => {
    ensureFocus(cellRef.current);
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
          mutation.attributeName === 'tabindex' &&
          dataGridState.actionable &&
          target.tabIndex === 0 &&
          isCell(target)
        ) {
          target.tabIndex = -1;
        }
      });
    },
    [dataGridState.actionable]
  );
  useMutationObservable(cellRef.current, onListMutation);

  /**
   * When actionable mode changes, toggle the tabindex of the cell and children
   */
  React.useEffect(() => {
    if (cellRef.current) {
      updateTabIndexForActionable(cellRef.current, dataGridState.actionable);
    }
  }, [dataGridState.actionable]);

  return (
    <CompositeItem
      {...props}
      {...dataGridState}
      element={element}
      ref={cellRef}
      as={as === 'td' ? Td : Th}
      onMouseDown={handleMouseDown}
    />
  );
};

DataGridCell.displayName = 'DataGridCell';
DataGridCell.propTypes = {
  as: PropTypes.oneOf<CellType>(['th', 'td']),
  element: PropTypes.string,
};
