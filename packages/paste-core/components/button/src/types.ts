import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
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
  as?: keyof JSX.IntrinsicElements;
  buttonState: ButtonStates;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  pressed?: boolean;
  size: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  target?: string;
  type?: ButtonTypes;
  variant: ButtonVariants;
}

type BaseVariantsButtonProps = {
  variant?: Omit<ButtonVariants, 'reset'>;
};
type ResetVariantButtonProps = BoxStyleProps & {
  variant?: 'reset';
};

export type ButtonProps = (BaseVariantsButtonProps | ResetVariantButtonProps) &
  Omit<DirectButtonProps, 'buttonState' | 'i18nExternalLinkLabel' | 'loading' | 'size'> & {
    i18nExternalLinkLabel?: string;
    loading?: boolean;
    size?: DirectButtonProps['size'];
  };
