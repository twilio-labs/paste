import * as React from 'react';
import type {ListboxPrimitiveInitialState, ListboxPrimitiveStateReturn} from '@twilio-paste/listbox-primitive';
import {useListboxPrimitiveState, ListboxPrimitive} from '@twilio-paste/listbox-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {UserDialogListProps, UserDialogListboxProps} from './types';

const UserDialogListbox = React.forwardRef<HTMLDivElement, UserDialogListboxProps>(
  ({element = 'USER_DIALOG', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={`${element}_LIST`}
        backgroundColor="colorBackgroundBody"
        borderRadius="borderRadius30"
        paddingY="space30"
        ref={ref}
      >
        {props.children}
      </Box>
    );
  }
);
UserDialogListbox.displayName = 'UserDialogListbox';

export const UserDialogList = React.forwardRef<HTMLDivElement, UserDialogListProps>(({children, ...props}, ref) => {
  return (
    <ListboxPrimitive {...props} as={UserDialogListbox} ref={ref}>
      {children}
    </ListboxPrimitive>
  );
});
UserDialogList.displayName = 'UserDialogList';

export const useUserDialogListState = (props?: ListboxPrimitiveInitialState): ListboxPrimitiveStateReturn => {
  return useListboxPrimitiveState({...props, orientation: 'vertical'});
};
