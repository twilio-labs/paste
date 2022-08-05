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

    _focus: {
      boxShadow: 'shadowFocus',
      color: 'colorText',
    },
    _selected: {
      backgroundColor: 'colorBackgroundPrimaryStronger',
      color: 'colorTextWeakest',
    },
    _selected_focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextWeakest',
    },
    _disabled: {
      backgroundColor: 'colorBackgroundStrong',
      cursor: 'not-allowed',
      color: 'colorText',
    },
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextErrorStrong',

    _focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextErrorStrong',
    },
    _selected: {
      backgroundColor: 'colorBackgroundError',
      color: 'colorTextInverse',
    },
    _selected_focus: {
      boxShadow: 'shadowFocus',
      color: 'colorTextInverse',
    },
    _disabled: {
      backgroundColor: 'colorBackgroundStrong',
      cursor: 'not-allowed',
      color: 'colorText',
    },
  },
};

export const hoverPillStyles: VariantStyles = {
  default: {
    cursor: 'pointer',
    color: 'colorText',

    _hover: {
      borderColor: 'colorBorderPrimaryStronger',
      color: 'colorTextLinkStronger',
    },
    _selected_hover: {
      backgroundColor: 'colorBackgroundPrimary',
      borderColor: 'transparent',
      color: 'colorTextInverse',
    },
    _focus_hover: {
      borderColor: 'transparent',
    },
  },
  error: {
    cursor: 'pointer',
    color: 'colorTextErrorStrong',

    _hover: {
      borderColor: 'colorBorderErrorStronger',
      color: 'colorTextErrorStronger',
    },
    _selected_hover: {
      backgroundColor: 'colorBackgroundErrorStrongest',
      borderColor: 'transparent',
      color: 'colorTextWeakest',
    },
    _focus_hover: {
      borderColor: 'transparent',
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
      borderColor: 'colorBorderPrimaryStronger',
    },
  },
  error: {
    _hover: {
      cursor: 'pointer',
      borderColor: 'colorBorderErrorStronger',
    },
  },
};

export const selectedBaseCloseStyles: VariantStyles = {
  default: {
    _hover: {
      cursor: 'pointer',
      borderColor: 'transparent',
      backgroundColor: 'colorBackgroundPrimary',
    },
  },
  error: {
    _hover: {
      cursor: 'pointer',
      borderColor: 'transparent',
      backgroundColor: 'colorBackgroundErrorStrongest',
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
