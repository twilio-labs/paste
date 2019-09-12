import {
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens/dist/themes/sendgrid/tokens.es6';

const breakpoints = [sizings.size40, sizings.size100, sizings.size120];
const space = {...spacings};
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
const shadows = {...boxShadows};
export const SendGridTheme = {
  backgroundColors,
  borderColors,
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  heights,
  lineHeights,
  maxWidths,
  minWidths,
  radii,
  shadows,
  space,
  textColors,
  widths,
  zIndices,
};
