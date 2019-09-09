export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorTabIndexes = 0 | -1;

export interface AnchorProps {
  id?: never;
  className?: never;
  href: string;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
  rel?: string;

  children: NonNullable<React.ReactNode>;

  onClick?(event: React.MouseEvent<HTMLElement>): void;
  onFocus?(event: React.FocusEvent<HTMLElement>): void;
  onBlur?(event: React.FocusEvent<HTMLElement>): void;
}
