import type {BadgeProps} from '@twilio-paste/badge';
import type {ButtonProps} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';

export type ButtonBadgeProps = Omit<ButtonProps, 'variant' | 'children'> & Pick<BadgeProps, 'children' | 'variant'>;

type PopoverButtonBaseProps = Pick<BoxProps, 'element'> & {
  id?: string;
  toggle?: () => void;
};

export type PopoverButtonProps = PopoverButtonBaseProps & Omit<ButtonProps, 'as'>;
export type PopoverBadgeButtonProps = PopoverButtonBaseProps & Omit<BadgeProps, 'as'>;
