type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes = 'small' | 'default' | 'icon' | 'icon_small' | 'reset';
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'destructive'
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

export interface DirectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
