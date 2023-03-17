import * as React from 'react';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';
import {useNonModalDialogPrimitiveState} from '@twilio-paste/non-modal-dialog-primitive';

import {SideModalContext} from './SideModalContext';

export interface SideModalStateReturn extends NonModalDialogPrimitiveStateReturn {
  [key: string]: any;
}
export interface SideModalContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: SideModalStateReturn;
}

const BaseSideModalContainer: React.FC<React.PropsWithChildren<SideModalContainerProps>> = ({
  gutter,
  children,
  placement,
  modal,
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

  return <SideModalContext.Provider value={{...dialog}}>{children}</SideModalContext.Provider>;
};
BaseSideModalContainer.displayName = 'BaseSideModalContainer';

const SideModalContainer = React.memo(BaseSideModalContainer);

SideModalContainer.displayName = 'SideModalContainer';
export {SideModalContainer};

export {useNonModalDialogPrimitiveState as useSideModalState} from '@twilio-paste/non-modal-dialog-primitive';
