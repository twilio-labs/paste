import * as React from 'react';
import type { NonModalDialogPrimitiveState } from '@twilio-paste/non-modal-dialog-primitive';

const PopoverContext = React.createContext<Partial<NonModalDialogPrimitiveState>>({});

export { PopoverContext };
