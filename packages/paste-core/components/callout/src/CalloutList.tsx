import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type AsTags = "ul" | "ol";

export interface CalloutListProps extends HTMLPasteProps<AsTags> {
  /**
   *
   * @default null
   * @type {AsTags}
   * @memberof CalloutListProps
   */
  as: AsTags;
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CALLOUT_LIST"
   * @type {BoxProps["element"]}
   * @memberof CalloutListProps
   */
  element?: BoxProps["element"];
}

export const CalloutList = React.forwardRef<HTMLElement, CalloutListProps>(
  ({ element = "CALLOUT_LIST", children, as, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      element={element}
      ref={ref}
      as={as}
      margin="space0"
      display="flex"
      flexDirection="column"
      rowGap="space30"
      paddingLeft="space60"
    >
      {children}
    </Box>
  ),
);

CalloutList.displayName = "CalloutList";

export interface CalloutListItemProps extends Partial<Omit<HTMLLIElement, "children">> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CALLOUT_LIST_ITEM"
   * @type {BoxProps["element"]}
   * @memberof CalloutListProps
   */
  element?: BoxProps["element"];
}

export const CalloutListItem = React.forwardRef<HTMLLIElement, CalloutListItemProps>(
  ({ element = "CALLOUT_LIST_ITEM", children, ...props }, ref) => (
    <Text {...safelySpreadTextProps(props)} element={element} ref={ref} as="li" color="currentColor">
      {children}
    </Text>
  ),
);

CalloutListItem.displayName = "CalloutListItem";
