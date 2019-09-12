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
} from '@twilio-paste/design-tokens';

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
export const DefaultTheme = {
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
