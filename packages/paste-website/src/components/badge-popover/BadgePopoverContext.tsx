import * as React from 'react';
import type {NonModalDialogPrimitiveState} from '@twilio-paste/non-modal-dialog-primitive';

export const BadgePopoverContext = React.createContext<Partial<NonModalDialogPrimitiveState>>({});
