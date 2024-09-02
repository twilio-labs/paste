import { Box } from "@twilio-paste/box";
import { DetailText } from "@twilio-paste/detail-text";
import { css, styled } from "@twilio-paste/styling-library";
import * as React from "react";

import { TimelineContext, TimelineGroupContext } from "./TimelineContext";
import { TimelineItemIcon } from "./TimelineItemIcon";
import type { TimelineItemProps } from "./types";

export const TimelineItemGroup = React.forwardRef<HTMLDivElement, Omit<TimelineItemProps, "title">>(
  ({ children, timestamp, icon }, ref) => {
    const { orientation } = React.useContext(TimelineContext);

    if (!orientation) {
      throw new Error("Item must be used within a Timeline component");
    }

    const ContainerStyled = styled.div(
      css({
        "&::after": {
          // content: '""',
        },
      }),
    );

    return (
      <Box
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
          // @ts-expect-error we don't have polymorphic box typings yet
          as={ContainerStyled}
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
  },
);

TimelineItemGroup.displayName = "TimelineItemGroup";
