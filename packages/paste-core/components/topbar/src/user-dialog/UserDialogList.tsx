import * as React from 'react';
import PropTypes from 'prop-types';
import type {ListboxPrimitiveInitialState, ListboxPrimitiveStateReturn} from '@twilio-paste/listbox-primitive';
import {useListboxPrimitiveState, ListboxPrimitive} from '@twilio-paste/listbox-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {UserDialogListProps, UserDialogListboxProps} from '../types';

const UserDialogListbox = React.forwardRef<HTMLDivElement, UserDialogListboxProps>((props, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      style={props.style}
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius30"
      ref={ref}
    >
      {props.children}
    </Box>
  );
});
UserDialogListbox.displayName = 'UserDialogListbox';

export const UserDialogList = React.forwardRef<HTMLDivElement, UserDialogListProps>(({children, ...props}, ref) => {
  // element = 'USER_DIALOG_LIST',
  return (
    <ListboxPrimitive {...props} as={UserDialogListbox} ref={ref}>
      {children}
    </ListboxPrimitive>
  );
});
UserDialogList.displayName = 'UserDialogList';

UserDialogList.propTypes = {
  element: PropTypes.string,
};

// export {useListboxPrimitiveState as useUserDialogListState};
export const useUserDialogListState = (props?: ListboxPrimitiveInitialState): ListboxPrimitiveStateReturn => {
  return useListboxPrimitiveState({...props, orientation: 'vertical'});
};
