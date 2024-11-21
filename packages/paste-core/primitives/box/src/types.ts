import type { CustomTheme } from "@twilio-paste/customization";
import type {
  BackgroundProps,
  BorderProps,
  CSSProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "@twilio-paste/style-props";

import type { PseudoPropStyles } from "./PseudoPropStyles";

export interface BoxBaseStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    CSSProps {}

export type BoxPseudoStyleProps = Partial<Record<keyof typeof PseudoPropStyles, BoxBaseStyleProps>>;

export interface BoxStyleProps extends BoxBaseStyleProps, BoxPseudoStyleProps {}

// Omits potential clashes from our style props with HTMLAttributes (i.e.: color)
export interface BoxElementProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof BoxBaseStyleProps> {
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  accept?: string;
  /**
   * Controls the HTML element that that will be rendered in the DOM.
   *
   * @type {keyof JSX.IntrinsicElements}
   * @memberof BoxElementProps
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  type?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  alt?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  src?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  href?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  rel?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  target?: string;
  /**
   * Same as HTML
   *
   * @type {boolean}
   * @memberof BoxElementProps
   */
  multiple?: boolean;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  label?: string;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  datetime?: string;
  /**
   * Used to set a custom element name for customization.
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  element?: string;
  /**
   * Used to style custom variants via customization.
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  variant?: string;
  /**
   * Same as HTML
   *
   * @type {boolean}
   * @memberof BoxElementProps
   */
  disabled?: boolean;
  /**
   * Same as HTML
   *
   * @type {string}
   * @memberof BoxElementProps
   */
  cite?: string;
}

export interface BoxProps extends BoxElementProps, BoxStyleProps {}

export type StyledBoxProps = BoxProps & { "data-paste-element": string; theme: CustomTheme };
