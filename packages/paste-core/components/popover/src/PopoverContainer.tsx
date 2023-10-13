import type {
  NonModalDialogPrimitivePopoverInitialState,
  NonModalDialogPrimitiveStateReturn,
} from "@twilio-paste/non-modal-dialog-primitive";
import { useNonModalDialogPrimitiveState } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { PopoverContext } from "./PopoverContext";

export interface PopoverStateReturn extends NonModalDialogPrimitiveStateReturn {
  [key: string]: any;
}

export interface PopoverContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: PopoverStateReturn;
}

const BasePopoverContainer: React.FC<React.PropsWithChildren<PopoverContainerProps>> = ({
  children,
  gutter,
  placement,
  state,
  ...initialState
}) => {
  const popover = state || useNonModalDialogPrimitiveState({ gutter, modal: true, placement, ...initialState });
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
BasePopoverContainer.displayName = "BasePopoverContainer";

const PopoverContainer = React.memo(BasePopoverContainer);

PopoverContainer.displayName = "PopoverContainer";
export { PopoverContainer };

export { useNonModalDialogPrimitiveState as usePopoverState };
