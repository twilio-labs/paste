import type {ButtonProps} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';

export type BadgeVariants = 'info' | 'default' | 'warning' | 'error' | 'success' | 'new';

type BadgeBaseProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
  variant: BadgeVariants;
};
type BadgeAsSpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  as: 'span';
};
type BadgeAsButtonProps = Omit<ButtonProps, 'variant' | 'as' | 'fullWidth' | 'size' | 'children'> & {
  as: 'button';
  onClick: ButtonProps['onClick'];
};
type BadgeAsAnchorProps = Omit<ButtonProps, 'variant' | 'as' | 'fullWidth' | 'size' | 'children'> & {
  as: 'a';
  href: ButtonProps['href'];
  onClick?: never;
};
export type BadgeProps = (BadgeAsSpanProps | BadgeAsButtonProps | BadgeAsAnchorProps) & BadgeBaseProps;
