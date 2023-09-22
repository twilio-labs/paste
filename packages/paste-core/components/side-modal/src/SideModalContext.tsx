import * as React from 'react';
import type { NonModalDialogPrimitiveState } from '@twilio-paste/non-modal-dialog-primitive';

type SideModalContextProps = Partial<NonModalDialogPrimitiveState>;

const SideModalContext = React.createContext<SideModalContextProps>({});

export { SideModalContext };
