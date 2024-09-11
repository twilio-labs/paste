import type { BoxProps } from "@twilio-paste/box";
import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type TimelineProps = {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TIMELINE"
   * @type {BoxProps["element"]}
   * @memberof TimelineProps
   */
  element?: BoxProps["element"];
} & HTMLPasteProps<"ol">;

export type TimelineItemProps = {
  /**
   * Title to display in the timeline item
   *
   * @type {string}
   * @memberof TimelineItemProps
   * @required
   */
  title: string;

  /**
   * Pass a Paste Icon to display in place of dot
   *
   * @type {React.FC<React.PropsWithChildren<GenericIconProps>>}
   * @memberof TimelineItemProps
   */
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;

  /**
   * Timestamp to display in the timeline item
   *
   * @type {string}
   * @memberof TimelineItemProps
   */
  timestamp?: string;

  /**
   * If true, the timeline item will be collapsible
   *
   * @type {boolean}
   * @memberof TimelineItemProps
   * @default false
   */
  collapsible?: boolean;

  /**
   * In case of collapsible timeline item and no timestamp, this will be used as the heading
   *
   * @type {string}
   * @memberof TimelineItemProps
   * @default undefined
   */
  collapsibleHeading?: string;

  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TIMELINE_ITEM"
   * @type {BoxProps["element"]}
   * @memberof TimelineItemProps
   */
  element?: BoxProps["element"];
} & HTMLPasteProps<"li">;

export type TimelineItemIconProps = {
  // Pass a Paste Icon to display in place of dot
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;

  element?: BoxProps["element"];
} & IconWrapperProps;

export type TimelineItemGroupProps = {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TIMELINE_ITEM_GROUP"
   * @type {BoxProps["element"]}
   * @memberof TimelineItemGroupProps
   */
  element?: BoxProps["element"];
} & Omit<TimelineItemProps, "title" | "element">;
