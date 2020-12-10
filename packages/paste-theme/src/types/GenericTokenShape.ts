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

export interface GenericTokenShape {
  backgroundColors: Partial<{[key in keyof typeof backgroundColors]: any}>;
  borderColors: Partial<{[key in keyof typeof borderColors]: any}>;
  borderWidths: Partial<{[key in keyof typeof borderWidths]: any}>;
  radii: Partial<{[key in keyof typeof radii]: any}>;
  colors: Partial<{[key in keyof typeof colors]: any}>;
  fonts: Partial<{[key in keyof typeof fonts]: any}>;
  fontSizes: Partial<{[key in keyof typeof fontSizes]: any}>;
  fontWeights: Partial<{[key in keyof typeof fontWeights]: any}>;
  lineHeights: Partial<{[key in keyof typeof lineHeights]: any}>;
  boxShadows: Partial<{[key in keyof typeof boxShadows]: any}>;
  sizings: Partial<{[key in keyof typeof sizings]: any}>;
  spacings: Partial<{[key in keyof typeof spacings]: any}>;
  textColors: Partial<{[key in keyof typeof textColors]: any}>;
  zIndices: Partial<{[key in keyof typeof zIndices]: any}>;
}
