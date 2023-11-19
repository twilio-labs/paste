import { Text } from "@twilio-paste/text";
import * as React from "react";

import type { UserDialogUserTextProps } from "./types";

export type UserDialogUserNameProps = UserDialogUserTextProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "USER_DIALOG_USER_NAME"
   * @type {UserDialogUserTextProps["element"]}
   */
  element?: UserDialogUserTextProps["element"];
};

export const UserDialogUserName = React.forwardRef<HTMLDivElement, UserDialogUserTextProps>(
  ({ children, element = "USER_DIALOG_USER_NAME", ...props }, ref) => {
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
  },
);
UserDialogUserName.displayName = "UserDialogName";
