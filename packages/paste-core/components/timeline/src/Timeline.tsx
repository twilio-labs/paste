import { Box, type BoxStyleProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import React from "react";

import { TimelineContext } from "./TimelineContext";
import type { Orientation, TimelineProps } from "./types";

const VariantStyles: {
  [key in Orientation]: BoxStyleProps;
} = {
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  horizontal: {
    alignItems: "center",
    flexWrap: "nowrap",
  },
};

const ItemSeparatortyles: {
  [key in Orientation]: Record<string, Record<string, string | BoxStyleProps>>;
} = {
  vertical: {
    "li>div:first-child::after": {
      content: "''",
      borderLeftWidth: "borderWidth10",
      borderLeftStyle: "solid",
      borderLeftColor: "colorBorderWeaker",
      minHeight: "32px",
      flexGrow: "1",
    },
  },
  horizontal: {
    "li>div:first-child": {
      "&::after, &::before": {
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

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, element = "TIMELINE", ...props }, ref) => {
    const ContainerStyled = styled.ol(
      css({
        listStyleType: "none",
        margin: "0",
        padding: "0",
        display: "flex",
        ...VariantStyles.vertical,
        ...ItemSeparatortyles.vertical,
      }),
    );

    return (
      <TimelineContext.Provider value={{ orientation: "vertical" }}>
        {/* @ts-expect-error we don't have polymorphic box typings yet */}
        <Box ref={ref} as={ContainerStyled} element={element} {...props}>
          {children}
        </Box>
      </TimelineContext.Provider>
    );
  },
);

Timeline.displayName = "Timeline";

export { Timeline };
