import * as React from 'react';

import {useNonModalDialogPrimitiveState} from '@twilio-paste/non-modal-dialog-primitive';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';

import type {UserDialogContainerProps, UserDialogContextProps} from './types';

export const UserDialogContext = React.createContext<UserDialogContextProps>({} as UserDialogContextProps);

export const UserDialogContainer: React.FC<UserDialogContainerProps> = ({
  children,
  state,
  name,
  src,
  icon,
  ...initialState
}) => {
  const nonModalDialogState =
    state ||
    useNonModalDialogPrimitiveState({
      modal: true,
      visible: false,
      placement: 'bottom-start',
      gutter: 0,
      ...initialState,
    });
  const avatarProps = {name, src, icon};
  return (
    <UserDialogContext.Provider value={{userDialogState: nonModalDialogState, avatarProps}}>
      {children}
    </UserDialogContext.Provider>
  );
};
UserDialogContainer.displayName = 'UserDialogContainer';

export const useUserDialogState = (
  props?: NonModalDialogPrimitivePopoverInitialState
): NonModalDialogPrimitiveStateReturn => {
  return useNonModalDialogPrimitiveState({...props, placement: 'bottom-start', gutter: 0});
};
