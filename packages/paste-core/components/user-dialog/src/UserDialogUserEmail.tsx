import { Text } from "@twilio-paste/text";
import * as React from "react";

import type { UserDialogUserTextProps } from "./types";

export type UserDialogUserEmailProps = UserDialogUserTextProps;

export const UserDialogUserEmail = React.forwardRef<HTMLDivElement, UserDialogUserEmailProps>(
  ({ children, element = "USER_DIALOG_USER_EMAIL", ...props }, ref) => {
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
  },
);
UserDialogUserEmail.displayName = "UserDialogEmail";
