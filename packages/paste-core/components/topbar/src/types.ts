import type {BoxProps} from '@twilio-paste/box';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
} from '@twilio-paste/non-modal-dialog-primitive';
import type {AvatarContentProps} from '@twilio-paste/avatar';

export interface UserDialogUserInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}

export interface UserDialogUserTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  element?: BoxProps['element'];
}

export interface UserDialogPopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  element?: BoxProps['element'];
}

export type UserDialogStateReturn = NonModalDialogPrimitiveStateReturn;

export interface UserDialogProps
  extends React.HTMLAttributes<HTMLDivElement>,
    NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  'aria-label': string;
}

export interface UserDialogContainerProps extends NonModalDialogPrimitivePopoverInitialState {
  children: NonNullable<React.ReactNode>;
  state?: NonModalDialogPrimitiveStateReturn;
  name: string;
  src?: string;
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
  element?: BoxProps['element'];
}

export interface UserDialogContextProps {
  userDialogState: NonModalDialogPrimitiveStateReturn;
  avatarProps: Pick<AvatarContentProps, 'name' | 'src' | 'icon'>;
}
