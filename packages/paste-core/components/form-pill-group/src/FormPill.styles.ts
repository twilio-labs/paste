import type {BoxStyleProps} from '@twilio-paste/box';

import type {VariantStyles} from './types';

/**
 * Wrapper styles
 * If the pill is hoverable (i.e. can be selected), we set the color of the 'x' to inherit and set the color on the wrapper. This is so that when anywhere on the pill is hovered, the 'x' matches the rest of the content.
 * If the pill is not hoverable, we set the color of the 'x' to the correct tokens.
 */

export const wrapperStyles: VariantStyles = {
  default: {
    color: 'colorTextIcon',
    _hover: {
      color: 'colorTextLinkStronger',
    },
  },
  error: {
    color: 'colorTextIcon',
    _hover: {
      color: 'colorTextErrorStronger',
    },
  },
};

export const selectedWrapperStyles: VariantStyles = {
  default: {
    color: 'colorTextWeakest',
    _hover: {
      color: 'colorTextInverse',
    },
  },
  error: {
    color: 'colorTextInverse',
    _hover: {
      color: 'colorTextWeakest',
    },
  },
};

/*
 * Pill styles
 */

export const pillStyles: VariantStyles = {
  default: {
    color: 'colorText',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryWeaker',

    _focus: {
      boxShadow: 'shadowFocus',
      color: 'colorText',
    },
    _selected: {
      backgroundColor: 'colorBackgroundPrimaryStronger',
      boxShadow: 'shadowBorderPrimaryStronger',
      color: 'colorTextWeakest',
    },
    _selected_focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextWeakest',
    },
    _disabled: {
      backgroundColor: 'colorBackgroundStrong',
      boxShadow: 'shadowBorderWeaker',
      cursor: 'not-allowed',
      color: 'colorText',
    },
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    boxShadow: 'shadowBorderErrorWeaker',
    color: 'colorTextError',

    _focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextErrorStrong',
    },
    _selected: {
      backgroundColor: 'colorBackgroundError',
      boxShadow: 'shadowBorderError',
      color: 'colorTextInverse',
    },
    _selected_focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextInverse',
    },
    _disabled: {
      backgroundColor: 'colorBackgroundStrong',
      boxShadow: 'shadowBorderWeaker',
      cursor: 'not-allowed',
      color: 'colorText',
    },
  },
};

export const hoverPillStyles: VariantStyles = {
  default: {
    cursor: 'pointer',
    color: 'colorText',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryWeaker',

    _hover: {
      boxShadow: 'shadowBorderPrimaryStronger',
      color: 'colorTextPrimaryStronger',
    },
    _selected_hover: {
      backgroundColor: 'colorBackgroundPrimary',
      boxShadow: 'shadowBorderPrimary',
      color: 'colorTextInverse',
    },
    _focus_hover: {
      boxShadow: 'shadowFocus',
    },
  },
  error: {
    cursor: 'pointer',
    backgroundColor: 'colorBackgroundErrorWeakest',
    boxShadow: 'shadowBorderErrorWeaker',
    color: 'colorTextError',

    _hover: {
      boxShadow: 'shadowBorderErrorStronger',
      color: 'colorTextErrorStronger',
    },
    _selected_hover: {
      backgroundColor: 'colorBackgroundErrorStrongest',
      boxShadow: 'shadowBorderErrorStrongest',
      color: 'colorTextWeakest',
    },
    _focus_hover: {
      boxShadow: 'shadowFocus',
    },
  },
};

/**
 * Close icon styles
 */

export const baseCloseStyles: VariantStyles = {
  default: {
    _hover: {
      cursor: 'pointer',
      boxShadow: 'shadowBorderPrimaryStronger',
    },
  },
  error: {
    _hover: {
      backgroundColor: 'colorBackgroundErrorWeakest',
      boxShadow: 'shadowBorderErrorStronger',
      cursor: 'pointer',
    },
  },
};

export const selectedBaseCloseStyles: VariantStyles = {
  default: {
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'colorBackgroundPrimary',
      boxShadow: 'shadowBorderPrimary',
    },
  },
  error: {
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'colorBackgroundErrorStrongest',
      boxShadow: 'shadowBorderErrorStrongest',
    },
  },
};

export const closeInheritColorStyles: BoxStyleProps = {
  color: 'inherit',
  _hover: {
    color: 'inherit',
  },
};

export const closeColorStyles: VariantStyles = {
  default: {
    color: 'colorTextIcon',
    _hover: {
      color: 'colorTextPrimaryStronger',
    },
  },
  error: {
    color: 'colorTextIcon',
    _hover: {
      color: 'colorTextErrorStronger',
    },
  },
};

export const selectedCloseColorStyles: VariantStyles = {
  default: {
    color: 'colorTextWeakest',
    _hover: {
      color: 'colorTextInverse',
    },
  },
  error: {
    color: 'colorTextInverse',
    _hover: {
      color: 'colorTextWeakest',
    },
  },
};
