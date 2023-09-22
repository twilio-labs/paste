import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { ListboxPrimitiveItem } from '@twilio-paste/listbox-primitive';
import * as React from 'react';

import type { UserDialogListItemProps, UserDialogListboxItemProps } from './types';

const UserDialogListboxItem = React.forwardRef<HTMLButtonElement, UserDialogListboxItemProps>(
  ({ children, href, element = 'USER_DIALOG', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={`${element}_LIST_ITEM`}
        as={href ? 'a' : 'div'}
        href={href}
        ref={ref}
        width="100%"
        paddingLeft="space60"
        paddingRight="space70"
        paddingY="space30"
        display="flex"
        columnGap="space30"
        color="colorText"
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth20"
        borderLeftColor="colorBorderWeakest"
        outline="none"
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
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          color: 'colorTextPrimary',
          borderLeftStyle: 'solid',
          borderLeftWidth: 'borderWidth20',
          borderLeftColor: 'colorBorderPrimary',
        }}
      >
        {children}
      </Box>
    );
  },
);
UserDialogListboxItem.displayName = 'UserDialogListboxItem';

export const UserDialogListItem = React.forwardRef<HTMLButtonElement, UserDialogListItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <ListboxPrimitiveItem {...props} ref={ref} as={UserDialogListboxItem}>
        {children}
      </ListboxPrimitiveItem>
    );
  },
);
UserDialogListItem.displayName = 'UserDialogListItem';
