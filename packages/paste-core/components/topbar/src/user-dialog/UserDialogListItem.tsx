import * as React from 'react';
import PropTypes from 'prop-types';
import {ListboxPrimitiveItem} from '@twilio-paste/listbox-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {UserDialogListItemProps, UserDialogListboxItemProps} from '../types';

const UserDoalogListboxItem = React.forwardRef<HTMLDivElement, UserDialogListboxItemProps>(({children, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      width="100%"
      paddingX="space70"
      paddingY="space50"
      display="flex"
      columnGap="space30"
      _hover={{
        cursor: 'pointer',
        backgroundColor: 'colorBackgroundPrimaryWeakest',
        color: 'colorTextPrimary',
        borderLeftStyle: 'solid',
        borderLeftWidth: 'borderWidth20',
        borderLeftColor: 'colorBorderPrimary',
      }}
      _focus={{
        cursor: 'pointer',
        backgroundColor: 'colorBackgroundBrandHighlight',
        color: 'colorTextPrimary',
        borderLeftStyle: 'solid',
        borderLeftWidth: 'borderWidth20',
        borderLeftColor: 'colorBorderPrimary',
      }}
    >
      {children}
    </Box>
  );
});
UserDoalogListboxItem.displayName = 'UserDialogListboxItem';

export const UserDialogListItem = React.forwardRef<HTMLDivElement, UserDialogListItemProps>(({children, ...props}) => {
  return (
    <ListboxPrimitiveItem {...props} as={UserDoalogListboxItem}>
      {children}
    </ListboxPrimitiveItem>
  );
});
UserDialogListItem.displayName = 'UserDialogListItem';

UserDialogListItem.propTypes = {
  element: PropTypes.string,
};
