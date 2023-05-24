import * as React from 'react';
import PropTypes from 'prop-types';
import {ListboxPrimitiveGroup} from '@twilio-paste/listbox-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {UserDialogListGroupProps, UserDialogListboxGroupProps} from '../types';

const UserDoalogListboxGroup = React.forwardRef<HTMLDivElement, UserDialogListboxGroupProps>(({children, ...props}) => {
  return (
    <Box {...safelySpreadBoxProps(props)} width="100%">
      {children}
    </Box>
  );
});
UserDoalogListboxGroup.displayName = 'UserDialogListboxGroup';

export const UserDialogListGroup = React.forwardRef<HTMLDivElement, UserDialogListGroupProps>(
  ({children, ...props}) => {
    return (
      <ListboxPrimitiveGroup {...props} as={UserDoalogListboxGroup}>
        {children}
      </ListboxPrimitiveGroup>
    );
  }
);
UserDialogListGroup.displayName = 'UserDialogListGroup';

UserDialogListGroup.propTypes = {
  element: PropTypes.string,
};
