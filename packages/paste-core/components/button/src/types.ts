import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes =
  | 'small'
  | 'default'
  | 'icon'
  | 'icon_small'
  | 'reset'
  | 'rounded_small'
  | 'circle'
  | 'circle_small';
export type ButtonVariants =
  | 'primary'
  | 'primary_icon'
  | 'secondary'
  | 'secondary_icon'
  | 'destructive'
  | 'destructive_icon'
  | 'destructive_link'
  | 'destructive_secondary'
  | 'link'
  | 'inverse_link'
  | 'inverse'
  | 'reset';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonContentsProps {
  buttonState: ButtonStates;
  showLoading: boolean;
  variant?: ButtonVariants;
}

export interface DirectButtonProps extends HTMLPasteProps<'button'>, Pick<BoxProps, 'element'> {
  size: ButtonSizes;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  href?: string;
  tabIndex?: ButtonTabIndexes;
  disabled?: boolean;
  type?: ButtonTypes;
  buttonState: ButtonStates;
  variant: ButtonVariants;
  pressed?: boolean;
  target?: string;
}

export interface ButtonProps extends HTMLPasteProps<'button'>, Pick<BoxProps, 'element'> {
  variant: ButtonVariants;
  size?: ButtonSizes;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  href?: string;
  tabIndex?: ButtonTabIndexes;
  disabled?: boolean;
  type?: ButtonTypes;
  loading?: boolean;
  children: React.ReactNode;
  i18nExternalLinkLabel?: string;
  pressed?: boolean;
  target?: string;
}
