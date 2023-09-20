import * as React from 'react';
import {Text} from '@twilio-paste/text';

import type {UserDialogUserTextProps} from './types';

export const UserDialogUserEmail = React.forwardRef<HTMLDivElement, UserDialogUserTextProps>(
  ({children, element = 'USER_DIALOG_USER_EMAIL', ...props}, ref) => {
    return (
      <Text
        {...props}
        as="div"
        fontSize="fontSize30"
        color="colorTextWeak"
        fontWeight="fontWeightLight"
        lineHeight="lineHeight20"
        element={element}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);
UserDialogUserEmail.displayName = 'UserDialogEmail';
