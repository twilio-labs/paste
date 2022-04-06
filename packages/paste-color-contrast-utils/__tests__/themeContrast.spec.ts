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
import {
  backgroundColors as darkBackgroundColors,
  borderColors as darkBorderColors,
  borderWidths as darkBorderWidths,
  radii as darkRadii,
  colors as darkColors,
  fonts as darkFonts,
  fontSizes as darkFontSizes,
  fontWeights as darkFontWeights,
  lineHeights as darkLineHeights,
  boxShadows as darkBoxShadows,
  sizings as darkSizings,
  spacings as darkSpacings,
  textColors as darkTextColors,
  zIndices as darkZIndices,
} from '@twilio-paste/design-tokens/dist/themes/dark/tokens.common';
import {
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements,
} from '../src/utils';

const defaultThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements({
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
});
const defaultThemeUiControlColorContrastRatings = getContrastRatingsOfTokensWithUIControlContrastRequirements({
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
});
const defaultThemeDataVisualizationColorContrastRatings =
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements({
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
  });

const darkThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements({
  backgroundColors: darkBackgroundColors,
  borderColors: darkBorderColors,
  borderWidths: darkBorderWidths,
  radii: darkRadii,
  colors: darkColors,
  fonts: darkFonts,
  fontSizes: darkFontSizes,
  fontWeights: darkFontWeights,
  lineHeights: darkLineHeights,
  boxShadows: darkBoxShadows,
  sizings: darkSizings,
  spacings: darkSpacings,
  textColors: darkTextColors,
  zIndices: darkZIndices,
});
const darkThemeUiControlColorContrastRatings = getContrastRatingsOfTokensWithUIControlContrastRequirements({
  backgroundColors: darkBackgroundColors,
  borderColors: darkBorderColors,
  borderWidths: darkBorderWidths,
  radii: darkRadii,
  colors: darkColors,
  fonts: darkFonts,
  fontSizes: darkFontSizes,
  fontWeights: darkFontWeights,
  lineHeights: darkLineHeights,
  boxShadows: darkBoxShadows,
  sizings: darkSizings,
  spacings: darkSpacings,
  textColors: darkTextColors,
  zIndices: darkZIndices,
});
const darkThemeDataVisualizationColorContrastRatings =
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements({
    backgroundColors: darkBackgroundColors,
    borderColors: darkBorderColors,
    borderWidths: darkBorderWidths,
    radii: darkRadii,
    colors: darkColors,
    fonts: darkFonts,
    fontSizes: darkFontSizes,
    fontWeights: darkFontWeights,
    lineHeights: darkLineHeights,
    boxShadows: darkBoxShadows,
    sizings: darkSizings,
    spacings: darkSpacings,
    textColors: darkTextColors,
    zIndices: darkZIndices,
  });

describe('Default Theme', () => {
  describe('Text color contrast ratio for token pairs', () => {
    test.each(defaultThemeTextColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('UI Control color contrast ratio for token pairs', () => {
    test.each(defaultThemeUiControlColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(3);
    });
  });
  describe('Data visualization color contrast ratio for token pairs', () => {
    test.each(defaultThemeDataVisualizationColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(2.25);
    });
  });
});

describe('Dark Theme', () => {
  describe('Text color contrast ratio for token pairs', () => {
    test.each(darkThemeTextColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('UI Control color contrast ratio for token pairs', () => {
    test.each(darkThemeUiControlColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(3);
    });
  });
  describe('Data visualization color contrast ratio for token pairs', () => {
    test.each(darkThemeDataVisualizationColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(2);
    });
  });
});
