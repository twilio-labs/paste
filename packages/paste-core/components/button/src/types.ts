type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes = 'small' | 'default' | 'icon' | 'reset';
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'destructive_link' | 'link' | 'reset';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  size?: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  type?: ButtonTypes;
  variant: ButtonVariants;
}

export interface ButtonWrapperProps extends ButtonProps {
  buttonState: ButtonStates;
}

export interface ButtonChildrenProps {
  buttonState: ButtonStates;
}
