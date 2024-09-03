import { Box, type BoxProps } from "@twilio-paste/box";
import { DetailText } from "@twilio-paste/detail-text";
import * as React from "react";

import { TimelineContext, TimelineGroupContext } from "./TimelineContext";
import { TimelineItemIcon } from "./TimelineItemIcon";
import type { TimelineItemProps } from "./types";

export const TimelineItemGroup = React.forwardRef<
  HTMLDivElement,
  Omit<TimelineItemProps, "title"> & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider.
     *
     * @default "TIMELINE_ITEM_GROUP"
     * @type {BoxProps["element"]}
     * @memberof TimelineProps
     */
    element?: BoxProps["element"];
  }
>(({ children, timestamp, icon, element = "TIMELINE_ITEM_GROUP" }, ref) => {
  const { orientation } = React.useContext(TimelineContext);

  if (!orientation) {
    throw new Error("TimelineItemGroup must be used within a Timeline component");
  }

  return (
    <Box
      element={element}
      ref={ref}
      as="li"
      position="relative"
      display="flex"
      columnGap="space50"
      rowGap="space50"
      flexShrink={0}
      flexDirection={orientation === "horizontal" ? "column" : "row"}
      paddingX="space0"
    >
      <Box
        display="flex"
        width={orientation === "horizontal" ? "initial" : "20px"}
        flexDirection={orientation === "horizontal" ? "row" : "column"}
        alignItems="center"
      >
        <TimelineItemIcon title="Current" icon={icon} />
      </Box>

      <Box>
        <Box marginTop="space10" marginBottom="space30">
          <DetailText marginTop="space0">{timestamp}</DetailText>
        </Box>

        <Box as="ol" margin="space0" padding="space0">
          <TimelineGroupContext.Provider value={true}>{children}</TimelineGroupContext.Provider>
        </Box>
      </Box>
    </Box>
  );
});

TimelineItemGroup.displayName = "TimelineItemGroup";
