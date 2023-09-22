import type { NonModalDialogPrimitiveState } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

const PopoverContext = React.createContext<Partial<NonModalDialogPrimitiveState>>({});

export { PopoverContext };
