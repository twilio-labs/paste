import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

import type {BadgeVariants} from './constants';

export type BadgeSizes = 'default' | 'small';

export type BadgeBaseProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
  variant: typeof BadgeVariants[number];
  size?: BadgeSizes;
};
export type BadgeSpanProps = HTMLPasteProps<'span'> & {
  as: 'span';
  href?: never;
  onClick?: never;
};
export type BadgeButtonProps = HTMLPasteProps<'button'> & {
  as: 'button';
  onClick: HTMLPasteProps<'button'>['onClick'];
  href?: never;
};
export type BadgeAnchorProps = HTMLPasteProps<'a'> & {
  as: 'a';
  href: string;
  onClick?: never;
};

export type BadgeProps = BadgeBaseProps & (BadgeSpanProps | BadgeButtonProps | BadgeAnchorProps);
