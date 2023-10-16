import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { InPageNavigationContext } from "./InPageNavigationContext";
import type { Orientation, Variants } from "./types";

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  children?: React.ReactNode;
  element?: BoxProps["element"];
  marginBottom?: "space0";
  "aria-label": string;
  variant?: Variants;
  orientation?: Orientation;
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  (
    {
      element = "IN_PAGE_NAVIGATION",
      variant = "default",
      orientation = "horizontal",
      marginBottom,
      children,
      ...props
    },
    ref,
  ) => {
    const isFullWidth = variant === "fullWidth" || variant === "inverse_fullWidth";

    if (orientation === "vertical") {
      return (
        <InPageNavigationContext.Provider value={{ variant, orientation }}>
          <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
            <Box
              as="ul"
              listStyleType="none"
              element={`${element}_ITEMS`}
              display="flex"
              flexDirection="column"
              margin="space0"
              padding="space0"
              minWidth="size20"
              maxWidth="size40"
              rowGap="space20"
            >
              {children}
            </Box>
          </Box>
        </InPageNavigationContext.Provider>
      );
    }

    return (
      <InPageNavigationContext.Provider value={{ variant, orientation }}>
        <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
          <Box
            as="ul"
            listStyleType="none"
            element={`${element}_ITEMS`}
            display="flex"
            justifyContent={isFullWidth ? "space-evenly" : "flex-start"}
            columnGap={!isFullWidth ? "space80" : "space0"}
            padding="space0"
            margin="space0"
            marginBottom={marginBottom || "space60"}
          >
            {children}
          </Box>
        </Box>
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
