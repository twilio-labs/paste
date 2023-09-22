import type { BoxProps } from '@twilio-paste/box';
import type { GenericIconProps } from '@twilio-paste/icons/esm/types';
import type {
  NonModalDialogPrimitiveStateReturn,
  NonModalDialogPrimitivePopoverInitialState,
  NonModalDialogDisclosurePrimitiveProps,
} from '@twilio-paste/non-modal-dialog-primitive';
import type { AvatarContentProps } from '@twilio-paste/avatar';
import type {
  ListboxPrimitiveProps,
  ListboxPrimitiveItemProps,
  ListboxPrimitiveGroupProps,
} from '@twilio-paste/listbox-primitive';
import type { ButtonProps } from '@twilio-paste/button';
import type { HTMLPasteProps } from '@twilio-paste/types';

export interface UserDialogUserInfoProps extends HTMLPasteProps<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}

export interface UserDialogUserTextProps extends HTMLPasteProps<'div'> {
  children: string;
  element?: BoxProps['element'];
}

export type UserDialogPopoverProps = BoxProps;

export type UserDialogStateReturn = NonModalDialogPrimitiveStateReturn;

export interface UserDialogProps extends HTMLPasteProps<'div'>, NonModalDialogPrimitivePopoverInitialState {
  children: React.ReactNode;
  element?: BoxProps['element'];
  'aria-label': string;
}

export type UserDialogButtonProps = Omit<ButtonProps, 'variant'> &
  Omit<NonModalDialogDisclosurePrimitiveProps, 'color'>;

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

export interface UserDialogListProps extends ListboxPrimitiveProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  ['aria-label']: string;
}

export interface UserDialogListboxProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
}

export interface UserDialogListItemProps extends ListboxPrimitiveItemProps {
  href?: string;
  element?: BoxProps['element'];
}

export interface UserDialogListboxItemProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
  href?: string;
}

export interface UserDialogListGroupProps extends ListboxPrimitiveGroupProps {
  element?: BoxProps['element'];
}

export interface UserDialogListboxGroupProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
}
