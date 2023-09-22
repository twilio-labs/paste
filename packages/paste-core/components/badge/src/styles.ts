import type { BoxStyleProps } from '@twilio-paste/box';

import type { BadgeVariants } from './constants';

export const badgeBaseStyles: BoxStyleProps = {
  alignItems: 'center',
  border: 'unset',
  borderRadius: 'borderRadius20',
  columnGap: 'space20',
  display: 'flex',
  fontSize: 'fontSize20',
  fontWeight: 'fontWeightSemibold',
  lineHeight: 'lineHeight10',
  maxWidth: 'max-content',
  // these next props are from button-reset styles
  appearance: 'none',
  background: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  position: 'relative',
};

export const badgeVariantStyles: {
  [key in typeof BadgeVariants[number]]: {
    backgroundColor: BoxStyleProps['backgroundColor'];
    color: BoxStyleProps['color'];
    borderRadius?: BoxStyleProps['borderRadius'];
    boxShadow: BoxStyleProps['boxShadow'];
  };
} = {
  success: {
    backgroundColor: 'colorBackgroundSuccessWeakest',
    color: 'colorTextSuccess',
    boxShadow: 'shadowBorderSuccessWeaker',
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextError',
    boxShadow: 'shadowBorderErrorWeaker',
  },
  warning: {
    backgroundColor: 'colorBackgroundWarningWeakest',
    color: 'colorTextWarning',
    boxShadow: 'shadowBorderWarningWeaker',
  },
  new: {
    backgroundColor: 'colorBackgroundNewWeakest',
    color: 'colorTextNew',
    boxShadow: 'shadowBorderNewWeaker',
  },
  neutral: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
    boxShadow: 'shadowBorderNeutralWeaker',
  },
  subaccount: {
    backgroundColor: 'colorBackgroundSubaccount',
    color: 'colorTextSubaccount',
    boxShadow: 'shadowBorderSubaccount',
  },
  decorative10: {
    backgroundColor: 'colorBackgroundDecorative10Weakest',
    color: 'colorTextDecorative10',
    boxShadow: 'shadowBorderDecorative10Weaker',
  },
  decorative20: {
    backgroundColor: 'colorBackgroundDecorative20Weakest',
    color: 'colorTextDecorative20',
    boxShadow: 'shadowBorderDecorative20Weaker',
  },
  decorative30: {
    backgroundColor: 'colorBackgroundDecorative30Weakest',
    color: 'colorTextDecorative30',
    boxShadow: 'shadowBorderDecorative30Weaker',
  },
  decorative40: {
    backgroundColor: 'colorBackgroundDecorative40Weakest',
    color: 'colorTextDecorative40',
    boxShadow: 'shadowBorderDecorative40Weaker',
  },
  neutral_counter: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
    borderRadius: 'borderRadiusPill',
    boxShadow: 'shadowBorderNeutralWeaker',
  },
  error_counter: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextError',
    borderRadius: 'borderRadiusPill',
    boxShadow: 'shadowBorderErrorWeaker',
  },
  default: {
    backgroundColor: 'colorBackgroundBody',
    color: 'colorText',
    boxShadow: 'shadowBorderWeaker',
  },
  /*
   * the following variants are outdated but still supported to prevent breaking changes
   */
  info: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
    boxShadow: 'shadowBorderNeutralWeaker',
  },
};

export const badgeButtonStyles: {
  [key in typeof BadgeVariants[number]]: {
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
  subaccount: {
    boxShadow: 'shadowBorderBottomSubaccount',
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

export const badgeAnchorStyles: BoxStyleProps = {
  textDecoration: 'underline',
  cursor: 'pointer',
  _hover: { textDecoration: 'none' },
  _focus: { textDecoration: 'none', boxShadow: 'shadowFocus' },
};

export const getBadgeButtonStyles = (variant: typeof BadgeVariants[number]): BoxStyleProps => {
  const variantButtonStyle = badgeButtonStyles[variant];
  return {
    ...variantButtonStyle,
    cursor: 'pointer',
    _hover: { top: '1px', boxShadow: 'none' },
    _focus: { top: '1px', boxShadow: 'shadowFocus' },
  };
};
