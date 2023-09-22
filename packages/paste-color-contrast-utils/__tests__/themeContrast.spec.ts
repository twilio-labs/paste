import {
  backgroundColors,
  borderColors,
  borderWidths,
  boxShadows,
  dataVisualization,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens';
import {
  backgroundColors as darkBackgroundColors,
  borderColors as darkBorderColors,
  borderWidths as darkBorderWidths,
  boxShadows as darkBoxShadows,
  dataVisualization as darkDataVisualization,
  fontSizes as darkFontSizes,
  fontWeights as darkFontWeights,
  fonts as darkFonts,
  lineHeights as darkLineHeights,
  radii as darkRadii,
  sizings as darkSizings,
  spacings as darkSpacings,
  textColors as darkTextColors,
  zIndices as darkZIndices,
} from '@twilio-paste/design-tokens/dist/themes/dark/tokens.common';
import {
  backgroundColors as twilioDarkBackgroundColors,
  borderColors as twilioDarkBorderColors,
  borderWidths as twilioDarkBorderWidths,
  boxShadows as twilioDarkBoxShadows,
  dataVisualization as twilioDarkDataVisualization,
  fontSizes as twilioDarkFontSizes,
  fontWeights as twilioDarkFontWeights,
  fonts as twilioDarkFonts,
  lineHeights as twilioDarkLineHeights,
  radii as twilioDarkRadii,
  sizings as twilioDarkSizings,
  spacings as twilioDarkSpacings,
  textColors as twilioDarkTextColors,
  zIndices as twilioDarkZIndices,
} from '@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.common';
import {
  backgroundColors as twilioBackgroundColors,
  borderColors as twilioBorderColors,
  borderWidths as twilioBorderWidths,
  boxShadows as twilioBoxShadows,
  dataVisualization as twilioDataVisualization,
  fontSizes as twilioFontSizes,
  fontWeights as twilioFontWeights,
  fonts as twilioFonts,
  lineHeights as twilioLineHeights,
  radii as twilioRadii,
  sizings as twilioSizings,
  spacings as twilioSpacings,
  textColors as twilioTextColors,
  zIndices as twilioZIndices,
} from '@twilio-paste/design-tokens/dist/themes/twilio/tokens.common';

import {
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements,
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
} from '../src/utils';

const defaultThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements({
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  dataVisualization,
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
  dataVisualization,
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
    dataVisualization,
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
  dataVisualization: darkDataVisualization,
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
  dataVisualization: darkDataVisualization,
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
    dataVisualization: darkDataVisualization,
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
const twilioThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements({
  backgroundColors: twilioBackgroundColors,
  borderColors: twilioBorderColors,
  borderWidths: twilioBorderWidths,
  radii: twilioRadii,
  dataVisualization: twilioDataVisualization,
  fonts: twilioFonts,
  fontSizes: twilioFontSizes,
  fontWeights: twilioFontWeights,
  lineHeights: twilioLineHeights,
  boxShadows: twilioBoxShadows,
  sizings: twilioSizings,
  spacings: twilioSpacings,
  textColors: twilioTextColors,
  zIndices: twilioZIndices,
});
const twilioThemeUiControlColorContrastRatings = getContrastRatingsOfTokensWithUIControlContrastRequirements({
  backgroundColors: twilioBackgroundColors,
  borderColors: twilioBorderColors,
  borderWidths: twilioBorderWidths,
  radii: twilioRadii,
  dataVisualization: twilioDataVisualization,
  fonts: twilioFonts,
  fontSizes: twilioFontSizes,
  fontWeights: twilioFontWeights,
  lineHeights: twilioLineHeights,
  boxShadows: twilioBoxShadows,
  sizings: twilioSizings,
  spacings: twilioSpacings,
  textColors: twilioTextColors,
  zIndices: twilioZIndices,
});
const twilioThemeDataVisualizationColorContrastRatings =
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements({
    backgroundColors: twilioBackgroundColors,
    borderColors: twilioBorderColors,
    borderWidths: twilioBorderWidths,
    radii: twilioRadii,
    dataVisualization: twilioDataVisualization,
    fonts: twilioFonts,
    fontSizes: twilioFontSizes,
    fontWeights: twilioFontWeights,
    lineHeights: twilioLineHeights,
    boxShadows: twilioBoxShadows,
    sizings: twilioSizings,
    spacings: twilioSpacings,
    textColors: twilioTextColors,
    zIndices: twilioZIndices,
  });
const twilioDarkThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements({
  backgroundColors: twilioDarkBackgroundColors,
  borderColors: twilioDarkBorderColors,
  borderWidths: twilioDarkBorderWidths,
  radii: twilioDarkRadii,
  dataVisualization: twilioDarkDataVisualization,
  fonts: twilioDarkFonts,
  fontSizes: twilioDarkFontSizes,
  fontWeights: twilioDarkFontWeights,
  lineHeights: twilioDarkLineHeights,
  boxShadows: twilioDarkBoxShadows,
  sizings: twilioDarkSizings,
  spacings: twilioDarkSpacings,
  textColors: twilioDarkTextColors,
  zIndices: twilioDarkZIndices,
});
const twilioDarkThemeUiControlColorContrastRatings = getContrastRatingsOfTokensWithUIControlContrastRequirements({
  backgroundColors: twilioDarkBackgroundColors,
  borderColors: twilioDarkBorderColors,
  borderWidths: twilioDarkBorderWidths,
  radii: twilioDarkRadii,
  dataVisualization: twilioDarkDataVisualization,
  fonts: twilioDarkFonts,
  fontSizes: twilioDarkFontSizes,
  fontWeights: twilioDarkFontWeights,
  lineHeights: twilioDarkLineHeights,
  boxShadows: twilioDarkBoxShadows,
  sizings: twilioDarkSizings,
  spacings: twilioDarkSpacings,
  textColors: twilioDarkTextColors,
  zIndices: twilioDarkZIndices,
});
const twilioDarkThemeDataVisualizationColorContrastRatings =
  getContrastRatingsOfTokensWithDataVisualizationContrastRequirements({
    backgroundColors: twilioDarkBackgroundColors,
    borderColors: twilioDarkBorderColors,
    borderWidths: twilioDarkBorderWidths,
    radii: twilioDarkRadii,
    dataVisualization: twilioDarkDataVisualization,
    fonts: twilioDarkFonts,
    fontSizes: twilioDarkFontSizes,
    fontWeights: twilioDarkFontWeights,
    lineHeights: twilioDarkLineHeights,
    boxShadows: twilioDarkBoxShadows,
    sizings: twilioDarkSizings,
    spacings: twilioDarkSpacings,
    textColors: twilioDarkTextColors,
    zIndices: twilioDarkZIndices,
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

describe('Twilio Theme', () => {
  describe('Text color contrast ratio for token pairs', () => {
    test.each(twilioThemeTextColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('UI Control color contrast ratio for token pairs', () => {
    test.each(twilioThemeUiControlColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(3);
    });
  });
  describe('Data visualization color contrast ratio for token pairs', () => {
    test.each(twilioThemeDataVisualizationColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(2);
    });
  });
});

describe('Twilio Dark Theme', () => {
  describe('Text color contrast ratio for token pairs', () => {
    test.each(twilioDarkThemeTextColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('UI Control color contrast ratio for token pairs', () => {
    test.each(twilioDarkThemeUiControlColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(3);
    });
  });
  describe('Data visualization color contrast ratio for token pairs', () => {
    test.each(twilioDarkThemeDataVisualizationColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(2);
    });
  });
});
