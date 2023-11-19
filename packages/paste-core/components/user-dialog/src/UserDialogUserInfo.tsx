import { Avatar } from "@twilio-paste/avatar";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { Separator } from "@twilio-paste/separator";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { UserDialogContext } from "./UserDialogContainer";

export interface UserDialogUserInfoProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "USER_DIALOG_USER_INFO"
   * @type {BoxProps["element"]}
   * @memberof UserDialogUserInfoProps
   */
  element?: BoxProps["element"];
}

export const UserDialogUserInfo = React.forwardRef<HTMLDivElement, UserDialogUserInfoProps>(
  ({ children, element = "USER_DIALOG", ...props }, ref) => {
    const { avatarProps } = React.useContext(UserDialogContext);
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
        <Separator orientation="horizontal" element={`${element}_USER_INFO_SEPARATOR`} />
      </>
    );
  },
);
UserDialogUserInfo.displayName = "UserDialogUserInfo";
