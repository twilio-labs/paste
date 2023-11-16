import type { CustomTheme } from "@twilio-paste/customization";
import type {
  CursorProperty,
  Display,
  OutlineProperty,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionDelayProperty,
  TransitionProperty,
  TypographyProps,
  VerticalAlign,
} from "@twilio-paste/style-props";

import type { PseudoPropStyles } from "./PseudoPropStyles";

export interface TextBaseStyleProps extends OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {
  /**
   * Sets the CSS content property
   *
   * @type {string}
   * @memberof TextBaseStyleProps
   */
  content?: string;
  /**
   * Style prop of CSS cursor value
   *
   * @type {CursorProperty}
   * @memberof TextBaseStyleProps
   */
  cursor?: CursorProperty;
  /**
   * Responsive style prop of CSS display values
   *
   * @type {Display}
   * @memberof TextBaseStyleProps
   */
  display?: Display;
  /**
   * Style prop of CSS outline value
   *
   * @type {OutlineProperty}
   * @memberof TextBaseStyleProps
   */
  outline?: OutlineProperty;
  /**
   * Style prop of CSS transition value
   *
   * @type {TransitionProperty}
   * @memberof TextBaseStyleProps
   */
  transition?: TransitionProperty;
  /**
   * Style prop of CSS transition-delay value
   *
   * @type {TransitionDelayProperty}
   * @memberof TextBaseStyleProps
   */
  transitionDelay?: TransitionDelayProperty;
  /**
   * Responsive style prop of CSS vertical-align values
   *
   * @type {VerticalAlign}
   * @memberof TextBaseStyleProps
   */
  verticalAlign?: VerticalAlign;
}

export type TextPseudoStyleProps = {
  [key in keyof typeof PseudoPropStyles]?: TextStyleProps;
};

export interface TextStyleProps extends TextBaseStyleProps, TextPseudoStyleProps {}

export interface TextElementProps extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  /**
   * Controls the HTML element that that will be rendered in the DOM.
   *
   * @type {keyof JSX.IntrinsicElements}
   * @memberof TextElementProps
   */
  as: keyof JSX.IntrinsicElements;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof TextElementProps
   */
  href?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof TextElementProps
   */
  rel?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof TextElementProps
   */
  target?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof TextElementProps
   */
  dateTime?: string;
  /**
   * Used to set a custom element name for customization.
   *
   * @type {string}
   * @memberof TextElementProps
   */
  element?: string;
  /**
   * Used to style custom variants via customization.
   *
   * @type {string}
   * @memberof TextElementProps
   */
  variant?: string;
}

export interface TextProps extends TextElementProps, TextStyleProps {}

export type StyledTextProps = TextProps & { "data-paste-element": string; theme: CustomTheme };
