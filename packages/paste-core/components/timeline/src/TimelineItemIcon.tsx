import { Box } from "@twilio-paste/box";
import { IconWrapper } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import * as React from "react";

import { TimelineContext } from "./TimelineContext";
import type { TimelineItemIconProps } from "./types";

const TimelineItemIcon = React.forwardRef<HTMLElement, TimelineItemIconProps>(
  ({ icon: Icon, as, display, element = "ICON", color }, ref) => {
    const { orientation } = React.useContext(TimelineContext);

    return Icon ? (
      <Box marginY="space20">
        {/* @ts-expect-error some error in size*/}
        <IconWrapper as={as} display={display} element={element} color={color} ref={ref} size="sizeSquare50">
          {/* @ts-expect-error some error*/}
          <Icon decorative size="sizeSquare50" />
        </IconWrapper>
      </Box>
    ) : (
      <Box
        backgroundColor="colorBackgroundStronger"
        borderRadius="borderRadiusCircle"
        width="8px"
        height="8px"
        zIndex="zIndex20"
        marginY="space30"
        marginX={orientation === "horizontal" ? "space30" : "space0"}
      />
    );
  },
);

TimelineItemIcon.displayName = "TimelineItemIcon";
export { TimelineItemIcon };
