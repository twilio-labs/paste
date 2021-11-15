import {safelySpreadBoxProps} from '@twilio-paste/box';
import type {BadgeProps} from './types';

export const isFocusableElement = ({as}: Partial<BadgeProps>): boolean => as === 'button' || as === 'a';

export const getBadgeSpanProps = (props: Partial<BadgeProps>): Partial<BadgeProps> => {
  if (isFocusableElement(props)) {
    return {};
  }
  return safelySpreadBoxProps(props);
};
