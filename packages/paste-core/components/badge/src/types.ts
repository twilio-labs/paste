import type {BoxProps} from '@twilio-paste/box';
import type {TextColorOptions} from '@twilio-paste/style-props';

import type {BadgeVariants} from './constants';

export type StatusBadgeVariants =
  | 'ProcessError'
  | 'ProcessWarning'
  | 'ProcessSuccess'
  | 'ProcessNeutral'
  | 'ProcessInProgress'
  | 'ProcessDisabled'
  | 'ProcessDraft'
  | 'ConnectivityAvailable'
  | 'ConnectivityBusy'
  | 'ConnectivityUnavailable'
  | 'ConnectivityOffline'
  | 'ConnectivityNeutral';

export type BadgeSizes = 'default' | 'small';

export type StatusBadges = {
  [key in StatusBadgeVariants]: {
    badgeVariant: typeof BadgeVariants[number];
    icon: React.ReactNode;
    color: TextColorOptions;
  };
};

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

export type StatusBadgeProps = Omit<BadgeBaseProps, 'variant'> &
  BadgeSpanProps & {
    variant: StatusBadgeVariants;
  };
