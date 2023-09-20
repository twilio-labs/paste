import * as React from 'react';
import {THead} from '@twilio-paste/table';
import type {THeadProps} from '@twilio-paste/table';

/**
 * DataGrid head wrapper component.
 *
 * @param {string} element - customization element
 */
export const DataGridHead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({element = 'DATA_GRID_HEAD', ...props}, ref) => {
    return <THead {...props} element={element} ref={ref} />;
  }
);

DataGridHead.displayName = 'DataGridHead';
