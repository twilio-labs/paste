import type {BoxProps} from '@twilio-paste/box';

export type BadgeVariants =
  | 'neutral'
  | 'warning'
  | 'error'
  | 'success'
  | 'new'
  | 'decorative10'
  | 'decorative20'
  | 'decorative30'
  | 'decorative40'
  | 'neutral_counter'
  | 'error_counter'
  // the following variants are outdated but still supported to prevent breaking changes
  | 'default'
  | 'info';

type BadgeBaseProps = Pick<BoxProps, 'element'> &
  React.HTMLAttributes<HTMLSpanElement> &
  React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement> & {
    children: NonNullable<React.ReactNode>;
    variant: BadgeVariants;
    as: 'span' | 'button' | 'a';
    href?: string;
  };
export type BadgeProps = BadgeBaseProps;
