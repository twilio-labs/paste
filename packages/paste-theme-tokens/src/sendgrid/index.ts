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

export const SendGridTheme = {
  shadows: boxShadows,
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  widths: sizings,
  maxWidths: sizings,
  minWidths: sizings,
  heights: sizings,
  maxHeights: sizings,
  minHeights: sizings,
  sizes: sizings,
  iconSizes: {
    sizeIcon10: sizings.sizeIcon10,
    sizeIcon20: sizings.sizeIcon20,
    sizeIcon30: sizings.sizeIcon30,
    sizeIcon40: sizings.sizeIcon40,
  },
  space: spacings,
  textColors,
  zIndices,
};
