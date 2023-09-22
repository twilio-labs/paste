import type { BoxProps, BoxStyleProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';

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
type ButtonBaseVariants =
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
  | 'inverse';
type ButtonResetVariant = 'reset';
export type ButtonVariants = ButtonResetVariant | ButtonBaseVariants;
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonContentsProps {
  buttonState: ButtonStates;
  showLoading: boolean;
  variant?: ButtonVariants;
}

export interface DirectButtonProps extends HTMLPasteProps<'button'> {
  /**
   * The HTML tag to replace the default `<button>` tag.
   * @default 'button'
   */
  as?: keyof JSX.IntrinsicElements;
  buttonState: ButtonStates;
  children: React.ReactNode;
  /**
   * Prevent actions from firing on this Button
   * @default false
   */
  disabled?: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'BUTTON'
   * @type {BoxProps['element']}
   * @memberof DirectButtonProps
   */
  element?: BoxProps['element'];
  /**
   * Sets the Button width to 100% of the parent container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * A URL to route to. Must use as="a" for this prop to work.
   * @default null
   */
  href?: string;
  /**
   * Sets the aria-pressed attribute. Must be used with 'secondary' or 'secondary_icon' variants.
   * @default false
   */
  pressed?: boolean;
  /**
   * @default 'default'
   */
  size: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  target?: string;
  /**
   * Use at least one `submit` button per `<form>`. Outside of forms use `button` (default).
   * @default 'button'
   */
  type?: ButtonTypes;
  /**
   * @default 'primary'
   */
  variant: ButtonVariants;
}

type BaseVariantsButtonProps = {
  variant?: ButtonBaseVariants;
};
type ResetVariantButtonProps = Omit<BoxStyleProps, 'size'> & {
  variant?: ButtonResetVariant;
};

export type ButtonProps = Omit<DirectButtonProps, 'buttonState' | 'i18nExternalLinkLabel' | 'loading' | 'size'> & {
  /**
   * Title for showExternal icon
   * @default '(link takes you to an external page)'
   */
  i18nExternalLinkLabel?: string;
  /**
   * Prevent actions and show a loading spinner
   * @default false
   */
  loading?: boolean;
  /**
   * @default 'default'
   */
  size?: ButtonSizes;
} & (BaseVariantsButtonProps | ResetVariantButtonProps);
