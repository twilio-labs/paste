import {PasteToken} from '../models/paste-token';

export const textColors: Record<string, PasteToken> = {
  colorText: {
    label: 'color-text',
    value: 'rgb(18, 28, 45)',
    description: 'Body text color',
  },
  colorTextBrandHighlight: {
    label: 'color-text-brand-highlight',
    value: 'rgb(242, 47, 70)',
    description: 'Twilio brand red, accessible on large text only.',
  },
  colorTextBrandInverse: {
    label: 'color-text-brand-inverse',
    value: 'rgb(255, 255, 255)',
    description: 'Text color used on any brand color',
  },
  colorTextDecorative10: {
    label: 'color-text-decorative-10',
    value: 'rgb(96, 107, 133)',
    description:
      'Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.',
  },
  colorTextDecorative20: {
    label: 'color-text-decorative-20',
    value: 'rgb(0, 20, 137)',
    description:
      'Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.',
  },
  colorTextDecorative30: {
    label: 'color-text-decorative-30',
    value: 'rgb(14, 124, 58)',
    description:
      'Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.',
  },
  colorTextDecorative40: {
    label: 'color-text-decorative-40',
    value: 'rgb(109, 46, 209)',
    description:
      'Text color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or border tokens.',
  },
  colorTextError: {
    label: 'color-text-error',
    value: 'rgb(214, 31, 31)',
    description: 'Error text for inputs and error misc',
  },
  colorTextErrorStrong: {
    label: 'color-text-error-strong',
    value: 'rgb(173, 17, 17)',
    description: 'Strong error text for inputs and error misc',
  },
  colorTextErrorWeak: {
    label: 'color-text-error-weak',
    value: 'rgb(235, 86, 86)',
    description: 'Weak error text for inputs and error misc',
  },
  colorTextIcon: {
    label: 'color-text-icon',
    value: 'rgb(96, 107, 133)',
    description: 'Default icon color.',
  },
  colorTextIconAvailable: {
    label: 'color-text-icon-available',
    value: 'rgb(14, 124, 58)',
    description: 'Icon color for indicating a available status',
  },
  colorTextIconBrandHighlight: {
    label: 'color-text-icon-brand-highlight',
    value: 'rgb(242, 47, 70)',
    description: 'Twilio brand red icon color used for the Twilio logo.',
  },
  colorTextIconBrandInverse: {
    label: 'color-text-icon-brand-inverse',
    value: 'rgb(255, 255, 255)',
    description: 'Twilio brand icon color used for the Twilio logo on inverse backgrounds.',
  },
  colorTextIconBusy: {
    label: 'color-text-icon-busy',
    value: 'rgb(227, 106, 25)',
    description: 'Icon color for indicating a busy status',
  },
  colorTextIconError: {
    label: 'color-text-icon-error',
    value: 'rgb(214, 31, 31)',
    description: 'Icon color for indicating an error.',
  },
  colorTextIconInverse: {
    label: 'color-text-icon-inverse',
    value: 'rgb(136, 145, 170)',
    description: 'Default icon color for inverse backgrounds.',
  },
  colorTextIconNeutral: {
    label: 'color-text-icon-neutral',
    value: 'rgb(0, 20, 137)',
    description: 'Icon color for being neutral.',
  },
  colorTextIconOffline: {
    label: 'color-text-icon-offline',
    value: 'rgb(96, 107, 133)',
    description: 'Icon color for indicating a offline status',
  },
  colorTextIconSuccess: {
    label: 'color-text-icon-success',
    value: 'rgb(14, 124, 58)',
    description: 'Icon color for indicating success.',
  },
  colorTextIconUnavailable: {
    label: 'color-text-icon-unavailable',
    value: 'rgb(214, 31, 31)',
    description: 'Icon color for indicating a unavailable status',
  },
  colorTextIconWarning: {
    label: 'color-text-icon-warning',
    value: 'rgb(227, 106, 25)',
    description: 'Icon color for indicating a warning.',
  },
  colorTextInverse: {
    label: 'color-text-inverse',
    value: 'rgb(255, 255, 255)',
    description:
      'Inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.',
  },
  colorTextInverseWeak: {
    label: 'color-text-inverse-weak',
    value: 'rgb(174, 178, 193)',
    description:
      'Weak inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.',
  },
  colorTextInverseWeaker: {
    label: 'color-text-inverse-weaker',
    value: 'rgb(96, 107, 133)',
    description:
      'Weaker inverse text color for dark backgrounds. Must pass AA color contrast with color-background-body-inverse.',
  },
  colorTextLink: {
    label: 'color-text-link',
    value: 'rgb(2, 99, 224)',
    description: 'Link text',
  },
  colorTextLinkDestructive: {
    label: 'color-text-link-destructive',
    value: 'rgb(214, 31, 31)',
    description: 'Destructive link text',
  },
  colorTextLinkDestructiveStrong: {
    label: 'color-text-link-destructive-strong',
    value: 'rgb(173, 17, 17)',
    description: 'Strong shade of destructive link text to be used in interactions',
  },
  colorTextLinkDestructiveStronger: {
    label: 'color-text-link-destructive-stronger',
    value: 'rgb(74, 11, 11)',
    description: 'Stronger shade of destructive link text to be used in interactions',
  },
  colorTextLinkDestructiveStrongest: {
    label: 'color-text-link-destructive-strongest',
    value: 'rgb(49, 12, 12)',
    description: 'Strongest shade of destructive link text to be used in interactions',
  },
  colorTextLinkDestructiveWeak: {
    label: 'color-text-link-destructive-weak',
    value: 'rgb(246, 177, 177)',
    description: 'Weak shade of destructive link text to be used in interactions',
  },
  colorTextLinkStrong: {
    label: 'color-text-link-strong',
    value: 'rgb(0, 20, 137)',
    description: 'Strong shade of link text to be used in interactions',
  },
  colorTextLinkStronger: {
    label: 'color-text-link-stronger',
    value: 'rgb(3, 11, 93)',
    description: 'Stronger shade of link text to be used in interactions',
  },
  colorTextLinkStrongest: {
    label: 'color-text-link-strongest',
    value: 'rgb(6, 3, 58)',
    description: 'Strongest shade of link text to be used in interactions',
  },
  colorTextLinkWeak: {
    label: 'color-text-link-weak',
    value: 'rgb(153, 205, 255)',
    description: 'Weak shade of link text to be used in interactions',
  },
  colorTextNeutral: {
    label: 'color-text-neutral',
    value: 'rgb(0, 20, 137)',
    description: 'Color for text indicating a neutral status.',
  },
  colorTextNew: {
    label: 'color-text-new',
    value: 'rgb(109, 46, 209)',
    description: 'Color for text indicating a new status.',
  },
  colorTextSuccess: {
    label: 'color-text-success',
    value: 'rgb(14, 124, 58)',
    description: 'Text color for success text.',
  },
  colorTextWarning: {
    label: 'color-text-warning',
    value: 'rgb(141, 49, 24)',
    description: 'Color for warning text.',
  },
  colorTextWarningStrong: {
    label: 'color-text-warning-strong',
    value: 'rgb(141, 49, 24)',
    description: 'Color for dark warning text.',
  },
  colorTextWeak: {
    label: 'color-text-weak',
    value: 'rgb(96, 107, 133)',
    description: 'Weak body text for visual hierarchy.',
  },
  colorTextWeaker: {
    label: 'color-text-weaker',
    value: 'rgb(174, 178, 193)',
    description: 'Weaker body text for visual hierarchy. Inaccessible unless used on disabled controls.',
  },
  colorTextWeakest: {
    label: 'color-text-weakest',
    value: 'rgb(255, 255, 255)',
    description: 'Weakest body text for visual hierarchy. Inaccessible unless used on disabled controls.',
  },
};
