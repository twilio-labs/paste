import type { NonModalDialogPrimitiveState } from '@twilio-paste/non-modal-dialog-primitive';
import * as React from 'react';

type SideModalContextProps = Partial<NonModalDialogPrimitiveState>;

const SideModalContext = React.createContext<SideModalContextProps>({});

export { SideModalContext };
