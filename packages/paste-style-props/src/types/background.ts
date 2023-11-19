import type { ResponsiveValue, TLengthStyledSystem } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
// https://styled-system.com/api/#background
import type { Properties } from "csstype";

import type { StyleReset } from "./helpers";

// Tokens
export type BackgroundColorOptions = keyof ThemeShape["backgroundColors"];
export type BackgroundColor = ResponsiveValue<BackgroundColorOptions | "none" | "transparent" | "inherit">;

// CSS native
export type BackgroundImageOptions = Properties["backgroundImage"];
export type BackgroundSizeOptions = Properties<TLengthStyledSystem>["backgroundSize"];
export type BackgroundPositionOptions = Properties["backgroundPosition"];
export type BackgroundRepeatOptions = Properties["backgroundRepeat"];
export type BackgroundAttachmentOptions = Properties["backgroundAttachment"];

export type BackgroundImage = ResponsiveValue<BackgroundImageOptions>;
export type BackgroundSize = ResponsiveValue<BackgroundSizeOptions>;
export type BackgroundPosition = ResponsiveValue<BackgroundPositionOptions>;
export type BackgroundRepeat = ResponsiveValue<BackgroundRepeatOptions>;
export type BackgroundAttachment = ResponsiveValue<BackgroundAttachmentOptions>;

/*
 * Styled-system grouping
 * ---
 * We add `backgroundColor` here, not in the `color` interface grouping like styled-system does
 * We also add `backgroundAttachment` here since it's logically grouped
 */
export interface BackgroundProps {
  /**
   * Style prop for the CSS `background` property
   *
   * @type {StyleReset}
   * @memberof BackgroundProps
   */
  background?: StyleReset;
  /**
   * Responsive prop of BackgroundColor tokens for the CSS `background-color` property
   *
   * @type {BackgroundColor}
   * @memberof BackgroundProps
   */
  backgroundColor?: BackgroundColor;
  /**
   * Responsive prop for the CSS `background-image` property
   *
   * @type {BackgroundImage}
   * @memberof BackgroundProps
   */
  backgroundImage?: BackgroundImage;
  /**
   * Responsive prop for the CSS `background-size` property
   *
   * @type {BackgroundSize}
   * @memberof BackgroundProps
   */
  backgroundSize?: BackgroundSize;
  /**
   * Responsive prop for the CSS `background-position` property
   *
   * @type {BackgroundPosition}
   * @memberof BackgroundProps
   */
  backgroundPosition?: BackgroundPosition;
  /**
   * Responsive prop for the CSS `background-repeat` property
   *
   * @type {BackgroundRepeat}
   * @memberof BackgroundProps
   */
  backgroundRepeat?: BackgroundRepeat;
  /**
   * Responsive prop for the CSS `background-attachment` property
   *
   * @type {BackgroundAttachment}
   * @memberof BackgroundProps
   */
  backgroundAttachment?: BackgroundAttachment;
}
