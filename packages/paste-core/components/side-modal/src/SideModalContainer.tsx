import type {
  NonModalDialogPrimitivePopoverInitialState,
  NonModalDialogPrimitiveStateReturn as SideModalStateReturn,
} from "@twilio-paste/non-modal-dialog-primitive";
import { useNonModalDialogPrimitiveState } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { SideModalContext } from "./SideModalContext";

interface SideModalContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  /**
   * Returned state from `useSideModalState` hook
   *
   * @type {SideModalStateReturn}
   * @memberof SideModalContainerProps
   */
  state?: SideModalStateReturn;
}

const BaseSideModalContainer: React.FC<SideModalContainerProps> = ({
  // don't let people set this
  gutter,
  // don't let people set this
  placement,
  // don't let people set this
  modal,
  children,
  state,
  ...initialState
}) => {
  const dialog =
    state ||
    useNonModalDialogPrimitiveState({
      modal: true,
      unstable_fixed: true,
      ...initialState,
    });

  return <SideModalContext.Provider value={{ ...dialog }}>{children}</SideModalContext.Provider>;
};
BaseSideModalContainer.displayName = "BaseSideModalContainer";

const SideModalContainer = React.memo(BaseSideModalContainer);
SideModalContainer.displayName = "SideModalContainer";

export type { SideModalStateReturn, SideModalContainerProps };
export { SideModalContainer };
