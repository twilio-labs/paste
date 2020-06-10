import * as React from 'react';
import {
  useNonModalDialogPrimitiveState,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverContext} from './PopoverContext';

export type PopoverContainerProps = NonModalDialogPrimitivePopoverInitialState;

const PopoverContainer: React.FC<PopoverContainerProps> = ({children, placement, gutter, ...initialState}) => {
  const popover = useNonModalDialogPrimitiveState({placement, gutter, modal: true, ...initialState});
  const value = React.useMemo(() => popover, Object.values(popover));
  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>;
};

PopoverContainer.displayName = 'PopoverContainer';
export {PopoverContainer};
