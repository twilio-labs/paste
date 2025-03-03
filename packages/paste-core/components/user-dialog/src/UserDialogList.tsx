import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type {
  ListboxPrimitiveInitialState,
  ListboxPrimitiveProps,
  ListboxPrimitiveStateReturn,
} from "@twilio-paste/listbox-primitive";
import { ListboxPrimitive, useListboxPrimitiveState } from "@twilio-paste/listbox-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export type UseUserDialogListStateProps = ListboxPrimitiveInitialState;
export type UseUserDialogListStateReturnProps = ListboxPrimitiveStateReturn;
export const useUserDialogListState = (props?: UseUserDialogListStateProps): UseUserDialogListStateReturnProps => {
  return useListboxPrimitiveState({ ...props, orientation: "vertical" });
};

interface UserDialogListboxProps extends HTMLPasteProps<"div"> {
  element?: BoxProps["element"];
}
const UserDialogListbox = React.forwardRef<HTMLDivElement, UserDialogListboxProps>(
  ({ element = "USER_DIALOG", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={`${element}_LIST`}
        backgroundColor="colorBackgroundWeaker"
        borderRadius="borderRadius30"
        paddingY="space30"
        ref={ref}
      >
        {props.children}
      </Box>
    );
  },
);
UserDialogListbox.displayName = "UserDialogListbox";

export interface UserDialogListProps extends ListboxPrimitiveProps {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "USER_DIALOG_LIST"
   * @type {BoxProps["element"]}
   * @memberof UserDialogListProps
   */
  element?: BoxProps["element"];
  /**
   * Accessible description of the list
   *
   * @type {string}
   * @memberof UserDialogListProps
   */
  "aria-label": string;
}
export const UserDialogList = React.forwardRef<HTMLDivElement, UserDialogListProps>(({ children, ...props }, ref) => {
  return (
    <ListboxPrimitive {...props} as={UserDialogListbox} ref={ref}>
      {children}
    </ListboxPrimitive>
  );
});
UserDialogList.displayName = "UserDialogList";
