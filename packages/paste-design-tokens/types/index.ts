/**
 * Shape of a Paste Design Token
 */
export interface DesignToken {
  /** category of design token */
  category: string;
  comment?: string;
  name: string;
  /** value in the original format listed in the yaml file */
  originalValue: string;
  /** tokens that when paired with this token, must pass the text color contrast ratio requirement */
  text_contrast_pairing?: string[];
  /** tokens that when paired with this token, must pass the ui control color contrast ratio requirement */
  uicontrol_contrast_pairing?: string[];
  /** tokens that when paired with this token, must pass the data visualization color contrast ratio requirement */
  data_visualization_contrast_pairing?: string[];
  type: string;
  value: string;
}
/**
 * Shape of  the Paste Design Token JSON Object
 */
export interface DesignTokensJSON {
  [key: string]: DesignToken;
}

/**
 * Object represeting the color contrast rating between two design tokens
 *
 * @export
 * @interface TokenPairContrastRating
 */
export interface TokenPairContrastRating {
  foreground: string;
  foregroundValue: string;
  background: string;
  backgroundValue: string;
  /**
   * color contrast ration between the foreground and backgound color
   */
  contrast: number;
  /**
   * WCAG AA text contrast rating
   */
  aa: boolean;
  /**
   * WCAG AA text contrast rating for bold text 18px and above or large text 24px and above.
   * WCAG AA UI contrast rating for UI controls against their background
   */
  aaLarge: boolean;
  /**
   * WCAG AAA text contrast rating
   */
  aaa: boolean;
  /**
   * WCAG AAA text contrast rating for bold text 18px and above or large text 24px and above
   */
  aaaLarge: boolean;
}
