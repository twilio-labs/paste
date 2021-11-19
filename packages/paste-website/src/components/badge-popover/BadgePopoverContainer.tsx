import * as React from 'react';
import {useNonModalDialogPrimitiveState} from '@twilio-paste/non-modal-dialog-primitive';
import type {NonModalDialogPrimitivePopoverInitialState} from '@twilio-paste/non-modal-dialog-primitive';
import {BadgePopoverContext} from './BadgePopoverContext';

interface BadgePopoverContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
}

export const BadgePopoverContainer: React.FC<BadgePopoverContainerProps> = ({children, ...initialState}) => {
  const popover = useNonModalDialogPrimitiveState({
    modal: true,
    ...initialState,
  });
  return <BadgePopoverContext.Provider value={popover}>{children}</BadgePopoverContext.Provider>;
};
