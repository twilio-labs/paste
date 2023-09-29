import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface DisplayPillGroupProps extends HTMLPasteProps<"ol"> {
  "aria-label": string;
  element?: string;
  children: React.ReactNode;
}

/**
 * Use the DisplayPillGroup to statically represent a collection of data. DisplayPillGroups should not be used
 * inside of forms, or for editing data.
 * @example
 * <DisplayPillGroup aria-label="Your favorite sports:">
 *   ...
 * </DisplayPillGroup>
 * @see https://paste.twilio.design/components/display-pill-group
 */
export const DisplayPillGroup = React.forwardRef<HTMLUListElement, DisplayPillGroupProps>(
  ({ element = "DISPLAY_PILL_GROUP", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        as="ul"
        margin="space0"
        padding="space0"
        display="flex"
        flexWrap="wrap"
        rowGap="space20"
        columnGap="space20"
      >
        {props.children}
      </Box>
    );
  },
);

DisplayPillGroup.displayName = "DisplayPillGroup";
