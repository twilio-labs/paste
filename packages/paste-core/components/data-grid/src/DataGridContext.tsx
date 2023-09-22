import * as React from 'react';
import type { CompositeStateReturn } from '@twilio-paste/reakit-library';

interface DataGridState extends Partial<CompositeStateReturn> {
  actionable: boolean;
  striped: boolean;
}

/**
 * DataGrid context. Includes Composite's context as well as a boolean to track actionable mode.
 */
export const DataGridContext = React.createContext<DataGridState>({
  actionable: false,
  striped: false,
});
