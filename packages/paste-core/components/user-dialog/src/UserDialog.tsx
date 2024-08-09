import { Avatar } from "@twilio-paste/avatar";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { NonModalDialogDisclosurePrimitive, NonModalDialogPrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import type {
  NonModalDialogDisclosurePrimitiveProps,
  NonModalDialogPrimitivePopoverInitialState,
} from "@twilio-paste/non-modal-dialog-primitive";
import { StyledBase } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { UserDialogContext } from "./UserDialogContainer";

export type UserDialogPopoverProps = BoxProps;
// styled popover for UserDialog Non Modal Dialog Primitive
const UserDialogPopover = React.forwardRef<HTMLDivElement, UserDialogPopoverProps>(({ style, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      style={style}
      boxShadow="shadow"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius30"
      padding="space0"
      marginTop="space30"
      width="size30"
      zIndex="zIndex80"
      outline="none"
    >
      {props.children}
    </Box>
  );
});
UserDialogPopover.displayName = "UserDialogPopover";

export type UserDialogButtonProps = Omit<ButtonProps, "variant"> &
  Omit<NonModalDialogDisclosurePrimitiveProps, "color">;
const UserDialogButton = React.forwardRef<HTMLButtonElement, UserDialogButtonProps>(
  ({ children, element, ...props }, ref) => {
    return (
      <Button
        {...props}
        variant="reset"
        size="reset"
        borderRadius="borderRadius20"
        element={`${element}_BUTTON`}
        ref={ref}
      >
        {children}
      </Button>
    );
  },
);
UserDialogButton.displayName = "UserDialogButton";

export interface UserDialogProps extends HTMLPasteProps<"div">, NonModalDialogPrimitivePopoverInitialState {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "USER_DIALOG"
   * @type {BoxProps["element"]}
   * @memberof UserDialogProps
   */
  element?: BoxProps["element"];
  /**
   * Accessible label for the User Dialog
   *
   * @type {string}
   * @memberof UserDialogProps
   */
  "aria-label": string;
}
export const UserDialog = React.forwardRef<HTMLDivElement, UserDialogProps>(
  ({ children, "aria-label": label, element = "USER_DIALOG", ...props }, ref) => {
    const { userDialogState, avatarProps } = React.useContext(UserDialogContext);
    return (
      <>
        <NonModalDialogDisclosurePrimitive {...userDialogState} as={UserDialogButton} element={element}>
          <Box
            display="flex"
            columnGap="space20"
            alignItems="center"
            element={`${element}_BUTTON_CONTENTS`}
            color="colorTextIcon"
            _hover={{ color: "colorTextPrimaryStrongest" }}
          >
            <Avatar
              variant="user"
              size="sizeIcon40"
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
  },
);
UserDialog.displayName = "UserDialog";
