import type {BadgeBaseProps, BadgeButtonProps} from '@twilio-paste/badge';
import type {ButtonProps} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';

export type ButtonBadgeProps = BadgeBaseProps & BadgeButtonProps;

type PopoverButtonBaseProps = Pick<BoxProps, 'element'> & {
  id?: string;
  toggle?: () => void;
};

export type PopoverButtonProps = PopoverButtonBaseProps & Omit<ButtonProps, 'as'>;
export type PopoverBadgeButtonProps = PopoverButtonBaseProps & Omit<ButtonBadgeProps, 'as'>;
