import type {BadgeProps} from '@twilio-paste/badge';
import type {ButtonProps} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';

export type ButtonBadgeProps = Omit<ButtonProps, 'variant' | 'children'> & Pick<BadgeProps, 'children' | 'variant'>;

type PopoverButtonBaseProps = Pick<BoxProps, 'element'> & {
  id?: string;
  toggle?: () => void;
};

type PopoverButtonAsButtonProps = Omit<ButtonProps, 'as'> & {as?: 'button'};
type PopoverButtonAsBadgeProps = Omit<BadgeProps, 'as'> & {as: 'badge'};

export type PopoverButtonProps = (PopoverButtonAsBadgeProps | PopoverButtonAsButtonProps) & PopoverButtonBaseProps;
