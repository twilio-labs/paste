import type {BoxProps} from '@twilio-paste/box';

import type {BadgeVariants} from './constants';

export type BadgeSizes = 'default' | 'small';

export type BadgeBaseProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
  variant: typeof BadgeVariants[number];
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
