import type { AvatarContentProps } from "@twilio-paste/avatar";
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
  /**
   * useUserDialog state hook return value
   *
   * @type {UseUserDialogStateReturnProps}
   * @memberof UserDialogContainerProps
   */
  state?: UseUserDialogStateReturnProps;
  /**
   * Provides name for the Avatar initials
   *
   * @type {string}
   * @memberof UserDialogContainerProps
   */
  name: string;
  /**
   * Provides an image for the Avatar
   *
   * @type {string}
   * @memberof UserDialogContainerProps
   */
  src?: string;
  /**
   * Provides an icon for the Avatar
   *
   * @type {React.FC<React.PropsWithChildren<GenericIconProps>>}
   * @memberof UserDialogContainerProps
   */
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
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
