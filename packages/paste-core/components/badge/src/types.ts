import type {BoxProps} from '@twilio-paste/box';

export type BadgeVariants =
  | 'neutral'
  | 'warning'
  | 'error'
  | 'success'
  | 'new'
  | 'subaccount'
  | 'decorative10'
  | 'decorative20'
  | 'decorative30'
  | 'decorative40'
  | 'neutral_counter'
  | 'error_counter'
  // the following variants are outdated but still supported to prevent breaking changes
  | 'default'
  | 'info';

export type BadgeSizes = 'default' | 'small';

export type BadgeBaseProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
  variant: BadgeVariants;
  size?: BadgeSizes;
};
export type BadgeSpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  as: 'span';
  href?: never;
  onClick?: never;
};
export type BadgeButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as: 'button';
  onClick: React.HTMLAttributes<HTMLButtonElement>['onClick'];
  href?: never;
};
export type BadgeAnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
  onClick?: never;
};

export type BadgeProps = BadgeBaseProps & (BadgeSpanProps | BadgeButtonProps | BadgeAnchorProps);
