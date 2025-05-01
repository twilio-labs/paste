import type { HeadingProps, HeadingVariants } from "@twilio-paste/heading";
import type { ListStyleType, Space } from "@twilio-paste/style-props";
import type { TextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type AsTags = "ol" | "ul";

export interface BaseListProps extends HTMLPasteProps<"ol">, Pick<TextProps, "listStyleType"> {
  /**
   *
   * @type {AsTags}
   * @memberof BaseListProps
   */
  as: AsTags;
  /**
   *
   * @type {Space}
   * @memberof BaseListProps
   */
  marginTop?: Space;
  /**
   *
   * @type {Space}
   * @memberof BaseListProps
   */
  marginBottom?: Space;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'LIST'
   * @type {TextProps['element']}
   * @memberof BaseListProps
   */
  element?: TextProps["element"];
  /**
   * Sets the list-style-type of the list. This is a shorthand for the CSS property: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
   *
   * @default null
   * @type {ListStyleType}
   * @memberof BaseListProps
   */
  listStyleType?: ListStyleType;
}

export type ListItemProps = HTMLPasteProps<"li"> & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'LIST_ITEM'
   * @type {TextProps['element']}
   * @memberof BaseListProps
   */
  element?: TextProps["element"];
};

export type OrderedListProps = Omit<BaseListProps, "as" | "listStyleType">;
export type UnorderedListProps = Omit<BaseListProps, "as" | "listStyleType">;

// Ordered Display List
export type OrderedDisplayListVariants = Exclude<HeadingVariants, "heading10">;
export type OrderedDisplayListProps = OrderedListProps & { variant?: OrderedDisplayListVariants };
export type OrderedDisplayListItemProps = {
  children: React.ReactNode;
  element?: TextProps["element"];
};
export type OrderedDisplayListHeadingProps = OrderedDisplayListItemProps & {
  as?: HeadingProps["as"];
};
