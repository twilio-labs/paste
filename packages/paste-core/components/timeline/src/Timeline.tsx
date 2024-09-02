import { Box, type BoxStyleProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import React from "react";

import { TimelineContext } from "./TimelineContext";
import { TimelineItemCollapsible } from "./TimelineItemCollapsible";
import { TimelineItemIcon } from "./TimelineItemIcon";
import type { Orientation, TimelineItemProps, TimelineProps } from "./types";

const VariantStyles: {
  [key in Orientation]: BoxStyleProps;
} = {
  vertical: {
    flexDirection: "column",
    rowGap: "space0",
    alignItems: "flex-start",
  },
  horizontal: {
    alignItems: "center",
    columnGap: "space0",
    flexWrap: "nowrap",
  },
};

const ItemSeparatortyles: {
  [key in Orientation]: Record<string, Record<string, string | BoxStyleProps>>;
} = {
  vertical: {
    "li>div": {
      "&:first-child::after": {
        content: "''",
        borderLeftWidth: "borderWidth10",
        borderLeftStyle: "solid",
        borderLeftColor: "colorBorderWeaker",
        minHeight: "32px",
        flexGrow: 1,
      },
    },
    "li:last-child>div:first-child::after": {
      content: "none",
    },
  },
  horizontal: {
    "li>div": {
      "&:first-child::after, &:first-child::before": {
        content: "''",
        borderBottomWidth: "borderWidth10",
        borderBottomStyle: "solid",
        borderBottomColor: "colorBorderWeaker",
        minWidth: "32px",
        flexGrow: 1,
      },
    },
    "li:first-child>div:first-child::before, li:last-child>div:first-child::after": {
      borderBottomColor: "transparent",
    },
  },
};

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(({ children, orientation = "vertical" }, ref) => {
  const ContainerStyled = styled.ol(
    css({
      listStyleType: "none",
      margin: "0",
      padding: "0",
      display: "flex",
      ...VariantStyles[orientation],
      ...ItemSeparatortyles[orientation],
    }),
  );

  return (
    <TimelineContext.Provider value={{ orientation }}>
      {/* @ts-expect-error we don't have polymorphic box typings yet */}
      <Box ref={ref} as={ContainerStyled}>
        {children}
      </Box>
    </TimelineContext.Provider>
  );
});

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ children, icon, timestamp, title, collapsible }, ref) => {
    const { orientation } = React.useContext(TimelineContext);

    if (!orientation) {
      throw new Error("Item must be used within a Timeline component");
    }

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
        >
          <TimelineItemIcon title="Current" icon={icon} />
        </Box>

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
            <TimelineItemCollapsible timestamp={timestamp}>{children}</TimelineItemCollapsible>
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

Timeline.displayName = "Timeline";
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
