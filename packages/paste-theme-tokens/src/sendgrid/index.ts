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
  lineHeight80: '2.5rem', // #40px
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
  maxWidths,
  minWidths,
  widths,
  heights,
  radii,
  borderWidths,
  zIndices,
};
