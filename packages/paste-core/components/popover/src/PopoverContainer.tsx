import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';
import {useNonModalDialogPrimitiveState} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverContext} from './PopoverContext';

export interface PopoverStateReturn extends NonModalDialogPrimitiveStateReturn {
  [key: string]: any;
}

export interface PopoverContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: PopoverStateReturn;
}

const BasePopoverContainer = React.forwardRef<HTMLDivElement, PopoverContainerProps>(
  ({children, gutter, placement, state, ...initialState}, ref) => {
    const popover = state || useNonModalDialogPrimitiveState({gutter, modal: true, placement, ...initialState});
    return (
      <PopoverContext.Provider value={popover}>
        <Box ref={ref}>{children}</Box>
      </PopoverContext.Provider>
    );
  }
);

const PopoverContainer = React.memo(BasePopoverContainer);

PopoverContainer.displayName = 'PopoverContainer';
export {PopoverContainer};

export {useNonModalDialogPrimitiveState as usePopoverState};
