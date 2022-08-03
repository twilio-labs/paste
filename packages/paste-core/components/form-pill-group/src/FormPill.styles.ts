import type {VariantStyles} from './types';

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

export const closeStyles: VariantStyles = {
  default: {
    color: 'colorTextIcon',
    _hover: {
      cursor: 'pointer',
      borderColor: 'colorBorderPrimaryStronger',
      color: 'colorTextLinkStronger',
    },
  },
  error: {
    color: 'colorTextIcon',
    _hover: {
      cursor: 'pointer',
      borderColor: 'colorBorderErrorStronger',
      color: 'colorTextErrorStronger',
    },
  },
};

export const selectedCloseStyles: VariantStyles = {
  default: {
    color: 'colorTextWeakest',
    _hover: {
      cursor: 'pointer',
      borderColor: 'transparent',
      backgroundColor: 'colorBackgroundPrimary',
      color: 'colorTextInverse',
    },
  },
  error: {
    color: 'colorTextInverse',
    _hover: {
      cursor: 'pointer',
      borderColor: 'transparent',
      backgroundColor: 'colorBackgroundErrorStrongest',
      color: 'colorTextWeakest',
    },
  },
};
