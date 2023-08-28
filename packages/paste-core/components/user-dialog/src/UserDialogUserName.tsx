import * as React from 'react';
import {Text} from '@twilio-paste/text';

import type {UserDialogUserTextProps} from './types';

export const UserDialogUserName = React.forwardRef<HTMLDivElement, UserDialogUserTextProps>(
  ({children, element = 'USER_DIALOG_USER_NAME', ...props}, ref) => {
    return (
      <Text
        {...props}
        as="div"
        fontSize="fontSize40"
        color="colorText"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight40"
        element={element}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);
UserDialogUserName.displayName = 'UserDialogName';
