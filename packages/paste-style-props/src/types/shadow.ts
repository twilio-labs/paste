import type { ResponsiveValue } from "@twilio-paste/styling-library";
// https://styled-system.com/api/#shadow
import type { ThemeShape } from "@twilio-paste/theme";

import type { StyleReset } from "./helpers";

// Tokens
export type BoxShadowOptions = keyof ThemeShape["shadows"] | "none";
export type BoxShadow = ResponsiveValue<BoxShadowOptions>;

// Styled-system grouping
export interface ShadowProps {
  /**
   * Responsive prop of BoxShadow tokens for the CSS `box-shadow` property
   *
   * @type {BoxShadow}
   * @memberof ShadowProps
   */
  boxShadow?: BoxShadow;
  /**
   * Style prop for the CSS `text-shadow` property
   *
   * @type {StyleReset}
   * @memberof ShadowProps
   */
  textShadow?: StyleReset;
}
