import type {
  backgroundColors as BackgroundColors,
  borderColors as BorderColors,
  borderWidths as BorderWidths,
  radii as Radii,
  fonts as Fonts,
  fontSizes as FontSizes,
  fontWeights as FontWeights,
  lineHeights as LineHeights,
  boxShadows as BoxShadows,
  sizings as Sizings,
  spacings as Spacings,
  textColors as TextColors,
  zIndices as ZIndices,
} from '@twilio-paste/design-tokens';

import type {GenericThemeShape} from './types/GenericThemeShape';

interface GenerateThemeFromTokensArgs {
  backgroundColors: Partial<{[key in keyof typeof BackgroundColors]: any}>;
  borderColors: Partial<{[key in keyof typeof BorderColors]: any}>;
  borderWidths: Partial<{[key in keyof typeof BorderWidths]: any}>;
  radii: Partial<{[key in keyof typeof Radii]: any}>;
  fonts: Partial<{[key in keyof typeof Fonts]: any}>;
  fontSizes: Partial<{[key in keyof typeof FontSizes]: any}>;
  fontWeights: Partial<{[key in keyof typeof FontWeights]: any}>;
  lineHeights: Partial<{[key in keyof typeof LineHeights]: any}>;
  boxShadows: Partial<{[key in keyof typeof BoxShadows]: any}>;
  // there are some sizes we expect must appear to generate breakpoints and icons sizes
  sizings: {[key in keyof typeof Sizings]: any};
  spacings: Partial<{[key in keyof typeof Spacings]: any}>;
  textColors: Partial<{[key in keyof typeof TextColors]: any}>;
  zIndices: Partial<{[key in keyof typeof ZIndices]: any}>;
}

export const generateThemeFromTokens = ({
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  sizings,
  spacings,
  textColors,
  zIndices,
}: GenerateThemeFromTokensArgs): GenericThemeShape => {
  // default breakpoints
  const breakpoints = [sizings.size40, sizings.size100, sizings.size120];

  return {
    shadows: boxShadows,
    borderWidths,
    radii,
    breakpoints,
    textColors,
    borderColors,
    backgroundColors,
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
      sizeIcon50: sizings.sizeIcon50,
      sizeIcon60: sizings.sizeIcon60,
      sizeIcon70: sizings.sizeIcon70,
      sizeIcon80: sizings.sizeIcon80,
      sizeIcon90: sizings.sizeIcon90,
      sizeIcon100: sizings.sizeIcon100,
      sizeIcon110: sizings.sizeIcon110,
    },
    space: spacings,
    zIndices,
  };
};
