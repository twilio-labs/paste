import type {ButtonProps} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';

export type NamedChild = React.ReactElement<Record<string, any>, React.NamedExoticComponent>;

export type BadgeChildren = NamedChild | React.ReactText | (React.ReactText | NamedChild)[];

export type BadgeVariants = 'info' | 'default' | 'warning' | 'error' | 'success' | 'new';
export type BadgeBaseElements = 'button' | 'span' | 'a';
export interface BadgeProps extends Omit<ButtonProps, 'variant' | 'as'>, Pick<BoxProps, 'element'> {
  variant: BadgeVariants;
  children: BadgeChildren;
  as: BadgeBaseElements;
}
