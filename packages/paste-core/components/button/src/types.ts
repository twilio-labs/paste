import * as PropTypes from 'prop-types';
import {BoxProps} from '@twilio-paste/box';

type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes = 'small' | 'default' | 'icon' | 'reset';
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'destructive_link'
  | 'link'
  | 'inverse'
  | 'reset';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonContentsProps {
  buttonState: ButtonStates;
  showLoading: boolean;
}

export const DirectButtonPropTypes = {
  as: PropTypes.string as any,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']).isRequired as any,
  tabIndex: PropTypes.oneOf([0, -1]) as any,
  type: PropTypes.oneOf(['submit', 'button', 'reset']) as any,
  disabled: PropTypes.bool,
  buttonState: PropTypes.oneOf(['disabled', 'loading', 'default']).isRequired as any,
};

export interface DirectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Pick<BoxProps, 'element'> {
  size: ButtonSizes;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  ref?: any;
  fullWidth?: boolean;
  href?: string;
  tabIndex?: ButtonTabIndexes;
  disabled?: boolean;
  type?: ButtonTypes;
  buttonState: ButtonStates;
  variant: ButtonVariants;
}

export const ButtonPropTypes = {
  as: PropTypes.string as any,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']) as any,
  tabIndex: PropTypes.oneOf([0, -1]) as any,
  type: PropTypes.oneOf(['submit', 'button', 'reset']) as any,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset'])
    .isRequired as any,
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Pick<BoxProps, 'element'> {
  variant: ButtonVariants;
  size?: ButtonSizes;
  as?: keyof JSX.IntrinsicElements;
  ref?: any;
  fullWidth?: boolean;
  href?: string;
  tabIndex?: ButtonTabIndexes;
  disabled?: boolean;
  type?: ButtonTypes;
  loading?: boolean;
  children: React.ReactNode;
}
