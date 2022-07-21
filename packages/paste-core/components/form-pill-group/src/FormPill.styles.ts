import type {VariantStyles} from './types';

/**
 * Wrapper styles
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
      color: 'inherit',
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
      color: 'inherit',
    },
    _selected_hover: {
      backgroundColor: 'colorBackgroundErrorStrongest',
      borderColor: 'transparent',
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
    color: 'inherit',
    _hover: {
      cursor: 'pointer',
      borderColor: 'colorBorderPrimaryStronger',
    },
  },
  error: {
    color: 'inherit',
    _hover: {
      cursor: 'pointer',
      borderColor: 'colorBorderErrorStronger',
    },
  },
};

export const selectedCloseStyles: VariantStyles = {
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
