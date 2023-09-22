import type { BadgeBaseProps, BadgeButtonProps } from '@twilio-paste/badge';
import type { BoxProps } from '@twilio-paste/box';
import type { ButtonProps } from '@twilio-paste/button';

export type ButtonBadgeProps = BadgeBaseProps &
  Omit<BadgeButtonProps, 'onClick'> & {
    onClick?: BadgeButtonProps['onClick'];
  };

type PopoverButtonBaseProps = Pick<BoxProps, 'element'> & {
  id?: string;
  toggle?: () => void;
};

export type PopoverButtonProps = PopoverButtonBaseProps & Omit<ButtonProps, 'as'>;
export type PopoverBadgeButtonProps = PopoverButtonBaseProps & Omit<ButtonBadgeProps, 'as'>;
