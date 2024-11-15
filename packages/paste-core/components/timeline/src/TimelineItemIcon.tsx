import { Box } from "@twilio-paste/box";
import { IconWrapper } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import * as React from "react";

import type { TimelineItemIconProps } from "./types";

const TimelineItemIcon = React.forwardRef<HTMLElement, TimelineItemIconProps>(
  ({ icon: Icon, as, display, element = "TIMELINE_ITEM_ICON", color }, ref) => {
    return (
      <Box element={`${element}_WRAPPER`}>
        {Icon ? (
          <Box marginY="space20">
            <IconWrapper as={as} display={display} element={element} color={color} ref={ref} size="sizeIcon10">
              <Icon decorative size="sizeIcon10" />
            </IconWrapper>
          </Box>
        ) : (
          <Box
            element={`${element}_DOT`}
            backgroundColor="colorBackgroundStronger"
            borderRadius="borderRadiusCircle"
            size="sizeBase20"
            marginY="space30"
          />
        )}
      </Box>
    );
  },
);

TimelineItemIcon.displayName = "TimelineItemIcon";
export { TimelineItemIcon };
