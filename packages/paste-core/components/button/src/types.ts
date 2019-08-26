type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes = 'small' | 'default' | 'icon' | 'reset';
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'destructive_link' | 'link' | 'reset';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonProps {
  id?: never;
  className?: never;
  type?: ButtonTypes;
  href?: string;
  autoFocus?: boolean;
  as?: string;
  tabIndex?: ButtonTabIndexes;

  variant: ButtonVariants;
  size?: ButtonSizes;
  fullWidth?: boolean;

  children: React.ReactNode;

  disabled?: boolean;
  loading?: boolean;

  // For accordions
  'aria-expanded'?: boolean;
  // For modal and menus
  'aria-haspopup'?: 'true' | 'dialog' | 'menu';
  'aria-controls'?: string;
  // For testing
  'data-test'?: string;

  onClick?(event: React.MouseEvent<HTMLElement>): void;
  onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
  onMouseUp?(event: React.MouseEvent<HTMLElement>): void;
  onMouseEnter?(event: React.MouseEvent<HTMLElement>): void;
  onMouseLeave?(event: React.MouseEvent<HTMLElement>): void;
  onFocus?(event: React.FocusEvent<HTMLElement>): void;
  onBlur?(event: React.FocusEvent<HTMLElement>): void;
}

export interface ButtonWrapperProps extends ButtonProps {
  buttonState: ButtonStates;
}

export interface ButtonChildrenProps {
  buttonState: ButtonStates;
}
