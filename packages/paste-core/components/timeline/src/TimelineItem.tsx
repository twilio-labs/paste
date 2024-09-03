import { Box } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import React from "react";

import { TimelineContext, TimelineGroupContext } from "./TimelineContext";
import { TimelineItemCollapsible } from "./TimelineItemCollapsible";
import { TimelineItemIcon } from "./TimelineItemIcon";
import type { TimelineItemProps } from "./types";

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ children, icon, timestamp, title, collapsible = false, collapsibleHeading, element = "TIMELINE_ITEM" }, ref) => {
    const { orientation } = React.useContext(TimelineContext);
    const isGrouped = React.useContext(TimelineGroupContext);

    if (!orientation) {
      throw new Error("TimelineItem must be used within a Timeline component");
    }

    const ContainerStyled = styled.li(
      css({
        "&:last-child>div:first-child::after": {
          content: "none",
        },
        "div::after": {
          display: isGrouped ? "none" : "block",
        },
      }),
    );

    return (
      <Box
        element={element}
        // @ts-expect-error we don't have polymorphic box typings yet
        as={ContainerStyled}
        ref={ref}
        position="relative"
        display="flex"
        columnGap="space50"
        rowGap="space50"
        flexShrink={0}
        flexDirection={orientation === "horizontal" ? "column" : "row"}
        paddingX="space0"
      >
        {!isGrouped ? (
          <Box
            display="flex"
            width={orientation === "horizontal" ? "initial" : "20px"}
            flexDirection={orientation === "horizontal" ? "row" : "column"}
            alignItems="center"
          >
            <TimelineItemIcon title="Current" icon={icon} />
          </Box>
        ) : null}

        <Box
          paddingX={orientation === "horizontal" ? "space60" : "space0"}
          textAlign={orientation === "horizontal" ? "center" : "initial"}
          fontFamily="fontFamilyText"
          fontSize="fontSize20"
          lineHeight="lineHeight20"
          fontWeight="fontWeightMedium"
          display="flex"
          flexDirection="column"
          columnGap="space10"
          paddingBottom="space60"
        >
          <Box
            as="span"
            color="colorText"
            paddingY="space10"
            fontWeight="fontWeightSemibold"
            lineHeight="lineHeight20"
            fontSize="fontSize30"
            letterSpacing="-0.28px"
          >
            {title}
          </Box>

          {collapsible ? (
            <TimelineItemCollapsible timestamp={timestamp ? timestamp : collapsibleHeading}>
              {children}
            </TimelineItemCollapsible>
          ) : (
            <>
              {timestamp ? (
                <Box
                  as="span"
                  color="colorTextWeak"
                  fontWeight="fontWeightMedium"
                  lineHeight="lineHeight20"
                  fontSize="fontSize20"
                >
                  {timestamp}
                </Box>
              ) : null}

              {children}
            </>
          )}
        </Box>
      </Box>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

export { TimelineItem };
