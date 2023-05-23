import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Avatar} from '@twilio-paste/avatar';
import {Button} from '@twilio-paste/button';
import {NonModalDialogPrimitive, NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {StyledBase} from '@twilio-paste/theme';

import type {UserDialogProps, UserDialogPopoverProps} from '../types';
import {UserDialogContext} from './UserDialogContainer';

// styled popover for UserDialog Non Modal Dialog Primitive
const UserDialogPopover = React.forwardRef<HTMLDivElement, UserDialogPopoverProps>((props, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      style={props.style}
      ref={ref}
      boxShadow="shadow"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius30"
      backgroundColor="colorBackgroundBody"
      padding="space0"
      marginTop="space30"
      width="size30"
    >
      {props.children}
    </Box>
  );
});
UserDialogPopover.displayName = 'UserDialogPopover';

export const UserDialog = React.forwardRef<HTMLDivElement, UserDialogProps>(
  ({children, 'aria-label': label, element = 'USER_DIALOG', ...props}, ref) => {
    const {userDialogState, avatarProps} = React.useContext(UserDialogContext);
    return (
      <>
        <NonModalDialogDisclosurePrimitive
          {...userDialogState}
          as={Button}
          variant="reset"
          size="reset"
          element={`${element}_BUTTON`}
          //   borderRadius="borderRadius20" uncomment once sidenav is merged and topbar is rebased and styles can be set on reset buttons
        >
          <Box display="flex" columnGap="space30" alignItems="center" element={`${element}_BUTTON_CONTENTS`}>
            <Avatar
              variant="user"
              size="sizeIcon70"
              name={avatarProps.name}
              icon={avatarProps.icon}
              src={avatarProps.src}
              element={`${element}_BUTTON_AVATAR`}
            />
            <ChevronDownIcon decorative size="sizeIcon30" element={`${element}_BUTTON_ICON`} />
          </Box>
        </NonModalDialogDisclosurePrimitive>
        <NonModalDialogPrimitive
          {...userDialogState}
          {...props}
          preventBodyScroll={false}
          aria-label={label}
          as={UserDialogPopover}
          element={element}
          ref={ref}
        >
          {/* import Paste Theme Based Styles due to portal positioning. */}
          <StyledBase>{children}</StyledBase>
        </NonModalDialogPrimitive>
      </>
    );
  }
);
UserDialog.displayName = 'UserDialog';

UserDialog.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
  element: PropTypes.string,
};
