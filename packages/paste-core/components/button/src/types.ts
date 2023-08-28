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

export interface DirectButtonProps extends HTMLPasteProps<'button'>, Pick<BoxProps, 'element'> {
  /**
   * The HTML tag to replace the default `<button>` tag.
   * @default button
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
   * @default default
   */
  size: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  target?: string;
  /**
   * If the Button is inside a <form>: use 'submit'. Otherwise use 'button' (default).
   * @default button
   */
  type?: ButtonTypes;
  /**
   * @default primary
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
   * @default (link takes you to an external page)
   */
  i18nExternalLinkLabel?: string;
  /**
   * Prevent actions and show a loading spinner
   * @default false
   */
  loading?: boolean;
  /**
   * @default default
   */
  size?: ButtonSizes;
} & (BaseVariantsButtonProps | ResetVariantButtonProps);
