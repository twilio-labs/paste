import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Text} from '@twilio-paste/text';
import {Separator} from '@twilio-paste/separator';
import {Avatar} from '@twilio-paste/avatar';

import type {UserDialogUserInfoProps, UserDialogUserTextProps} from './types';
import {UserDialogContext} from './UserDialog';

export const UserDialogUserName = React.forwardRef<HTMLDivElement, UserDialogUserTextProps>(
  ({children, element = 'USER_DIALOG', ...props}, ref) => {
    return (
      <Text
        {...props}
        as="div"
        fontSize="fontSize40"
        color="colorText"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight40"
        element={`${element}_USER_NAME`}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);
UserDialogUserName.displayName = 'UserDialogName';

UserDialogUserName.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export const UserDialogUserEmail = React.forwardRef<HTMLDivElement, UserDialogUserTextProps>(
  ({children, element = 'USER_DIALOG', ...props}, ref) => {
    return (
      <Text
        {...props}
        as="div"
        fontSize="fontSize30"
        color="colorTextWeak"
        fontWeight="fontWeightLight"
        lineHeight="lineHeight20"
        element={`${element}_USER_EMAIL`}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);
UserDialogUserEmail.displayName = 'UserDialogEmail';

UserDialogUserEmail.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export const UserDialogUserInfo = React.forwardRef<HTMLDivElement, UserDialogUserInfoProps>(
  ({children, element = 'USER_DIALOG', ...props}, ref) => {
    const {avatarProps} = React.useContext(UserDialogContext);
    return (
      <>
        <Box
          {...safelySpreadBoxProps(props)}
          backgroundColor="colorBackgroundWeak"
          padding="space50"
          borderTopLeftRadius="borderRadius30"
          borderTopRightRadius="borderRadius30"
          element={`${element}_USER_INFO`}
          ref={ref}
        >
          <MediaObject as="div" verticalAlign="center">
            <MediaFigure as="div" spacing="space50">
              <Avatar
                variant="user"
                size="sizeIcon80"
                name={avatarProps.name}
                src={avatarProps.src}
                icon={avatarProps.icon}
                element={`${element}_USER_AVATAR`}
              />
            </MediaFigure>
            <MediaBody as="div">{children}</MediaBody>
          </MediaObject>
        </Box>
        <Separator orientation="horizontal" />
      </>
    );
  }
);
UserDialogUserInfo.displayName = 'UserDialogUserInfo';

UserDialogUserInfo.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
