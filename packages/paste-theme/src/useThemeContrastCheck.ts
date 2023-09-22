import {
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
  getNumberOfTextFailures,
  getNumberOfUIControlFailures,
} from '@twilio-paste/color-contrast-utils';
import type { TokenPairContrastRating } from '@twilio-paste/design-tokens/types';

import { generateTokensFromTheme } from './generateTokensFromTheme';
import { useTheme } from './useTheme';

export interface UseThemeContrastCheckReturn {
  /**
   * array of tokens pairs that have a text color contrast ratio requirement
   * of 4:5:1
   */
  textContrastRating: TokenPairContrastRating[];
  /**
   * array of token pairs that have a UI control contrast ratio requirement
   * of 3:1
   */
  uiControlContrastRating: TokenPairContrastRating[];
  /**
   * total number of failures for text contrast requirements
   */
  numberOfTextFailures: number;
  /**
   * total number of failures for ui control contrast ratio requirements
   */
  numberOfUIControlFailures: number;
  /**
   * total number of all color contrast ratio failures
   */
  totalFailures: number;
}

/**
 * useThemeContrastCheck is a React hook that when used within a Paste
 * based web application, will automatically detect the color contrast ratio
 * rating of the currently used theme, based on the design token pairings
 * annotated in the Design Tokens
 */
export const useThemeContrastCheck = (): UseThemeContrastCheckReturn => {
  const theme = useTheme();
  const designTokens = generateTokensFromTheme(theme);

  const textContrastRating = getContrastRatingsOfTokensWithTextContrastRequirements(designTokens);
  const uiControlContrastRating = getContrastRatingsOfTokensWithUIControlContrastRequirements(designTokens);

  const numberOfTextFailures = getNumberOfTextFailures(textContrastRating);
  const numberOfUIControlFailures = getNumberOfUIControlFailures(uiControlContrastRating);
  const totalFailures = numberOfTextFailures + numberOfUIControlFailures;

  return {
    textContrastRating,
    uiControlContrastRating,
    numberOfTextFailures,
    numberOfUIControlFailures,
    totalFailures,
  };
};
