import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { ListboxPrimitiveItem } from "@twilio-paste/listbox-primitive";
import type { ListboxPrimitiveItemProps } from "@twilio-paste/listbox-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

interface UserDialogListboxItemProps extends HTMLPasteProps<"div"> {
  element?: BoxProps["element"];
  href?: string;
}
const UserDialogListboxItem = React.forwardRef<HTMLButtonElement, UserDialogListboxItemProps>(
  ({ children, href, element = "USER_DIALOG", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={`${element}_LIST_ITEM`}
        as={href ? "a" : "div"}
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
          cursor: "pointer",
          backgroundColor: "colorBackgroundPrimaryWeakest",
          color: "colorTextPrimary",
          borderLeftStyle: "solid",
          borderLeftWidth: "borderWidth20",
          borderLeftColor: "colorBorderPrimary",
        }}
        _focus={{
          cursor: "pointer",
          backgroundColor: "colorBackgroundPrimaryWeakest",
          color: "colorTextPrimary",
          borderLeftStyle: "solid",
          borderLeftWidth: "borderWidth20",
          borderLeftColor: "colorBorderPrimary",
        }}
      >
        {children}
      </Box>
    );
  },
);
UserDialogListboxItem.displayName = "UserDialogListboxItem";

export interface UserDialogListItemProps extends ListboxPrimitiveItemProps {
  /**
   * Providing an href will make the list item an `<a>` tag
   *
   * @type {string}
   * @memberof UserDialogListItemProps
   */
  href?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "USER_DIALOG_LIST_ITEM"
   * @type {BoxProps["element"]}
   * @memberof UserDialogListItemProps
   */
  element?: BoxProps["element"];
}
export const UserDialogListItem = React.forwardRef<HTMLButtonElement, UserDialogListItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <ListboxPrimitiveItem {...props} ref={ref} as={UserDialogListboxItem}>
        {children}
      </ListboxPrimitiveItem>
    );
  },
);
UserDialogListItem.displayName = "UserDialogListItem";
