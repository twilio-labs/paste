import type { NonModalDialogPrimitiveState } from '@twilio-paste/non-modal-dialog-primitive';
import * as React from 'react';

export type MinimizableDialogContextProps = Partial<NonModalDialogPrimitiveState> & {
  minimized?: boolean;
  minimize?: () => void;
  expand?: () => void;
  toggleMinimized?: () => void;
};

const MinimizableDialogContext = React.createContext<MinimizableDialogContextProps>({});

export { MinimizableDialogContext };
