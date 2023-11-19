import type { TextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type AsTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "label" | "span" | "header";
export type HeadingVariants = "heading10" | "heading20" | "heading30" | "heading40" | "heading50" | "heading60";

export interface HeadingProps extends HTMLPasteProps<AsTags>, Pick<TextProps, "display"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'HEADING'
   * @type {TextProps['element']}
   * @memberof HeadingProps
   */
  element?: TextProps["element"];
  /**
   * The HTML element to render.
   *
   * @type {AsTags}
   * @memberof HeadingProps
   */
  as: AsTags;
  /**
   * Same as the HTML `id` attribute.
   *
   * @type {string}
   * @memberof HeadingProps
   */
  id?: string;
  /**
   * Currently we only allow `space0` to remove bottom margin
   *
   * @type {'space0'}
   * @memberof HeadingProps
   */
  marginBottom?: "space0";
  /**
   * Style variant to apply to the heading, affects the visual appearance of the heading.
   *
   * @default 'heading20'
   * @type {HeadingVariants}
   * @memberof HeadingProps
   */
  variant: HeadingVariants;
}
