import type {BadgeBaseProps, BadgeSpanProps, BadgeVariants} from '@twilio-paste/badge';
import type {MenuItemProps} from '@twilio-paste/menu';
import type {TextColorOptions} from '@twilio-paste/style-props';

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

export type StatusBadges = {
  [key in StatusBadgeVariants]: {
    badgeVariant: typeof BadgeVariants[number];
    icon: React.ReactNode;
    color: TextColorOptions;
  };
};

export type StatusBadgeProps = Omit<BadgeBaseProps, 'variant'> &
  BadgeSpanProps & {
    variant: StatusBadgeVariants;
  };

type StatusMenuItemVariant = StatusBadgeVariants;

export interface StatusMenuItemProps extends Omit<MenuItemProps, 'variant'> {
  variant: StatusMenuItemVariant;
}
