import { Box } from "@twilio-paste/box";
import { DetailText } from "@twilio-paste/detail-text";
import * as React from "react";

import { TimelineGroupContext } from "./TimelineContext";
import { TimelineItemIcon } from "./TimelineItemIcon";
import type { TimelineItemGroupProps } from "./types";

export const TimelineItemGroup = React.forwardRef<HTMLLIElement, TimelineItemGroupProps>(
  ({ children, timestamp, icon, element = "TIMELINE_ITEM_GROUP", ...props }, ref) => {
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
        {...props}
      >
        <Box
          element={`${element}_SEPARATOR`}
          display="flex"
          width="sizeBase50"
          flexDirection="column"
          alignItems="center"
        >
          <TimelineItemIcon icon={icon} />
        </Box>

        <Box element={`${element}_CONTENT_WRAPPER`} width="100%">
          <Box element={`${element}_TIMESTAMP`} marginTop="space10" marginBottom="space30">
            <DetailText element={`${element}_TIMESTAMP_DETAIL_TEXT`} marginTop="space0">
              {timestamp}
            </DetailText>
          </Box>

          <Box element={`${element}_CONTENT`} as="ol" margin="space0" padding="space0">
            <TimelineGroupContext.Provider value={true}>{children}</TimelineGroupContext.Provider>
          </Box>
        </Box>
      </Box>
    );
  },
);

TimelineItemGroup.displayName = "TimelineItemGroup";
