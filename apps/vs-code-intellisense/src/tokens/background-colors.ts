import {PasteToken} from '../models/paste-token';

export const backgroundColors: Record<string, PasteToken> = {
  colorBackground: {
    label: 'color-background',
    value: 'rgb(244, 244, 246)',
    description: 'Background color used for containers.',
  },
  colorBackgroundAvailable: {
    label: 'color-background-available',
    value: 'rgb(20, 176, 83)',
    description: 'Background color used to represent an entity or person as "available".',
  },
  colorBackgroundBody: {
    label: 'color-background-body',
    value: 'rgb(255, 255, 255)',
    description: 'Background color used for the main page body.',
  },
  colorBackgroundBodyInverse: {
    label: 'color-background-body-inverse',
    value: 'rgb(18, 28, 45)',
    description: 'Inverse background color used for the main page body.',
  },
  colorBackgroundBrand: {
    label: 'color-background-brand',
    value: 'rgb(0, 20, 137)',
    description: 'Background color used for brand.',
  },
  colorBackgroundBrandHighlight: {
    label: 'color-background-brand-highlight',
    value: 'rgb(242, 47, 70)',
    description: 'Background color used for brand highlights.',
  },
  colorBackgroundBrandHighlightWeakest: {
    label: 'color-background-brand-highlight-weakest',
    value: 'rgba(242, 47, 70, 0.1)',
    description: 'Weakest background color used for brand highlights',
  },
  colorBackgroundBrandStrong: {
    label: 'color-background-brand-strong',
    value: 'rgb(3, 11, 93)',
    description: 'Strong background color used for brand.',
  },
  colorBackgroundBrandStronger: {
    label: 'color-background-brand-stronger',
    value: 'rgb(6, 3, 58)',
    description: 'Stronger background color used for brand.',
  },
  colorBackgroundBusy: {
    label: 'color-background-busy',
    value: 'rgb(244, 124, 34)',
    description: 'Background color used to represent an entity or person as "busy".',
  },
  colorBackgroundDecorative10Weakest: {
    label: 'color-background-decorative-10-weakest',
    value: 'rgb(244, 244, 246)',
    description:
      'Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.',
  },
  colorBackgroundDecorative20Weakest: {
    label: 'color-background-decorative-20-weakest',
    value: 'rgb(235, 244, 255)',
    description:
      'Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.',
  },
  colorBackgroundDecorative30Weakest: {
    label: 'color-background-decorative-30-weakest',
    value: 'rgb(237, 253, 243)',
    description:
      'Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.',
  },
  colorBackgroundDecorative40Weakest: {
    label: 'color-background-decorative-40-weakest',
    value: 'rgb(245, 240, 252)',
    description:
      'Weakest background color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative border and/or text tokens.',
  },
  colorBackgroundDestructive: {
    label: 'color-background-destructive',
    value: 'rgb(214, 31, 31)',
    description: 'Background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveStrong: {
    label: 'color-background-destructive-strong',
    value: 'rgb(117, 12, 12)',
    description: 'Strong background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveStronger: {
    label: 'color-background-destructive-stronger',
    value: 'rgb(74, 11, 11)',
    description: 'Stronger background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveStrongest: {
    label: 'color-background-destructive-strongest',
    value: 'rgb(49, 12, 12)',
    description: 'Strongest background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveWeak: {
    label: 'color-background-destructive-weak',
    value: 'rgb(246, 177, 177)',
    description: 'Weak background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveWeaker: {
    label: 'color-background-destructive-weaker',
    value: 'rgb(252, 207, 207)',
    description: 'Weaker background color used for destructive actions or highlights.',
  },
  colorBackgroundDestructiveWeakest: {
    label: 'color-background-destructive-weakest',
    value: 'rgb(254, 236, 236)',
    description: 'Weakest background color used for destructive actions or highlights.',
  },
  colorBackgroundError: {
    label: 'color-background-error',
    value: 'rgb(214, 31, 31)',
    description: 'Background color used for error alerts and toasts.',
  },
  colorBackgroundErrorStrong: {
    label: 'color-background-error-strong',
    value: 'rgb(117, 12, 12)',
    description: 'Strongest background color used for error alerts and toasts.',
  },
  colorBackgroundErrorStronger: {
    label: 'color-background-error-stronger',
    value: 'rgb(74, 11, 11)',
    description: 'Stronger error background color',
  },
  colorBackgroundErrorWeakest: {
    label: 'color-background-error-weakest',
    value: 'rgb(254, 236, 236)',
    description: 'Weakest background color used for error alerts and toasts.',
  },
  colorBackgroundInverse: {
    label: 'color-background-inverse',
    value: 'rgb(31, 48, 76)',
    description: 'Inverse background color used for containers.',
  },
  colorBackgroundInverseStrong: {
    label: 'color-background-inverse-strong',
    value: 'rgb(57, 71, 98)',
    description: 'Strong inverse background color used for containers.',
  },
  colorBackgroundNeutralWeakest: {
    label: 'color-background-neutral-weakest',
    value: 'rgb(235, 244, 255)',
    description: 'Weakest background color used for neutral or default variants.',
  },
  colorBackgroundNew: {
    label: 'color-background-new',
    value: 'rgb(245, 240, 252)',
    description: 'Background color used to represent a new status.',
  },
  colorBackgroundOffline: {
    label: 'color-background-offline',
    value: 'rgb(174, 178, 193)',
    description: 'Background color used to represent an entity or person as "offline".',
  },
  colorBackgroundOverlay: {
    label: 'color-background-overlay',
    value: 'rgba(6, 3, 58, 0.4)',
    description: 'Background color used for overlays.',
  },
  colorBackgroundPrimary: {
    label: 'color-background-primary',
    value: 'rgb(2, 99, 224)',
    description: 'Background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryStrong: {
    label: 'color-background-primary-strong',
    value: 'rgb(0, 20, 137)',
    description: 'Strong background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryStronger: {
    label: 'color-background-primary-stronger',
    value: 'rgb(3, 11, 93)',
    description: 'Stronger background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryStrongest: {
    label: 'color-background-primary-strongest',
    value: 'rgb(6, 3, 58)',
    description: 'Strongest background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryWeak: {
    label: 'color-background-primary-weak',
    value: 'rgb(153, 205, 255)',
    description: 'Weak background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryWeaker: {
    label: 'color-background-primary-weaker',
    value: 'rgb(204, 228, 255)',
    description: 'Weaker background color used for primary actions or highlights.',
  },
  colorBackgroundPrimaryWeakest: {
    label: 'color-background-primary-weakest',
    value: 'rgb(235, 244, 255)',
    description: 'Weakest background color used for primary actions or highlights.',
  },
  colorBackgroundRequired: {
    label: 'color-background-required',
    value: 'rgb(235, 86, 86)',
    description: 'Background color used to represent required form fields.',
  },
  colorBackgroundRowStriped: {
    label: 'color-background-row-striped',
    value: 'rgb(244, 244, 246)',
    description: 'Background color used for alternative striped rows.',
  },
  colorBackgroundStrong: {
    label: 'color-background-strong',
    value: 'rgb(225, 227, 234)',
    description: 'Strong background color used for containers.',
  },
  colorBackgroundStronger: {
    label: 'color-background-stronger',
    value: 'rgb(136, 145, 170)',
    description: 'Stronger background color used for containers.',
  },
  colorBackgroundStrongest: {
    label: 'color-background-strongest',
    value: 'rgb(75, 86, 113)',
    description: 'Strongest background color used for containers.',
  },
  colorBackgroundSubaccount: {
    label: 'color-background-subaccount',
    value: 'rgb(255, 241, 179)',
    description: 'Background color used for subaccounts.',
  },
  colorBackgroundSuccess: {
    label: 'color-background-success',
    value: 'rgb(20, 176, 83)',
    description: 'Background color used for success alerts and toasts.',
  },
  colorBackgroundSuccessWeakest: {
    label: 'color-background-success-weakest',
    value: 'rgb(237, 253, 243)',
    description: 'Weakest background color used for success alerts and toasts.',
  },
  colorBackgroundTrial: {
    label: 'color-background-trial',
    value: 'rgb(209, 250, 224)',
    description: 'Background color used for trial accounts.',
  },
  colorBackgroundUnavailable: {
    label: 'color-background-unavailable',
    value: 'rgb(214, 31, 31)',
    description: 'Background color used to represent an entity or person as "unavailable".',
  },
  colorBackgroundUser: {
    label: 'color-background-user',
    value: 'rgb(200, 175, 240)',
    description: 'Background color used for user avatars.',
  },
  colorBackgroundWarning: {
    label: 'color-background-warning',
    value: 'rgb(244, 124, 34)',
    description: 'Background color used for warning alerts and toasts.',
  },
  colorBackgroundWarningWeakest: {
    label: 'color-background-warning-weakest',
    value: 'rgb(254, 245, 238)',
    description: 'Weakest background color used for warning alerts and toasts.',
  },
};
