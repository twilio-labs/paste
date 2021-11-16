import type {BoxStyleProps} from '@twilio-paste/box';
import type {BadgeVariants} from './types';

export const badgeVariantStyles: {
  [key in BadgeVariants]: {backgroundColor: BoxStyleProps['backgroundColor']; color: BoxStyleProps['color']};
} = {
  success: {
    backgroundColor: 'colorBackgroundSuccessWeakest',
    color: 'colorTextSuccess',
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextError',
  },
  warning: {
    backgroundColor: 'colorBackgroundWarningWeakest',
    color: 'colorTextWarningStrong',
  },
  new: {
    backgroundColor: 'colorBackgroundNew',
    color: 'colorTextNew',
  },
  info: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
  },
  default: {
    backgroundColor: 'colorBackground',
    color: 'colorTextWeak',
  },
};

export const badgeFocusableStyles = {
  textDecoration: 'underline',
  cursor: 'pointer',
  _hover: {textDecoration: 'none'},
  _focus: {boxShadow: 'shadowFocus', textDecoration: 'none'},
} as Partial<BoxStyleProps>;
