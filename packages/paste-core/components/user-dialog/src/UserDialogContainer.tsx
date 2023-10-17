import type { AvatarContentProps } from "@twilio-paste/avatar";
import type { BoxProps } from "@twilio-paste/box";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import { useNonModalDialogPrimitiveState } from "@twilio-paste/non-modal-dialog-primitive";
import type {
  NonModalDialogPrimitivePopoverInitialState,
  NonModalDialogPrimitiveStateReturn,
} from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

interface UserDialogContextProps {
  userDialogState: NonModalDialogPrimitiveStateReturn;
  avatarProps: Pick<AvatarContentProps, "name" | "src" | "icon">;
}
export const UserDialogContext = React.createContext<UserDialogContextProps>({} as UserDialogContextProps);

export type UseUserDialogStateProps = NonModalDialogPrimitivePopoverInitialState;
export type UseUserDialogStateReturnProps = NonModalDialogPrimitiveStateReturn;

export const useUserDialogState = (props?: UseUserDialogStateProps): UseUserDialogStateReturnProps => {
  return useNonModalDialogPrimitiveState({ ...props, placement: "bottom-start", gutter: 0 });
};

export interface UserDialogContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: UseUserDialogStateReturnProps;
  name: string;
  src?: string;
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
  element?: BoxProps["element"];
}
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
      placement: "bottom-start",
      gutter: 0,
      ...initialState,
    });
  const avatarProps = { name, src, icon };
  return (
    <UserDialogContext.Provider value={{ userDialogState: nonModalDialogState, avatarProps }}>
      {children}
    </UserDialogContext.Provider>
  );
};
UserDialogContainer.displayName = "UserDialogContainer";
