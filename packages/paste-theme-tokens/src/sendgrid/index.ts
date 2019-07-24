import {
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  shadows,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens/dist/themes/sendgrid/tokens.es6';

const breakpoints = [sizings.size40, sizings.size100, sizings.size120];
const space = {...spacings};
const lineHeights = {
  lineHeight10: '0.75rem', // #12px
  lineHeight20: '1rem', // #16px
  lineHeight30: '1.25rem', // #20px
  lineHeight40: '1.5rem', // #24px
  lineHeight50: '1.75rem', // #28px
  lineHeight60: '2rem', // #32px
  lineHeight70: '2.25rem', // #36px
};
const maxWidths = {
  ...sizings,
};
const minWidths = {
  ...sizings,
};
const widths = {
  ...sizings,
};
const heights = {
  ...sizings,
};
const borderTypes = {
  Primary: {borderColor: borderColors.colorBorderPrimary, borderStyle: 'solid'},
  PrimaryLighter: {borderColor: borderColors.colorBorderPrimaryLighter, borderStyle: 'solid'},
  PrimaryLight: {borderColor: borderColors.colorBorderPrimaryLight, borderStyle: 'solid'},
  PrimaryDark: {borderColor: borderColors.colorBorderPrimaryDark, borderStyle: 'solid'},
  PrimaryDarker: {borderColor: borderColors.colorBorderPrimaryDarker, borderStyle: 'solid'},
  Default: {borderColor: borderColors.colorBorder, borderStyle: 'solid'},
  Light: {borderColor: borderColors.colorBorderLight, borderStyle: 'solid'},
  Dark: {borderColor: borderColors.colorBorderDark, borderStyle: 'solid'},
  Destructive: {borderColor: borderColors.colorBorderDestructive, borderStyle: 'solid'},
  DestructiveLighter: {borderColor: borderColors.colorBorderDestructiveLighter, borderStyle: 'solid'},
  DestructiveLight: {borderColor: borderColors.colorBorderDestructiveLight, borderStyle: 'solid'},
  DestructiveDark: {borderColor: borderColors.colorBorderDestructiveDark, borderStyle: 'solid'},
  DestructiveDarker: {borderColor: borderColors.colorBorderDestructiveDarker, borderStyle: 'solid'},
  Error: {borderColor: borderColors.colorBorderError, borderStyle: 'solid'},
  Input: {borderColor: borderColors.colorBorderInput, borderStyle: 'solid'},
  InputFocus: {borderColor: borderColors.colorBorderInputFocus, borderStyle: 'solid'},
  InputHover: {borderColor: borderColors.colorBorderInputHover, borderStyle: 'solid'},
};
export const SendGridTheme = {
  colors,
  shadows,
  space,
  breakpoints,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  textColors,
  backgroundColors,
  borderColors,
  borderTypes,
  maxWidths,
  minWidths,
  widths,
  heights,
  radii,
  borderWidths,
  zIndices,
};
