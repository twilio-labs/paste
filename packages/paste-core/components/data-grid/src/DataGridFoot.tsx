import * as React from 'react';
import {TFoot} from '@twilio-paste/table';
import type {TFootProps} from '@twilio-paste/table';

/**
 * DataGrid foot wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(
  ({element = 'DATA_GRID_FOOT', ...props}, ref) => {
    return <TFoot {...props} element={element} ref={ref} />;
  }
);

DataGridFoot.displayName = 'DataGridFoot';
