import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Avatar} from '@twilio-paste/avatar';
import {Button} from '@twilio-paste/button';
import {
  NonModalDialogPrimitive,
  NonModalDialogDisclosurePrimitive,
  useNonModalDialogPrimitiveState,
} from '@twilio-paste/non-modal-dialog-primitive';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {StyledBase} from '@twilio-paste/theme';

import type {UserDialogProps, UserDialogPopoverProps, UserDialogContainerProps, UserDialogContextProps} from './types';

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

UserDialogContainer.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  icon: (props) => {
    if (typeof props.icon !== 'function') new Error('[Paste User Dialog]: icon prop must be a Paste Icon');
    return null;
  },
};

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
        >
          <Box display="flex" columnGap="space30" alignItems="center" element={`${element}_BUTTON_CONTENTS`}>
            <Avatar
              variant="user"
              size="sizeIcon70"
              name={avatarProps.name}
              icon={avatarProps.icon}
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

export const useUserDialogState = (
  props: NonModalDialogPrimitivePopoverInitialState
): NonModalDialogPrimitiveStateReturn => {
  return useNonModalDialogPrimitiveState({...props, placement: 'bottom-start', gutter: 0});
};
