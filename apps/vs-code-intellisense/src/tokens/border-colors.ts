import {PasteToken} from '../models/paste-token';

export const borderColors: Record<string, PasteToken> = {
  colorBorder: {
    label: 'color-border',
    value: 'rgb(136, 145, 170)',
    description: 'Default border color',
  },
  colorBorderDecorative10Weaker: {
    label: 'color-border-decorative-10-weaker',
    value: 'rgb(225, 227, 234)',
    description:
      'Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.',
  },
  colorBorderDecorative20Weaker: {
    label: 'color-border-decorative-20-weaker',
    value: 'rgb(204, 228, 255)',
    description:
      'Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.',
  },
  colorBorderDecorative30Weaker: {
    label: 'color-border-decorative-30-weaker',
    value: 'rgb(209, 250, 224)',
    description:
      'Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.',
  },
  colorBorderDecorative40Weaker: {
    label: 'color-border-decorative-40-weaker',
    value: 'rgb(231, 220, 250)',
    description:
      'Weaker border color with no semantic meaning, used for decorative purposes only. Should generally be used with matching decorative background and/or text tokens.',
  },
  colorBorderDestructive: {
    label: 'color-border-destructive',
    value: 'rgb(214, 31, 31)',
    description: 'Destructive border color',
  },
  colorBorderDestructiveStrong: {
    label: 'color-border-destructive-strong',
    value: 'rgb(117, 12, 12)',
    description: 'Destructive focus border color',
  },
  colorBorderDestructiveStronger: {
    label: 'color-border-destructive-stronger',
    value: 'rgb(74, 11, 11)',
    description: 'Stronger destructive hover border color',
  },
  colorBorderDestructiveStrongest: {
    label: 'color-border-destructive-strongest',
    value: 'rgb(49, 12, 12)',
    description: 'Strongest destructive hover border color',
  },
  colorBorderDestructiveWeak: {
    label: 'color-border-destructive-weak',
    value: 'rgb(246, 177, 177)',
    description: 'Destructive focus border color',
  },
  colorBorderDestructiveWeaker: {
    label: 'color-border-destructive-weaker',
    value: 'rgb(252, 207, 207)',
    description: 'Destructive focus border color',
  },
  colorBorderDestructiveWeakest: {
    label: 'color-border-destructive-weakest',
    value: 'rgb(254, 236, 236)',
    description: 'Destructive focus border color',
  },
  colorBorderError: {
    label: 'color-border-error',
    value: 'rgb(214, 31, 31)',
    description: 'Error border color',
  },
  colorBorderErrorStrong: {
    label: 'color-border-error-strong',
    value: 'rgb(117, 12, 12)',
    description: 'Strong error border color',
  },
  colorBorderErrorStronger: {
    label: 'color-border-error-stronger',
    value: 'rgb(74, 11, 11)',
    description: 'Stronger error border color',
  },
  colorBorderErrorWeak: {
    label: 'color-border-error-weak',
    value: 'rgb(245, 138, 138)',
    description: 'Weak error border color',
  },
  colorBorderErrorWeaker: {
    label: 'color-border-error-weaker',
    value: 'rgb(252, 207, 207)',
    description: 'Weaker error border color',
  },
  colorBorderErrorWeakest: {
    label: 'color-border-error-weakest',
    value: 'rgb(254, 236, 236)',
    description: 'Weakest error border color',
  },
  colorBorderInverse: {
    label: 'color-border-inverse',
    value: 'rgb(136, 145, 170)',
    description: 'Border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderInverseStrong: {
    label: 'color-border-inverse-strong',
    value: 'rgb(225, 227, 234)',
    description: 'Strong border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderInverseStronger: {
    label: 'color-border-inverse-stronger',
    value: 'rgb(244, 244, 246)',
    description: 'Stronger border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderInverseStrongest: {
    label: 'color-border-inverse-strongest',
    value: 'rgb(255, 255, 255)',
    description: 'Strongest border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderInverseWeaker: {
    label: 'color-border-inverse-weaker',
    value: 'rgb(57, 71, 98)',
    description: 'Weaker border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderInverseWeakest: {
    label: 'color-border-inverse-weakest',
    value: 'rgb(31, 48, 76)',
    description: 'Weakest border on inverse backgrounds. Must be used on color-background-body-inverse.',
  },
  colorBorderNeutral: {
    label: 'color-border-neutral',
    value: 'rgb(2, 99, 224)',
    description: 'Neutral border color',
  },
  colorBorderNeutralWeak: {
    label: 'color-border-neutral-weak',
    value: 'rgb(102, 179, 255)',
    description: 'Weak neutral border color',
  },
  colorBorderNeutralWeaker: {
    label: 'color-border-neutral-weaker',
    value: 'rgb(204, 228, 255)',
    description: 'Weaker neutral border color',
  },
  colorBorderNewWeaker: {
    label: 'color-border-new-weaker',
    value: 'rgb(231, 220, 250)',
    description: 'Weaker border color for something designated as new',
  },
  colorBorderPrimary: {
    label: 'color-border-primary',
    value: 'rgb(2, 99, 224)',
    description: 'Primary border color',
  },
  colorBorderPrimaryStrong: {
    label: 'color-border-primary-strong',
    value: 'rgb(0, 20, 137)',
    description: 'Strong primary border color',
  },
  colorBorderPrimaryStronger: {
    label: 'color-border-primary-stronger',
    value: 'rgb(3, 11, 93)',
    description: 'Stronger primary border color',
  },
  colorBorderPrimaryStrongest: {
    label: 'color-border-primary-strongest',
    value: 'rgb(6, 3, 58)',
    description: 'Strongest primary border color',
  },
  colorBorderPrimaryWeak: {
    label: 'color-border-primary-weak',
    value: 'rgb(153, 205, 255)',
    description: 'Weak primary border color',
  },
  colorBorderPrimaryWeaker: {
    label: 'color-border-primary-weaker',
    value: 'rgb(204, 228, 255)',
    description: 'Weaker primary border color',
  },
  colorBorderPrimaryWeakest: {
    label: 'color-border-primary-weakest',
    value: 'rgb(235, 244, 255)',
    description: 'Weakest primary border color',
  },
  colorBorderStrong: {
    label: 'color-border-strong',
    value: 'rgb(96, 107, 133)',
    description: 'Strong border color',
  },
  colorBorderSuccess: {
    label: 'color-border-success',
    value: 'rgb(20, 176, 83)',
    description: 'Success border color',
  },
  colorBorderSuccessWeak: {
    label: 'color-border-success-weak',
    value: 'rgb(54, 213, 118)',
    description: 'Weak success border color',
  },
  colorBorderSuccessWeaker: {
    label: 'color-border-success-weaker',
    value: 'rgb(209, 250, 224)',
    description: 'Weaker success border color',
  },
  colorBorderSuccessWeakest: {
    label: 'color-border-success-weakest',
    value: 'rgb(237, 253, 243)',
    description: 'Weakest success border color',
  },
  colorBorderWarning: {
    label: 'color-border-warning',
    value: 'rgb(244, 124, 34)',
    description: 'Warning border color',
  },
  colorBorderWarningWeak: {
    label: 'color-border-warning-weak',
    value: 'rgb(255, 179, 122)',
    description: 'Weak warning border color',
  },
  colorBorderWarningWeaker: {
    label: 'color-border-warning-weaker',
    value: 'rgb(253, 220, 196)',
    description: 'Weaker warning border color',
  },
  colorBorderWarningWeakest: {
    label: 'color-border-warning-weakest',
    value: 'rgb(254, 245, 238)',
    description: 'Weakest warning border color',
  },
  colorBorderWeak: {
    label: 'color-border-weak',
    value: 'rgb(202, 205, 216)',
    description: 'Weak border color',
  },
  colorBorderWeaker: {
    label: 'color-border-weaker',
    value: 'rgb(225, 227, 234)',
    description: 'Weaker border color',
  },
};
