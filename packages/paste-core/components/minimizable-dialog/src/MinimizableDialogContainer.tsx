import type {
  NonModalDialogPrimitivePopoverInitialState,
  NonModalDialogPrimitiveStateReturn,
} from "@twilio-paste/non-modal-dialog-primitive";
import { useNonModalDialogPrimitiveState } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { MinimizableDialogContext } from "./MinimizableDialogContext";

export interface MinimizableDialogStateReturn extends NonModalDialogPrimitiveStateReturn {
  [key: string]: any;
}

interface UseMinimizableDialogStateArgs extends NonModalDialogPrimitivePopoverInitialState {
  minimized?: boolean;
}

export const useMinimizableDialogState = ({
  minimized: minimizedArg,
  ...initialState
}: UseMinimizableDialogStateArgs): MinimizableDialogStateReturn => {
  const [minimized, setMinimized] = React.useState(minimizedArg);
  const minimize = (): void => setMinimized(true);
  const expand = (): void => setMinimized(false);
  const toggleMinimized = (): void => setMinimized((prev) => !prev);

  const dialog = useNonModalDialogPrimitiveState({ ...initialState });

  return { ...dialog, minimized, minimize, expand, toggleMinimized };
};

export interface MinimizableDialogContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: MinimizableDialogStateReturn;
  minimized?: boolean;
}

const BaseMinimizableDialogContainer: React.FC<React.PropsWithChildren<MinimizableDialogContainerProps>> = ({
  gutter,
  children,
  placement,
  modal,
  state,
  minimized: minimizedProp,
  ...initialState
}) => {
  const dialog =
    state ||
    useMinimizableDialogState({
      minimized: minimizedProp,
      modal: true,
      ...initialState,
    });

  return <MinimizableDialogContext.Provider value={{ ...dialog }}>{children}</MinimizableDialogContext.Provider>;
};
BaseMinimizableDialogContainer.displayName = "BaseMinimizableDialogContainer";

const MinimizableDialogContainer = React.memo(BaseMinimizableDialogContainer);

MinimizableDialogContainer.displayName = "MinimizableDialogContainer";
export { MinimizableDialogContainer };
