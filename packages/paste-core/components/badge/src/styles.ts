import type {BoxStyleProps} from '@twilio-paste/box';
import type {BadgeVariants} from './types';

export const badgeVariantStyles: {
  [key in BadgeVariants]: {
    backgroundColor: BoxStyleProps['backgroundColor'];
    color: BoxStyleProps['color'];
    borderRadius?: BoxStyleProps['borderRadius'];
  };
} = {
  success: {
    backgroundColor: 'colorBackgroundSuccessWeakest',
    color: 'colorTextSuccess',
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextErrorStrong',
  },
  warning: {
    backgroundColor: 'colorBackgroundWarningWeakest',
    color: 'colorTextWarningStrong',
  },
  new: {
    backgroundColor: 'colorBackgroundNew',
    color: 'colorTextNew',
  },
  neutral: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
  },
  decorative10: {
    backgroundColor: 'colorBackgroundDecorative10Weakest',
    color: 'colorTextDecorative10',
  },
  decorative20: {
    backgroundColor: 'colorBackgroundDecorative20Weakest',
    color: 'colorTextDecorative20',
  },
  decorative30: {
    backgroundColor: 'colorBackgroundDecorative30Weakest',
    color: 'colorTextDecorative30',
  },
  decorative40: {
    backgroundColor: 'colorBackgroundDecorative40Weakest',
    color: 'colorTextDecorative40',
  },
  neutral_counter: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
    borderRadius: 'borderRadiusPill',
  },
  error_counter: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextErrorStrong',
    borderRadius: 'borderRadiusPill',
  },
  // the following variants are outdated but still supported to prevent breaking changes
  default: {
    backgroundColor: 'colorBackground',
    color: 'colorTextWeak',
  },
  info: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
  },
};

export const badgeButtonStyles: {
  [key in BadgeVariants]: {
    boxShadow: BoxStyleProps['boxShadow'];
  };
} = {
  success: {
    boxShadow: 'shadowBorderBottomSuccessWeaker',
  },
  error: {
    boxShadow: 'shadowBorderBottomErrorWeaker',
  },
  warning: {
    boxShadow: 'shadowBorderBottomWarningWeaker',
  },
  new: {
    boxShadow: 'shadowBorderBottomNewWeaker',
  },
  neutral: {
    boxShadow: 'shadowBorderBottomNeutralWeaker',
  },
  decorative10: {
    boxShadow: 'shadowBorderBottomDecorative10Weaker',
  },
  decorative20: {
    boxShadow: 'shadowBorderBottomDecorative20Weaker',
  },
  decorative30: {
    boxShadow: 'shadowBorderBottomDecorative30Weaker',
  },
  decorative40: {
    boxShadow: 'shadowBorderBottomDecorative40Weaker',
  },
  neutral_counter: {
    boxShadow: 'shadowBorderBottomNeutralWeaker',
  },
  error_counter: {
    boxShadow: 'shadowBorderBottomErrorWeaker',
  },
  // the following variants are outdated but still supported to prevent breaking changes
  default: {
    boxShadow: 'shadowBorderBottomDecorative10Weaker',
  },
  info: {
    boxShadow: 'shadowBorderBottomNeutralWeaker',
  },
};

export const getBadgeAnchorStyles = (): BoxStyleProps => {
  return {
    textDecoration: 'underline',
    cursor: 'pointer',
    _hover: {textDecoration: 'none'},
    _focus: {textDecoration: 'none', boxShadow: 'shadowFocus'},
  };
};

export const getBadgeButtonStyles = (variant: BadgeVariants): BoxStyleProps => {
  const variantButtonStyle = badgeButtonStyles[variant];
  return {
    ...variantButtonStyle,
    cursor: 'pointer',
    _hover: {top: '1px', boxShadow: 'none'},
    _focus: {top: '1px', boxShadow: 'shadowFocus'},
  };
};
