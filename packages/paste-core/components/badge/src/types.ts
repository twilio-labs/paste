import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";

import type { BadgeVariants } from "./constants";

export type BadgeSizes = "default" | "small";

export type BadgeBaseProps = {
  children: NonNullable<React.ReactNode>;
  /**
   *
   * @default null
   * @type {BadgeVariants}
   * @memberof BadgeBaseProps
   */
  variant: typeof BadgeVariants[number];
  /**
   *
   * @default "default"
   * @type {BadgeSizes}
   * @memberof BadgeBaseProps
   */
  size?: BadgeSizes;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "BADGE"
   * @type {BoxProps["element"]}
   * @memberof BadgeBaseProps
   */
  element?: BoxProps["element"];
};
export type BadgeSpanProps = HTMLPasteProps<"span"> & {
  /**
   * Underlying HTML element to render. Can be "span", "button", or "a".
   *
   * @default null
   * @type {"span"}
   * @memberof BadgeSpanProps
   */
  as: "span";
  href?: never;
  onClick?: never;
};
export type BadgeButtonProps = HTMLPasteProps<"button"> & {
  /**
   * Underlying HTML element to render. Can be "span", "button", or "a".
   *
   * @default null
   * @type {"button"}
   * @memberof BadgeButtonProps
   */
  as: "button";
  onClick: HTMLPasteProps<"button">["onClick"];
  href?: never;
};
export type BadgeAnchorProps = HTMLPasteProps<"a"> & {
  /**
   * Underlying HTML element to render. Can be "span", "button", or "a".
   *
   * @default null
   * @type {"a"}
   * @memberof BadgeAnchorProps
   */
  as: "a";
  href: string;
  onClick?: never;
};

export type BadgeProps = BadgeBaseProps & (BadgeSpanProps | BadgeButtonProps | BadgeAnchorProps);
